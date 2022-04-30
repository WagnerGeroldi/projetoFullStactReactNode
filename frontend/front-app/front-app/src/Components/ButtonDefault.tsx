import { Link } from "react-router-dom";

interface IButton {
  link: string;
  name: string;
}

function ButtonDefault(props: IButton) {
  return (
    <Link to={props.link}>
      <button>{props.name}</button>
    </Link>
  );
}

export { ButtonDefault };
