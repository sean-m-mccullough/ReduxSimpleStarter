import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityDate) {
        const temps = cityDate.list.map(weather => weather.main.temp);
        const pressures = cityDate.list.map(weather => weather.main.pressure);
        const humidities = cityDate.list.map(weather => weather.main.humidity);

        const {lon, lat} = cityDate.city.coord;

        return (
            <tr key={cityDate.city.id}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="purple" units="hPA" /></td>
                <td><Chart data={humidities} color="green" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);