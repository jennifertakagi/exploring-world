import Image from 'next/image';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { Body, Container, Gallery, Heading, Wrapper } from './styles';
import { useRouter } from 'next/dist/client/router';
import { LinkWrapper } from 'components/LinkWrapper/LinkWrapper';

export function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Wrapper>
        <Container>
          <Heading>{place.name}</Heading>

          <Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </Gallery>
        </Container>
      </Wrapper>
    </>
  );
}
export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

type ImageProps = {
  url: string;
  height: number;
  width: number;
};
