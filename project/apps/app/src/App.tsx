import { List } from 'ui'
import { useFetchData } from 'shared-hooks';
import { useDispatch, UseDispatch } from 'react-redux';
import {deletePokemon} from "redux-store"


const App = () => {
  const {data, loading, error, fetchNextPage, fetchPrevPage } =  useFetchData("https://pokeapi.co/api/v2/pokemon", 50)
  const dispatch = useDispatch()

  const handleDeletePokemon = (pokemonName = '') => {
      dispatch(deletePokemon(pokemonName))
  }


  if(error) return <>Something went wrong</>

  return (
  <>
    <div>
      <h1>Pokemon list:</h1>
      
      <div className='head-container'>
        <button onClick={() => fetchPrevPage()}>Prev</button>
        <button onClick={() => fetchNextPage()}>Next</button>
      <div>Total: {data?.length}</div>
      </div>
    </div>
    
    {loading && <>Loading</>}
    {!loading && data?.length > 0 && <table>
      <thead>
        <th>name</th>
        <th>url</th>
        <th>action</th>
      </thead>
      <tbody>
      { data?.map((dataProps: {name: string, url: string}, i:number) => {
        return <List key={i} {...dataProps} onDeletePokemon={(name) => handleDeletePokemon(name) }/>
      }) }
       </tbody>
    </table>}
  </>
  )
}

export default App
