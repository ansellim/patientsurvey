import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const EfficiencyWaitingTime = (props) => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var waitingTimeTotal = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
            if(props.departmentfilterval !== "All"){
                if(feedbackItem.Patient.Ward === props.departmentfilterval){
                    const waitingTime = feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime;
                waitingTimeTotal = waitingTimeTotal + waitingTime;
                num_feedbacks = num_feedbacks + 1;
                }
            }else{
                const waitingTime = feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime;
                waitingTimeTotal = waitingTimeTotal + waitingTime;
                num_feedbacks = num_feedbacks + 1;
            }
                
            } catch {
                continue;
            }

        }

        const averageWaitingTime = waitingTimeTotal/num_feedbacks

        return { average_score: averageWaitingTime , num_feedbacks: num_feedbacks }

    });

    return (
        <>

            <GeneralCard metricName="Waiting Time" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

