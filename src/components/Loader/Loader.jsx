import React from 'react';
import  {Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader">
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
}
