import React, { useState, useEffect } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };
  return <div></div>;
};

export default Logs;