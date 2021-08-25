/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  const style = css`
    background-color: tan;
    width: 400px;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  `;
  return (
    <div css={style}>
      未完了のタスク
      <ul>
        {todos.map((todo: any, index: number) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
