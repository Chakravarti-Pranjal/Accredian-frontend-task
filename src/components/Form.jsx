import { useForm } from "react-hook-form"
import axios from 'axios';

const Form = () => {

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // console.log(data);
        try {
            const response = await axios.post('http://localhost:4001/referral', data);
            alert('Referral submitted successfully!');

             let res = await response.text()
              console.log(res)
        } catch (error) {
            alert('Error submitting referral.');
        }

       
    };


  return (
    <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
     <h3 className="font-bold text-2xl mb-8">Referrel Form</h3>
     <form onSubmit={handleSubmit(onSubmit)}>

     {/*name input field */}
      <input {...register("name", { required: true })} type="text" 
      placeholder="Your Name here.." 
      className="  py-2 border w-full px-5 rounded-md"
      />
       {errors.name && <span className="text-red-500 text-sm">This field is required</span>}

    {/*email input field */}
    <input {...register("email", { required: true })} type="email" 
    placeholder="Enter Your email.." 
    className="mt-4 py-2 border w-full px-5 rounded-md"
    />
     {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
    
     {/*refcode input field */}
    <input {...register("refCode", { required: true })} type="text" 
    placeholder="Enter Your referrel code.." 
    className=" mt-4 py-2 border w-full px-5 rounded-md"
    />
    {errors.refCode && <span className="text-red-500 text-sm">This field is required</span>}
  
    {/*message  field */}
    <textarea {...register("msg", { required: true })} className=" mt-4 textarea w-full textarea-bordered" placeholder="Your message here.."
    ></textarea>

    <input type="submit" value="Refer Now" className="btn text-xl bg-[#1A73E8] text-white my-5 px-10 border-none hover:text-black  " />
  </form>
    </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
    </form>
</dialog>

    
  )
}

export default Form
