import React from 'react';

import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';
import { Info, Image } from './Phylogeny.styled';
import { MediaItem } from 'lib/types';
import { getStrapiMedia } from 'lib/api/strapi';

export interface Props {
  title: string;
  text: string;
  image: MediaItem;
}

const Phylogeny = ({ title, text, image }: Props) => (
  <Section background="dprimary" isRow>
    <Info>
      <HeadingXLarge>{title}</HeadingXLarge>
      <LargeText>{text}</LargeText>
    </Info>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png"
      alt=""
      width={1024}
      height={585}
    />
  </Section>
);

export default Phylogeny;
