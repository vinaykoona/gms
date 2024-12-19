import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CustomerFeedback = () => {
  const feedbacks = [
    { id: '1', name: 'John Doe', feedback: 'Great service, very quick!' },
    { id: '2', name: 'Jane Smith', feedback: 'Friendly staff, very professional.' },
    { id: '3', name: 'Mark Lee', feedback: 'Affordable prices and excellent work.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Feedback</Text>
      <FlatList
        data={feedbacks}
        renderItem={({ item }) => (
          <View style={styles.feedbackCard}>
            <Text style={styles.feedbackName}>{item.name}</Text>
            <Text>{item.feedback}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  feedbackCard: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  feedbackName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CustomerFeedback;
