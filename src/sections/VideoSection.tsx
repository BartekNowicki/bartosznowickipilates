import { Section } from "./_ui";

import introVideo from "../assets/Intro.mp4";
import stretchingVideo from "../assets/pilates_stretching.mp4";

export default function VideoSection() {
  const instagram =
    "https://www.instagram.com/bartosznowickipilates";

  return (
    <Section tone="soft">
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: "0 0 14px",
            color: "#f7f2f3",
            fontSize: "clamp(30px, 4vw, 42px)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            textAlign: "center",
          }}
        >
          Zobacz, jak pracuję
        </h2>

        <p
          style={{
            maxWidth: 700,
            margin: "0 auto",
            color: "rgba(247, 242, 243, 0.76)",
            fontSize: 18,
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          Zobacz fragmenty indywidualnych sesji Pilates 1:1 oraz spokojnej
          pracy nastawionej na stretching, mobilność i rozluźnienie.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(24px, 4vw, 38px)",
          maxWidth: 860,
          margin: "38px auto 0",
          alignItems: "start",
        }}
      >
        <VideoCard
          src={introVideo}
          title="Indywidualna praca 1:1"
          description="
            Każda sesja jest prowadzona indywidualnie i dopasowana do
            potrzeb, możliwości oraz samopoczucia osoby, z którą pracuję.
          "
        />

        <VideoCard
          src={stretchingVideo}
          title="Pilates Stretching"
          description="
            Nie każda sesja musi być intensywnym treningiem. Możemy skupić
            się na spokojnym ruchu, mobilności i przyjemnym stretchingu.
          "
        />
      </div>

      <div
        style={{
          marginTop: 36,
          textAlign: "center",
        }}
      >
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "13px 19px",
            border: "1px solid rgba(227, 161, 173, 0.34)",
            borderRadius: 13,
            background: "rgba(168, 60, 80, 0.1)",
            color: "#e3a1ad",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          Zobacz więcej na Instagramie
          <span aria-hidden>↗</span>
        </a>
      </div>
    </Section>
  );
}

function VideoCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <article
      style={{
        overflow: "hidden",
        border: "1px solid rgba(227, 161, 173, 0.2)",
        borderRadius: 26,
        background: "rgba(255, 255, 255, 0.045)",
        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.22)",
      }}
    >
      <div
        style={{
          padding: 8,
          background:
            "linear-gradient(145deg, rgba(168, 60, 80, 0.16), rgba(114, 207, 163, 0.08))",
        }}
      >
        <video
          controls
          playsInline
          preload="metadata"
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "9 / 16",
            objectFit: "cover",
            borderRadius: 19,
            background: "#151112",
          }}
        >
          <source src={src} type="video/mp4" />
          Twoja przeglądarka nie obsługuje odtwarzania filmów.
        </video>
      </div>

      <div
        style={{
          padding: "22px 22px 25px",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px",
            color: "#f7f2f3",
            fontSize: 21,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            color: "rgba(247, 242, 243, 0.75)",
            fontSize: 15,
            lineHeight: 1.75,
          }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}