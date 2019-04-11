import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBox from './InputBox';

class Input extends Component {
  render() {
    return (
      <div>
        <InputBox />
        <div>{this.props.main}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  main: state.main.input
});

export default connect(mapStateToProps)(Input);
