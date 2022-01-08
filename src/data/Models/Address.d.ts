export type City = {
	name: String
}

export type Neighborhood = {
	name: String
};

export type State = {
	name: String
};

export type Street = {
	name: String
};

export type Address = {
	city: City,
	neighborhood: Neighborhood,
	state: State,
	street: Street,
};
