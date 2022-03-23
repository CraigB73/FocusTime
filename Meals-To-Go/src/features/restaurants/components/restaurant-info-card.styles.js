import styled from "styled-components/native";
import { Card } from 'react-native-paper';

 


// ********* Styles using Styled-Component library see Note *********


export const Info = styled.View`
  padding: ${(props => props.theme.space[2])};
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  margin-top: 5px;
  padding-top: ${(props => props.theme.space[2])};
  padding-bottom: ${(props => props.theme.space[2])};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icon = styled.Image`
 margin-Top: 4px;
 width: 20px; 
 height: 20px;
 `;
 export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props => props.theme.space[2])};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};  
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

