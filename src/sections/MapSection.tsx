import { H2, Lead, Section } from "./_ui";

export default function MapSection() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Angorska+3,+Warszawa";

  return (
    <Section tone="light">
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(28px, 5vw, 52px)",
          alignItems: "center",
        }}
      >
        <div>
          <H2>Jak do mnie trafić?</H2>

          <Lead>
            Studio znajduje się przy ul. Angorskiej 3 na Saskiej Kępie
            w Warszawie.
          </Lead>

         <div
           style={{
             marginTop: 26,
             padding: "22px 24px",
             border: "1px solid rgba(227, 161, 173, 0.2)",
             borderRadius: 20,
             background: "rgba(255, 255, 255, 0.045)",
           }}
         >
           <span
             style={{
               display: "block",
               marginBottom: 7,
               color: "#72cfa3",
               fontSize: 12,
               fontWeight: 700,
               letterSpacing: "0.08em",
               textTransform: "uppercase",
             }}
           >
             Adres studia
           </span>

           <strong
             style={{
               display: "block",
               color: "#f7f2f3",
               fontSize: 20,
               lineHeight: 1.4,
             }}
           >
             ul. Angorska 3
             <br />
             Saska Kępa, Warszawa
           </strong>
         </div>

         <p
           style={{
             margin: "18px 0 0",
             color: "rgba(247, 242, 243, 0.76)",
             fontSize: 15,
             lineHeight: 1.75,
           }}
         >
           Wokół studia obowiązuje strefa płatnego parkowania. W najbliższej
           okolicy znajduje się dużo miejsc postojowych, dlatego znalezienie
           miejsca na samochód zazwyczaj nie stanowi problemu.
         </p>

         <a
           href={directionsUrl}
           target="_blank"
           rel="noopener noreferrer"
           style={{
             display: "inline-flex",
             alignItems: "center",
             gap: 10,
             marginTop: 20,
             padding: "13px 19px",
             border: "1px solid rgba(114, 207, 163, 0.45)",
             borderRadius: 13,
             background: "rgba(72, 163, 120, 0.12)",
             color: "#72cfa3",
             textDecoration: "none",
             fontSize: 15,
             fontWeight: 700,
           }}
         >
           Wyznacz trasę w Google Maps
           <span aria-hidden>↗</span>
         </a>
        </div>

        <div
          style={{
            position: "relative",
            minHeight: 430,
            overflow: "hidden",
            border: "1px solid rgba(227, 161, 173, 0.22)",
            borderRadius: 26,
            background: "rgba(255, 255, 255, 0.04)",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.24)",
          }}
        >
          <iframe
            title="Mapa dojazdu do studia Bartosz Nowicki Pilates"
            src="https://www.google.com/maps?q=Angorska+3,+Warszawa&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              display: "block",
              border: 0,
            }}
          />
        </div>
      </div>
    </Section>
  );
}