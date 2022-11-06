import React from "react";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

// For now, mockData is used just to create the content on the frontend.
import { mockData, kanbanGrid } from "../static_data/tickets";

const Opentickets = () => {
  return (
    <div className="p2 md:p-10 bg-white rounded-3x1">
      <KanbanComponent
        id="kanban"
        dataSource={mockData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Opentickets;
