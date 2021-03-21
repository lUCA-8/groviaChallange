function myFunction() {
  var txt;
  var Email = prompt("Please enter your Email:");

  if (Email == null || Email == "") {
    txt = "Follow us now";
  } else {
    txt = "Thanks!";
    document.getElementById("follow").style.backgroundColor = "green";

    setTimeout(function () {
      document.getElementById("follow").style.backgroundColor = "black";
      document.getElementById("follow").innerHTML = "Follow us now";
    }, 3000);

  }

  document.getElementById("follow").innerHTML = txt;
}
