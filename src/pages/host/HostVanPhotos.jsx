import { useOutletContext } from "react-router-dom"

function HostVanPhotos(){

    const { hostVan } = useOutletContext()

    return(
        <section className="host-van-photos">
            <img src={hostVan.imageUrl} />
        </section>
    )
}

export default HostVanPhotos