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
      <H2>O mnie</H2>

      <Lead>
        Jestem certyfikowanym instruktorem Pilatesu. Pracuję w oparciu o biomechanikę,
        jakość ruchu i spokojne, uważne podejście do ciała.
        Moim celem jest realna ulga — zmniejszenie napięć, bólu i sztywności,
        szczególnie tych wynikających z siedzącego trybu życia, stresu
        lub jednostronnych obciążeń.
        Jednocześnie pomagam budować stabilność i sprawność, które przekładają się
        na lepszy ruch podczas codziennej aktywności oraz w sporcie.
      </Lead>

      <Row>
        <Card title="Indywidualna praca 1:1" icon="🤝">
          Każda sesja jest dopasowana do Twojego ciała, historii urazów,
          stylu życia i celów — niezależnie od tego, czy chcesz poczuć ulgę,
          czy poprawić jakość ruchu w rywalizacjach sportowych.
        </Card>

        <Card title="Bezpieczna i logiczna progresja" icon="🧘">
          Pracujemy krok po kroku, bez pośpiechu i presji.
          Skupiamy się na tym, aby ciało zaczęło pracować lżej i sprawniej —
          tak, żeby efekty były odczuwalne również poza sesją:
          w pracy, podczas spaceru, biegania czy innych form ruchu.
        </Card>

        <Card title="Spokojna komunikacja i zrozumienie ruchu" icon="💬">
          Tłumaczę jasno i konkretnie, bez motywacyjnego, fitnessowego żargonu.
          Zależy mi, abyś rozumiał/a, co robimy i po co —
          dzięki temu łatwiej przenieść efekty treningu na codzienne życie.
        </Card>
      </Row>

      {/* 3-photo mini gallery */}
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
              <ImageFrame src={img} alt="Indywidualna sesja Pilates – spokojna praca z ciałem" />
            </button>
          ))}
        </Row>
      </div>

      <div style={{ marginTop: 18 }}>
        <Muted>
          Te zdjęcia pokazują sposób, w jaki pracuję — spokojnie, precyzyjnie
          i z dużą uważnością na detale ruchu.
          Sesje odbywają się w domu klienta lub w kameralnym studio w centrum Warszawy,
          wyposażonym w reformer.
        </Muted>
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage}
          alt="Sesja Pilates – indywidualna praca nad ruchem"
          onClose={() => setActiveImage(null)}
        />
      )}
    </Section>
  );
}
