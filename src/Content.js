import { useNavigate } from "react-router-dom";

import "./Content.css"
import { leftSidebarPosts, mainPosts, rightSidebarPosts } from "./utility";
import { useEffect, useState } from "react";
import axios from "axios";

function Content() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    async function getPosts() {
        let response = await axios.get("http://localhost:8080/post")
        setPosts(response.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="content">
            <div className="left-sidebar">
                {
                    posts.map(post => (
                        <div className="left-post" onClick={() => navigate(`/post/${post.id}/`)}>
                            <div>
                                <h3>{post.title}</h3> By <p>{post.author}</p>
                                <p>{post.category}</p>
                            </div >
                        </div>
                    ))
                }
            </div>

            <div className="main-content">
                {
                    mainPosts.map(post => (
                        <div className="main-post" onClick={() => navigate(`/post/${post.id}/`)}>
                            <img height="500" width="600" src={post.image}></img>
                            <h1>{post.title}</h1>
                            <p>{post.author}</p>
                            <p>{post.category}</p>
                        </div>
                    ))
                }
            </div>

            <div className="right-sidebar">
                {
                    rightSidebarPosts.map(post => (
                        <div className="right-post" onClick={() => navigate(`/post/${post.id}/`)}>
                            <h3>{post.title}</h3> By <p>{post.author}</p>
                            <p>{post.category}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Content;