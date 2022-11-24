import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const NetPromoterScore = (props) => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;
        var num_feedbacks = 0;
        var num_promoters = 0;
        var num_detractors = 0;
        
        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];
            var promotionRating = 0;
            try {
                if(props.departmentfilterval !== "All"){
                    if(feedbackItem.Patient.Ward === props.departmentfilterval){
                        promotionRating = feedbackItem.survey.overallrating.NetPromoterScore;

                        if (promotionRating >= 9) {
                            num_promoters = num_promoters + 1;
                        } 
                        
                        if (promotionRating <= 6) {
                            num_detractors = num_detractors + 1;
                        }
                        num_feedbacks = num_feedbacks + 1;
                    }
                    //feedbacks = state.feedbackItems.filter(state.feedbackItems.Patient.Ward===props.departmentfilterval);
                } else{
                    promotionRating = feedbackItem.survey.overallrating.NetPromoterScore;
                    if (promotionRating >= 9) {
                        num_promoters = num_promoters + 1;
                    } 
                    
                    if (promotionRating <= 6) {
                        num_detractors = num_detractors + 1;
                    }
                    num_feedbacks = num_feedbacks + 1;
                }
            } catch {
                continue;
            }
        }

        const percentPromoters = num_promoters / num_feedbacks * 100;
        const percentDetractors = num_detractors / num_feedbacks * 100;
        const netPromoterScore = percentPromoters- percentDetractors;

      //  console.log("net promoter score",netPromoterScore);

        return { score: netPromoterScore, num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <GeneralCard metricName="Net Promoter Score" score={Math.round(score.score)} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

