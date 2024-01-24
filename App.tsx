import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [show,setshow] = useState(false);
  return(
    <View style={styles.container}>
      {
        show ?
        <View style={styles.modal}>
        <View style={styles.body}>
          <Text style={{backgroundColor:'purple',textAlign:'center',fontSize:23,justifyContent:'center',alignItems:'center'}}>Some Text</Text>
        <Button title="Close" onPress={()=>setshow(false)}/>
        </View>
      </View>
      : null
      }
      <Button title="Open Dailog" onPress={()=>setshow(true)}/>
      
    </View>
  )
}
const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end'
  },
  modal:{
    flex:1,
    backgroundColor:'rgba(50,50,50,0.5)',
    justifyContent:'center',
    alignItems: 'center',
    
  },
  body:{
    backgroundColor:'#fff',
    height:300,
    width:300,
    padding:20,
    justifyContent:'flex-end',
    borderRadius:10
  }
})

export default App;
