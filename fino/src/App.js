import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Welcome} />
			<Route path="/login" component={Login} />
			<Route path="/main" component={Main} />
			<Route path="/pdf" component={Pdf} />
			<Route path="/emoji" component={emoji} />
		</Router>
	);
}

export default App;
