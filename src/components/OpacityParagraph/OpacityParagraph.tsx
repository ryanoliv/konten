import { useRef, ReactNode } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

interface OpacityParagraphProps {
  paragraphText: string;
}

interface WordProps {
  children: ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

export default function OpacityParagraph({
  paragraphText,
}: OpacityParagraphProps) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraphText.split(" ");

  return (
    <p ref={element} className="services-text">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="word-shadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
}
