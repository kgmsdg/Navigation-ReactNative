import React from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';

function First(props) {
  
  console.log(props);

  function navigateToPage() {
    props.navigation.navigate('SecondScreen', {username: 'Kaan Gümüşdağ'});    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello First</Text>
      <Button title="Go to Second" onPress={navigateToPage} />
    </View>
  );
}

export default First;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 40, fontWeight: 'bold' },
});
