function updateTime() {
  const cur = new Date();
  const ye = cur.getFullYear();
  const day = cur.toLocaleDateString("en-US", { weekday: "long" }) + ",";
  const date = cur.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  })+"th";
  const hours = cur.getHours().toString().padStart(2, "0")+" :";
  const minutes = cur.getMinutes().toString().padStart(2, "0")+" :";
  const hour = cur.getHours().toString().padStart(2, "0")+":";
  const minute = cur.getMinutes().toString().padStart(2, "0");
  const seconds = cur.getSeconds().toString().padStart(2, "0");
  document.getElementById("day").textContent = day;
  document.getElementById("date").textContent = date;
  document.getElementById("year").textContent = ye;
  document.getElementById("hour").textContent = hours;
  document.getElementById("min").textContent = minutes;
  document.getElementById("sec").textContent = seconds;
  document.querySelector('title').textContent = `${hour}${minute}`;
}

setInterval(updateTime, 1000);
