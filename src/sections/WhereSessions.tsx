import { Card, H2, Lead, Row, Section, ImageFrame } from "./_ui";
import studio from "../assets/studio.jpg";

export default function WhereSessions() {
  return (
    <Section tone="soft">
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(32px, 6vw, 64px)",
          alignItems: "center",
        }}
      >
        <div>
          <H2>Twoje miejsce na spokojny trening</H2>

          <Lead>
            Wszystkie sesje odbywają się indywidualnie w kameralnym studiu
            przy ul. Angorskiej 3 na Saskiej Kępie w Warszawie.
            To spokojna przestrzeń stworzona do pracy 1:1, wyposażona
            w reformer, matę oraz sprzęt wykorzystywany podczas współczesnego
            treningu Pilates.
          </Lead>
        </div>

        <ImageFrame
          src={studio}
          alt="Reformer w studiu Pilates na Saskiej Kępie"
        />
      </div>

      <div style={{ marginTop: "clamp(38px, 6vw, 58px)" }}>
        <Row gap={20}>
          <Card title="Kameralne studio 1:1" icon="01">
            <p style={{ margin: 0 }}>
              Pracujemy bez grup, pośpiechu i presji. Cała przestrzeń oraz moja
              uwaga są podczas sesji przeznaczone dla Ciebie, dzięki czemu możesz
              spokojnie skupić się na ruchu i własnych celach.
            </p>
          </Card>

          <Card title="Reformer i mata" icon="02">
            <p style={{ margin: 0 }}>
              Korzystamy z reformera oraz maty, dobierając sposób pracy do celu
              i charakteru danej sesji. Reformer nie jest celem samym w sobie —
              jest jednym z narzędzi, które pomagają rozwijać siłę, kontrolę
              ruchu, mobilność i sprawność.
            </p>
          </Card>

          <Card title="Saska Kępa • Angorska 3" icon="03">
            <p style={{ margin: 0 }}>
              Studio znajduje się przy ul. Angorskiej 3 na Saskiej Kępie
              w Warszawie. To spokojne miejsce, w którym możesz na chwilę
              odłączyć się od codziennego tempa i skupić wyłącznie na treningu.
            </p>
          </Card>
        </Row>
      </div>

      <div
        style={{
          marginTop: 28,
          padding: "clamp(24px, 4vw, 34px)",
          border: "1px solid rgba(114, 207, 163, 0.24)",
          borderRadius: 22,
          background: `
            linear-gradient(
              135deg,
              rgba(72, 163, 120, 0.12),
              rgba(255, 255, 255, 0.04)
            )
          `,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.18)",
        }}
      >
        <p
          style={{
            maxWidth: 920,
            margin: 0,
            paddingLeft: 20,
            borderLeft: "3px solid #72cfa3",
            color: "rgba(247, 242, 243, 0.8)",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Większość sesji łączy pracę na reformerze i macie, ale nie trzymamy
          się jednego schematu. To, z jakiego sprzętu korzystamy i jak wygląda
          trening, zawsze wynika z Twoich celów, możliwości, samopoczucia
          i tego, czego potrzebujesz danego dnia.
        </p>
      </div>
    </Section>
  );
}