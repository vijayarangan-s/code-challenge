import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemon", 
    initialState: {
        isLoading:false,
        data: [],
        error: null
    },
    reducers: {
        isloading: (state, action) => {
            console.log({action})
            return {...state, isLoading: action?.payload}
        },
        dataSuccess: (state, action) => {
            return {...state, data: action?.payload}
        },
        dataFailure: (state, action) => {
            return {...state, isLoading: false, error: action?.payload}
        },
        deletePokemon: (state, action) => {
            const filterData = state?.data?.filter(v => v?.name !== action?.payload)
            return {...state, data: filterData}
        }
    }
})

export const {isloading, dataSuccess, dataFailure, deletePokemon} = pokemonSlice?.actions
export default pokemonSlice?.reducer