import React, {useReducer} from "react";
import reducer from "./reducer";

const initialState = {
    todos: [],
    todo: {
        id: '',
        text: '',
        completed: false
    },
    searchTerm: ''
};
const Store = React.createContext(initialState);

function TodoProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    );
}

export {Store, TodoProvider};

