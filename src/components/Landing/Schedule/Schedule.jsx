import { Filters } from "../Filters/Filters";
import { ScheduleTable } from "../ScheduleTable/ScheduleTable";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Schedule.module.css";

export const Schedule = ({ sectionHeading }) => {

  return <section className={`section flex flex-col items-center mb-36 ${styles.bgSchedule}`} id="schedule">
    <SectionHeading sectionHeading={sectionHeading} darkBg />

    <Filters />

    <ScheduleTable />
  </section>
}
