import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputBoxChange2 } from '../actions/mainActions';

class InputBox extends Component {
  state = {
    inputBox2: ''
  }

  onChange = (e) => {
    this.setState({ inputBox2: e.target.value});
    this.props.inputBoxChange2(e.target.value);
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
  main2: state.inputBox2
});

export default connect(mapStateToProps, { inputBoxChange2 })(InputBox);
