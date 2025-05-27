"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heading = "How It Works";

export default function ScrollHighlight() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".word");

    const ctx = gsap.context(() => {
      gsap.set(words, { opacity: 0.1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "bottom bottom", 
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      words.forEach((word) => {
        tl.to(word, { opacity: 1, duration: 0.1 }, "+=0.1");
      });
    }, containerRef);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        ScrollTrigger.refresh();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      ctx.revert();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const paragraphStyles = {
    fontSize: "50px",
    color: "#000",
    lineHeight: "1.3",
  };

  const wrapWords = (text, keyPrefix) =>
    text.split(" ").map((word, i) => (
      <span
        key={`${keyPrefix}-${i}`}
        className="word"
        style={{
          display: "inline-block",
          transition: "opacity 0.2s",
        }}
      >
        {word} 
      </span>
    ));

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "200vh", 
        padding: "2rem",
        textAlign: "center",
        zIndex: '999'
      }}
    >
      <div
        ref={contentRef}
        style={{
          position: "sticky",
          top: "0%",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "1rem",
            color: "#000",
            lineHeight: "1.3",
          }}
        >
          {wrapWords(heading, "heading")}
        </h1>
        <p style={paragraphStyles}>
          {wrapWords("Choose a packaging style, quantity, and size custom or stock.", "p1")}
        </p>
        <p style={paragraphStyles}>
          {wrapWords("To get started on your design and layout, download one of", "p2")}
          <br />
          {wrapWords("our pre-made design templates here.", "p2")}
        </p>
        <p style={paragraphStyles}>
          {wrapWords("The die-lines in each template file directly reflect the die lines we", "p3")}
          <br />
          {wrapWords("use to produce your box, so you can be assured that what you see", "p3")}
          <br />
          {wrapWords("in your design file is 100% accurate to the box you will receive!", "p3")}
        </p>
        <p style={paragraphStyles}>
          {wrapWords("Design your box with images, text, and colors. Get an instant quote", "p4")}
          <br />
          {wrapWords("as you create!", "p4")}
        </p>
      </div>
    </section>
  );
}