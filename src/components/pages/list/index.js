import './index.scss';
import ListCard from '../../molecules/list-card/list-card';
import FilterBar from '../../molecules/filter_bar/filter-bar';

const PageList = () => {
  return (
    <div className="page-list">
      <div className="filter-section">
        <FilterBar />
      </div>
      <div className="card-section">
        <ListCard />
      </div>
    </div>
  );
}

export default PageList;