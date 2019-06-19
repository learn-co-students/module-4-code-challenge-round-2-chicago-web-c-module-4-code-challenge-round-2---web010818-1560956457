import React, { Component } from 'react'
import Transaction from './Transaction'

class TransactionsList extends Component {

  

  

  


  render(){
    const renderTransaction = this.props.trans.map(transy => {
     return (<Transaction 
      posted={transy.posted_at} 
      description={transy.description}
      category={transy.category}
      amount={transy.amount}/>)
    })

    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Posted At
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Category
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Amount
              </h3>
            </th>
          </tr>

          {renderTransaction}

        </tbody>
      </table>
    )
  }

}

export default TransactionsList
