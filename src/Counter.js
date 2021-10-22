import { useState } from "react";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const likes = () => {
    setlike(like + 1);
  };
  const dislikes = () => {
    setdislike(dislike + 1);
  };
  return (
    <div>
      <IconButton aria-label="delete" onClick={likes}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton aria-label="delete" onClick={dislikes}>
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
