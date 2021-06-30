export class UserAccessResult {
    IdSession = new String;
    Login = new String;
    Token = new String;

    public isValid(): boolean {
        
        return !(this.IdSession == '' && this.Login == '' && this.Token == '')
    }
}