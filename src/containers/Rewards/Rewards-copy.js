import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Balance from '../../components/Balance/Balance';
import Giftcards from '../../components/Giftcards/Giftcards';
import Pagination from '../../components/Pagination/Pagination';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import oval2 from '../../images/05b_select_crypto_the_keg_1oval_2.png';
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
    // API call
    // GET ../giftcards?limit=10
    // GET ../giftcards?limit=10&offset=10
    if(page === 1 ) return Data1
    else if(page === 2) return Data2
    else return Data3
  }

  render() {
    const {giftcards, total_pages, current_page} = this.state;
    let balance = {amount:280, numOfCards:3}; //Temp test data

    return (
      <div className="rewards">
        <div className="fixed">
          <div className="bg">
              <img src={oval2} className="oval2" alt="background"/>
          </div>
          <Header />
          <Slider />
          <Balance balance={balance}/>
        </div>
        {giftcards != null &&
          <div>
            <Giftcards giftcards={giftcards} total_pages={total_pages} page={current_page}/>
            <Pagination total_pages={total_pages} current_page={current_page} handlePageChange={this.handlePageChange}/>
          </div>
        }
        <ButtonAdd title={'pay'}/>
      </div>
    );
  }
}
