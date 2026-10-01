import { ImageResponse } from "next/og";

export const alt = "John Rey Silverio — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        color: "#ececec",
        background:
          "radial-gradient(circle at 82% 18%, rgba(76,175,80,.34), transparent 32%), linear-gradient(135deg, #101412 0%, #1a1a1a 56%, #202820 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#4caf50",
            color: "#101412",
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          JR
        </div>
        <div style={{ fontSize: 28, color: "#aeb8b0" }}>johnreysilverio.com</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3 }}>
          John Rey Silverio
        </div>
        <div style={{ fontSize: 38, color: "#69d36e" }}>Full Stack Developer</div>
        <div style={{ fontSize: 25, color: "#aeb8b0" }}>
          Next.js · React · TypeScript · Node.js
        </div>
      </div>
    </div>,
    size,
  );
}
