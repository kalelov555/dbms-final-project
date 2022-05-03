import { SectionHeading } from "../SectionHeading/SectionHeading";
import { TrainersList } from "../TrainersList/TrainersList";
import { trainers } from "../../constants";

export const Trainers = ({ sectionHeading }) => {
  return <section className="section" id="trainers">
      <SectionHeading sectionHeading={sectionHeading} darkBg={false} />
      <TrainersList trainers={trainers} />
  </section>
}
