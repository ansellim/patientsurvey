import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const SatisfactionScore = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var satisfaction_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
                const satisfactionScore = feedbackItem.survey.overallrating.OverallSatisfaction;
                satisfaction_scores = satisfaction_scores + satisfactionScore;
                num_feedbacks = num_feedbacks + 1;
            } catch {
                continue;
            }

        }

        const averageScore = satisfaction_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <GeneralCard metricName="Overall Satisfaction" score={Math.round(score.average_score * 100) / 10} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

