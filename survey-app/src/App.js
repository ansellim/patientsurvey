import React from 'react';
import { useCallback } from "react";
import { createFeedback } from "./api";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import classes from "./App.module.css";
import hosplogo from "./images/hosplogo.jpg";
import { StylesManager, Model } from "survey-core";

//apply theme
StylesManager.applyTheme("defaultV2");

// create model for survey

//Survey.surveyLocalization.supportedLocales = ["en", "cn", "ma"];
// const options = {
//   showTranslationTab: true
// };

const surveyQuestions = {
  locale:"en",
  showQuestionNumbers: "off",
  pages: [
    {
      elements:[
        {
          type: "html",
          html: "<h1 style='font-style:bold'>Feedback survey for your experience with us</h1><br><p style='font-style:normal; font-size: 26px'>Thank you for your visit with us. Our Hospital conducts this survey to find out how we have performed, and your responses will help us to become better at what we do.</p><p style='font-style:normal; font-size: 26px'>This survey is entirely voluntary, and your responses will be studied carefully to help improve the experience offered by our facility. Your personal details will be kept strictly confidential, and any results from this will be presented in a way that protects your privacy.</p><p style='font-style:normal; font-size: 26px'>Thank you for your participation, and if you have further questions, please reach us at <a href='mailto:feedback@abchospital.com'>feedback@abchospital.com.</a></p>",
        },
      ]
    },
    {
      elements: [
        {
          "type": "radiogroup",
          "name": "patientrelated",
          "title": "Is this feedback related to a patient at our facility?",
          "isRequired": true,
          "choices": [
            "Yes", "No"
          ],
          "colCount": 0
        },
        {
          "type": "radiogroup",
          "name": "fpPatient",
          "title": "Are you the patient?",
          "isRequired": true,
          "choices": [
            "Yes", "No"
          ],
          "colCount": 0,
          "visibleIf": "{patientrelated}='Yes'",
        },
        {
          "type": "radiogroup",
          "name": "fbPurpose",
          "title": "What type of feedback will you be providing?",
          "isRequired": true,
          "choices": [
            "General feedback", "Specific feedback", "Both general and specific feedback"
          ],
          "colCount": 0
        },
      ]
    },
    {
      elements: [
        {
          type: "html",
          html: "<h2>Please provide your details as the feedback provider:</h2>",
        },
        {
          name: "FeedbackProviderRelationship",
          title: "Your relationship to the patient",
          type: "dropdown",
          colCount: 0,
          showNoneItem: false,
          choices: [
            { value: "family", text: "Family" },
            { value: "friend", text: "Friend" },
            { value: "unrelated", text: "Unrelated" },
            { value: "other", text: "Other" },
          ],
          isRequired:true,
          "visibleIf": "{patientrelated}='Yes'",
        },
        {
          name: "FeedbackProviderFirstName",
          title: "First name:",
          type: "text",
          isRequired:true,
        },
        {
          name: "FeedbackProviderLastName",
          title: "Last name:",
          type: "text",
          isRequired:true,
        },
        {
          "type": "radiogroup",
          "choices": [
            {
              "value": "male",
              "text": "Male"
            }, {
              "value": "female",
              "text": "Female"
            }
          ],
          "colCount": 0,
          //"isRequired": true,
          "name": "FeedbackProviderGender",
          "title": "Gender:"
        },
        {
          name: "FeedbackProviderContactNumber",
          title: "Contact number:",
          type: "text",
          //inputMask: "phone",
          //inputFormat: "+(##)-####-####",
          isRequired:true,
        },
        {
          name: "FeedbackProviderEmail",
          title: "Email address:",
          type: "text",
          //inputMask: "email",
          //isRequired:true,
        },
      ],
      "visibleIf": "{fpPatient}='No' and {patientrelated}='Yes'",
    },
    {
      elements: [
        {
          type: "html",
          html: "<h2>Please key in your admission details:</h2>",
          "visibleIf": "{fpPatient}='Yes'",
        },
        {
          type: "html",
          html: "<h2>Please key in the patient's details:</h2>",
          "visibleIf": "{fpPatient}='No'",
        },
        {
          name: "PatientFirstName",
          title: "First name:",
          type: "text",
          isRequired: true,
        },
        {
          name: "PatientLastName",
          title: "Last name:",
          type: "text",
          isRequired: true,
        },
        {
          name: "Ward",
          title: "Ward:",
          type: "text",
          isRequired: true,
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "text",
          isRequired: true,
        },
      ],
      "visibleIf": "{patientrelated}='Yes'",
    },
    { //for specific feedback only
      elements: [
        {
          type: "html",
          html: "<h2>Please provide the specific feedback that you have for us.</h2>",
        },
        {
          "type": "text",
        //  "inputMask": "datetime",
        //  "inputFormat": "dd/mm/yyyy",
          "name": "IncidentDate",
          "title": "Date:"
        },
        {
          "type": "radiogroup",
          "choices": [
            {
              "value": "compliment",
              "text": "Compliment"
            }, {
              "value": "complaint",
              "text": "Complaint"
            }, {
              "value": "suggestion",
              "text": "Suggestion"
            }
          ],
          "colCount": 0,
          //"isRequired": true,
          "name": "specificIncidentNature",
          "title": "Feedback nature:"
        },
        {
          "type": "comment",
          "name": "specificIncident",
          "title": "Feedback details:"
        }
      ],
     "visibleIf": "{fbPurpose}='Specific feedback' or {fbPurpose}='Both general and specific feedback'",
    },
    { //for general feedback only
      elements: [
        {
          type: "html",
          html: "<h2>Please rate the following service aspects:</h2>",
        },
        {
          type: "matrix",
          name: "efficiency",
          title: "Please rate our efficiency:",
          columns:[
            {
              value: 1,
              text: "Strongly Disagree",
            },
            {
              value: 2,
              text: "Disagree",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Agree",
            },
            {
              value: 5,
              text: "Strongly Agree",
            },
          ],
          rows:[
            {
              value: "waitingTime",
              text: "Waiting time was acceptable."
            },
            {
              value: "serviceSpeed",
              text: "Service was efficient.",
            },
            {
              value: "serviceAccuracy",
              text: "Service was delivered up to my expectations.",
            },
            {
              value: "valueForMoney",
              text: "Service was worth what I paid for.",
            }
          ]
        },
        {
          type: "matrix",
          name: "hospitality",
          title: "Please rate our hospitality:",
          columns:[
            {
              value: 1,
              text: "Strongly Disagree",
            },
            {
              value: 2,
              text: "Disagree",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Agree",
            },
            {
              value: 5,
              text: "Strongly Agree",
            },
          ],
          rows:[
            {
              value: "foodAndBeverage",
              text: "Food quality was up to my expectations."
            },
            {
              value: "safetyAndSecurity",
              text: "I felt safe throughout my visit.",
            },
            {
              value: "facilityManagement",
              text: "The facilities and maintenance here met my expectations.",
            },
            {
              value: "housekeeping",
              text: "The environment was clean and hygienic.",
            }
          ]
        },
        {
          type: "html",
          html: "<h2>Please rate our staff:</h2>",
        },
        {
          "type": "dropdown",
          "name": "numStaffToRate",
          "title": "How many staff would you like to rate?",
          "isRequired": true,
          "choices": [
            0,
            1,
            2,
            3,
            4,
            5
          ]
        },
        {
          "type": "panel",
          "name": "staff-feedback1",
          elements:
          [
            {
              type: "text",
              name: "staffName1",
              title: "Staff Name 1:"
            },
            {
              type: "dropdown",
              name: "staffRole1",
              title: "Staff Role:",
              "choices": [
                "Nursing",
                "Allied Health (therapist, radiographer, therapist)",
                "Facilities",
                "Housekeeping",
                "Security",
                "Administration"
              ]
            },
            {
              type: "matrix",
              name: "staffperformance1",
              title: "Please rate this staff:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating1",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating1",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating1",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating1",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating1",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "staffcomment1",
              title:"Any other comments for this staff?",
            }
          ],
          "visibleIf": "{numStaffToRate}>=1",
        },
        {
          "type": "panel",
          "name": "staff-feedback2",
          elements:
          [
            {
              type: "text",
              name: "staffName2",
              title: "Staff Name 2:"
            },
            {
              type: "dropdown",
              name: "staffRole2",
              title: "Staff Role:",
              "choices": [
                "Nursing",
                "Allied Health (therapist, radiographer, therapist)",
                "Facilities",
                "Housekeeping",
                "Security",
                "Administration"
              ]
            },
            {
              type: "matrix",
              name: "staffperformance2",
              title: "Please rate this staff:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating2",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating2",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating2",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating2",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating2",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "staffcomment2",
              title:"Any other comments for this staff?",
            }
          ],
          "visibleIf": "{numStaffToRate}>=2",
        },
        {
          "type": "panel",
          "name": "staff-feedback3",
          elements:
          [
            {
              type: "text",
              name: "staffName3",
              title: "Staff Name 3:"
            },
            {
              type: "dropdown",
              name: "staffRole3",
              title: "Staff Role:",
              "choices": [
                "Nursing",
                "Allied Health (therapist, radiographer, therapist)",
                "Facilities",
                "Housekeeping",
                "Security",
                "Administration"
              ]
            },
            {
              type: "matrix",
              name: "staffperformance3",
              title: "Please rate this staff:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating3",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating3",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating3",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating3",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating3",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "staffcomment3",
              title:"Any other comments for this staff?",
            }
          ],
          "visibleIf": "{numStaffToRate}>=3",
        },
        {
          "type": "panel",
          "name": "staff-feedback4",
          elements:
          [
            {
              type: "text",
              name: "staffName4",
              title: "Staff Name 4:"
            },
            {
              type: "dropdown",
              name: "staffRole4",
              title: "Staff Role:",
              "choices": [
                "Nursing",
                "Allied Health (therapist, radiographer, therapist)",
                "Facilities",
                "Housekeeping",
                "Security",
                "Administration"
              ]
            },
            {
              type: "matrix",
              name: "staffperformance4",
              title: "Please rate this staff:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating4",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating4",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating4",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating4",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating4",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "staffcomment4",
              title:"Any other comments for this staff?",
            }
          ],
          "visibleIf": "{numStaffToRate}>=4",
        },
        {
          "type": "panel",
          "name": "staff-feedback5",
          elements:
          [
            {
              type: "text",
              name: "staffName5",
              title: "Staff Name 5:"
            },
            {
              type: "dropdown",
              name: "staffRole5",
              title: "Staff Role:",
              "choices": [
                "Nursing",
                "Allied Health (therapist, radiographer, therapist)",
                "Facilities",
                "Housekeeping",
                "Security",
                "Administration"
              ]
            },
            {
              type: "matrix",
              name: "staffperformance5",
              title: "Please rate this staff:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating5",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating5",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating5",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating5",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating5",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "staffcomment5",
              title:"Any other comments for this staff?",
            }
          ],
          "visibleIf": "{numStaffToRate}>=5",
        },
        {
          type: "html",
          html: "<h2>Please rate our doctors:</h2>",
        },
        {
          "type": "dropdown",
          "name": "numDoctorsToRate",
          "title": "How many doctors would you like to rate?",
          "isRequired": true,
          "choices": [
            0,
            1,
            2,
            3,
            4,
            5
          ]
        },
        {
          "type": "panel",
          "name": "doctors-feedback1",
          elements:
          [
            {
              type: "text",
              name: "doctorsName1",
              title: "Doctor Name 1:"
            },
            {
              type: "matrix",
              name: "doctorperformance1",
              title: "Please rate this doctor:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating1",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating1",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating1",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating1",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating1",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "doctorcomment1",
              title:"Any other comments for this doctor?",
            }
          ],
          "visibleIf": "{numDoctorsToRate}>=1",
        },
        {
          "type": "panel",
          "name": "doctor-feedback2",
          elements:
          [
            {
              type: "text",
              name: "doctorName2",
              title: "Doctor Name 2:"
            },
            {
              type: "matrix",
              name: "doctorperformance2",
              title: "Please rate this doctor:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating2",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating2",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating2",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating2",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating2",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "doctorcomment2",
              title:"Any other comments for this doctor?",
            }
          ],
          "visibleIf": "{numDoctorsToRate}>=2",
        },
        {
          "type": "panel",
          "name": "doctor-feedback3",
          elements:
          [
            {
              type: "text",
              name: "doctorName3",
              title: "Doctor Name 3:"
            },
            {
              type: "matrix",
              name: "doctorperformance3",
              title: "Please rate this staff:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating3",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating3",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating3",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating3",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating3",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "doctorcomment3",
              title:"Any other comments for this doctor?",
            }
          ],
          "visibleIf": "{numDoctorsToRate}>=3",
        },
        {
          "type": "panel",
          "name": "doctor-feedback4",
          elements:
          [
            {
              type: "text",
              name: "doctorName4",
              title: "Doctor Name 4:"
            },

            {
              type: "matrix",
              name: "doctorperformance4",
              title: "Please rate this doctor:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating4",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating4",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating4",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating4",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating4",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "doctorcomment4",
              title:"Any other comments for this doctor?",
            }
          ],
          "visibleIf": "{numDoctorsToRate}>=4",
        },
        {
          "type": "panel",
          "name": "doctor-feedback5",
          elements:
          [
            {
              type: "text",
              name: "doctorName5",
              title: "Doctor Name 5:"
            },

            {
              type: "matrix",
              name: "doctorperformance5",
              title: "Please rate this doctor:",
              columns:[
                {
                  value: 1,
                  text: "Strongly Disagree",
                },
                {
                  value: 2,
                  text: "Disagree",
                },
                {
                  value: 3,
                  text: "Neutral",
                },
                {
                  value: 4,
                  text: "Agree",
                },
                {
                  value: 5,
                  text: "Strongly Agree",
                },
              ],
              rows:[
                {
                  value: "courtesyrating5",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "empathyrating5",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "explanationrating5",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "skillsrating5",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "professionalrating5",
                  text: "He/She was professional in his/her work throughout my visit.",
                }, 
              ]
            },
            {
              type: "comment",
              name: "doctorcomment5",
              title:"Any other comments for this doctor?",
            }
          ],
          "visibleIf": "{numDoctorsToRate}>=5",
        },
      ],
     "visibleIf": "{fbPurpose}='General feedback' or {fbPurpose}='Both general and specific feedback'",
    },
    {
      elements: [
        {
          name: "OverallSatisfaction",
          title:
            "On a scale of zero to ten, how satisfied were you with your experience at our hospital?",
          type: "rating",
          isRequired: true, 
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "(Most dissatisfied)",
          maxRateDescription: "(Most satisfied)"
        },
        {
          name: "NetPromoterScore",
          title:
            "On a scale of zero to ten, how likely are you to recommend our hospital to a friend or colleague?",
          type: "rating",
          isRequired: true, 
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "(Most unlikely)",
          maxRateDescription: "(Most likely)"
        },
      ],
    }
  ]
};


const survey = new Model(surveyQuestions);
function App() {


  // Adding an on-submission handler.
  const feedbackSubmission = useCallback((responses) => {
    //const data = JSON.stringify(responses.data);
   // console.log(responses.data);
    // Sending data to backend:
    createFeedback(responses.data);

    //createFeedback(responses.data);
  }, []);

  // Calling the submission handler upon survey submission.
  survey.onComplete.add(feedbackSubmission);
  return (
      <div className={classes.App}>
        <div className = {classes.centerframe}>
          <img className={classes.logopos} src={hosplogo} alt="hosplogo" />
          <Survey model={survey}/>
        </div>
      </div>
  );
}

export default App;
