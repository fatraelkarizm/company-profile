"use client";

import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  animationData?: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  fallback?: React.ReactNode;
}

// Simple animation data for demo (a bouncing dot)
const defaultAnimationData = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Bounce",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [100, 100] },
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 60, s: [100, 50] },
            { t: 120, s: [100, 100] }
          ]
        },
        a: { a: 0, k: [0, 0] },
        s: { a: 0, k: [100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [50, 50] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ],
      ip: 0,
      op: 120,
      st: 0
    }
  ]
};

export function LottieAnimation({
  animationData = defaultAnimationData,
  loop = true,
  autoplay = true,
  className = "",
  fallback = <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse" />
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current && autoplay) {
      lottieRef.current.play();
    }
  }, [autoplay]);

  if (!animationData) {
    return <>{fallback}</>;
  }

  return (
    <div className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}