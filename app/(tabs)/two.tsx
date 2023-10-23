import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const HomePage: React.FC = () => {
  // Assuming the user's current day is 5, you can replace this with dynamic data
  const currentDay = 5;

  return (
    <ImageBackground
      source={require('@/assets/images/procrastination.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={require('@/assets/images/procrastination.jpg')} style={styles.logo} />

        <View style={styles.header}>
          <Text style={styles.headerText}>30-Day Challenge</Text>
          <Text style={styles.dayText}>Day {currentDay}</Text>
        </View>

        <TouchableOpacity style={styles.studyButton}>
          <Text style={styles.buttonText}>Complete Daily Study</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quizButton}>
          <Text style={styles.buttonText}>Complete Daily Quiz</Text>
        </TouchableOpacity>

        <View style={styles.dayNavigation}>
          <TouchableOpacity style={styles.navigationButton}>
            <Text style={styles.navigationButtonText}>Previous Day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton}>
            <Text style={styles.navigationButtonText}>Next Day</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 32,
  },
  studyButton: {
    backgroundColor: '#3498db', // Button color
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  quizButton: {
    backgroundColor: '#27ae60', // Button color
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationButton: {
    backgroundColor: '#e74c3c', // Navigation button color
    padding: 16,
    borderRadius: 8,
    width: 140,
  },
  navigationButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
