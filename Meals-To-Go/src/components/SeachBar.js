import { View, Text } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';

export const  SeachBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}
