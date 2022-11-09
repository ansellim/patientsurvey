// Holds columns in the Kanban Board

export const kanbanGrid = [
  { headerText: "Open Tickets", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Resolved",
    keyField: "Resolved",
    allowToggle: true,
  },
];

// Holds static data used by the frontend to mockup some open tickets.
// This should eventually be replaced with data from the API.

// export const mockData = [
//   {
//     Id: "Task 1",
//     Title: "Task - 29001",
//     Status: "Open",
//     Summary:
//       "Patient is disappointed that they tried to reach hospital line but couldn't get through. Patient demanding to speak to a nurse urgently.",
//     Type: "Story",
//     Priority: "Low",
//     Tags: "Analyze,Customer",
//     Estimate: 3.5,
//     Assignee: "Nancy Davloio",
//     RankId: 1,
//     Color: "#02897B",
//     ClassName: "e-story, e-low, e-nancy-davloio",
//   },
//   {
//     Id: "Task 2",
//     Title: "Task - 29002",
//     Status: "InProgress",
//     Summary:
//       "Follow up with patient's concern about unexpectedly developing rashes.",
//     Type: "Improvement",
//     Priority: "Normal",
//     Tags: "Improvement",
//     Estimate: 6,
//     Assignee: "Andrew Fuller",
//     RankId: 1,
//     Color: "#673AB8",
//     ClassName: "e-improvement, e-normal, e-andrew-fuller",
//   },
// ];
