import React, { Component } from 'react';
import Slider from '../../components/Slider/Slider';
import Balance from '../../components/Balance/Balance';
import Giftcards from '../../components/Giftcards/Giftcards';
import Pagination from '../../components/Pagination/Pagination';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import Data1 from '../../data/mock_data_page1.json'
import Data2 from '../../data/mock_data_page2.json'
import Data3 from '../../data/mock_data_page3.json'
import './Rewards.css';

export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giftcards: null,
      total_pages: null,
      current_page: null
    };
  }

  componentDidMount() {
    let data = this.fetchData(1);
    this.setState({
      giftcards: data.results,
      total_pages: data.total_pages,
      current_page: data.page
    });

  }

  handlePageChange = (page) => {
    let data = this.fetchData(page);
    this.setState({
      current_page: page,
      total_pages: data.total_pages,
      giftcards: data.results
    })
  }

  fetchData = (page) => {
    if(page === 1 ) return Data1
    else if(page === 2) return Data2
    else return Data3
  }

  render() {
    const {giftcards, total_pages, current_page} = this.state;

    return (
      <div>
        <div className="fixed">
          <Slider />
          <Balance balance={{amount:280, numOfCards:3}}/>
        </div>
        {giftcards != null &&
          <div>
            <Giftcards giftcards={giftcards}/>
            {total_pages !== 1 &&
              <Pagination total_pages={total_pages} current_page={current_page} handlePageChange={this.handlePageChange}/>}
          </div>
        }
        <ButtonAdd title={'pay'}/>
      </div>
    );
  }
}
