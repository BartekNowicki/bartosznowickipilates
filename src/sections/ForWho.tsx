import { Card, H2, Lead, Row, Section } from "./_ui";

export default function ForWho() {
  return (
    <Section tone="light">
      <H2>Dlaczego warto wybrać trening 1:1?</H2>

      <Lead>
        Trening indywidualny daje możliwość pełnego dopasowania programu
        do Twoich potrzeb, celów, możliwości i samopoczucia.
        Nie ma jednej ścieżki ani gotowego scenariusza —
        każda sesja powstaje specjalnie dla Ciebie.
      </Lead>

      <Row>
        <Card title="Pełna indywidualizacja" icon="○">
          Program nie jest gotowym zestawem ćwiczeń. Dobieram go do Twojego
          ciała, doświadczenia, celów i tego, czego potrzebujesz właśnie
          danego dnia.
        </Card>

        <Card title="Tempo dopasowane do Ciebie" icon="○">
          Nie musisz nadążać za grupą ani dostosowywać się do innych.
          Możemy zwolnić, zatrzymać się przy danym ruchu albo zwiększyć
          intensywność wtedy, gdy jesteś na to gotowy.
        </Card>

        <Card title="Różnorodność bez rutyny" icon="○">
          Kolejne sesje nie muszą wyglądać tak samo. Możemy łączyć pracę
          na reformerze i macie, trening siłowy, mobilność, kontrolę ruchu
          czy spokojny stretching — zależnie od celu i samopoczucia.
        </Card>

        <Card title="Świadoma praca z ciałem" icon="○">
          Tłumaczę, co robimy i dlaczego. Dzięki temu trening nie polega
          jedynie na odtwarzaniu ćwiczeń — z czasem coraz lepiej rozumiesz
          własne ciało i sposób, w jaki się poruszasz.
        </Card>

        <Card title="Spokojna atmosfera" icon="○">
          Sesja odbywa się wyłącznie 1:1. Bez tłumu, presji i porównywania
          się z innymi. Możesz skupić się na ruchu, zadawać pytania
          i pracować we własnym rytmie.
        </Card>

        <Card title="Radość z ruchu" icon="○">
          Trening ma rozwijać ciało, ale powinien też sprawiać przyjemność.
          Zależy mi, aby sesje były ciekawe, różnorodne i dawały satysfakcję.
          Najlepszy trening to taki, na który chce się wracać.
        </Card>
      </Row>

      <div style={{ marginTop: 24, fontStyle: "italic" }}>

          Pilates 1:1 może być zarówno główną formą treningu, jak i
          uzupełnieniem biegania, treningu siłowego czy innych aktywności.
          Jeśli masz ból, świeży uraz lub wątpliwości dotyczące bezpieczeństwa
          ćwiczeń, warto wcześniej skonsultować się z lekarzem lub
          fizjoterapeutą. W razie potrzeby dostosuję trening do ich zaleceń.

      </div>
    </Section>
  );
}