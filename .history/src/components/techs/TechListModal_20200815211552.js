import React, { useState, useEffect } from "react";

import LogItem from "./LogItem";

const TechListModal = () => {
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
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => {
              <li>{tech.firstName}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
