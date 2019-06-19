import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'


class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filter: []
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
        transactions: transactionData,
        filter: transactionData
      })
    })

  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  
  }

  // let updatedList = this.state.transactions;
  // updatedList = updatedList.filter(function(trans){
  //   return trans.toLowerCase().search(
  //     event.target.value.toLowerCase()) !== -1;
  //   });
  //   this.setState({
  //     filter: updatedList
  //   })
  
    
render() {
 const search = this.state.filter

    return (
      <div>
        <Search handleChange={this.handleChange} value={search}/>
        <TransactionsList transaction={this.state.filter}/>
      </div>
    )
  }
}

export default AccountContainer
