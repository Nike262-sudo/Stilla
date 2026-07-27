import "./ImagePlaceholder.css";

function ImagePlaceholder({
  image,
  label,
  ratio = "4 / 5",
  tone = "light",
  plate,
  showLabel = true,
}) {
  return (
    <div
      className={`image-placeholder image-placeholder--${tone}`}
      style={{ aspectRatio: ratio }}
    >
      {image ? (
        <img
          src={image}
          alt={label}
          className="image-placeholder__image"
        />
      ) : (
        <>
          {showLabel && (
            <span className="image-placeholder__label">
              {label}
            </span>
          )}

          {plate && (
            <span className="image-placeholder__plate">
              {plate}
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default ImagePlaceholder;
