import Filter from "@/features/Filter/ui/Filter"

export default function ProductFilter() {
  return (
    <div className="filter mr-5">
      <h2 className="mb-10">Полиуретановые пены</h2>
      <div className="mb-[30px]">
        <h2>Фильтр</h2>
        <h2 className="font-medium">Область применения</h2>
      </div>
      <Filter />
    </div>
  )
}