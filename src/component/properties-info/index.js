import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AddProperties({
  house,
  policy,
  transportation,
  languages,
  offers,
  check,
}) {
  return (
    <Box className="properties" shadow>
      <Heading border>Додаткові властивості</Heading>
      <ListItem title="Правила дому">
        <span>{house}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{policy}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{languages}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{check}</span>
      </ListItem>
    </Box>
  );
}

function List({ house, policy, transportation, languages, offers }) {
  return <ul className="price__list"></ul>;
}
