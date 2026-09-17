import { H2, Lead, Section } from "./_ui";

export default function Pricing() {
  return (
    <Section tone="light">
      <H2>Cennik</H2>

      <Lead>
        Pilates 1:1 na reformerze i macie — indywidualna sesja dopasowana
        do Twoich celów, możliwości i aktualnych potrzeb.
      </Lead>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 22,
          marginTop: 38,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            height: "100%",
            boxSizing: "border-box",
            padding: "clamp(26px, 5vw, 40px)",
            border: "1px solid rgba(255, 255, 255, 0.11)",
            borderRadius: 24,
            background: "rgba(255, 255, 255, 0.045)",
            boxShadow: "0 22px 60px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <strong
              style={{
                color: "#72cfa3",
                fontSize: "clamp(42px, 6vw, 58px)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              195 zł
            </strong>

            <span
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                / 60 min
              </span>

              <span
                style={{
                  color: "rgba(247, 242, 243, 0.7)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                cena standardowa
              </span>
            </span>
          </div>

          <div
            style={{
              width: 48,
              height: 3,
              margin: "26px 0",
              borderRadius: 999,
              background: "#72cfa3",
            }}
          />

          <p
            style={{
              margin: 0,
              color: "rgba(247, 242, 243, 0.76)",
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            Indywidualnie programowany trening Pilates, oparty na pracy
            na reformerze i macie oraz uwzględniający biomechanikę,
            współczesną wiedzę o ruchu i elementy treningu funkcjonalnego.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "100%",
            boxSizing: "border-box",
            padding: "clamp(26px, 5vw, 40px)",
            border: "1px solid rgba(114, 207, 163, 0.32)",
            borderRadius: 24,
            background: `
              radial-gradient(
                circle at 100% 0%,
                rgba(114, 207, 163, 0.2),
                transparent 42%
              ),
              linear-gradient(
                135deg,
                rgba(72, 163, 120, 0.15),
                rgba(255, 255, 255, 0.05)
              )
            `,
            boxShadow: "0 24px 65px rgba(0, 0, 0, 0.23)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginBottom: 20,
              padding: "7px 12px",
              border: "1px solid rgba(114, 207, 163, 0.4)",
              borderRadius: 999,
              background: "rgba(72, 163, 120, 0.13)",
              color: "#72cfa3",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.03em",
            }}
          >
            PROMOCJA
          </div>

          <strong
            style={{
              display: "block",
              marginBottom: 18,
              color: "#72cfa3",
              fontSize: "clamp(25px, 4vw, 34px)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            Promocja „Aktywny tydzień”
          </strong>

          <p
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: 17,
              lineHeight: 1.75,
            }}
          >
            Pierwsza zrealizowana sesja w danym tygodniu kosztuje{" "}
            <strong style={{ color: "#ffffff" }}>195 zł</strong>, a druga
            zrealizowana sesja w tym samym tygodniu tylko{" "}
            <strong style={{ color: "#72cfa3", fontSize: 20 }}>
              125 zł za 60 minut
            </strong>
            .
          </p>

          <p
            style={{
              margin: "18px 0 0",
              paddingTop: 18,
              borderTop: "1px solid rgba(255, 255, 255, 0.11)",
              color: "rgba(247, 242, 243, 0.72)",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            Promocja obowiązuje do{" "}
            <strong style={{ color: "#ffffff" }}>
              31 października 2026 r.
            </strong>
          </p>
        </div>
      </div>
    </Section>
  );
}