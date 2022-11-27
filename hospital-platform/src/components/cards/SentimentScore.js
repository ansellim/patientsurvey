import React from 'react';
import { useSelector } from 'react-redux';
import classes from "./VerbatimFeedback.module.css";
import moment from 'moment';
import { getSentiment } from '../../actions/getSentiment';
import GeneralCard from './GeneralCard';

export const SentimentScore = (props) => {

    const sentimentInformation = useSelector((state) => {

       const feedbacks = state.feedbackItems;
        const listItems = [];
        
       for (let i = 0; i < feedbacks.length; i++) {
             const feedbackItem = feedbacks[i];
             
             if(props.departmentfilterval !== "All"){
                if(feedbackItem.Patient.Ward === props.departmentfilterval){
                     
                    if(feedbackItem.survey.specificsurvey){
                       
                        if(feedbackItem.survey.specificsurvey.Status!== "Deleted" && feedbackItem.survey.specificsurvey.specificIncident!=="" && (feedbackItem.survey.specificsurvey.specificIncidentNature==="compliment" ||feedbackItem.survey.specificsurvey.specificIncidentNature==="complaint"||feedbackItem.survey.specificsurvey.specificIncidentNature==="suggestion"  )){
                            if (props.datefilterval!=="All"){
                                if(moment(feedbackItem.survey.specificsurvey.IncidentDate).format("YYYY")==props.datefilterval)
                                    listItems.push({id: i, content:feedbackItem.survey.specificsurvey.specificIncident, nature: feedbackItem.survey.specificsurvey.specificIncidentNature,  date: moment(feedbackItem.survey.specificsurvey.IncidentDate).format("Do MMM YYYY")})
                            } else{
                                listItems.push({id: i, content:feedbackItem.survey.specificsurvey.specificIncident, nature: feedbackItem.survey.specificsurvey.specificIncidentNature,  date: moment(feedbackItem.survey.specificsurvey.IncidentDate).format("Do MMM YYYY")})
                            }
                   }}
                }
             } else{
                if(feedbackItem.survey.specificsurvey ){
                    if(feedbackItem.survey.specificsurvey.Status!== "Deleted" && feedbackItem.survey.specificsurvey.specificIncident!=="" && (feedbackItem.survey.specificsurvey.specificIncidentNature==="compliment" ||feedbackItem.survey.specificsurvey.specificIncidentNature==="complaint"||feedbackItem.survey.specificsurvey.specificIncidentNature==="suggestion"  )){
                        if (props.datefilterval!=="All"){
                            if(moment(feedbackItem.survey.specificsurvey.IncidentDate).format("YYYY")==props.datefilterval)
                                listItems.push({id: i, content:feedbackItem.survey.specificsurvey.specificIncident, nature: feedbackItem.survey.specificsurvey.specificIncidentNature,  date: moment(feedbackItem.survey.specificsurvey.IncidentDate).format("Do MMM YYYY")})
                        } else{
                            listItems.push({id: i, content:feedbackItem.survey.specificsurvey.specificIncident, nature: feedbackItem.survey.specificsurvey.specificIncidentNature,  date: moment(feedbackItem.survey.specificsurvey.IncidentDate).format("Do MMM YYYY")})
                        }               }}
             }    

           }  

           var sumOfSentimentScores = 0;
           var numOfFeedbacks = 0;

           listItems.forEach((item) => {

            const content = item.content;
            const sentimentScore = getSentiment(content);
            sumOfSentimentScores += sentimentScore;
            numOfFeedbacks +=1;

           })

           const averageSentiment = sumOfSentimentScores/feedbacks.length;

        //    console.log(averageSentiment);

           return {averageSentiment : averageSentiment, numOfFeedbacks: feedbacks.length}
        });
    
    return (
        <div className={classes.container}>
            <GeneralCard metricName="Sentiment Score" score={sentimentInformation.averageSentiment*100} numFeedback={sentimentInformation.numOfFeedbacks} ></GeneralCard>
        </div>

    );
}
