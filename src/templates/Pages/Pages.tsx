import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LinkWrapper } from 'components/LinkWrapper/LinkWrapper';

import { Body, Content, Heading } from './styles';

export const PagesTemplate = ({ heading, body }: PageTemplateProps) => (
  <Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <Heading>{heading}</Heading>

    <Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Body>
  </Content>
);

export type PageTemplateProps = {
  heading: string;
  body: string;
};
