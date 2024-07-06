import { TiUserAdd } from "react-icons/ti";


import Card from "./Card"

const Steps = () => {
  return (
    <>
      <div className="bg-[#EEF5FF] text-center py-5 px-32 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">How Do I <span className="text-blue-500">Refer?</span></h2>
         
        <img src="/images/steps.png" alt="" className="absolute top-[46rem] my-10 mt-[-5rem]" />

        <div className="flex my-32 z-50">
          <Card icon={<TiUserAdd />}  text="Submit referrals easily via our website’s referral section." />
          <Card icon="" text="Earn rewards once your referral joins an Accredian program." />
          <Card icon="" text="Both parties receive a bonus 30 days after program enrollment." />
        </div>

        <button className="btn text-xl bg-[#1A73E8] text-white ml-5 px-10 border-none  hover:text-black">Refer Now</button>
        
      </div>
    </>
  )
}

export default Steps
