import React from 'react';

import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography';

export default function TicketCard(props) {
    return (
        <div>
          <Card variant="outlined">

            <Typography variant="h5"><i>{props.metricName}</i></Typography>

            <Typography variant="h5"># of Open Tickets: <b>{props.opentickets}</b></Typography>

           <Typography variant="h5"> # of Pending Tickets: <b>{props.pendingtickets}</b></Typography>

           <Typography variant="h5"> # of Closed Tickets: <b>{props.closedtickets}</b></Typography>

            <Typography variant="h5"># of feedback: <b>{props.numFeedback}</b></Typography>

          </Card>
        </div>
      );
}