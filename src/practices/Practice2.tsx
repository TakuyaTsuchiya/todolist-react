export const Practice2 = () => {
  const Calc = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const OnclickPractice = () => Calc(5000);
  return (
    <div>
      <p>練習問題　返却値の型指定</p>
      <button onClick={OnclickPractice}>練習問題2を実行</button>
    </div>
  );
};
