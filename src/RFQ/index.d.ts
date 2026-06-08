export default jsPDFRfqTemplate;

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
 *       taxNumber?: string,
 *       phone?: string
 *   },
 *   data?: {
 *       label?: string,
 *       num?: number | string,
 *       date1Label?: string
 *       date1?: string,
 *       date2Label?: string
 *       date2?: string,
 *       netTermLabel?: string,
 *       netTerm?: string,
 *       headerBorder?: boolean,
 *       tableBodyBorder?: boolean,
 *       header?: string[],
 *       headerWidth?: number[],
 *       table?: any,
 *       descLabel?: string,
 *       desc?: string[],
 *       note?: string,
 *       requestedBy?: {
 *          name: string,
 *          phone?: string
 *        },
 *       pdfTitle?: string,
 *       staticVA?: {
 *          account: string,
 *          bank: string,
 *       },
 *       deliveryInstructions: string,
 *       col1: string[],
 *       col2: string[]
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
declare function jsPDFRfqTemplate(props: {
  outputType: string;
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
    col1?: string[];
    col2?: string[];
    deliveryInstructions?: string;
    requestedBy?: {
      name: string;
      phone?: string;
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
export { jsPDF, OutputType };
