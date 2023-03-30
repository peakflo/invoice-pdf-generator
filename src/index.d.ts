export default jsPDFInvoiceTemplate;
export namespace OutputType {
  const Save: string;
  const DataUriString: string;
  const DataUri: string;
  const DataUrlNewWindow: string;
  const Blob: string;
  const ArrayBuffer: string;
}
import { jsPDF } from "jspdf";
/**
 *
 * @param {
 *  outputType: OutputType | string,
 *  returnJsPDFDocObject?: boolean,
 *  fileName: string,
 *  orientationLandscape?: boolean,
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
 *       table?: any,
 *       subTotalLabel?: string,
 *       subTotal?: string,
 *       currency?: string,
 *       descLabel?: string,
 *       desc?: string[],
 *       creditNoteLabel?: string,
 *       note?: string,
 *       row1?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           }
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
  outputType:
    | {
        Save: string;
        DataUriString: string;
        DataUri: string;
        DataUrlNewWindow: string;
        Blob: string;
        ArrayBuffer: string;
      }
    | string;
  returnJsPDFDocObject?: boolean;
  fileName: string;
  orientationLandscape?: boolean;
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
    num?: number | string;
    date1?: string;
    date1Label?: string;
    date2?: string;
    date2Label?: string;
    headerBorder?: boolean;
    tableBodyBorder?: boolean;
    header?: string[];
    table?: any;
    currency?: string;
    descLabel?: string;
    desc?: string[];
    note?: string;
    row1?: {
      col1?: string;
      col2?: string;
      col3?: string;
      style?: {
        fontSize?: number;
      };
    };
    row2?: {
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
      style?: {
        fontSize?: number;
      };
    };
    indiaIRP?: {
      qrCode?: string;
      irn?: string;
    };
    eSign?: {
      approverName?: string;
      approvedAt?: string;
      authorizer?: string;
      approverText?: string;
      signature?: {
        src?: string;
        width?: string;
        height?: string;
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
};
export { jsPDF };
