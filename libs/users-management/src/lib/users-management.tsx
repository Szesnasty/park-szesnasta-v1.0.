import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UsersManagementProps {}

const StyledUsersManagement = styled.div`
  color: pink;
`;

export const UsersManagement = (props: UsersManagementProps) => {
  return (
    <StyledUsersManagement>
      <h1>Welcome to users-management!</h1>
    </StyledUsersManagement>
  );
};

export default UsersManagement;
