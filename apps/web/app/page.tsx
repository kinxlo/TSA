// "use client"

import { TsaButton } from '@tsa/ui';

export default function Index() {
  return (
    <div className={`h-screen`}>
      <h1 className={`text-center text-blue-500 text-3xl font-bold`}>
        TSA WEB APP
      </h1>
      <TsaButton name={'TSa Button'} />
    </div>
  );
}
