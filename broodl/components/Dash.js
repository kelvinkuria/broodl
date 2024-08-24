"use client";

import React from 'react';
import { Fugaz_One } from 'next/font/google';
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });
export default function Dash() {
  const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
  };

  return (
    <div className='flex flex-col flex-1'>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex}>
              <p className='font-medium uppercase'>{status.replaceAll("_",'')}</p>
              <p className={'' + fugaz.className}>{statuses[status]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

