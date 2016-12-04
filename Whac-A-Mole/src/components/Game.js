import Gameboard from './Gameboard'
import React from 'react'
import Control from './Control'

export default class Game extends React.Component{
  render(){
    return (
      <div className='container'>
        <h1>Whac-A-Mole-game</h1>
      <br/>
      <div className='row'>
        <div className='col-lg-5 col-xs-12 text-center'>
            <Gameboard location={this.props.location} hit={this.props.hit_mice} miss={this.props.miss_mice}/>
        </div>
        <div className='col-lg-5 col-xs-10 col-xs-offset-1 text-center'>
            <Control start={this.props.generate_mice} number={this.props.number} miss={this.props.miss} end={this.props.pause}/>
        </div>
      </div>
      <button id='info' type="button" className="btn btn-info " data-toggle="modal" data-target="#myModal">
         玩法说明
      </button>
      </div>
    )
  }
}
