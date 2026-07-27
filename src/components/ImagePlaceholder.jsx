import "./ImagePlaceholder.css";

/**
 * ImagePlaceholder
 * Stands in for real editorial photography. Preserves the aspect ratio of
 * the final image so layouts read correctly before photography is dropped
 * in. Flat fill, no texture, no frame — it should read as blank photo
 * stock, not as a UI card.
 *
 * The "what goes here" label only renders inside the placeholder when the
 * surrounding component has no caption of its own (e.g. the hero image).
 * Everywhere a caption already names the piece, pass `showLabel={false}`
 * so the name isn't stated twice.
 *
 * @param {string} label      What the final photograph should depict.
 * @param {string} ratio      CSS aspect-ratio value, e.g. "4 / 5".
 * @param {string} tone       "light" | "warm" — background variant.
 * @param {string} plate      Optional small plate reference, e.g. "Plate 01".
 * @param {boolean} showLabel Whether to render the label inside the frame.
 */
function ImagePlaceholder({ label, ratio = "4 / 5", tone = "light", plate, showLabel = true }) {
  return (
    <div
      className={`image-placeholder image-placeholder--${tone}`}
      style={{ aspectRatio: ratio }}
    >
      {showLabel && <span className="image-placeholder__label">{label}</span>}
      {plate && <span className="image-placeholder__plate">{plate}</span>}
    </div>
  );
}

export default ImagePlaceholder;
