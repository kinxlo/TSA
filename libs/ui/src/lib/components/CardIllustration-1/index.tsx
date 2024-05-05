import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { convertUnit as fn } from 'libs/ui/src/utils/fontsFn';
import Typography from '@mui/material/Typography';
import React from 'react';
import { TsaCardIllustration_1Props } from 'libs/ui/src/utils/propTypes';
import Image from 'next/image';
import { Box } from '@mui/material';

export const TsaCardIllustration_1: React.FC<TsaCardIllustration_1Props> = ({
  image,
  title,
  description,
  ...props
}) => {
  return (
    <Card elevation={0} sx={{ maxWidth: 373, textAlign: `center` }} {...props}>
      <Box height={fn.rem(100)} position={`relative`}>
        <Image
          fill
          objectFit={`contain`}
          src={
            image ||
            `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879014/techstudio/images/Group_1000002452_dtfdi4_hwvx6m_ex07h0.png`
          }
          alt={`card-img`}
          priority
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          fontSize={fn.rem(24)}
          fontWeight={700}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
