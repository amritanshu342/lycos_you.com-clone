import React from "react";
import { Link } from "react-router-dom";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import useGoogleSearch from "../../hooks/useGoogleSearch/useGoogleSearch";
import { useStateValue } from "../../StateContext";

import Search from "../../components/Search/Search";

import "./SearchResult.css";

function SearchResult() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); // LIVE API Call

  return (
    <div className="searchResult">
      <div className="searchResult__header">
        <Link to="/">
          <img
            className="searchResult__logo"
            src="https://cdn.you.com/img/shared/logos/ydc-logo-lightdarkmode.svg"
            alt="Logo"
          />
        </Link>

        <div className="searchResult__headerBody">
          <Search hideButtons />
        </div>
        <img
          src="https://you.com/_next/image?url=https%3A%2F%2Fcdn.you.com%2Fimg%2Fshared%2Flanding-page%2Fbackground-default-dark.png&w=828&q=75"
          class="header__top__image"
          alt=""
        />
      </div>

      {/* <div className="searchResult__items">
        <p className="searchResult__itemsCount">
          About 23,140,000,000 results (0.34 seconds) for best app
        </p>

        <div className="searchResult__item" key="fghfgh">
          <a href="hgjghj" className="searchResult__itemTitle">
            <h2>Duolingo - The world's best way to learn a language</h2>
          </a>
          <div className="title">"www.duolingo.com"</div>

          <p className="searchResult__itemSnippet">
            "With our free mobile app or web and a few minutes a day, everyone
            can Duolingo. Learn 30+ languages online with bite-size lessons
            based on science."
          </p>
          <img
            className="searchResult__itemImage"
            src="https://www.duolingo.com/images/facebook/duo-08523a2.jpg"
            alt="Featured Visual"
          />
        </div>
      </div> */}

      {term && (
        <div className="searchResult__items">
          <p className="searchResult__itemsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchResult__item" key={item.formattedUrl}>
              <a href={item.link} className="searchResult__itemTitle">
                <h2>{item.title}</h2>
              </a>
              <div className="title">{item.displayLink}</div>
              <p className="searchResult__itemSnippet">{item.snippet}</p>
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className="searchResult__itemImage"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt="Featured Visual"
                  />
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
