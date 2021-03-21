function myFunction() {
    var txt;
    var Email = prompt("Please enter your Email:");
    if (Email == null || Email == "") {
      txt = "Follow us now";
    } else {
      txt = "Thanks!";
      document.getElementById("follow").style.backgroundColor = "green";
    }
    
    document.getElementById("follow").innerHTML = txt;
  }