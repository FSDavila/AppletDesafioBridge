import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numero: 'toba' };
    }


    render() {
        return (
            <form>
                <h1>Hello {this.state.numero}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange="{7}"
                />
            </form>
        );
    }
}
export default Test;