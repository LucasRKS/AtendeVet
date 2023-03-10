import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({errorMessage, isInvalid, ...rest}:Props) {
  const invalid = !!errorMessage || isInvalid;
    
  return(
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        h={12}
        px={4}
        borderWidth={1}
        borderColor='gray.100'
        fontSize="md"
        color="black"
        fontFamily="body" 
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500'
        }}
        _focus={{
          borderWidth: 1,
          borderColor: 'primary.100'
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  ); 
}