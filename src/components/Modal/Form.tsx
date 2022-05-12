/* eslint-disable use-isnan */
/* eslint-disable eqeqeq */
import React, { FormEventHandler, useState } from "react";
import { changeName, changePhone, checkStatus } from "../../reducer/formSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";

function Form() {
  const [inputName, newInputName] = useState("");
  const [inputPhone, newInputPhone] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (typeof data.name === "string" && typeof data.phone === "string") {
      console.log(data);
    }
    if (data.phone?.length === 0) {
      dispatch(changePhone(""));
    }

    if (data.name?.length === 0) {
      dispatch(changeName(""));
    }
  };

  function onBlur(method: any, value: string) {
    dispatch(method(value));
    dispatch(checkStatus());
  }

  const onNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    newInputName(e.target.value);
    dispatch(changeName("pending"));
  };

  const onPhoneChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    newInputPhone(e.target.value);
    dispatch(changePhone("1111111"));
  };

  return (
    <form className="modal__form" onSubmit={onSubmit}>
      <label
        className={
          typeof data.name == "string" || typeof data.name == "number"
            ? "modal__label"
            : "modal__label no-valid"
        }
      >
        <input
          className={"modal__input"}
          placeholder="Name"
          value={inputName}
          onBlur={() => onBlur(changeName, inputName)}
          onChange={onNameChange}
          type="text"
        />
        <p className="modal__error">
          {data.name === null ? "This field in required" : ""}
          {data.name === false ? "Only letters allowed" : ""}
        </p>
      </label>
      <label
        className={
          typeof data.phone == "string" || typeof data.phone == "number"
            ? "modal__label"
            : "modal__label no-valid"
        }
      >
        <input
          placeholder="Number"
          value={inputPhone}
          onBlur={() => onBlur(changePhone, inputPhone)}
          onChange={onPhoneChange}
          className={"modal__input"}
          type="text"
        />
        <p className="modal__error">
          {data.phone === null ? "This field in required" : ""}
          {data.phone === false ? "Only numbers allowed" : ""}
          {data.phone === undefined ? "Should contain 12 characters" : ""}
        </p>
      </label>
      <button
        className="modal__submit"
        type="submit"
        disabled={data.status ? false : true}
      >
        ORDER
      </button>
    </form>
  );
}

export { Form };
