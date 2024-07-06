import { GiGraduateCap } from "react-icons/gi";


const Table = () => {
  return (
    <table className="" cellPadding={8}>
        <thead>
            <tr className="bg-blue-300 text-left ">
                <th className="text-left">Programs</th>
                <th className="text-left">Referrer Bonus</th>
                <th className="text-left">Referee Bonus</th>
            </tr>
        </thead>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1" />Professional Certificate Program in <br /> Product Management
            </td>
            <td>₹ 7,000</td>
            <td>₹ 9,000</td>
        </tr>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1"  />PG Certificate Program in Strategic <br /> Product Management
            </td>
            <td>₹ 9,000</td>
            <td>₹ 11,000</td>
        </tr>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1"  />Executive Program in Data Driven <br /> Product Management</td>
            <td>₹ 10,000</td>
            <td>₹ 10,000</td>
        </tr>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1"  />Executive Program in Product Management <br /> and Digital Transformation
            </td>
            <td>₹ 10,000</td>
            <td>₹ 10,000</td>
        </tr>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1"  />Executive Program in Product <br /> Management
            </td>
           <td>₹ 10,000</td>
            <td>₹ 10,000</td>
        </tr>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1"  />Advanced Certification in Product <br /> Management
            </td>
           <td>₹ 10,000</td>
            <td>₹ 10,000</td>
        </tr>
        <tr>
            <td className="flex  "><GiGraduateCap className="text-blue-500 text-2xl pr-1"  />Executive Program in Product Management <br /> and Project Mangement
            </td>
            <td>₹ 10,000</td>
            <td>₹ 10,000</td>
        </tr>
      </table>
  )
}

export default Table
