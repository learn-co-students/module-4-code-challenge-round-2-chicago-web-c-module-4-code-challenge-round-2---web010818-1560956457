import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";
const URL = "https://boiling-brook-94902.herokuapp.com/transactions";
class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      filteredTransactions: [],
      searchValue: ""
    };

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(transactions =>
        this.setState({
          transactions: transactions,
          filteredTransactions: transactions
        })
      );
  }

  handleChange(event) {
    let searchValue = event.target.value;
    let filteredTransactions = this.state.transactions.filter(transaction => {
      return (
        transaction.description
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    this.setState({
      searchValue: searchValue,
      filteredTransactions: filteredTransactions
    });
  }

  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          value={this.state.searchValue}
        />
        <TransactionsList transactions={this.state.filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
