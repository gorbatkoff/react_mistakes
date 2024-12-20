import { useState } from "react";

export const MistakeThree = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: 0,
    country: "",
    address: "",
  });

  console.log("form :>>", form);

  const handleChangeInput = (e) => {
    const key = e.target.name;
    const newValue = e.target.value;

    setForm((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  return (
    <div className="mistakeWrapperForm">
      <input
        placeholder={"Введите имя"}
        name="name"
        onChange={handleChangeInput}
      />
      <input
        placeholder={"Введите фамилию"}
        name="surname"
        onChange={handleChangeInput}
      />
      <input
        placeholder={"Введите возраст"}
        name="age"
        onChange={handleChangeInput}
      />
      <input
        placeholder={"Введите страну"}
        name="country"
        onChange={handleChangeInput}
      />
      <input
        placeholder={"Введите адрес"}
        name="address"
        onChange={handleChangeInput}
      />
    </div>
  );
};
