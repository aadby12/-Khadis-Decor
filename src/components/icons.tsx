type IconProps = {
  className?: string;
};

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7.2 4.5h9.6A1.2 1.2 0 0 1 18 5.7v13.3l-6-3.4-6 3.4V5.7A1.2 1.2 0 0 1 7.2 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4.5 7h15M4.5 12h15M4.5 17h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 3.5A8.45 8.45 0 0 0 3.6 11.9a8.4 8.4 0 0 0 1.16 4.27L3.5 20.5l4.45-1.22A8.5 8.5 0 1 0 12.04 3.5Zm4.93 12.05c-.2.57-1.18 1.05-1.64 1.12-.42.06-.95.09-1.53-.1-.35-.11-.8-.26-1.38-.5-2.43-1.05-4-3.5-4.12-3.66-.12-.16-1-1.33-1-2.54s.63-1.8.86-2.05c.2-.22.53-.33.86-.33h.62c.2 0 .46-.07.72.55.27.64.92 2.22 1 2.38.08.16.13.35 0 .55-.12.22-.18.35-.35.54-.18.2-.37.43-.53.58-.16.16-.33.34-.14.66.18.32.82 1.35 1.76 2.18 1.21 1.07 2.23 1.4 2.55 1.56.32.16.51.13.7-.08.18-.2.8-.93 1.02-1.25.21-.32.43-.26.72-.16.3.1 1.88.89 2.2 1.05.32.16.54.24.62.38.08.13.08.76-.13 1.33Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.7" cy="7.3" r="0.8" fill="currentColor" />
    </svg>
  );
}
