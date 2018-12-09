import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from "@uifabric/icons";
import promise = require("es6-promise");

// Customs
import { Form } from "./components/Form";
import "./css/styles.scss";

promise.polyfill(); // Necessary for SharePoint
initializeIcons(/* optional base url */); 

ReactDOM.render(
    <Form />,
    document.getElementById("vinrotlab_form"),
);
