import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Message"
            style={[styles.input, styles.textArea]}
            onChangeText={handleChange("message")}
            onBlur={handleBlur("message")}
            value={values.message}
            multiline
            numberOfLines={4}
          />
          <View style={styles.buttonWrapper}>
            <Button title="Send" onPress={handleSubmit} color="#ffffff" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#513404ff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "#513404ff",
  },
});

export default ContactForm;
