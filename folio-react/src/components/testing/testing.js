import React, { Component } from 'react';
import Homepage from './homepage';
import One from './one'
import Welcome from './props'

class TheChild extends React.Component {
  render() {
    return (
      "hello"
    );
  }
}

class TheParent extends React.Component {
  render() {
    return (
      <TheChild
        ref={foo => {
          this.foo = foo;
        }}
      />
    );
  }

  componentDidMount() {
    var x = this.foo.myFunc();
    // x is now 'hello'
  }
}

class Testing extends React.Component {
  render() {
    return (
      <div>
        <TheParent></TheParent>
      </div>
    );
  }
}

export default Testing;