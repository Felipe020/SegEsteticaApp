export const addressAdapter = (address, addressNumber) => {
    const {street, neighborhood, city, state} = address
    return street?.name + ", " + (addressNumber? addressNumber + ", " :null) + neighborhood?.name + ", " + city?.name + ", " + state?.name 
}
