import { Box } from '@mui/material';
import { WhatWeOffer, convertUnit as fn } from '@tsa/ui';
import { TsaHero, WhyTechstudio } from '@tsa/ui/server';

export default function Home() {
  return (
    <>
      <Box mt={fn.rem(96)}>
        <TsaHero />
      </Box>
      <Box my={5}>
        <WhyTechstudio />
      </Box>
      <Box my={5}>
        <WhatWeOffer />
      </Box>
    </>
  );
}
