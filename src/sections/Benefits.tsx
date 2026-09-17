import { Card, H2, Lead, Row, Section } from "./_ui";

export default function Benefits() {
  return (
    <Section tone="soft">
      <H2>Dlaczego warto wybrać trening 1:1?</H2>

      <Lead>
        Trening indywidualny daje możliwość pełnego dopasowania programu
        do Twoich potrzeb, celów, możliwości i samopoczucia.
        Nie ma jednej ścieżki ani gotowego scenariusza —
        każda sesja powstaje specjalnie dla Ciebie.
      </Lead>

      <div style={{ marginTop: 38 }}>
        <Row gap={20}>
          <Card title="Pełna indywidualizacja" icon="01">
            <p style={{ margin: 0 }}>
              Program nie jest gotowym zestawem ćwiczeń. Dobieram go do Twojego
              ciała, doświadczenia, celów i tego, czego potrzebujesz właśnie
              danego dnia.
            </p>
          </Card>

          <Card title="Tempo dopasowane do Ciebie" icon="02">
            <p style={{ margin: 0 }}>
              Nie musisz nadążać za grupą ani dostosowywać się do innych.
              Możemy zwolnić, zatrzymać się przy danym ruchu albo zwiększyć
              intensywność wtedy, gdy jesteś na to gotowy.
            </p>
          </Card>

          <Card title="Różnorodność bez rutyny" icon="03">
            <p style={{ margin: 0 }}>
              Kolejne sesje nie muszą wyglądać tak samo. Możemy łączyć pracę
              na reformerze i macie, trening siłowy, mobilność, kontrolę ruchu
              czy spokojny stretching — zależnie od celu i samopoczucia.
            </p>
          </Card>

          <Card title="Świadoma praca z ciałem" icon="04">
            <p style={{ margin: 0 }}>
              Tłumaczę, co robimy i dlaczego. Dzięki temu trening nie polega
              jedynie na odtwarzaniu ćwiczeń — z czasem coraz lepiej rozumiesz
              własne ciało i sposób, w jaki się poruszasz.
            </p>
          </Card>

          <Card title="Spokojna atmosfera" icon="05">
            <p style={{ margin: 0 }}>
              Sesja odbywa się wyłącznie 1:1. Bez tłumu, presji i porównywania
              się z innymi. Możesz skupić się na ruchu, zadawać pytania
              i pracować we własnym rytmie.
            </p>
          </Card>

          <Card title="Radość z ruchu" icon="06">
            <p style={{ margin: 0 }}>
              Trening ma rozwijać ciało, ale powinien też sprawiać przyjemność.
              Zależy mi, aby sesje były ciekawe, różnorodne i dawały satysfakcję.
              Najlepszy trening to taki, na który chce się wracać.
            </p>
          </Card>
        </Row>
      </div>

      <aside
        style={{
          marginTop: 28,
          padding: "clamp(22px, 4vw, 30px)",
          border: "1px solid rgba(227, 161, 173, 0.2)",
          borderRadius: 20,
          background: `
            linear-gradient(
              135deg,
              rgba(168, 60, 80, 0.12),
              rgba(255, 255, 255, 0.035)
            )
          `,
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.16)",
        }}
      >
        <p
          style={{
            maxWidth: 920,
            margin: 0,
            paddingLeft: 20,
            borderLeft: "3px solid #e3a1ad",
            color: "rgba(247, 242, 243, 0.76)",
            fontSize: 16,
            fontStyle: "italic",
            lineHeight: 1.75,
          }}
        >
          Pilates 1:1 może być zarówno główną formą treningu, jak i
          uzupełnieniem biegania, treningu siłowego czy innych aktywności.
          Jeśli masz ból, świeży uraz lub wątpliwości dotyczące bezpieczeństwa
          ćwiczeń, warto wcześniej skonsultować się z lekarzem lub
          fizjoterapeutą. W razie potrzeby dostosuję trening do ich zaleceń.
        </p>
      </aside>
    </Section>
  );
}