import React from 'react';

import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography';

export default function LikertRating(props) {
  return (
    <div>
      <Card variant="outlined">


        <Typography variant="h5">{props.metricName}</Typography>

        Score: <Typography variant="h3">{props.score}</Typography>

        Number of feedback items: <Typography variant="h3">{props.numFeedback}</Typography>

      </Card>
    </div>
  );
}