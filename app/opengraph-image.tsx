import { ImageResponse } from "next/og";

export const alt = "LoEditamos — Diseño web, aplicaciones y edición de video";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#ffffff 0%,#f5f1ff 52%,#eaf1ff 100%)", color: "#111827", padding: "70px 78px", fontFamily: "sans-serif" }}>
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 999, right: -90, top: 30, background: "linear-gradient(145deg,#7c3aed,#2563eb)", opacity: .96 }} />
      <div style={{ position: "absolute", width: 380, height: 240, right: 70, top: 165, borderRadius: 22, border: "13px solid #111827", background: "linear-gradient(135deg,#17172b,#4c1d95)", boxShadow: "0 30px 70px rgba(34,20,90,.3)" }} />
      <div style={{ display: "flex", flexDirection: "column", width: 680 }}>
        <div style={{ display: "flex", fontSize: 38, fontWeight: 800, color: "#6d28d9", marginBottom: 74 }}>LoEditamos<span style={{ color: "#2563eb" }}>.</span></div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 66, lineHeight: 1.06, letterSpacing: -3, fontWeight: 700 }}><span>Creamos la solución digital que</span><span style={{ color: "#7c3aed", fontWeight: 900 }}>tu negocio necesita.</span></div>
        <div style={{ marginTop: 35, fontSize: 22, color: "#64748b" }}>Diseño web · Aplicaciones · Edición de video</div>
      </div>
    </div>, size
  );
}
