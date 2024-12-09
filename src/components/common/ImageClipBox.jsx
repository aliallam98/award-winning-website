/* eslint-disable react/prop-types */
const ImageClipBox = ({ src, alt, clipClass }) => {
  return (
    <div className={clipClass}>
      <img className="w-full h-full" src={src} alt={alt} />
    </div>
  );
};

export default ImageClipBox;
