import styled from 'styled-components/native';
import { TouchableHighlight} from 'react-native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   padding-top: 20px;
   padding-bottom: 20px;
   padding-right: 15px;
   padding-left: 15px;
   flex-direction: row;
   justify-content: space-between;
`;

export const Title = styled.Text`
   font-size: 25px;
   font-weight: bold;
   border-left-color: ${({theme}) => theme.colors.primaryColor };
   padding-left: 10px;
   border-left-width: 3px;
`;

export const ButtonAdd = styled(TouchableHighlight)`
   border-color: ${({theme}) => theme.colors.primaryColor};
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 8px;
   padding-top: 8px;
   border-radius: 3px;
   border-width: 1px;
`;

export const TitleButton = styled.Text``;