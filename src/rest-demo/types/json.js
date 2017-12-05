import React from 'react';

const example = {
  products: [
    {
      name: 'Tesco Bank Current Account',
      holding: 100,
      start: 454545356464,
      identity: {
        sortcode: '405060',
        number: '37482956',
        psd2: 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce4'
      },
      checkpoints: {
        383946748590482: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4',
        383946748374285: 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01e',
        383946748597586: '56713922806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4',
        383946756776285: 'ab45628c832fed28ab87c3622c5114069bdd3ad7b8f9737498d0c01e',
        383946748676672: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4',
        383946748657007: '58e83993ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01e',
      }
    },
    {
      name: 'First Direct Joint Current Account',
      holding: 50,
      start: 226864864864,

      identity: {
        sortcode: '426783',
        number: '9979939443',
        psd2: '66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d23325235346211d828a845b'
      },
      checkpoints: {
        383946748590482: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4',
        383946748374285: 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01e',
        383946748597586: '56713922806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4',
        383946756776285: 'ab45628c832fed28ab87c3622c5114069bdd3ad7b8f9737498d0c01e',
        383946748676672: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4',
        383946748657007: '58e83993ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01e',
      }
    }
  ],

  views: [
    {
      name: 'full access',
      products: [ 0, 1 ],
      start: 0,
      end: 0,
      cache: false,
      anonymous: false,
      key: '8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737d54322352a'
    },
    {
      name: 'joint assets',
      products: [ 1 ],
      start: 54645575775,
      end: 0,
      cache: true,
      anonymous: false,
      key: '1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f6'
    }
  ],

  requestedUpdates: [
    {

    }
  ]
};

export default (<pre id='code'>{JSON.stringify(example, null, 2)}</pre>);