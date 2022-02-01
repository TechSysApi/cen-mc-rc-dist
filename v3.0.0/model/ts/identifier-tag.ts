/**
 * The tag contains a logistic or technical identifier to track a mail item within a specific context.
 */
export interface IdentifierTag {
    format: IdentifierTagFormat

    /**
     * Contains the value of the identifier tag.
     * @maxLength 200
     */
    value: string
}

/**
 * Defines the format of the identifier tag
 * NATIONAL_SHIPMENT_NUMBER = A national identifier to track a mail item within the country. (98|99)[0-9]{16}
 * GLOBAL_SHIPMENT_NUMBER = A national identifier to track a mail item internationally. [A-Z]{2}[0-9]{9}[A-Z]{2}
 * LETTER_ID = A national identifier to track a letter item within the country. Typ LetterID 31, 21 oder 20, starting with «75680».
 * CUSTOMS_NUMBER = A national identifier to track an imported mail item within the country.
 * BOX_ID = An identifier to track a Dispobox within the country.
 * UPU_ID = A technical identifier to track an mail item during the complete sorting process.
 * UMI = A machine independent technical identifier to reference a machine sorting cycle of a mail item. The identifier is used to access the mail images.
 */
export enum IdentifierTagFormat {
    NATIONAL_SHIPMENT_NUMBER,
    GLOBAL_SHIPMENT_NUMBER,
    LETTER_ID,
    CUSTOMS_NUMBER,
    BOX_ID,
    UPU_ID,
    UMI
}
