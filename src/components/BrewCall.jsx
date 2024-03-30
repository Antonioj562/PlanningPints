/* */

const BrewCall = (p) => {

    return(
        <>
        {p.name}
        <br></br>
        {p.address_1}, {p.city} - {p.state_province} - {p.country}
        <br></br>
        <a href={p.website_url}>Brew Link</a>
        </>
    )
}

export default BrewCall;