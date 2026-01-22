import { Card, H2, Lead, Row, Section } from "./_ui";

export default function FirstSession() {
  return (
    <Section id="first-session" tone="soft">
      <H2>Jak wygląda pierwsza sesja</H2>

      <Lead>
        Pierwsza sesja ma spokojny, rzeczowy charakter.
        Ustalamy cele, sprawdzamy podstawy ruchu i od razu przechodzimy do treningu —
        w bezpiecznej formie, dopasowanej do Twojego ciała i aktualnych możliwości.
      </Lead>

      <Row>
        <Card title="Krótki wywiad" icon="📝">
          Rozmawiamy o Twoich celach, trybie życia (np. praca siedząca),
          dotychczasowej aktywności, ewentualnych bólach, napięciach
          lub ograniczeniach ruchowych.
        </Card>

        <Card title="Ocena ruchu" icon="🧭">
          Proste obserwacje pozwalają ocenić mobilność, kontrolę,
          oddech i sposób, w jaki ciało pracuje pod lekkim obciążeniem.
        </Card>

        <Card title="Pierwszy trening" icon="✅">
          Zaczynamy od rozsądnej bazy.
          Ćwiczenia mają zmniejszyć napięcia, poprawić czucie ciała i komfort ruchu,
          a w tle stopniowo wzmacniać siłę, równowagę, wytrzymałość, stabilność i mobilność.
        </Card>

        <Card title="Plan dalszej pracy" icon="➡️">
          Ustalamy kolejne kroki: częstotliwość treningów,
          obszary do wzmocnienia oraz kierunek progresji —
          zarówno pod kątem zdrowia, codziennej sprawności jak
          i poprawy biomechaniki ruchu w Twojej ulubionej dyscyplinie sportu
        </Card>
      </Row>
    </Section>
  );
}
