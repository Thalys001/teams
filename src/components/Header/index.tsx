import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackIcon, BackButton } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    // navigation.goBack(); - voltar para tela anterior
    navigation.navigate('groups'); // - voltar para o inicio
    // navigation.popToTop(); // - voltar para o inicio
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}