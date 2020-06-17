import React from "react";
import "./App.css";
import { useState, useEffect } from "react";


const BottomRow = () => {

  const quarter = 0;
  const [qrtr, setQrtr] = useState(quarter);

  const down = 1;
  const [dwn, setDwn] = useState(down);


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{dwn}</div>
        <button className="buttons" onClick={() => setDwn(dwn + 1)}>Down</button>
        <button className="buttons" onClick={() => setDwn(0)}>Reset</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qrtr}</div>
        <button className="buttons" onClick={() => setQrtr(qrtr + 1)}>Quarter</button>
        <button className="buttons" onClick={() => setQrtr(0)}>Reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
