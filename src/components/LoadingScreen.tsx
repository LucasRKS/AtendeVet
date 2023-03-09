import { Center, Spinner } from 'native-base'

export function LoadingScreen() {
  return(
    <Center flex={1} bg="bgAtende.blue">
      <Spinner size="lg" accessibilityLabel="Carregando aplicação" />
    </Center>
  )
}