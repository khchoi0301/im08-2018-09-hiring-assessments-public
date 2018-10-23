import React, { Component } from 'react';
import FishTableRow from './FishTableRow';

//TODO: FishTable will have many FishTableRows
var FishTable = (props) => {
  return (<table>
    <tbody>
      {props.fishes.map((fish, i) => {
        return <FishTableRow fish={fish} key={i} />
      })}
    </tbody>
  </table>)
}

export default FishTable;
