import styled from 'styled-components';
import LightLogo from './../data/img/logo-light.png';
import DarkLogo from './../data/img/logo-dark.png';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/useDarkMode';

const StyledLogo = styled.div`
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? DarkLogo : LightLogo;

  return (
    <StyledLogo onClick={() => navigate('/')}>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
