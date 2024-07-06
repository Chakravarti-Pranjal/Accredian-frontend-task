import { IoIosArrowDown } from "react-icons/io";

import List from "../components/list/List";
import Table from "../components/table/Table";


const Benefit = () => {
  return (
    <div className="px-32 mt-18 text-center">
      <h2 className="text-2xl font-semibold my-24">What Are The <span className="text-blue-500">Referal Benefits?</span></h2>

      <div className=" flex justify-end items-center text-center mb-3">
        <p className="flex items-center justify-center text-xl text-center">Enrolled </p>
        <input type="checkbox" className="toggle  ml-2 text-blue-500" defaultChecked />
      </div>

      <div className="flex justify-between">
        <List />
        <Table />
      </div>

      <div className="flex justify-end my-5 ">
      
      <button className="flex items-center border  btn py-2  px-4">Show More <IoIosArrowDown /></button>
      </div>

      <div className="flex justify-center">
                    <button className="btn text-xl bg-[#1A73E8] text-white ml-5 px-12 border-none hover:text-black  ">Refer Now</button>

      </div>


    </div>
  )
}

export default Benefit
