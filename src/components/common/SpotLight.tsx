"use client";

import { useState } from "react";

type SpotLightProps = {
  color?: string;
  size?: string;
  opacity?: number;
  className?: string;
  children: React.ReactNode;
};

const SpotLight = ({
  color = "rgba(255,255,255,0.08)",
  size = "70%",
  opacity = 1,
  className,
  children,
}: SpotLightProps) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden inline-block w-fit ${className || ""}`}
    >
      {/* Spotlight */}
      <span
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${color}, transparent ${size})`,
          opacity: visible ? opacity : 0,
          borderRadius: "inherit",
        }}
      />

      {children}
    </div>
  );
};

export default SpotLight;
