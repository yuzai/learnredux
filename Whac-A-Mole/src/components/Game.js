import Gameboard from './Gameboard'
import React from 'react'
import Control from './Control'

export default class Game extends React.Component{
  render(){
    return (
      <div className='container'>
        <h1>Whac-A-Mole-game</h1>
      <div className='row'>
        <div className='col-lg-5 col-xs-5'>
            <Gameboard location={this.props.location} hit={this.props.hit_mice}/>
        </div>
        <div className='col-lg-5 col-xs-5'>
            <Control start={this.props.generate_mice} number={this.props.number} end={this.props.pause}/>
        </div>
      </div>
      </div>
    )
  }
}
