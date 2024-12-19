import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

// Stats Card Component
const StatCard = ({ title, value, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </TouchableOpacity>
);

// Dashboard Component (HomePage)
const Homepage = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  
  const revenueData = [1000, 1200, 1300, 1400, 1800, 2000, 2100]; // Example revenue data

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Garage Management Dashboard</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <StatCard title="Total Cars" value="150" onPress={() => navigation.navigate('Cars')} />
        <StatCard title="Active Services" value="12" onPress={() => navigation.navigate('ManageServices')} />
        <StatCard title="Revenue This Month" value="$5000" onPress={() => alert('View Detailed Revenue')} />
      </View>

      {/* Revenue Trend Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Revenue Trend (Last 7 Days)</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: revenueData,
              },
            ],
          }}
          width={screenWidth - 30} // from react-native's Dimensions
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#E0E0E0',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{ marginVertical: 8, borderRadius: 16 }}
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        <Button title="Add New Car" onPress={() => navigation.navigate('AddCar')} />
        <Button title="Manage Services" onPress={() => navigation.navigate('ManageServices')} />
        <Button title="Customer Feedback" onPress={() => navigation.navigate('CustomerFeedback')} />
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonsContainer: {
    marginTop: 30,
    marginHorizontal: 15,
    gap: 10,
  },
});

export default Homepage;
