import React, {useState, useEffect} from 'react'
import {Image, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {cadastro} from './conexao'

export default function TelaCadastro({navigation}) {
  const[nome, setNome] = useState('');
  const[nome_estabelecimento, setNomeEstabelecimento] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[cep, setCEP] = useState('');
  const[telefone, setTEL] = useState('');

  useEffect(()=>{cadastro()},[])

  return (

    <View style={styles.container}>
      <StatusBar hidden  />

      <Image style={styles.icone}  
          source={require('../../../assets/CorteDeCabelo.png')}
      />  

      <TextInput placeholder="Nome" style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder="Nome do Estabelecimento" style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder="Telefone do Estabelecimento" style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder="Email" style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder="Senha" style={styles.textInput} onChangeText={text=>setSenha(text)} />
      <TextInput placeholder="Endereço" style={styles.textInput} onChangeText={text=>setCEP(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white', textAlign:'center'}}>Cadastrar Estabelecimento</Text>
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
    justifyContent: 'center'
  },
  icone:{
    width:150,
    height:150,
    margin:40,
  }
});