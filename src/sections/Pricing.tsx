import { H2, Lead, Section } from "./_ui";

export default function Pricing() {
  return (
    <Section>
      <H2>Cennik</H2>

      <Lead>
        Pilates 1:1 na reformerze i macie — indywidualna sesja dopasowana
        do Twoich celów, możliwości i aktualnych potrzeb.
      </Lead>

      <div style={{ maxWidth: 860, marginTop: 34 }}>
        <div
          style={{
            paddingTop: 0,
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <strong
            style={{
              color: "#6fd39a",
              fontSize: "2.4rem",
            }}
          >
            195 zł
          </strong>

          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: 2,
              marginLeft: 12,
              verticalAlign: "middle",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              / 60 min
            </span>

            <span
              style={{
                color: "#f2f2f2",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              cena standardowa
            </span>
          </span>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              marginTop: 28,
              marginBottom: 0,
            }}
          >
            Indywidualnie programowany trening Pilates, oparty na pracy
            na reformerze i macie oraz uwzględniający biomechanikę,
            współczesną wiedzę o ruchu i elementy treningu funkcjonalnego.
          </p>

          <div
            style={{
              marginTop: 30,
              padding: "22px 24px",
              backgroundColor: "rgba(46, 139, 87, 0.18)",
              borderLeft: "4px solid #6fd39a",
              borderRadius: 4,
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#6fd39a",
                fontSize: 21,
                marginBottom: 8,
              }}
            >
              Promocja „Aktywny tydzień”
            </strong>

            <p
              style={{
                color: "#ffffff",
                fontSize: 17,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Pierwsza zrealizowana sesja w danym tygodniu kosztuje{" "}
              <strong>195 zł</strong>, a druga zrealizowana sesja w tym
              samym tygodniu tylko <strong>125 zł za 60 minut</strong>.
            </p>

            <p
              style={{
                color: "#f2f2f2",
                fontSize: 15,
                lineHeight: 1.6,
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              Promocja obowiązuje do{" "}
              <strong>31 października 2026 r.</strong>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}