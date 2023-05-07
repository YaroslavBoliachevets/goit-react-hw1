import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

const Statistics = ({ statiscs, title }) => {
  return (
    <StatisticsWrapper>
      <h2>{title}</h2>

      <StatisticsList>
        {statiscs &&
          statiscs.map(({ label, percentage, id }) => {
            const color = getColor();
            return (
              <StatisticsItem key={id} color={color}>
                <span>{label}</span>
                <span>{percentage}%</span>
              </StatisticsItem>
            );
          })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};

function getColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

export default Statistics;

