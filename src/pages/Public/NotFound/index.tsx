import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ErrorPage } from "$components/ErrorPage";
import { Window } from "$components/Window";

export const NotFound: FunctionComponent = () => {
  const history = useHistory();
  return (
    <Window>
      <ErrorPage
        title="Parece que esta página no existe"
        buttonMessage="Ir a la página principal"
        onClickButton={() => history.push(RoutesBuilder.public.home())}
        icon={<img src={"images/brokenLink.svg"} alt={"Página inexistente"}/>}
      />
    </Window>
  );
};