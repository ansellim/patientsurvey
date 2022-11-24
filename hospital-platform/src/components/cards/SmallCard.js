import React from 'react';

import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography';

export default function SmallCard(props) {
    return (
        <div>
          <Card variant="outlined">

            <Typography variant="h6"><b><i>{props.metricName}</i></b></Typography>

            <Typography variant="h5">Score: {props.score}%</Typography>

            <Typography variant="h6"># of feedback: {props.numFeedback}</Typography>

          </Card>
        </div>
      );
}