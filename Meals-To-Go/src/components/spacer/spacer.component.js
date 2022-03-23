import React, { Children } from "react";
import styled, { StyledComponent, useTheme } from 'styled-components/native';





const positionsVariant = {
  top: 'margin-top',
  right: 'margin-right',
  left: 'margin-left',
  bottom: 'margin-bottom',
  
}

const getVariant = (position, size, theme) => {
  const property = positionsVariant[position];
  const value = theme.space[size];
  return `${property}: ${value}`
};
// This allows for your styling to work on android by reversing the 
const SpacerView = styled.View`
  ${({ variant }) => variant}`

export const Spacer = ({position, size, children})=>{
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{ children}</SpacerView>
  
}

Spacer.defaultProps = {
  position:'top',
  size: 1
}
