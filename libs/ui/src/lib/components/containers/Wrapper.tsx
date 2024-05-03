import { Container } from '@mui/material';
import { TsaWrapperProps } from '../../../utils/propTypes';

export const TsaWrapper: React.FC<TsaWrapperProps> = ({ children }) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: `81rem` }}>
      {children}
    </Container>
  );
};
