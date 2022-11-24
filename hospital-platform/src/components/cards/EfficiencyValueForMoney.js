import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const EfficiencyValueForMoney = (props) => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var valueForMoneyTotal = 0;
        var num_feedbacks = 0;
        var valueForMoneyScore = 0;
        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];
            
           try {
            if(props.departmentfilterval !== "All"){
                if(feedbackItem.Patient.Ward === props.departmentfilterval){
                    valueForMoneyScore = feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney;

                if(!isNaN(valueForMoneyScore)){
                    valueForMoneyTotal = valueForMoneyTotal + valueForMoneyScore;
                    num_feedbacks = num_feedbacks + 1;
                }
                }
            } else{
                valueForMoneyScore = feedbackItem.survey.generalsurvey.efficiencyrating.efficiency.valueForMoney;

                if(!isNaN(valueForMoneyScore)){
                    valueForMoneyTotal = valueForMoneyTotal + valueForMoneyScore;
                    num_feedbacks = num_feedbacks + 1;
                }
            }
                 

               
            } catch {
                continue;
            }

        }

        //console.log("total value of money",valueForMoneyTotal)

        const averageValueForMoney = valueForMoneyTotal/num_feedbacks;

        //console.log("Average Value for Money",averageValueForMoney);

        return { average_score: averageValueForMoney , num_feedbacks: num_feedbacks }

    });

    return (
        <>

            <GeneralCard metricName="Value for Money" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

