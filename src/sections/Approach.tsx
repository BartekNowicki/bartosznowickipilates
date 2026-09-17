import { Card, DividerLabel, H2, Lead, Section } from "./_ui";

export default function Approach() {
  return (
    <Section tone="soft">
      <DividerLabel text="PODEJŚCIE" />

      <H2>Moje podejście</H2>

      <Lead>
        Pilates 1:1 na reformerze traktuję jako punkt wyjścia do szerszej
        pracy nad ruchem. Łączę współczesny Pilates z biomechaniką,
        treningiem funkcjonalnym oraz aktualną wiedzą z zakresu fizjoterapii
        i nauk o treningu.
      </Lead>

      <div
        style={{
          maxWidth: 820,
          marginTop: 38,
          marginBottom: 32,
        }}
      >
        <h3
          style={{
            margin: "0 0 14px",
            color: "#f7f2f3",
            fontSize: "clamp(25px, 3vw, 32px)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}
        >
          Ruch nie stoi w miejscu. Wiedza o nim również.
        </h3>

        <p
          style={{
            margin: 0,
            color: "rgba(247, 242, 243, 0.74)",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Pilates jest metodą rozwijaną od dziesięcioleci, ale nasza wiedza
          o ludzkim ciele, adaptacji do wysiłku i mechanice ruchu stale się
          poszerza. Dlatego korzystam z zasad Pilatesu, jednocześnie odnosząc
          sposób pracy do współczesnej wiedzy o ruchu i treningu.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        <Card title="Współczesny Pilates" icon="01">
          <p style={{ margin: 0 }}>
            Zachowuję to, co w tej metodzie najcenniejsze — precyzję,
            kontrolę, koncentrację i świadomą pracę z ciałem — ale nie
            trzymam się sztywno jednego schematu. Reformer i mata są
            narzędziami, które pozwalają dobrać ruch do konkretnej osoby,
            a nie odwrotnie.
          </p>
        </Card>

        <Card title="Biomechanika" icon="02">
          <p style={{ margin: 0 }}>
            Pomaga mi rozumieć, jak ciało wytwarza i przenosi siłę, organizuje
            ruch oraz jak zmienia się obciążenie stawów podczas ćwiczeń.
            Stanowi punkt odniesienia przy doborze pozycji, zakresu ruchu,
            oporu i progresji.
          </p>
        </Card>

        <Card title="Trening funkcjonalny" icon="03">
          <p style={{ margin: 0 }}>
            Rozwijamy realne możliwości ciała: siłę, mobilność, koordynację,
            stabilność i kontrolę ruchu. Dzięki temu efekty treningu mają
            pomagać Ci sprawniej poruszać się w codziennym życiu, pracy
            i innych aktywnościach.
          </p>
        </Card>

        <Card title="Podejście evidence-informed" icon="04">
          <p style={{ margin: "0 0 12px" }}>
            Aktualne badania, biomechanika, nauki o treningu oraz wiedza
            rozwijana przez fizjoterapię są ważnym punktem odniesienia przy
            podejmowaniu decyzji treningowych.
          </p>

          <p style={{ margin: 0 }}>
            Równie ważne pozostają jednak Twoje cele, doświadczenia,
            samopoczucie i indywidualna reakcja na konkretny ruch.
          </p>
        </Card>
      </div>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 30,
          padding: "clamp(28px, 5vw, 46px)",
          border: "1px solid rgba(114, 207, 163, 0.25)",
          borderRadius: 28,
          background: `
            radial-gradient(
              circle at 100% 0%,
              rgba(72, 163, 120, 0.17),
              transparent 42%
            ),
            linear-gradient(
              135deg,
              rgba(168, 60, 80, 0.14),
              rgba(255, 255, 255, 0.045)
            )
          `,
          boxShadow: "0 26px 70px rgba(0, 0, 0, 0.22)",
        }}
      >
        <div style={{ maxWidth: 880 }}>
          <h3
            style={{
              margin: "0 0 18px",
              color: "#f7f2f3",
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Nie ćwiczysz według schematu.
          </h3>

          <p
            style={{
              margin: "0 0 14px",
              color: "rgba(247, 242, 243, 0.78)",
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            Każda sesja Pilates 1:1 powstaje specjalnie dla Ciebie.
            Uwzględnia Twoje potrzeby, cele, poziom energii i aktualne
            samopoczucie.
          </p>

          <p
            style={{
              margin: "0 0 14px",
              color: "rgba(247, 242, 243, 0.78)",
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            Wspólnie możemy decydować o tempie, intensywności i kierunku
            pracy. Jednego dnia może to być mocniejszy trening na reformerze,
            innym razem spokojniejsza praca na macie, mobilność albo sesja
            nastawiona na stretching i rozluźnienie.
          </p>

          <p
            style={{
              margin: 0,
              color: "rgba(247, 242, 243, 0.78)",
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            Kolejne spotkania nie muszą wyglądać tak samo. Trening ma
            rozwijać ciało, ale powinien też być ciekawy i sprawiać
            przyjemność.
          </p>

          <div
            style={{
              marginTop: 30,
              padding: "20px 0 2px 22px",
              borderLeft: "3px solid #72cfa3",
            }}
          >
            <strong
              style={{
                display: "block",
                marginBottom: 8,
                color: "#72cfa3",
                fontSize: "clamp(21px, 3vw, 26px)",
                lineHeight: 1.4,
              }}
            >
              Wierzę, że najlepszy trening to taki, na który chce się wracać.
            </strong>

            <span
              style={{
                color: "rgba(247, 242, 243, 0.76)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Ruch powinien dawać poczucie postępu, ale również satysfakcję,
              swobodę i zwyczajną radość z ćwiczenia.
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}