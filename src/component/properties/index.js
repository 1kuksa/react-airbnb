import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import guestLogo from "./guests.svg";
import bathLogo from "./bath.svg";
import bedLogo from "./bed.svg";
import roomLogo from "./room.svg";

export default function Properties({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow>
      <div className="properties">
        <Heading border>Деталі властивості:</Heading>
        <ul className="properties__list">
          <ListItem imageSrc={guestLogo}>
            <span>{guests}</span>
            <span>Гості</span>
          </ListItem>
          <ListItem imageSrc={roomLogo}>
            <span>{bedrooms}</span>
            <span>Спальня</span>
          </ListItem>
          <ListItem imageSrc={bedLogo}>
            <span>{beds}</span>
            <span>Ліжко</span>
          </ListItem>
          <ListItem imageSrc={bathLogo}>
            <span>{baths}</span>
            <span>Ванна кімната</span>
          </ListItem>
        </ul>
      </div>
    </Box>
  );
}
