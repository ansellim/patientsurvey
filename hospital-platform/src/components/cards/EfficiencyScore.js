import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const EfficiencyScore = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var efficiency_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
                var totalefficiencyentries =( feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceSpeed ? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceSpeed===6?0:1): 0) + (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceAccuracy ? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceAccuracy===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney ?  (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney===6?0:1) : 0);
                var efficiencyScore = 0;
                totalefficiencyentries === 0 ? efficiencyScore = 0 :  efficiencyScore = Math.round(((feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime=== 6? 0:feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.waitingTime): 0 )+ (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceSpeed ? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceSpeed=== 6? 0:feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceSpeed): 0) + (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceAccuracy ? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceAccuracy=== 6? 0:feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.serviceAccuracy): 0) + (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney ? (feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney=== 6? 0:feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney) : 0))/(totalefficiencyentries)*100)/100;
                efficiency_scores = efficiency_scores + efficiencyScore;

                if (totalefficiencyentries !== 0) num_feedbacks =num_feedbacks + 1;
            } catch {
                continue;
            }

        }

        const averageScore = efficiency_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <GeneralCard metricName="Efficiency" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

