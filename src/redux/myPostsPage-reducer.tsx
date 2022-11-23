import {ActionsTypes, dialogsPageType, PostDataType} from "./state";




export const myPostsPageReducer = (state: dialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_POST":
    }

    if (action.type === "ADD_POST") {
        let newPost: PostDataType = {
            id: new Date().getTime(),
            postText: action.newText,
            like: 10
        }
        state.postData.push(newPost)
    state.newPostText = ""

    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
        state.newPostText = action.newText


        return state
    }
}

export type addPostCreatorType = ReturnType<typeof addPostCreator>
export const addPostCreator = (newText: string) => {
    return {
        type: "ADD_POST",
        newText: newText
    } as const
}

export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>
export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}