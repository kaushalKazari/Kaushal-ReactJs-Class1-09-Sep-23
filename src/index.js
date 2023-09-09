import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

//1. import {someNamedImport} from somelocation/somelibrary


//2. import someDefaultImport from somelocation/somelibrary 
import D from './components/D';

// 1. functional component
function A(props){
  let name ='Kaushal';
  let surname2 = 'Raj';
    return(
      <>
        <h1>A {name} {props.surname} - <B surname={surname2}/></h1>      
      </>
    )
}

// 2. class component
class B extends Component{
  // properties/Variables
  name='Yash'


  // constractor


  // methods
  render(){
    return(
      <>
      <span>B - {this.name} {this.props.surname} - <C>Kumar</C></span>
      </>
    )
  }
}

// ES6 Fat arrow function
const C=(props)=>{
  let name = 'Divyansh';
  let surname2 = 'Thakur'
  console.log('Hi', props.children);
  return(
    <>
      <span>C {name} {props.children} - <D surname={surname2}/></span>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let sn = 'Kishor'
root.render(
  <>
    <A surname={sn}/>
  </>
);
