import React, { useReducer } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Todo1 ",
        complete: false
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false
    }
]
// reducer에 핵션관련 함수를 미리 넣어두고 dispatch로 어떤 액션이라고 알려주면 state에 저장된 상태들이 액션에 맞게 변경된다.
// dispatch로 변경이 아니고 dispatch는 무슨 액션이라고 알려주는 것이다. 변경은 reducer
const reducer = (state, action) => {
    switch(action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo)=> (
                <div key={todo.id}>
                    <label>
                        <input 
                        type="checkbox"
                        checked={todo.complete}
                        onChange={()=>handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

export default Todos;