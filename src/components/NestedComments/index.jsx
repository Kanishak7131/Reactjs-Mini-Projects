import { useState } from "react"
import Comments from "./Coments"

export default function NestedComments() {
    let [input, setinput] = useState("")
    let [comments, setcomments] = useState([{
        id: Date.now(),
        title: "Hello"
    }])
    function handleAddComment() {
        setcomments([
            ...comments,
            {
                id: Date.now(),
                title: input
            }
        ])
        setinput("")
    }
    function handleReply(id, value) {
        let commentsClone = comments.slice();
        addcomment(commentsClone, id, value);
        setcomments(commentsClone)

    }

    function addcomment(allcomments, id, value) {

        for (let i = 0; i < allcomments.length; i++) {
            if (allcomments[i].id == id) {
                if (allcomments[i].child) {
                    allcomments[i].child.push({ id: Date.now(), title: value })
                    return;
                }
                allcomments[i].child = [{ id: Date.now(), title: value }]
                return
            }
        }
        for (let i = 0; i < allcomments.length; i++) {
            let comment = allcomments[i];
            addcomment(
                comment.child,
                id,
                value
            );
        }

    }
    console.log(comments)
    return (
        <>
            <h2>Nested Comments</h2>
            <input value={input} onChange={(e) => setinput(e.target.value)} />
            <button onClick={handleAddComment}>Add the commment</button>
            <h4>All the comments</h4>
            {
                comments && comments.length > 0 && comments.map((item) => <Comments key={item.id} content={item} handleReply={handleReply} />)
            }
        </>
    )
}