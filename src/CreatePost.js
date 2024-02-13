import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import "./CreatePost.css"
import { posts } from "./utility";

function CreatePost() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [author, setAuthor] = useState()
    const [category, setCategory] = useState()

    const navigate = useNavigate()

    console.log("posts before saving", posts)

    function createPost (e) {
        e.preventDefault()
        console.log("title", title)
        console.log("description", description)
        console.log("image", image)
        console.log("author", author)
        console.log("category", category)
        let payload = {
            "title": title,
            "description": description,
            "image": image,
            "author": author,
            "category": category
        }
        posts.push(payload)
        console.log("posts after saving", posts)
        setTitle("")
        setDescription("")
        setImage("")
        setAuthor("")
        setCategory("")
        navigate("/")
    }
    

    return (
        <div>
            <Header />
            <div className="create-post">
                <h1>Create Post</h1>
                <form>
                    <div className="form-field">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)}></input>
                    </div>
                    <div className="form-field">
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) =>setDescription(e.target.value)}></input>
                    </div>
                    <div className="form-field">
                        <label>Image</label>
                        <input type="file" value={image} onChange={(e) =>setImage(e.target.value)} accept="image/*"></input>
                    </div>
                    <div className="form-field">
                        <label>Author</label>
                        <input type="text" value={author} onChange={(e) =>setAuthor(e.target.value)}></input>
                    </div>
                    <div className="form-field">
                        <label>Category</label>
                        <input type="text" value={category} onChange={(e) =>setCategory(e.target.value)}></input>
                    </div>
                    <button type="submit" onClick={(e) => createPost(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;