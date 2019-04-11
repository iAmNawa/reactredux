import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputBoxChange } from '../actions/mainActions';

class InputBox extends Component {
  state = {
    inputBox: ''
  }

  onChange = (e) => {
    this.setState({ inputBox: e.target.value});
    this.props.inputBoxChange(e.target.value);
  }

  render() {
    return (
      <div>
        <input value={this.state.inputBox} onChange={this.onChange}></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  main: state.inputBox
});

export default connect(mapStateToProps, { inputBoxChange })(InputBox);
