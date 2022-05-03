import Image from "next/image";

export const SectionHeading = ({ sectionHeading, darkBg }) => {
  return (
    <div className={`section-heading text-center mt-36 mb-20 lg:px-44 md:px-28`}>
      <h2 className={`text-3xl text-center font-extrabold uppercase tracking-wide ${(darkBg && "text-white" || "text-black")}`}>
        {sectionHeading.name[0]} <em className="text-red-500 not-italic"> {sectionHeading.name[1]}</em>
      </h2>
      <img className="my-4 mx-auto" src="/line-dec/png" alt="" />
      {/* <Image className="my-4 mx-auto" src="./assets/line-dec.png" alt=""/> */}
      <p className={`text-center ${(darkBg && "text-white" || "text-gray-500")}`}>{sectionHeading.description}</p>
    </div>
  )
}
