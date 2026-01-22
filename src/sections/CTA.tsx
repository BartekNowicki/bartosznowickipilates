import { Section, H2, Lead, Card, Row, Muted, ButtonLink } from "./_ui";

export default function CTA() {
  const email = "bartosznowickihq@gmail.com";
  const phone = "+48 605 769 837";
  const whatsappLink = "https://wa.me/48605769837";

  return (
    <Section id="contact" tone="soft">
      <H2>Kontakt</H2>

      <Lead>
        Jeśli interesują Cię indywidualne sesje Pilates w Warszawie —
        w domu, w biurze lub na reformerze w studio —
        zapraszam do kontaktu.
      </Lead>

      <Row>
        <Card title="Dane kontaktowe" icon="📍">
          <div style={{ lineHeight: 1.8 }}>
            <div>
              <strong>E-mail:</strong>{" "}
              <a href={`mailto:${email}`} style={linkStyle}>
                {email}
              </a>
            </div>

            <div style={{ marginTop: 6 }}>
              <strong>WhatsApp (najlepiej):</strong>{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                {phone}
              </a>
            </div>

            <div style={{ marginTop: 14 }}>
              <Muted>
                WhatsApp to najszybsza forma kontaktu.
                Często prowadzę zajęcia i nie zawsze mogę odebrać telefon,
                ale na wiadomości odpowiadam możliwie najszybciej.
              </Muted>
            </div>
          </div>
        </Card>

        <Card title="Co warto napisać w wiadomości" icon="💬">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
            <li>Gdzie chcesz trenować (dom, biuro, reformer)</li>
            <li>Twoją ogólną dostępność</li>
            <li>Cel treningu lub ewentualne dolegliwości / ograniczenia</li>
          </ul>

          <div style={{ marginTop: 14 }}>
            <ButtonLink href="#first-session" variant="accent">
              Zobacz, jak wygląda pierwsza sesja
            </ButtonLink>
          </div>
        </Card>
      </Row>

      <div style={{ marginTop: 18 }}>
        <Muted>
          Na wszystkie wiadomości odpowiadam osobiście.
          Zwykle w ciągu 24 godzin.
        </Muted>
      </div>
    </Section>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  borderBottom: "1px solid rgba(0,0,0,0.3)",
  paddingBottom: 1,
};
