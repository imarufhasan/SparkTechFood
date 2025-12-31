import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface FoodDetailsProps {
  route: {
    params: {
      name: string;
      image: any;
      description: string;
      price: string;
    };
  };
  navigation: any;
}

const FoodDetailsScreen: React.FC<FoodDetailsProps> = ({
  route,
  navigation,
}) => {
  const { name, image, description, price } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Food Details</Text>
      </View>

      {/* Food Image */}
      <Image source={image} style={styles.foodImage} />

      {/* Food Info */}
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.foodName}>{name}</Text>
          <TouchableOpacity>
            <Ionicons name="heart" size={28} color="#FF6347" />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FoodDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  foodImage: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  infoContainer: { padding: 20 },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodName: { fontSize: 24, fontWeight: 'bold', color: '#333', flex: 1 },
  description: { fontSize: 16, color: '#666', marginTop: 10, lineHeight: 22 },
  price: { fontSize: 22, fontWeight: 'bold', color: '#FF6347', marginTop: 15 },
  addButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
