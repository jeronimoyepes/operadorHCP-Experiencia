// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { writeToFirebase } from "./firebaseCofig";

export default function captureData(req, res) {
  writeToFirebase(req.body).then(response => {
    res.status(201).json({ msg: "Guardado correctamente"});
  }).catch(e => {
    res.status(400).json({ msg: "Guardado correctamente", e});
  })
}
