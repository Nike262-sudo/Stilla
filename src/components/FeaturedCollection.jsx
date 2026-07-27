import featured1 from "../assets/images/featured.jpg";
import featured2 from "../assets/images/featured-2.jpg";
import featured3 from "../assets/images/featured-3.jpg";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import "./FeaturedCollection.css";

const EASE = [0.22, 1, 0.36, 1];

const PIECES = [
  {
    number: "N° 01",
    name: "The Bevel Chair",
    material: "American white oak",
    detail: "Hand-caned seat. Waxed, never lacquered.",
    image: featured1,
    ratio: "4 / 5",
  },
  {
    number: "N° 02",
    name: "Hearth Table",
    material: "Solid walnut",
    image: featured2,
    ratio: "5 / 4",
  },
  {
    number: "N° 03",
    name: "Fold Cabinet",
    material: "Ash and blackened steel",
    image: featured3,
    ratio: "5 / 4",
  },
];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE, delay },
});

/**
 * FeaturedCollection
 * One lead piece, given the full editorial treatment — a descriptive line,
 * larger type — beside two smaller pieces that carry only a name and
 * material. The imbalance is deliberate: only one thing in this section
 * asks for a close read, so only one thing gets the extra sentence.
 */
function FeaturedCollection() {
  const [lead, ...rest] = PIECES;

  return (
    <section className="section featured" id="collection">
      <div className="wrap">
        <div className="featured__intro">
          <motion.span className="eyebrow" {...fadeUp()}>
            The Collection
          </motion.span>
          <motion.h2 className="headline featured__heading" {...fadeUp(0.08)}>
            Three pieces we return to.
          </motion.h2>
        </div>

        <div className="featured__grid">
          <motion.article className="featured__piece featured__piece--lead" {...fadeUp(0.12)}>
           <ImagePlaceholder
  image={lead.image}
  label={lead.name}
  ratio={lead.ratio}
  showLabel={false}
/>
            <div className="featured__piece-caption">
              <span className="catalogue-number">{lead.number}</span>
              <h3 className="featured__piece-name featured__piece-name--lead">{lead.name}</h3>
              <p className="featured__piece-detail">
                {lead.material}. {lead.detail}
              </p>
            </div>
          </motion.article>

          <div className="featured__stack">
            {rest.map((piece, i) => (
              <motion.article className="featured__piece" key={piece.number} {...fadeUp(0.18 + i * 0.08)}>
                <ImagePlaceholder
  image={piece.image}
  label={piece.name}
  ratio={piece.ratio}
  showLabel={false}
/>
                <div className="featured__piece-caption">
                  <span className="catalogue-number">{piece.number}</span>
                  <h3 className="featured__piece-name">{piece.name}</h3>
                  <span className="featured__piece-material">{piece.material}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
