import Image from "next/image";
import { features } from "../../constants";
import { FeatureContent } from "../FeatureContent/FeatureContent";


export const FeatureItems = () => {

  const createLeftFeature = (item) => {
    return <li className="feature-item inline-block mb-16 lg:w-5/12 md:w-full">
    {/* <Image className="left-icon float-left mr-8" src="./assets/features-first-icon.png" alt={item.name} /> */}
      <img className="left-icon float-left mr-8" src="/features-first-icon.png" alt={item.name} />

      <FeatureContent name={item.name} description={item.description} />
    </li>
  }

  return (
      <ul className="section-content features-items flex flex-row flex-wrap justify-between">
        {features.map(item => createLeftFeature(item))}
      </ul> 
    )
    
}
