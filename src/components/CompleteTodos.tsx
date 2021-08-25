/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  const style = css`
    background-color: orange;
    width: 400px;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  `;
  return (
    <div css={style}>
      完了したタスク
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
