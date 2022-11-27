import store from "../reducers";
import * as api from "../api";

// action creator: get Feedback Items and dispatch
// const getFeedbackItems = async () => {
//   try {
//     const data = await api.fetchFeedback();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const getFeedbackItems = async () => {
  try {
    const { data: response } = await api.fetchFeedbackStatistics();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const feedback_data = getFeedbackItems().then((val) => {
  const required_data = val;
  return val;
});
console.log(feedback_data);

const currentState = store.getState();
// We'll export a JSON object that can be used by the graphs to display data needed.
//console.log(currentState.feedbackItems);

export const graph_data = currentState.feedbackItems.map((feedback) => {
  //   return {
  //     key: feedback._id,
  //     entryDate: feedback.entryDate,
  //     efficiencyRating: feedback.generalsurvey.efficiency.waitingTime,
  //     hospitalityRating:
  //       feedback.generalsurvey.hospitalityrating.hospitality.foodAndBeverage,
  //     vfmRating: feedback.generalsurvey.efficiency.waitingTime,
  //     overallRating: feedback.overallrating.valueForMoney,
  //     nps: feedback.overallrating.NetPromoterScore,
  //   };
  return {
    entryDate: feedback.entryDate,
    key: feedback._id,
    efficiencyRating: Math.floor(Math.random() * 6) + 1,
    hospitalityRating: Math.floor(Math.random() * 6) + 1,
    vfmRating: Math.floor(Math.random() * 6) + 1,
    overallRating: 5,
    nps: 5,
    //efficiencyRating: feedback.generalsurvey.efficiency.waitingTime || null,
  };
});

console.log(graph_data);

// Apexcharts timeseries charts: https://apexcharts.com/javascript-chart-demos/area-charts/datetime-x-axis/

export const vfmRating = [
  {
    name: "Value for Money",
    data: graph_data.map((val) => [Date.parse(val.entryDate), val.vfmRating]),
  },
];

console.log(vfmRating);

export const overallRating = [
  {
    name: "Overall Rating",
    data: graph_data.map((val) => [
      Date.parse(val.entryDate),
      val.overallRating,
    ]),
  },
];

export const efficiencyRating = [
  {
    name: "Efficiency",
    data: graph_data.map((val) => [
      Date.parse(val.entryDate),
      val.efficiencyRating,
    ]),
  },
];

export const hospitalityRating = [
  {
    name: "Hospitality Rating",
    data: graph_data.map((val) => [
      Date.parse(val.entryDate),
      val.hospitalityRating,
    ]),
  },
];

export const nps = [
  {
    name: "Net Promoter Score",
    data: graph_data.map((val) => [Date.parse(val.entryDate), val.nps]),
  },
];

console.log(graph_data);

export default graph_data;

// const [npsData, setNpsData] = useState([]);
// const [hospitalityData, setHospitalityData] = useState([]);
// const [efficiencyData, setEfficiencyData] = useState([]);
// const [overallData, setOverallData] = useState([]);
// const [vfmData, setVfmData] = useState([]);
// const [countData, setCountData] = useState([]);
