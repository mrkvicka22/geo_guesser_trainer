import React, { useState } from "react";
import { Image, Input, Button } from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup } from "@chakra-ui/stat";
import { useEffect } from "react";
import getRandomImage from "../api/getRandomImage";
import getImage from "../api/getImage";
import useOnlyEffect from "../hooks/useOnlyEffect";
import CountryAlternatives from "../constants/CountryNames";

export default function Guesser({ type }) {
  const [imageSrc, setImageSrc] = useState();
  const [country, setCountry] = useState();
  const [image, setImage] = useState();
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [streakCount, setStreakCount] = useState(0);
  const [lastCountry, setLastCountry] = useState();
  const [showAnswer, setShowAnswer] = useState(false);
  const [lastCountryCorrect, setLastCountryCorrect] = useState();

  useEffect(()=>{
    setLastCountry(country);
    setShowAnswer(true);
  },[count])
  useEffect(() => getRandomImage(setImageSrc, setCountry), [lastCountry]);
  useOnlyEffect(() => getImage(imageSrc, setImage), [imageSrc]);
  
  function handleGuess(event){
    setGuess(event.target.value)
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("entered input");
      handleSubmit(event);
    }
  }
  function handleSubmit(event) {
    if (guess) {
      if (CountryAlternatives[country].has(guess.toLowerCase())) {
        setCorrectCount((c) => c + 1);
        setStreakCount((c) => c + 1);
        setLastCountryCorrect(true);
      } else {
        setIncorrectCount((c) => c + 1);
        setStreakCount(0);
        setLastCountryCorrect(false);
      }
      setCount((c) => c + 1);
      setGuess("");
    }
  }

  function handleAnswerKey(event){
    if(event.key ==="Enter"){
      console.log("entered here")
      handleAnswerButton(event);
    }
  }
  function handleAnswerButton(event){
    setShowAnswer(false);
  }
  return (
    <div>
      {imageSrc && country && image && (
        <div>
          <div className={"general-area"}>
            {!showAnswer &&<div>
              <Image
                src={`data:image/png;base64,${image}`}
                boxSize="40vh"
                objectFit="contain"
              />
              <Input className={"country-input"}autoFocus={!showAnswer}
                value={guess}
                placeholder="Country"
                size="lg"
                onKeyDown={handleKeyDown}
                onChange={handleGuess}
              />
              <Button onClick={handleSubmit}>Sumbit</Button>
            </div>}
            {showAnswer && 
            <div onKeyDown={handleAnswerKey}>
              {!lastCountryCorrect && <h1>Incorrect, it was actually {lastCountry}</h1>}
               {lastCountryCorrect &&<h1>Nice, it was indeed {lastCountry}</h1>}
              <Button onKeyDown={handleAnswerKey} autoFocus={showAnswer} onClick={handleAnswerButton}>OK</Button>
          </div>
          }
          </div>
          <StatGroup className={"guess-stats"}>
            <Stat>
              <StatLabel>Correct {showAnswer.toString()}</StatLabel>
              <StatNumber color={"green"}>{correctCount}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel >Incorrect</StatLabel>
              <StatNumber color={"red"}>{incorrectCount}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Total</StatLabel>
              <StatNumber>{count}</StatNumber>
              <StatHelpText>
                {(count>0)&&(Math.round(((correctCount / count) * 100 + Number.EPSILON) * 100) /100 +"%")}
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Streak</StatLabel>
              <StatNumber>{streakCount}</StatNumber>
            </Stat>
          </StatGroup>
        </div>
      )}
    </div>
  );
}
