import { useRouter } from 'next/router'

function PortfolioItem() {
    //exposes data and methods
    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)
    
    return (
        <h1>{router.query.id}</h1>
    )
}

export default PortfolioItem;