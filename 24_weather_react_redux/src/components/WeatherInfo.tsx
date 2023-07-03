import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WeatherInfo: React.FC = () => {

    const {data, error, loading} = useSelector((state: RootState) => state.weather );

   console.log(data);

//обрабатывает кейс когда идёт занрузка данных но они ещё не получены
    if (loading) {
        return <div>Loading...</div>       
    };

//обрабатывает кейс когда при загрузке данных произошла ошибка
    if (error) {
        return <div>Error: {error}</div>       
    };


//обрабатывает кейс когда в data не сохранена инфомация о погоде (то есть data равна null)
    if (!data) {
        return null;
        
    }
  return (
    <div>
        <h2>Weather information</h2>
        <p>City: {data.name}</p>
        <p>Temperature: {(data.main.temp -273.15).toFixed(1)} °C</p>
        <p>Description: {data.weather[0].description}</p>

    </div>
    ); 
};
export default WeatherInfo;