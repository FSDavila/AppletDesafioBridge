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
            input: "", //guarda o valor digitado pelo usuario
            dados: [[], false], //guarda a resposta crua da requisicao feita via axios
            divisores: [[], []], //guarda o array de divisores do valor informado
            ehPrimo: '', //apenas guarda a resposta da verificacao n primo
            status: 0, //equivalente a um enum de status 0 = inicial 1 = exibindo dados
            code: [], //fragmento html a ser exibido no momento
            history: [] //array que guarda os numeros submetidos anteriormente ao app
        };
    }

    gerenciadorInput = (event) => {
        this.setState({ input: event.target.value });
    }

    enviarDados = (event) => {
        event.preventDefault()

        axios.post(`/valores`, { number: this.state.input}).then(res => {
            this.setState({ dados: res.data, status: 1 })
        }).then(this.preparaDados)
        
    }

    preparaDados = () => {
        this.state.history.push(this.state.input) //guarda o valor imputado no historico
        if (this.state.dados[1] === true) { //seta o valor da string que indica se eh ou nao primo
            this.setState({ ehPrimo: 'Primo' })
        }
        else {
            this.setState({ ehPrimo: 'Nao Primo' })
        }
        var divisors = [[], []] //prepara o array com os dados dos divisores
        for (var i = 0; i < this.state.dados[0].length ; i++) {
            divisors[0].push(i)
            divisors[1].push(this.state.dados[0][i])
        }
        this.setState({ divisores: divisors, status: 1 })
    }

    reducer = () => {
        const reducer = ([index, divisor], [ind, div]) => [index.concat(ind), divisor.concat(div)]
        const inicial = [[], []]
        const [index, divisor] = dados.reduce(reducer, inicial)
        return { index , divisor }
    }

    listItems = () => {
        this.state.divisores[0].map((number) => <li>{number}</li>)
    }

    reiniciar = (event) => {
        event.preventDefault()
        this.setState({ code: [], status: 0, divisores : [], ehPrimo : '', dados: [[], false], input: '' }) //reinicia o app exceto a variavel que guarda o historico
    }

    renderSwitch = (event) => {
        event.preventDefault()  
        var body
        switch (this.state.status) {
            case 0: {
                 body =
                     <Panel header='Visao do Applet'>
                        <form>
                            <p>Insira o valor a ser verificado:</p>
                         <input type='text' onChange={this.gerenciadorInput} id="number" name="number" />{" "}
                         <Button label="Calcular" onClick={this.enviarDados} />{" "}
                         <Button label="Mostrar" className="p-button-success" icon="pi pi-check" onClick={this.renderSwitch} />
                        </form>
                    </Panel>
                break
            }
            case 1: {
                body = 
                    <Panel header='Visao do Applet'>
                    <div>
                        <ul>{this.listItems}</ul>
                    </div>
                    </Panel>
                break
            }
        }
        this.setState({ code: body })
    }

 

    //<h1>Insira o valor a ser verificado: {this.state.username}</h1>
    render() {
        return (
            <Panel header='Applet de calculo de divisores / detector de numeros primos' >
                <Button label="Iniciar App" onClick={this.renderSwitch} />{" "}
                <Button className="p-button-danger" icon="pi pi-times" onClick={this.reiniciar} />
                <p>Numeros ja utilizados: <ul>{this.state.history.map((number) => <li>{number}</li>)}</ul></p>
                {this.state.code}
            </Panel>
        )
    }
}
export default UI;