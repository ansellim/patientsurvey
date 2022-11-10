import React from 'react';

import { useSelector } from 'react-redux';

import LikertRating from './LikertRating';

export const EfficiencyWaitingTime = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var waitingTimeTotal = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
                const waitingTime = feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime;
                waitingTimeTotal = waitingTimeTotal + waitingTime;
                num_feedbacks = num_feedbacks + 1;
            } catch {
                continue;
            }

        }

        const averageWaitingTime = waitingTimeTotal/num_feedbacks

        return { average_score: averageWaitingTime , num_feedbacks: num_feedbacks }

    });

    return (
        <>

            <LikertRating metricName="Efficiency Rating (Waiting Time)" score={score.average_score} numFeedback={score.num_feedbacks}></LikertRating>

        </>
    )
}

