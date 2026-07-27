import collection1 from "../assets/images/collection-1.jpg";
import collection2 from "../assets/images/collection-2.jpg";
import collection3 from "../assets/images/collection-3.jpg";
import collection4 from "../assets/images/collection-4.jpg";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import "./CollectionShowcase.css";

const EASE = [0.22, 1, 0.36, 1];

const PIECES = [
  {
    name: "Arc Floor Lamp",
    image: collection1,
    ratio: "3 / 4",
    offset: false,
  },
  {
    name: "Ridge Sideboard",
    image: collection2,
    ratio: "4 / 3",
    offset: true,
  },
  {
    name: "Woven Bench",
    image: collection3,
    ratio: "4 / 3",
    offset: true,
  },
  {
    name: "Field Stool",
    image: collection4,
    ratio: "3 / 4",
    offset: false,
  },
];

/**
 * CollectionShowcase
 * Deliberately image-only. Featured Collection already carries the
 * descriptive read and Featured Products already carries the spec sheet —
 * this section's job is pure visual rhythm, so it gets no card, no number,
 * no paragraph. Alternating vertical offsets give it a hand-laid,
 * magazine-spread feel instead of a uniform grid.
 */
function CollectionShowcase() {
  return (
    <section className="section showcase">
      <div className="wrap">
        <motion.span
          className="eyebrow showcase__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          The Wider Collection
        </motion.span>

        <div className="showcase__grid">
         {PIECES.map((piece, i) => (
  <motion.figure
    key={piece.name}
    className={`showcase__piece ${piece.offset ? "showcase__piece--offset" : ""}`}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: EASE, delay: (i % 2) * 0.1 }}
  >
    <ImagePlaceholder
      image={piece.image}
      label={piece.name}
      ratio={piece.ratio}
      showLabel={false}
    />

    <figcaption className="showcase__piece-name">
      {piece.name}
    </figcaption>
  </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionShowcase;
