import { useEffect, useState } from "react";
import { api } from "../Api";

interface ITeste {
  name?: string;
  phone?: string;
}

export function Teste() {
  const [teste, setTeste] = useState<ITeste | undefined>(undefined);

  useEffect(() => {
    api
      .get("/teste")
      .then((res) => {
        setTeste(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      O meu nome é {teste?.name} e meu telefone é {teste?.phone}
    </>
  );
}
