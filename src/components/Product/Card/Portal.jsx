import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    document.appendChild(this.el);
  }

  componentWillUnmount() {
    document.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Lesson extends Component {
  render() {
    return (
      <div>
        <span>
          Text
          </span>
        <Portal>Test Portal</Portal>
      </div>
    )
  }
}

export default Portal;