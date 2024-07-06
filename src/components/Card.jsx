
const Card = (props) => {


    const { text, icon } = props ;
  return (
    <div className="rounded-full mx-[4rem] w-64 p-12 h-64  items-center justify-center flex flex-col  z-50" >
      <div className="text-7xl text-blue-500 mb-4 ">
        <i className={icon}></i>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Card
