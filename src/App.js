import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { sample_response } from "./config/data";

function App() {
  const [active, setActive] = useState({
    junior: true,
    senior: false,
  });
  const activeColor =
    "bg-[#003F5C] relative text-2xl text-white p-6 font-medium rounded-lg";
  const nonActiveColor =
    "bg-[#D5F1FE] text-2xl rounded-lg p-6 relative font-bold";
  const arr = sample_response;

  const keys = Object.keys(arr);

  function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * i);
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }

    return newArray;
  }

  const finalArray = shuffleArray(keys);

  return (
    <div className="flex flex-col gap-5 justify-center items-center pt-20 App">
      <div className="gap-10 font-[Poppins] justify-center items-center flex">
        <button
          onClick={() => {
            setActive({ junior: true, senior: false });
          }}
          className={active.junior ? activeColor : nonActiveColor}
        >
          Junior <p className="text-sm font-normal">(Age 6-10)</p>
          <div className={active.junior ? "arrow-down" : null}></div>
        </button>
        <button
          onClick={() => {
            setActive({ junior: false, senior: true });
          }}
          className={active.senior ? activeColor : nonActiveColor}
        >
          <div className={active.senior ? "arrow-down" : null}></div>
          Senior <p className="text-sm font-medium">(Age 10-15)</p>
        </button>
      </div>
      {finalArray.map((key) => (
        <div
          className="flex justify-center items-center md:gap-14 flex-wrap"
          key={key}
        >
          {active.junior
            ? arr[key]
                .filter((item) => item.min_age >= 5 && item.max_age < 11)
                .map((item) => <Card data={item} />)
            : arr[key]
                .filter((item) => item.min_age >= 10 && item.max_age < 16)
                .map((item) => <Card data={item} />)}

          {arr[key]
            .filter((item) => item.min_age === 6 && item.max_age === 15)
            .map((item) => (
              <Card data={item} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
