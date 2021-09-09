import {FilterValuesType, TodoListType} from '../App'
import {v1} from "uuid";

type RemoveTodoListAT = {
    type: "REMOVE-TODOLIST"
    id: string
}

type AddTodoListAT = {
    type: "ADD-TODOLIST"
    title: string
}

export type ChangeTodolistAT = {
    type: "CHANGE-TODOLIST-TITLE"
    title: string
    id: string
}

export type ChangeTodolistFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    filter: FilterValuesType
    id: string
}

const todolistReducer = (todoLists: Array<TodoListType>,
                         action: RemoveTodoListAT |
                                  AddTodoListAT |
                              ChangeTodolistAT |
                              ChangeTodolistFilterAT) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.id)
        case "ADD-TODOLIST":
            const newTodoListID = v1();
            return [...todoLists, {id: newTodoListID, title: action.title, filter: "all"}]
        case "CHANGE-TODOLIST-TITLE":
            return todoLists.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        case "CHANGE-TODOLIST-FILTER":
            return todoLists.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        default:
            return todoLists
    }
}

export default todolistReducer;

export const RemoveTodoListAC = (id: string): RemoveTodoListAT => ({
    type: "REMOVE-TODOLIST",
    id: id
})

export const AddTodoListAC = (title: string): AddTodoListAT => ({
    type: "ADD-TODOLIST",
    title: title
})

export const ChangeTodolistAC = (title: string, id: string): ChangeTodolistAT => ({
    type: "CHANGE-TODOLIST-TITLE",
    title,
    id
})

export const ChangeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterAT => ({
    type: "CHANGE-TODOLIST-FILTER",
    filter,
    id
})