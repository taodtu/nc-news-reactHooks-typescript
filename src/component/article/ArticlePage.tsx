import * as React from 'react';
import useFetchID from "../hooks/useFetchID";
import { LinearProgress } from "@material-ui/core";
import {  getArticle} from '../api';
import {IArticle} from "../types/index";
import Article from "./Article";

interface IArticlePageProps {
    id?:number
}

const ArticlePage: React.FunctionComponent<IArticlePageProps> = ({id}) => {
    const data = useFetchID<IArticle>(getArticle, id);
    return (
        <div>
            {data.status === "loading" && <LinearProgress />}
            {data.status === "error" && <p>error: {data.error}</p>}
            <h3>Article and Its Comments </h3>
            {data.status === "loaded" && <Article {...data.payload} />}
            <hr />
            {/* <CommentListWithUser id={id} getComments={getCommentsByArticle}
                render={handleSubmit => <AddComment onSubmit={handleSubmit} />}
            /> */}
            <hr />
        </div>
    );
};

export default ArticlePage;