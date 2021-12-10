import { useQuery } from "react-query";
import { useState } from "react";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartBtn = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.borderColor};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  cursor: pointer;
`;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
  theme: boolean;
}
export const Chart = ({ coinId, theme }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const [chart, setChart] = useState(true);

  const setChartType = () => {
    setChart((current) => !current);
  };

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <ChartBtn onClick={setChartType}>{chart ? "📈" : "📊"}</ChartBtn>

          {chart ? (
            <ApexChart
              type="line"
              series={[
                {
                  name: "Price",
                  data: data?.map((price) => price.close),
                },
              ]}
              options={{
                theme: {
                  mode: theme ? "light" : "dark",
                },
                chart: {
                  height: 300,
                  width: 500,
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                grid: { show: false },
                stroke: {
                  curve: "smooth",
                  width: 4,
                },
                yaxis: {
                  show: false,
                },
                xaxis: {
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                  labels: { show: false },
                  type: "datetime",
                  categories: data?.map((price) => price.time_close),
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    gradientToColors: ["#0be881"],
                    stops: [0, 100],
                  },
                },
                colors: ["#0fbcf9"],
                tooltip: {
                  y: {
                    formatter: (value) => `$${value.toFixed(2)}`,
                  },
                },
              }}
            />
          ) : (
            <ApexChart
              type="candlestick"
              series={[
                {
                  name: "price",
                  data: data?.map((price) => {
                    return {
                      x: price.time_open,
                      y: [price.close, price.high, price.low, price.open],
                    };
                  }),
                },
              ]}
              options={{
                theme: {
                  mode: theme ? "light" : "dark",
                },
                chart: {
                  height: 300,
                  width: 500,
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                xaxis: {
                  type: "datetime",
                  axisBorder: { show: false },
                },
                yaxis: {
                  show: false,
                },
                grid: {
                  show: false,
                },
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Chart;
