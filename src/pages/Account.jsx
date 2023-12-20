import styled from 'styled-components';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <Box>
          <UpdateUserDataForm />
        </Box>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <Box>
          <UpdatePasswordForm />
        </Box>
      </Row>
    </>
  );
}

export default Account;
