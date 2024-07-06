import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaPlus, FaTwitter, FaYoutube } from "react-icons/fa";



const Bottom = () => {
  return (
    <>
      <footer className=" bg-neutral text-neutral-content">
  
<div className="footer  p-10 px-64">

      <nav className="w-60 ">
    <h6 className="text-xl text-white">Programs </h6>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold link-hover">Data Science & AI </a>
       <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold link-hover">Product Management </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Business Analytics </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Digital Transformation </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Business Management </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Project Management </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Strategy & Leadership </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Senior Management </a>
      <FaPlus />
    </div>
    <div className="flex mb-3 justify-between items-center w-56">
      <a className="link font-bold flex justify-between items-center link-hover">Fintech </a>
      <FaPlus />
    </div>
  </nav>
 
  <nav className="mx-3">
    <h6 className="text-xl text-white">Contact Us</h6>
    <p>Email us (For Data Science Queries): admissions@accredian.com</p>
    <p>Email us (For Project Mangement Queries): pm@accredian.com</p>
    <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7PM)</p>
    <p>Enrolled Student Helpline:+91 79699322507</p>
    <p>Office Address:4th Floor,250, Phase IV, Udyog Vihar, Sector 18, Gurugram, <br /> Haryana 122015</p>
    <h2 className="text-xl">Why Accredian</h2>
    <p className="text-2xl">Follow Us</p>
    <div className="flex text-xl gap-3">
      <IoLogoFacebook />
      <FaLinkedin />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />

    </div>
  </nav>

  <nav>
    <h6 className="text-xl text-white">Accredian</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Career</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Admission Policy</a>
    <a className="link link-hover">Referral Policy</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms Of Services</a>
    <a className="link link-hover">Master FAQs</a>
  </nav>

  </div>

      <p className="text-center py-8">© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>

      </footer>
    </>
  )
}

export default Bottom
