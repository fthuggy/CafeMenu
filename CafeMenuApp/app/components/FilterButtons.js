import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

const categories = ["all", "tea", "coffee", "juice", "bakery"];

function FilterButtons({ selectedCategory, onSelectCategory }) {
  return (
    <View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.button,
              selectedCategory === item && styles.selectedButton,
            ]}
            onPress={() => onSelectCategory(item)}
          >
            <Text
              style={[
                styles.text,
                selectedCategory === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 70,
  },
  selectedButton: {
    backgroundColor: "#fff",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#513404ff",
  },
  selectedText: {
    color: "#513404ff",
  },
});

export default FilterButtons;
