
import React from 'react';

const Results = React.memo(({ results }) => (
    <div>
                <div>Location Name : {results.locationName}</div>
                <div>Humidity : {results.humidity}</div>
                <div>Temperature : {results.temperature}</div>
                <div>Max Temp : {results.maximum}</div>
                <div>Min Temp : {results.minimum}</div>
                <div>Pressure : {results.pressure}</div>
                <div>Sunrise : {results.sunrise}</div>
                <div>sunset : {results.sunset}</div>

    </div>

));

export default Results;