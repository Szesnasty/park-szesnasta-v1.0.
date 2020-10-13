import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreProps {}

const StyledStore = styled.div`
  color: pink;
`;

export const Store = (props: StoreProps) => {
  return (
    <StyledStore>
      <h1>Welcome to store!</h1>
    </StyledStore>
  );
};

export default Store;
