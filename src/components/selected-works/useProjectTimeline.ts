import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const desktopQuery = "(min-width: 1024px) and (min-height: 800px) and (prefers-reduced-motion: no-preference)";
const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

export default function useProjectTimeline(count: number) {
  const enhanced = useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => false);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 180, damping: 32, restDelta: 0.001 });

  const getGeometry = useCallback(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return null;
    const offset = parseFloat(getComputedStyle(stage).top) || 0;
    return {
      start: track.getBoundingClientRect().top + window.scrollY - offset,
      distance: Math.max(1, track.offsetHeight - stage.offsetHeight),
    };
  }, []);

  const update = useCallback(() => {
    const geometry = getGeometry();
    if (!geometry) return;
    const next = Math.min(1, Math.max(0, (window.scrollY - geometry.start) / geometry.distance));
    progress.set(next);
    // Keep a focused project link mounted until the visitor moves focus away.
    if (document.activeElement?.closest("[data-project-detail]") && stageRef.current?.contains(document.activeElement)) return;
    setActiveIndex(Math.round(next * (count - 1)));
  }, [count, getGeometry, progress]);

  useEffect(() => {
    if (!enhanced) return;
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const resizeObserver = new ResizeObserver(schedule);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (stageRef.current) resizeObserver.observe(stageRef.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enhanced, update]);

  const selectProject = (index: number) => {
    const geometry = getGeometry();
    if (!geometry) return;
    window.scrollTo({
      top: geometry.start + geometry.distance * index / Math.max(1, count - 1),
      behavior: "smooth",
    });
  };

  return { enhanced, trackRef, stageRef, activeIndex, progress: smoothProgress, selectProject, update };
}
