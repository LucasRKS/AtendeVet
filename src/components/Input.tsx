import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({... rest}:IInputProps) {
  return(
    <NativeBaseInput
      h={12}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body" 
      mb={4}
      _focus={{
        borderWidth: 1
      }}

      {...rest}
    />
  ); 
}