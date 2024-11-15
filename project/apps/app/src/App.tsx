import { List } from 'ui'
import { useFetchData } from 'shared-hooks';
import { useDispatch, UseDispatch } from 'react-redux';


const App = () => {
  const {data, loading, error, fetchNextPage, fetchPrevPage } =  useFetchData("https://pokeapi.co/api/v2/pokemon", 50)
  const dispatch = useDispatch()


  return (
  <>
   <List />
  </>
  )
}

export default App
