import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import UI from './visao/UI.jsx'

const elemento = document.createElement('div')

document.body.append(elemento)

ReactDOM.render(<UI />, elemento)