import logo from "./logo.svg";
import "./App.css";
import { useCallback } from "react";
import { createFeedback } from "./api";

import { Survey } from "survey-react-ui";

// Use default theme for survey-react-ui npm package - import stylesheet
import "survey-core/modern.min.css";

// import theme
import { StylesManager, Model } from "survey-core";
StylesManager.applyTheme("modern");

// create model for survey
const surveyQuestions = {
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "<h2>Please provide information about the patient affected so we may help investigate the matter further.</h2>",
        },
        {
          name: "PatientFirstName",
          title: "First name:",
          type: "text",
        },
        {
          name: "PatientLastName",
          title: "Last name:",
          type: "text",
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "text",
        },
        {
          name: "Ward",
          title: "Ward:",
          type: "text",
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h2>Please provide information about the feedback provider so we may respond to you where required.</h2>",
        },
        {
          name: "FeedbackProviderFirstName",
          title: "First name:",
          type: "text",
        },
        {
          name: "FeedbackProviderLastName",
          title: "Last name:",
          type: "text",
        },
        {
          name: "FeedbackProviderRelationship",
          title: "Relationship of feedback provider to the patient",
          type: "dropdown",
          colCount: 0,
          showNoneItem: false,
          choices: [
            { value: "self", text: "self" },
            { value: "family", text: "family" },
            { value: "friend", text: "friend" },
          ],
        },
        {
          name: "FeedbackProviderContactNumber",
          title: "Contact:",
          type: "text",
        },
        {
          name: "FeedbackProviderAddress",
          title: "Address:",
          type: "text",
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h2>Please provide feedback on our doctors.</h2>",
        },
        {
          name: "doctorsCourtesyRating",
          title:
            "How courteous were our doctors on a scale of 1 (not at all) to 5 (very courteous)?",
          type: "rating",
          rateMin: 0,
          rateMax: 5,
        },
        {
          name: "doctorsEmpathyRating",
          title:
            "How empathetic were our doctors on a scale of 1 (not at all) to 5 (very empathetic)?",
          type: "rating",
          rateMin: 0,
          rateMax: 5,
        },
        {
          name: "doctorsExplanationRating",
          title:
            "How well did our doctors explain things to you on a scale of 1 (poor) to 5 (excellent)?",
          type: "rating",
          rateMin: 0,
          rateMax: 5,
        },
        {
          name: "doctorsSkillRating",
          title:
            "How skillful were our doctors on a scale of 1 (not skillful) to 5 (highly skillful)?",
          type: "rating",
          rateMin: 0,
          rateMax: 5,
        },
        {
          name: "doctorsProfessionalismRating",
          title:
            "How professional were our doctors on a scale of 1 (not at all professional) to 5 (very professional)?",
          type: "rating",
          rateMin: 0,
          rateMax: 5,
        },
      ],
    },
  ],
};

const survey = new Model(surveyQuestions);

function App() {
  // Adding an on-submission handler.
  const feedbackSubmission = useCallback((responses) => {
    const data = JSON.stringify(responses.data);
    //console.log(data);
    // Sending data to backend:
    createFeedback(responses.data);

    //createFeedback(responses.data);
  }, []);

  // Calling the submission handler upon survey submission.
  survey.onComplete.add(feedbackSubmission);
  return (
    <div className="App">
      <Survey model={survey} />
    </div>
  );
}

export default App;
