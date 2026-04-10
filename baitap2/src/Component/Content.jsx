import React from 'react';

const tabs = ['posts', 'comments', 'albums', 'photos', 'users'];

function Content() {
        const [title, setTitle] = React.useState('');
        const [posts, setPosts] = React.useState([]);
        const [type, setType] = React.useState('posts');
        React.useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
                .then((res) => res.json())
                .then((posts) => {
                    setPosts(posts);
                });
    }, [type])
    return (
        <div>
            {tabs.map(tab => (
                <button class ="cmtbt" key={tab}
                style = {type === tab ? {color: 'red', backgroundColor: 'lightgray'} : {}}
                onClick={() => setType(tab)}>
                    {tab}
                </button>
            ))}
            <br></br>
            <br></br>
            <input style = {{width: '30%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: 'gray'}} value={title} onChange={e => setTitle(e.target.value)} />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Content;