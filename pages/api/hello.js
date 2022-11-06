// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { writeToFirebase } from "./firebaseCofig";

export default function captureData(req, res) {
  // writeToFirebase(req.body).then(response => {
  //   res.status(201).json({ name: "John Doe" });
  // }).catch(e => {
  //   console.log(e)
  // })
  return res.status(201).json({ name: "John Doe" });
}
