import Listitem from "./Listitem"

const List = () => {
  return (
    <div className="w-72 shadow  border rounded-lg">
      <Listitem text="All Programs"  />
      <Listitem text="project management"  />
      <Listitem text="strategy & leadership"  />
      <Listitem text="Business management"  />
      <Listitem text="fintech"  />
      <Listitem text="senior management"  />
      <Listitem text="data science"  />
      <Listitem text="digital transformation"  />
      <Listitem text="business analytics"  />
    </div>
  )
}

export default List
