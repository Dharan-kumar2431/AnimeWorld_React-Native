import React, { useState } from "react";
import styles from "./Animequiz.module";
import { View, Text, TouchableOpacity } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { quizData } from "../../components/shared/Categoryies";
import Header from "../../components/header/Header";
import { Color } from "../../misc/Colors";
import Slider from "@react-native-community/slider";

const QuizPage = () => {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [currentStep, setCurrentStep] = useState(0);
  const [animeSliderValue, setAnimeSliderValue] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleOptionSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSliderChange = (value) => {
    console.log("Slider value:", value);
    setAnimeSliderValue(value);
  };

  const renderOptions = () => {
    const currentQuestion = quizData[currentStep];

    return (
      <View style={{ padding: 16 }}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        {currentQuestion.type === "options" ? (
          currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(index)}
              style={
                answers[currentStep] === index
                  ? styles.selectedOptionContainer
                  : styles.optionContainer
              }
            >
              <Text
                style={
                  answers[currentStep] === index
                    ? styles.selectedOptionText
                    : styles.optionText
                }
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{ flex: 1 }}>
            <Slider
              value={animeSliderValue}
              onValueChange={(value) => setAnimeSliderValue(value)}
              onSlidingComplete={(value) => handleSliderChange(value)}
              minimumValue={0}
              maximumValue={10}
              step={1}
            />
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {`Selected Value: ${animeSliderValue}`}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Color.MAINCOLOR }}>
      <View>
        <Header />
      </View>
      <ProgressSteps
        activeStep={currentStep}
        progressBarColor="white"
        completedProgressBarColor="#4CAF50"
        completedStepIconColor="#4CAF50"
        activeStepIconBorderColor="#007AFF"
        activeStepIconColor="#007AFF"
      >
        {quizData.map((value,step) => (
          <ProgressStep
            key={step} 
            label={`Question ${step + 1}`}
            onNext={handleNext}
            onPrevious={handlePrev}
          >
            {renderOptions()}
          </ProgressStep>
        ))}
      </ProgressSteps>
    </View>
  );
};

export default QuizPage;
