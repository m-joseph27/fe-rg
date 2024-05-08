import React from "react";
import Label from '../../atoms/label/label';
import './filter-bar.scss';

const FilterBar = () => {
  return (
    <div>
      <Label value={'Filter'} />
      <hr className="border" />
      <div className="check-box">
        <div>
          <span>Rating 4 ke atas</span>
          <input type="checkbox" />
        </div>
        <div>
          <span>Stock Tersedia</span>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;