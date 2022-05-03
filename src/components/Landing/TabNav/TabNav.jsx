import tabsFirstIcon from "./assets/tabs-first-icon.png";

const tabNavs = ["First Class", "Second Class", "Third Class", "Fourth Class"];

export const TabNav = ({ tabId }) => {
  //state from parent component
  const [classId, setClassId] = tabId;

  const selectId = (event) => {
    const selectedClass = event.target.href;

    // href of tabs looks in this form:
    // #tabs-{n}
    // set state of choosen class
    // by selecting last char of href

    const lastChar = selectedClass.length - 1

    setClassId(selectedClass.charAt(lastChar));
  }

  const createNavItem = (nav, i) => {
    return <li className="mb-8 inline-block w-full">
      <a className="capitalize w-full p-7 bg-white shadow rounded-md text-xl text-black tracking-wide font-semibold 
                    flex content-center justify-items-start whitespace-nowrap hover:text-red-500"
        href={"#tabs-" + (i + 1)} onClick={selectId}>
        <img className="mr-5 inline" src={tabsFirstIcon.src} alt=""></img>
        {nav}
      </a>
    </li>
  }

  return (
    <ul className="w-full lg:w-4/12">
      {tabNavs.map((nav, i) => createNavItem(nav, i))}

      <div className="main-rounded-button">
        <a className="text-center py-3 w-full rounded-md inline-block shadow text-white text-xl tracking-wide 
                      font-semibold bg-red-500 hover:bg-red-400 hover:text-white"
          href="#">View All Schedules</a>
      </div>
    </ul>

  )
}
