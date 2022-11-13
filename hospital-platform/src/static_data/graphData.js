import store from "../reducers";

const currentState = store.getState();
// We'll export a JSON object that can be used by the graphs to display data needed.
console.log(currentState.feedbackItems);
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
    efficiencyRating: 5,
    hospitalityRating: 5,
    vfmRating: 5,
    overallRating: 5,
    nps: 5,
    //efficiencyRating: feedback.generalsurvey.efficiency.waitingTime || null,
  };
});

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
