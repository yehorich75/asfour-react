import React from 'react';

import './Modal.scss';

export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <button className="modal__close-button" onClick={this.props.onClose}>Close</button>
                {this.props.children}
            </div>
        )
    }
}