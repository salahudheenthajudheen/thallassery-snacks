export function IslamicPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <pattern id="islamicPattern" patternUnits="userSpaceOnUse" width="25" height="25">
        <path
          d="M12.5 0L25 12.5L12.5 25L0 12.5L12.5 0Z"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        <circle cx="12.5" cy="12.5" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
        <path
          d="M12.5 6.25L18.75 12.5L12.5 18.75L6.25 12.5L12.5 6.25Z"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
          opacity="0.15"
        />
      </pattern>
      <rect width="100" height="100" fill="url(#islamicPattern)" />
    </svg>
  )
}

export function ArabicBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" opacity="0.8" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </div>
  )
}
