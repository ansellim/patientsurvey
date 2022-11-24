import React from 'react';

import { useSelector } from 'react-redux';

import SmallCard from './SmallCard';

export const TotalExplanationScore = (props) => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;
        var doctor_scores = 0;
        var staff_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
            if(props.departmentfilterval !== "All"){
                if(feedbackItem.Patient.Ward === props.departmentfilterval){
                    var totalstaffentries = (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1===6?0:1) : 0) + 

                    (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5===6?0:1) : 0);
                    
                    var staffScore = 0;
                    totalstaffentries === 0 ? staffScore = 0 :  staffScore = Math.round(((feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1) : 0)
        
                    +(feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2) : 0)
        
                    +(feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3) : 0)
        
                    +(feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4) : 0)
        
                    +(feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5) : 0)
        
                    )/(totalstaffentries)*100)/100;
                    staff_scores = staff_scores + staffScore;
        
                        if (totalstaffentries !== 0) num_feedbacks =num_feedbacks + 1;

                        var totaldoctorentries = (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1===6?0:1) : 0) + 

                        (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2===6?0:1) : 0)+ 
            
                        (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3===6?0:1) : 0)+ 
            
                        (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4===6?0:1) : 0)+ 
            
                        (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5===6?0:1) : 0);
                        
                        var doctorScore = 0;
                        totaldoctorentries === 0 ? doctorScore = 0 :  doctorScore = Math.round(((feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1) : 0)
            
                        +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2) : 0)
            
                        +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3) : 0)
            
                        +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4) : 0)
            
                        +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5) : 0)
            
                        )/(totaldoctorentries)*100)/100;
                        doctor_scores = doctor_scores + doctorScore;
            
                            if (totaldoctorentries !== 0) num_feedbacks =num_feedbacks + 1;
                }
            } else{
                var totalstaffentries = (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1===6?0:1) : 0) + 

                (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2===6?0:1) : 0)+ 
    
                (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3===6?0:1) : 0)+ 
    
                (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4===6?0:1) : 0)+ 
    
                (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5===6?0:1) : 0);
                
                var staffScore = 0;
                totalstaffentries === 0 ? staffScore = 0 :  staffScore = Math.round(((feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1) : 0)
    
                +(feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2) : 0)
    
                +(feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3) : 0)
    
                +(feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4) : 0)
    
                +(feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5) : 0)
    
                )/(totalstaffentries)*100)/100;
                staff_scores = staff_scores + staffScore;
    
                    if (totalstaffentries !== 0) num_feedbacks =num_feedbacks + 1;

                    var totaldoctorentries = (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1===6?0:1) : 0) + 

                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4===6?0:1) : 0)+ 
        
                    (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5 ?  (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5===6?0:1) : 0);
                    
                    var doctorScore = 0;
                    totaldoctorentries === 0 ? doctorScore = 0 :  doctorScore = Math.round(((feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance1.doctorexplanationrating1) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance2.doctorexplanationrating2) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance3.doctorexplanationrating3) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance4.doctorexplanationrating4) : 0)
        
                    +(feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5 ? (feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5=== 6? 0:feedbackItem.survey.generalsurvey.doctorrating.doctorperformance5.doctorexplanationrating5) : 0)
        
                    )/(totaldoctorentries)*100)/100;
                    doctor_scores = doctor_scores + doctorScore;
        
                        if (totaldoctorentries !== 0) num_feedbacks =num_feedbacks + 1;
            }
            
            } catch {
                continue;
            }

        }

        const averageScore = staff_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <SmallCard metricName="Explanation" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></SmallCard>

        </>
    )
}

