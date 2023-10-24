import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["New York", "Berlin", "Paris"],
      correctAnswer: "Paris",
    },
    {
      question: "Who is the first president of the USA?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
      correctAnswer: "George Washington",
    },
    {
      question: "What is 2 + 2?",
      correctAnswer: "4",
    },
    // Add more questions here...
  ];

  const handleMultipleChoiceAnswer = (selectedOption) => {
    setUserResponses({
      ...userResponses,
      [currentQuestion]: selectedOption,
    });
  };

  const handleTextInputAnswer = (textAnswer) => {
    setUserResponses({
      ...userResponses,
      [currentQuestion]: textAnswer,
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is completed, you can handle submission or display results
    }
  };

  const renderQuestion = () => {
    const question = quizData[currentQuestion];

    if (question.options) {
      return (
        <View>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleMultipleChoiceAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.questionText}>{question.question}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleTextInputAnswer(text)}
            placeholder="Your answer"
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderQuestion()}
      {currentQuestion < quizData.length - 1 ? (
        <Button title="Next" onPress={goToNextQuestion} />
      ) : (
        <Button title="Submit" onPress={() => console.log(userResponses)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: Dimensions.get('window').width,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Quiz;
