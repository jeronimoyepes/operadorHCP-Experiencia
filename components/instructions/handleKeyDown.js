export function handleKeyDown(e) {
  const key = e.key;
  if (key == "ArrowRight") {
    // Capturar si es la última pantalla de las instrucciones
    if (pages.next == 6) {
      window.removeEventListener("keyup", handleKeyDown);
      return Router.push("/");
    } else {
      Router.push(`./page${pages.next}`);
    }
  }
  if (key == "ArrowLeft") {
    if (pages.prev == 0) {
      window.removeEventListener("keyup", handleKeyDown);
      return null;
    } else {
      Router.push(`./page${pages.prev}`);
    }
  }
  window.removeEventListener("keyup", handleKeyDown);
}
