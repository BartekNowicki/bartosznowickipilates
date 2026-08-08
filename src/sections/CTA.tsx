import { Section, H2, Lead, Card, Row, ButtonLink } from "./_ui";

export default function CTA() {
  const messenger =
    "https://m.me/TWOJA_NAZWA_LUB_ID_STRONY";
  const email = "bartosznowickihq@gmail.com";
  const phone = "+48 605 769 837";

  return (
    <Section id="contact" tone="soft">
      <H2>Pierwszy krok jest prosty.</H2>

      <Lead>
        Nie musisz od razu zapisywać się na trening.
        Zacznijmy od rozmowy. Opowiedz mi o swoich celach,
        a wspólnie zastanowimy się, czy Pilates 1:1 będzie
        dla Ciebie dobrym wyborem.
      </Lead>

      <Row>
        <Card title="Porozmawiajmy na Messengerze" icon="○">
          <p style={{ lineHeight: 1.8 }}>
            To najwygodniejsza forma kontaktu.
            Jeśli akurat prowadzę sesję, odpowiem,
            gdy tylko będę miał wolną chwilę.
          </p>

          <div style={{ marginTop: 18 }}>
            <ButtonLink
              href={messenger}
              variant="primary"
            >
              Napisz na Messengerze
            </ButtonLink>
          </div>
        </Card>

        <Card title="Co warto napisać?" icon="○">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Co skłoniło Cię do Pilatesu?</li>
            <li>Jakie są Twoje cele?</li>
            <li>Czy masz wcześniejsze doświadczenie z treningiem?</li>
            <li>Jakie dni i godziny najbardziej Ci odpowiadają?</li>
          </ul>

          <div style={{ marginTop: 18 }}>
            <ButtonLink href="#first-session" variant="accent">
              Jak wygląda pierwsza sesja?
            </ButtonLink>
          </div>
        </Card>
      </Row>

      <div style={{ marginTop: 32 }}>

          Jeśli wolisz, możesz też skontaktować się ze mną mailowo lub telefonicznie.
          <br />
          <br />

          <strong>E-mail:</strong>{" "}
          <a href={`mailto:${email}`} style={linkStyle}>
            {email}
          </a>

          <br />
          <br />

          <strong>Telefon:</strong>{" "}
          <a href={`tel:${phone.replace(/\s/g, "")}`} style={linkStyle}>
            {phone}
          </a>

          <br />
          <br />

          Na wszystkie wiadomości odpowiadam osobiście.
          Zwykle tego samego dnia lub w ciągu 24 godzin.

      </div>
    </Section>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  borderBottom: "1px solid rgba(0,0,0,0.3)",
  paddingBottom: 1,
};