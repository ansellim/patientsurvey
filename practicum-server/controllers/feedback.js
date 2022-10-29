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
    doctorsCourtesyRating,
    doctorsEmpathyRating,
    doctorsExplanationRating,
    doctorsSkillRating,
    doctorsProfessionalismRating,
  } = req.body;
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
    },
    survey: {
      doctorsCourtesyRating: doctorsCourtesyRating,
      doctorsEmpathyRating: doctorsEmpathyRating,
      doctorsExplanationRating: doctorsExplanationRating,
      doctorsSkillRating: doctorsSkillRating,
      doctorsProfessionalismRating: doctorsProfessionalismRating,
    },
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
