import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return <Message message="Add your first city by clicking on Map " />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
