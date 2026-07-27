import { motion } from "framer-motion";
import "./Journal.css";

const EASE = [0.22, 1, 0.36, 1];

const ENTRIES = [
  {
    number: "01",
    date: "July 2026",
    title: "On Wood That Moves",
    excerpt: "Why we season oak for eighteen months before it ever meets a blade.",
  },
  {
    number: "02",
    date: "May 2026",
    title: "A Visit to the Foundry",
    excerpt: "Where our brass fittings are cast by hand, forty at a time.",
  },
  {
    number: "03",
    date: "March 2026",
    title: "The Case Against Veneer",
    excerpt: "Solid wood costs more and weighs more. We think that's the point.",
  },
];

/**
 * Journal
 * A text-led index of recent writing — deliberately image-free so it reads
 * differently from the photography-heavy sections around it, like the
 * contents page of a print magazine.
 */
function Journal() {
  return (
    <section className="section journal" id="journal">
      <div className="wrap">
        <motion.span
          className="eyebrow journal__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          The Journal
        </motion.span>

        <ul className="journal__list">
          {ENTRIES.map((entry, i) => (
            <motion.li
              key={entry.number}
              className="journal__entry"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <a href="#journal" className="journal__entry-link">
                <span className="journal__entry-number catalogue-number">{entry.number}</span>
                <div className="journal__entry-body">
                  <span className="journal__entry-date">{entry.date}</span>
                  <h3 className="journal__entry-title">{entry.title}</h3>
                  <p className="journal__entry-excerpt">{entry.excerpt}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Journal;
