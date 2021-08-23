import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TodoListPropsType = {
    id: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    removeTodolist: (todoListID: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function TodoList(props: TodoListPropsType) {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const getTaskJSXElement = (t: TaskType) => {
        const removeTask = () => props.removeTask(t.id, props.id)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
        return (
            <li key={t.id}>
                <input
                    type="checkbox"
                    checked={t.isDone}
                    onChange={changeTaskStatus}
                />
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
            </li>
        )
    }
    const tasksJSXElements = props.tasks.map(getTaskJSXElement)

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle){
            props.addTask(trimmedTitle, props.id)
        } else {
            setError(true)
        }
        setTitle("")
    }
    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(event.currentTarget.value)
    }
    const onKeyPressAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            addTask()
        }
    }
    const setAllFilterValue = () => props.changeFilter("all", props.id)
    const setActiveFilterValue = () => props.changeFilter("active", props.id)
    const setCompletedFilterValue = () => props.changeFilter("completed", props.id)
    const removeTodoList = () => props.removeTodolist(props.id)
    const allBtnClass = props.filter === "all" ? "active-filter" : ""
    const activeBtnClass = props.filter === "active" ? "active-filter" : ""
    const completedBtnClass = props.filter === "completed" ? "active-filter" : ""
    const userMsg = error ? <div style={{color: "red"}}>Title is required!</div> : null

    // JSX
    return (
        <div>
            <h3>{props.title}<button onClick={removeTodoList}>X</button></h3>
            <div>
                <input
                    className={error ? "error" : ""}
                    value={title}
                    onChange={changeTitle}
                    onKeyPress={onKeyPressAddTask}
                />
                <button onClick={addTask}>+</button>
                {userMsg}
            </div>
            <ul>
                {tasksJSXElements}
            </ul>
            <div>
                <button
                    className={allBtnClass}
                    onClick={setAllFilterValue}
                >All
                </button>
                <button
                    className={activeBtnClass}
                    onClick={setActiveFilterValue}
                >Active
                </button>
                <button
                    className={completedBtnClass}
                    onClick={setCompletedFilterValue}
                >Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList;