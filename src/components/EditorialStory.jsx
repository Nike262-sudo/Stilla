import editorial from "../assets/images/editorial.jpg";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import "./EditorialStory.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * EditorialStory
 * A true full-bleed photograph (breaks out of the 1200px container) paired
 * with a large serif pull-quote below — the page's one moment of magazine-
 * spread scale, used exactly once so it stays a moment rather than a habit.
 */
function EditorialStory() {
  return (
    <section className="editorial">
     <motion.div
  className="editorial__image"
  initial={{ opacity: 0, scale: 1.04 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 1.1, ease: EASE }}
>
  <img
    src={editorial}
    alt="Editorial"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</motion.div>

      <div className="wrap editorial__quote-wrap">
        <motion.blockquote
          className="editorial__quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          <p className="headline editorial__quote-text">
            "We don't ask what's fashionable. We ask what a chair needs to
            still be good in sixty years. Everything else is decoration."
          </p>
          <cite className="editorial__quote-cite">
            Anders Lindqvist — Founder &amp; Head of Design
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}

export default EditorialStory;
