const name = document.getElementById("passengername").value;
const flightNumber = document.getElementById("flightnumber").value;
const from = document.getElementById("from").value;
const to = document.getElementById("to").value;
const date = document.getElementById("idk").value;
const seat = document.getElementById("seat").value;
const gate = document.getElementById("gate").value;

onload = function () {
  setDate();
  onloadbutton();
}

function setDate() {
  const today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  document.getElementById('idk').value = `${year}-${month}-${day}`;
}


function submit() {
  savedata();
  const name = document.getElementById("passengername").value;
  const flightNumber = document.getElementById("flightnumber").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("idk").value;
  const seat = document.getElementById("seat").value;
  const gate = document.getElementById("gate").value;
  const time = document.getElementById("time").value;
  const classValue = document.getElementById("class").value;
  const boardingGroup = document.getElementById("boardinggroup").value;

 const barcode = Math.floor(100000000 + Math.random() * 900000000);

  if (name === "" || flightNumber === "" || from === "" || to === "" || date === "" || seat === "" || gate === "") {
    alert("Please fill in all fields.");
    return;
  }
document.getElementById("bpbarcode").innerText = "Barcode: " + barcode;
  document.getElementById("passengername").style.display = "none";
  document.getElementById("flightnumber").style.display = "none";
  document.getElementById("from").style.display = "none";
  document.getElementById("to").style.display = "none";
  document.getElementById("idk").style.display = "none";
  document.getElementById("seat").style.display = "none";
  document.getElementById("gate").style.display = "none";
  document.getElementById("generate").style.display = "none";
  document.getElementById("seat").style.display = "none";
  document.getElementById("time").style.display = "none";
  document.getElementById("class").style.display = "none";
  document.getElementById("boardinggroup").style.display = "none";


  document.getElementById('ticket').style.display = "block";


  document.getElementById("bpname").innerText = "Passenger Name: " + name;
  document.getElementById("bpflightnumber").innerText = "Flight Number: " + flightNumber;
  document.getElementById("bpfrom").innerText = "From: " + from;
  document.getElementById("bpto").innerText = "To: " + to;
  document.getElementById("bpdate").innerText = "Date: " + date;
  document.getElementById("bpseat").innerText = "Seat: " + seat;
  document.getElementById("bpgate").innerText = "Gate: " + gate; 
  document.getElementById("bptime").innerText = "Time: " + time;
  document.getElementById("bpclass").innerText = "Class: " + classValue;
  document.getElementById("bpboardinggroup").innerText = "Boarding Group: " + boardingGroup;
  document.getElementById("bpbarcode").innerText = "Barcode: " + barcode;
};


function savedata() {
  const name = document.getElementById("passengername").value;
  const flightNumber = document.getElementById("flightnumber").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("idk").value;
  const seat = document.getElementById("seat").value;
  const gate = document.getElementById("gate").value;
  const time = document.getElementById("time").value;
  const classValue = document.getElementById("class").value;
  const boardingGroup = document.getElementById("boardinggroup").value;
  const barcode = document.getElementById("bpbarcode").innerText;
  localStorage.setItem("passengername", name);
  localStorage.setItem("flightNumber", flightNumber);
  localStorage.setItem("from", from);
  localStorage.setItem("to", to);
  localStorage.setItem("date", date);
  localStorage.setItem("seat", seat);
  localStorage.setItem("gate", gate);
  localStorage.setItem("time", time);
  localStorage.setItem("classValue", classValue);
  localStorage.setItem("boardingGroup", boardingGroup);
  localStorage.setItem("barcode", barcode);
}

function onloadbutton() {
  if (localStorage.getItem("passengername") === null || localStorage.getItem("passengername") === "") {
    document.getElementById("loadbutton").style.display = "none";
  } else {
    document.getElementById("loadbutton").style.display = "block";
  }
}

function loaddata() {
  document.getElementById("loadbutton").addEventListener("click", function () {
  document.getElementById("loadbutton").style.display = "none";

  document.getElementById("passengername").style.display = "none";
  document.getElementById("flightnumber").style.display = "none";
  document.getElementById("from").style.display = "none";
  document.getElementById("to").style.display = "none";
  document.getElementById("idk").style.display = "none";
  document.getElementById("seat").style.display = "none";
  document.getElementById("gate").style.display = "none";
  document.getElementById("generate").style.display = "none";
  document.getElementById("seat").style.display = "none";
  document.getElementById("time").style.display = "none";
  document.getElementById("class").style.display = "none";
  document.getElementById("boardinggroup").style.display = "none";

  document.getElementById('ticket').style.display = "block";

    const name = localStorage.getItem("passengername");
    const flightNumber = localStorage.getItem("flightNumber");
    const from = localStorage.getItem("from");
    const to = localStorage.getItem("to");
    const date = localStorage.getItem("date");
    const seat = localStorage.getItem("seat");
    const gate = localStorage.getItem("gate");
    const time = localStorage.getItem("time");
    const classValue = localStorage.getItem("classValue");
    const boardingGroup = localStorage.getItem("boardingGroup");
    const barcode = localStorage.getItem("barcode");


      document.getElementById("bpname").innerText = "Passenger Name: " + name;
  document.getElementById("bpflightnumber").innerText = "Flight Number: " + flightNumber;
  document.getElementById("bpfrom").innerText = "From: " + from;
  document.getElementById("bpto").innerText = "To: " + to;
  document.getElementById("bpdate").innerText = "Date: " + date;
  document.getElementById("bpseat").innerText = "Seat: " + seat;
  document.getElementById("bpgate").innerText = "Gate: " + gate; 
  document.getElementById("bptime").innerText = "Time: " + time;
  document.getElementById("bpclass").innerText = "Class: " + classValue;
  document.getElementById("bpboardinggroup").innerText = "Boarding Group: " + boardingGroup;
  })
}
