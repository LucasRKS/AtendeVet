import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }:Props) {
  return(
    <NativeBaseButton
      rounded="sm"
      h={14} 
      my={8}
      {...rest}
    >
      <Text fontSize='lg' color='white' fontFamily='heading'>
        {title}
      </Text>
    </NativeBaseButton>
  );
}