import React, {useRef} from "react";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/redux-store";
import {addMessageCreator, onMessagePostCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";




type DialogsPropsType = {
    store: StoreType
}


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const DialogsState = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    const onMessage = (message: string) => {
        props.store.dispatch(onMessagePostCreator(message))
    }

    return <Dialogs dialogsState={DialogsState.dialogsReducer} addMessage={addMessage} setMessage={onMessage}/>

}
const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsState: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: ()=> {
            dispatch(addMessageCreator())
        },
        onMessage: (message:string)=> {
            dispatch(onMessagePostCreator(message))
        }
    }
}
//уточнить пропсы



const SuperDialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)