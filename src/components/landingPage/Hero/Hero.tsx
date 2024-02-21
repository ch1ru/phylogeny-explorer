import React from 'react';
import { useRouter } from 'next/router';

import { MediaItem } from 'lib/types';
import useUser from 'lib/hooks/useUser';
import { Wrapper, Title, Subtitle, LargeButton } from './Hero.styled';
import backgroundImage from '../../../../public/images/barnacle.png';

export interface Props {
  title: string;
  subtitle: string;
  cta: string;
  background: MediaItem;
}

const Hero = ({ title, subtitle, cta, background }: Props) => {
  const router = useRouter();
  const { isLoggedIn } = useUser();
  return (
    <Wrapper backgroundUrl={backgroundImage.src}>
      <Title>Explore The Beauty of Evolution</Title>
      <Subtitle>A navigable, online encyclopedia, of the entire evolutionary tree of life</Subtitle>
      <LargeButton
        onClick={() => router.push(isLoggedIn ? 'tree' : '/signup')}
        text="Get started!"
      ></LargeButton>
    </Wrapper>
  );
};

export default Hero;
