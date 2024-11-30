import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const VerticalStepper = () => {
  const [currentStep, setCurrentStep] = useState(2); // Adjust currentStep for testing

  const steps = [
    {
      label: "Ready to Pickup",
      description: "Order: 345678 from Delhi...",
      time: "11.00",
    },
    {
      label: "Order Processed",
      description: "Order: 345678 from Delhi...",
      time: "10.10",
    },
    {
      label: "Out for Delivery",
      description: "Order: 345678 from Delhi...",
      time: "11.10",
    },
    {
      label: "Delivered",
      description: "Order: 345678 from Delhi...",
      time: "05.50",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.eta}>ETA: 10 Days</Text>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          {/* Step Indicator */}
          <View style={styles.stepIndicator}>
            <View
              style={[
                styles.circle,
                currentStep >= index && styles.activeCircle,
              ]}
            >
              {currentStep >= index && <View style={styles.innerCircle} />}
            </View>
            {/* Vertical Line */}
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.line,
                  currentStep > index && styles.activeLine,
                ]}
              />
            )}
          </View>

          {/* Step Content */}
          <View style={styles.stepContent}>
            <Text
              style={[
                styles.stepLabel,
                currentStep === index && styles.activeLabel,
              ]}
            >
              {step.label}
            </Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>

          {/* Timestamp */}
          <Text style={styles.stepTime}>{step.time}</Text>
        </View>
      ))}
    </View>
  );
};

export default VerticalStepper;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#f5f5f5",
    padding: 20,
    width:'90%',
    marginTop:10
  },
  eta: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 0,
  },
  stepIndicator: {
    alignItems: "center",
    marginRight: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activeCircle: {
    borderColor: "blue",
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "blue",
  },
  line: {
    width: 2,
   height:40,
    backgroundColor: "#ddd",
  },
  activeLine: {
    backgroundColor: "blue",
  },
  stepContent: {
    flex: 1,
  },
  stepLabel: {
    fontSize: 16,
    color: "#666",
  },
  activeLabel: {
    color: "black",
    fontWeight: "bold",
  },
  stepDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  stepTime: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
});
