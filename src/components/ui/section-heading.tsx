type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[1.02rem] leading-7 text-taupe">{description}</p>
      ) : null}
    </div>
  );
}
