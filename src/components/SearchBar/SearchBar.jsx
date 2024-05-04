import React from "react";
import "./searchbar.css";
const SearchBar = () => {
  return (
    <section className="header-main-container header-ds-right-width">
      <div className="header-main-search d-flex">
        <span className="header-main-search-icon search-icon">
          <img
            src="https://www.jiomart.com/assets/ds2web/jds-icons/ds-web-search.svg"
            alt=""
          />
        </span>
        <div className="header-main-search-section">
          <form className="aa-Form" action="" novalidate="" role="search">
            <div className="aa-InputWrapperPrefix"></div>
            <div className="aa-InputWrapper">
             <input class="aa-Input search_input" aria-autocomplete="both" aria-labelledby="autocomplete-0-label" id="autocomplete-0-input" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" placeholder="Search JioMart" maxlength="512" type="search"/>
            </div>
          </form>
     </div>
      </div>
    </section>
  );
};

export default SearchBar;
