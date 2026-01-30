"use client";

export default function ParticleBackgroundTest() {
  return (
    <div
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        opacity: 0.3,
      }}
    >
      <p style={{ color: "white", padding: "20px", fontSize: "24px", fontWeight: "bold" }}>
        TEST: PARTICLES SHOULD BE HERE
      </p>
    </div>
  );
}
