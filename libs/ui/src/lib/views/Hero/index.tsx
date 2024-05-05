import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { TsaButton } from '../../components/Button';
import { TsaWrapper } from '../../components/containers/Wrapper';
import { convertUnit as fn } from 'libs/ui/src/utils/fontsFn';
import React from 'react';
import { TsaHeroProps } from 'libs/ui/src/utils/propTypes';

export const TsaHero: React.FC<TsaHeroProps> = ({ content }) => {
  return (
    <Box bgcolor={`primary.main`} py={{ md: 10 }}>
      <TsaWrapper>
        <Box
          display={`flex`}
          alignItems={`center`}
          justifyContent={`space-between`}
          color={`primary.contrastText`}
          flexDirection={{
            xs: 'column-reverse',
            md: 'row',
          }}
        >
          <Box textAlign={{ xs: `center`, md: `initial` }}>
            <Typography
              fontWeight={`bold`}
              variant={`h1`}
              mb={2}
              lineHeight={1.5}
            >
              Unlock Your Tech <br /> Potential With Us Today
            </Typography>
            <Typography>
              Transform Your Career and Become a Skilled Tech Professional by
              Enrolling with techStudio Academy.
            </Typography>
            <Stack
              my={5}
              direction={{ sm: `row` }}
              alignItems={`center`}
              justifyContent={{ xs: `center`, md: `initial` }}
              gap={2}
            >
              <TsaButton
                sx={{
                  width: fn.rem(176),
                  height: fn.rem(48),
                }}
                name={'Explore Courses'}
              />
              <TsaButton
                sx={{
                  width: fn.rem(176),
                  height: fn.rem(48),
                  border: `1px solid #ffffff`,
                }}
                name={'Log in'}
                variant={`text`}
              />
            </Stack>
          </Box>

          <Box
            width={{ xs: `100%`, md: fn.rem(900) }}
            height={{ xs: fn.rem(400), md: fn.rem(484) }}
            position={`relative`}
          >
            <Image
              fill
              objectFit={`contain`}
              src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/home-hero-img.png`}
              alt={`hero-img`}
              priority
            />
          </Box>
        </Box>
      </TsaWrapper>
    </Box>
  );
};
