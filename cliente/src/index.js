import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from './visao/App.jsx'
import Test from './visao/Test.jsx'

const elem = document.createElement('div')
var oyea = document.createElement('div')
oyea.setAttribute("id", "divona")

document.body.append(elem)
document.body.append(oyea)

ReactDOM.hydrate(<App />, elem)
ReactDOM.hydrate(<Test />, oyea)