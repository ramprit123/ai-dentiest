import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { TextEffect } from "@/components/ui/text-effect";
// import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

// Removed transitionVariants since we're not using animations

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                  AI-Powered Dental Care at Your Fingertips
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Get instant dental consultations, personalized treatment
                  plans, and expert advice from our AI-powered platform.
                  Transform your oral health with cutting-edge technology.
                </p>

                <div className="mt-12 flex items-center gap-2">
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base">
                      <Link href="#link">
                        <span className="text-nowrap">Get Consultation</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Learn More</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/mail2.webp"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/mail2-light.webp"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75">
                <span> Trusted by Dental Professionals</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  DentalCorp
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  SmileCare
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  OralHealth+
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  TeethTech
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  DentalAI
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  CavityGuard
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  BrightSmile
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  ToothWise
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
