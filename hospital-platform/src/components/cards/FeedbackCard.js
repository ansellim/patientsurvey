import React from 'react';

import Card from '@mui/material/Card'
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function FeedbackCard(props) {
    return (
        <div>
            <Card variant="outlined">
            
            <Typography variant="h6" style={{ marginLeft: '1rem' }}>Feedback {props.feedbackindex + 1} on {props.feedbackdate} ({props.feedbacknature}):</Typography>
            <CardContent><Typography variant="h7">{props.feedbackitem}</Typography></CardContent>

          </Card>
        </div>
      );
}