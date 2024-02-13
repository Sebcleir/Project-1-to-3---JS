import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "./Header";
import "./PostDetail.css"
import { leftSidebarPosts, rightSidebarPosts, mainPosts } from "./utility";

function PostDetail() {
    const { post_id } = useParams();
    
    const [postDetail, setPostDetail] = useState()
    const [message, setMessage] = useState()

    console.log("post id", post_id)

    function getPost() {
        leftSidebarPosts.forEach(post => {
            if (post_id == post.id) {
                setPostDetail(post)
                setMessage("")
            }
        })
        if (!postDetail) {
            rightSidebarPosts.forEach(post => {
                if (post_id == post.id) {
                    setPostDetail(post)
                    setMessage("")
                }
            })
            if (!postDetail) {
                mainPosts.forEach(post => {
                    if (post_id == post.id) {
                        setPostDetail(post)
                        setMessage("")
                    }
                })
            }
        }
    }

    function checkPost() {
        if (!postDetail) {
            setMessage("Post not found with id: " + post_id)
        } else {
            setMessage("")
        }
    }

    useEffect(() => {
        getPost()
        checkPost()
    }, [])

    return (
        <div>
            <Header />
            <div className="post-detail">
                <p>{!postDetail ? message : ""}</p>
                <h1>{postDetail?.title}</h1>
                <img src={postDetail?.image} alt="Image here"></img>
                <p>{postDetail?.description}</p>
            </div>
        </div>
    )
}

export default PostDetail;