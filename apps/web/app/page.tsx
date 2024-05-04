import { Box } from '@mui/material';
import { convertUnit as fn } from '@tsa/ui';
import { TsaHero } from '@tsa/ui/server';

export default function Home() {
  return (
    <>
      <Box mt={fn.rem(96)}>
        <TsaHero />
      </Box>
    </>
  );
}
