import React from 'react';

import { useSelector } from 'react-redux';

import LikertRating from './LikertRating';

export const EfficiencyValueForMoney = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var valueForMoneyTotal = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
                const valueForMoneyScore = feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney;

                if(!isNaN(valueForMoneyScore)){
                    valueForMoneyTotal = valueForMoneyTotal + valueForMoneyScore;
                    num_feedbacks = num_feedbacks + 1;
                }

               
            } catch {
                continue;
            }

        }

        console.log("total value of money",valueForMoneyTotal)

        const averageValueForMoney = valueForMoneyTotal/num_feedbacks;

        console.log("Average Value for Money",averageValueForMoney);

        return { average_score: averageValueForMoney , num_feedbacks: num_feedbacks }

    });

    return (
        <>

            <LikertRating metricName="Efficiency Rating (Value for Money)" score={score.average_score} numFeedback={score.num_feedbacks}></LikertRating>

        </>
    )
}

