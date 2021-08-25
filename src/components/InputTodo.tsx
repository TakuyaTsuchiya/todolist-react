/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  const style = css`
    background-color: skyblue;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
  `;
  const button = {
    borderRadius: "16px",
    border: "none",
    padding: "4px 16px",
    color: "orange"
  };
  const input = {
    borderRadius: "16px",
    border: "none",
    padding: "6px 16px",
    outline: "none"
  };
  return (
    <div css={style}>
      <input
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
        style={input}
      />
      <button onClick={onClick} style={button}>
        追加
      </button>
    </div>
  );
};
