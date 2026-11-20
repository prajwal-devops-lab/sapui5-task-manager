# Task Manager - OpenUI5

A small task manager built with OpenUI5 (the open-source version of SAP UI5).

## Features
- Add tasks (button or Enter key)
- Delete tasks
- Live search / filter
- Task counter using an expression binding

## Concepts used
- XML view for the layout (`view/App.view.xml`)
- Controller in JavaScript (`controller/App.controller.js`)
- JSON model and data binding
- sap.m controls: Page, List, Input, Button, SearchField
- Filters (`sap/ui/model/Filter`)

## Run locally
The XML view is loaded over HTTP, so open it through a local server (not by double-clicking the file):

    python3 -m http.server 8000

Then open http://localhost:8000

## Live demo
Enable GitHub Pages for this repo (Settings -> Pages -> main branch) and add the link here.
