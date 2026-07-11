"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import "./MovingCard.css";

interface MovingCardProps {
  image?: string;

  movementBound?: number;
  children?: ReactNode;
}

const MovingCard: React.FC<MovingCardProps> = ({
  image = "https://picsum.photos/300/400?grayscale",
  movementBound = 50,
  children,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const cursor = useRef({
    x: 0,
    y: 0,
  });

  const winsize = useRef({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    cursor.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    winsize.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const lerp = (a: number, b: number, n: number): number =>
      (1 - n) * a + n * b;

    const map = (
      x: number,
      a: number,
      b: number,
      c: number,
      d: number,
    ): number => ((x - a) * (d - c)) / (b - a) + c;

    const handleResize = (): void => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const handleMouseMove = (ev: MouseEvent): void => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    const render = () => {
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1,
      );

      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1,
      );

      const targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.1,
      );

      if (targetX > movementBound) targetX = movementBound;
      if (targetX < -movementBound) targetX = -movementBound;
      if (targetY > movementBound) targetY = movementBound;
      if (targetY < -movementBound) targetY = -movementBound;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      gsap.set(imageRef.current, {
        x: targetX,
        y: targetY,
        rotate: targetRz,
      });

      rafId = requestAnimationFrame(render);
    };

    let rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [movementBound]);

  return (
    <div className="relative">
      <img
        ref={imageRef}
        src={image}
        alt=""
        className="top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 w-full rounded-2xl"
      />

      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default MovingCard;
