import React, {useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding-bottom: ${(props) => props.theme.space[2]}
  `;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

 
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text)
        }}
      />
    </SearchContainer>  
  )
}
