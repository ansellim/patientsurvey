import React from 'react';

import { useSelector } from 'react-redux';

import LikertRating from './LikertRating';

export const AverageHospitalityScore = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var foodAndBeverageTotal = 0;
        var safetyAndSecurityTotal = 0;
        var facilityManagementTotal = 0;
        var housekeepingTotal = 0;
        var foodAndBeverageNumFeedbacks = 0;
        var safetyAndSecurityNumFeedbacks = 0;
        var facilityManagementNumFeedbacks = 0;
        var housekeepingNumFeedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

            try {
                const foodAndBeverage = feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage;
                const safetyAndSecurity = feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity;
                const facilityManagement = feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement;
                const housekeeping = feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping;

                if (!isNaN(foodAndBeverage)) {
                    foodAndBeverageTotal = foodAndBeverageTotal + foodAndBeverage;
                    foodAndBeverageNumFeedbacks = foodAndBeverageNumFeedbacks + 1;
                }
                if (!isNaN(safetyAndSecurity)) {
                    safetyAndSecurityTotal = safetyAndSecurityTotal + safetyAndSecurity;
                    safetyAndSecurityNumFeedbacks = safetyAndSecurityNumFeedbacks + 1;
                }
                if (!isNaN(facilityManagement)) {
                    facilityManagementTotal = facilityManagementTotal + facilityManagement;
                    facilityManagementNumFeedbacks = facilityManagementNumFeedbacks + 1;
                }
                if (!isNaN(housekeeping)) {
                    housekeepingTotal = housekeepingTotal + housekeeping;
                    housekeepingNumFeedbacks = housekeepingNumFeedbacks + 1;
                }

            } catch {
                continue;
            }

        }

        const denominatorTotalNumFeedbacks = foodAndBeverageNumFeedbacks + safetyAndSecurityNumFeedbacks + facilityManagementNumFeedbacks + housekeepingNumFeedbacks;
        const numeratorTotalScores = foodAndBeverageTotal + safetyAndSecurityTotal + facilityManagementTotal + housekeepingTotal;
        const averageScore = numeratorTotalScores / denominatorTotalNumFeedbacks;

        const estimatedNumFeedbacks = Math.round(denominatorTotalNumFeedbacks / 4);

        return { average_score: averageScore, num_feedbacks: estimatedNumFeedbacks }

    });

    return (
        <>

            <LikertRating metricName="Average Hospitality Rating (Overall)" score={score.average_score} numFeedback={score.num_feedbacks}></LikertRating>

        </>
    )
}

