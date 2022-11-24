import React from 'react';
import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const SatisfactionScore = (props) => {
    const score = useSelector((state) => {
        const feedbacks= state.feedbackItems;
         
        var satisfaction_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];
            var satisfactionScore = 0;
           try {
                if(props.departmentfilterval !== "All"){
                    if(feedbackItem.Patient.Ward === props.departmentfilterval){
                        satisfactionScore = feedbackItem.survey.overallrating.OverallSatisfaction;
                        satisfaction_scores = satisfaction_scores + satisfactionScore;
                        num_feedbacks = num_feedbacks + 1;
                    }
                    //feedbacks = state.feedbackItems.filter(state.feedbackItems.Patient.Ward===props.departmentfilterval);
                } else{
                    satisfactionScore = feedbackItem.survey.overallrating.OverallSatisfaction;
                    satisfaction_scores = satisfaction_scores + satisfactionScore;
                    num_feedbacks = num_feedbacks + 1;
                }
                
            } catch {
                continue;
            }

        }

        var averageScore = satisfaction_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <GeneralCard metricName="Overall Satisfaction" score={Math.round(score.average_score * 100) / 10} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

