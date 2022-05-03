import { TrainerContent } from "../TrainerContent/TrainerContent";

export const TrainerItem = ({ trainer }) => {
  return <div className="trainer-item rounded-md shadow p-10 sm:w-full md:w-1/3">
    <img className="w-full rounded-md" src="/booksss.png" alt={trainer.name} />

    <TrainerContent resp={trainer.responsible}
      name={trainer.name}
      description={trainer.description} />
  </div>
}
