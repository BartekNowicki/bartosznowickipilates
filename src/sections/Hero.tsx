import { ButtonLink, Container, DividerLabel, ImageFrame, Row } from "./_ui";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      style={{
        padding: "86px 0 72px",
        background:
          "radial-gradient(900px 500px at 10% 10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(0,0,0,0.05), transparent 60%)",
      }}
    >
      <Container>
        <Row gap={28}>
          <div style={{ flex: "1 1 520px", minWidth: 280 }}>
            <DividerLabel text="Indywidualne zajęcia Pilatesu 1:1 • Warszawa • Dojazd do domu lub biura" />

            <h1
              style={{
                fontSize: 46,
                lineHeight: 1.08,
                margin: "16px 0 12px",
                letterSpacing: -0.6,
              }}
            >
              Poczuj się lepiej w swoim ciele —
              bez siłowni, bez dojazdów, bez chaosu.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 720,
                margin: "0 0 18px",
              }}
            >
              Prowadzę prywatne, indywidualne sesje Pilatesu w Warszawie — z dojazdem
              do Twojego domu lub biura.
              Jeśli wolisz trening na większym sprzęcie, możemy też pracować na reformerze
              w w pełni wyposażonym studiu w centrum.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <ButtonLink href="#contact" variant="primary">
                Umów się na pierwszą sesję
              </ButtonLink>

              <ButtonLink href="#first-session" variant="accent">
                Jak wygląda pierwsza sesja
              </ButtonLink>
            </div>

            <div style={{ marginTop: 18, opacity: 0.85, lineHeight: 1.65 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <span>✅ Spokojne, progresywne podejście</span>
                <span>✅ Jasny plan zamiast przypadkowych ćwiczeń</span>
                <span>✅ Ulga w napięciach od siedzącej pracy</span>
                <span>✅ Indywidualna praca 1:1</span>
              </div>
            </div>

            <div style={{ marginTop: 22, fontSize: 13, opacity: 0.75 }}>
              Najczęściej wybierane przez: osoby zapracowane • osoby z bólami i napięciami • osoby chcące wrócić do formy
            </div>
          </div>

          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <ImageFrame
              src={heroImg}
              alt="Prywatna sesja Pilates w spokojnym, nowoczesnym otoczeniu"
            />

            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <DividerLabel text="Sesje w domu" />
              <DividerLabel text="Sesje w biurze" />
              <DividerLabel text="Reformer w centrum" />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
