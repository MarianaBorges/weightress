import React from 'react';

import {
   Container,
   Title,
   ButtonAdd,
   TitleButton
} from './styles';

interface Props {
   onOpenCreator: ()=> void;
}

export function Header({onOpenCreator}:Props){
   return (
      <Container>
         <Title>Weightress</Title>
         <ButtonAdd
            onPress={()=> onOpenCreator()}
         >
            <TitleButton>+ Add</TitleButton>
         </ButtonAdd>
      </Container>
 );
}