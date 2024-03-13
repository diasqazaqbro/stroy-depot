import React from 'react';
import Filter from "@/features/Filter/ui/Filter";

interface DataItem {
  name: string;
  className?: string;
  id: string;
}

interface ProductFilterProps {
  handleCheckboxChange: (id: string) => void;
  checkedItems: { [key: string]: boolean };
  data: DataItem[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({ handleCheckboxChange, checkedItems, data }) => {
  return (
    <div className="filter mr-7">
      <div className="mb-[30px]">
        <h2>Фильтр</h2>
        <h2 className="arround font-medium">Область применения</h2>
      </div>
      <Filter handleCheckboxChange={handleCheckboxChange} checkedItems={checkedItems} data={data} />
    </div>
  );
};

export default ProductFilter;
