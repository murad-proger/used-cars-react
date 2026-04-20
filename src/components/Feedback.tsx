import React, { useState } from "react";

export const Feedback = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // только буквы
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyLetters = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
    setName(onlyLetters);
  };

  // телефон с учетом удаления
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // 👉 если удаляют — не мешаем
    if (raw.length < phone.length) {
      setPhone(raw);
      return;
    }

    let digits = raw.replace(/\D/g, "");

    if (!digits) {
      setPhone("");
      return;
    }

    if (digits.startsWith("8")) {
      digits = "7" + digits.slice(1);
    }

    if (!digits.startsWith("7")) {
      digits = "7" + digits;
    }

    digits = digits.slice(0, 11);

    let result = "+7";

    if (digits.length > 1) {
      result += " (" + digits.slice(1, 4);
    }

    if (digits.length >= 4) {
      result += ") " + digits.slice(4, 7);
    }

    if (digits.length >= 7) {
      result += "-" + digits.slice(7, 9);
    }

    if (digits.length >= 9) {
      result += "-" + digits.slice(9, 11);
    }

    setPhone(result);
  };

  return (
    <section className="feedback">
      <div className="container">
        <div
          className="img"
          style={{ backgroundImage: "url('img/feedback.png')" }}
        ></div>

        <h2>Необходима консультация?</h2>
        <p>
          Заполните все необходимые поля и наш менеджер свяжется с Вами в
          ближайшее время
        </p>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="+7 (999) 999-99-99"
            value={phone}
            onChange={handlePhoneChange}
          />

          <button>Отправить заявку</button>
        </form>
      </div>
    </section>
  );
};