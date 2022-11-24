import React from 'react';
import { useSelector } from 'react-redux';
import FeedbackCard from './FeedbackCard';
import classes from "./VerbatimFeedback.module.css";
import moment from 'moment';
export const VerbatimFeedback = () => {

    const listItems = useSelector((state) => {

       const feedbacks = state.feedbackItems;
        const listItems = [];
       for (let i = 0; i < feedbacks.length; i++) {
             const feedbackItem = feedbacks[i];
             if(feedbackItem.survey.specificsurvey){
                if(feedbackItem.survey.specificsurvey.Status!== "Deleted" && feedbackItem.survey.specificsurvey.specificIncident!=="" && (feedbackItem.survey.specificsurvey.specificIncidentNature==="compliment" ||feedbackItem.survey.specificsurvey.specificIncidentNature==="complaint"||feedbackItem.survey.specificsurvey.specificIncidentNature==="suggestion"  )){
                listItems.push({id: i, content:feedbackItem.survey.specificsurvey.specificIncident, nature: feedbackItem.survey.specificsurvey.specificIncidentNature,  date: moment(feedbackItem.survey.specificsurvey.IncidentDate).format("Do MMM YYYY")})
           }}
                 
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
