import { ButtonLink, Container, DividerLabel, ImageFrame, Row } from "./_ui";
import heroImg from "../assets/hero.jpg";

export default function Hero() {

 const items = [
   "Pilates 1:1",
   "Reformer i mata",
   "Contemporary Pilates",
   "Biomechanika i trening funkcjonalny",
 ];

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
          <div style={{ flex: "1 1 560px", minWidth: 280 }}>
            <DividerLabel text="Pilates 1:1 • Reformer • Warszawa • Saska Kępa" />

            <h1
              style={{
                fontSize: 48,
                lineHeight: 1.08,
                margin: "16px 0 12px",
                letterSpacing: -0.8,
              }}
            >
              Pilates 1:1 na reformerze
              <br />
              oparty na współczesnej wiedzy o ruchu.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                maxWidth: 720,
                margin: "0 0 18px",
              }}
            >
              Zapraszam na indywidualne sesje Pilates 1:1
              w kameralnym studiu przy ul. Angorskiej 3
              na Saskiej Kępie.
              Łączę współczesny Pilates z biomechaniką,
              treningiem funkcjonalnym oraz aktualną wiedzą
              o ludzkim ciele, aby każda sesja była
              dopasowana do Twoich potrzeb i celów.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 18,
              }}
            >
              <ButtonLink href="#contact" variant="primary">
                Umów pierwszą sesję
              </ButtonLink>

              <ButtonLink href="#first-session" variant="accent">
                Jak wygląda pierwsza sesja?
              </ButtonLink>
            </div>

            <div
              style={{
                marginTop: 22,
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {items.map((item) => (
                  <span key={item}>
                    <span style={{ color: "green" }}>✓</span>{" "}
                    <span style={{ fontStyle: "italic" }}>{item}</span>
                  </span>
                ))}

              </div>
            </div>

            <div
              style={{
                marginTop: 26,
                fontSize: 16,
                opacity: 0.75,
              }}
            >
              Dla osób początkujących, aktywnych oraz wszystkich,
              którzy chcą rozwijać siłę, sprawność i jakość ruchu
              w spokojnej atmosferze.
            </div>
          </div>

          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <ImageFrame
              src={heroImg}
              alt="Indywidualna sesja Pilates 1:1 na reformerze"
            />

            <div
              style={{
                marginTop: 10,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <DividerLabel text="Pilates 1:1" />
              <DividerLabel text="Reformer" />
              <DividerLabel text="Saska Kępa" />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}