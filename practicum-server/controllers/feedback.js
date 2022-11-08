// Importing the feedback model. Recall that the model gives
// our express server a representation of the objects in
// the feedback collection.

import Feedback from "../models/feedback.js";

export const getFeedback = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  try {
    //res.send("Testing testing");
    const feedbackMessages = await Feedback.find();
    //console.log(feedbackMessages);
    res.status(200).json(feedbackMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFeedback = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  console.log(req.body);
  const {
    PatientFirstName,
    PatientLastName,
    BedNumber,
    Ward,
    Hospital,
    FeedbackProviderFirstName,
    FeedbackProviderLastName,
    FeedbackProviderRelationship,
    FeedbackProviderContactNumber,
    FeedbackProviderAddress,
    FeedbackProviderGender,
    IncidentDate,
    specificIncidentNature,
    specificIncident,
    NetPromoterScore,
    OverallSatisfaction,
    efficiency,
    efficiencycomments,
    hospitality,
    hospitalitycomments,
    staffperformance1,
    staffName1,
    staffRole1,
    staffcomments1,
    staffperformance2,
    staffName2,
    staffRole2,
    staffcomments2,
    staffName3,
    staffRole3,
    staffperformance3,
    staffcomments3,
    staffName4,
    staffRole4,
    staffperformance4,
    staffcomments4,
    staffName5,
    staffRole5,
    staffperformance5,
    staffcomments5,
    doctorName1,
    doctorRole1,
    doctorperformance1,
    doctorcomments1,
    doctorName2,
    doctorRole2,
    doctorperformance2,
    doctorcomments2,
    doctorName3,
    doctorRole3,
    doctorperformance3,
    doctorcomments3,
    doctorName4,
    doctorRole4,
    doctorperformance4,
    doctorcomments4,
    doctorName5,
    doctorRole5,
    doctorperformance5,
    doctorcomments5,
  } = req.body;
  
  //console.log("housekeeping:"+hospitality.housekeeping);
  // Creating a new instance of the feedback model, using the
  // content of the request body.
  const newFeedback = new Feedback({
    isActive: 1, // hardcoded
    Patient: {
      PatientFirstName: PatientFirstName,
      PatientLastName: PatientLastName,
      icNumber: "S7000000M", // hardcoded
      Gender: "M", // hardcoded
      BedNumber: BedNumber,
      Ward: Ward,
      Hospital: Hospital, // hardcoded
    },
    feedbackProvider: {
      FeedbackProviderFirstName: FeedbackProviderFirstName,
      FeedbackProviderLastName: FeedbackProviderLastName,
      FeedbackProviderRelationship: FeedbackProviderRelationship,
      FeedbackProviderContactNumber: FeedbackProviderContactNumber,
      FeedbackProviderAddress: FeedbackProviderAddress,
      FeedbackProviderGender: FeedbackProviderGender,
    },
    survey:{
      specificsurvey:{
        IncidentDate: IncidentDate,
        specificIncidentNature: specificIncidentNature,
        specificIncident: specificIncident,
      },
      generalsurvey:{
        efficiencyrating:{
          efficiency:{
              waitingTime:efficiency ? efficiency.waitingTime: 0,
              serviceSpeed:efficiency ?  efficiency.serviceSpeed:0,
              serviceAccuracy: efficiency ? efficiency.serviceAccuracy:0,
              valueForMoney: efficiency ? efficiency.valueForMoney:0,           
          },
          efficiencycomments: efficiencycomments,
        },
        hospitalityrating:{
          hospitality:{
            foodAndBeverage: hospitality ? hospitality.foodAndBeverage:0,
            safetyAndSecurity: hospitality ? hospitality.safetyAndSecurity:0,
            facilityManagement: hospitality ? hospitality.facilityManagement:0,
            housekeeping: hospitality ? hospitality.housekeeping:0,
          },
          hospitalitycomments:hospitalitycomments,
        },
        staffrating:{
          staffName1:staffName1,
          staffRole1:staffRole1,
          staffperformance1:{
            staffcourtesyrating1:staffperformance1? staffperformance1.staffcourtesyrating1:0,
            staffempathyrating1:staffperformance1?staffperformance1.staffempathyrating1:0,
            staffexplanationrating1:staffperformance1?staffperformance1.staffexplanationrating1:0,
            staffskillsrating1:staffperformance1?staffperformance1.staffskillsrating1:0,
            staffprofessionalrating1:staffperformance1?staffperformance1.staffprofessionalrating1:0,
          },
          staffcomments1:staffcomments1,
          staffName2:staffName2,
          staffRole2:staffRole2,
          staffperformance2:{
            staffcourtesyrating2:staffperformance2 ? staffperformance2.staffcourtesyrating2:0,
            staffempathyrating2:staffperformance2 ? staffperformance2.staffempathyrating2:0,
            staffexplanationrating2:staffperformance2 ? staffperformance2.staffexplanationrating2:0,
            staffskillsrating2:staffperformance2 ? staffperformance2.staffskillsrating2:0,
            staffprofessionalrating2:staffperformance2 ? staffperformance2.staffprofessionalrating2:0,
          },
          staffcomments2:staffcomments2,
          staffName3:staffName3,
          staffRole3:staffRole3,
          staffperformance3:{
            staffcourtesyrating3:staffperformance3 ? staffperformance3.staffcourtesyrating3:0,
            staffempathyrating3:staffperformance3 ? staffperformance3.staffempathyrating3:0,
            staffexplanationrating3:staffperformance3 ? staffperformance3.staffexplanationrating3:0,
            staffskillsrating3:staffperformance3 ? staffperformance3.staffskillsrating3:0,
            staffprofessionalrating3:staffperformance3 ? staffperformance3.staffprofessionalrating3:0,
          },
          staffcomments3:staffcomments3,
          staffName4:staffName4,
          staffRole4:staffRole4,
          staffperformance4:{
            staffcourtesyrating4:staffperformance4 ? staffperformance4.staffcourtesyrating4:0,
            staffempathyrating4:staffperformance4 ? staffperformance4.staffempathyrating4:0,
            staffexplanationrating4:staffperformance4 ? staffperformance4.staffexplanationrating4:0,
            staffskillsrating4:staffperformance4 ? staffperformance4.staffskillsrating4:0,
            staffprofessionalrating4:staffperformance4 ? staffperformance4.staffprofessionalrating4:0,
          },
          staffcomments4:staffcomments4,
          staffName5:staffName5,
          staffRole5:staffRole5,
          staffperformance5:{
            staffcourtesyrating5:staffperformance5 ? staffperformance5.staffcourtesyrating5:0,
            staffempathyrating5:staffperformance5 ? staffperformance5.staffempathyrating5:0,
            staffexplanationrating5:staffperformance5 ? staffperformance5.staffexplanationrating5:0,
            staffskillsrating5:staffperformance5 ? staffperformance5.staffskillsrating5:0,
            staffprofessionalrating5:staffperformance5 ? staffperformance5.staffprofessionalrating5:0,
          },
          staffcomments5:staffcomments5,
        },
        doctorrating:{
          doctorName1:doctorName1,
          doctorRole1:doctorRole1,
          doctorperformance1:{
            doctorcourtesyrating1:doctorperformance1 ? doctorperformance1.doctorcourtesyrating1:0,
            doctorempathyrating1:doctorperformance1 ? doctorperformance1.doctorempathyrating1:0,
            doctorexplanationrating1:doctorperformance1 ? doctorperformance1.doctorexplanationrating1:0,
            doctorskillsrating1:doctorperformance1 ? doctorperformance1.doctorskillsrating1:0,
            doctorprofessionalrating1:doctorperformance1 ? doctorperformance1.doctorprofessionalrating1:0,
          },
          doctorcomments1:doctorcomments1,
          doctorName2:doctorName2,
          doctorRole2:doctorRole2,
          doctorperformance2:{
            doctorcourtesyrating2:doctorperformance2 ? doctorperformance2.doctorcourtesyrating2:0,
            doctorempathyrating2:doctorperformance2 ? doctorperformance2.doctorempathyrating2:0,
            doctorexplanationrating2:doctorperformance2 ? doctorperformance2.doctorexplanationrating2:0,
            doctorskillsrating2:doctorperformance2 ? doctorperformance2.doctorskillsrating2:0,
            doctorprofessionalrating2:doctorperformance2 ? doctorperformance2.doctorprofessionalrating2:0,
          },
          doctorcomments2:doctorcomments2,
          doctorName3:doctorName3,
          doctorRole3:doctorRole3,
          doctorperformance3:{
            doctorcourtesyrating3:doctorperformance3 ? doctorperformance3.doctorcourtesyrating3:0,
            doctorempathyrating3:doctorperformance3 ? doctorperformance3.doctorempathyrating3:0,
            doctorexplanationrating3:doctorperformance3 ? doctorperformance3.doctorexplanationrating3:0,
            doctorskillsrating3:doctorperformance3 ? doctorperformance3.doctorskillsrating3:0,
            doctorprofessionalrating3:doctorperformance3 ? doctorperformance3.doctorprofessionalrating3:0,
          },
          doctorcomments3:doctorcomments3,
          doctorName4:doctorName4,
          doctorRole4:doctorRole4,
          doctorperformance4:{
            doctorcourtesyrating4:doctorperformance4 ? doctorperformance4.doctorcourtesyrating4:0,
            doctorempathyrating4:doctorperformance4 ? doctorperformance4.doctorempathyrating4:0,
            doctorexplanationrating4:doctorperformance4 ? doctorperformance4.doctorexplanationrating4:0,
            doctorskillsrating4:doctorperformance4 ? doctorperformance4.doctorskillsrating4:0,
            doctorprofessionalrating4:doctorperformance4 ? doctorperformance4.doctorprofessionalrating4:0,
          },
          doctorcomments4:doctorcomments4,
          doctorName5:doctorName5,
          doctorRole5:doctorRole5,
          doctorperformance5:{
            doctorcourtesyrating5:doctorperformance5 ? doctorperformance5.doctorcourtesyrating5:0,
            doctorempathyrating5:doctorperformance5 ? doctorperformance5.doctorempathyrating5:0,
            doctorexplanationrating5:doctorperformance5 ? doctorperformance5.doctorexplanationrating5:0,
            doctorskillsrating5:doctorperformance5 ? doctorperformance5.doctorskillsrating5:0,
            doctorprofessionalrating5:doctorperformance5 ? doctorperformance5.doctorprofessionalrating5:0,
          },
          doctorcomments5:doctorcomments5,
        }
      },
      overallrating:{
        NetPromoterScore: NetPromoterScore,
        OverallSatisfaction: OverallSatisfaction,
      },
    }
  });
  try {
    await newFeedback.save();

    console.log(newFeedback);
    res.status(201).json(newFeedback);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

// Notes:
// CORS error was experienced in the frontend, which was overcome by adding the above headers
// to the response object: https://stackoverflow.com/a/63734701/11569643
//
