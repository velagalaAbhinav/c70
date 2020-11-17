import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class TransactionScreen extends React.Component {
    constructor(){
      super()
      this.state={
        hasCameraPermissions:null,
        Scanned:false,
        ScannedData:'',
        ButtonState:'normal'
      }
    }
    getCamerPermissions = async() => {
      const {status} = await Permissions.askAsync(Permissions.CAMERA)
      this.setState({
        hasCameraPermissions:status === "granted"
      })
    }
    handleBarCodeScanned = async({type,data})=>{
      this.setState({
        scanned: true,
        ScannedData:DataCue,
        ButtonState:'normal'
      });
    }
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions
        const Scanned = this.state.Scanned
        const ButtonState = this.state.ButtonState
       if(ButtonState = "clicked" && hasCameraPermissions){

        return(
          <BarCodeScanner
          onBarCodeScanned = {Scanned ? undefined: this.handleBarCodeScanned}
          style = {StyleSheet.absoluteFillObject}
          />
        )
       }
        else if(ButtonState = "normal"){
         return(
          <View style={styles.container}>
            <View>
            <image
            source={require("./assets/booklogo.png")}
            style = {{width:200,height:200}}/>
            <Text style = {{textAlign:'center',fontSize:30}}>Wily</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
              style = {styles.inputBox}
              placeholder = "Book Id"
              value = {this.state.scannedBookId}/>
              <TouchableOpacity
              style = {styles.scanButton}
              onPress={()=>{
                this.getCameraPermissions("BookId")
              }}>
                <Text style={style.buttonText}>Scan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputBox}
            placeholder="Student Id"
            value={this.state.scannedStudentId}/>
            <TouchableOpacity
            style={styles.scanButton}
            onPress ={()=>{
              this.getCamerPermissions("BookId")
            }}>
           </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Student Id"
              value={this.state.scannedStudentId}/>
            <TouchableOpacity 
              style={styles.scanButton}
              onPress={()=>{
                this.getCameraPermissions("StudentId")
              }}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
          </View>
          </View>
        )
          }
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });