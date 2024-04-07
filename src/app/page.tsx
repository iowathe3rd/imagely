"use client";

import Features from "@/sections/home/Features";
import Hero from "@/sections/home/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function HomePage() {
  const container = useRef<HTMLElement | any>();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.8,
        rotation: -2,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "power3.out", // Добавляем easing функцию для плавности анимации
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Запускаем анимацию при достижении 80% видимости контейнера
        },
      },
    );
  });

  return (
    <React.Fragment>
      <Hero />
      <Features />
    </React.Fragment>
  );
}
