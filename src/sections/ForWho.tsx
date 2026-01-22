import { Card, H2, Lead, Row, Section, Muted } from "./_ui";

export default function ForWho() {
  return (
    <Section tone="light">
      <H2>Dla kogo są te zajęcia</H2>

      <Lead>
        Jeśli czujesz, że Twoje ciało jest mniej sprawne, obolałe lub przeciążone przez
        siedzącą pracę, stres, podróże albo nieregularną aktywność,
        zajęcia indywidualne to spokojny i skuteczny sposób,
        żeby odzyskać siłę, mobilność i lepsze samopoczucie.
      </Lead>

      <Muted>
        Dla jednych to realna ulga w bólach i napięciach,
        dla innych — poprawa siły, wytrzymałości i sprawności,
        która przekłada się na sport i codzienne funkcjonowanie.
      </Muted>

      <Row>
        <Card title="Osoby przytłoczone napiętym grafikiem" icon="🧑‍💼">
          Chcesz treningu, który szanuje Twój czas,
          jest konkretny i przynosi realne efekty — bez chaosu i przypadkowych ćwiczeń.
        </Card>

        <Card title="Napięcia i sztywność od siedzenia" icon="💻">
          Sztywne biodra, plecy, kark lub barki?
          Pracujemy nad mobilnością i siłą w kontrolowany, bezpieczny sposób.
        </Card>

        <Card title="Bezpieczny powrót do ruchu" icon="🧠">
          Jeśli miałeś przerwę w treningach albo czujesz niepewność,
          zaczynamy spokojnie i budujemy formę krok po kroku.
        </Card>

        <Card title="Osoby ceniące prywatność" icon="🏠">
          Bez zatłoczonych sal i presji grupy.
          Skupiona praca 1:1, w komfortowym i spokojnym otoczeniu.
        </Card>
      </Row>

      <div style={{ marginTop: 22 }}>
        <Muted>
          Uwaga: nie prowadzę terapii medycznej.
          W przypadku ostrych urazów lub niepokojących objawów
          poproszę Cię najpierw o konsultację z lekarzem lub fizjoterapeutą.
          Bezpieczeństwo stawiam zawsze na pierwszym miejscu.
        </Muted>
      </div>
    </Section>
  );
}
