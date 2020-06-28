import React, { useState, useEffect } from "react";
import logitem from './logitem';
import Preloader from '../layout/preloader'

const Log = () => {
  const [ logs, setlogs ] = useState([]);
  const [ loading, setloading ] = useState(false);

  useEffect(() => {
    getlogs();
    // eslint-disable-next-line
  }, []);

  const getlogs = async () => {
    setloading(true);
    const response = await fetch("/logs");
    const data = await response.json();

    setlogs(data);
    setloading(false);
  };

  if (loading) {
    return <Preloader />;
  };
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && Log.length === 0 ? (
        <p className="center">No logs to show..</p>
      ) : (
        Log.map(Log => <logitem Log={Log} key={logs.id} />)
      )}
    </ul>
  );
};

export default Log;
