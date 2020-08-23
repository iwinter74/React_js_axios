import React, { Component } from 'react';
import axios from 'axios'
import './Picsum/App2.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Loading from './Loading'

class App2 extends Component {
    state = { 
isLoading: true
    }
    
    async componentDidMount() {
        let result = await axios.get('https://picsum.photos/v2/list')
        console.log(result.data)
        this.setState({ picArr: result.data });
        this.setState({ isLoading: false  });
    }

    render() { 
        return ( 
            <div className="App">
                {this.state.isLoading ? <Loading /> :
                    this.state.picArr.map((elt, i) =>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={elt.download_url} />
  <Card.Body>
    <Card.Title>{elt.author}</Card.Title>
    <Button variant="primary">See more</Button>
  </Card.Body>
</Card>
                    
                    
                    )
                    


}



            </div>
         );
    }
}
 
export default App2;