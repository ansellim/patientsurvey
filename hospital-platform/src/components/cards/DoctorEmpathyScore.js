import React from 'react';

import { useSelector } from 'react-redux';

import SmallCard from './SmallCard';

export const DoctorEmpathyScore = (props) => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var doctor_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
            if(props.departmentfilterval !== "All"){
                if(feedbackItem.Patient.Ward === props.departmentfilterval){
                    var totaldoctorentries = (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1===6?0:1) : 0) + 

                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5===6?0:1) : 0);
                    
                    var doctorScore = 0;
                    totaldoctorentries === 0 ? doctorScore = 0 :  doctorScore = Math.round(((feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5) : 0)
        
                    )/(totaldoctorentries)*100)/100;
                    doctor_scores = doctor_scores + doctorScore;
        
                        if (totaldoctorentries !== 0) num_feedbacks =num_feedbacks + 1;
                }
            } else{
                var totaldoctorentries = (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1===6?0:1) : 0) + 

                (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2===6?0:1) : 0)+ 
    
                (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3===6?0:1) : 0)+ 
    
                (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4===6?0:1) : 0)+ 
    
                (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5===6?0:1) : 0);
                
                var doctorScore = 0;
                totaldoctorentries === 0 ? doctorScore = 0 :  doctorScore = Math.round(((feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorempathyrating1) : 0)
    
                +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorempathyrating2) : 0)
    
                +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorempathyrating3) : 0)
    
                +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorempathyrating4) : 0)
    
                +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorempathyrating5) : 0)
    
                )/(totaldoctorentries)*100)/100;
                doctor_scores = doctor_scores + doctorScore;
    
                    if (totaldoctorentries !== 0) num_feedbacks =num_feedbacks + 1;
            }
            
            } catch {
                continue;
            }

        }

        const averageScore = doctor_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <SmallCard metricName="Empathy" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></SmallCard>

        </>
    )
}

