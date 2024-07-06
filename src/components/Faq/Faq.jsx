import FaqItem from "./FaqItem"

const Faq = () => {
  return (
    <div className="mt-36 px-40 ">
      <h2 className="text-2xl text-center mb-20 font-bold">Frequently Asked <span className="text-blue-500">Questions</span></h2>

      
 <FaqItem field="Eligibility" query="Do I need to have prior Product Management and Project Management experience to enroll in the program?"  />

      <FaqItem field="How To Use?" query="No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
suitable for individuals from any field of work."/>

<FaqItem field="Terms & Conditions" query="What is the minimum system configuration required?" />
     
    </div>
  )
}

export default Faq
