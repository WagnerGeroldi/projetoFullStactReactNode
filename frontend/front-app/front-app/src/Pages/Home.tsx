import { useEffect, useState } from "react";
import { api } from "../Api";


import { ButtonDefault } from "../Components/ButtonDefault";

export function Home() {
  const [example, setExample] = useState();

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setExample(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div>Renderizando a página</div>
      <br />
      Conteúdo do Backend: {example};
      <br />
      <br />
      <ButtonDefault link={"/teste"} name={"Arquivo JSON Consumindo"} />
    </>
  );
}
