// custom hook
import { useState, useEffect } from "react";

export const useFetchStocks = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const responseData = await response.json();
      const demoData = {
        metadata: "Top gainers, losers, and most actively traded US tickers",
        last_updated: "2024-02-26 16:15:59 US/Eastern",
        top_gainers: [
          {
            ticker: "VHAI+B",
            price: "12.0",
            change_amount: "10.0",
            change_percentage: "500.0%",
            volume: "7563",
          },
          {
            ticker: "LCAHW",
            price: "0.0159",
            change_amount: "0.0113",
            change_percentage: "245.6522%",
            volume: "95350",
          },
          {
            ticker: "BBLGW",
            price: "6.76",
            change_amount: "4.74",
            change_percentage: "234.6535%",
            volume: "2200",
          },
          {
            ticker: "STRCW",
            price: "0.06",
            change_amount: "0.039",
            change_percentage: "185.7143%",
            volume: "228698",
          },
          {
            ticker: "PTIXW",
            price: "0.019",
            change_amount: "0.0114",
            change_percentage: "150.0%",
            volume: "20343",
          },
          {
            ticker: "GMFIW",
            price: "0.06",
            change_amount: "0.035",
            change_percentage: "140.0%",
            volume: "32510",
          },
          {
            ticker: "SWAGW",
            price: "0.1",
            change_amount: "0.058",
            change_percentage: "138.0952%",
            volume: "175",
          },
          {
            ticker: "TGAAW",
            price: "0.1299",
            change_amount: "0.075",
            change_percentage: "136.612%",
            volume: "6802",
          },
          {
            ticker: "AKLI",
            price: "0.4523",
            change_amount: "0.2307",
            change_percentage: "104.1065%",
            volume: "127382185",
          },
          {
            ticker: "HOLO",
            price: "12.0",
            change_amount: "5.39",
            change_percentage: "81.5431%",
            volume: "53176966",
          },
          {
            ticker: "STRC",
            price: "1.055",
            change_amount: "0.465",
            change_percentage: "78.8136%",
            volume: "7702681",
          },
          {
            ticker: "LIDRW",
            price: "0.0107",
            change_amount: "0.0045",
            change_percentage: "72.5806%",
            volume: "113403",
          },
          {
            ticker: "PRENW",
            price: "0.0091",
            change_amount: "0.0037",
            change_percentage: "68.5185%",
            volume: "2711",
          },
          {
            ticker: "MNTN+",
            price: "0.2",
            change_amount: "0.08",
            change_percentage: "66.6667%",
            volume: "186738",
          },
          {
            ticker: "SONDW",
            price: "0.0135",
            change_amount: "0.0053",
            change_percentage: "64.6341%",
            volume: "99453",
          },
          {
            ticker: "GRDIW",
            price: "0.1198",
            change_amount: "0.0465",
            change_percentage: "63.4379%",
            volume: "31440",
          },
          {
            ticker: "LMND+",
            price: "0.0198",
            change_amount: "0.0076",
            change_percentage: "62.2951%",
            volume: "31179",
          },
          {
            ticker: "ARIZR",
            price: "0.32",
            change_amount: "0.117",
            change_percentage: "57.6355%",
            volume: "373844",
          },
          {
            ticker: "SLNAW",
            price: "0.0173",
            change_amount: "0.0063",
            change_percentage: "57.2727%",
            volume: "11322",
          },
          {
            ticker: "GROMW",
            price: "4.27",
            change_amount: "1.55",
            change_percentage: "56.9853%",
            volume: "1317",
          },
        ],
        top_losers: [
          {
            ticker: "VERBW",
            price: "0.003",
            change_amount: "-0.0065",
            change_percentage: "-68.4211%",
            volume: "44737",
          },
          {
            ticker: "ACON",
            price: "0.3567",
            change_amount: "-0.5408",
            change_percentage: "-60.2563%",
            volume: "11041448",
          },
          {
            ticker: "BROGW",
            price: "0.0061",
            change_amount: "-0.0087",
            change_percentage: "-58.7838%",
            volume: "2514",
          },
          {
            ticker: "CETUW",
            price: "0.01",
            change_amount: "-0.0123",
            change_percentage: "-55.157%",
            volume: "1000",
          },
          {
            ticker: "GOVXW",
            price: "0.0233",
            change_amount: "-0.0267",
            change_percentage: "-53.4%",
            volume: "4013",
          },
          {
            ticker: "CPTNW",
            price: "0.007",
            change_amount: "-0.0075",
            change_percentage: "-51.7241%",
            volume: "4198",
          },
          {
            ticker: "DAVEW",
            price: "0.0174",
            change_amount: "-0.0185",
            change_percentage: "-51.532%",
            volume: "27193",
          },
          {
            ticker: "NCPLW",
            price: "0.0103",
            change_amount: "-0.0098",
            change_percentage: "-48.7562%",
            volume: "27994",
          },
          {
            ticker: "KTTAW",
            price: "0.0111",
            change_amount: "-0.0087",
            change_percentage: "-43.9394%",
            volume: "6814",
          },
          {
            ticker: "HIPO+",
            price: "0.02",
            change_amount: "-0.0149",
            change_percentage: "-42.6934%",
            volume: "1900",
          },
          {
            ticker: "BUJAW",
            price: "0.0401",
            change_amount: "-0.028",
            change_percentage: "-41.116%",
            volume: "862",
          },
          {
            ticker: "VCXB+",
            price: "0.0307",
            change_amount: "-0.0204",
            change_percentage: "-39.9217%",
            volume: "4600",
          },
          {
            ticker: "LUNRW",
            price: "1.57",
            change_amount: "-1.03",
            change_percentage: "-39.6154%",
            volume: "3349297",
          },
          {
            ticker: "JTAIZ",
            price: "0.33",
            change_amount: "-0.21",
            change_percentage: "-38.8889%",
            volume: "3678",
          },
          {
            ticker: "DISTW",
            price: "0.0125",
            change_amount: "-0.0075",
            change_percentage: "-37.5%",
            volume: "671",
          },
          {
            ticker: "VMCAW",
            price: "0.0251",
            change_amount: "-0.0149",
            change_percentage: "-37.25%",
            volume: "817",
          },
          {
            ticker: "MSAIW",
            price: "0.0384",
            change_amount: "-0.0216",
            change_percentage: "-36.0%",
            volume: "1701",
          },
          {
            ticker: "EDBLW",
            price: "0.0129",
            change_amount: "-0.007",
            change_percentage: "-35.1759%",
            volume: "3700",
          },
          {
            ticker: "LUNR",
            price: "6.27",
            change_amount: "-3.32",
            change_percentage: "-34.6194%",
            volume: "44103708",
          },
          {
            ticker: "USCTW",
            price: "0.02",
            change_amount: "-0.0101",
            change_percentage: "-33.5548%",
            volume: "657446",
          },
        ],
        most_actively_traded: [
          {
            ticker: "SOUN",
            price: "5.75",
            change_amount: "1.83",
            change_percentage: "46.6837%",
            volume: "203099131",
          },
          {
            ticker: "AKLI",
            price: "0.4523",
            change_amount: "0.2307",
            change_percentage: "104.1065%",
            volume: "127382185",
          },
          {
            ticker: "CRGE",
            price: "0.0586",
            change_amount: "0.0047",
            change_percentage: "8.7199%",
            volume: "118353868",
          },
          {
            ticker: "TSLA",
            price: "199.4",
            change_amount: "7.43",
            change_percentage: "3.8704%",
            volume: "111344657",
          },
          {
            ticker: "GOEV",
            price: "0.1051",
            change_amount: "-0.0106",
            change_percentage: "-9.1616%",
            volume: "105278310",
          },
          {
            ticker: "MARA",
            price: "29.19",
            change_amount: "5.2",
            change_percentage: "21.6757%",
            volume: "104248549",
          },
          {
            ticker: "SOXS",
            price: "3.975",
            change_amount: "-0.115",
            change_percentage: "-2.8117%",
            volume: "95359827",
          },
          {
            ticker: "OCEA",
            price: "1.91",
            change_amount: "0.34",
            change_percentage: "21.6561%",
            volume: "91415243",
          },
          {
            ticker: "SQQQ",
            price: "11.15",
            change_amount: "0.03",
            change_percentage: "0.2698%",
            volume: "90971639",
          },
          {
            ticker: "NKLA",
            price: "0.7228",
            change_amount: "-0.0415",
            change_percentage: "-5.4298%",
            volume: "89043457",
          },
          {
            ticker: "ZVSA",
            price: "1.08",
            change_amount: "0.279",
            change_percentage: "34.8315%",
            volume: "87912025",
          },
          {
            ticker: "PHUN",
            price: "0.176",
            change_amount: "-0.0135",
            change_percentage: "-7.124%",
            volume: "86496227",
          },
          {
            ticker: "RIVN",
            price: "10.7",
            change_amount: "0.63",
            change_percentage: "6.2562%",
            volume: "71358110",
          },
          {
            ticker: "CLSK",
            price: "20.35",
            change_amount: "3.92",
            change_percentage: "23.8588%",
            volume: "62155722",
          },
          {
            ticker: "TELL",
            price: "0.71",
            change_amount: "-0.0301",
            change_percentage: "-4.067%",
            volume: "60917215",
          },
          {
            ticker: "NIO",
            price: "5.65",
            change_amount: "0.25",
            change_percentage: "4.6296%",
            volume: "59951752",
          },
          {
            ticker: "TQQQ",
            price: "59.54",
            change_amount: "-0.08",
            change_percentage: "-0.1342%",
            volume: "54450252",
          },
          {
            ticker: "HOLO",
            price: "12.0",
            change_amount: "5.39",
            change_percentage: "81.5431%",
            volume: "53176966",
          },
          {
            ticker: "GOOGL",
            price: "137.57",
            change_amount: "-6.39",
            change_percentage: "-4.4387%",
            volume: "52577417",
          },
          {
            ticker: "FSR",
            price: "0.6002",
            change_amount: "0.0102",
            change_percentage: "1.7288%",
            volume: "51712222",
          },
        ],
      };
      console.log(responseData)
      setData(responseData)
      if(responseData.Information)
        setData(demoData)
      console.log(demoData)
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
};
