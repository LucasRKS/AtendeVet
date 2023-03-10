import { 
  Image,
  VStack, 
  Center,
  ScrollView,
  Text } from "native-base";
import { useForm, Controller } from "react-hook-form"; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useAuth } from "@hooks/useAuth";

import logo from '@assets/logo.png';

type formData = {
  document: string;
  password: string;
}

const loginSchema = yup.object({
  document: yup.string().required('Informe o documento'),
  password: yup.string().required('Informe a senha')
});

export function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: yupResolver(loginSchema)
  });

  async function handleSignIn({ document, password }: formData) {
    const { signIn } = useAuth();
    await signIn(document, password);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} padding={10} bg='white'>
        <Center>
          <Image 
            source={logo} 
            alt='Atende Vet'
            resizeMode='contain'
            height={200}
            my={10}
          />
          
          <Text fontSize='xl' color='black' mb={8}>Seu pet, nossa missão!</Text>

          <Controller 
            control={control} 
            name='document'
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
          
          <Button title="Acessar" w="full" onPress={handleSubmit(handleSignIn)}/>
        </Center>
      </VStack>
    </ScrollView>
  )
}