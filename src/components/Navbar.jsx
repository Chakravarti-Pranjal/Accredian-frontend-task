import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-white px-28 py-3">
            <div className="navbar-start">
                <a href="#" className=" text-sm ">
                    <img src="https://accredian.com/Rcimages/logo.png" alt="logo" width={150} />
                </a>

                <button className="btn bg-[#1A73E8] text-white ml-7 px-5 border-none hover:text-black">Courses <IoIosArrowDown /></button>
            </div>

            <div className="navbar-end">
                <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn btn-ghost  text-black lg:hidden">
                        <i className="ri-menu-add-line"></i>
                     </div>

                     <ul tabIndex={0} className="menu  dropdown-content bg-white  z-[1] mt-3 right-[-128px]  w-60 p-2 px-5 shadow-lg ">
                        <li className=" mt-4 text-black"><a href="">Refer & Earn</a></li>
                        <li className=" mt-4 text-black"><a href="">Resources</a></li>
                        <li className=" mt-4 text-black"><a href="">About Us</a></li>
                        <li><button className="btn mt-4 bg-slate-200 text-black border-none px-8 hover:text-white">Login</button></li>
                        <li><button className="btn my-4 bg-[#1A73E8] text-white px-5 border-none  hover:text-black">Try for Free</button></li>
                        
                     </ul>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            <li className=" text-black"><a href="">Refer & Earn</a></li>
                            <li className=" text-black"><a href="">Resources</a></li>
                            <li className=" text-black"><a href="">About Us</a></li>
                            <li><button className="btn bg-slate-200  border-none ml-5  px-8">Login</button></li>
                            <li><button className="btn bg-[#1A73E8] text-white ml-5 px-5 border-none hover:text-black  ">Try for Free</button></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Navbar
