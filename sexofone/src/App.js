import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Pages } from "./Pages";

function App() {
  return (
    <div class="grid">
      <Header />
      <Pages />
    </div>
  );
}

export default App;
