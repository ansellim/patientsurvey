import React from 'react';

import {useSelector} from 'react-redux';

export const SatisfactionScore = () => {

    const score = useSelector((state) => {

        const feedbacks =  state.feedbackItems;
        // const item = feedbacks[45];
        // console.log(item.survey.overallrating.OverallSatisfaction)
        
        var satisfaction_scores = 0;
        var num_scores = 0;

    for(let i=0;i<feedbacks.length;i++){
        const feedbackItem = feedbacks[i];
        

        try{
            const satisfactionScore = feedbackItem.survey.overallrating.OverallSatisfaction;
        satisfaction_scores = satisfaction_scores + satisfactionScore;
        num_scores = num_scores + 1;
        } catch {
            continue;
        }

    }

        return {average_score: satisfaction_scores/num_scores, num_scores: num_scores}

    });

   

    return(
        <>
        <p>Average Satisfaction Score: {score.average_score}, Number of Feedback Items: {score.num_scores}</p>
        </>
    )
}

