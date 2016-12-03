import React from 'react'
import Cell from './Cell'
import '../style/cell.css'


const m=25;
export default class Gameboard extends React.Component{
  render(){
    const cells=[];
    for(let i=0;i<m;i++)
      cells.push(<Cell i={i} key={i} location={this.props.location} hit={this.props.hit} miss={this.props.miss}/>)
    return (
      <div className='gameboard'>
      {
        cells
      }
      </div>
    )
  }
}
