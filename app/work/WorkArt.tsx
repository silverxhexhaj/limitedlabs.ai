import type { WorkArtVariant } from "./workData";

type WorkArtProps = {
  variant: WorkArtVariant;
  width: string;
  className?: string;
};

export default function WorkArt({ variant, width, className = "opacity-90" }: WorkArtProps) {
  switch (variant) {
    case "check":
      return (
        <svg width={width} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="3" fill="none" />
          <path d="M60 100 L 90 130 L 145 70" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "wireframe":
      return (
        <svg width={width} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
          <rect x="40" y="60" width="120" height="80" rx="8" stroke="white" strokeWidth="3" fill="none" />
          <line x1="55" y1="80" x2="100" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="100" x2="140" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="120" x2="115" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg width={width} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
          <path
            d="M40 160 L 80 100 L 110 130 L 160 50"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="80" cy="100" r="5" fill="white" />
          <circle cx="110" cy="130" r="5" fill="white" />
          <circle cx="160" cy="50" r="5" fill="white" />
        </svg>
      );
    case "property":
      return (
        <svg width={width} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="3" fill="none" />
          <path
            d="M90 80 Q 90 70, 100 70 T 110 80 Q 110 100, 100 100 V 115"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="100" cy="130" r="3" fill="white" />
        </svg>
      );
    case "waves":
      return (
        <svg width={width} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
          <path
            d="M40 80 L 70 110 L 100 80 L 130 110 L 160 80"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M40 130 L 70 100 L 100 130 L 130 100 L 160 130"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      );
    case "grid":
      return (
        <svg width={width} viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
          <rect x="60" y="60" width="80" height="80" rx="4" stroke="white" strokeWidth="3" fill="none" />
          <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="3" fill="none" />
          <line x1="100" y1="80" x2="100" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="100" x2="120" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
