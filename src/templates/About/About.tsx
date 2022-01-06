import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LinkWrapper } from 'components/LinkWrapper/LinkWrapper';

import { Body, Content, Heading } from './styles';

export const AboutTemplate = () => (
  <Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <Heading>My Trips</Heading>

    <Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptatem corrupti est iusto accusantium excepturi deleniti a libero
        quaerat quae reiciendis dolorum ipsam mollitia error debitis nisi,
        dolorem quasi reprehenderit.
      </p>
    </Body>
  </Content>
);
