import { 
  Image,
  VStack, 
  Center,
  ScrollView,
  Text } from "native-base";

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import logo from '@assets/logo.png';

export function Login () {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} bg="bgAtende.blue" padding={10}>
        {/* <Image source={logo} alt='Atende Vet'/> */}
        <Center my={24} rounded={12}>
          <Text fontSize='xl' color='white' mb={10}>Seu pet, nossa missão!</Text>

          <Input placeholder="Documento" keyboardType="numeric"/>
          <Input placeholder="Senha" secureTextEntry/>
          
          <Button title="Acessar" w="full" h="12"/>
        </Center>
      </VStack>
    </ScrollView>
  )
}