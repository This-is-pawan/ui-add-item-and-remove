import axios from 'axios';
import React, { Component } from "react";

const url = 'https://official-joke-api.appspot.com/random_joke';

export default class ClassComponentDidMount extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      heading: null, 
    };
  }

  componentDidMount() {
    const fetchJoke = async () => {
      try {
        const response = await axios.get(url);
        // console.log(response.data);
        this.setState({
          heading: response.data,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchJoke();
  }

  render() {
    const { heading } = this.state;
    return (
      <div>
       
       <h2>Jokes</h2>
       <h5 style={{color:'blue',letterSpacing:'2px'}}>1) 
        This is a componentDidMount in class-based component (like useEffect) </h5>
        {heading ? (
          <div>
            <p>{heading.setup}</p>
            <p><strong>{heading.punchline}</strong></p>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}
