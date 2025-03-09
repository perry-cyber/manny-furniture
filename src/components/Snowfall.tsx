import { useEffect, useRef } from "react";

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let flakes: any[] = [];

    canvas.width = width;
    canvas.height = height;

    class Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 4 + 2;
        this.speed = Math.random() * 0.2 + 0.1; // Super slow
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize only 4 snowflakes
    for (let i = 0; i < 4; i++) {
      flakes.push(new Snowflake());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      flakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      flakes = [];
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />;
};

export default Snowfall;
