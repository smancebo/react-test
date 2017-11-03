import React from 'react';

class WeatherListComponent extends React.Component {
    render() {
        const { day } = this.props;
        const date = new Data(day.dt * 1000);

        return (
            <div className="weather-list-item">
                <h1> {} </h1>
            </div>
        )
    }
}