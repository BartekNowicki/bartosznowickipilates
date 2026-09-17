import { Section, H2, Lead, Card, Row, ButtonLink } from "./_ui";

export default function CTA() {
  const messenger = "https://m.me/bartosznowickipilates";
  const instagram = "https://www.instagram.com/bartosznowickipilates";
  const facebook = "https://www.facebook.com/bartosznowickipilates";
  const email = "bartosznowickihq@gmail.com";
  const phone = "+48 605 769 837";

  return (
    <Section id="contact" tone="soft">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(30px, 6vw, 58px)",
          border: "1px solid rgba(227, 161, 173, 0.22)",
          borderRadius: 30,
          background: `
            radial-gradient(
              circle at 100% 0%,
              rgba(114, 207, 163, 0.16),
              transparent 38%
            ),
            radial-gradient(
              circle at 0% 100%,
              rgba(168, 60, 80, 0.18),
              transparent 42%
            ),
            rgba(255, 255, 255, 0.035)
          `,
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.25)",
        }}
      >
        <H2>Pierwszy krok jest prosty.</H2>

        <Lead>
          Nie musisz od razu zapisywać się na trening.
          Zacznijmy od rozmowy. Opowiedz mi o swoich celach,
          a wspólnie zastanowimy się, czy Pilates 1:1 będzie
          dla Ciebie dobrym wyborem.
        </Lead>

        <div style={{ marginTop: 36 }}>
          <Row gap={20}>
            <Card title="Porozmawiajmy na Messengerze" icon="01">
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                To najwygodniejsza forma kontaktu.
                Jeśli akurat prowadzę sesję, odpowiem,
                gdy tylko będę miał wolną chwilę.
              </p>

              <div style={{ marginTop: 22 }}>
                <ButtonLink href={messenger} variant="primary">
                  Napisz na Messengerze
                </ButtonLink>
              </div>
            </Card>

            <Card title="Co warto napisać?" icon="02">
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  lineHeight: 1.9,
                }}
              >
                <li>Co skłoniło Cię do Pilatesu?</li>
                <li>Jakie są Twoje cele?</li>
                <li>Czy masz wcześniejsze doświadczenie z treningiem?</li>
                <li>Jakie dni i godziny najbardziej Ci odpowiadają?</li>
              </ul>

              <div style={{ marginTop: 22 }}>
                <ButtonLink href="#first-session" variant="accent">
                  Jak wygląda pierwsza sesja?
                </ButtonLink>
              </div>
            </Card>
          </Row>
        </div>

        <div
          style={{
            marginTop: 24,
            padding: "clamp(24px, 4vw, 32px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 22,
            background: "rgba(0, 0, 0, 0.14)",
          }}
        >
          <p
            style={{
              margin: "0 0 22px",
              color: "rgba(247, 242, 243, 0.76)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Jeśli wolisz, możesz też skontaktować się ze mną mailowo lub
            telefonicznie.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <a
              href={`mailto:${email}`}
              style={{
                ...contactLinkStyle,
                flex: "1 1 280px",
              }}
            >
              <span style={contactLabelStyle}>E-mail</span>
              <span>{email}</span>
            </a>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              style={{
                ...contactLinkStyle,
                flex: "1 1 220px",
              }}
            >
              <span style={contactLabelStyle}>Telefon</span>
              <span>{phone}</span>
            </a>
          </div>

          <p
            style={{
              margin: "22px 0 0",
              color: "rgba(247, 242, 243, 0.78)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Na wszystkie wiadomości odpowiadam osobiście.
            Zwykle tego samego dnia lub w ciągu 24 godzin.
          </p>
        </div>

        <div
          style={{
            marginTop: 24,
            padding: "clamp(24px, 4vw, 32px)",
            border: "1px solid rgba(227, 161, 173, 0.16)",
            borderRadius: 22,
            background: "rgba(255, 255, 255, 0.035)",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px",
              color: "#f7f2f3",
              fontSize: 22,
            }}
          >
            Znajdź mnie również w mediach społecznościowych
          </h3>

          <p
            style={{
              margin: "0 0 22px",
              color: "rgba(247, 242, 243, 0.72)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Obserwuj mój profil, aby zobaczyć fragmenty treningów,
            ćwiczenia na reformerze i aktualności ze studia.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: 14,
            }}
          >
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              aria-label="Otwórz profil Bartosz Nowicki Pilates na Instagramie"
            >
              <span style={socialIconStyle}>IG</span>

              <span style={socialTextStyle}>
                <span style={contactLabelStyle}>Instagram</span>
                <span>@bartosznowickipilates</span>
              </span>

              <span aria-hidden style={arrowStyle}>
                ↗
              </span>
            </a>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              aria-label="Otwórz stronę Bartosz Nowicki Pilates na Facebooku"
            >
              <span style={socialIconStyle}>FB</span>

              <span style={socialTextStyle}>
                <span style={contactLabelStyle}>Facebook</span>
                <span>Bartosz Nowicki Pilates</span>
              </span>

              <span aria-hidden style={arrowStyle}>
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

const contactLinkStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  padding: "16px 18px",
  boxSizing: "border-box",
  border: "1px solid rgba(114, 207, 163, 0.25)",
  borderRadius: 16,
  background: "rgba(72, 163, 120, 0.09)",
  color: "#f7f2f3",
  textDecoration: "none",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.4,
};

const contactLabelStyle: React.CSSProperties = {
  color: "#72cfa3",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const socialLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  minWidth: 0,
  padding: "16px 18px",
  boxSizing: "border-box",
  border: "1px solid rgba(227, 161, 173, 0.2)",
  borderRadius: 16,
  background: "rgba(168, 60, 80, 0.09)",
  color: "#f7f2f3",
  textDecoration: "none",
};

const socialIconStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 42px",
  width: 42,
  height: 42,
  border: "1px solid rgba(227, 161, 173, 0.3)",
  borderRadius: 13,
  background: "rgba(168, 60, 80, 0.16)",
  color: "#e3a1ad",
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: "0.04em",
};

const socialTextStyle: React.CSSProperties = {
  display: "flex",
  flex: 1,
  minWidth: 0,
  flexDirection: "column",
  gap: 5,
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.35,
  overflowWrap: "anywhere",
};

const arrowStyle: React.CSSProperties = {
  flexShrink: 0,
  color: "#e3a1ad",
  fontSize: 20,
  lineHeight: 1,
};