import React from "react";

import {
  EstablishmentContainer,
  EstablishmentAddress,
  EstablishmentTitle,
} from "./styles";

import { addressAdapter } from "@seg-estetica/utils";

export const EstablishmentCard = ({ establishment }) => {
  return (
    <EstablishmentContainer>
      <EstablishmentTitle>{establishment.name}</EstablishmentTitle>
      <EstablishmentAddress>{addressAdapter(establishment.address, establishment.addressNumber)}</EstablishmentAddress>
      {/* //<SeeProfileBtn></SeeProfileBtn> */}
    </EstablishmentContainer>
  );
};
