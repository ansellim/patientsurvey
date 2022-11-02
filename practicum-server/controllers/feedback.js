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
            waitingTime:efficiency.waitingTime,
            serviceSpeed: efficiency.serviceSpeed,
            serviceAccuracy: efficiency.serviceAccuracy,
            valueForMoney: efficiency.valueForMoney,
          },
          efficiencycomments: efficiencycomments,
        },
        hospitalityrating:{
          hospitality:{
            foodAndBeverage: hospitality.foodAndBeverage,
            safetyAndSecurity: hospitality.safetyAndSecurity,
            facilityManagement: hospitality.facilityManagement,
            housekeeping: hospitality.housekeeping,
          },
          hospitalitycomments:hospitalitycomments,
        },
        staffrating:{
          staffName1:staffName1,
          staffRole1:staffRole1,
          staffperformance1:{
            staffcourtesyrating1:staffperformance1.staffcourtesyrating1,
            staffempathyrating1:staffperformance1.staffempathyrating1,
            staffexplanationrating1:staffperformance1.staffexplanationrating1,
            staffskillsrating1:staffperformance1.staffskillsrating1,
            staffprofessionalrating1:staffperformance1.staffprofessionalrating1,
          },
          staffcomments1:staffcomments1,
          staffName2:staffName2,
          staffRole2:staffRole2,
          staffperformance2:{
            staffcourtesyrating2:staffperformance2.staffcourtesyrating2,
            staffempathyrating2:staffperformance2.staffempathyrating2,
            staffexplanationrating2:staffperformance2.staffexplanationrating2,
            staffskillsrating2:staffperformance2.staffskillsrating2,
            staffprofessionalrating2:staffperformance2.staffprofessionalrating2,
          },
          staffcomments2:staffcomments2,
          staffName3:staffName3,
          staffRole3:staffRole3,
          staffperformance3:{
            staffcourtesyrating3:staffperformance3.staffcourtesyrating3,
            staffempathyrating3:staffperformance3.staffempathyrating3,
            staffexplanationrating3:staffperformance3.staffexplanationrating3,
            staffskillsrating3:staffperformance3.staffskillsrating3,
            staffprofessionalrating3:staffperformance3.staffprofessionalrating3,
          },
          staffcomments3:staffcomments3,
          staffName4:staffName4,
          staffRole4:staffRole4,
          staffperformance4:{
            staffcourtesyrating4:staffperformance4.staffcourtesyrating4,
            staffempathyrating4:staffperformance4.staffempathyrating4,
            staffexplanationrating4:staffperformance4.staffexplanationrating4,
            staffskillsrating4:staffperformance4.staffskillsrating4,
            staffprofessionalrating4:staffperformance4.staffprofessionalrating4,
          },
          staffcomments4:staffcomments4,
          staffName5:staffName5,
          staffRole5:staffRole5,
          staffperformance5:{
            staffcourtesyrating5:staffperformance5.staffcourtesyrating5,
            staffempathyrating5:staffperformance5.staffempathyrating5,
            staffexplanationrating5:staffperformance5.staffexplanationrating5,
            staffskillsrating5:staffperformance5.staffskillsrating5,
            staffprofessionalrating5:staffperformance5.staffprofessionalrating5,
          },
          staffcomments5:staffcomments5,
        },
        doctorrating:{
          doctorName1:doctorName1,
          doctorRole1:doctorRole1,
          doctorperformance1:{
            doctorcourtesyrating1:doctorperformance1.doctorcourtesyrating1,
            doctorempathyrating1:doctorperformance1.doctorempathyrating1,
            doctorexplanationrating1:doctorperformance1.doctorexplanationrating1,
            doctorskillsrating1:doctorperformance1.doctorskillsrating1,
            doctorprofessionalrating1:doctorperformance1.doctorprofessionalrating1,
          },
          doctorcomments1:doctorcomments1,
          doctorName2:doctorName2,
          doctorRole2:doctorRole2,
          doctorperformance2:{
            doctorcourtesyrating2:doctorperformance2.doctorcourtesyrating2,
            doctorempathyrating2:doctorperformance2.doctorempathyrating2,
            doctorexplanationrating2:doctorperformance2.doctorexplanationrating2,
            doctorskillsrating2:doctorperformance2.doctorskillsrating2,
            doctorprofessionalrating2:doctorperformance2.doctorprofessionalrating2,
          },
          doctorcomments2:doctorcomments2,
          doctorName3:doctorName3,
          doctorRole3:doctorRole3,
          doctorperformance3:{
            doctorcourtesyrating3:doctorperformance3.doctorcourtesyrating3,
            doctorempathyrating3:doctorperformance3.doctorempathyrating3,
            doctorexplanationrating3:doctorperformance3.doctorexplanationrating3,
            doctorskillsrating3:doctorperformance3.doctorskillsrating3,
            doctorprofessionalrating3:doctorperformance3.doctorprofessionalrating3,
          },
          doctorcomments3:doctorcomments3,
          doctorName4:doctorName4,
          doctorRole4:doctorRole4,
          doctorperformance4:{
            doctorcourtesyrating4:doctorperformance4.doctorcourtesyrating4,
            doctorempathyrating4:doctorperformance4.doctorempathyrating4,
            doctorexplanationrating4:doctorperformance4.doctorexplanationrating4,
            doctorskillsrating4:doctorperformance4.doctorskillsrating4,
            doctorprofessionalrating4:doctorperformance4.doctorprofessionalrating4,
          },
          doctorcomments4:doctorcomments4,
          doctorName5:doctorName5,
          doctorRole5:doctorRole5,
          doctorperformance5:{
            doctorcourtesyrating5:doctorperformance5.doctorcourtesyrating5,
            doctorempathyrating5:doctorperformance5.doctorempathyrating5,
            doctorexplanationrating5:doctorperformance5.doctorexplanationrating5,
            doctorskillsrating5:doctorperformance5.doctorskillsrating5,
            doctorprofessionalrating5:doctorperformance5.doctorprofessionalrating5,
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
  //console.log(newFeedback.survey.generalsurvey.hospitalityrating);
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
