import React from 'react'
import { useParams, useSearchParams } from 'react-router'

const Blog = () => {
    // const { id } = useParams()
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    return (
        <div>
            <h1 className='text-3xl'>Blog Page {id} {name} </h1>
        </div>
    )
}

export default Blog
