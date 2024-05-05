import { Box, Stack, Typography } from '@mui/material';
import { TsaWrapper } from '../../components/containers/Wrapper';
import React from 'react';
import { TsaCardIllustration_1 as TsaCardIllustration1 } from '../../components/CardIllustration-1';
import Link from 'next/link';

export const WhyTechstudio = () => {
  return (
    <Box>
      <TsaWrapper>
        <React.Fragment>
          <Box textAlign={`center`} mb={5}>
            <Typography variant={`body1`} fontWeight={700} color={`secondary`}>
              WHY TECHSTUDIO?
            </Typography>
            <Typography variant={`h4`} my={2}>
              We Are Customer-Centric
            </Typography>
            <Typography mb={1}>
              We give our students an all round experience by providing extra
              value to ensure you excel in your <br /> chosen course..
            </Typography>
            <Link href={`/about-us`}>
              <Typography sx={{ textDecoration: `underline` }}>
                Read More
              </Typography>
            </Link>
          </Box>
          <Stack
            direction={{ md: `row` }}
            alignItems={`center`}
            justifyContent={`space-between`}
          >
            <TsaCardIllustration1
              image={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/learning-enviroment.webp`}
              title={`Great learning Environment`}
              description={
                'We provide you with the best learning facility you can lay your eyes on. All our classes are conducive, en-suite and equipped with high-speed internet and the latest technologies for learning.'
              }
            />
            <TsaCardIllustration1
              image={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/expirenced-tutors.webp`}
              title={`Experienced Tutor`}
              description={
                'Our tutors are highly skilled professionals that are chosen based on industry experience and teaching ability. Our support team provides students with guidance and tips on building a top-notch portfolio that woos employers.'
              }
            />
            <TsaCardIllustration1
              image={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/career-support.webp`}
              title={`Career Support`}
              description={
                'We offer you the best support - either while you’re learning or after you’ve graduated. Our support team provides students with guidance and tips on building a top-notch portfolio that woos employers.'
              }
            />
          </Stack>
        </React.Fragment>
      </TsaWrapper>
    </Box>
  );
};
