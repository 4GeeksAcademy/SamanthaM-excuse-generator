/* eslint-disable */
import "bootstrap";
import "./style.css";

/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello");
};

let generateExcuse = () => {
  let Article = ["The", "A"];
  let Subject = ["teacher", "dog", "girl", "boy"];
  let Action = ["broke my", "ate my", "yelled at my", "burned my"];
  let Posession = ["phone", "homework", "lunch", "book"];
  let Time = ["at work", "during class", "at the party", "in my house"];

  let ArtIndx = Math.floor(Math.random() * Article.length);
  let SubIndx = Math.floor(Math.random() * Subject.length);
  let ActIndex = Math.floor(Math.random() * Action.length);
  let PosIndex = Math.floor(Math.random() * Posession.length);
  let TimIndex = Math.floor(Math.random() * Time.length);

  return (
    Article[ArtIndx] +
    " " +
    Subject[SubIndx] +
    " " +
    Action[ActIndex] +
    " " +
    Posession[PosIndex] +
    " " +
    Time[TimIndex]
  );
};
