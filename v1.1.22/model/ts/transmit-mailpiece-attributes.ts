import { Int, Long, DateTime } from "apikana/default-types";

//with current fixed ApikanaCodeGenerator 1.1.0 (see api.csproj) not possible to include external dependencies
//import { AddressType} from '@ch-post-logistics/parcel-coding-types/dist/model/ts/address/address-information'

/**
 * This type contains the result for a mail piece that has been determined by the RC System.
 **/
export interface TransmitMailpieceAttributes {
    /**
     * Represents the national identifier for the mailpiece item.
     * 
     * @pattern (98|99)[0-9]{16}
     */
    mailpieceId: string;

    /**
     * [extension]
     * 
     * Timestamp of data collection.
     */
    timestamp: DateTime;

    addressResult?: AddressResult;
}

export interface AddressResult {
    /**
     * The destination sort code is the outlet group name (Virtuelles Ziel) assigned to the mail piece.
     * Specific values are defined on a per-program basis.
     * 
     * @type integer
     * @maxLength 3
     */
    code: number;

    /**
     * This string element contains a reason why the RC System was unable to determine a result.
     * The sorting machine needs to recognize and count the reject reason in order to
     * a) stop the induction when the reject reason occured max. times in a row
     * b) generate live-data / statistics
     */
    rejectReasons?: string[];

    /** Below this remark follow non-cen fields */

    /**
     * [This is no CEN-Field]
     * Identifiziert die Adresse, welche auf dem Paket aufgedruckt ist.
     * Dieser „Paket-HausKey“ kann eine Domizil Adresse, eine Postfachadresse, oder eine Pickpost Adresse sein.
     */
    parcelHouseKey?: Long;


    /**
     * [This is no CEN-Field]
     * (DEPRECATED!)
     * Die Erfassung liefert die 6-stellige Postleitzahl der auf dem Paket adressierten Adresse
     * Sechstellige PLZ (PLZ6), welche in der Sortierung verwendet wird.
     * Besteht aus vierstelliger PLZ + zwei Stellen für dienstliche Angaben
     * (AMPplus: Postleitzahl)
     * 
     * Nachfolgend erklärt an dem Beispiel: 188070 - Bex Paketfiliale
     * 
     * Geografische Lage (erste vier Zahlen):
     * 1 = Leitkreis
     * 18 = Leitgebiet
     * 188 = Laufstrecke
     * 1880 = Bex
     * 
     * Mögliche dienstliche Angaben (letzte zwei Zahlen)
     * 56, 57 = Zoll, Import/Export
     * 60 = Briefzustellung
     * 61 = Postfach
     * 70 = Paketzustellung
     * 72 = Expresszustellung
     * 74 = Postautodienst
     * 75 = Kaserne
     * 
     * @maxLength 6
     */
    addressPostcode6?: Int;


    /**
     * [This is no CEN-Field]
     * Die Erfassung liefert die Nummer der Strasse in der Adresse des Pakets. 
     * Für jede Strasse, bei der ein Paketbote alle oder einen Teil der Pakete zustellt, gibt es in ZUBOFI eine Strassennummer. Die Erfassung liefert diese Nummer.
     * Beispiel: 206190
     * 
     * Key of the street
     */
    streetKey?: Int;

    /**
     * [This is no CEN-Field]
     * Die Erfassung liefert die Hausnummer der auf dem Paket adressierten Adresse
     */
    houseNumber?: Int;

    /**
     * [This is no CEN-Field]
     * Die Erfassung liefert den Hausnummerzusatz der auf dem Paket adressierten Adresse (alt. houseNumberAddOn)
     * @maxLength 6
     */
    houseNumberExtension?: string;

    /**
     * [This is no CEN-Field]
     * (DEPRECATED!)
     * Beschreibt den Adresstyp vom Paket. 
     */
    parcelAddressType?: AddressType;

    /**
     * [This is no CEN-Field]
     * Proprietary Swiss Post Sort Code
     * 
     * All numbers:
     *  __________ _____________________ ___________ _____ ________________
     * | Postcode | Post Code Extension | Code Type | BBZ | SequenceNumber |
     * |     4    |           2         |      1    |  3  |        4       |
     * 
     * i.e. 17620013610850
     */
    sortCode?: Int;

    /**
     * [This is no CEN-Field]
     * Alternative Sort Target 
     */
    specialSort?: string;
}


/** 
* DOMICILE_ADDRESS(Old Value = D)
* POBOX_ADDRESS(Old Value = F)
* MILITARY_ADDRESS(Old Value = M)
* OVERSEAS_ADDRESS(Old Value = A)
* DOMICILE_CORRECTION_ADDRESS(Old Value = K)
* POBOX_CORRECTION_ADDRESS(Old Value = L)
* PAKETBASE_INTERNAL_ADDRESS(Old Value = X)
* VCS_EXPIRED_INTERNAL_ADDRESS(Old Value = E)
* MCS_REJECT_INTERNAL_ADDRESS(Old Value = R)
* DEFERRED_VCS_INTERNAL_ADDRESS(Old Value = V)
* TEST_TARGET_INTERNAL_ADDRESS(Old Value = T)
*/
export enum AddressType {
    DOMICILE_ADDRESS,
    POBOX_ADDRESS,
    MILITARY_ADDRESS,
    OVERSEAS_ADDRESS,
    DOMICILE_CORRECTION_ADDRESS,
    POBOX_CORRECTION_ADDRESS,
    PAKETBASE_INTERNAL_ADDRESS,
    VCS_EXPIRED_INTERNAL_ADDRESS,
    MCS_REJECT_INTERNAL_ADDRESS,
    DEFERRED_VCS_INTERNAL_ADDRESS,
    TEST_TARGET_INTERNAL_ADDRESS
  }