import React from 'react';

import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography';

export default function LikertRating(props) {
  return (
    <div>
      <Card variant="outlined">


        <Typography variant="h5">{props.metricName}</Typography>

        Score: <Typography variant="h3">{Math.round(props.score*100)/100}</Typography>

        # of feedback: <Typography variant="h3">{props.numFeedback}</Typography>

      </Card>
    </div>
  );
}