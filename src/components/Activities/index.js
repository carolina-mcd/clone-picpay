import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atvidades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@rafael.domingues</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Ana Carolina</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 1800,00</Value>

            <Divider />

            <Feather name='lock' color='#fff' size={14} />
            <Date>há 2 meses</Date>
                       
            
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name='comment-outline' size={14} color='#fff' />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name='hearto' size={14} color='#fff' />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}