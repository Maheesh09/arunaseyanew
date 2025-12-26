import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  opacity: number;
  delay: number;
}

const ChristmasAnimation = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Create 50 snowflakes with random properties
    const newSnowflakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 4, // 3-7 seconds
      size: 12 + Math.random() * 6, // 4-10px
      opacity: 0.3 + Math.random() * 0.7, // 0.3-1
      delay: Math.random() * 2, // 0-2 seconds
    }));

    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Snowflakes */}
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute top-0 text-white"
          style={{
            left: `${snowflake.left}%`,
            fontSize: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            animation: `fall ${snowflake.animationDuration}s linear infinite`,
            animationDelay: `${snowflake.delay}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default ChristmasAnimation;

