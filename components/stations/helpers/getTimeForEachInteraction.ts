export default function getTimeForEachInteraction(totalExperienceDuration:number, interactionsDataLength:number) {
  console.log(totalExperienceDuration, interactionsDataLength)
  return Math.floor(totalExperienceDuration / interactionsDataLength);
}
