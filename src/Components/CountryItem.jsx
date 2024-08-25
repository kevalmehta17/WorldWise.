import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

CountryItem.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

function CountryItem({ country }) {
  const flagemojiToPNG = (flag) => {
    if (typeof flag !== "string" || flag.length === 0) {
      return null; // Return null if the flag emoji is invalid
    }

    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");

    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${country.country} flag`}
      />
    );
  };

  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
