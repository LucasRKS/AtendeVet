import { 
  Image,
  VStack, 
  Center,
  ScrollView,
  Text } from "native-base";
  import { useForm, Controller } from "react-hook-form";

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import logo from '@assets/logo.png';

type formData = {
  document: string;
  password: string;
}

export function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<formData>();

  function handleSignIn({ document, password }: formData) {
    console.log('hello')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} bg="bgAtende.blue" padding={10}>
        {/* <Image source={logo} alt='Atende Vet'/> */}
        <Center my={24} rounded={12}>
          <Text fontSize='xl' color='white' mb={10}>Seu pet, nossa missão!</Text>

          <Controller 
            control={control} 
            name='document' 
            rules={{
              required: 'Informe o documento'
            }}
            render={({field: { onChange, value }}) => (
              <Input 
                placeholder="Documento" 
                keyboardType="numeric" 
                onChangeText={onChange} 
                value={value} 
                errorMessage={errors.document?.message}
              />
            )}
          />

          <Controller 
            control={control} 
            name='password'
            rules={{
              required: 'Informe a senha'
            }} 
            render={({field: { onChange, value }}) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry
                onChangeText={onChange} 
                value={value} 
                errorMessage={errors.password?.message}
                onSubmitEditing={handleSubmit(handleSignIn)}
                returnKeyType='send'
              />
            )}
          />
          
          <Button title="Acessar" w="full" h="12" onPress={handleSubmit(handleSignIn)}/>
        </Center>
      </VStack>
    </ScrollView>
  )
}