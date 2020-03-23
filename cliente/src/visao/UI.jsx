import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

class UI extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            dados: [[], false],
            divisores: [],
            ehPrimo: '',
            status: 0
        };
    }

    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`/valores`, { number: this.state.username }).then(res => {
            this.setState({ dados: res.data })
        })

    }

    
    /*mostraDados = (event) => {
        event.preventDefault()
        valores = this.state.dados[0].forEach(valores => { valores.push })
        this.setState
    }*/

    preparaDados = (event) => {
        event.preventDefault()
        var boolao = this.state.dados[1]
        var divisors = []
        divisors = this.state.dados[0]
        this.setState({ divisores: divisors, status: 1 })
    }

    renderSwitch = (event) => {
        event.preventDefault()
        var body
        switch (this.state.status) {
            case 0: {
                 body =
                    <Panel header='Applet de calculo de divisores / detector de numeros primos'>
                        <form>
                            <p>Insira o valor a ser verificado:</p>
                            <input type='text' onChange={this.myChangeHandler} id="number" name="number" />
                            <Button label="Calcular" onClick={this.handleSubmit} />
                            <Button label="Mostrar" onClick={this.preparaDados} />
                            <h1>{this.state.ehPrimo}</h1>
                            {this.preparaDados}
                        </form>
                    </Panel>
                break
            }
            case 1: {
                body =
                    <div>
                        <ul>
                            {
                                this.state.divisores.map((item, i) => <li key={i}>Test</li>)
                            })
                        }
                    </ul>
                    </div>
                break
            }
        }
        return body
    }

    //<h1>Insira o valor a ser verificado: {this.state.username}</h1>
    render() {
        let body
        return (
            <Panel header='Applet de calculo de divisores / detector de numeros primos'>
                <Button label="afodase" onClick={body = this.renderSwitch} />
                {body}
            </Panel>
        )
    }
}
export default UI;