import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [data, setData] = useState();

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:5000/collections/breakfast',
  //     responseType: 'json',
  //   }).then((response) => {
  //     setData(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  return <DataContext.Provider value={{ data }} {...props} />;
};

export const useDataState = () => {
  const state = useContext(DataContext);
  return {
    ...state,
  };
};
