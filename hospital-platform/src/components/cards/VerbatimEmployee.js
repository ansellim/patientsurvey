import React from 'react';
import { useSelector } from 'react-redux';
import FeedbackCard from './FeedbackCard';
import classes from "./VerbatimFeedback.module.css";
import moment from 'moment';
export const VerbatimEmployee = () => {
    const listItems = useSelector((state) => {

        const feedbacks = state.feedbackItems;
        const listItems = [];
       for (let i = 0; i < feedbacks.length; i++) {
             const feedbackItem = feedbacks[i];
             if(feedbackItem.survey.generalsurvey){
                if (feedbackItem.survey.generalsurvey.staffrating.staffcomment1){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.staffrating.staffcomment1, nature: "Staff Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.staffrating.staffcomment2){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.staffrating.staffcomment2, nature: "Staff Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.staffrating.staffcomment3){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.staffrating.staffcomment3, nature: "Staff Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.staffrating.staffcomment4){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.staffrating.staffcomment4, nature: "Staff Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.staffrating.staffcomment5){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.staffrating.staffcomment5, nature: "Staff Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.doctorrating.doctorcomment1){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.doctorrating.doctorcomment1, nature: "Doctor Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.doctorrating.doctorcomment2){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.doctorrating.doctorcomment2, nature: "Doctor Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.doctorrating.doctorcomment3){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.doctorrating.doctorcomment3, nature: "Doctor Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.doctorrating.doctorcomment4){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.doctorrating.doctorcomment4, nature: "Doctor Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                if (feedbackItem.survey.generalsurvey.doctorrating.doctorcomment5){
                    listItems.push({id: i, content:feedbackItem.survey.generalsurvey.doctorrating.doctorcomment5, nature: "Doctor Feedback",  date: moment(feedbackItem.entryDate).format("Do MMM YYYY")});
                }
                
            }
                 
           }  
           return {listItems : listItems}
        });
   //console.log(listItems.listItems.length);
    
      
    return (
        <div className={classes.container}>
            {listItems.listItems.map((item, index)=>{
                return <FeedbackCard feedbackindex={index} feedbackdate={item.date} feedbackitem={item.content} feedbacknature={item.nature}></FeedbackCard>
            })}
            
        </div>
        // <FeedbackCard  feedbackitem={listItems.listItems[0].content}></FeedbackCard>

    );
}
