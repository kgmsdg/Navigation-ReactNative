import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';

function Second(props) {

  console.log(props);

  const user = props.route.params.username

  function backtoFirst() {
    props.navigation.goBack('FirstScreen')
  }

  return(
     <View style={styles.container}>
    <Text style={styles.text}>Hello Second</Text>
    <Text>{user}</Text>
    <Button title="Go Back" onPress={backtoFirst}/>
    </View>
  )
}

export default Second;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: 'bold'},
});