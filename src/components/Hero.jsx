import Form from "./Form"

const Hero = () => {
  return (
    <div className="mx-32 bg-blue-50 flex shadow-lg  mt-4 px-10 justify-between align-middle items-center rounded-lg mb-10">
        <div className="">
            <h1 className="text-7xl font-bold">Let&apos;s Learn <br /> & Earn </h1>
            <p className="text-4xl py-10">Get a chance to win <br /> up-to <span className="text-blue-500 font-bold">Rs. 15,000</span></p>
            <button onClick={()=>document.getElementById('my_modal_2').showModal()}  className="btn text-xl bg-[#1A73E8] text-white ml-5 px-10 border-none hover:text-black  ">Refer Now</button>
            <Form />
        </div>
        <div className="">
            <img className="relative z-20" src="/images/hero.png" alt="" width={600} />
            <img src="/images/m1.png" alt="" className="absolute w-28 top-[37rem]
            right-[40rem] rotate-[290deg] z-50" />
            <img src="/images/m1.png" alt="" className="absolute w-28 top-[13rem] right-[32rem] rotate-180 z-10" />
            <img src="/images/m1.png" alt="" className="absolute w-28 top-[11.5rem] left-[7.5rem] rotate-[100deg] z-10" />
            <img src="/images/m1.png" alt="" className="absolute w-28 top-[11.5rem] right-[8.5rem] rotate-180 z-10" />
            <img src="/images/m1.png" alt="" className="absolute w-28 top-[25.5rem] right-[10rem] rotate-90 z-10" />
            
        </div>


      
    </div>
  )
}

export default Hero
