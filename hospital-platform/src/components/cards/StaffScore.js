import React from 'react';

import { useSelector } from 'react-redux';

import GeneralCard from './GeneralCard';

export const StaffScore = () => {

    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;

        var staff_scores = 0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
            var totalstaffentries =( feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffcourtesyrating1? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffcourtesyrating1=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffempathyrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffempathyrating1===6?0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffskillsrating1 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffskillsrating1===6?0:1) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1===6?0:1) : 0) + 

            ( feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffcourtesyrating2? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffcourtesyrating2=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffempathyrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffempathyrating2===6?0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffskillsrating2 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffskillsrating2===6?0:1) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2===6?0:1) : 0)+ 

            ( feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffcourtesyrating3? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffcourtesyrating3=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffempathyrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffempathyrating3===6?0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffskillsrating3 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffskillsrating3===6?0:1) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3===6?0:1) : 0)+ 

            ( feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffcourtesyrating4? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffcourtesyrating4=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffempathyrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffempathyrating4===6?0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffskillsrating4 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffskillsrating4===6?0:1) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4===6?0:1) : 0)+ 

            ( feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffcourtesyrating5? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffcourtesyrating5=== 6? 0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffempathyrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffempathyrating5===6?0:1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5===6?0:1): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffskillsrating5 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffskillsrating5===6?0:1) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5 ?  (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5===6?0:1) : 0) ;
            
            var staffScore = 0;
            totalstaffentries === 0 ? staffScore = 0 :  staffScore = Math.round(((feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffcourtesyrating1? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffcourtesyrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffcourtesyrating1): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffempathyrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffempathyrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffempathyrating1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffexplanationrating1): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffskillsrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffskillsrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffskillsrating1) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance1.staffprofessionalrating1) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffcourtesyrating2? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffcourtesyrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffcourtesyrating2): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffempathyrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffempathyrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffempathyrating2): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffexplanationrating2): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffskillsrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffskillsrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffskillsrating2) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance2.staffprofessionalrating2) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffcourtesyrating3? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffcourtesyrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffcourtesyrating3): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffempathyrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffempathyrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffempathyrating3): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffexplanationrating3): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffskillsrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffskillsrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffskillsrating3) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance3.staffprofessionalrating3) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffcourtesyrating4? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffcourtesyrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffcourtesyrating4): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffempathyrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffempathyrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffempathyrating4): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffexplanationrating4): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffskillsrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffskillsrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffskillsrating4) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance4.staffprofessionalrating4) : 0)

            +(feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffcourtesyrating5? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffcourtesyrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffcourtesyrating5): 0 )+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffempathyrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffempathyrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffempathyrating5): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffexplanationrating5): 0) + (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffskillsrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffskillsrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffskillsrating5) : 0)+ (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5 ? (feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5=== 6? 0:feedbackItem.survey.generalsurvey.staffrating.staffperformance5.staffprofessionalrating5) : 0)

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

            <GeneralCard metricName="Staff" score={Math.round(score.average_score * 100) / 5} numFeedback={score.num_feedbacks}></GeneralCard>

        </>
    )
}
