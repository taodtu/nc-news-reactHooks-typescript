import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Store, IAction, CommentsLoaded } from "../store/comments";
import { UserContext } from "../store/userContext";
import { deleteComment } from "../api";
import { IComment } from "../types";

const DeleteComment: React.FunctionComponent<IComment> = (comment) => {
  const { state, dispatch } = useContext(Store);
  let user = useContext(UserContext);

  const handleDelete = (comment: IComment) => {
    deleteComment(comment).then(() => {
      (dispatch as React.Dispatch<IAction>)({
        type: "DELETE_COMMENT",
        payload: {
          comments: (state as CommentsLoaded).comments.filter(
            (commentElement) => commentElement.comment_id !== comment.comment_id
          ),
          status: "loaded",
        },
      });
    });
  };
  return (
    <div className="deletebutton">
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => handleDelete(comment)}
        disabled={user !== comment.author}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteComment;
