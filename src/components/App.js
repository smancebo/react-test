import React from 'react';
import ZipForm from './ZipForm';
import { get } from 'axios';

class App extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            zipcode: ''
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    async onFormSubmit(zipcode) {

        const { data } = await get(`http://localhost:3000/weather/${zipcode}`);
        const { city, list: dates} = data;
        this.setState({ zipcode, city, dates, selectedDate: null });
    }

    render() {
        return (
            <div className="app">
                <ZipForm onSubmit={this.onFormSubmit}></ZipForm>
            </div>
        );

    }
}

export default App