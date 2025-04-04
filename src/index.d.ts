export default jsPDFInvoiceTemplate;
import jsPDFRfqTemplate from "./RFQ/index";
declare const OutputType: {
  Save: "save"; //save pdf as a file
  DataUriString: "datauristring"; //returns the data uri string
  DataUri: "datauri"; //opens the data uri in current window
  DataUrlNewWindow: "dataurlnewwindow"; //opens the data uri in new window
  Blob: "blob"; //return blob format of the doc,
  ArrayBuffer: "arraybuffer"; //return ArrayBuffer format
};

import { jsPDF } from "jspdf";
/**
 *
 * @param {
 *  outputType: OutputType | string,
 *  returnJsPDFDocObject?: boolean,
 *  fileName: string,
 *  orientationLandscape?: boolean,
 *  pdfTitle?: string,
 *  logo?: {
 *      src?: string,
 *      width?: number,
 *      height?: number,
 *      margin?: {
 *        top?: number,
 *        left?: number
 *      }
 *   },
 *   business?: {
 *       name?: string,
 *       address?: string,
 *       addressLine2?: string,
 *       addressLine3?: string,
 *       email_1?: string,
 *       country?: string,
 *   },
 *   contact?: {
 *       label?: string,
 *       name?: string,
 *       address?: string,
 *       addressLine2?: string,
 *       addressLine3?: string,
 *       country?: string,
 *   },
 *   data?: {
 *       label?: string,
 *       num?: number,
 *       date1Label?: string
 *       date1?: string,
 *       date2Label?: string
 *       date2?: string,
 *       headerBorder?: boolean,
 *       tableBodyBorder?: boolean,
 *       header?: string[],
 *       headerWidth?: number[],
 *       table?: any,
 *       subTotalLabel?: string,
 *       subTotal?: string,
 *       dppNilaiLainLabel?: string,
 *       dppNilaiLain?: string,
 *       currency?: string,
 *       descLabel?: string,
 *       customFields?: string[],
 *       desc?: string[],
 *       creditNoteLabel?: string,
 *       note?: string,
 *       requestedBy?: string,
 *       createdBy?: string,
 *       row1?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           },
 *           hideTotal?: boolean
 *       },
 *       row2?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           }
 *       },
 *       total?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           totalConv?: string;
 *           totalTaxAmount: string;
 *           totalTaxAmountConv: string;
 *           defaultCurrency?: string;
 *           convRate?: string;
 *           isFxConversionVisible: boolean;
 *           style?: {
 *               fontSize?: number
 *           }
 *       },
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
declare function jsPDFInvoiceTemplate(props: {
  outputType: string;
  returnJsPDFDocObject?: boolean;
  fileName: string;
  orientationLandscape?: boolean;
  pdfTitle?: string;
  isPdfForDsc?: boolean;
  logo?: {
    src?: string;
    width?: number;
    height?: number;
    margin?: {
      top?: number;
      left?: number;
    };
  };
  business?: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    email_1?: string;
    website?: string;
  };
  contact?: {
    label?: string;
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    otherInfo?: string;
    taxNumber?: string;
  };
  data?: {
    label?: string;
    subTotalLabel?: string;
    subTotal?: string;
    dppNilaiLainLabel?: string;
    dppNilaiLain?: string;
    num?: number | string;
    date1?: string;
    date1Label?: string;
    date2?: string;
    date2Label?: string;
    headerBorder?: boolean;
    tableBodyBorder?: boolean;
    header?: string[];
    headerWidth?: number[];
    table?: any;
    currency?: string;
    descLabel?: string;
    desc?: string[];
    note?: string;
    requestedBy?: string;
    createdBy?: string;
    row1?: {
      col1?: string;
      col2?: string;
      col3?: string;
      style?: {
        fontSize?: number;
      };
      hideTotal?: boolean;
    };
    row2?: {
      col1?: string;
      col2?: string;
      col3?: string;
      style?: {
        fontSize?: number;
      };
    };
    row3?: {
      col1?: string;
      col2?: string;
      col3?: string;
      style?: {
        fontSize?: number;
      };
    };
    total?: {
      col1?: string;
      col2?: string;
      col3?: string;
      totalTaxAmount: string;
      totalTaxAmountConv: string;
      subTotalConv?: string;
      dppNilaiLainConv?: string;
      totalConv?: string;
      defaultCurrency?: string;
      convRate?: string;
      isFxConversionVisible: boolean;
      style?: {
        fontSize?: number;
      };
    };
    indiaIRP?: {
      qrCode?: string;
      irn?: string;
      ackDate?: string;
      ackNumber?: string;
    };
    eSign?: {
      approverName?: string;
      approvedAt?: string;
      authorizer?: string;
      approverText?: string;
      signature?: {
        src?: string;
        width?: number;
        height?: number;
        margin?: {
          top?: string;
          left?: string;
        };
      };
    };
  };
  footer?: {
    text?: string;
  };
  pageEnable?: boolean;
  pageLabel?: string;
}): {
  pagesNumber: number;
  jsPDFDocObject?: jsPDF;
  blob?: Blob;
  dataUriString?: string;
  arrayBuffer?: ArrayBuffer;
  estamp?: {
    pageNumberForInvoiceTotal?: number;
    invoiceTotalLineHeight?: number;
  };
  digitalSign?: {
    signaturePageNumber?: number;
    signatureLineHeight?: number;
  };
};
export { jsPDF, OutputType, jsPDFRfqTemplate };
