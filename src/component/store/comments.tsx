import { IComment } from "../types/index";
import React from "react";

export interface CommentsLoading {
  status: "loading";
}
export interface CommentsLoaded {
  status: "loaded";
  comments: IComment[];
}
interface CommentsError {
  status: "error";
  error: Error;
}
export interface IAction {
  type: string;
  payload: Comments;
}

type Comments = CommentsLoading | CommentsLoaded | CommentsError;
type ContextProps = {
  state: Comments;
  dispatch: React.Dispatch<IAction>;
};
const initialState: Comments = { status: "loading" };
export const Store = React.createContext<Partial<ContextProps>>({});

function reducer(state: Comments, action: IAction) {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return { ...state, ...action.payload };
    case "DELETE_COMMENT":
      return { ...state, ...action.payload };
    case "ADD_COMMENT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export function StoreProvider(props: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
