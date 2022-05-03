import { SectionHeading } from "../SectionHeading/SectionHeading";
import { Tab } from "../Tab/Tab";

export const Classes = ({ sectionHeading }) => {
  return (
    <section className="section mb-36" id="our-classes">
      <SectionHeading sectionHeading={sectionHeading} darkBg={false} />
      <Tab />
    </section>
  )
}
