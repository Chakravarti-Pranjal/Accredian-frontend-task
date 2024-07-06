import { IoIosArrowForward } from "react-icons/io";


const Listitem = ({ text }) => {
  return (
    <div className="flex justify-between items-center text-center px-5 py-3  border-b-2 uppercase">
      <p>{text}</p>
     <IoIosArrowForward  />
    </div>
  )
}

export default Listitem
