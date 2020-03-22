import React from 'react'
import ReactDom from 'react-dom'
import axios from '../../axios'

export default class NumericHandler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Number: 0
        }
    }

    getUsersData() {
        axios
            .get(`/valores`, { params: document.getElementById("number").value })
            .then(res => {
                const data = res.data
                console.log(data)

            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount() {
        this.getUsersData()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getUsersData}>
                    <label>
                        Valor:
            <input type="text" id="number" name="name" onChange={} />
                    </label>
                    <button type="submit">Calcular</button>
                </form>
            </div>
        )
    }
}