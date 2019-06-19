import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state= {
    transactions: [],
    search: ""
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactions => this.setState({
        transactions: transactions
      }))
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filteredTransaction = (e) => {
    let tempTransactions = [...this.state.transactions]
    let filteredTransaction = tempTransactions.filter(trans => {
      if (trans.description.toLowerCase().includes(this.state.search)) {
        return trans
      } else if (trans.category.toLowerCase().includes(this.state.search)){
        return trans
      }
    })
    return filteredTransaction
  }

  render() {

    return (
      <div>
        <Search search={this.state.search} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.filteredTransaction()}/>
      </div>
    )
  }
}

export default AccountContainer
