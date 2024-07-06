import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";


const Suggest = () => {
  return (
    <div className="my-32 bg-blue-500 mx-32 p-16 rounded flex justify-around">
      
        <div className=" flex items-center">
            <RiCustomerService2Line className="bg-white w-20 h-20 p-2 rounded-2xl border-4 border-gray-300 text-blue-500" />

            <div className="ml-4 text-white leading-10">
                 <h3 className="text-2xl font-bold">Want to delve deeper into the program?</h3>
                 <p>Share your details to receive expert insights from our program team!</p>
            </div>
        </div>

        <div className="">
                  <button className="flex items-center border  btn py-2  px-10 text-blue-500">Get in touch <IoIosArrowForward />
                </button>

        </div>
    </div>
  )
}

export default Suggest
