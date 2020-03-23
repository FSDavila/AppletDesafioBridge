import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from './visao/App.jsx'
//import Test from './visao/Test.jsx'

const elem = document.createElement('div')

document.body.append(elem)

ReactDOM.hydrate(<App />, elem)