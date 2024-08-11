import React from 'react';

const ErrorMessage = ({ error, touched }) => {
  if (!error || !touched) return null;

  return <div className="text-red-500 text-sm">{error}</div>;
};

export default ErrorMessage;
