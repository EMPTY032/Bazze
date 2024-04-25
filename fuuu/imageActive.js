const slides = document.querySelectorAll(".slide");
let click = false;

for (const slid of slides) {
  slid.addEventListener("click", () => {
    if (click == true) {
      ActiveClasses(1);
      click = false;
    } else {
      ActiveClasses();
      slid.classList.add("active");
      slid.classList.remove("noactive");
      click = true;
    }
  });
}

function ActiveClasses(situation = 0) {
  if (situation == 1) {
    for (const slid of slides) {
      slid.classList.remove("active");
      slid.classList.remove("noactive");
    }
  } else {
    for (const slid of slides) {
      slid.classList.remove("active");
      slid.classList.add("noactive");
    }
  }
}
