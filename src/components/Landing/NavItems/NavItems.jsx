import { navItems } from "../../constants"

export const NavItems = () => {

  function createNavItem(item) {
    return <li className="nav-item">
      <a
        className="px-4 py-2 flex text-sm uppercase font-medium text-black md:text-white hover:text-red-500"
        href={item.href}
      >{item.name}
      </a>
    </li>
  }

  return <ul className="flex flex-col md:flex-row list-none md:ml-auto items-center">
    {navItems.map(item => createNavItem(item))}

    <li className="nav-item">
      <button className="px-3 py-2 uppercase font-medium lg:text-sm text-xs text-white bg-red-500 hover:bg-red-400">Sign Up</button>
    </li>
  </ul>
}
