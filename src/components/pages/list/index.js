import React, { useState, useEffect } from 'react';
import './index.scss';
import ListCard from '../../molecules/list-card/list-card';
import FilterBar from '../../molecules/filter_bar/filter-bar';
import Label from '../../atoms/label/label';
import SortBar from '../../molecules/sort_bar/sort_bar';
import { GetItems } from '../../../services/items';
import InfiniteScroll from "react-infinite-scroll-component";

const PageList = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const result = await GetItems(`/gifts?page[number]=${1}&page[size]=${6}`);
        setData(result.data);

        console.log('res', result.data);
      } catch (error) {

        console.log(error)
      }
    };

    fetchDataFromServer();
  }, []);

  const fetchMoreData = async () => {
    try {
      const result = await GetItems(`/gifts?page[number]=${index}&page[size]=${6}`);
      setData((prevData) => [...prevData, ...result.data]);
      result.data.length > 0 ? setHasMore(true) : setHasMore(false);
      setIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h3 className="loading">Loading...</h3>}
    >
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
            <ListCard data={data} />
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default PageList;