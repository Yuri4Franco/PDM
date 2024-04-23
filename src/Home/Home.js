import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <>
          <Text>Bem-vindo!</Text>
          <Button title="Sair"/>
        </>
    </View>
  );
};

export default Home;