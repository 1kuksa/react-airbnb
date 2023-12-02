import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import poolLogo from "./pool.svg";
import gymLogo from "./gym.svg";
import breakfestLogo from "./breakfest.svg";
import wifiLogo from "./wifi.svg";
import parkingLogo from "./car.svg";
import pupsLogo from "./pups.svg";
import transferLogo from "./transfer.svg";
import securityLogo from "./security.svg";
import cleanLogo from "./clean.svg";
import childLogo from "./child.svg";

export default function Amenities({
  pool,
  gym,
  breakfest,
  wifi,
  parking,
  pups,
  transfer,
  security,
  cleaning,
  children,
}) {
  return (
    <Box shadow>
      <div className="properties">
        <Heading border>Зручності:</Heading>
        <ul className="properties__list">
          {pool && (
            <ListItem imageSrc={poolLogo}>
              <span>Басейн</span>
            </ListItem>
          )}
          {gym && (
            <ListItem imageSrc={gymLogo}>
              <span>Спортивний зал</span>
            </ListItem>
          )}
          {breakfest && (
            <ListItem imageSrc={breakfestLogo}>
              <span>Безкоштовний сніданок</span>
            </ListItem>
          )}
          {wifi && (
            <ListItem imageSrc={wifiLogo}>
              <span>Безкоштовний WI-FI</span>
            </ListItem>
          )}
          {parking && (
            <ListItem imageSrc={parkingLogo}>
              <span>Безкоштовний вуличний паркінг</span>
            </ListItem>
          )}
          {pups && (
            <ListItem imageSrc={pupsLogo}>
              <span>Дозволено розміщення з домашніми тваринами</span>
            </ListItem>
          )}
          {transfer && (
            <ListItem imageSrc={transferLogo}>
              <span>Трансфер до/з аеропорту</span>
            </ListItem>
          )}
          {security && (
            <ListItem imageSrc={securityLogo}>
              <span>Консьєрж-сервіс</span>
            </ListItem>
          )}
          {cleaning && (
            <ListItem imageSrc={cleanLogo}>
              <span>Обслуговування номерів</span>
            </ListItem>
          )}
          {children && (
            <ListItem imageSrc={childLogo}>
              <span>Підходить для дітей</span>
            </ListItem>
          )}
        </ul>
      </div>
    </Box>
  );
}
