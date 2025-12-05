const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className="w-full overflow-hidden leading-[0]">
    <svg
      className={`relative block w-full h-[60px] ${flip ? "rotate-180" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.79,22.24,103.59,29,158,17.39C230.83,48,284.74,7.7,339.39,1.79,411.33-6.73,483.1,21.21,554.76,32.64c103.79,16.72,207-1.79,310.26-20.8C948,0,1021,5.53,1092,24.45c36.53,9.52,71.7,22.25,108,32.76V0Z"
        fill="url(#gradient-fill)"
        opacity="0.35"
      ></path>
      <defs>
        <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.8)" />
          <stop offset="50%" stopColor="hsl(var(--accent-secondary) / 0.7)" />
          <stop offset="100%" stopColor="hsl(var(--secondary) / 0.8)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default SectionDivider;

