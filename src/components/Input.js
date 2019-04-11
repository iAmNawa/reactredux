import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBox from './InputBox';
import InputBox2 from './InputBox2';

class Input extends Component {
  render() {
    return (
      <div>
        <InputBox />
        <div>{this.props.main}</div>
        <InputBox2 />
        <div>{this.props.main2}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  main: state.main.input,
  main2: state.main.input2
});

export default connect(mapStateToProps)(Input);
