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

// import background from '@assets/background.png';

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

  function handleSignIn({ document, password }: formData) {
    const { signIn } = useAuth();
    signIn(document, password);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} bg="bgAtende.blue" padding={10}>
        {/* <Image 
          source={background} 
          alt='Atende Vet'
          resizeMode='contain'
          position='absolute'
        /> */}
        <Center my={24} rounded={12}>
          <Text fontSize='xl' color='white' mb={10}>Seu pet, nossa missão!</Text>

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
          
          <Button title="Acessar" w="full" h="12" onPress={handleSubmit(handleSignIn)}/>
        </Center>
      </VStack>
    </ScrollView>
  )
}