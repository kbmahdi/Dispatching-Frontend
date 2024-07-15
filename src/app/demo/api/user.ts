export class User {
    email : string;
    mdp : string;
    role : string;

    constructor(email: string, mdp: string, role: string) {
        this.email = email;
        this.mdp = mdp;
        this.role = role;
    }
}
