import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactionData => {
      this.setState({
        transactions: transactionData
      })
    })
  }

  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search />
        <TransactionsList trans={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
