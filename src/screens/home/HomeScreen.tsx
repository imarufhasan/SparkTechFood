import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const categories = [
  { id: '1', name: 'Pizza', image: require('../../assets/images/veg.png') },
  { id: '2', name: 'Burger', image: require('../../assets/images/veg.png') },
  { id: '3', name: 'Sushi', image: require('../../assets/images/veg.png') },
];

const popularItems = [
  {
    id: '1',
    name: 'Pepperoni Pizza',
    image: require('../../assets/images/veg.png'),
    price: '$12.99',
  },
  {
    id: '2',
    name: 'Cheese Burger',
    image: require('../../assets/images/veg.png'),
    price: '$10.99',
  },
  {
    id: '3',
    name: 'Sushi Roll',
    image: require('../../assets/images/veg.png'),
    price: '$15.99',
  },
  {
    id: '4',
    name: 'Veg Pizza',
    image: require('../../assets/images/veg.png'),
    price: '$11.99',
  },
];

const HomeScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>SparkFood</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <FlatList
        data={popularItems}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.popularCard}
            onPress={() =>
              navigation.navigate('FoodDetails', {
                name: item.name,
                image: item.image,
                description: 'Delicious & freshly prepared!',
                price: item.price,
              })
            }
          >
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularName}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

// fafa
export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FF6347' },
  logout: { color: '#FF6347', fontWeight: 'bold' },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  categoryCard: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 80, height: 80, borderRadius: 40 },
  categoryName: { marginTop: 5, fontWeight: 'bold', color: '#555' },
  popularCard: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  popularImage: { width: '100%', height: 120, borderRadius: 12 },
  popularName: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  popularPrice: {
    marginTop: 5,
    color: '#FF6347',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
