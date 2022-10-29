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
});

const surveySchema = mongoose.Schema({
  doctorsCourtesyRating: Number,
  doctorsEmpathyRating: Number,
  doctorsExplanationRating: Number,
  doctorsSkillRating: Number,
  doctorsProfessionalismRating: Number,
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

// Trying to support a nested model that will support a structure like the following:
// https://stackoverflow.com/a/39597985/11569643
// {
//   "_id": "123",
//   "isActive": 1,
//   "entryDate": "123",
//   "patient": {
//     "firstName": "first",
//     "lastName": "last",
//     "gender": "m/f",
//     "birthdate": "19930101",
//     "icNumber": "123414",
//     "id": "abcdef",
//     "hospital": "hospital abc",
//     "ward": "ward A",
//     "bedNumber": "123"
//   },
//   "feedbackProvider": {
//     "firstName": "first",
//     "lastName": "last",
//     "contact": "+6512345678",
//     "address": "Fake Address st.99 Block 123",
//     "relationship": "self",
//     "id": "12341234"
//   },
//   "survey": {
//     "doctorCourtesyRating": 1,
//     "doctorEmpathyRating": 2,
//     "doctorExplanationRating": 3,
//     "doctorSkillRating": 4,
//     "doctorProfessionalismRating": 5
//   }
// }
