import { useState } from "react";
import { H2, Lead, Section, Row, Card, Muted, ImageFrame } from "./_ui";
import { Lightbox } from "../components/Lightbox";

import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";

export default function AboutMe() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <Section tone="light">
      <H2>Poznaj mnie</H2>

      <Lead>
        Nazywam się Bartosz Nowicki. Jestem certyfikowanym instruktorem
        współczesnego Pilatesu, trenerem medycznym i trenerem personalnym.
        Prowadzę indywidualne sesje Pilates 1:1 na reformerze i macie
        w kameralnym studiu na Saskiej Kępie.
      </Lead>

      <Row>
        <Card title="Pilates przede wszystkim" icon="○">
          Pilates jest podstawą mojej pracy. Interesuje mnie jednak nie samo
          wykonywanie ćwiczeń, lecz to, jak można wykorzystać tę metodę do
          rozwijania siły, kontroli ruchu, mobilności i ogólnej sprawności.
          Dlatego pracuję w nurcie współczesnego Pilatesu i nie traktuję
          repertuaru ćwiczeń jako zamkniętego schematu.
        </Card>

        <Card title="Szersze przygotowanie treningowe" icon="○">
          Moje przygotowanie obejmuje również trening medyczny i personalny.
          Dzięki temu mogę patrzeć na sesję szerzej niż tylko przez pryzmat
          pojedynczego ćwiczenia Pilates — uwzględniając obciążenie, progresję,
          siłę, możliwości ruchowe oraz indywidualny cel osoby, z którą pracuję.
        </Card>

        <Card title="Praca 1:1" icon="○">
          Wybrałem pracę indywidualną, ponieważ daje mi możliwość poświęcenia
          całej uwagi jednej osobie. Mogę obserwować ruch, na bieżąco zmieniać
          ćwiczenia i dopasowywać sesję do tego, czego potrzebujesz właśnie
          tego dnia — bez konieczności trzymania się programu całej grupy.
        </Card>
      </Row>

      <div style={{ marginTop: 32 }}>
        <Row gap={16}>
          {[about1, about2, about3].map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(img)}
              style={{
                flex: "1 1 260px",
                cursor: "zoom-in",
                padding: 0,
                border: "none",
                background: "transparent",
                textAlign: "inherit",
              }}
              aria-label="Powiększ zdjęcie"
            >
              <ImageFrame
                src={img}
                alt="Bartosz Nowicki – indywidualna sesja Pilates 1:1"
              />
            </button>
          ))}
        </Row>
      </div>

      <div style={{ marginTop: 18 }}>

          Pracuję spokojnie i bez presji, ale zwracam dużą uwagę na jakość
          i szczegóły ruchu. Sesje odbywają się 1:1 w studiu przy
          ul. Angorskiej 3 na Saskiej Kępie w Warszawie, gdzie korzystamy
          z reformera i maty.

      </div>

      {activeImage && (
        <Lightbox
          src={activeImage}
          alt="Bartosz Nowicki – indywidualna sesja Pilates"
          onClose={() => setActiveImage(null)}
        />
      )}
    </Section>
  );
}