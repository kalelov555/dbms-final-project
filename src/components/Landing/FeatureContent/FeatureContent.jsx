export const FeatureContent = ({ name, description }) => {
  return <div className="right-content inline">
    <h4 className="mt-0 mb-2 tracking-wide text-black text-xl font-semibold capitalize">{name}</h4>
    <p className="text-gray-500">{description}</p>
    <a href="#" className="text-button mt-2 inline-block text-sm uppercase font-normal text-red-500 hover:text-red-400">
      Discover More
    </a>
  </div>
}
