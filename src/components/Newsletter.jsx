import { useState } from "react";
import { motion } from "framer-motion";
import "./Newsletter.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Newsletter
 * The quietest section on the page: one line of copy, one field, one
 * button. No incentive, no discount — the honesty of the offer is the
 * point given the brand's tone.
 */
function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section newsletter" id="contact">
      <div className="wrap newsletter__wrap">
        <motion.h2
          className="headline newsletter__heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Notes from the workshop, twice a season.
        </motion.h2>

        <motion.p
          className="newsletter__paragraph"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
        >
          No product drops, no discount codes. Just what we're building, and
          why.
        </motion.p>

        <motion.form
          className="newsletter__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
        >
          {submitted ? (
            <p className="newsletter__confirm">You're on the list.</p>
          ) : (
            <>
              <label className="newsletter__label" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="newsletter__field">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="newsletter__input"
                />
                <button type="submit" className="btn newsletter__submit">
                  Subscribe
                </button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Newsletter;
