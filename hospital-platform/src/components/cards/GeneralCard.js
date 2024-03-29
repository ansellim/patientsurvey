import React from 'react';

import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography';

export default function GeneralCard(props) {
    return (
        <div>
          <Card variant="outlined">

            <Typography variant="h5"><i>{props.metricName}</i></Typography>

            <Typography variant="h4">Score: <b>{props.score}%</b></Typography>

            <Typography variant="h5"># of feedback: <b>{props.numFeedback}</b></Typography>

          </Card>
        </div>
      );
}