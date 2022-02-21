import { useRouter } from 'next/router'

function BlogPostsPage() {
    const router = useRouter();
    console.log(router.query)
    //catch all with spread operator on file name [...slug], displays all params as an array 
    return (
        <h1>BlogPostsPage</h1>
    )
}

export default BlogPostsPage;