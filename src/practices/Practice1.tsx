export const Practice1 = () => {
  const Calc = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const OnclickPractice = () => Calc(5000);
  return (
    <div>
      <p>練習問題　引数の型指定</p>
      <button onClick={OnclickPractice}>練習問題1を実行</button>
    </div>
  );
};
