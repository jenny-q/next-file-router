import { useRouter } from 'next/router'

function PortfolioItem() {
    //exposes data and methods
    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)
    
    return (
        <h1>portfolio list item</h1>
    )
}

export default PortfolioItem;