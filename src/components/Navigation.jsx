import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navigation.css";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Materials", href: "#materials" },
  { label: "Journal", href: "#journal" },
];

/**
 * Navigation
 * Fixed header that starts transparent over the hero image and picks up a
 * hairline border and solid ground once the page has scrolled past it.
 * A single ghost button ("Enquire") stands in for the whole nav's tone:
 * quiet, no dropdowns, no icons besides the mobile toggle.
 */
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <header className={`nav ${isScrolled ? "nav--solid" : ""}`}>
        <div className="wrap nav__inner">
          <a href="#top" className="nav__mark">
            STILLA
          </a>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav__link text-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a href="#contact" className="btn btn--ghost nav__cta">
              Enquire
            </a>
            <button
              className={`nav__toggle ${isMenuOpen ? "nav__toggle--open" : ""}`}
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="nav-overlay__links" aria-label="Mobile">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-overlay__link"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="nav-overlay__link nav-overlay__link--muted"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + LINKS.length * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Enquire
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
