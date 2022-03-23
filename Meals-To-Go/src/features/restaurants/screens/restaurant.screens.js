import React, {useContext} from 'react';

import { View, FlatList} from 'react-native';
import styled from 'styled-components';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { SeachBar } from '../../../components/SeachBar';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants.context';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';


// fix the background-color to dynamically add bottom padding on last card


const ViewWrapper = styled(View)` 
 
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary}
  
`;
const SearcBarContainer = styled(View)`
  padding-bottom: ${(props) => props.theme.space[2]}
  `;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%; 
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const RestaurantScreens = () => {

  const {isLoading, error, restaurants} = useContext(RestaurantContext);
  return (
    <>
      <SafeArea>
        {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={Colors.blue400} 
            />
          </LoadingContainer>
        )}
        <ViewWrapper>
         <Search/>
          <FlatList
            data={restaurants}
  i          renderItem={({ item }) => {
              return (
                <Spacer position='bottom' size='2'>
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>) 
            }
            }
            keyExtractor={(item) => item.name}
            
          />
        </ViewWrapper>
      </SafeArea>
      

    </>
    
  );
}
// const styles = StyleSheet.create({
// });