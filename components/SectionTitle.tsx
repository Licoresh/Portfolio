type Props = { eyebrow?: string; title: string; description?: string; align?: "left" | "center" };

export default function SectionTitle({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="muted mt-4 text-base leading-7 sm:text-lg">{description}</p>}
    </div>
  );
}
