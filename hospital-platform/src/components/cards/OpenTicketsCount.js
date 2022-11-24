import React from 'react';

import { useSelector } from 'react-redux';

import TicketCard from './TicketCard';

export const OpenTicketsCount = (props) => {
    const score = useSelector((state) => {

        const feedbacks = state.feedbackItems;
        var opentickets = 0;
        var pendingtickets = 0;
        var closedtickets=0;
        var num_feedbacks = 0;

        for (let i = 0; i < feedbacks.length; i++) {
            const feedbackItem = feedbacks[i];

           try {
                if(props.departmentfilterval !== "All"){
                    if(feedbackItem.Patient.Ward === props.departmentfilterval){
                        if(feedbackItem.survey.specificsurvey){
                            if(feedbackItem.survey.specificsurvey.specificIncidentNature === 'complaint' &&  feedbackItem.survey.specificsurvey.Status!== "Deleted"){
                                if(feedbackItem.survey.specificsurvey.Status==="Open"){
                                    opentickets = opentickets+1;
                                }
                                if(feedbackItem.survey.specificsurvey.Status==="InProgress"){
                                    pendingtickets = pendingtickets+1;
                                }
                                if(feedbackItem.survey.specificsurvey.Status==="Resolved"){
                                    closedtickets = closedtickets+1;
                                }
                            num_feedbacks = num_feedbacks + 1;
                            }
                        }
                    }
                } else{
                    if(feedbackItem.survey.specificsurvey){
                        if(feedbackItem.survey.specificsurvey.specificIncidentNature === 'complaint' &&  feedbackItem.survey.specificsurvey.Status!== "Deleted"){
                            if(feedbackItem.survey.specificsurvey.Status==="Open"){
                                opentickets = opentickets+1;
                            }
                            if(feedbackItem.survey.specificsurvey.Status==="InProgress"){
                                pendingtickets = pendingtickets+1;
                            }
                            if(feedbackItem.survey.specificsurvey.Status==="Resolved"){
                                closedtickets = closedtickets+1;
                            }
                        num_feedbacks = num_feedbacks + 1;
                        }
                    }
                }
            } catch {
                continue;
            }

        }

        return { opentickets: opentickets, pendingtickets: pendingtickets, closedtickets: closedtickets , num_feedbacks: num_feedbacks }

    });


    return (
        <>

            <TicketCard metricName="Tickets Tally" opentickets = {score.opentickets} pendingtickets={score.pendingtickets} closedtickets={score.closedtickets} numFeedback={score.num_feedbacks}></TicketCard>

        </>
    )
}

