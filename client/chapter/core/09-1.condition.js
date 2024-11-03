let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const msg = didWatchMovie.includes('no')
  ? '영화 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까?'
    : '그래...';

let userName = prompt();
try {
  if (userName.toLowerCase() === 'admin') {
    let password = prompt();
    if (password.includes('TheMaster')) {
      alert('환영합니다');
    }
  } else {
    alert('취소되었습니다');
  }
} catch (error) {
  alert('취소되었습니다');
}
