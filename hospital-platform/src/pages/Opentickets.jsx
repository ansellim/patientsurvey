import React from "react";
import { saveTicket } from "../api";
import { useEffect } from "react";
import { getFeedbackItems } from "../actions/feedbackItems"
import moment from 'moment';
import { Link } from "@mui/material";
import { CiMail } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { useSelector } from 'react-redux';
import { kanbanGrid } from "../static_data/tickets";

const Opentickets = () => {
  const mycomplaints = useSelector((state) => {

    const feedbacks = state.feedbackItems;
    const complaintdata = [];
    for (let i = 0; i < feedbacks.length; i++) {
        const feedbackItem = feedbacks[i];
        if(feedbackItem.survey.specificsurvey){
            if(feedbackItem.survey.specificsurvey.specificIncidentNature === 'complaint' &&  feedbackItem.survey.specificsurvey.Status!== "Deleted"){
                complaintdata.push({"Id":"Ticket "+feedbackItem._id, 
                "FeedbackProviderFirstName":feedbackItem.feedbackProvider.FeedbackProviderFirstName, 
                "FeedbackProviderLastName":feedbackItem.feedbackProvider.FeedbackProviderLastName,
                "FeedbackProviderRelationship":feedbackItem.feedbackProvider.FeedbackProviderRelationship,
                "FeedbackProviderContactNumber":feedbackItem.feedbackProvider.FeedbackProviderContactNumber,
                "FeedbackProviderEmail":feedbackItem.feedbackProvider.FeedbackProviderEmail,
                "PatientFirstName":feedbackItem.Patient.PatientFirstName, 
                "PatientLastName":feedbackItem.Patient.PatientLastName,
                "PatientBedNumber":feedbackItem.Patient.BedNumber,
                "PatientWard":feedbackItem.Patient.Ward,
                "Status": feedbackItem.survey.specificsurvey.Status ? feedbackItem.survey.specificsurvey.Status : "Open", 
                "Date":moment(feedbackItem.survey.specificsurvey.IncidentDate).format("Do MMM YYYY"), 
                "Summary":feedbackItem.survey.specificsurvey.specificIncident})
            }
        }
    
      }  
      return {mycomplaints : complaintdata}
    });
   const HandleClick = async (event) => {
    var ticketstatus;
    var ticketId;
    var myticketsaved;
    try{
      if(event.requestType === "Delete"){
        ticketstatus = "Deleted";
        ticketId = event.data.Id;
         myticketsaved = await saveTicket({ticketstatus, ticketId });
      }
    if(event.requestType ==="Edit"){  
        ticketstatus = event.data.Status;
        ticketId = event.data.Id;
         myticketsaved = await saveTicket({ticketstatus, ticketId });
    } 

   return myticketsaved;
  }
    catch(error){
      console.log(error);
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbackItems());
  }, [dispatch]);

  const cardTemplate =(props)=>{return(
    <div className="card-template">
          <div className='e-card-content'  >
              <table className="card-template-wrap" width="100%">
                  <tbody>
                      <tr>
                          <td className="CardHeader">Id:</td>
                          <td>{props.Id}</td>
                      </tr>
                      <tr>             
                          <td className="CardHeader">Date:</td>
                          <td>{props.Date}</td>
                      </tr>
                      <tr>
                          <td className="CardHeader">Pt Info:</td>
                          <td>{props.PatientFirstName} {props.PatientLastName} {props.PatientWard} {props.PatientBedNumber}</td>
                      </tr>
                      <tr>
                          <td className="CardHeader">FP Info:</td>
                          <td>{props.FeedbackProviderFirstName} {props.FeedbackProviderLastName} {props.FeedbackProviderRelationship}  
                          <a href={`tel:${props.FeedbackProviderContactNumber}`}> {props.FeedbackProviderContactNumber} </a> 
                          <Link onClick={() => window.location = `mailto:${props.FeedbackProviderEmail}`}>{props.FeedbackProviderEmail}</Link></td>
                      </tr>
                      
                      
                      <tr>
                          <td className="CardHeader">Summary:</td>
                          <td>{props.Summary}</td>
                      </tr>
                      <tr>
                          <td className="CardHeader">Actions:</td>
                          <td><Link  onClick={() => window.location = `mailto:`} ><CiMail size={40}></CiMail></Link></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )};
  return (
    <div className="p2 md:p-10 bg-white rounded-3x1">
      <KanbanComponent
        id="kanban"
        dataSource={mycomplaints.mycomplaints}
        //cardSettings={{ contentField: "Summary", headerField: "Id", tagsField: "Date"}}
        cardSettings={{ template: cardTemplate.bind(this), headerField: "Id"}}
        keyField="Status"
        allowDragAndDrop={false} 
        dialogClose={e => HandleClick(e)}
        
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
