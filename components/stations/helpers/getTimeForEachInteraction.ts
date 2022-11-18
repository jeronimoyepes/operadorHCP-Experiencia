export default function getTimeForEachInteraction(totalExperienceDuration:number, interactionsDataLength:number) {
  return Math.floor(totalExperienceDuration / interactionsDataLength);
}
