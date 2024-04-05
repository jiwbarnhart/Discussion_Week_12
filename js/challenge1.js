document.querySelector("body").addEventListener("click", function() {
    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }});

document.addEventListener("click, function() {
  let currentTime = new Date()
  alert new Date();
