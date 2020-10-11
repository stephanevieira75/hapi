export function getUsers(): Promise<void> {
    const url:string = "https://jsonplaceholder.typicode.com/users";
    return fetch(url)
        .then(res => res.json())
        .then(users => users.map((item: object, index: number) => item = {
            ...item,
            password: '123',
            isAdmin: index === 0 ? true : false,
            connected: false
        }))
        .catch(e => console.log('Error, something went wrong with fetch: ', e));
}
    
export function getUserById(id: number, callback: (user: object) => any): Promise<void> {
    return getUsers()
        .then((users: any) => users.map((user: any) => {
            return user.id === id ? callback(user) : {};
        }
    ));
}

export function getUserByEntries(username: string, password: string, callback: (user: object) => any): Promise<void> {
    username.toLowerCase();
    return getUsers()
        .then((users: any) => users.map((user: any) => {
            const emailCase = (username === user.email && password === user.password) ? true : false;
            const usernameCase = (username === user.username && password === user.password) ? true : false;
            return (emailCase || usernameCase) ? callback({ ...user, connected: true }) : { error: 'wrong' };
        }
    ));
}

export default { getUsers, getUserById, getUserByEntries };