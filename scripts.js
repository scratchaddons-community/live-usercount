const element = document.getElementById("usercount");

async function usercount() {
  let response = await fetch("https://scratchaddons.com/usercount.json?date="+Date.now());
  let json = await response.json();

  console.log(json);

  element.innerText = json.countAsString;
}
usercount()
setInterval(usercount, 30_000);
