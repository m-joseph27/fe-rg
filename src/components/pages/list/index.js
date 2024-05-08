import './index.scss';
import ListCard from '../../molecules/list-card/list-card';
import FilterBar from '../../molecules/filter_bar/filter-bar';
import Label from '../../atoms/label/label';
import SortBar from '../../molecules/sort_bar/sort_bar';

const PageList = () => {
  return (
    <div className="page-list">
      <div className="filter-section">
        <FilterBar />
      </div>
      <div className="card-section">
        <div className="header">
          <div>
            <Label value={'Product List'} />
          </div>
          <div className="sorter">
            <span>Urutkan</span>
            <div>
              <SortBar />
            </div>
          </div>
        </div>
        <hr />
        <div className="list-of-card">
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </div>
  );
}

export default PageList;