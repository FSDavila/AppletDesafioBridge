import React, { useState, useEffect } from 'react'
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button'
import { ProgressBar } from 'primereact/progressbar'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


const EnumSituacao = {
    INICIAL: 0,
    EXIBINDO: 1,
    PESQUISANDO: 2
}


function useModelo() {

    function organizaDados(values) {
      /*  var divisores = dados.dataset[0]
        var ehPrimo = dados.dataset[1]
        return [divisores, ehPrimo] */
        return { valores }
    }

    const estadoInicial = {situacao: EnumSituacao.INICIAL, dados: undefined}

    const [estado, setEstado] = useState(estadoInicial)

    useEffect(() => {
        if (estado.situacao === EnumSituacao.PESQUISANDO) {
            window.fetch('/valores', {
                method: 'post',
                headers: {
                    'Authorization': 'Bearer token',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(setEstado({ dados: data, situacao: EnumSituacao.EXIBINDO }))
            /*
                .then(res => res.json())
                .then(dadosOrganizados =>
                    setEstado({ dados: dadosOrganizados, situacao: EnumSituacao.EXIBINDO })) */
        }
    }, [estado.situacao])


    function reinicia() {
        setEstado(estadoInicial)
    }

    function pesquisar() {
        setEstado({ dados: undefined, situacao: EnumSituacao.PESQUISANDO })
    }

    return [estado, {pesquisar, reinicia}]
}

//<Button label="Calcular" onClick={() => pesquisar()} />
const App = () => {
    const [estado, {pesquisar, reinicia}] = useModelo()

    let conteudo

    switch (estado.situacao) {
        case EnumSituacao.INICIAL: {
            conteudo =
                <Panel header='Applet de calculo divisores / Numero Primo'>
                <form enctype="" action="/valores" method="post">
                        <label>
                            Numero: 
                            <input id="number" type="number" name="number" /> 
                        </label>     
                    <button>Calcular </button>
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
                divisores: estado.dados.divisores,
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
