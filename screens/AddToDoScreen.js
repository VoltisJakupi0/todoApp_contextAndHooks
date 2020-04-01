import React,{useContext, useState} from 'react';
import { StyleSheet, TextInput, View,Text , TouchableOpacity, Image} from 'react-native';

import { ToDoContext } from '../context';

export default function AddToDoScreen(props) {

  let dataContext=useContext(ToDoContext)
  let [todoTask, setTodoTaskValue] = useState("")

  return (
    <View style={styles.container}>

      <View style={styles.input}>
        <TextInput
          autoFocus={true}
          value={todoTask} 
          onChangeText={(val)=> setTodoTaskValue(val)} 
          placeholder="Write your new to do task."
          style={{fontSize: 15}}
        />
      </View> 



      <View style={{alignItems: 'center'}}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=> {
          dataContext.setData(todoTask)
          props.navigation.goBack("")
        }}
      >
          <Text style={{fontSize: 20}}>Create</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

AddToDoScreen.navigationOptions = ({navigation}) => ({
  headerTitle:"",
  headerLeft: () => (
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image 
          source={require('../assets/images/left-arrow.png')} 
          style={{width: 12.3, height: 20.9, marginLeft: 15}}
          />
      </TouchableOpacity>
  )
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  input:{
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  button:{
    marginTop: 50, 
    alignItems: 'center', 
    backgroundColor: 'lightgray',
    paddingTop: 15,
    paddingBottom: 15,
    width: 200,
    borderRadius: 15
  }
});
