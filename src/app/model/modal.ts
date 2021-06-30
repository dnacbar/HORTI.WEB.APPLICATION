import { EnumModal } from './enum/modal.enum';

export class Modal {
    constructor(dsTitle?: string, dsMessage?: string, enumType?: EnumModal) {
        this.DsTitle = dsTitle;
        this.DsMessage = dsMessage;
        this.EnumType = enumType;
    }
    DsTitle = new String;
    DsMessage = new String;
    EnumType: EnumModal;
}
