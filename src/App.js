import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// const upgrades = [
//   {
//     name: "test",
//     cost: 10,
//     scale: 1,
//   },
// ];
function App() {
  const [x, setX] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [amount, setAmount] = useState(1);

  function HandleClick() {
    setX(x + amount);

    setCurrency(currency + amount);
  }
  function buyItem() {
    setCurrency(currency - 10);
    setAmount(amount + 1);
  }

  function autoClick() {
    if (currency >= 50) {
      setCurrency(currency - 50);
      setInterval(() => {
        setX((x) => x + 1);
        setCurrency((currency) => currency + 1);
      }, 1000);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        <p>planet</p>
        <h1>{x} planet destroyed</h1>
        <button onClick={HandleClick}>Destroy Planet</button>
        {/* <h2> planet per click</h2> */}
      </div>
      <div>
        <p>Currency</p>
        <h1>{currency}</h1>
        <button onClick={HandleClick}>+</button>
      </div>
      {/* {upgrades
        .filter((upgrade) => upgrade.cost <= currency)
        .map((upgrade) => (
          <div>{upgrade.scale}</div>
        ))} */}
      {currency >= 10 && (
        <div onClick={buyItem}>
          <h1>double planet per click by{amount + 1} </h1>
        </div>
      )}
      {currency >= 50 && (
        <div onClick={autoClick}>
          <h1>buy auto clicker </h1>
        </div>
      )}
    </div>
  );
}

export default App;
{
  /* // ) : ( // currency >= 40 && ( //{" "}
      <div onClick={buyItem2}>
        // <h1>double planet per click by{currency} </h1>
        //{" "} */
}
