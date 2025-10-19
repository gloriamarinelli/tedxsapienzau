export default function GlowingCircles() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${450 + Math.random() * 250}px`, // even bigger
            height: `${450 + Math.random() * 250}px`,
            background: [
              "radial-gradient(circle at center, #f089b7, transparent 70%)",
              "radial-gradient(circle at center, #bb5c9e, transparent 70%)",
              "radial-gradient(circle at center, #94c459, transparent 70%)",
              "radial-gradient(circle at center, #2a84c6, transparent 70%)",
              "radial-gradient(circle at center, #f07e29, transparent 70%)",
              "radial-gradient(circle at center, #e9493b, transparent 70%)",
              "radial-gradient(circle at center, #28bdef, transparent 70%)",
              "radial-gradient(circle at center, #f9b531, transparent 70%)",
            ][i],
            top: `${i * 12 + Math.random() * 8}%`,
            left: `${i * 10 + Math.random() * 8}%`,
            borderRadius: "50%",
            filter: "blur(110px)",
            opacity: 0.7,
            mixBlendMode: "screen",
            animation: `floatGlow${i} ${
              20 + Math.random() * 10
            }s ease-in-out infinite alternate`, // faster (20–30s)
          }}
        />
      ))}

      <style>
        {`
      @keyframes floatGlow0 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(100px, -80px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(-80px, 80px) scale(1); opacity: 0.6; }
      }
      @keyframes floatGlow1 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-120px, 90px) scale(1.1); opacity: 0.8; }
        100% { transform: translate(100px, -90px) scale(0.9); opacity: 0.6; }
      }
      @keyframes floatGlow2 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(90px, 80px) scale(1.15); opacity: 0.7; }
        100% { transform: translate(-70px, -70px) scale(0.95); opacity: 0.5; }
      }
      @keyframes floatGlow3 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-100px, 70px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(80px, -80px) scale(1); opacity: 0.6; }
      }
      @keyframes floatGlow4 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(90px, -90px) scale(1.2); opacity: 0.7; }
        100% { transform: translate(-70px, 80px) scale(1); opacity: 0.5; }
      }
      @keyframes floatGlow5 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-100px, -80px) scale(1.15); opacity: 0.8; }
        100% { transform: translate(90px, 70px) scale(0.9); opacity: 0.6; }
      }
      @keyframes floatGlow6 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(120px, 100px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(-90px, -90px) scale(0.95); opacity: 0.5; }
      }
      @keyframes floatGlow7 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-130px, 80px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(100px, -80px) scale(0.9); opacity: 0.6; }
      }
    `}
      </style>
    </div>
  );
}
