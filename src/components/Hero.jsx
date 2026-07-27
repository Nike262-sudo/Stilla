import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import "./Hero.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Hero
 * The page's thesis: a single editorial headline, one short paragraph, one
 * button, one large image. Text reveals in a quiet upward stagger on load;
 * the image reveals via a clip-path wipe and drifts gently on scroll.
 */
function Hero() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section className="hero" id="top">
      <div className="wrap hero__text">
        <motion.h1
          className="headline hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          Furniture built
          <br />
          to be inherited.
        </motion.h1>

        <motion.p
          className="hero__paragraph"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          Each piece begins as rough oak or walnut and leaves the workshop
          only once every joint has been cut, tested, and cut again. We build
          for the version of your family that hasn't arrived yet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
        >
          <a href="#collection" className="btn hero__cta">
            View the Collection
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </motion.div>
      </div>

      <div className="hero__image" ref={imageRef}>
        <motion.div
          className="hero__image-reveal"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.2 }}
        >
          <motion.div className="hero__image-parallax" style={{ y: parallaxY }}>
            <ImagePlaceholder
              label="Living Room — Copenhagen Apartment"
              ratio="16 / 10"
              tone="warm"
              plate="Plate 01"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
