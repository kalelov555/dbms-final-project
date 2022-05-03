export const TrainerImage = ({ img, alt }) => {
  return <div className="image-thumb">
    <img src={img.src} alt={alt} />
  </div>
}
