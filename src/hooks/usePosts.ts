import {useEffect, useState} from "react";
import {AllBlogNode} from "../types/data";
import {useGlobalContext} from "../context/context";

export const usePosts = () => {
    const {data} = useGlobalContext()
    const [posts, setPosts] = useState<AllBlogNode[]>()
    useEffect(() => {
        if (data) {
            setPosts(data.allBlog.nodes)
        }
    }, [data]);
    return [ posts]
}