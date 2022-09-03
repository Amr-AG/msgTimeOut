let cont = document.querySelector(".container");

let msg = document.createElement("span");
let clear = document.createElement("span");
cont.append(msg);
cont.append(clear);
if (msg.innerHTML === "") {
  clear.onclick = () => {
    clearTimeout(timeMsg);
    clear.innerHTML = "كده مش هتظهر بس انا برضو بحبك";
    clear.style.transition = "1s";
    clear.style.backgroundColor = "#2f774f";
  };
}

let timeMsg = setTimeout(() => {
  msg.innerHTML = " انا بحبك ";
  msg.style.cssText =
    "font-size:40px;position:absolute;background-color:#2b2b2b;width:100%;text-align: center;padding:20px;";
  clear.remove();
}, 5000);

clear.innerHTML =
  "المفروض فى مسدج هتظهرلك كمان 5 ثوانى لو دوستى هنا قبل ال 5 ثوانى مايخلصه هيخليها متظهرش";
clear.style.cssText =
  "background-color:#ad473d; width:100%; margin:0 auto; text-align:center;padding:20px;cursor:pointer;font-size:20px;";
