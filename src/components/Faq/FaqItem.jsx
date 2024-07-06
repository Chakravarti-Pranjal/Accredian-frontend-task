
const FaqItem = ({ field,query }) => {
  return (
    <div className=" flex justify-between w-full">
        <div className=" w-60 border-2 font-bold py-2 text-center mr-32 rounded-lg mb-8 hover:text-blue-500 hover:shadow">
        {field}
        </div>
       
        <div className="collapse collapse-arrow  ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-medium">{query}</div>
            <div className="collapse-content">
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default FaqItem
