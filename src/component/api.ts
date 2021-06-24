import axios from "axios";
import { IArticle, IComment } from "./types";

const request = axios.create({
  baseURL: "http://localhost:7071/api"
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => data);
};

export const getArticles = (
  topic?: "" | "cooking" | "coding" | "football",
  author?: string,
  sort_by?: string | unknown,
  order?: string,
  limit?: number,
  p?: number
) => {
  return request
    .get(`/articles`, { params: { topic, author, sort_by, order, limit, p } })
    .then(({ data }) => data);
};

export const getUser = (username: string | number | undefined) => {
  return request.get(`/user`, { params: { username: `user_id#${username}`} }).then(({ data }) => data);
};

export const getArticle = (article_id: string | number | undefined) => {
  return request
    .get(`/article`, { params: { article_id: `article_id#${article_id}`} })
    .then(({ data }) => data);
};

export const updateArticle = ( body: IArticle| IComment | undefined) => {
  return request
    .patch(`/article`, body)
    .then(({ data }) => data);
};

export const addComment = ( body: {author: string; body:string, article_id: number}) => {
  return request
    .post(`/comment`, body)
    .then(({ data }) => data);
};

export const getCommentsByArticle = (
  article_id: number|string,
) => {
  return request
    .get(`/comments`, { params: { article_id} })
    .then(({ data }) => data);
};

export const getCommentsByUser = (
  username: string |number,
) => {
  return request
    .get(`/comments`, { params: { username} })
    .then(({ data }) => data);
};

export const updateComment = ( body: IArticle| IComment | undefined) => {
  return request
    .patch(`/comment`, body)
    .then(({ data }) => data);
};

export const deleteComment = (id: string) => {
  return request.delete(`/comment`);
};
