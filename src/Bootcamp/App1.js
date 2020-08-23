import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import './Bootcamp/App1.css'
import Loading from './Loading';
class App1 extends Component {
  state = {
    isLoading: true
  }
  async componentDidMount() {
    let result = await axios.get('https://restcountries.eu/rest/v2/all')
    let pictures = await axios.get('https://picsum.photos/v2/list')
    console.log(result.data)
    this.setState({ data: result.data.slice(40, 60) });
    this.setState({ picturesArr: pictures.data });
    this.setState({ isLoading: false });
  }
  // componentDidMount() {
  //   axios.get('https://restcountries.eu/rest/v2/all')
  //     .then(response => console.log(response))
  // }
  // componentDidMount() {
  //   fetch('https://restcountries.eu/rest/v2/all')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }
  render() {
    return (
      <div className={this.state.isLoading ? '' : 'App'}>

        {this.state.isLoading ? <Loading /> : <Carousel>{this.state.picturesArr.map((elt, i) => <Carousel.Item>
          <img
            src={elt.download_url}
          />
          <Carousel.Caption>
            <h3>{elt.author}</h3>
          </Carousel.Caption>
        </Carousel.Item>


        )
        }</Carousel>
        }





        {this.state.isLoading ? <Loading /> :
          this.state.data.map((elt, i) => {
            return <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={elt.flag} />
              <Card.Body>
                <Card.Title>{elt.name}</Card.Title>
                <Card.Text>
                  <p>{elt.population}</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          })
        }

      </div>
    );
  }
}

export default App1;
