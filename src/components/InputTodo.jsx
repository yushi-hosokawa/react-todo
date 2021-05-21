import React from "react";
const style = {
  backgroundColor: "#c1f6ff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      {/* propsから受け取るboolのdisabledがtrueだと，ｈｔｍｌのタグであるdisabledが行われて入力できなくなる． */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
