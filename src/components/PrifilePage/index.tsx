import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';

const PrifilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Rafael Lima</h1>
        <h2>@rafalima_14028</h2>

        <p>
          Free time <a href="https://github.com/RafaLima14028">programmer</a> 🥱
        </p>

        <ul>
          <li>
            <LocationIcon />
            Uberlândia, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de fevereiro de 2003
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default PrifilePage;
