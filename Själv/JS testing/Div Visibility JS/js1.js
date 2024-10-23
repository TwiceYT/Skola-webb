function showDiv1() {
  var div1 = document.getElementById("Div1");
  
  // Kolla om Div1 redan är synlig
  if (div1.style.display !== "block") {
    div1.style.display = "block";
    document.getElementById("Div2").style.display = "none";
    document.getElementById("Div3").style.display = "none";
    document.getElementById("Div4").style.display = "none";
  } else {
    alert("You are already on Div1");
  }
}

  
  function showDiv2() {
    document.getElementById("Div1").style.display = "none";
    document.getElementById("Div2").style.display = "block";
    document.getElementById("Div3").style.display = "none";
    document.getElementById("Div4").style.display = "none";
  }

  function showDiv3() {
    document.getElementById("Div1").style.display = "none";
    document.getElementById("Div2").style.display = "none";
    document.getElementById("Div3").style.display = "block";
    document.getElementById("Div4").style.display = "none";
  }
  
  function showDiv4() {
    document.getElementById("Div1").style.display = "none";
    document.getElementById("Div2").style.display = "none";
    document.getElementById("Div3").style.display = "none";
    document.getElementById("Div4").style.display = "block";
  }
  
  