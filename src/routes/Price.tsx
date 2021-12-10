import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

const PricesContainer = styled.div`
  display: grid;
  margin: 10px 0px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const PriceCardTitle = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
`;

const PriceCard = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
`;

interface PriceProps {
  coinId: string;
  theme: boolean;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId, theme }: PriceProps) {
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      <PricesContainer>
        <PriceCardTitle>12Hours</PriceCardTitle>
        <PriceCard>
          ${tickersData?.quotes.USD.percent_change_12h.toFixed(3)}
        </PriceCard>
      </PricesContainer>
      <PricesContainer>
        <PriceCardTitle>24Hours</PriceCardTitle>
        <PriceCard>
          ${tickersData?.quotes.USD.percent_change_24h.toFixed(3)}
        </PriceCard>
      </PricesContainer>
      <PricesContainer>
        <PriceCardTitle>7Days</PriceCardTitle>
        <PriceCard>
          ${tickersData?.quotes.USD.percent_change_7d.toFixed(3)}
        </PriceCard>
      </PricesContainer>
      <PricesContainer>
        <PriceCardTitle>1Years</PriceCardTitle>
        <PriceCard>
          ${tickersData?.quotes.USD.percent_change_1y.toFixed(3)}
        </PriceCard>
      </PricesContainer>
    </div>
  );
}

export default Price;
