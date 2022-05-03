import { SocialIcons } from "../SocialIcons/SocialIcons";

export const TrainerContent = ({ resp, name, description }) => {
  return <div className="down-content">
    <span className="text-sm font-medium text-red-500 inline-block mt-6 mb-2">{resp}</span>
    <h4 className=" text-xl font-semibold text-black tracking-wide mb-4">{name}</h4>
    <p className="mb-5 text-gray-500">
      {description}
    </p>

    <SocialIcons />
  </div>
}
