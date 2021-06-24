import * as React from "react";
import { Button } from "@material-ui/core";
import { IArticle, IComment } from "../types";

interface IVoteProps {
  article?: IArticle;
  comment?: IComment;
  handleVote: (body: IArticle | IComment | undefined) => Promise<any>;
}

const Vote: React.FunctionComponent<IVoteProps> = ({
  article,
  comment,
  handleVote,
}) => {
  const body = article ? article : comment;
  const [vote, setVote] = React.useState(0);
  const updateVote = (change: number) => {
    setVote(vote + change);
    body!.votes = body!.votes + change;
    handleVote(body).catch((error) => setVote(vote - change));
  };
  return (
    <div className="vote-block">
      <div className="vote">
        <Button
          variant="outlined"
          size="small"
          color="primary"
          disabled={vote > 0}
          onClick={() => updateVote(1)}
        >
          + vote!
        </Button>
      </div>
      <p>Votes: {body!.votes}</p>
      <div className="vote">
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          disabled={vote < 0}
          onClick={() => updateVote(-1)}
        >
          - vote!
        </Button>
      </div>
    </div>
  );
};

export default Vote;
