import React, { useState } from 'react';
import { Button, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [display, setDisplay] = useState('');
  const[displaymodel, setdisplaymodel]=useState(false);

  const equal = () => {
    try {
      // Replace common math functions with Math equivalents
      let expression = display
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/pi/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/pow/g, 'Math.pow');

      const result = eval(expression);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <View style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#cce082'} />
      <TextInput value={display} style={styles.wrapperDisplay} editable={false}/>
    <ScrollView>
      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '7')}>
          <Text style={styles.textdesign}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '8')}>
          <Text style={styles.textdesign}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '9')}>
          <Text style={styles.textdesign}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '+')}>
          <Text style={styles.textdesign}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '4')}>
          <Text style={styles.textdesign}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '5')}>
          <Text style={styles.textdesign}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '6')}>
          <Text style={styles.textdesign}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '-')}>
          <Text style={styles.textdesign}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '1')}>
          <Text style={styles.textdesign}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '2')}>
          <Text style={styles.textdesign}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '3')}>
          <Text style={styles.textdesign}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '*')}>
          <Text style={styles.textdesign}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay('')}>
          <Text style={styles.textdesign}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '0')}>
          <Text style={styles.textdesign}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '.')}>
          <Text style={styles.textdesign}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '/')}>
          <Text style={styles.textdesign}>/</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonstyle}>
        <TouchableOpacity style={[styles.button, { width: '70%', backgroundColor: '#4cf5e4' }]} onPress={equal}>
          <Text style={styles.textdesign}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '/100')}>
          <Text style={styles.textdesign}>%</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'sin(')}>
          <Text style={styles.textdesign}>sin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'cos(')}>
          <Text style={styles.textdesign}>cos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'tan(')}>
          <Text style={styles.textdesign}>tan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'log(')}>
          <Text style={styles.textdesign}>log</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'sqrt(')}>
          <Text style={styles.textdesign}>sqrt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'pow(')}>
          <Text style={styles.textdesign}>x^y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'exp(')}>
          <Text style={styles.textdesign}>exp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'ln(')}>
          <Text style={styles.textdesign}>ln</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonstyle}>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + '(')}>
          <Text style={styles.textdesign}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + ')')}>
          <Text style={styles.textdesign}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'pi')}>
          <Text style={styles.textdesign}>pi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay(display + 'e')}>
          <Text style={styles.textdesign}>e</Text>
        </TouchableOpacity>
      </View>

     </ScrollView>
        <Button onPress={()=>{setdisplaymodel(true)}} title='lock calculator'/>
     <Modal visible={displaymodel} animationType='slide'>
      <View style={styles.modelwraper}>
        <View style={styles.modelContent}>
          <Text style={styles.textStyle}>Well Come to Calculator</Text>
          <Button onPress={()=>{setdisplaymodel(false)}} title='Open Now' style={styles.buttonstyle}/>
        </View>
      </View>
     </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#cce082',
    flex: 1,
  },
  wrapperDisplay: {
    backgroundColor: 'white',
    marginTop: 25,
    margin: 15,
    height: 60,
    borderRadius: 10,
    textAlign: 'right',
    padding: 10,
    fontSize: 40,
  },
  buttonstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  button: {
    backgroundColor: '#ede8e1',
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdesign: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  modelwraper:{
    flex:1,
    backgroundColor:'#cce082',
    justifyContent:'center',
    alignItems:'center'
  },
  modelContent:{
    backgroundColor:'green',
    padding:20,
    width:'80%',
    borderRadius:10,
    height:'20%',
    elevation:5,
  },
  textStyle:{
    fontSize:20,
    padding:20,
    color:'white',
    fontWeight:'bold'
  },
});

export default App;
