import React from "react";

import {
  EstablishmentContainer,
  EstablishmentAddress,
  EstablishmentTitle,
  SeeProfileBtn,
} from "./styles";

import {addressAdapter} from "@utils";

export const EstablishmentCard = ({ establishment }) => {
  return (
    <EstablishmentContainer>
      <EstablishmentTitle>{establishment.name}</EstablishmentTitle>
      <EstablishmentAddress>{addressAdapter(establishment.address, establishment.addressNumber)}</EstablishmentAddress>
      {/* //<SeeProfileBtn></SeeProfileBtn> */}
    </EstablishmentContainer>
  );
};
