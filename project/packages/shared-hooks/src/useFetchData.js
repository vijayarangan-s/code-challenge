import { useState, useEffect } from 'react';
import {dataSuccess, dataFailure, isloading} from "../../redux/pokemonSlice"
import {useDispatch, useSelector} from "react-redux"

function useFetchData(url = '', perPage = 10) {
    const [offset, setOffset] = useState(0);
    const {data, isLoading: loading, error} = useSelector(state => state?.pokemon)
    const dispatch = useDispatch()
  
    const fetchData = async () => {
      dispatch(isloading(true))
  
      try {
        const response = await fetch(`${url}?limit=${perPage}&offset=${offset}`);
        const {results} = await response.json();
        
         dispatch(dataSuccess(results))
      } catch (err) {
        dispatch(dataFailure(e?.message || "FAILED to fetch data!!..."))
      } finally {
        dispatch(isloading(false))
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [offset]);
  
    const fetchNextPage = () => {
      if (!loading) {
        setOffset((prevOffset) => prevOffset + 1);
      }
    };

    const fetchPrevPage = () => {
        if (!loading) {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
  
    return { data, loading, error, fetchNextPage, fetchPrevPage };
  }
  
  export default useFetchData;