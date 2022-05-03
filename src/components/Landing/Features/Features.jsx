import { FeatureItems } from "../FeatureItems/FeatureItems";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Features = ({ sectionHeading }) => {
  return (
    <section className="section flex flex-col mb-20 content-center justify-center" id="features">
        <SectionHeading sectionHeading={sectionHeading} darkBg={false} />
        <FeatureItems />
    </section>
  )
}
 