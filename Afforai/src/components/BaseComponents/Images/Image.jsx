const Image = ({ src, alt, width, height, type, style, className }) => {
  return (
    <picture>
      <source srcSet={src} type={type || '"image/webp"'} />
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        style={style}
        className={className}
      />
    </picture>
  );
};

export default Image;
