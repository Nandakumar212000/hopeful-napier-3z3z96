import Card from "./Card";
import { useState } from "react";

const doctorList = [
  {
    id: 1,
    name: "Dr. John",
    specality: "Dog",
    image: "images/doc-1.png",
    slot: true,
  },
  {
    id: 2,
    name: "Dr. Mani",
    specality: "Cat",
    image: "./images/doctor-2.png",
    slot: true,
  },
  {
    id: 3,
    name: "Dr. Nisha",
    specality: "Bird",
    image: "./images/doctor-3.png",
    slot: false,
  },
  {
    id: 4,
    name: "Dr. Nani",
    specality: "Snake",
    image: "./images/doctor-4.png",
    slot: true,
  },
];

export default function Main() {
  const [doctorID, setDoctorID] = useState(0);

  function swipeBack() {
    setDoctorID((prev) => (prev == 0 ? 0 : prev - 1));
  }

  function swipeFront() {
    setDoctorID((prev) => (prev < 3 ? prev + 1 : 3));
  }

  return (
    <main>
      {doctorList.length == 0 ? (
        <p className="empty-info">
          No Doctors Available, Sorry for inconvenience
        </p>
      ) : (
        <>
          <p className="info">
            We care for your loved ones, Select top doctors around chennai
          </p>

          <div className="card-container">
            <button className="swipe-btn" onClick={swipeBack}>
              {"<"}
            </button>
            <Card details={doctorList[doctorID]} />
            <button className="swipe-btn" onClick={swipeFront}>
              {">"}
            </button>
          </div>
        </>
      )}
    </main>
  );
}
