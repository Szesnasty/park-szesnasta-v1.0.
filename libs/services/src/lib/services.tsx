import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ServicesProps {}

const StyledServices = styled.div`
  color: pink;
`;

export const Services = (props: ServicesProps) => {
  return (
    <StyledServices>
      <h1>Welcome to services!</h1>
    </StyledServices>
  );
};

export default Services;
