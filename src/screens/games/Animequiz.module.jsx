import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  selectedOptionContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  optionText: {
    color: '#007AFF',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
