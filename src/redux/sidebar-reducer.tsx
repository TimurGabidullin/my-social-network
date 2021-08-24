import React from 'react';
import {ActionsType} from "./redux-store";


export type InitialStateType=typeof initialState

let initialState = {}

const sidebarReducer = (state:InitialStateType = initialState, action: ActionsType) => {

    return state
}


export default sidebarReducer