import mongoose from "mongoose";

// Schemas allow us to specify some uniformity, since
// by default mongoDB doesn't impose any restrictions.

// First, we define the nested schemas.
// We'll start with 3:
// 1. patientSchema (details on patient)
// 2. feedbackProviderSchema (feedback provider details)
// 3. surveySchema (feedback outcomes)
const patientSchema = mongoose.Schema({
  id: String,
  PatientFirstName: String,
  PatientLastName: String,
  Gender: String,
  icNumber: String,
  birthDate: Date,
  BedNumber: String,
  Ward: String,
  Hospital: String,
});

const feedbackProviderSchema = mongoose.Schema({
  id: String,
  FeedbackProviderFirstName: String,
  FeedbackProviderLastName: String,
  FeedbackProviderRelationship: String,
  FeedbackProviderContactNumber: String,
  FeedbackProviderAddress: String,
  FeedbackProviderGender: String,

});

const surveySchema = mongoose.Schema({
  id: String,
  specificsurvey:{
    IncidentDate: Date,
    specificIncidentNature: String,
    specificIncident: String,
    Status: String,
  },
  generalsurvey:{
    efficiencyrating:{
      efficiency:{
        waitingTime: Number,
        serviceSpeed: Number,
        serviceAccuracy: Number,
        valueForMoney: Number,
      },
      efficiencycomments: String,
    },
    hospitalityrating:{
      hospitality:{
        foodAndBeverage: Number,
        safetyAndSecurity: Number,
        facilityManagement: Number,
        housekeeping: Number,
      },
      hospitalitycomments: String,
    },
    staffrating:{
      staffName1: String,
      staffRole1: String,
      staffperformance1:{
        staffcourtesyrating1: Number,
        staffempathyrating1: Number,
        staffexplanationrating1: Number,
        staffskillsrating1: Number,
        staffprofessionalrating1: Number,
      },
      staffcomment1: String,
      staffName2: String,
      staffRole2: String,
      staffperformance2:{
        staffcourtesyrating2: Number,
        staffempathyrating2: Number,
        staffexplanationrating2: Number,
        staffskillsrating2: Number,
        staffprofessionalrating2: Number,
      },
      staffcomment2: String,
      staffName3: String,
      staffRole3: String,
      staffperformance3:{
        staffcourtesyrating3: Number,
        staffempathyrating3: Number,
        staffexplanationrating3: Number,
        staffskillsrating3: Number,
        staffprofessionalrating3: Number,
      },
      staffcomment3: String,
      staffName4: String,
      staffRole4: String,
      staffperformance4:{
        staffcourtesyrating4: Number,
        staffempathyrating4: Number,
        staffexplanationrating4: Number,
        staffskillsrating4: Number,
        staffprofessionalrating4: Number,
      },
      staffcomment4: String,
      staffName5: String,
      staffRole5: String,
      staffperformance5:{
        staffcourtesyrating5: Number,
        staffempathyrating5: Number,
        staffexplanationrating5: Number,
        staffskillsrating5: Number,
        staffprofessionalrating5: Number,
      },
      staffcomment5: String,
    },
    doctorrating:{
      doctorName1: String,
      doctorRole1: String,
      doctorperformance1:{
        doctorcourtesyrating1: Number,
        doctorempathyrating1: Number,
        doctorexplanationrating1: Number,
        doctorskillsrating1: Number,
        professionalrating1: Number,
      },
      doctorcomment1: String,
      doctorName2: String,
      doctorRole2: String,
      doctorperformance2:{
        doctorcourtesyrating2: Number,
        doctorempathyrating2: Number,
        doctorexplanationrating2: Number,
        doctorskillsrating2: Number,
        doctorprofessionalrating2: Number,
      },
      doctorcomment2: String,
      doctorName3: String,
      doctorRole3: String,
      doctorperformance3:{
        doctorcourtesyrating3: Number,
        doctorempathyrating3: Number,
        doctorexplanationrating3: Number,
        doctorskillsrating3: Number,
        doctorprofessionalrating3: Number,
      },
      doctorcomment3: String,
      doctorName4: String,
      doctorRole4: String,
      doctorperformance4:{
        doctorcourtesyrating4: Number,
        doctorempathyrating4: Number,
        doctorexplanationrating4: Number,
        doctorskillsrating4: Number,
        doctorprofessionalrating4: Number,
      },
      doctorcomment4: String,
      doctorName5: String,
      doctorRole5: String,
      doctorperformance5:{
        doctorcourtesyrating5: Number,
        doctorempathyrating5: Number,
        doctorexplanationrating5: Number,
        doctorskillsrating5: Number,
        doctorprofessionalrating5: Number,
      },
      doctorcomment5: String,
    },
  },
  overallrating:{
    NetPromoterScore: Number,
    OverallSatisfaction: Number,
  },
});

// Now we define the final feedbackSchema model.

const feedbackSchema = mongoose.Schema({
  isActive: Boolean,
  entryDate: {
    type: Date,
    default: new Date(),
  },
  Patient: {
    type: patientSchema,
  },
  feedbackProvider: {
    type: feedbackProviderSchema,
  },
  survey: {
    type: surveySchema,
  },
});

// Creating the feedback model, and passing in the schema
// we outlined above.
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Export the model we just created from this file:
export default Feedback;

// This specific model will be imported by the controllers that
// will be used to create feedback submissions, so they can
// enforce any indicated requirements of the model.

// Trying to support a nested model that will support a nested structure:
// https://stackoverflow.com/a/39597985/11569643
