# Task Completed
---
## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
#### Question 1: How did you manage to fetch the list and what tool did you use?<br>
#### Answer: 
 I used the fetch api to call the api and get the list of the pokemon data
     
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
    
> check the path : packages/shared-hooks/src/useFetchData.js
 
#### Question 2: What steps would you take to future improve this?<br> 
    
   
Create the custom hook and handling the pagination, api call, server side rending.


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

commit the code as `task-1` - https://github.com/vijayarangan-s/code-challenge/tree/task-1 <br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

#### Answer:
I pass the data into List Components and wrap the table element 

    import React from 'react'
  
    export const List = (props: any) => {
     return (
       <tr>
         <td>{props?.name}</td>
         <td>{props?.url}</td>
         <td className='delete-text' onClick={() => props.onDeletePokemon(props?.name)}>Delete</td>
       </tr>
     )
    }

commit the code as `task-2` - https://github.com/vijayarangan-s/code-challenge/tree/task2 <br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.
  
   
    .head-container{
        display: flex;
        gap: 10px;
    }
    
     /* General Table Styling */
     table {
         width: 50%;
         border-collapse: collapse;
         margin: 20px 0;
         font-size: 16px;
         font-family: Arial, sans-serif;
         color: #333;
       }
     
     /* Header Styling */
     table th {
       background-color: #4CAF50;
       color: white;
       padding: 12px;
       text-align: left;
       font-weight: bold;
       border-bottom: 2px solid #ddd;return (
         <tr>
           <td>{props?.name}</td>
           <td>{props?.url}</td>
           <td className='delete-text' onClick={() => props.onDeletePokemon(props?.name)}>Delete</td>
         </tr>
       )
     }
     
     table td {
       padding: 12px;
       border-bottom: 1px solid #ddd;
     }
     
     table tr:hover {
       background-color: #f1f1f1;
     }
   
     table tr .delete-text{
       font-size: 14px;
       color: red;
       text-decoration: underline;
       cursor: pointer;
     }
   
     table tr .delete-text:hover{ 
       color:#0c3e8e
     }
       margin: 20px 0;
       font-size: 16px;
       font-family: Arial, sans-serif;
       color: #333;
     }
     
     /* Header Styling */
     table th {
       background-color: #4CAF50;
       color: white;
       padding: 12px;
       text-align: left;
       font-weight: bold;
       border-bottom: 2px solid #ddd;return (
         <tr>
           <td>{props?.name}</td>
           <td>{props?.url}</td>
           <td className='delete-text' onClick={() => props.onDeletePokemon(props?.name)}>Delete</td>
         </tr>
       )
     }
     
     table td {
       padding: 12px;
       border-bottom: 1px solid #ddd;
     }
     
     table tr:hover {
       background-color: #f1f1f1;
     }
   
     table tr .delete-text{
       font-size: 14px;
       color: red;
       text-decoration: underline;
       cursor: pointer;
     }
   
     table tr .delete-text:hover{ 
       color:#0c3e8e
     }
  

commit the code as `task-3` - https://github.com/vijayarangan-s/code-challenge/tree/task2 <br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Question 5: Describe the benefits of immutable code.<br>

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?

## Task 6:
### Question 7: explain the use of `useEffect` hook in React<br>
### Answer:
> The useEffect hook in React is used to perform side effects in functional components. It runs after the component renders and can be used for tasks like data fetching, subscriptions, or manually modifying the DOM.

### Question 8: What is A High Order Component?<br>
### Answer:
> A Higher Order Component is a function that takes a component and returns a new component with additional functionality or props. It’s used for code reuse and logic abstraction without modifying the original component directly.

### Question 9: What use cases would a HOC be usefull?<br>
### Answer:
> **Code Reusability:** When multiple components need the same functionality (e.g., authentication, logging, data fetching).
> **Cross-Cutting Concerns:** When you need to add logic like error handling or lifecycle methods to multiple components.

### Question 10: What does it indicate when a component is prefixed with `use` and `with`
### Answer:
> **use Prefix:** In React, when a component or function is prefixed with use, it indicates a custom hook. Custom hooks are functions that encapsulate stateful logic and side effects to be reused across components. They follow the hook naming  convention, which starts with use.<br>
**with Prefix:** When a component is prefixed with with, it usually indicates a Higher-Order Component (HOC). An HOC is a function that takes a component and returns a new component with additional props or functionality, without modifying the original component directly.

### Question 11: What is a Generic type in typescript?
### Answer:
> A Generic type allows you to define a function, class, or interface that works with any data type. It provides type safety without restricting the specific type, making code more reusable.

### Question 12: Whats the difference between a controlled and uncontrolled input in React?
### Answer:
> **Controlled Input:** The form element’s value is managed by React state (value prop)<br>
**Uncontrolled Input:** The form element’s value is managed by the DOM, not React state. You use refs to access the value.





