import { ButtonLink, Container, DividerLabel, ImageFrame } from "./_ui";
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
        position: "relative",
        overflow: "hidden",
        padding: "clamp(72px, 10vw, 124px) 0 clamp(64px, 8vw, 100px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        background: `
          radial-gradient(
            circle at 8% 15%,
            rgba(168, 60, 80, 0.2),
            transparent 34%
          ),
          radial-gradient(
            circle at 88% 22%,
            rgba(72, 163, 120, 0.13),
            transparent 31%
          ),
          linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.025),
            rgba(255, 255, 255, 0)
          )
        `,
      }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            gap: "clamp(42px, 7vw, 80px)",
            alignItems: "center",
          }}
        >
          <div>
            <DividerLabel text="Pilates 1:1 • Reformer • Warszawa • Saska Kępa" />

            <h1
              style={{
                maxWidth: 760,
                margin: "14px 0 20px",
                color: "#f7f2f3",
                fontSize: "clamp(44px, 6vw, 68px)",
                lineHeight: 1.06,
                letterSpacing: "-0.045em",
              }}
            >
              Pilates 1:1 na reformerze
              <br />
              oparty na współczesnej wiedzy o ruchu.
            </h1>

            <p
              style={{
                maxWidth: 700,
                margin: 0,
                color: "rgba(247, 242, 243, 0.76)",
                fontSize: "clamp(17px, 2vw, 19px)",
                lineHeight: 1.78,
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
                flexWrap: "wrap",
                gap: 12,
                marginTop: 28,
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
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 28,
              }}
            >
              {items.map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "9px 12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.04)",
                    color: "rgba(247, 242, 243, 0.8)",
                    fontSize: 14,
                    lineHeight: 1.2,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: "#72cfa3",
                      fontSize: 14,
                      fontWeight: 800,
                    }}
                  >
                    ✓
                  </span>

                  <span style={{ fontStyle: "italic" }}>{item}</span>
                </span>
              ))}
            </div>

            <div
              style={{
                maxWidth: 700,
                marginTop: 26,
                paddingTop: 22,
                borderTop: "1px solid rgba(255, 255, 255, 0.09)",
                color: "rgba(247, 242, 243, 0.62)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Dla osób początkujących, aktywnych oraz wszystkich,
              którzy chcą rozwijać siłę, sprawność i jakość ruchu
              w spokojnej atmosferze.
            </div>
          </div>

          <div
            style={{
              position: "relative",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "10% -6% -8% 8%",
                borderRadius: 36,
                background: `
                  radial-gradient(
                    circle at 70% 20%,
                    rgba(114, 207, 163, 0.2),
                    transparent 46%
                  ),
                  rgba(168, 60, 80, 0.12)
                `,
                filter: "blur(34px)",
              }}
            />

            <div
              style={{
                position: "relative",
                transform: "rotate(0.4deg)",
              }}
            >
              <ImageFrame
                src={heroImg}
                alt="Indywidualna sesja Pilates 1:1 na reformerze"
              />
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 14,
              }}
            >
              <DividerLabel text="Pilates 1:1" />
              <DividerLabel text="Reformer" />
              <DividerLabel text="Saska Kępa" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}