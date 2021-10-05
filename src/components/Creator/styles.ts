import styled from 'styled-components/native';
import { Pressable, Dimensions } from 'react-native';

export const Container = styled.Modal``;

export const CenteredView = styled.View`
   flex: 1px;
   justify-content: flex-end;
   background-color: rgba(255, 255, 255, 0.6);
`;

export const ModalView = styled.View`
   background-color: #f0f0f0;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   padding: 20px;
   height: ${Dimensions.get('window').height/2}px;

`;

export const  TopActions = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const Title = styled.Text`
   font-size: 16px;
   font-weight: bold;
`;

export const ButtonClose = styled(Pressable)`
   padding: 10px;
`;

export const TitleCloseButton = styled.Text`   
   font-weight: bold;
   font-size: 25px;
   color: ${({theme}) => theme.colors.grey};
`;

export const InputText = styled.TextInput`
   height: 50px;
   border-width: 1px;
   border-radius: 3px;
   margin-bottom: 10px;
   padding: 15px;
   border-color: ${({theme}) => theme.colors.grey};
`;

export const ButtonSave = styled(Pressable)`
   justify-content: center;
   align-items: center;
   height: 50px;
   margin-bottom: 10px;
   border-radius: 3px;
   background-color: ${({theme}) => theme.colors.primaryColor};
`;

export const TitleSaveButton = styled.Text`
   color: ${({theme}) => theme.colors.white};
   font-size: 16px;
`;