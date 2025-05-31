class User {
    id?: number | null;
    name: string;
    username: string;
    email: string;
    password: string;

    constructor(name: string, username: string, email: string, password: string, id?: number | null,) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static fromBodyData(bodyData: any): User {
        if (!bodyData || !bodyData.name || !bodyData.username || !bodyData.email || !bodyData.password) {
            throw new Error("Missing required user data from request body.");
        }

        const id = bodyData.id != null ? parseInt(bodyData.id) : null;

        return new User(
            bodyData.name,
            bodyData.username,
            bodyData.email,
            bodyData.password,
            id,
        );
    }
}


export default User;