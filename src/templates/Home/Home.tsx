import { NextSeo } from 'next-seo';

import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import { LinkWrapper } from 'components/LinkWrapper/LinkWrapper';
import { MapProps } from 'components/Map/Map';

const Map = dynamic(() => import('components/Map/Map'), { ssr: false });

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Exploring World"
        description="An app to explore the world through travel!"
        canonical=""
        openGraph={{
          url: '',
          title: 'Exploring World',
          description: 'An app to explore the world through travel!',
          images: [
            {
              url: 'https://github.com/jennifertakagi/exploring-world/blob/main/docs/exploring-world.png',
              width: 1280,
              height: 720,
              alt: 'Exploring World',
            },
          ],
          site_name: 'Exploring World',
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
