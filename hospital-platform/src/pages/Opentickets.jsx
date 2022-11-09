import React from "react";

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
        if(feedbackItem.survey.specificsurvey){
            if(feedbackItem.survey.specificsurvey.specificIncidentNature === 'complaint'){
                complaintdata.push({"Id":"Ticket "+i, "Status": feedbackItem.survey.specificsurvey.Status ? feedbackItem.survey.specificsurvey.Status : "Open", "Date":feedbackItem.survey.specificsurvey.IncidentDate, "Summary":feedbackItem.survey.specificsurvey.specificIncident})
            }
        }
    
      }  
      return {mycomplaints : complaintdata}
    });
    

  return (
    <div className="p2 md:p-10 bg-white rounded-3x1">
      <KanbanComponent
        id="kanban"
        dataSource={mycomplaints.mycomplaints}
        cardSettings={{ contentField: "Summary", headerField: "Id"  }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Opentickets;
