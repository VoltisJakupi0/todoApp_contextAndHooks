import React, {useContext} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ToDoContext } from '../context';


export default function MainScreen(props) {


  let dataContext=useContext(ToDoContext)

  showTodos = () => {
    return dataContext.todoArray.map(task => {
      return(
      <View style={styles.task}>
        <Text>{task}</Text>
      </View>
      )
    })
  }

  return (
    <View style={styles.container}>
      {showTodos()}
    </View>

  );

}

MainScreen.navigationOptions = ({navigation}) => ({
  headerTitle: "Todo App",
  headerRight:() => (
    <TouchableOpacity onPress={()=> navigation.navigate("AddToDo")}>
      <Text style={styles.add}>+</Text>
    </TouchableOpacity>
  )

})
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  add:{
    fontSize: 29,
    paddingRight: 20,
    fontWeight: "400"
  },
  task:{
      height: 60,
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      paddingLeft: 15,
      paddingRight: 15
  }

});
