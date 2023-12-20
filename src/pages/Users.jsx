import styled from 'styled-components';
import SignupForm from '../features/authentication/SignupForm';
import Heading from '../ui/Heading';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <Box>
        <SignupForm />
      </Box>
    </>
  );
}

export default NewUsers;
