import styled from 'styled-components';

interface HeroInterface {
  imageUrl: string;
}

export const Hero = styled.div<HeroInterface>`
  height: 70vh;
  background-image: url('${({ imageUrl }) => imageUrl}');
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    background-image: url('https://www.teahub.io/photos/full/304-3042882_pokemon-ash-wallpaper-iphone.jpg');
    align-items: flex-start;
  }
`;
