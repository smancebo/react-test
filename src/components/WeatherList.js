import React from 'react'

class WeatherList extends React.Component
{
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }
    render() {
        const { days } = this.props;
        return (
            <div className="weather-list flex-parent">

            </div>
        );
    }
}

export default WeatherList;