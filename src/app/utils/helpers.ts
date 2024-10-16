// scroll to id
export const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Set duration to 1000ms (1 second)
  let startTime: number | null = null;

  const easeInOutQuad = (
    time: number,
    start: number,
    distance: number,
    duration: number
  ) => {
    time /= duration / 2;
    if (time < 1) return (distance / 2) * time * time + start;
    time--;
    return (-distance / 2) * (time * (time - 2) - 1) + start;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
