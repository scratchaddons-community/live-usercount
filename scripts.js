const element = document.getElementById("usercount");

async function usercount() {
  const response = await fetch("https://scratchaddons.com/usercount.json");
  const json = await response.json();

  console.log(json);

  element.innerHTML = json.count;
};

setInterval(usercount(), 20000);