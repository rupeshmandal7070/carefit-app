import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["My Cart", "Address", "Payment"];

  return (
    <View style={styles.container}>
      {/* Stepper */}
      <View style={styles.stepperContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            {/* Line */}
            {index >= 0 && (
              <View
                style={[
                  styles.line,
                  currentStep >= index && styles.activeLine,
                ]}
              />
            )}

            {/* Step Circle */}
            <View
              style={[
                styles.circle,
                currentStep >= index && styles.activeCircle,
              ]}
            >
              {currentStep >= index && <View style={styles.innerCircle} />}
            </View>

            {/* Step Label */}
            <Text
              style={[
                styles.label,
                currentStep === index && styles.activeLabel,
              ]}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>

     
     
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    
    width:'90%',
    marginTop:30,
    alignItems:'center'
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width:'100%'
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    width:'33%'
  },
  line: {
    height: 2,
    width:30,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeLine: {
    backgroundColor: "blue",
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
  label: {
    marginLeft: 5,
    color: "#666",
    fontSize: 14,
  },
  activeLabel: {
    color: "black",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    height:'auto',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    marginBottom:20
  },
  deliveryText: {
    color: "gray",
    fontSize: 14,
    marginBottom: 4,
  },
  nameText: {
    color: "black",
    fontWeight: "bold",
    fontSize:16
  },
  description: {
    color: "gray",
    fontSize: 12,
    marginBottom: 8,
  },
  changeText: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
  },
});
