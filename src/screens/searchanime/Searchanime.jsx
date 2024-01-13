import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./Searchanime.module";
import { SearchBar } from "react-native-elements";
import axios from "axios";
import { SvgUri } from "react-native-svg";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    console.log("Search Text:", text);
    setSearchText(text);
  };

  useEffect(() => {
    if (searchText.length > 0) {
      axios
        .get(
          "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
        )
        .then((response) => {
          const data = response.data;
          const filteredResults = data.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setSearchResults(filteredResults);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
        platform="default"
      />

      {searchResults.length > 0 ? (
        <View style={styles.resultContainer}>
          {searchResults.map((item) => (
            <View key={item.code} style={styles.resultItem}>
              <SvgUri
                width={40}
                height={25}
                uri={item.image}
                style={styles.countryImage}
              />
              <Text style={styles.countryName}>{item.name}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
};

export default SearchPage;
