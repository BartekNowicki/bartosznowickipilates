import { H2, Lead, Section } from "./_ui";

export default function Pricing() {
  return (
    <Section>
      <H2>Cennik</H2>

      <Lead>
        Pilates 1:1 na reformerze i macie — indywidualna sesja
        dopasowana do Twoich celów, możliwości i aktualnych potrzeb.
      </Lead>

      <div style={{ maxWidth: 860, marginTop: 34 }}>
        <div
          style={{
            paddingTop: 0,
            borderTop: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <strong
            style={{
              color: "#2e8b57",
              fontSize: "2.4rem",
            }}
          >
            195 zł
          </strong>

          <span
            style={{
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            / 60 min
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
        </div>
      </div>
    </Section>
  );
}