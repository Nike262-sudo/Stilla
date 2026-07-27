import craftsmanship from "../assets/images/craftsmanship.jpg";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import "./Craftsmanship.css";

const EASE = [0.22, 1, 0.36, 1];

const STAGES = [
  { stage: "Season", detail: "Up to 18 months, stacked and air-dried before a blade touches it." },
  { stage: "Join", detail: "Hand-cut mortise and tenon. No fasteners, no visible screws." },
  { stage: "Finish", detail: "Hardwax oil, rubbed in by hand and cured over three days." },
];

/**
 * Craftsmanship
 * A constrained reading-width paragraph paired with a tall detail image in
 * an asymmetric two-column layout. The process list is a genuine sequence
 * — season, join, finish — so ordering it is informational, not decorative.
 */
function Craftsmanship() {
  return (
    <section className="section section--warm craftsmanship" id="craftsmanship">
      <div className="wrap craftsmanship__grid">
        <motion.div
          className="craftsmanship__image"
          initial={{ opacity: 0, clipPath: "inset(0 0 8% 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE }}
        >
         <img
  src={craftsmanship}
  alt="Craftsmanship Detail — Joinery"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
   }}
  />
</motion.div>

        <div className="craftsmanship__text">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Craftsmanship
          </motion.span>

          <motion.h2
            className="headline craftsmanship__heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          >
            Slower than it needs to be, on purpose.
          </motion.h2>

          <motion.p
            className="reading craftsmanship__paragraph"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
          >
            A Bevel Chair takes eleven weeks from felled tree to finished
            seat, and most of that time is spent doing nothing at all.
            Rough-sawn oak rests in our drying room for months before a
            single cut is made — wood that hasn't finished moving will fight
            you for years afterward. We'd rather wait.
          </motion.p>

          <motion.ul
            className="craftsmanship__stages"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
          >
            {STAGES.map((item) => (
              <li key={item.stage} className="craftsmanship__stage">
                <span className="craftsmanship__stage-name">{item.stage}</span>
                <span className="craftsmanship__stage-detail">{item.detail}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default Craftsmanship;
