import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContextActionsProps {}

const StyledContextActions = styled.div`
  color: pink;
`;

export const ContextActions = (props: ContextActionsProps) => {
  return (
    <StyledContextActions>
      <h1>Welcome to context-actions!</h1>
    </StyledContextActions>
  );
};

export default ContextActions;
