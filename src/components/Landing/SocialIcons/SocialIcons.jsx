const icons = ["facebook", "twitter", "telegram", "whatsapp"];

export const SocialIcons = () => {
  const createIcon = (icon) => {
    return <li className="inline-block mr-3">
      <a className="text-black  " href="#">
        <i className={"duration-300 transition-all  hover:text-red-500 fa fa-" + icon}></i>
      </a>
    </li>
  }

  return <ul className="social-icons last:mr-0">
    {icons.map(icon => createIcon(icon))}
  </ul>
}
