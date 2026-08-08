import { ButtonLink, Card, H2, Lead, Row, Section } from "./_ui";

export default function FirstSession() {
  return (
    <Section id="first-session" tone="soft">
      <H2>Jak wygląda pierwsza sesja?</H2>

      <Lead>
        Nie musisz mieć doświadczenia z Pilatesem ani przygotowywać się do
        pierwszego spotkania. Zaczynamy od rozmowy, poznania Twoich potrzeb
        i wspólnie budujemy plan pracy. Pierwsza sesja ma spokojny charakter
        i pozwala nam dobrze się poznać.
      </Lead>

      <Row>
        <Card title="Poznajmy się" icon="○">
          Rozmawiamy o Twoich celach, dotychczasowej aktywności,
          stylu życia oraz oczekiwaniach wobec treningu.
          To pomaga mi przygotować program dopasowany właśnie do Ciebie.
        </Card>

        <Card title="Pierwsze ćwiczenia" icon="○">
          Już podczas pierwszego spotkania przechodzimy do praktyki.
          Pracujemy na reformerze i/lub macie, poznając podstawowe zasady
          Pilatesu oraz obserwując, jak porusza się Twoje ciało.
        </Card>

        <Card title="Trening dopasowany do Ciebie" icon="○">
          Ćwiczenia dobieram do Twoich możliwości, doświadczenia i
          samopoczucia. Jeśli w trakcie sesji okaże się, że warto coś
          zmienić, robimy to od razu.
        </Card>

        <Card title="Plan dalszej współpracy" icon="○">
          Na zakończenie wspólnie omawiamy pierwsze wrażenia i ustalamy
          kierunek dalszej pracy. Tempo rozwoju oraz częstotliwość
          spotkań zawsze dostosowujemy do Twoich potrzeb.
        </Card>
      </Row>

      <div
        style={{
          marginTop: 48,
          paddingTop: 28,
          borderTop: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <H2>Często zadawane pytania</H2>

        <div style={{ marginTop: 28, display: "grid", gap: 24 }}>
          <div>
            <h3>Czy muszę mieć doświadczenie z Pilatesem?</h3>

              Nie. Możesz zacząć od podstaw. Tempo pracy zawsze dopasowuję
              do Twoich możliwości, dlatego wcześniejsze doświadczenie
              nie jest potrzebne.

          </div>

          <div>
            <h3>Czy pierwsza sesja jest normalnym treningiem?</h3>

              Tak. Rozmawiamy, poznajemy Twoje cele, a następnie od razu
              przechodzimy do ćwiczeń. Dzięki temu mogę lepiej poznać Twój
              sposób poruszania się i zaplanować kolejne spotkania.

          </div>

          <div>
            <h3>Czy będę ćwiczyć na reformerze?</h3>

              Najczęściej tak. Reformer jest jednym z głównych narzędzi,
              z których korzystam. W zależności od celu sesji możemy również
              pracować na macie lub łączyć obie formy treningu.

          </div>

          <div>
            <h3>Jak się przygotować?</h3>

              Wystarczy wygodny strój, w którym możesz swobodnie się poruszać.
              Całą resztą zajmiemy się na miejscu.

          </div>

          <div>
            <h3>Czy mogę przyjść tylko na stretching?</h3>

              Oczywiście. Nie każda sesja musi być intensywnym treningiem.
              Jeśli po wymagającym dniu potrzebujesz przede wszystkim
              rozluźnienia, mobilności i spokojnej pracy z ciałem,
              możemy poświęcić całe spotkanie właśnie temu.

          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 42,
          padding: "32px 28px",
          borderRadius: 18,
          background: "rgba(0,0,0,0.03)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            marginBottom: 14,
            fontSize: 28,
          }}
        >
          Porozmawiajmy
        </h3>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto 24px",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Nie chcę, abyś zapisywał się na zajęcia w ciemno.
          Jeśli masz pytania, zastanawiasz się, czy Pilates 1:1 będzie
          odpowiedni dla Ciebie albo po prostu chcesz lepiej poznać mój
          sposób pracy, napisz do mnie na Messengerze.
        </p>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto 24px",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Chętnie odpowiem na Twoje pytania, opowiem o tym, jak prowadzę
          sesje i wspólnie zastanowimy się, jaka forma pracy będzie dla
          Ciebie najlepszym wyborem.
        </p>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto 32px",
            fontSize: 17,
            lineHeight: 1.8,
            fontWeight: 500,
          }}
        >
          Nie każda osoba potrzebuje takiego samego treningu.
          Być może Pilates 1:1 okaże się dokładnie tym, czego szukasz.
          A jeśli uznam, że lepszym rozwiązaniem będzie inna forma pracy,
          również uczciwie Ci o tym powiem.
          Zależy mi przede wszystkim na tym, abyś podjął dobrą decyzję.
        </p>

        <ButtonLink href="#contact" variant="primary">
          Napisz na Messengerze
        </ButtonLink>
      </div>
    </Section>
  );
}