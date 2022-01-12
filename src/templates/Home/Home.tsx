import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import { LinkWrapper } from 'components/LinkWrapper/LinkWrapper';
import { MapProps } from 'components/Map/Map';

const Map = dynamic(() => import('components/Map/Map'), { ssr: false });

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
