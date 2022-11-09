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
      "visibleIf": "({fpPatient}='No' and {patientrelated}='Yes') or {patientrelated}='No'",
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
          type: "dropdown",
          isRequired: true,
          showNoneItem: true,
          "choices": [
            "A&E",
            "Business Office",
            "Day Surgery",
            "Delivery Suites",
            "Endoscopy",
            "Front Office",
            "ICU",
            "NICU",
            "HDU",
            "Operating Theater",
            "Laboratory",
            "Radiology",
            "Ward 6 East",
            "Ward 6 West",
            "Ward 7 East",
            "Ward 7 West",
            "Ward 8 East",
            "Ward 8 West",
            "Ward 9 East",
            "Ward 9 West",
            "Ward 10 East",
            "Ward 10 West",
          ]
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Day Surgery' ",
          "choices": [
            "D-1",
            "D-2",
            "D-3",
            "D-4",
            "D-5",
            "D-6",
            "D-7",
            "D-8",
            "D-9",
            "D-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='ICU'",
          "choices": [
            "I-1",
            "I-2",
            "I-3",
            "I-4",
            "I-5",
            "I-6",
            "I-7",
            "I-8",
            "I-9",
            "I-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Delivery Suites'",
          "choices": [
            "B-1",
            "B-2",
            "B-3",
            "B-4",
            "B-5",
            "B-6",
            "B-7",
            "B-8",
            "B-9",
            "B-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='HDU'",
          "choices": [
            "H-1",
            "H-2",
            "H-3",
            "H-4",
            "H-5",
            "H-6",
            "H-7",
            "H-8",
            "H-9",
            "H-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='NICU'",
          "choices": [
            "N-1",
            "N-2",
            "N-3",
            "N-4",
            "N-5",
            "N-6",
            "N-7",
            "N-8",
            "N-9",
            "N-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Ward 6 East'",
          "choices": [
            "6-1",
            "6-2",
            "6-3",
            "6-4",
            "6-5",
            "6-6",
            "6-7",
            "6-8",
            "6-9",
            "6-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Ward 6 West'",
          "choices": [
            "6-11",
            "6-12",
            "6-13",
            "6-14",
            "6-15",
            "6-16",
            "6-17",
            "6-18",
            "6-19",
            "6-20",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Ward 7 East'",
          "choices": [
            "7-1",
            "7-2",
            "7-3",
            "7-4",
            "7-5",
            "7-6",
            "7-7",
            "7-8",
            "7-9",
            "7-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Ward 7 West'",
          "choices": [
            "7-11",
            "7-12",
            "7-13",
            "7-14",
            "7-15",
            "7-16",
            "7-17",
            "7-18",
            "7-19",
            "7-20",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Ward 8 East'",
          "choices": [
            "8-1",
            "8-2",
            "8-3",
            "8-4",
            "8-5",
            "8-6",
            "8-7",
            "8-8",
            "8-9",
            "8-10",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "visibleIf": "{Ward}='Ward 8 West'",
          "choices": [
            "8-11",
            "8-12",
            "8-13",
            "8-14",
            "8-15",
            "8-16",
            "8-17",
            "8-18",
            "8-19",
            "8-20",
          ],
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "choices": [
            "9-1",
            "9-2",
            "9-3",
            "9-4",
            "9-5",
            "9-6",
            "9-7",
            "9-8",
            "9-9",
            "9-10",
          ],
          "visibleIf": "{Ward}='Ward 9 East'",
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          "choices": [
            "9-11",
            "9-12",
            "9-13",
            "9-14",
            "9-15",
            "9-16",
            "9-17",
            "9-18",
            "9-19",
            "9-20",
          ],
          "visibleIf": "{Ward}='Ward 9 West'",
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          showNoneItem: true,
          "choices": [
            "10-1",
            "10-2",
            "10-3",
            "10-4",
            "10-5",
            "10-6",
            "10-7",
            "10-8",
            "10-9",
            "10-10",
          ],
          "visibleIf": "{Ward}='Ward 10 East'",
        },
        {
          name: "BedNumber",
          title: "Bed number:",
          type: "dropdown",
          isRequired: true,
          showNoneItem: true,
          "choices": [
            "10-11",
            "10-12",
            "10-13",
            "10-14",
            "10-15",
            "10-16",
            "10-17",
            "10-18",
            "10-19",
            "10-20",
          ],
          "visibleIf": "{Ward}='Ward 10 West'",
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
          "title": "Date (mm/dd/yyyy):"
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
          "type": "panel",
          "name": "efficiencyscoring",
          elements:
          [
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
                {
                  value: 6,
                  text: "Not applicable",
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
              type: "comment",
              name: "efficiencycomments",
              title:"Any comments for our efficiency?",
            },
          ]
        },
        {
          "type": "panel",
          "name": "hospitalityscoring",
          elements:
          [
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
                {
                  value: 6,
                  text: "Not applicable",
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
              type: "comment",
              name: "hospitalitycomments",
              title:"Any comments for our hospitality?",
            },
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "staffcourtesyrating1",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "staffempathyrating1",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "staffexplanationrating1",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "staffskillsrating1",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "staffprofessionalrating1",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "staffcourtesyrating2",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "staffempathyrating2",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "staffexplanationrating2",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "staffskillsrating2",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "staffprofessionalrating2",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "staffcourtesyrating3",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "staffempathyrating3",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "staffexplanationrating3",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "staffskillsrating3",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "staffprofessionalrating3",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "staffcourtesyrating4",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "staffempathyrating4",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "staffexplanationrating4",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "staffskillsrating4",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "staffprofessionalrating4",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "staffcourtesyrating5",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "staffempathyrating5",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "staffexplanationrating5",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "staffskillsrating5",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "staffprofessionalrating5",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "doctorcourtesyrating1",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "doctorempathyrating1",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "doctorexplanationrating1",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "doctorskillsrating1",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "doctorprofessionalrating1",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "doctorcourtesyrating2",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "doctorempathyrating2",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "doctorexplanationrating2",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "doctorskillsrating2",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "doctorprofessionalrating2",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "doctorcourtesyrating3",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "doctorempathyrating3",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "doctorexplanationrating3",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "doctorskillsrating3",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "doctorprofessionalrating3",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "doctorcourtesyrating4",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "doctorempathyrating4",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "doctorexplanationrating4",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "doctorskillsrating4",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "doctorprofessionalrating4",
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
                {
                  value: 6,
                  text: "Not applicable",
                },
              ],
              rows:[
                {
                  value: "doctorcourtesyrating5",
                  text: "He/She was courteous to me throughout my visit."
                },
                {
                  value: "doctorempathyrating5",
                  text: "He/She showed empathy to me throughout my visit.",
                },
                {
                  value: "doctorexplanationrating5",
                  text: "He/She was polite and patient in explaining things to me throughout my visit.",
                },
                {
                  value: "doctorskillsrating5",
                  text: "He/She was skillful in performing duties throughout my visit.",
                },
                {
                  value: "doctorprofessionalrating5",
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
          type: "html",
          html: "<h2>Please rate your overall experience with us:</h2>",
        },
        {
          name: "OverallSatisfaction",
          title:
            "On a scale of 0 to 10, how satisfied were you with your experience at our hospital?",
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
            "On a scale of 0 to 10, how likely are you to recommend our hospital to a friend or colleague?",
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
  //  responses.data.timestamp = new Date();
    createFeedback(responses.data);
    setTimeout(function() { 
      survey.clear();
   }, 3000);
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
