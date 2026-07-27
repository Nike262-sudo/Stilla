import "./Footer.css";

const COLUMNS = [
  {
    heading: "Collection",
    links: ["Seating", "Tables", "Storage", "Lighting"],
  },
  {
    heading: "Studio",
    links: ["Craftsmanship", "Materials", "Journal"],
  },
  {
    heading: "Visit",
    links: ["Showroom, by appointment", "post@stilla-studio.com"],
  },
];

/**
 * Footer
 * Kept to the same restraint as the rest of the page — a logo, three short
 * link columns, a hairline, and a single line of small print.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__mark">STILLA</span>
            <p className="footer__tagline">Furniture for a considered life.</p>
          </div>

          <div className="footer__columns">
            {COLUMNS.map((column) => (
              <div className="footer__column" key={column.heading}>
                <span className="footer__column-heading">{column.heading}</span>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="footer__link text-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider footer__divider" />

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} STILLA. Est. 1962.</span>
          <span>Handmade in Jutland, Denmark.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
