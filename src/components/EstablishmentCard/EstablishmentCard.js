import React from "react";

import {
  EstablishmentContainer,
  EstablishmentEmail,
  EstablishmentTitle,
  SeeProfileBtn,
} from "./styles";

export const EstablishmentCard = ({ establishment }) => {
  return (
    <EstablishmentContainer>
      <EstablishmentTitle>{establishment.name}</EstablishmentTitle>
      <EstablishmentEmail>{establishment.email}</EstablishmentEmail>
      {/* //<SeeProfileBtn></SeeProfileBtn> */}
    </EstablishmentContainer>
  );
};
