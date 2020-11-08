import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import { CarItem } from './CarItem';
import axios from "axios";
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component  {

  state = {
    values: []
  }

  componentDidMount(){

    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        // console.log(response);
        this.setState({
          values: response.data
        })
      })
    // this.setState({
    //   values: [ {id:1, name: 'Value 101'} , {id:2, name: 'Value 102'}]
    // })
  }

  render() {
    return (
      <div>
          <Header as='h2' icon>
            <Icon name='users' />
            Account Settings
            <Header.Content>
             Reavitivites
            </Header.Content>
          </Header>
          <List>
          {this.state.values.map((value: any) => 
           <List.Item key={value.id}>{value.name}</List.Item> 
          )
          }
          </List> 
                {/* <ul>
          {cars.map((car) => 
          <CarItem car={car}/>
          )
          }
        </ul> */}      
      </div>
    ); 
  }

}

// function App()  {
//   return (
//     <div className="App">
//       <ul>
//         {cars.map((car) => 
//         <CarItem car={car}/>
//         )
//         }
//       </ul>
//     </div>
//   );
// }

export default App;
