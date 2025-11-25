import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumber = (value: string) => {
    setDisplay((prev) => (prev == "0" ? value : prev + value));
  };

  const handleOperator = (op: string) => {
    setPrevValue(display);
    setOperator(op);
    setDisplay("0");
  };

  const calculate = () => {
    if (!operator || !prevValue) return;

    const num1 = parseFloat(prevValue);
    const num2 = parseFloat(display);

    let result = 0;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "×":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
    };

    setDisplay(String(result));
    setPrevValue(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
  };

  const buttons = [
    "7", "8", "9", "÷",
    "6", "5", "4", "×",
    "3", "2", "1", "-",
    "0", "AC", "=", "+",
  ];

  return (
    <div className="w-64 mx-auto p-4 bg-gray-100 rounded-xl shadow-xl" >
      <div className="text-right text-3xl p-4 bg-black text-white rounded mb-4">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (!isNaN(Number(btn))) handleNumber(btn);
              else if (btn == "AC") clear();
              else if (btn == "=") calculate();
              else handleOperator(btn);
            }}
            className="p-4 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </div >
  );
}
