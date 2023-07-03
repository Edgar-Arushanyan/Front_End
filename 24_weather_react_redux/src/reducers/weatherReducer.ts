import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";

interface DataWeather {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string
    }[];
};

interface WeatherState {
    loading: boolean,
    error: string | null,
    data: DataWeather | null;
       
};
    
    const initialState: WeatherState = {
        loading: false,
        error: null,
        data: null   
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeatherStart(state) {
        state.loading = true;
        state.error = null;
        state.data = null ;
        },

        fetchWeatherSuccess(state, action: PayloadAction<DataWeather>){
            state.loading = false;
            state.data = action.payload;
        },

        fetchWeatherFailure (state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }

})

export const {
    fetchWeatherStart,
    fetchWeatherSuccess,
    fetchWeatherFailure,
} = weatherSlice.actions;

export const fetchWeather = (city: string): any => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchWeatherStart());//stutschimsa w serwer, esli dastutschimsa to success, a net, to failure
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1e72ff893c6a4a5ed4077327e855b4`);//teper moschno wisiwatj funkziu
            dispatch(fetchWeatherSuccess(response.data));
        } catch (error: any) {
            dispatch(fetchWeatherFailure(error.message));
        }
    }
}
export const weatherReducer = weatherSlice.reducer;
