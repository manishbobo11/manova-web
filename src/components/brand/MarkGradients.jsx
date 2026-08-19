/** Gradient defs. `id` is required so multiple marks on a page never collide. */
export const MarkGradients = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-self`} x1="26.2065" y1="5.09766" x2="26.2065" y2="82.1907" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6256DC" />
      <stop offset="1" stopColor="#06083D" />
    </linearGradient>
    <linearGradient id={`${id}-reflection`} x1="60.4289" y1="8.95832" x2="60.4289" y2="79.812" gradientUnits="userSpaceOnUse">
      <stop stopColor="#C7A5F2" />
      <stop offset="1" stopColor="#8B78E2" />
    </linearGradient>
  </defs>
);

export default MarkGradients;
