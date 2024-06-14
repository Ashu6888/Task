import React from 'react';
import Chart from 'react-apexcharts';
import styles from "./Chart.module.css"

const ProgressCircle = () => {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '80%',
        },
        track: {
          show: true,
          background: '#f2f2f2',
          strokeWidth: '80%', 
        },
        dataLabels: {
          name: {
            fontSize: '22px',
            color: '#fff',
            offsetY: -10,
          },
          value: {
            fontSize: '16px',
            color: '#fff',
            offsetY: 5,
          },
          total: {
            show: true,
            label: 'Opened',
            color: '#fff',
            formatter: function () {
              return '73%';
            },
          },
        },
      },
    },

    labels: ['Opened'],
  };

  const series = [73];

  return (
    <div className={`${styles.bar_chart} py-3`}>
        <h6 className={styles.head}>Email Sent</h6>
      <Chart options={options} series={series} type="radialBar" height={300} />
      <div className="text-center mt-2">
        <p className='mb-0' style={{ color: 'rgba(156, 163, 175, 1)' }}>Performance</p>
        <h5 style={{ color: '#fff' }}>Average</h5>
      </div>
    </div>
  );
};

export default ProgressCircle;
