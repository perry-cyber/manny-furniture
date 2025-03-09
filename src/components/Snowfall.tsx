import { useEffect, useRef } from "react";

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let flakes: any[] = [];
    let mouseX = -1;
    let mouseY = -1;

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
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 2 + 0.5;
        this.opacity = Math.random();
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }

        // If the flake is near the cursor, move it away
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          this.y -= 10; // Move snowflake upward to simulate clearing the way
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize snowflakes
    for (let i = 0; i < 100; i++) {
      flakes.push(new Snowflake());
    }

    // Handle resizing
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      flakes = [];
      for (let i = 0; i < 100; i++) {
        flakes.push(new Snowflake());
      }
    };

    // Track mouse position
    const trackMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      flakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", trackMouse);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />;
};

export default Snowfall;
