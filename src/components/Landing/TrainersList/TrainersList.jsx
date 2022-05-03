import { TrainerItem } from "../TrainerItem/TrainerItem";

export const TrainersList = ({ trainers }) => {
  const createTrainer = (trainer) => {
    return <TrainerItem trainer={trainer} />
  }

  return <div className="trainer-items flex flex-row flex-wrap md:justify-between sm:justify-around">
    {trainers.map(trainer => createTrainer(trainer))}
  </div>
}
