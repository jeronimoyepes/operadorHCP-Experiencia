import Router from "next/router";

export function handleKeyDown(targetKey, execute, removeListener) {
  function callOnKeypress(e) {
      if (e.key == targetKey) {
        // Verifica si se debe eliminar el event listener
        removeListener && window.removeEventListener("keyup", callOnKeypress);
        // Ejectuta la función correspondiente a la posición de la tecla del array de teclas
        return execute();
    };
    window.removeEventListener("keyup", callOnKeypress);
  }
  window.addEventListener("keyup", callOnKeypress);
}

// function handleKeyDown(e) {
//   const key = e.key;
//   if (key == "ArrowRight") {
    
//   }
//   if (key == "ArrowLeft") {
   
//   }
//   window.removeEventListener("keyup", handleKeyDown);
// }
// window.addEventListener("keyup", handleKeyDown);
