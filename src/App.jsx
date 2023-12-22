import { useState } from "react";

import "./App.css";

function App() {
  const objects = [
    { id: 1, name: "رضا68" },
    { id: 2, name: "زهرا جوادزاده" },
    { id: 3, name: "ابی رهی" },
    { id: 4, name: "محسن 67" },
    { id: 5, name: "فافا صالحی" },
    { id: 6, name: "فاطمه پاکزاد" },
    { id: 7, name: "ساناز زاهدی" },
    { id: 8, name: "عباس بهبودی" },
    { id: 9, name: "حسین صادقی" },
    { id: 10, name: "سهیل نجفی" },
    { id: 11, name: "سپیده یاری" },
    { id: 12, name: "ماکان و نیکان" },
    { id: 13, name: "رضا زمانی" },
    { id: 14, name: "حسین امینی" },
    { id: 15, name: "محمد عباس پور" },
    { id: 16, name: "عزیز حسین زاده" },
    { id: 17, name: "رامین داداشی" },
    { id: 18, name: "آرزو عظیمی" },
    { id: 19, name: "بهاره پوریونس" },
    { id: 20, name: "فاطمه زیگورات" },
    { id: 21, name: "حمید درویش" },
    { id: 22, name: "" },
  ];

  const [winners, setWinners] = useState([]);

  const handleDraw = () => {
    if (objects.length > 0) {
      // انتخاب یک آبجکت به صورت تصادفی
      const randomIndex = Math.floor(Math.random() * objects.length);
      const selectedObject = objects[randomIndex];

      // چک کنید که این برنده در آرایه برندگان قبلاً وجود نداشته باشد
      if (!winners.some((winner) => winner.id === selectedObject.id)) {
        // افزودن برنده به آرایه برندگان
        setWinners((prevWinners) => [...prevWinners, selectedObject]);

        // حذف آبجکت انتخاب شده از آرایه اصلی
        const updatedObjects = [...objects];
        updatedObjects.splice(randomIndex, 1);
        // به روزرسانی آرایه اصلی
        // این قسمت بهتر است با استفاده از setState انجام شود.
      }
    }
  };

  return (
    <>
      <button onClick={handleDraw}>قرعه کشی</button>

      <h3>:اسامی برندگان</h3>

      <div>
        {winners.map((winner) => (
          <p key={winner.id}>
            شرکت کننده شماره {winner.id} به نام {winner.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
