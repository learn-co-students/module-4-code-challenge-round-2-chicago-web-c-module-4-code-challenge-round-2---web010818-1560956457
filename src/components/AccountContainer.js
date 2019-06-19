import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactions => this.setState({
        transactions: transactions
      }))
  }

    filteredTransactions = () => {
      let filteredTransactions = this.state.transactions.filter(t=>{
        if (t.description.toLowerCase().includes(this.state.search)) { return true }
        else if (t.category.toLowerCase().includes(this.state.search)) { return true }
      })
      return filteredTransactions
    }

    handleSearchChange = (event) => {
      this.setState({
        search: event.target.value
      })
    }

  render() {
    console.log(this.state.transactions)
    return (
      <div>

        <Search
        search={this.state.search}
        handleSearchChange={this.handleSearchChange}/>

        <TransactionsList
        filteredTransactions={this.filteredTransactions()}
        transactions={this.state.transactions}/>

      </div>
    )
  }
}

export default AccountContainer
