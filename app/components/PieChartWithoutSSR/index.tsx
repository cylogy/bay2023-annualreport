'use client';

import React from 'react';
import Typography from '../Typography';
import { Cell, Pie, PieChart } from 'recharts';

type Props = {
  data: {
    value: number;
    name: string;
    color: string;
  }[];
};

const PieChartWithoutSSR = ({ data }: Props) => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    [key: string]: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) + 10;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 10;
    if (percent >= 0.06)
      return (
        <text
          x={x}
          y={y}
          fill="#0A215B"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          style={{ fontSize: '44px', fontWeight: 400, fontFamily: 'Anton' }}
        >
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      );
  };

  return (
    <div className="desktop:flex-row desktop:m-0 mb-9 flex w-full flex-col items-center justify-center gap-9">
      <div className="desktop:w-4/12 flex w-full flex-col">
        {data.map(({ name, value, color }, index) => (
          <div className="border-dark-blue text-dark-gray flex w-full items-center justify-between border-b py-2">
            <div className="flex gap-x-4">
              <div
                className="block h-7 w-7"
                style={{
                  backgroundColor: color,
                  border: color === '#FFFFFF' ? '#0A215B 1px solid' : 'none',
                }}
              >
                &nbsp;
              </div>
              <Typography
                as="p"
                className="desktop:text-caption-desktop tablet:text-caption-tablet text-caption-mobile"
              >
                {name}
              </Typography>
            </div>
            <Typography
              as="p"
              className="desktop:text-caption-desktop-bold tablet:text-caption-tablet-bold text-caption-mobile-bold desktop:font-caption-desktop-bold tablet:font-caption-tablet-bold font-caption-mobile-bold"
            >
              {(value * 100).toFixed(1)}%
            </Typography>
          </div>
        ))}
        <div className="text-dark-gray flex w-full items-center justify-between border-t border-white pt-4">
          <Typography as="h5">Total</Typography>
          <Typography as="h5">100%</Typography>
        </div>
      </div>
      <div className="border-dark-blue desktop:w-8/12 flex w-full flex-col items-center justify-center rounded-[20px] border bg-white p-5">
        <PieChart width={530} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            rotate={'45deg'}
            fill="#000000"
            dataKey="value"
            startAngle={-270}
          >
            {data.reverse().map((entry, index) => (
              <Cell stroke="#000000" key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartWithoutSSR;
