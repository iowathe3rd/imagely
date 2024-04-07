import gsap from "gsap";

// Configuring GSAP with custom settings that aren't Tween-specific
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

// Setting default animation properties that should be inherited by ALL tweens
gsap.defaults({
  duration: 1000,
  ease: "elastic.in",
});

// Once the desired configurations are set, we simply export what we need to work with in the future.
export { gsap };
