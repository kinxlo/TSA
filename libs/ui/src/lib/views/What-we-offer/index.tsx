import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { TsaWrapper } from '../../components/containers/Wrapper';
import { TsaCarousel } from '../../components/Carousel';
import { HOME_CONTENT } from 'content/home';
import { convertUnit as fn } from 'libs/ui/src/utils/fontsFn';

export const WhatWeOffer = () => {
  const {
    sectionThree: { cards },
  } = HOME_CONTENT;
  return (
    <Box bgcolor={`secondary.light`} py={5}>
      <TsaWrapper>
        <React.Fragment>
          <Box textAlign={`center`} mb={5}>
            <Typography variant={`body1`} fontWeight={700} color={`secondary`}>
              WHAT WE OFFER
            </Typography>
            <Typography variant={`h4`} mt={1} mb={3}>
              Certified Tech Training Courses
            </Typography>
            <Container disableGutters maxWidth={`sm`}>
              <Typography>
                Explore our extensive selection of highly sought-after
                beginner-friendly tech courses, meticulously designed to empower
                and inspire learners at every step of their educational journey.
              </Typography>
            </Container>
          </Box>
          <Box mt={5}>
            <TsaCarousel courses={cards} />
          </Box>
        </React.Fragment>
      </TsaWrapper>
    </Box>
  );
};
