import { Card, H2, Lead, Row, Section, ImageFrame } from "./_ui";
import equipment from "../assets/equipment.jpg";
import reformer from "../assets/reformer.jpg";

export default function WhereSessions() {
  return (
    <Section tone="light">
      <H2>Twoje miejsce na spokojny trening</H2>

      <Lead>
        Wszystkie sesje odbywają się indywidualnie w kameralnym studiu
        przy ul. Angorskiej 3 na Saskiej Kępie w Warszawie.
        To spokojna przestrzeń stworzona do pracy 1:1, wyposażona
        w reformer, matę oraz sprzęt wykorzystywany podczas współczesnego
        treningu Pilates.
      </Lead>

      <Row gap={18}>
        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <ImageFrame
            src={equipment}
            alt="Kameralne studio Pilates na Saskiej Kępie"
          />
        </div>

        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <ImageFrame
            src={reformer}
            alt="Reformer w studiu Pilates na Saskiej Kępie"
          />
        </div>
      </Row>

      <div style={{ marginTop: 24 }}>
        <Row>
          <Card title="Kameralne studio 1:1" icon="○">
            Pracujemy bez grup, pośpiechu i presji. Cała przestrzeń oraz moja
            uwaga są podczas sesji przeznaczone dla Ciebie, dzięki czemu możesz
            spokojnie skupić się na ruchu i własnych celach.
          </Card>

          <Card title="Reformer i mata" icon="○">
            Korzystamy z reformera oraz maty, dobierając sposób pracy do celu
            i charakteru danej sesji. Reformer nie jest celem samym w sobie —
            jest jednym z narzędzi, które pomagają rozwijać siłę, kontrolę
            ruchu, mobilność i sprawność.
          </Card>

          <Card title="Saska Kępa • Angorska 3" icon="○">
            Studio znajduje się przy ul. Angorskiej 3 na Saskiej Kępie
            w Warszawie. To spokojne miejsce, w którym możesz na chwilę
            odłączyć się od codziennego tempa i skupić wyłącznie na treningu.
          </Card>
        </Row>
      </div>

      <div style={{ marginTop: 28 }}>

          Większość sesji łączy pracę na reformerze i macie, ale nie trzymamy
          się jednego schematu. To, z jakiego sprzętu korzystamy i jak wygląda
          trening, zawsze wynika z Twoich celów, możliwości, samopoczucia
          i tego, czego potrzebujesz danego dnia.

      </div>
    </Section>
  );
}