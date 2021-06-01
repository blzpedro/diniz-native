import React from 'react';
import { Image, SafeAreaView, Text, TextInput } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles';
export const logo = require('../../../assets/images/logo-diniz.png'); 

export const HomeList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.safeAreaView}>      
      <Image source={logo} style={Styles.logo}/>
      <TextInput placeholder="Usuário" style={Styles.textInput}/>
      <TextInput placeholder="Senha" style={Styles.textInput}/>
      <Button dark onPress={() => navigation.navigate('Todo')} style={Styles.button}>
        <Text style={Styles.textButton}>Entrar</Text>
      </Button>
      <Button dark onPress={() => navigation.navigate('Todo')} style={Styles.button}>
        <Text style={Styles.textButton}>Cadastre-se</Text>
      </Button>
    </SafeAreaView>
  );
};
