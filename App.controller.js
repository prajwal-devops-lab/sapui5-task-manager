sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
], function (Controller, JSONModel, Filter, FilterOperator, MessageToast) {
  "use strict";

  return Controller.extend("todo.controller.App", {

    onInit: function () {
      // JSON model holds the data shown in the list
      var oModel = new JSONModel({
        tasks: [
          { title: "Learn SAP UI5 basics" },
          { title: "Build a UI5 app" },
          { title: "Push the project to GitHub" }
        ]
      });
      this.getView().setModel(oModel);
    },

    onAddTask: function () {
      var oInput = this.byId("taskInput");
      var sValue = oInput.getValue().trim();
      if (!sValue) {
        MessageToast.show("Please enter a task");
        return;
      }
      var oModel = this.getView().getModel();
      oModel.getProperty("/tasks").push({ title: sValue });
      oModel.refresh(true);
      oInput.setValue("");
      MessageToast.show("Task added");
    },

    onDeleteTask: function (oEvent) {
      var oModel = this.getView().getModel();
      var sPath = oEvent.getParameter("listItem").getBindingContext().getPath(); // e.g. /tasks/1
      var iIndex = parseInt(sPath.split("/")[2], 10);
      oModel.getProperty("/tasks").splice(iIndex, 1);
      oModel.refresh(true);
      MessageToast.show("Task deleted");
    },

    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue");
      var aFilters = sQuery ? [new Filter("title", FilterOperator.Contains, sQuery)] : [];
      this.byId("taskList").getBinding("items").filter(aFilters);
    }
  });
});
