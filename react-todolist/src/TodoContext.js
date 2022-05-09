import React, {useReducer , createContext, useContext} from "react"

const initTools = [
  {
    id : 1,
    text : "project no1",
    done : true
  },
  {
    id : 2,
    text : "project no2",
    done : true
  },
  {
    id : 3,
    text : "project no3",
    done : false
  },
  {
    id : 4,
    text : "project no4",
    done : true
  }
]

function todoReducer(state,action){
  switch(action.type){
    case "CREATE" :
      return state.concat(action.todo);
    
    case "TOGGLE" :
      return state.map((todo=>
        todo.id === action.id ? {...todo, done:!todo.done} :todo
        ))
    case "REMOVE" :
      return state.filter(todo=>todo.id !== action.id);
    default:
      throw new Error("error!")      
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export default function TodoProvider({children}){
  const [state,dispatch] = useReducer(todoReducer,initTools);
  const nextId = useRef(5);

  return(
    <TodoStateContext.Provider value={state}>
      <TodoStateContext.provider value={dispatch}>
        {children}
      </TodoStateContext.provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState(){
  return useContext(TodoStateContext);
}

export function useTodoDispatch(){
  return useContext(TodoDispatchContext);
}

export function useTodoNextId(){
  return useContext(TodoNextIdContext);
}