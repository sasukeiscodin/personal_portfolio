import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0e14",
          color: "#e7ebf2",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        <div style={{ display: "flex", color: "#4da6ff", fontSize: 28 }}>$ whoami</div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 20 }}>
          Prathamesh Kasar
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#8a93a6", marginTop: 20 }}>
          Linux System Administration · Server Monitoring · Incident Resolution
        </div>
      </div>
    ),
    { ...size }
  );
}
