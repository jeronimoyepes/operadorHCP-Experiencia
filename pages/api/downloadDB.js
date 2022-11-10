import { readFromFirebase } from "./firebaseCofig";

export default async function downloadData (req, res) {
  try {
    const data = await readFromFirebase();
    return data
      ? res.status(200).json(data)
      : res.status(400).json({ msg: "error en el servidor" });
  } catch (e) {
    return res.status(400).json({ msg: "error en el servidor", e });;
  }
}
