import React from "react";
import { saveTicket } from "../api";
import { useState } from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { useSelector } from 'react-redux';

// For now, mockData is used just to create the content on the frontend.
import { kanbanGrid } from "../static_data/tickets";

const Opentickets = () => {
  const mycomplaints = useSelector((state) => {

    const feedbacks = state.feedbackItems;
    const complaintdata = [];
    for (let i = 0; i < feedbacks.length; i++) {
        const feedbackItem = feedbacks[i];
      //  console.log(feedbackItem.feedbackProvider);
        if(feedbackItem.survey.specificsurvey){
            if(feedbackItem.survey.specificsurvey.specificIncidentNature === 'complaint' &&  feedbackItem.survey.specificsurvey.Status!= "Deleted"){
                complaintdata.push({"Id":"Ticket "+feedbackItem._id, "FeedbackProviderFirstName":feedbackItem.feedbackProvider.FeedbackProviderFirstName, "FeedbackProviderLastName":feedbackItem.feedbackProvider.FeedbackProviderLastName,"FeedbackProviderContactNumber":feedbackItem.feedbackProvider.FeedbackProviderContactNumber,"Status": feedbackItem.survey.specificsurvey.Status ? feedbackItem.survey.specificsurvey.Status : "Open", "Date":feedbackItem.survey.specificsurvey.IncidentDate, "Summary":feedbackItem.survey.specificsurvey.specificIncident})
            }
        }
    
      }  
      return {mycomplaints : complaintdata}
    });

   const handleClick = async (event) => {

    
    if(event.requestType == "Delete"){
      var ticketstatus = "Deleted";
      var ticketId = event.data.Id;
      const myticketsaved = await saveTicket({ticketstatus, ticketId });
      //console.log("deleted", myticketsaved.response);
      //axios to tag this as deleted
    }
    if(event.requestType =="Edit"){
      var ticketstatus = event.data.Status;
      var ticketId = event.data.Id;
      const myticketsaved = await saveTicket({ticketstatus, ticketId });
     // console.log("edited", myticketsaved.response);
      // console.log(event.data.Id);
      // console.log(event.data.Status);
      // console.log(event.data.Summary);
      // console.log(event.data.FeedbackProviderLastName);
      // console.log(event.data.FeedbackProviderFirstName);
      // console.log(event.data.FeedbackProviderContactNumber);
      // console.log(event);
      // console.log(event.requestType);
      //axios to tag this as edited
      
    }
  }
  
  return (
    <div className="p2 md:p-10 bg-white rounded-3x1">
      <KanbanComponent
        id="kanban"
        dataSource={mycomplaints.mycomplaints}
        cardSettings={{ contentField: "Summary", headerField: "Id"  }}
        keyField="Status"
        allowDragAndDrop={false} 
    //   dialogOpen={e => handleClick(e)}
        dialogClose={e => handleClick(e)}
      >
        <ColumnsDirective >
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Opentickets;
