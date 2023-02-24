import React, {ComponentType} from 'react';
import {Redirect} from "@reach/router";
// import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
};


// export function withAuthRedirect <T>(Component: ComponentType<T>)  {
//
//     const RedirectComponent = (props: MapStatePropsType) => {
//         let {isAuth, ...restProps} = props
//         if (isAuth) return <Redirect to='./login'/>
//         else return <Component {...restProps as T}/>
//
//     }
//
//
//     let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
//
//     return ConnectAuthRedirectComponent
// }

export const withAuthRedirect = (Component: any) => { // УТОЧНИТЬ ТИП
    let redirectComponent = (props: MapStatePropsType) =>  {
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component {...props} />
    }
    return redirectComponent
    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(redirectComponent)

    return ConnectAuthRedirectComponent
}