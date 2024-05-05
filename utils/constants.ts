export const links = [
  { id: 'introduction', title: 'INTRODUCTION', to: '/introduction' },
  { id: 'achievements', title: 'ACHIEVEMENTS', to: '/achievements' },
  { id: 'air-quality', title: 'AIR QUALITY', to: '/air-quality' },
  { id: 'community', title: 'COMMUNITY', to: '/community' },
  { id: 'incentives', title: 'INCENTIVES', to: '/incentives' },
  { id: 'by-the-numbers', title: 'BY THE NUMBERS', to: '/by-the-numbers' },
  { id: 'advocacy', title: 'ADVOCACY', to: '/advocacy' },
  { id: 'about-us', title: 'ABOUT US', to: '/about-us' },
];

export const footerLinks = [
  { id: 'accessibility', title: 'Accessibility', to: '#' },
  { id: 'tos', title: 'Terms of Use', to: '#' },
  { id: 'privacy', title: 'Privacy Policy', to: '#' },
];

export const contactPhones = [
  { id: 1, title: '(415) 749-5000', number: '4157495000' },
  { id: 2, title: '1-800-HELP-AIR', number: '4157495000' },
  { id: 3, title: '877-4N0-BURN', number: '4157495000' },
];

export const emissionsCarouselCards = [
  {
    id: 1,
    header: 'OFF-ROAD EQUIPMENT AND INFRASTRUCTURE',
    mainTitle: {
      left: 'TOTAL FUNDS AWARDED',
      right: '$7.01M',
    },
    subTitle:
      'Estimated Annual Emissions Reduction for the Projects Funded (tons/year)',
    statsList: [
      {
        statistic: 'Oxides of Nitrogen (NOx)',
        value: '98.5',
      },
      {
        statistic: 'Reactive Organic Compounds (ROG)',
        value: '7.6',
      },
      {
        statistic: 'Source-Oriented Analyses',
        value: '17',
      },
      {
        statistic: 'Particulate Matter (PM10)',
        value: '3.5',
      },
    ],
    bottomList: [
      {
        subheader: 'Total',
        value: '109.6',
      },
    ],
  },
  {
    id: 2,
    header: 'On-Road Vehicles and Infrastructure',
    mainTitle: {
      left: 'TOTAL FUNDS AWARDED',
      right: '$21.60M',
    },
    subTitle:
      'Estimated Annual Emissions Reduction for the Projects Funded (tons/year)',
    statsList: [
      {
        statistic: 'Oxides of Nitrogen (NOx)',
        value: '3.0',
      },
      {
        statistic: 'Reactive Organic Compounds (ROG)',
        value: '0.3',
      },
      {
        statistic: 'Particulate Matter (PM10)',
        value: '0.0',
      },
    ],
    bottomList: [
      {
        subheader: 'Total',
        value: '3.3',
      },
    ],
  },
  {
    id: 3,
    header: 'Other Projects (Including Trip Reduction)',
    mainTitle: {
      left: 'TOTAL FUNDS AWARDED',
      right: '$1.91M',
    },
    subTitle:
      'Estimated Annual Emissions Reduction for the Projects Funded (tons/year)',
    statsList: [
      {
        statistic: 'Oxides of Nitrogen (NOx)',
        value: '7.2',
      },
      {
        statistic: 'Reactive Organic Compounds (ROG)',
        value: '8.9',
      },
      {
        statistic: 'Particulate Matter (PM10)',
        value: '22.6',
      },
    ],
    bottomList: [
      {
        subheader: 'Total',
        value: '38.7',
      },
    ],
  },
  {
    id: 4,
    header: 'Congestion Management Agency Projects',
    mainTitle: {
      left: 'TOTAL FUNDS AWARDED',
      right: '$12M',
    },
    subTitle:
      'Estimated Annual Emissions Reduction for the Projects Funded (tons/year)',
    statsList: [
      {
        statistic: 'Oxides of Nitrogen (NOx)',
        value: '12.7',
      },
      {
        statistic: 'Reactive Organic Compounds (ROG)',
        value: '15.4',
      },
      {
        statistic: 'Particulate Matter (PM10)',
        value: '38.1',
      },
    ],
    bottomList: [
      {
        subheader: 'Total',
        value: '66.2',
      },
    ],
  },
];

export const permittingActivityCards = [
  {
    id: 1,
    subTitle: 'Bay Area Permitted Facilities',
    statsList: [
      {
        statistic: 'Refineries',
        value: '5',
      },
      {
        statistic: 'Major Facilities (excludes refineries)',
        value: '73',
      },
      {
        statistic: 'Gasoline Dispensing Facilities',
        value: '2,264',
      },
      {
        statistic: 'All Other Facilities',
        value: '8,090',
      },
    ],
    bottomList: [
      {
        subheader: 'Total Permitted Facilities',
        value: '10,432',
      },
      {
        separator: true,
        subheader: 'Permitted Devices and Operations',
        value: '23,325',
      },
    ],
  },
  {
    id: 2,
    subTitle: 'New Permit Applications',
    statsList: [
      {
        statistic: 'Major Source Review (Title V)',
        value: '47',
      },
      {
        statistic: 'New Source Review (NSR)',
        value: '907',
      },
      {
        statistic: 'All other applications',
        value: '42',
      },
    ],
    bottomList: [
      {
        subheader: 'Total New Permits Applications',
        value: '996',
      },
    ],
  },
  {
    id: 3,
    subTitle: 'Application Health Risk Assessments',
    statsList: [
      {
        statistic: 'Diesel Engines',
        value: '243',
      },
      {
        statistic: 'Gasoline Dispensing Facilities',
        value: '8',
      },
      {
        statistic: 'Other Commercial/Industrial Facilities',
        value: '56',
      },
    ],
    bottomList: [
      {
        subheader: 'Total Health Risk Assessments',
        value: '307',
      },
    ],
  },
  {
    id: 4,
    subTitle: 'Facility Health Risk Assessments',
    statsList: [
      {
        statistic: 'Preliminary',
        value: '0',
      },
      {
        statistic: 'Droft',
        value: '0',
      },
      {
        statistic: 'Final',
        value: '0',
      },
    ],
    bottomList: [
      {
        subheader: 'Total Facility Health Risk Assessments',
        value: '0',
      },
    ],
  },
];

export const airPollutionStats = [
  {
    id: '1',
    stat: 'Odor',
    val1: '2,165',
    val2: '49.0%',
  },
  {
    id: '2',
    stat: 'Wood Smoke',
    val1: '1,434',
    val2: '32.5%',
  },
  {
    id: '3',
    stat: 'Dust',
    val1: '260',
    val2: '5.9%',
  },
  {
    id: '4',
    stat: 'Smoke',
    val1: '174',
    val2: '3.9%',
  },
  {
    id: '5',
    stat: 'Asbestos',
    val1: '119',
    val2: '2.7%',
  },
  {
    id: '6',
    stat: 'Outdoor Fires',
    val1: '115',
    val2: '2.6%',
  },
  {
    id: '7',
    stat: 'Other*',
    val1: '95',
    val2: '2.1%',
  },
  {
    id: '8',
    stat: 'Gas Stations',
    val1: '29',
    val2: '0.7%',
  },
  {
    id: '9',
    stat: 'Idling Commercial Vehicles',
    val1: '28',
    val2: '0.6%',
  },
];

export const complianceStats = [
  {
    id: '1',
    stat: 'Source Inspections',
    val1: '4,755',
  },
  {
    id: '2',
    stat: 'Air Pollution Complaints (excludes smoking vehicles)',
    val1: '3,768',
  },
  {
    id: '3',
    stat: 'Gasoline Dispensing Facility Inspections',
    val1: '965',
  },
  {
    id: '4',
    stat: 'Asbestos Inspections',
    val1: '2,070',
  },
  {
    id: '5',
    stat: 'Reportable Compliance Activities',
    val1: '734',
  },
  {
    id: '6',
    stat: 'Diesel Compliance and Grant Inspections',
    val1: '125',
  },
  {
    id: '7',
    stat: 'Portable Equipment Registration Program (PERP) Inspections',
    val1: '7',
  },
  {
    id: '8',
    stat: 'Open Burn Inspections',
    val1: '4',
  },
  {
    id: '9',
    stat: 'Naturally Occurring Asbestos (NOA) Inspections',
    val1: '549',
  },
];

export const sourceTestStats = [
  {
    id: '1',
    stat1: {
      stat: 'Refinery Source Tests',
      value: '12',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '100%',
    },
  },
  {
    id: '2',
    stat1: {
      stat: 'Title V Source Tests (excludes refineries)',
      value: '19',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '94.7%',
    },
  },
  {
    id: '3',
    stat1: {
      stat: 'Non-Title V Source Tests',
      value: '13',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '92.3%',
    },
  },
  {
    id: '4',
    stat1: {
      stat: 'Synthetic Minor Source Tests',
      value: '3',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '66.7%',
    },
  },
  {
    id: '5',
    stat1: {
      stat: 'Gasoline Cargo Tanks',
      value: '127',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '97.6%',
    },
  },
  {
    id: '6',
    stat1: {
      stat: 'Other Facility Source Tests Reviewed in 2023 (contractors)',
      value: '338',
    },
    stat2: {
      stat: 'Compliance Rate (reviewed and approved)',
      value: '88.8%',
    },
  },
  {
    id: '7',
    stat1: {
      stat: 'Other Facility Source Tests Disapproved or Invalidated in 2023 (contractors)',
      value: '145',
    },
    stat2: {
      stat: 'Disapproval Rate (reviewed)',
      value: '42.9%',
    },
  },
  {
    id: '8',
    stat1: {
      stat: 'Other Facility Source Test Protocols Reviewed in 2023 (contractors)',
      value: '196',
    },
  },
  {
    id: '9',
    stat1: {
      stat: 'Facility CEMS Excess Emission Reports Reviewed in 2023 (reviewed)',
      value: '201',
    },
    stat2: {
      stat: 'Compliance Rate (reviewed)',
      value: '26.9%',
    },
  },
  {
    id: '10',
    stat1: {
      stat: 'Gasoline Dispensing Facilities (GDF)',
      value: '92',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '53.3%',
    },
  },
  {
    id: '11',
    stat1: {
      stat: 'Other GDF Source Tests (contractors)',
      value: '15,714',
    },
    stat2: {
      stat: 'Compliance Rate',
      value: '99.7%',
    },
  },
];

export const greenhouseEmissions = [
  { name: 'Transportation', value: 0.391, color: '#1D67C7' },
  { name: 'Industrial - Oil Refineries', value: 0.189, color: '#FFFFFF' },
  { name: 'Electricity/Co-Generation', value: 0.131, color: '#94B3EF' },
  {
    name: 'Residential/Commercial Fuel Usage',
    value: 0.117,
    color: '#4B4848',
  },
  { name: 'Industrial - Others', value: 0.08, color: '#0A215B' },
  {
    name: 'High Global Warming Potential Gases',
    value: 0.05,
    color: '#006E6E',
  },
  { name: 'Recycling and Waste', value: 0.027, color: '#ADFBE8' },
  { name: 'Agriculture/Farming', value: 0.015, color: '#7F7A7F' },
];

export const particulatePollution = [
  { name: 'Residential Wood Burning', value: 0.181, color: '#1D67C7' },
  {
    name: 'Stationary Non-Combustion Sources',
    value: 0.158,
    color: '#FFFFFF',
  },
  { name: 'Stationary Combustion Sources', value: 0.141, color: '#94B3EF' },
  {
    name: 'Road Dust',
    value: 0.137,
    color: '#4B4848',
  },
  { name: 'Mobile On-Road Sources', value: 0.136, color: '#0A215B' },
  {
    name: 'Mobile Off-Road Sources',
    value: 0.098,
    color: '#006E6E',
  },
  { name: 'Other Dust e', value: 0.072, color: '#ADFBE8' },
  { name: 'Commercial Cooking', value: 0.056, color: '#7F7A7F' },
  { name: 'Accidental & Planned Fires', value: 0.021, color: '#E87551' },
];

export const nitrogenOxidePollution = [
  { name: 'Mobile Off-Road Sources - Ships', value: 0.33, color: '#1D67C7' },
  {
    name: 'Mobile On-Road Sources - Trucks',
    value: 0.211,
    color: '#FFFFFF',
  },
  { name: 'Stationary Combustion Sources', value: 0.101, color: '#94B3EF' },
  {
    name: 'Mobile Off-Road Sources - Aircraft',
    value: 0.096,
    color: '#4B4848',
  },
  {
    name: 'Mobile Off-Road Sources - Equipment f',
    value: 0.086,
    color: '#0A215B',
  },
  {
    name: 'Mobile Off-Road Sources - Other g',
    value: 0.06,
    color: '#006E6E',
  },
  {
    name: 'Mobile On-Road Sources - Other Vehicles h',
    value: 0.055,
    color: '#ADFBE8',
  },
  {
    name: 'Residential Natural Gas Combustion',
    value: 0.048,
    color: '#7F7A7F',
  },
  {
    name: 'Stationary Non-Combustion Sources',
    value: 0.013,
    color: '#E87551',
  },
];
