import { useOutletContext } from "react-router-dom"

function HostVanPricing(){

    const { hostVan } = useOutletContext()

    return(
        <section className="host-van-pricing">
            <h2>${hostVan.price}<span>/day</span></h2>
        </section>
    )
}

export default HostVanPricing