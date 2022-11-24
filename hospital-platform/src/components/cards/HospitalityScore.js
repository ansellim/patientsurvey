import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const HospitalityScore = (props) => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var hospitality_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
            if(props.departmentfilterval !== "All"){
                if(feedbackItem.Patient.Ward === props.departmentfilterval){
                    var totalhospitalityentries =( feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity===6?0:1): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping ?  (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping===6?0:1) : 0);
                    var hospitalityScore = 0;
                    totalhospitalityentries === 0 ? hospitalityScore = 0 :  hospitalityScore = Math.round(((feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage): 0 )+ (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping) : 0))/(totalhospitalityentries)*100)/100;
                    hospitality_scores = hospitality_scores + hospitalityScore;
        
                        if (totalhospitalityentries !== 0) num_feedbacks =num_feedbacks + 1;
                }
            } else{
                var totalhospitalityentries =( feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity===6?0:1): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping ?  (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping===6?0:1) : 0);
                var hospitalityScore = 0;
                totalhospitalityentries === 0 ? hospitalityScore = 0 :  hospitalityScore = Math.round(((feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.foodAndBeverage): 0 )+ (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.safetyAndSecurity): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.facilityManagement): 0) + (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping ? (feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping=== 6? 0:feedbackItem.survey.generalsurvey.hospitalityrating.hospitality.housekeeping) : 0))/(totalhospitalityentries)*100)/100;
                hospitality_scores = hospitality_scores + hospitalityScore;
    
                    if (totalhospitalityentries !== 0) num_feedbacks =num_feedbacks + 1;
            }
            
            } catch {
                continue;
            }

        }

        const averageScore = hospitality_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <GeneralCard metricName="Hospitality" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}

