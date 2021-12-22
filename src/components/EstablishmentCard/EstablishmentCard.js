import {
	EstablishmentContainer,
	EstablishmentEmail,
	EstablishmentTitle,
} from "./styles";

export const EstablishmentCard = ({ establishment }) => {
	return (
		<EstablishmentContainer>
			<EstablishmentTitle>{establishment.name}</EstablishmentTitle>
			<EstablishmentEmail>{establishment.email}</EstablishmentEmail>
		</EstablishmentContainer>
	);
};
