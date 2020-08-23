import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import Loading from './Loading';
import currency from './Currency/currency.json'



class App extends Component {
    state = {
        isLoading: true,
        currency: currency,
        codeCountryA: "",
        codeCountryB: "",
        rateCountryA: "",
        rateCountryB: "",
        conversion: ""
    }

    async componentDidMount() {
        let result = await axios.get('http://data.fixer.io/api/latest?access_key=70293811a1ce62c1a60402f53d8ef586')
        console.log(result)
        this.setState({ data: result.data.rates }, () => {
            // console.log(this.state.data.USD)
        });
        this.setState({ isLoading: false });
    }
    getRateCountryA = (e) => {
        console.log("test function RateA")
        this.setState({ codeCountryA: e.target.value }, () => {
            this.setState({ rateCountryA: this.state.data[this.state.codeCountryA] }, () => {
                this.setState({ conversion: 1 / Number(this.state.rateCountryA) * Number(this.state.rateCountryB) });
                console.log(`codeA: ${this.state.codeCountryA}`)
                console.log(`rateA: ${this.state.rateCountryA}`)
                console.log(`conversion: ${this.state.conversion}`)


            });
           
        });

    }


    getRateCountryB = (e) => {
        console.log("test function RateB")
        this.setState({ codeCountryB: e.target.value }, () => {
            this.setState({ rateCountryB: this.state.data[this.state.codeCountryB] }, () => {
                this.setState({ conversion: 1 / Number(this.state.rateCountryA) * Number(this.state.rateCountryB) });
                console.log(`codeB: ${this.state.codeCountryB}`)
                console.log(`rateB: ${this.state.rateCountryB}`)
                console.log(`conversion: ${this.state.conversion}`)

            })
       
        });

    }
  

    render() {
        return (
            <div>
                <h1 className="headline">SUPER CURRENCY CONVERTER</h1>
                {this.state.isLoading ? <Loading /> :
                    <div className="input">
                        <input type="text" name="" value="1" />
                        <select name="currency" className="currency" onChange={this.getRateCountryA}>
                            {this.state.currency.map((elt, i) =>
                                <option key={i} value={elt.code}>{elt.code}</option>

                            )}
                        </select>
                        <span className="equal">=</span>
                    </div>

                }
                {this.state.isLoading ? <Loading /> :
                    <div className="input">
                        <input type="text" name="" id="" value={this.state.conversion} />
                        <select name="currency" className="currency" onChange={this.getRateCountryB}>
                            {this.state.currency.map((elt, i) =>
                                <option key={i} value={elt.code}>{elt.code}</option>

                            )}

                        </select>
                    </div>

                }
            </div>
        )
    }
}

export default App;