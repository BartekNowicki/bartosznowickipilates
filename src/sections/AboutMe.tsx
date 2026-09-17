import { useState } from "react";
import { H2, Lead, Section, Row, Card, ImageFrame } from "./_ui";
import { Lightbox } from "../components/Lightbox";

import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";

export default function AboutMe() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [about1, about2, about3];

  return (
    <Section tone="light">
      <H2>Poznaj mnie</H2>

      <Lead>
        Nazywam się Bartosz Nowicki. Jestem certyfikowanym instruktorem
        współczesnego Pilatesu, trenerem medycznym i trenerem personalnym.
        Prowadzę indywidualne sesje Pilates 1:1 na reformerze i macie
        w kameralnym studiu na Saskiej Kępie.
      </Lead>

      <div style={{ marginTop: 38 }}>
        <Row gap={20}>
          <Card title="Pilates przede wszystkim" icon="01">
            <p style={{ margin: 0 }}>
              Pilates jest podstawą mojej pracy. Interesuje mnie jednak nie samo
              wykonywanie ćwiczeń, lecz to, jak można wykorzystać tę metodę do
              rozwijania siły, kontroli ruchu, mobilności i ogólnej sprawności.
              Dlatego pracuję w nurcie współczesnego Pilatesu i nie traktuję
              repertuaru ćwiczeń jako zamkniętego schematu.
            </p>
          </Card>

          <Card title="Szersze przygotowanie treningowe" icon="02">
            <p style={{ margin: 0 }}>
              Moje przygotowanie obejmuje również trening medyczny i personalny.
              Dzięki temu mogę patrzeć na sesję szerzej niż tylko przez pryzmat
              pojedynczego ćwiczenia Pilates — uwzględniając obciążenie,
              progresję, siłę, możliwości ruchowe oraz indywidualny cel osoby,
              z którą pracuję.
            </p>
          </Card>

          <Card title="Praca 1:1" icon="03">
            <p style={{ margin: 0 }}>
              Wybrałem pracę indywidualną, ponieważ daje mi możliwość poświęcenia
              całej uwagi jednej osobie. Mogę obserwować ruch, na bieżąco
              zmieniać ćwiczenia i dopasowywać sesję do tego, czego potrzebujesz
              właśnie tego dnia — bez konieczności trzymania się programu całej
              grupy.
            </p>
          </Card>
        </Row>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: 18,
          marginTop: 34,
        }}
      >
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveImage(img)}
            aria-label={`Powiększ zdjęcie ${i + 1}`}
            style={{
              width: "100%",
              display: "block",
              padding: 0,
              border: "none",
              borderRadius: 24,
              background: "transparent",
              cursor: "zoom-in",
              textAlign: "inherit",
            }}
          >
            <ImageFrame
              src={img}
              alt="Bartosz Nowicki – indywidualna sesja Pilates 1:1"
            />
          </button>
        ))}
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
            maxWidth: 880,
            margin: 0,
            paddingLeft: 20,
            borderLeft: "3px solid #72cfa3",
            color: "rgba(247, 242, 243, 0.82)",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Pracuję spokojnie i bez presji, ale zwracam dużą uwagę na jakość
          i szczegóły ruchu. Sesje odbywają się 1:1 w studiu przy
          ul. Angorskiej 3 na Saskiej Kępie w Warszawie, gdzie korzystamy
          z reformera i maty.
        </p>
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