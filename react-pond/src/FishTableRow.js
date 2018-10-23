import React, { Component } from 'react';

//TODO: FishTable has many FishTableRows

class FishTableRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDescription: false
    }
  }

  onHandleClick() {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  render() {
    return (<tr>
      <td class="fish-name">{this.props.fish.name}</td>
      <td><img src={this.props.fish.image} onClick={this.onHandleClick.bind(this)} /></td>
      {this.state.showDescription ? <td>{this.props.fish.description}</td> : null}
    </tr>)
  }
}

export default FishTableRow;
