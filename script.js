// 🔐 PASSWORD SYSTEM
function askPassword() {
  const password = prompt("Enter the secret password 💖");

  if (password === "143") { // change password here
    document.getElementById("intro").style.display = "none";
    document.getElementById("surprise").style.display = "block";
    startTyping();
  } else {
    alert("Wrong password from the day we first talked😢");
  }
}

const message = `I know life is hard sometimes, and it can feel overwhelming.
 But even in your weakest moments, you’re still stronger than you think❤️`;

let index = 0;

function startTyping() {
  const typingText = document.getElementById("typingText");

  function type() {
    if (index < message.length) {

      // Add pause when reaching a line break
      if (message.charAt(index) === "\n") {
        typingText.innerHTML += "<br><br>";
        index++;
        setTimeout(type, 800); // longer pause between paragraphs
      } else {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(type, 40);
      }

    }
  }

  type();
}
// 💖 Reveal Upload Button
function revealUpload() {
  document.getElementById("uploadBtn").classList.remove("hidden");
}

const uploadBtn = document.getElementById("uploadBtn");
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

uploadBtn.addEventListener("click", function() {
  photoInput.click();
});

// 📸 After Upload → Confetti Explosion
photoInput.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function() {
      photoPreview.src = reader.result;
      photoPreview.classList.remove("hidden");
      launchConfetti();
    };

    reader.readAsDataURL(file);
  }
});

// 🎆 CONFETTI FUNCTION
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = 
      `hsl(${Math.random() * 360}, 100%, 50%)`;

    confetti.style.animationDuration = 
      (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

function showSecret() {
  document.getElementById("secretMessage").classList.remove("hidden");
}