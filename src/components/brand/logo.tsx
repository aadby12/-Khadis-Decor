import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ inverted = false, compact = false }: LogoProps) {
  const color = inverted ? "text-paper" : "text-ink";

  return (
    <Link href="/" className={`group flex items-center gap-3 ${color}`}>
      <span
        aria-hidden
        className={`grid h-10 w-10 place-items-center border ${
          inverted ? "border-paper/30" : "border-ink/20"
        }`}
      >
        <span className="font-serif text-[1.35rem] leading-none">K</span>
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block font-serif text-[1.35rem] leading-none tracking-tight">
          Khadis Decor
        </span>
        <span className="mt-1 block text-[0.62rem] tracking-[0.22em] uppercase opacity-70">
          Wallpaper et al
        </span>
      </span>
    </Link>
  );
}
