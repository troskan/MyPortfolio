import { useState } from "react";
import "../css/Portfolio/portfolio-items.css";

function PortfolioList() {
  const [showSlotOne, setShowSlotOne] = useState(false);

  return (
    <div className="portfol-container">
      <div className="list-container">
        <ul>
          {!showSlotOne ? (
            <button className="list-btn" onClick={() => setShowSlotOne(true)}>
              TimeReportAPI
            </button>
          ) : (
            <button
              className="close-btn list-btn"
              onClick={() => setShowSlotOne(false)}
            >
              Close
            </button>
          )}
          {showSlotOne && (
            <div id="slot-one">
              <h2>TimeReportAPI</h2>
              <p>
                ASP.Net Web API - RESTful design. Created for assigning a
                employee on a specific project and registrating time worked in a
                table which later can be used to investigate how many hours a
                specific employee has worked.{" "}
              </p>

              <a
                target="_blank"
                href="https://github.com/troskan/TimeReportAPI"
              >
                <button className="btn-gh">Github Repo</button>
              </a>
            </div>
          )}
          {/* <button className="list-btn">Item 2</button>
          <button className="list-btn">Item 3</button>
          <button className="list-btn">Item 4</button>
          <button className="list-btn">Item 5</button> */}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioList;
