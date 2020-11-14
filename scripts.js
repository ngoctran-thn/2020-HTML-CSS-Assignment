function myFunction() {
  var myLinksDivElement = document.getElementById("myLinks");
  if (myLinksDivElement.style.display == "block") {
    myLinksDivElement.style.display = "none";
  } else {
    myLinksDivElement.style.display = "block";
  }
}

var myArr = [2, 1, 5, -10, 9];
myArr.sort();
