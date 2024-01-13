import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#e0e0e0',
  },
  resultContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resultItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    borderWidth: 1,
    marginBottom: 10,
    width: '45%',
  },
  countryName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default styles;
