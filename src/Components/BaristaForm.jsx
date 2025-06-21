import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";
import "../App.css";

/**
 * BaristaForm component allows users to guess the recipe for a randomly selected drink.
 * Users can select temperature, milk, and syrup options, then check their answers against the correct recipe.
 *
 * State:
 * - currentDrink: The name of the currently selected drink.
 * - inputs: User-selected options for temperature, milk, syrup, and blended.
 * - correct_temp, correct_syrup, correct_milk, correct_blended: State to track correctness of user selections.
 *
 * Functions:
 * - onNewDrink: Randomly selects a new drink and resets user inputs and correctness states.
 * - onCheckAnswer: Compares user selections to the correct recipe and updates correctness states.
 *
 * Renders:
 * - The current drink name.
 * - Selection options for temperature, milk, and syrup.
 * - Buttons to check the answer or get a new drink.
 *
 * Dependencies:
 * - Assumes existence of `drinksJson` and `trueRecipe` objects.
 * - Uses a `RecipeChoices` component for rendering selection options.
 *
 * @component
 */
const BaristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState("");
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };
  const [correct_temp, setCheckedTemperature] = useState("");
  const [correct_syrup, setCheckedSyrup] = useState("");
  const [correct_milk, setCheckedMilk] = useState("");
  const [correct_blended, setCheckedBlended] = useState("");

  const onNewDrink = (e) => {
    if (e) e.preventDefault();
    const randomDrinkIndex = Math.floor(
      Math.random() * drinksJson.drinks.length
    );
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });
    setCheckedTemperature("");
    setCheckedSyrup("");
    setCheckedMilk("");
    setCheckedBlended("");
  };

  const onCheckAnswer = (e) => {
    e.preventDefault();
    // Implement answer checking logic here if needed
    if (trueRecipe.temp != inputs["temperature"]) {
      setCheckedTemperature("wrong");
    } else {
      setCheckedTemperature("correct");
    }
    if (trueRecipe.syrup != inputs["syrup"]) {
      setCheckedSyrup("wrong");
    } else {
      setCheckedSyrup("correct");
    }
    if (trueRecipe.milk != inputs["milk"]) {
      setCheckedMilk("wrong");
    } else {
      setCheckedMilk("correct");
    }
  };

  return (
    <div>
      <h3>Hi, I'd like to order a:</h3>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button type="button" className="button newdrink" onClick={onNewDrink}>
          🔄
        </button>
      </div>
      <div className="mini-container">
        <h4>Temperature</h4>
        <div className="answer-space" id={correct_temp}>
          {inputs["temperature"]}
        </div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="temperature"
          choices={ingredients["temperature"]}
          checked={inputs["temperature"]}
        />

        <h4>Milk</h4>
        <div className="answer-space" id={correct_milk}>
          {inputs["milk"]}
        </div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="milk"
          choices={ingredients["milk"]}
          checked={inputs["milk"]}
        />
        <br />

        <h4>Blended</h4>
        <div className="answer-space" id={correct_blended}>
          {inputs["blended"]}
        </div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="syrup"
          choices={ingredients["blended"]}
          checked={inputs["blended"]}
        />
        <br />
        <form className="container">
          <button
            type="submit"
            className="button-submit"
            onClick={onCheckAnswer}
          >
            Check Answer
          </button>
          <button
            type="button"
            className="button-newdrink"
            onClick={onNewDrink}
          >
            New Drink
          </button>
        </form>
      </div>
    </div>
  );
};

export default BaristaForm;
