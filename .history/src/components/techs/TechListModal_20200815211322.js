import React, { useState, useEffect } from "react";

import LogItem from "./LogItem";

const Logs = () => {
  const [techs, setTechs] = useState([]);

  const [loading, setLoading] = useState("");

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to display...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
