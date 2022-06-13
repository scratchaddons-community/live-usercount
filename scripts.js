const element = document.getElementById("usercount");

async function usercount() {
  let response = await fetch("https://scratchaddons.com/usercount.json");
  let json = await response.json();

  console.log(json);

  element.innerHTML = json.count;
}

setInterval(usercount, 20000);