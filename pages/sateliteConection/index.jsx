import { useEffect } from "react";

export default function sateliteConection() {
  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key;
      if (key == "z") {
        alert("Z")
      }
      if (key == "x") {
        alert("X")
      }
      if (key == "c") {
        alert("C")
      }
    }
    window.addEventListener("keyup", handleKeyDown);
  }, []);

  return (
    <div>
      <img src="/satelite.gif" alt="" />
    </div>
  );
}
