export function getPosts(): Promise<void> {
    const url:string = "https://jsonplaceholder.typicode.com/posts/";
    return fetch(url)
        .then(res => res.json())
        .then(posts => posts.map((item: object, index: number) => item = {
            ...item,
            image: `https://picsum.photos/200/300?random=1`

        }))
        .catch(e => console.log('Error, something went wrong with fetch: ', e));
}

export function getPostsByUserId(id: number, callback: any): Promise<void> {
    return getPosts()
        .then((posts: any) => posts.map((post: any) => {
            return post.userId === id ? callback(post) : {};
        }
    ));
}

export function getPostById(id: number, callback: any): Promise<void> {
    return getPosts()
        .then((posts: any) => posts.map((post: any) => {
            return post.id === id ? callback(post) : {};
        }
    ));
}

export default { getPosts, getPostsByUserId, getPostById };