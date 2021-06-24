import React from "react";
import Style from "./Comment.module.css";
import Vote from "../button/Vote";
import { updateComment } from "../api";
import { Link } from "@reach/router";

interface IProps {
  comment_id: string;
  author: string;
  body: string;
  votes: number;
  created_at: string;
  spk: string;
  id: string;
  article_id: number;
}

const Comment: React.FunctionComponent<IProps> = ({
  comment_id,
  author,
  body,
  votes,
  created_at,
  spk,
  id,
  article_id,
  children,
}) => {
  return (
    <div className={Style.article}>
      <div className={Style.left}>
        <span className={Style.tag}>
          <Link to={`/users/${author}`}>Author: {author}</Link>
        </span>
        <span className={Style.tag}>Date: {created_at.split("T")[0]}</span>
      </div>
      <div className={Style.mid}>
        <p>Comment: {body}</p>
      </div>
      <div className={Style.right}>
        <div className="vote">
          <Vote
            comment={{
              comment_id,
              author,
              body,
              votes,
              created_at,
              spk,
              id,
              article_id,
            }}
            handleVote={updateComment}
          />
        </div>
        <div className="vote">{children}</div>
      </div>
    </div>
  );
};

export default Comment;
