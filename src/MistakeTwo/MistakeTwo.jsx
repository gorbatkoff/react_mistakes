import { useState } from "react";

export const MistakeTwo = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: 20,
  });

  console.log("form :>>", form);

  const handleNameChange = (e) => {
    const newName = e.target.value;

    setForm((prev) => {
      return {
        ...prev,
        name: newName,
      };
    });
  };

  return (
    <div className="mistakeWrapper">
      <input placeholder={"Введите имя"} onChange={handleNameChange} />
      <input placeholder={"Введите фамилию"} />
      <input placeholder={"Введите возраст"} />
    </div>
  );
};
