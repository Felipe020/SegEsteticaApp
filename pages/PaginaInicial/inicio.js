import React, {useState} from 'react'
import {Image, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function TelaInicial(props){
    
    const {navigation} = props;  
    const Login = () => {
        navigation.navigate ('Login');
    }
    
    const Cadastro = () => {
        navigation.navigate ('CadastrarUsuario');
    }
    
    const CadastrarLoja = () => {
        navigation.navigate ('CadastroEstabelecimento');
    }

    return (

        <View style={styles.container}>
          <StatusBar hidden  />
    
          <Image style={styles.logo}  
          source={require('../../assets/segestestica_logo_s_subtitulo_transparente.png')}
          />  
          
          <TouchableOpacity style={styles.btnCadastro} onPress={()=>Login()}>
            <Text style={{color:'white', textAlign:'center'}}>Login</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.btnCadastro} onPress={()=>Cadastro()}>
            <Text style={{color:'white', textAlign:'center'}}>Cadastro</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.btnCadastro} onPress={()=>CadastrarLoja()}>
            <Text style={{color:'white', textAlign:'center'}}>Cadastrar uma loja</Text>
          </TouchableOpacity>
     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2E2E2E',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
    textInput:{
      width:'100%',
      height:40,
      backgroundColor:'white',
      borderRadius:20,
      paddingLeft:10,
      marginBottom:10
    },
    btnCadastro:{
      width:'50%',
      height:40,
      backgroundColor:'#343434',
      borderRadius:20,
      justifyContent: 'center',
      marginBottom:20,
    },
    logo:{
        width:200,
        height: 200
    }
  });
