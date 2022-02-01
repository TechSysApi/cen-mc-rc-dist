/**
 * This type provides the requester with the ability to obtain the results of an enrichment response. The RC
 * returns the document either on request of the MC or in an unsolicited fashion.
 * The MC expects to get all defined attributes for the corresponding mailpiece from the RC System.
 **/
export interface RequestMailpieceAttributes {
    /**
     * The mailpieceId represents the machine specific identifier to track a mail item during a machine sorting cycle. The identifier is used to synchronize the data events between coding and sorting systems.
     * @maxLength 200
     */
    mailpieceId: string

    /**
     * Represents a long living identifier for the mail item
     * [DEPRECATED] Is replaced by the attribute idTags. Attribute will be removed in future releases when all target systems use the new field idTags.
     * @maxLength 200
     */
    idTag?: string

    /**
     * Timestamp of data collection.
     * @format date-time
     */
    timestamp: string

    /**
     * Refers to a module id as event-source.
     * @pattern [A-Z]{3}[0-9]{2}
     */
    sourceId: string
}
