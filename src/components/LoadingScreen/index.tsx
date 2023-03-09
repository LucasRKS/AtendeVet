import { Center, Spinner } from 'native-base'

export function LoadingScreen() {
    return(
        <Center flex={1} bg="primary.100">
            <Spinner size="lg" accessibilityLabel="Carregando aplicação" />
        </Center>
    )
}