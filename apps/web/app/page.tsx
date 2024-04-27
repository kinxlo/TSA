'use client';

import { Typography } from '@mui/material';
import { TsaButton } from '@tsa/ui';

export default function Home() {
  return (
    <div>
      <Typography>TSA WEB APP</Typography>
      <TsaButton
        name={`Create Course`}
        variant={undefined}
        size={undefined}
        rightIcon={undefined}
        leftIcon={undefined}
      />
    </div>
  );
}
