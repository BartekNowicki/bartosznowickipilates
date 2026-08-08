import { H2, Lead, Section, Muted } from "./_ui";

export default function Approach() {
  return (
    <Section tone="light">
      <H2>Moje podejście</H2>

      <Lead>
        Pilates 1:1 na reformerze traktuję jako punkt wyjścia do szerszej pracy
        nad ruchem. Łączę współczesny Pilates z biomechaniką, treningiem
        funkcjonalnym oraz aktualną wiedzą z zakresu fizjoterapii i nauk
        o treningu.
      </Lead>

      <div style={{ maxWidth: 860, marginTop: 34 }}>
        <h3 style={{ fontSize: 28, marginBottom: 12 }}>
          Ruch nie stoi w miejscu. Wiedza o nim również.
        </h3>

        <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 30 }}>
          Pilates jest metodą rozwijaną od dziesięcioleci, ale nasza wiedza
          o ludzkim ciele, adaptacji do wysiłku i mechanice ruchu stale się
          poszerza. Dlatego nie traktuję Pilatesu jako zamkniętego zestawu
          ćwiczeń. Korzystam z jego zasad, jednocześnie odnosząc sposób pracy
          do współczesnej wiedzy o ruchu i treningu.
        </p>

        <div style={{ marginBottom: 30 }}>
          <h3 style={{ fontSize: 24, marginBottom: 10 }}>
            Współczesny Pilates
          </h3>

          <p style={{ fontSize: 17, lineHeight: 1.8, margin: 0 }}>
            Pracuję w nurcie współczesnego Pilatesu. Zachowuję to, co w tej
            metodzie najcenniejsze — precyzję, kontrolę, koncentrację i
            świadomą pracę z ciałem — ale nie trzymam się sztywno jednego
            schematu. Reformer i mata są dla mnie narzędziami, które pozwalają
            dobrać ruch do konkretnej osoby, a nie odwrotnie.
          </p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <h3 style={{ fontSize: 24, marginBottom: 10 }}>
            Biomechanika
          </h3>

          <p style={{ fontSize: 17, lineHeight: 1.8, margin: 0 }}>
            Biomechanika pomaga mi rozumieć, jak ciało wytwarza i przenosi
            siłę, jak organizuje ruch i jak zmienia się obciążenie stawów
            podczas różnych ćwiczeń. Stanowi ważny punkt odniesienia przy
            doborze pozycji, zakresu ruchu, oporu i progresji.
          </p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <h3 style={{ fontSize: 24, marginBottom: 10 }}>
            Trening funkcjonalny
          </h3>

          <p style={{ fontSize: 17, lineHeight: 1.8, margin: 0 }}>
            Trening funkcjonalny wnosi do mojej pracy nacisk na rozwijanie
            realnych możliwości ciała: siły, mobilności, koordynacji,
            stabilności i kontroli ruchu. Dzięki temu Pilates nie kończy się
            na reformerze — jego efekty mają pomagać Ci sprawniej poruszać się
            w codziennym życiu, pracy i innych aktywnościach.
          </p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <h3 style={{ fontSize: 24, marginBottom: 10 }}>
            Podejście evidence-informed
          </h3>

          <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 14 }}>
            Staram się pozostawać blisko świata nauki i aktualnych badań nad
            ludzkim ciałem. Współczesna biomechanika, nauki o treningu oraz
            wiedza rozwijana przez fizjoterapię są dla mnie ważnym punktem
            odniesienia przy podejmowaniu decyzji treningowych.
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.8, margin: 0 }}>
            Nie oznacza to jednak pracy według sztywnego podręcznika.
            Najlepsza dostępna wiedza jest tylko jednym z elementów.
            Równie ważne są Twoje cele, doświadczenia, samopoczucie i to,
            jak reagujesz na konkretny ruch.
          </p>
        </div>

        <div
          style={{
            marginTop: 42,
            paddingTop: 28,
            borderTop: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <h3
            style={{
              fontSize: 30,
              lineHeight: 1.25,
              margin: "0 0 16px",
            }}
          >
            Nie ćwiczysz według schematu.
          </h3>

          <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 14 }}>
            Każda sesja Pilates 1:1 powstaje specjalnie dla Ciebie.
            To, co proponuję danego dnia, uwzględnia Twoje potrzeby, cele,
            poziom energii i aktualne samopoczucie.
          </p>

          <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 14 }}>
            Możemy wspólnie decydować o tempie, intensywności i kierunku
            pracy. Niektórego dnia będzie to mocniejszy trening na reformerze,
            innym razem spokojniejsza praca na macie, mobilność albo
            sesja nastawiona głównie na stretching i rozluźnienie.
          </p>

          <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 24 }}>
            Dzięki temu kolejne spotkania nie muszą wyglądać tak samo.
            Nie ma potrzeby wpadać w rutynę ani powtarzać w kółko jednego
            zestawu ćwiczeń. Trening ma rozwijać ciało, ale powinien też
            być ciekawy i po prostu sprawiać przyjemność.
          </p>


            <strong>
              Wierzę, że najlepszy trening to taki, na który chce się wracać.
            </strong>
            <br />
            Ruch powinien dawać poczucie postępu, ale również satysfakcję,
            swobodę i zwyczajną radość z ćwiczenia.

        </div>
      </div>
    </Section>
  );
}