import { Card, H2, Lead, Section } from "./_ui";

export default function HowIWork() {
  return (
    <Section tone="light">
      <H2>Jak pracuję</H2>

      <Lead>
        Sesje są spokojne, uporządkowane i nastawione na realną poprawę
        samopoczucia. Skupiamy się na tym, co najbardziej potrzebne Twojemu
        ciału — tak, aby efekty były odczuwalne nie tylko na treningu, ale też
        w codziennym życiu czy aktywności sportowej.
      </Lead>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 20,
          marginTop: 38,
          alignItems: "stretch",
        }}
      >
        <Card title="1) Ocena i priorytety" icon="🎯">
          <p style={{ margin: 0 }}>
            Sprawdzamy, co stoi za bólem, napięciem lub ograniczeniami
            (postawa, zakres ruchu, kontrola, siła) i wybieramy jasny kierunek
            pracy.
          </p>
        </Card>

        <Card title="2) Trening z intencją" icon="🧩">
          <p style={{ margin: 0 }}>
            Fundamenty Pilatesu, oddech, kontrola i stopniowe wzmacnianie —
            zawsze dopasowane do Twojego ciała, poziomu i celu.
          </p>
        </Card>

        <Card title="3) Prosty i zrozumiały plan" icon="🗺️">
          <p style={{ margin: 0 }}>
            Wiesz, co robimy i dlaczego. Jeśli chcesz, dostajesz krótkie,
            proste ćwiczenia do wykonania między sesjami.
          </p>
        </Card>

        <Card title="4) Efekty, które czujesz" icon="📈">
          <p style={{ margin: 0 }}>
            Mniej bólu i sztywności, lepsza postawa, większa siła i sprawność —
            oceniane przez to, jak poruszasz się i funkcjonujesz na co dzień.
          </p>
        </Card>
      </div>
    </Section>
  );
}