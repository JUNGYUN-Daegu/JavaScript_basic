var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
  });

  document.querySelectorAll("button")[i].addEventListener("keydown", function (event) {
    var key2 = event.key;
    makeSound(key2)
    buttonAnimation(event)
  });
}

function makeSound(key) {
  if (key == "w") {
      let crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
  } else if (key == "a") {
    let kickSound = new Audio("sounds/kick-bass.mp3");
    kickSound.play();
  } else if (key == "s") {
    let snareSound = new Audio("sounds/snare.mp3");
    snareSound.play();
  } else if (key == "d") {
    let tom1Sound = new Audio("sounds/tom-1.mp3");
    tom1Sound.play();
  } else if (key == "j") {
    let tom2Sound = new Audio("sounds/tom-2.mp3");
    tom2Sound.play();
  } else if (key == "k") {
    let tom3Sound = new Audio("sounds/tom-3.mp3");
    tom3Sound.play();
  } else if (key == "l") {
    let tom4Sound = new Audio("sounds/tom-4.mp3");
    tom4Sound.play();
  } else {
    console.log("sdf")
  }
}

function buttonAnimation(currentKey) {
  // 이미 할당된 클래스에 접근할 때는 .className
  var activeButton = document.querySelector("." + currentKey);
  // css에서 만들어진 클래스를 오브젝트에 추가하고 싶을 때는 "className" 사용
  activeButton.classList.add("pressed");
  setTimeout(function() { activeButton.classList.remove("pressed"); }, 2000);
}
