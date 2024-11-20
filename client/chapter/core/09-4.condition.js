function discountPrice(userState, count, price) {
  let discount = 0;
  if (count === 1) discount += 5;
  else {
    if (userState === '일반') discount += 10;
  }

  if (userState === '프리미엄') discount += 20;

  if (price >= 20000) discount += 5;

  return price - (price * discount) / 100;
}

console.log(discountPrice('ㄴㄴ', 2, 23500));
