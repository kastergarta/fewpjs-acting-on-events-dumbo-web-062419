var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

dodger.style.left;
dodger.style.right;
dodger.style.bottom = "100px"; // "0px"

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    var leftNumbers = dodger.style.left.replace("px", "");
    console.log(dodger.style.left);
    var left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 10}px`;
  }
});

document.addEventListener("keydown", function(r) {
  if (r.key === "ArrowRight") {
    var rightNumbers = dodger.style.right.replace("px", "");
    console.log(dodger.style);

    var right = parseInt(rightNumbers, 10);

    dodger.style.right = `${right + 10}px`;
  }
});
