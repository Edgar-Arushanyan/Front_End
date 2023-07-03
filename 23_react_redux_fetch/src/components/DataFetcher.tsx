import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { store } from '../store/store';

const DataFetcher: React.FC<{endpoint: string, action: Function}> = ({
    endpoint,
    action
 }) => {

  //для любого глобального state производим внутри метода dispatch()
  const dispatch = useDispatch();  

  //Хук позвольяющий работать с жизненным циклом компонента
  useEffect(() => {
    const fetchData =async () => {
        try {
            // CRUD => create / red / update / delete
            const response = await axios.get(endpoint);
            dispatch(action(response.data))
            console.log(store.getState());
        } catch (error) {
            console.log(error);
        }   
    };
    fetchData();
  }, [dispatch, endpoint, action])
  return null; 
};
export default DataFetcher;