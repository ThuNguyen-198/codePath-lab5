import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinDetail = () => {
  let params = useParams();
  const [fullDetails, setFullDetails] = useState();
  let fullname = "EMPTY";
  useEffect(() => {
    const getCoinDetail = async () => {
      const details = await fetch(
        // "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=b04764c93f6ef38b30e7b346ada11a7a2458116c2d909197ae76a4c831385020"
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=b04764c93f6ef38b30e7b346ada11a7a2458116c2d909197ae76a4c831385020`
      );

      const description = await fetch(
        // "https://min-api.cryptocompare.com/data/all/coinlist?fsym=BTC&api_key=b04764c93f6ef38b30e7b346ada11a7a2458116c2d909197ae76a4c831385020"
        `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=b04764c93f6ef38b30e7b346ada11a7a2458116c2d909197ae76a4c831385020`
      );
      const detailsJson = await details.json().DISPLAY;
      const descripJson = await description.json().Data;
      console.log("1: " + detailsJson);
      console.log("2: " + descripJson);
      setFullDetails({
        numbers: detailsJson,
        textData: descripJson,
      });
      console.log("3: " + fullDetails.numbers);
      console.log("4: " + fullDetails.textData);
      if (!fullDetails.textData[params.symbol].FullName) {
        fullname = fullDetails.textData[params.symbol].FullName;
      }
    };
    getCoinDetail().catch(console.error);
  }, [params.symbol]);
  return (
    <div>
      <h1>{fullname}</h1>
      {/* <img
        className="images"
        src={`https://www.cryptocompare.com${
          fullDetails.numbers[params.symbol].USD.IMAGEURL
        }`}
        alt={`Small icon for ${params.symbol} crypto coin`}
      />
      <div> {fullDetails.textData[params.symbol].Description}</div>
      <br></br>
      <div>
        This coin was built with the algorithm{" "}
        {fullDetails.textData[params.symbol].Algorithm}{" "}
      </div>
      <table>
        <tbody>
          <tr>
            <th>Launch Date </th>
            <td> </td>
          </tr>
          <tr>
            <th>Website </th>
            <td> </td>
          </tr>
          <tr>
            <th>Whitepaper </th>
            <td> </td>
          </tr>
          <tr>
            <th>Monetary Symbol </th>
            <td> </td>
          </tr>
          <tr>
            <th>Market </th>
            <td> </td>
          </tr>
          <tr>
            <th>Last Transaction </th>
            <td> </td>
          </tr>
          <tr>
            <th>Last Transaction Value</th>
            <td> </td>
          </tr>
          <tr>
            <th>Volume </th>
            <td> </td>
          </tr>
          <tr>
            <th>Today's Open Price </th>
            <td> </td>
          </tr>
          <tr>
            <th>Highest Price during the Day </th>
            <td> </td>
          </tr>
          <tr>
            <th>Lowest Price during the Day </th>
            <td> </td>
          </tr>
          <tr>
            <th>Change from Previous Day </th>
            <td> </td>
          </tr>
          <tr>
            <th>Market Cap </th>
            <td> </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
export default CoinDetail;
