import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Game from './Game';

function mapStateToProps(state){
  return {
    location:state.location,
    number:state.score,
    pause:state.pause
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Game);

export default App;
