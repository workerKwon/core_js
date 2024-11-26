function delay(callback, ms = 1000) {
  setTimeout(callback, ms);
}

function delayP(shouldReject, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve('성공');
      } else {
        reject('실패');
      }
    }, timeout);
  });
}

delayP(true).then((data) => {
  console.log(data);
});
