import React from 'react';
import s from './Header.module.css'

import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";




class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        authAPI.me()
            .then((response) => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.login)
            }
        })}

    render () {
    return <Header {...this.props}/>
    }
}

export type MapStateToPropsType = {
isAuth: boolean,
    id: number | null
    login: string | null
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
            id: state.authReducer.userId,
        login: state.authReducer.login

    }
}

type MapDispatchToPropsType = typeof mapDispatchToProps

const mapDispatchToProps = {
    setAuthUserData
}

type HeaderContainerType= MapStateToPropsType & MapDispatchToPropsType


export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);
