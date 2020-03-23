import React, { useState, useEffect } from 'react'
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button'
import { ProgressBar } from 'primereact/progressbar'
import { InputText } from 'primereact/inputtext'
import { Test } from './Test'
import axios from 'axios'
    

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


const EnumSituacao = {
    INICIAL: 0,
    EXIBINDO: 1,
    PESQUISANDO: 2
}



/*const Form = props => {
    const [numero, setNumero] = useState('')
    handleSubmit = event => {
        pesquisar()
        event.preventDefault()

        axios.post(`/valores`).then(resp => {
            setDados(resp.data)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={numero}
                onChange={event => setNumero(event.target.value)}
            />
            <button type="submit">Add card</button>
        </form>
    )
}*/



function useModelo() {

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    

    function organizaDados(values) {
        /*  var divisores = dados.dataset[0]
          var ehPrimo = dados.dataset[1]
          return [divisores, ehPrimo] */
        return values
    }

    const estadoInicial = { situacao: EnumSituacao.INICIAL, dados: undefined }

    const [estado, setEstado] = useState(estadoInicial)

    useEffect(() => {
        if (estado.situacao === EnumSituacao.PESQUISANDO) {
            axios.post('/valores', { number: 7 })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                })

            /*
            postData(`/valores`, { number: 7 })
                .then(res => res.json())
                .then((data) => {
                    console.log(data); // JSON data parsed by `response.json()` call
                });*/

            /*fetch('/valores')
                .then(r => r.json())
                .then(dadosEmArray =>
                    setEstado({ dados: organizaDados(dadosEmArray), situacao: EnumSituacao.EXIBINDO })) */
        }
    }, [estado.situacao])


    function reinicia() {
        setEstado(estadoInicial)
    }

    function pesquisar() {
        setEstado({ dados: undefined, situacao: EnumSituacao.PESQUISANDO })
    }

    function setDados(data) {
       setEstado({ dados: data })
    }


    return [estado, {pesquisar, reinicia, setDados}]
}

//<Button label="Calcular" onClick={() => pesquisar()} />
//<input id="number" type="number" name="number" />
const App = () => {
    const [estado, { pesquisar, reinicia, setDados }] = useModelo()

    let conteudo

    switch (estado.situacao) {
        case EnumSituacao.INICIAL: {
            conteudo =
                <Panel header='Applet de calculo divisores / Numero Primo'>
                <form>
                    <input id="number" type="number" name="number" />
                    <Button label="Calcular" onClick={() => pesquisar()} />
                </form>
                </Panel>
            break
        }

        case EnumSituacao.PESQUISANDO: {
            conteudo =
                <Panel header='Carregando dados...'>
                    <ProgressBar mode="indeterminate" />
                </Panel>
            break
        }

        case EnumSituacao.EXIBINDO: {
            const dados = {
                divisores: estado.dados[0],
                ehPrimo: estado.dados[1]    
            }
            conteudo =
                <Panel header='Applet de calculo divisores / Numero Primo'>
                    {dados.divisores}
                    {dados.ehPrimo}
                    <Button label='Fechar' onClick={() => reinicia()} />
                </Panel>
        }
    }

    return (
        <Panel header='Verificador de divisores - Detector de numeros Primos'>
            <div>{conteudo}</div>
        </Panel>
    )

}

export default App
