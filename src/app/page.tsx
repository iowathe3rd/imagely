import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Nano-Frontiers: Reshaping Tech
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Nano-computing breaks barriers, unlocking new tech horizons.
            </p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <Image
              src="/images/hero.webp"
              className="rounded-xl"
              alt="Image Description"
              width={1024}
              height={480}
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
