import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Kapoor's Villa";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily: "serif",
      }}
    >
      <h1 style={{ fontSize: 60, fontWeight: "bold", margin: 0 }}>{title}</h1>
      <p style={{ fontSize: 28, color: "#cbd5e1", marginTop: 16 }}>
        Luxury Stay & Private Pool Homestay
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
