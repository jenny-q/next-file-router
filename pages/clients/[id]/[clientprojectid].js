import { useRouter } from 'next/router'

function SelectedClientProjectPage() {
    //exposes data and methods
    const router = useRouter();
    //this will also load query of parent client page
    console.log(router.pathname)
    console.log(router.query)
    return (
        <h1>page of specific project of selected client</h1>
    )
}

export default SelectedClientProjectPage;