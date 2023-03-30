import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home/Home";
import "./index.scss";

class App extends React.Component {
    render() {
        return <Home />;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App name={"nicole"} />);
