import React, { Fragment, useEffect } from "react";
import SearchBar from "./componets/layout/SearchBar";
import Logs from "./componets/logs/Logs";
import AddBtn from "./componets/layout/AddBtn";
import AddLogModal from "./componets/logs/AddLogModal"

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // init materialize Js
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
