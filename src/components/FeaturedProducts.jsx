import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import "./FeaturedProducts.css";

const EASE = [0.22, 1, 0.36, 1];

const PRODUCTS = [
  { number: "N° 08", name: "Bevel Armchair", material: "Oak", dimensions: "W78 · D82 · H74 cm" },
  { number: "N° 09", name: "Ridge Console", material: "Walnut", dimensions: "W140 · D40 · H76 cm" },
  { number: "N° 10", name: "Loom Ottoman", material: "Ash & wool", dimensions: "W60 · D60 · H42 cm" },
  { number: "N° 11", name: "Anchor Coat Rack", material: "Blackened steel", dimensions: "H182 cm" },
  { number: "N° 12", name: "Bluff Daybed", material: "Oak & linen", dimensions: "W200 · D90 · H70 cm" },
  { number: "N° 13", name: "Marl Side Table", material: "Bluestone & brass", dimensions: "W45 · D45 · H50 cm" },
];

/**
 * FeaturedProducts
 * The one section that reads closest to a catalogue page — a uniform grid,
 * each entry carrying its number, material, and dimensions the way a real
 * furniture catalogue would, deliberately without prices.
 */
function FeaturedProducts() {
  return (
    <section className="section products">
      <div className="wrap">
        <motion.span
          className="eyebrow products__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Full Catalogue
        </motion.span>

        <div className="products__grid">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.number}
              className="products__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
            >
              <ImagePlaceholder label={product.name} ratio="4 / 5" showLabel={false} />
              <div className="products__item-row">
                <h3 className="products__item-name">{product.name}</h3>
                <span className="products__item-material">{product.material}</span>
              </div>
              <div className="products__item-row">
                <span className="catalogue-number">{product.number}</span>
                <span className="products__item-dimensions">{product.dimensions}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
