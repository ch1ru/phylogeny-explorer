import React from 'react';
import Image from 'next/image';

import { MediaItems } from 'lib/types';
import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';
import { Images } from './About.styled';
import { getStrapiMedia } from 'lib/api/strapi';

export interface Props {
  title: string;
  text: string;
  images: MediaItems;
}

const About = ({ title, text, images }: Props) => (
  <Section background="dsecondary">
    <HeadingXLarge>{title}</HeadingXLarge>
    <LargeText>{text}</LargeText>
    <Images>
      <Image
          src="/images/feature_tree_info.png"
          alt=""
          width={1440}
          height={914}
        />
      <Image src="/images/feature_wiki.png" alt="" width={1440} height={914} />
    </Images>
  </Section>
);

export default About;
