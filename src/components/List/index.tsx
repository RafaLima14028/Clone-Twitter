import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: String;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>

        {elements.map((element, index) => (
          <Item key={index}>{element}</Item>
        ))}
      </Item>
    </Container>
  );
};

export default List;
