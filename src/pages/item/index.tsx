import React from 'react';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

function ItemHome() {
  return null;
}

export default ItemHome;
