import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Store, IAction, CommentsLoaded } from "../store/comments";
import { UserContext } from "../store/userContext";
import { deleteComment } from "../api";

interface IProps {
  comment_id: string;
  author: string;
}

const DeleteComment: React.FunctionComponent<IProps> = ({
  comment_id,
  author
}) => {
  const { state, dispatch } = useContext(Store);
  let user = useContext(UserContext);

  const handleDelete = (id: string) => {
    deleteComment(id).then(() => {
      (dispatch as React.Dispatch<IAction>)({
        type: "DELETE_COMMENT",
        payload: {
          comments: (state as CommentsLoaded).comments.filter(
            comment => comment.comment_id !== id
          ),
          status: "loaded"
        }
      });
    });
  };
  return (
    <div className="deletebutton">
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => handleDelete(comment_id)}
        disabled={user !== author}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteComment;
