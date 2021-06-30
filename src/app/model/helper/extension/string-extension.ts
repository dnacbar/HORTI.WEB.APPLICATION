export class StringExtension {

    public static RemoveSpecialCharacter(signature: String): String {
        let result = signature.replace(/[^a-zA-Z0-9]/g, '');
        return result;
    }
}
