import React from 'react';

import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography';

export default function GeneralCard(props) {
    return (
        <div>
          <Card variant="outlined">

            <Typography variant="h4">{props.metricName}</Typography>

            Score: <Typography variant="h2">{props.score}%</Typography>

            Number of feedback items: <Typography variant="h2">{props.numFeedback}</Typography>

          </Card>
        </div>
      );
}