import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {AddBox} from "@material-ui/icons";
import {IconButton, TextField} from "@material-ui/core";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(event.currentTarget.value)
    }

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle){
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    const onKeyPressAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            addItem()
        }
    }

    return (
        <div>
            <TextField
                value={title}
                onChange={changeTitle}
                onKeyPress={onKeyPressAddTask}
                size={"small"}
                error={error}
                helperText={error && "Title is required!"}
                label={"Title"}
                variant={"outlined"}
            />
            <IconButton
                onClick={addItem}
                color={"primary"}
                size={"small"}
            >
                <AddBox/>
            </IconButton>
        </div>
    )
}

export default AddItemForm;