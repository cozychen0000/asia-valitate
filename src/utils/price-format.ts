export function priceFormat(value: string): string {
  // 只允許數字跟小數點，小數點只能有一個
  const filteredInput = value.replace(/[^\d.]/g, "");
  const parts = filteredInput.split(".");

  // 小數點只能出現一次，允許輸入小數點後的數字
  const validInput =
    parts.length > 2 ? `${parts[0]}.${parts[1]}` : filteredInput;

  // 只有 "."時返回 "0."
  if (validInput === ".") {
    return "0.";
  }

  const number = Number(validInput);

  //如果有小數點，不做格式化
  if (validInput.includes(".")) {
    return validInput;
  }

  //千分位符號
  return number.toLocaleString();
}
