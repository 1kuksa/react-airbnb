import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";

export default function Trip({ list }) {
  return (
    <Box className="trip" shadow>
      <Heading border>Пам'ятки поблизу </Heading>
      <ul className="trip__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </ul>
    </Box>
  );
}

function Item({ link, name }) {
  return (
    <ListItem>
      <a className="trip__link" href={link}>
        {name}
      </a>
    </ListItem>
  );
}
