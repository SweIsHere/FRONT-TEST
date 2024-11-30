document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const enterButton = document.getElementById("enter-button");
    const loadingScreen = document.getElementById("loading-screen");
    const loadingSound = document.getElementById("loading-sound");
  
    // Cuando el usuario hace clic en "Entrar"
    enterButton.addEventListener("click", () => {
      // Ocultar la pantalla inicial
      welcomeScreen.style.display = "none";
  
      // Mostrar la pantalla de carga
      loadingScreen.style.display = "flex";
  
      // Reproducir sonido
      loadingSound.play().then(() => {
        console.log("Sonido reproducido correctamente.");
      }).catch((err) => {
        console.error("Error al reproducir el sonido:", err);
      });
  
      // Ocultar la pantalla de carga después de 3 segundos
      setTimeout(() => {
        loadingScreen.classList.add("fade-out");
  
        // Mostrar el contenido principal
        setTimeout(() => {
          loadingScreen.style.display = "none";
          document.getElementById("content").style.display = "block";
        }, 1000); // Duración del fade-out
      }, 3000); // Duración de la pantalla de carga
    });
  });
  