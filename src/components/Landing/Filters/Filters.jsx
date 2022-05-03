const filters = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export const Filters = () => {
  return <ul className="filters sm:w-3/4 md:w-fit flex flex-row sm:flex-wrap md:flex-nowrap justify-center
                       mb-10 p-0 text-center">
    {filters.map((filter, i) => {
      return <li className="md:w-1/5 relative inline cursor-pointer text-base font-medium text-white 
        capitalize transition-all duration-300 ease-in-out "
        data-tsfilter={filter.toLowerCase()} key={i + 1} >
        <a className="hover:text-red-500 py-1 px-1.5">{filter}</a>
      </li>
    })}
  </ul>
}
