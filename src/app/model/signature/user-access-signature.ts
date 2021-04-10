import { User } from './../user';
import { Signature } from './_signature';

export class UserAccessSignature extends Signature {
    constructor(user: User) {
        super();
        this.Login = user.DsLogin;
        this.Password = user.DsPassword;
        this.IsProducer = user.BoIsProducer;
        this.SessionExpire = user.BoSessionExpire;
    }
    
    Login = new String;
    Password = new String;
    IsProducer = new Boolean;
    SessionExpire = new Boolean;
}