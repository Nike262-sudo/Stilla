import material1 from "../assets/images/material-1.jpg";
import material2 from "../assets/images/material-2.jpg";
import material3 from "../assets/images/material-3.jpg";
import material4 from "../assets/images/material-4.jpg";
import material5 from "../assets/images/material-5.jpg";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import "./Materials.css";

const EASE = [0.22, 1, 0.36, 1];

const MATERIALS = [
  { name: "Oak", image: material1 },
  { name: "Walnut", image: material2 },
  { name: "Wool", image: material3 },
  { name: "Brass", image: material4 },
  { name: "Bluestone", image: material5 },
];

/**
 * Materials
 * One flowing paragraph carries the reasoning for all five materials, so
 * the swatches underneath don't each need their own sentence — they only
 * need to show texture and name.
 */
function Materials() {
  return (
    <section className="section section--warm materials" id="materials">
      <div className="wrap">
        <div className="materials__intro">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Materials
          </motion.span>

          <motion.h2
            className="headline materials__heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          >
            Five materials. No substitutes.
          </motion.h2>

          <motion.p
            className="reading materials__paragraph"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
          >
            White oak and walnut carry the frames. Undyed wool from Jutland
            flocks fills the weave and upholstery. Brass fittings are left
            unlacquered so they tarnish honestly, and every tabletop that
            needs to outlast its base is cut from honed Belgian bluestone.
          </motion.p>
        </div>

        <div className="materials__grid">
         {MATERIALS.map((material, i) => (
            <motion.div
              className="materials__item"
              key={material.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
            >
             <ImagePlaceholder
  image={name.image}
  label={name.name}
  ratio="1 / 1"
  showLabel={false}
/>

<span className="materials__item-name">
  {name.name}
</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Materials;
