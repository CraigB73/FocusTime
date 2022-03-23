import React from 'react';
import { View,  Image} from 'react-native';
import { Card } from 'react-native-paper';
import styled, { StyledComponent } from 'styled-components';
import { SvgXml } from 'react-native-svg';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  Info,
  RatingWrapper,
  Section,
  SectionEnd,
  Icon,
  RestaurantCard,
  RestaurantCardCover
} from './restaurant-info-card.styles';

// ********** SVG icon ****************
import star from '../../../../assets/star'
import open from '../../../../assets/open'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/700'],
    address = 'Some random at 100 address',
    rating = results.rating,
    isOpenNow = false,
    isClosedTemporarily = true,
    placeId, 
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  
  const IsOpen = () => {
    if(!isOpenNow){
      return  <Spacer position='top' size={1}>
      {isClosedTemporarily && <Text variant='error'>Closed Temporarily</Text>} 
      </Spacer>
    } else {
      return  <Spacer position='top' size={1}>
      {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
      </Spacer>
    }
  } 
  return (
    <RestaurantCard elevation= {5}>
      <RestaurantCardCover
        key={name}
        style={ RestaurantCardCover }
        source={{ uri: photos[0] }} 
      />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section >
          <RatingWrapper>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={i}
                rating={rating}
                xml={star}
                width={20}
                height={20} />))}
          </RatingWrapper>
            <SectionEnd>
              <Spacer position= 'right' size={2}>
              <IsOpen />
              </Spacer>
              <Icon source={{ uri: icon }} />
          </SectionEnd>
          </Section>
        
        <Text variant='caption'>{address}</Text>
      </Info>
   </RestaurantCard>
  );
}