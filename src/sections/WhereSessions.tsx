import { Card, H2, Lead, Row, Section, ImageFrame, Muted } from "./_ui";
import equipment from "../assets/equipment.jpg";
import reformer from "../assets/reformer.jpg";

export default function WhereSessions() {
  return (
    <Section tone="light">
      <H2>Gdzie odbywają się sesje</H2>

      <Lead>
        Najczęściej pracujemy tam, gdzie jest Ci najwygodniej — w Twoim domu, mieszkaniu, lub w biurze na terenie Warszawy.
        Jeśli zależy Ci na pracy z większym sprzętem, możemy również trenować na reformerze w studio w centrum.
      </Lead>

      <Row gap={18}>
        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <ImageFrame src={equipment} alt="Sesja Pilates w domu klienta" />
        </div>
        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <ImageFrame src={reformer} alt="Trening Pilates na reformerze" />
        </div>
      </Row>

      <div style={{ marginTop: 18 }}>
        <Row>
          <Card title="U Ciebie w domu lub w biurze" icon="🚗">
            Przyjeżdżam z potrzebnym małym sprzętem. Minimum organizacji, maksimum jakości i skupienia na pracy z ciałem.
          </Card>

          <Card title="Opcja z reformerem (centrum)" icon="🏙️">
            Dobry wybór, jeśli chcesz większej różnorodności ćwiczeń i stopniowego zwiększania oporu sprężyn.
            Lokalizacja: centrum Warszawy.
          </Card>

          <Card title="Elastyczne terminy" icon="🗓️">
            Poranki, godziny w ciągu dnia lub wieczory — w zależności od dostępności.
            Ustalamy rytm, który będzie dogodny dla obu stron.
          </Card>
        </Row>
      </div>

      <div style={{ marginTop: 18 }}>
        <Muted>
          Jeśli nie masz pewności, czy lepsza będzie praca w domu czy na reformerze,
          wspólnie zdecydujemy po pierwszej sesji.
        </Muted>
      </div>
    </Section>
  );
}
