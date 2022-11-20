import React from "react";

import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

function WordcloudCard(props) {
  return (
    <div>
      <Card variant="outlined">
        <Typography>Testing</Typography>

        <Typography>{props.words}</Typography>
      </Card>
    </div>
  );
}

export const WordcloudChart = () => {
  const feedbackWords = useSelector((state) => {
    const feedbacks = state.feedbackItems;

    const concatenatedString = "";

    for (let i = 0; i < feedbacks.length; i++) {
      const feedbackItem = feedbacks[i];

      try {
        const feedbackText = "";
      } catch {
        continue;
      }
    }

    return { words: "string" };
  });

  return (
    <>
      <WordcloudCard words={feedbackWords.words}></WordcloudCard>
    </>
  );
};
