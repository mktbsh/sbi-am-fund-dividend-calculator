import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const target = document.getElementById("root");
if (!target) throw new Error("target element is not found");

ReactDOM.createRoot(target).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
