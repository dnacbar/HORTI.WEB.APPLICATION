import { StringExtension } from './../helper/extension/string-extension';
import { User } from "../user";
import { Signature } from "./_signature";

export class UserCreationSignature extends Signature {
    constructor(user: User) {
        super();
        this.IsProducer = user.BoIsProducer;
        this.Login = user.DsLogin;
        this.Password = user.DsPassword;
        this.UserName = user.DsUserName;
        this.Phone = StringExtension.RemoveSpecialCharacter(user.DsPhone);
    }
    IsProducer = new Boolean;
    Login = new String;
    Password = new String;
    UserName = new String;
    Phone = new String;
}