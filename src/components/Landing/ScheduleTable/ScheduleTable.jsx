export const ScheduleTable = () => {
  return <div className="schedule-table filtering pb-24">
    <table className="w-full text-center border">
      <tbody className="border-t ">
        <tr className="border-b">
          <td className="day-time border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Fitness Class</td>
          <td className="monday ts-item show border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="monday">
            10:00AM - 11:30AM
          </td>
          <td className="tuesday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="tuesday">
            2:00PM - 3:30PM
          </td>
          <td className="border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">William G. Stewart</td>
        </tr>
        <tr className="border-b ">
          <td className="day-time border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Muscle Training</td>
          <td className="friday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="friday">
            10:00AM - 11:30AM
          </td>
          <td
            className="thursday friday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide"
            data-tsmeta="thursday"
          >
            2:00PM - 3:30PM
          </td>
          <td className="border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Paul D. Newman</td>
        </tr>
        <tr className="border-b">
          <td className="day-time border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Body Building</td>
          <td className="tuesday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="tuesday">
            10:00AM - 11:30AM
          </td>
          <td className="monday ts-item show border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="monday">
            2:00PM - 3:30PM
          </td>
          <td className="border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Boyd C. Harris</td>
        </tr>
        <tr className="border-b">
          <td className="day-time border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Yoga Training Class</td>
          <td className="wednesday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="wednesday">
            10:00AM - 11:30AM
          </td>
          <td className="friday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="friday">
            2:00PM - 3:30PM
          </td>
          <td className="border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Hector T. Daigle</td>
        </tr>
        <tr className="border-b">
          <td className="day-time border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Advanced Training</td>
          <td className="thursday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="thursday">
            10:00AM - 11:30AM
          </td>
          <td className="wednesday ts-item border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide" data-tsmeta="wednesday">
            2:00PM - 3:30PM
          </td>
          <td className="border-r w-40 h-28 align-middle capitalize text-white text-sm font-medium tracking-wide">Bret D. Bowers</td>
        </tr>
      </tbody>
    </table>
  </div>
}
