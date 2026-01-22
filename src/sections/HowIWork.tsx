import { Card, H2, Lead, Row, Section } from "./_ui";

export default function HowIWork() {
  return (
    <Section tone="soft">
      <H2>Jak pracuję</H2>

      <Lead>
        Sesje są spokojne, uporządkowane i nastawione na realną poprawę samopoczucia.
        Skupiamy się na tym, co najbardziej potrzebne Twojemu ciału — tak, aby efekty
        były odczuwalne nie tylko na treningu, ale też w codziennym życiu czy aktywności sportowej.
      </Lead>

      <Row>
        <Card title="1) Ocena i priorytety" icon="🎯">
          Sprawdzamy, co stoi za bólem, napięciem lub ograniczeniami
          (postawa, zakres ruchu, kontrola, siła) i wybieramy jasny kierunek pracy.
        </Card>

        <Card title="2) Trening z intencją" icon="🧩">
          Fundamenty Pilatesu, oddech, kontrola i stopniowe wzmacnianie —
          zawsze dopasowane do Twojego ciała, poziomu i celu.
        </Card>

        <Card title="3) Prosty i zrozumiały plan" icon="🗺️">
          Wiesz, co robimy i dlaczego. Jeśli chcesz, dostajesz krótkie,
          proste ćwiczenia do wykonania między sesjami.
        </Card>

        <Card title="4) Efekty, które czujesz" icon="📈">
          Mniej bólu i sztywności, lepsza postawa, większa siła i sprawność —
          oceniane przez to, jak poruszasz się i funkcjonujesz na co dzień.
        </Card>
      </Row>
    </Section>
  );
}
