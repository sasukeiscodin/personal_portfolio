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
          padding: "88px",
          background: "#0b0b0c",
          color: "#ededef",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Prathamesh Kasar
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9a9aa2",
            marginTop: 28,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Linux Systems · Networking · Server Monitoring
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 56,
            paddingTop: 28,
            borderTop: "1px solid #232325",
          }}
        >
          <div style={{ display: "flex", width: 12, height: 12, background: "#3fb950" }} />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#9a9aa2",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Open to roles · Pune, IN
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
