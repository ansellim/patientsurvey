import React from 'react';
import { useSelector } from 'react-redux';
import FeedbackCard from './FeedbackCard';
import classes from "./VerbatimFeedback.module.css";


export const VerbatimFeedback = () => {

    const listItems = useSelector((state) => {

       const feedbacks = state.feedbackItems;
        const listItems = [];
       for (let i = 0; i < feedbacks.length; i++) {
             const feedbackItem = feedbacks[i];
             if(feedbackItem.survey.specificsurvey){
                listItems.push({id: i, content:feedbackItem.survey.specificsurvey.specificIncident, date: feedbackItem.survey.specificsurvey.IncidentDate})
           }
                 
           }  
           return {listItems : listItems}
        });
   //console.log(listItems.listItems.length);
    
      
    return (
        <div className={classes.container}>
            {listItems.listItems.map((item, index)=>{
                return <FeedbackCard feedbackindex={index} feedbackdate={item.date} feedbackitem={item.content}></FeedbackCard>
            })}
            
        </div>
        // <FeedbackCard  feedbackitem={listItems.listItems[0].content}></FeedbackCard>

    );
}
