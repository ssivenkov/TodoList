import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import AddItemForm from "./Components/AddItemForm";
import EditableSpan from "./Components/EditableSpan/EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
    changeTaskTitle: (taskID: string, todoListID: string, id: string) => void
    changeTodoListTitle: (taskID: string, todoListID: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function TodoList(props: TodoListPropsType) {
    const getTaskJSXElement = (t: TaskType) => {
        const removeTask = () => props.removeTask(t.id, props.id)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
        const changeTaskTitle = (title: string) => props.changeTaskTitle(t.id, title, props.id)
        return (
            <li key={t.id}>
                <Checkbox
                    size={"small"}
                    color={"primary"}
                    checked={t.isDone}
                    onChange={changeTaskStatus}
                />
                <EditableSpan title={t.title} changeTitle={changeTaskTitle}/>
                <IconButton
                    onClick={removeTask}
                    size={"small"}>
                    <Delete/>
                </IconButton>
            </li>
        )
    }
    const tasksJSXElements = props.tasks.map(getTaskJSXElement)
    const setAllFilterValue = () => props.changeFilter("all", props.id)
    const setActiveFilterValue = () => props.changeFilter("active", props.id)
    const setCompletedFilterValue = () => props.changeFilter("completed", props.id)
    const removeTodoList = () => props.removeTodolist(props.id)
    const addTask = (title: string) => props.addTask(title, props.id)
    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(title, props.id)

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                <IconButton
                    onClick={removeTodoList}
                    size={"small"}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul style={{listStyle: "none"}}>
                {tasksJSXElements}
            </ul>
            <div>
                <Button
                    size={"small"}
                    variant={"contained"}
                    color={props.filter === "all" ? "primary" : "default"}
                    onClick={setAllFilterValue}
                    style={{margin: "0 3px"}}
                >All
                </Button>
                <Button
                    size={"small"}
                    variant={"contained"}
                    color={props.filter === "active" ? "primary" : "default"}
                    onClick={setActiveFilterValue}
                    style={{margin: "0 3px"}}
                >Active
                </Button>
                <Button
                    size={"small"}
                    variant={"contained"}
                    color={props.filter === "completed" ? "primary" : "default"}
                    onClick={setCompletedFilterValue}
                >Completed
                </Button>
            </div>
        </div>
    )
}

export default TodoList;