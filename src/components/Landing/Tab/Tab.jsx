import { useState } from "react";
import { TabItem } from "../TabItem/TabItem";
import { TabNav } from "../TabNav/TabNav";
import { classesInfo } from "../../constants";

export const Tab = () => {
  const [classId, setClassId] = useState(1);

  return <div className="tabs-container flex flex-row flex-wrap" id="tabs">
    <TabNav tabId={[classId, setClassId]} />
    <TabItem id={classId} classNm={classesInfo[classId - 1]} />
  </div>
}
