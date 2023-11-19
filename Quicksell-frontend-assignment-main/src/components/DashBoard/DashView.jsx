import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                  
                    <span className={`dashCardHead ${elem[index]?.title === "Urgent" ? "UrgentText" : elem[index]?.title === "High" ?"HighText": elem[index]?.title === "Medium" ?"MediumText":elem[index]?.title === "Low" ?"LowText":elem[index]?.title === "No priority" ?"NoText": elem[index]?.title === "Todo" ?"Todo": elem[index]?.title === "In progress" ?"InProgress": elem[index]?.title === "Backlog" ?"Backlog":""}`}>
                      {" "}
                      {elem[index]?.title}, ({elem[index]?.value?.length})
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
