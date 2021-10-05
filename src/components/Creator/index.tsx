import React, { useState } from 'react';

import {
   Container,
   CenteredView,
   ModalView,
   TopActions,
   Title,
   ButtonClose,
   TitleCloseButton,
   InputText,
   ButtonSave,
   TitleSaveButton,
} from './styles';

import { saveWeight } from '../../database/helpers';

interface Props {
   isCreatorVisible: boolean;
   onHideCreator: () => void;
}

export function Creator({isCreatorVisible, onHideCreator} : Props){
  
   const [ isSaving, setIsSaving ] = useState(false);
   const [ weight, setWeight] = useState('');
   const [ note, setNote] = useState('');

   async function handleSavePress (){
      setIsSaving(true);
      await saveWeight({weight,note});
      onHideCreator();
      setWeight('');
      setNote('');
      setIsSaving(false);
   }

   return (
      <Container animationType="slide" transparent={true} visible={isCreatorVisible}>
         <CenteredView>
            <ModalView>
               <TopActions>
                  <Title>Add your weight</Title>
                  <ButtonClose onPress={onHideCreator}>
                     <TitleCloseButton>x</TitleCloseButton>
                  </ButtonClose>
               </TopActions>

               <InputText
                  placeholder="Your weight"
                  keyboardType="decimal-pad"
                  onChangeText={setWeight}
                  value={weight}
               />
               <InputText 
                  placeholder="Additional note (optional)"
                  onChangeText={setNote}
                  value={note}
               />

               <ButtonSave 
                  disabled={isSaving} 
                  onPress={handleSavePress}
               >
                  <TitleSaveButton>Save</TitleSaveButton>
               </ButtonSave>

            </ModalView>
         </CenteredView>

      </Container>
 );
}