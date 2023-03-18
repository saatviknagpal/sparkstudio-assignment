import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import {
  faCircleHalfStroke,
  faVolleyball,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  let light = "";
  let darkBorder = "";
  let darkBg = "";
  let darkText = "";
  let ribbonText = "";
  if (data.category_name === "Communication") {
    light = isHovered ? "bg-[#3EBEFF]" : "bg-[#EDFCFF]";
    darkBorder = isHovered
      ? "border-b-[#EDFCFF] border-t-[#EDFCFF]"
      : "border-b-[#3EBEFF] border-t-[#3EBEFF]";
    darkBg = isHovered ? "bg-[#EDFCFF]" : "bg-[#3EBEFF]";
    darkText = isHovered ? "text-[#EDFCFF]" : "text-[#3EBEFF]";
    ribbonText = isHovered ? "text-black" : "text-white";
  } else if (data.category_name === "Visual Arts") {
    light = isHovered ? "bg-[#905CFF]" : "bg-[#DCCCFF]";
    darkBorder = isHovered
      ? "border-b-[#DCCCFF] border-t-[#DCCCFF]"
      : "border-b-[#905CFF] border-t-[#905CFF]";
    darkBg = isHovered ? "bg-[#DCCCFF]" : "bg-[#905CFF]";
    darkText = isHovered ? "text-[#DCCCFF]" : "text-[#905CFF]";
    ribbonText = isHovered ? "text-black" : "text-white";
  } else {
    light = isHovered ? "bg-[#F9B215]" : "bg-[#FFEDC8]";
    darkBorder = isHovered
      ? "border-b-[#FFEDC8] border-t-[#FFEDC8]"
      : "border-b-[#F9B215] border-t-[#F9B215]";
    darkBg = isHovered ? "bg-[#FFEDC8]" : "bg-[#F9B215]";
    darkText = isHovered ? "text-[#FFEDC8]" : "text-[#F9B215]";
    ribbonText = isHovered ? "text-black" : "text-white";
  }

  const styles = {
    position: "relative",
    top: "-12px",
    textAlign: "center",
    right: "-10px",
  };

  return (
    <>
      <div
        className="bg-white my-12 shadow-xl rounded-lg h-full w-96 hover:transform hover:transition hover:duration-[500ms] hover:ease-in-out hover:-translate-y-10 transition duration-[500ms]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <section className={`h-44 w-full ${light} relative`}>
          <div
            className={`flex justify-end items-end border border- rounded-bl-full p-2  float-right ${darkBg} `}
          >
            <div
              className={`bookmarkRibbon  w-1/2 border-solid border-b-[20px] border-t-[20px] ${darkBorder}`}
            >
              <span className={`${ribbonText}`} style={styles}>
                {data.num_classes} sessions
              </span>
            </div>
            <p className={`pl-4 pb-4 text-center w-16 text-lg font-bold`}>
              {Math.round(
                100 - (data.discounted_price / data.original_price) * 100
              )}
              % off
            </p>
          </div>
          <div className="flex space-y-1 p-4 flex-col h-full  text-xl font-bold">
            <span className={`font-[Poppins] pt-16  flex  ${darkText}`}>
              {data.name}
            </span>
            <div className="flex space-x-2 items-center">
              <Rating
                name="read-only"
                value={data.rating.substring(0, data.rating.indexOf(";"))}
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "darkOrange",
                  },
                }}
                readOnly
              />
              <span className={`text-sm font-bold pt-1 ${darkText}`}>
                ({data.rating.substring(data.rating.length - 3)} reviews)
              </span>
            </div>
          </div>
        </section>
        <div className="my-6 space-y-4 px-4 flex flex-col">
          <p>{data.pitch}</p>
          <div className="space-y-2">
            <h2 className="font-bold text-lg">Students will achieve:</h2>
            <ul className="px-8 ">
              {data.curriculum_outcomes.map((item) => (
                <li className="list-disc text-[#666666]">{item}</li>
              ))}
              <li className="list-disc text-[#666666]">+...</li>
            </ul>
            <p className="underline-offset-4 font-semibold text-[#333333] underline py-4">
              View Detailed Lesson Plan
            </p>
            <hr />
            <div className="flex flex-col px-3 space-y-2 py-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-3xl">
                  ₹ {data.discounted_price}
                </span>
                <span className="flex gap-1 text-[#666666] text-xl items-center">
                  <p className="font-bold text-2xl text-black">
                    ₹ {Math.round(data.discounted_price / data.num_classes)}
                  </p>
                  per class
                </span>
              </div>
              <p className="text-lg line-through text-[#666666]">
                ₹ {data.original_price}
              </p>
              <p className="text-[#F47759] text-center text-sm font-medium">
                We'll schedule the slots as per your convenience
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${light} flex justify-evenly -items-center gap-2 w-full p-2 font-semibold`}
        >
          <span className="gap-2 flex items-center">
            <FontAwesomeIcon
              className="text-lg -mt-0.5 text-orange-600"
              icon={faCircleHalfStroke}
            />
            8 Activities
          </span>
          <span className="gap-2 flex items-center">
            <FontAwesomeIcon
              className="text-lg -mt-0.5 text-orange-600"
              icon={faVolleyball}
            />
            {data.games_count} Games
          </span>
          <span className="gap-2 flex items-center">
            <FontAwesomeIcon
              className="text-lg -mt-0.5 text-orange-600"
              icon={faAward}
            />
            {data.certificate_count} Certificate
          </span>
        </div>
        <div className="flex justify-center items-center my-8">
          <button className="py-4 px-10 font-medium bg-gradient-to-r from-red-500 to-yellow-400 text-center rounded-[48px] text-lg text-white">
            Buy Course
          </button>
        </div>
      </div>
    </>
  );
}
