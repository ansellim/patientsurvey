import React from 'react';

import { useSelector } from 'react-redux';

import SmallCard from './SmallCard';


export const StaffProfessionalScore = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var staff_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
            var totalstaffentries = (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1===6?0:1) : 0) + 

            (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2===6?0:1) : 0)+ 

            (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3===6?0:1) : 0)+ 

            (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4===6?0:1) : 0)+ 

            (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5===6?0:1) : 0);
            
            var staffScore = 0;
            totalstaffentries === 0 ? staffScore = 0 :  staffScore = Math.round(((feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5) : 0)

            )/(totalstaffentries)*100)/100;
            staff_scores = staff_scores + staffScore;

                if (totalstaffentries !== 0) num_feedbacks =num_feedbacks + 1;
            } catch {
                continue;
            }

        }

        const averageScore = staff_scores / num_feedbacks;

        return { average_score: averageScore , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <SmallCard metricName="Staff Professionalism" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></SmallCard>

        </>
    )
}
