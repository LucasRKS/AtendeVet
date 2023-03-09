import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }:Props) {
  return(
    <NativeBaseButton
      fontFamily="heading"
      rounded="sm"
      {...rest}
    >
      <Text>
        {title}
      </Text>
    </NativeBaseButton>
  );
}