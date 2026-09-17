const colors = {
  burgundy: "#a83c50",
  burgundyBright: "#e3a1ad",
  burgundySoft: "rgba(168, 60, 80, 0.14)",
  burgundyBorder: "rgba(227, 161, 173, 0.24)",

  ctaGreen: "#72cfa3",
  ctaGreenBg: "rgba(72, 163, 120, 0.14)",
  ctaGreenBorder: "rgba(114, 207, 163, 0.46)",

  surface: "rgba(255, 255, 255, 0.045)",
  surfaceStrong: "rgba(255, 255, 255, 0.075)",
  surfaceBorder: "rgba(255, 255, 255, 0.11)",

  text: "#f7f2f3",
  mutedText: "rgba(247, 242, 243, 0.74)",

  softBackground: `
    radial-gradient(
      circle at 15% 20%,
      rgba(122, 31, 43, 0.16),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.025),
      rgba(255, 255, 255, 0)
    )
  `,
};

export function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1120,
        margin: "0 auto",
        padding: "0 clamp(20px, 4vw, 32px)",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  tone = "light",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "light" | "soft";
}) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        padding: "clamp(64px, 8vw, 108px) 0",
        background:
          tone === "soft"
            ? colors.softBackground
            : "transparent",
      }}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function H2({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      style={{
        maxWidth: 760,
        margin: "0 0 18px",
        color: colors.text,
        fontSize: "clamp(30px, 4vw, 42px)",
        lineHeight: 1.14,
        letterSpacing: "-0.025em",
      }}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      style={{
        maxWidth: 760,
        margin: "0 0 32px",
        color: colors.mutedText,
        fontSize: "clamp(17px, 2vw, 19px)",
        lineHeight: 1.75,
      }}
    >
      {children}
    </p>
  );
}

export function Row({
  children,
  gap = 20,
}: {
  children: React.ReactNode;
  gap?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
        gap,
        alignItems: "stretch",
      }}
    >
      {children}
    </div>
  );
}

export function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <article
      style={{
        height: "100%",
        padding: "clamp(22px, 3vw, 28px)",
        boxSizing: "border-box",
        border: `1px solid ${colors.surfaceBorder}`,
        borderRadius: 22,
        background: colors.surface,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 13,
          marginBottom: 14,
        }}
      >
        {icon ? (
          <span
            aria-hidden="true"
            style={{
              width: 38,
              height: 38,
              flex: "0 0 38px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${colors.burgundyBorder}`,
              borderRadius: 12,
              background: colors.burgundySoft,
              color: colors.burgundyBright,
              fontSize: 17,
            }}
          >
            {icon}
          </span>
        ) : null}

        <h3
          style={{
            margin: 0,
            color: colors.text,
            fontSize: 19,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
      </div>

      <div
        style={{
          color: colors.mutedText,
          fontSize: 16,
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </article>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "accent";
}) {
  const styles =
    variant === "primary"
      ? {
          border: `1px solid ${colors.burgundy}`,
          background: colors.burgundy,
          color: "#ffffff",
          boxShadow: "0 12px 30px rgba(122, 31, 43, 0.28)",
        }
      : variant === "accent"
        ? {
            border: `1px solid ${colors.ctaGreenBorder}`,
            background: colors.ctaGreenBg,
            color: colors.ctaGreen,
            boxShadow: "none",
          }
        : {
            border: `1px solid ${colors.surfaceBorder}`,
            background: colors.surface,
            color: colors.text,
            boxShadow: "none",
          };

  return (
    <a
      href={href}
      style={{
        minHeight: 48,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        boxSizing: "border-box",
        borderRadius: 14,
        textDecoration: "none",
        fontWeight: 700,
        lineHeight: 1.2,
        ...styles,
      }}
    >
      {children}
    </a>
  );
}

export function ImageFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      style={{
        overflow: "hidden",
        border: `1px solid ${colors.surfaceBorder}`,
        borderRadius: 24,
        background: colors.surfaceStrong,
        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.24)",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

export function DividerLabel({
  text,
}: {
  text: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 18,
        padding: "7px 13px",
        border: `1px solid ${colors.burgundyBorder}`,
        borderRadius: 999,
        background: colors.burgundySoft,
        color: colors.burgundyBright,
        fontSize: 13,
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "0.03em",
      }}
    >
      {text}
    </div>
  );
}