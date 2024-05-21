'use client';

import React from 'react';
import Typography from '../Typography';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useWindowWidth } from '@/hooks/useWindowWidth';

type Props = {
  data: {
    value: number;
    name: string;
    color: string;
    sup?: string;
  }[];
};

const PieChartWithoutSSR = ({ data }: Props) => {
  const screenWidth = useWindowWidth();

  const RADIAN = Math.PI / 180;

  let fontSize = '44px';
  let factor = 1.3;
  let radius = 153;
  let offset = 10;
  let size = 300;

  if (screenWidth <= 480) {
    fontSize = '16px';
    factor = 1.15; // Adjust font size for the breakpoint
    radius = 74;
    offset = 5;
    size = 150;
  }

  if (screenWidth >= 481 && screenWidth <= 1025) {
    fontSize = '20px';
    factor = 1.2; // Adjust font size for the breakpoint
    radius = 85;
    offset = 5;
    size = 170;
  }

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
    const radius = innerRadius + (outerRadius - innerRadius) * factor;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) + offset;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - offset;
    if (percent >= 0.06)
      return (
        <text
          x={x}
          y={y}
          fill="#0A215B"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          style={{ fontSize, fontWeight: 400, fontFamily: 'Anton' }}
        >
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      );
  };

  const reversedData = data.reverse();

  return (
    <div className="mb-9 flex w-full flex-col items-center justify-center gap-9 desktop:m-0 desktop:flex-row">
      <div className="flex w-full flex-col desktop:w-4/12">
        {data.map(({ name, value, color, sup }, index) => (
          <div
            key={`${index}-${value}`}
            className="flex w-full items-center justify-between border-b border-dark-blue py-2 text-dark-gray"
          >
            <div className="flex items-center justify-start gap-x-4">
              <div
                className="block h-7 w-7 flex-shrink-0"
                style={{
                  backgroundColor: color,
                  border: color === '#FFFFFF' ? '#0A215B 1px solid' : 'none',
                }}
              >
                &nbsp;
              </div>
              <Typography
                as="p"
                className="tablet:text-caption-tablet flex-wrap whitespace-pre-wrap text-caption-mobile desktop:text-caption-desktop"
              >
                {name} {sup && <sup>{sup}</sup>}
              </Typography>
            </div>
            <Typography
              as="p"
              className="tablet:text-caption-tablet-bold tablet:font-caption-tablet-bold ml-4 text-caption-mobile-bold font-caption-mobile-bold desktop:text-caption-desktop-bold desktop:font-caption-desktop-bold"
            >
              {(value * 100).toFixed(1)}%
            </Typography>
          </div>
        ))}
        <div className="flex w-full items-center justify-between pt-4 text-dark-gray">
          <Typography as="h5">Total</Typography>
          <Typography as="h5">100%</Typography>
        </div>
      </div>
      <div className="flex h-[210px] w-full flex-col items-center justify-center overflow-hidden rounded-[20px] border border-dark-blue bg-white tablet-portrait:h-[243px] tablet-landscape:h-[464px] desktop:h-[464px] desktop:w-8/12 desktop:p-5">
        <ResponsiveContainer>
          <PieChart width={size} height={size}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={radius}
              rotate={'45deg'}
              fill="#000000"
              dataKey="value"
              startAngle={-270}
            >
              {reversedData.map((entry, index) => (
                <Cell
                  stroke="#000000"
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartWithoutSSR;
