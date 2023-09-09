import React, { Component } from 'react'

export class E extends Component {
    // 1. properties/variable
    name ='Rishi';
    address='';


    // 2. Constructor
    constructor(){
        super();
        this.address='Baglore'
    }

    // 3. methods
    render() {
        return (
        <div>E {this.name} {this.props.surname} from {this.address}</div>
        )
    }
}
