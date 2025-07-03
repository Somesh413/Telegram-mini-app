let coins = 0;
let userId = new URLSearchParams(window.location.search).get('user_id') || 'guest';
document.getElementById('referLink').value = window.location.origin + '?ref=' + userId;

function updateCoins(n) {
  coins += n;
  document.getElementById('coinCount').innerText = coins;
}

function completeTask() {
  updateCoins(20);
  alert('You earned 20 coins!');
}

function spinWheel() {
  const reward = Math.floor(Math.random()*50)+1;
  updateCoins(reward);
  alert('You spun and got ' + reward + ' coins!');
}

function copyReferral() {
  const lnk = document.getElementById('referLink');
  lnk.select();
  document.execCommand('copy');
  alert('Referral link copied!');
}

function watchAd() {
  updateCoins(10);
  alert('Ad watched – +10 coins!');
}

function withdraw() {
  alert('Withdraw request submitted for ' + coins + ' coins.');
  coins = 0;
  updateCoins(0);
}
