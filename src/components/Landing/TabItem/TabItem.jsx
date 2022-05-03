import { useImage } from "../../../hooks/useImage";

export const TabItem = ({ id, classNm }) => {
  const { image } = useImage(`training-image-0${id}.jpg`);

  return (
    <div className="tabs-content w-full lg:w-7/12 pl-0 lg:pl-8 text-left inline-block transition-all duration-300">
      <article >
        <img className="max-w-full overflow-hidden rounded-md sm:mt-4 lg:mt-0"
          src={image?.src} alt={classNm.name}></img>
        <h4 className="text-2xl font-bold text-black tracking-wide mb-4 mt-8">{classNm.name}</h4>
        <p className="mb-7 text-sm">{classNm.description}</p>
        <div className="main-button inline-block align-middle w-1/3 px-3 py-3 uppercase bg-red-500 hover:bg-red-400 font-medium text-md text-white text-center">
          <a className="hover:text-white" href="#">View Schedule</a>
        </div>
      </article>
    </div>
  )
}
