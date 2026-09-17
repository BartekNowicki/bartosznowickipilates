import { ButtonLink, Card, H2, Lead, Section } from "./_ui";

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details
      style={{
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.11)",
        borderRadius: 18,
        background: "rgba(255, 255, 255, 0.045)",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.14)",
      }}
    >
      <summary
        style={{
          padding: "20px 22px",
          color: "#f7f2f3",
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.4,
          cursor: "pointer",
        }}
      >
        {question}
      </summary>

      <div
        style={{
          padding: "0 22px 22px",
          color: "rgba(247, 242, 243, 0.74)",
          fontSize: 16,
          lineHeight: 1.75,
        }}
      >
        {children}
      </div>
    </details>
  );
}

export default function FirstSession() {
  return (
    <Section id="first-session" tone="light">
      <H2>Jak wygląda pierwsza sesja?</H2>

      <Lead>
        Nie musisz mieć doświadczenia z Pilatesem ani przygotowywać się do
        pierwszego spotkania. Zaczynamy od rozmowy, poznania Twoich potrzeb
        i wspólnie budujemy plan pracy. Pierwsza sesja ma spokojny charakter
        i pozwala nam dobrze się poznać.
      </Lead>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 20,
          marginTop: 38,
        }}
      >
        <Card title="Poznajmy się" icon="01">
          <p style={{ margin: 0 }}>
            Rozmawiamy o Twoich celach, dotychczasowej aktywności,
            stylu życia oraz oczekiwaniach wobec treningu.
            To pomaga mi przygotować program dopasowany właśnie do Ciebie.
          </p>
        </Card>

        <Card title="Pierwsze ćwiczenia" icon="02">
          <p style={{ margin: 0 }}>
            Już podczas pierwszego spotkania przechodzimy do praktyki.
            Pracujemy na reformerze i/lub macie, poznając podstawowe zasady
            Pilatesu oraz obserwując, jak porusza się Twoje ciało.
          </p>
        </Card>

        <Card title="Trening dopasowany do Ciebie" icon="03">
          <p style={{ margin: 0 }}>
            Ćwiczenia dobieram do Twoich możliwości, doświadczenia i
            samopoczucia. Jeśli w trakcie sesji okaże się, że warto coś
            zmienić, robimy to od razu.
          </p>
        </Card>

        <Card title="Plan dalszej współpracy" icon="04">
          <p style={{ margin: 0 }}>
            Na zakończenie wspólnie omawiamy pierwsze wrażenia i ustalamy
            kierunek dalszej pracy. Tempo rozwoju oraz częstotliwość
            spotkań zawsze dostosowujemy do Twoich potrzeb.
          </p>
        </Card>
      </div>

      <div
        style={{
          marginTop: "clamp(64px, 8vw, 92px)",
          paddingTop: "clamp(42px, 6vw, 64px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <H2>Często zadawane pytania</H2>

        <div
          style={{
            display: "grid",
            gap: 14,
            maxWidth: 920,
            marginTop: 30,
          }}
        >
          <FaqItem question="Czy muszę mieć doświadczenie z Pilatesem?">
            Nie. Możesz zacząć od podstaw. Tempo pracy zawsze dopasowuję
            do Twoich możliwości, dlatego wcześniejsze doświadczenie
            nie jest potrzebne.
          </FaqItem>

          <FaqItem question="Czy pierwsza sesja jest normalnym treningiem?">
            Tak. Rozmawiamy, poznajemy Twoje cele, a następnie od razu
            przechodzimy do ćwiczeń. Dzięki temu mogę lepiej poznać Twój
            sposób poruszania się i zaplanować kolejne spotkania.
          </FaqItem>

          <FaqItem question="Czy będę ćwiczyć na reformerze?">
            Najczęściej tak. Reformer jest jednym z głównych narzędzi,
            z których korzystam. W zależności od celu sesji możemy również
            pracować na macie lub łączyć obie formy treningu.
          </FaqItem>

          <FaqItem question="Jak się przygotować?">
            Wystarczy wygodny strój, w którym możesz swobodnie się poruszać.
            Całą resztą zajmiemy się na miejscu.
          </FaqItem>

          <FaqItem question="Czy mogę przyjść tylko na stretching?">
            Oczywiście. Nie każda sesja musi być intensywnym treningiem.
            Jeśli po wymagającym dniu potrzebujesz przede wszystkim
            rozluźnienia, mobilności i spokojnej pracy z ciałem,
            możemy poświęcić całe spotkanie właśnie temu.
          </FaqItem>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 48,
          padding: "clamp(30px, 6vw, 54px)",
          border: "1px solid rgba(227, 161, 173, 0.22)",
          borderRadius: 28,
          background: `
            radial-gradient(
              circle at 100% 0%,
              rgba(72, 163, 120, 0.16),
              transparent 42%
            ),
            linear-gradient(
              135deg,
              rgba(168, 60, 80, 0.15),
              rgba(255, 255, 255, 0.045)
            )
          `,
          boxShadow: "0 26px 70px rgba(0, 0, 0, 0.22)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0 0 18px",
            color: "#f7f2f3",
            fontSize: "clamp(28px, 4vw, 38px)",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}
        >
          Porozmawiajmy
        </h3>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto 24px",
            color: "rgba(247, 242, 243, 0.76)",
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
            color: "rgba(247, 242, 243, 0.76)",
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
            margin: "0 auto 34px",
            color: "rgba(247, 242, 243, 0.84)",
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