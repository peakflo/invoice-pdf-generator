import "regenerator-runtime";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import QRCode from "qrcode";
import { getCustomFont } from "./font";
import jsPDFRfqTemplate from "./RFQ";
const OutputType = {
  Save: "save", //save pdf as a file
  DataUriString: "datauristring", //returns the data uri string
  DataUri: "datauri", //opens the data uri in current window
  DataUrlNewWindow: "dataurlnewwindow", //opens the data uri in new window
  Blob: "blob", //return blob format of the doc,
  ArrayBuffer: "arraybuffer", //return ArrayBuffer format
};

export { OutputType, jsPDF, jsPDFRfqTemplate };

/**
 *
 * @param {
 *  outputType: OutputType | string,
 *  returnJsPDFDocObject?: boolean,
 *  fileName: string,
 *  orientationLandscape?: boolean,
 *  isPdfForDsc?: boolean,
 *  pdfTitle?: string,
 *  pdfSubTitle?: string,
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
 *       taxNumber?: string
 *   },
 *   contact?: {
 *       label?: string,
 *       name?: string,
 *       billingAddress: {
 *          address?: string,
 *          addressLine2?: string,
 *          addressLine3?: string,
 *          country?: string,
 *       },
 *       shippingAddress?: {
 *          address?: string,
 *          addressLine2?: string,
 *          addressLine3?: string,
 *          country?: string,
 *       }
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
 *       subTotalLabel?: string,
 *       subTotal?: string,
 *       dppNilaiLainLabel?: string,
 *       dppNilaiLain?: string,
 *       currency?: string,
 *       descLabel?: string,
 *       desc?: string[],
 *       creditNoteLabel?: string,
 *       note?: string,
 *       requestedBy?: string,
 *       createdBy?: string,
 *       customFields?: string[],
 *       authorisedBy?: string,
 *       pdfTitle?: string,
 *       staticVA?: {
 *          account: string,
 *          bank: string,
 *       },
 *      indiaIRP?: {
 *          qrCode: string,
 *          irn: string,
 *          label4: string,
 *          gstRegType: string,
 *          label1: string,
 *          hsnNum: string,
 *          label3: string,
 *          gstStateWithCode: string
 *          label2: string,
 *          label5: string,
 *          label6: string,
 *          ackDate: string,
 *          ackNumber: string,
 *      },
 *      eSign?: {
 *          approverName?: string,
 *          approvedAt?: string,
 *          authorizer?: string,
 *          approverText?: string,
 *          signature?: {
 *              src?: string,
 *              width?: number,
 *              height?: number,
 *              margin?: {
 *                  top?: number,
 *                  left?: number
 *              }
 *          },
 *      },
 *       row1?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           col4?: any,
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
 *       row3?: {
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
 *           col4?: string,
 *           col5?: string,
 *           totalConv?: string,
 *           isFxConversionVisible: boolean,
 *           defaultCurrency?: string,
 *           convRate?: string,
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
async function jsPDFInvoiceTemplate(props) {
  const param = {
    outputType: props.outputType || OutputType.Save,
    returnJsPDFDocObject: props.returnJsPDFDocObject || false,
    fileName: props.fileName || "",
    orientationLandscape: props.orientationLandscape || false,
    pdfTitle: props.pdfTitle || "",
    isPdfForDsc: props.isPdfForDsc || false,
    pdfSubTitle: props.pdfSubTitle || "",
    logo: {
      src: props.logo?.src || "",
      width: props.logo?.width || "",
      height: props.logo?.height || "",
      margin: {
        top: props.logo?.margin?.top || 0,
        left: props.logo?.margin?.left || 0,
      },
    },
    business: {
      name: props.business?.name || "",
      address: props.business?.address || "",
      addressLine2: props.business?.addressLine2 || "",
      addressLine3: props.business?.addressLine3 || "",
      email_1: props.business?.email_1 || "",
      country: props.business?.country || "",
      taxNumber: props.business?.taxNumber || "",
    },
    contact: {
      label: props.contact?.label || "",
      name: props.contact?.name || "",
      billingAddress: {
        label: props.contact?.billingAddress?.label || "",
        address: props.contact?.billingAddress?.address || "",
        addressLine2: props.contact?.billingAddress?.addressLine2 || "",
        addressLine3: props.contact?.billingAddress?.addressLine3 || "",
        country: props.contact?.billingAddress?.country || "",
      },
      shippingAddress: {
        label: props.contact?.shippingAddress?.label || "",
        address: props.contact?.shippingAddress?.address || "",
        addressLine2: props.contact?.shippingAddress?.addressLine2 || "",
        addressLine3: props.contact?.shippingAddress?.addressLine3 || "",
        country: props.contact?.shippingAddress?.country || "",
      },
      taxNumber: props.contact?.taxNumber || "",
    },
    data: {
      label: props.data?.label || "",
      subTotalLabel: props.data?.subTotalLabel || "",
      dppNilaiLainLabel: props.data?.dppNilaiLainLabel || "",
      dppNilaiLain: props.data?.dppNilaiLain || "",
      date1Label: props.data?.date1Label || "",
      num: props.data?.num || "",
      date2Label: props.data?.date2Label || "",
      netTermLabel: props.data?.netTermLabel || "",
      date1: props.data?.date1 || "",
      date2: props.data?.date2 || "",
      netTerm: props.data?.netTerm || "",
      headerBorder: props.data?.headerBorder || false,
      tableBodyBorder: props.data?.tableBodyBorder || false,
      header: props.data?.header || [],
      headerWidth: props.data?.headerWidth || [],
      table: props.data?.table || [],
      subTotal: props.data?.subTotal || "",
      currency: props.data?.currency || "",
      descLabel: props.data?.descLabel || "",
      requestedBy: props.data?.requestedBy || "",
      createdBy: props.data?.createdBy || "",
      customFields: props.data?.customFields || [],
      authorisedBy: props.data?.authorisedBy || "",
      staticVA: props.data?.staticVA,
      desc: props.data?.desc || "",
      creditNoteLabel: props.data?.creditNoteLabel || "",
      note: props.data?.note || "",
      pdfTitle: props.data?.pdfTitle || "",
      row1: {
        col1: props.data?.row1?.col1 || "",
        col2: props.data?.row1?.col2 || "",
        col3: props.data?.row1?.col3 || "",
        col4: props.data?.row1?.col4 || [],
        style: {
          fontSize: props.data?.row1?.style?.fontSize || 12,
        },
        hideTotal: props.data?.row1?.hideTotal || false,
      },
      row2: {
        col1: props.data?.row2?.col1 || "",
        col2: props.data?.row2?.col2 || "",
        col3: props.data?.row2?.col3 || "",
        style: {
          fontSize: props.data?.row2?.style?.fontSize || 12,
        },
      },
      row3: {
        col1: props.data?.row3?.col1 || "",
        col2: props.data?.row3?.col2 || "",
        col3: props.data?.row3?.col3 || "",
        style: {
          fontSize: props.data?.row3?.style?.fontSize || 12,
        },
      },
      total: {
        col1: props.data?.total?.col1 || "", // Total label
        col2: props.data?.total?.col2 || "", // Total amount
        col3: props.data?.total?.col3 || "", // Invoice currency
        col4: props.data?.total?.col4 || "", // Total amount in words label
        col5: props.data?.total?.col5 || "", // Total amount in words
        totalConv: props.data?.total?.totalConv || "", // Total converted amount
        subTotalConv: props.data?.total?.subTotalConv || "", // sub total converted amount
        dppNilaiLainConv: props.data?.total?.dppNilaiLainConv || "",
        isFxConversionVisible: props.data?.total?.isFxConversionVisible,
        totalTaxAmount: props.data?.total?.totalTaxAmount || "",
        totalTaxAmountConv: props.data?.total?.totalTaxAmountConv || "",
        defaultCurrency: props.data?.total?.defaultCurrency || "", // default currency,
        convRate: props.data?.total?.convRate || "", // conversion rate
        style: {
          fontSize: props.data?.row2?.style?.fontSize || 12,
        },
      },
      amountDue: {
        col1: props.data?.amountDue?.col1 || "",
        col2: props.data?.amountDue?.col2 || "",
        col3: props.data?.amountDue?.col3 || "",
        style: {
          fontSize: props.data?.amountDue?.style?.fontSize || 12,
        },
      },
      creditNote: props.data?.creditNote || "",
      ...(props.data?.indiaIRP && {
        indiaIRP: {
          qrCode: props.data.indiaIRP.qrCode || "",
          irn: props.data.indiaIRP.irn || "",
          gstRegType: props.data.indiaIRP.gstRegType || "",
          hsnNum: props.data.indiaIRP.hsnNum || "",
          gstStateWithCode: props.data.indiaIRP.gstStateWithCode || "",
          label1: props.data.indiaIRP.label1 || "",
          label2: props.data.indiaIRP.label2 || "",
          label3: props.data.indiaIRP.label3 || "",
          label4: props.data.indiaIRP.label4 || "",
          label5: props.data.indiaIRP.label5 || "",
          label6: props.data.indiaIRP.label6 || "",
          ackDate: props.data.indiaIRP.ackDate ?? null,
          ackNumber: props.data.indiaIRP.ackNumber ?? null,
        },
      }),
      eSign: {
        approverName: props.data?.eSign?.approverName || "",
        approvedAt: props.data?.eSign?.approvedAt || "",
        authorizer: props.data?.eSign?.authorizer || "",
        approverText: props.data?.eSign?.approverText || "",
        signature: {
          src: props.data?.eSign?.signature?.src || "",
          width: props.data?.eSign?.signature?.width || 55,
          height: props.data?.eSign?.signature?.height || 20,
          margin: {
            top: props.data?.eSign?.signature?.margin?.top || "",
            left: props.data?.eSign?.signature?.margin?.left || "",
          },
        },
      },
    },
    footer: {
      text: props.footer?.text || "",
    },
    pageEnable: props.pageEnable || true,
    pageLabel: props.pageLabel || "Page",
  };

  const splitTextAndGetHeight = (text, size) => {
    const lines = doc.splitTextToSize(text, size);
    return {
      text: lines,
      height: doc.getTextDimensions(lines).h,
    };
  };
  if (param.data.table && param.data.table.length) {
    if (param.data.table[0].length != param.data.header.length)
      throw Error("Length of header and table column must be equal.");
  }

  const options = {
    orientation: param.orientationLandscape ? "landscape" : "",
    compressPdf: true,
  };

  // we check if the current height of the page is greater than the page height.
  // if true, then we break the change.
  // Checking with DEFAULT_CURRENT_HEIGHT because of current page needs to have some spacing at the bottom.
  const isBreakPage = (height, pageHeight) => {
    return (
      height > pageHeight ||
      (height > pageHeight - DEFAULT_CURRENT_HEIGHT &&
        doc.getNumberOfPages() > 1)
    );
  };

  const doc = new jsPDF(options);
  const pageWidth = doc.getPageWidth();
  const pageHeight = doc.getPageHeight() - 25; //25 is bottom margin
  const docWidth = doc.internal.pageSize.width;
  const docHeight = doc.internal.pageSize.height;

  const colorBlack = "#000000";
  const colorBlue = "#3367d6";
  const colorGray = "#4d4e53";
  const lightGray = "#888888";
  const FONT_TYPE_NORMAL = "normal";
  const FONT_TYPE_BOLD = "bold";
  const ALIGN_RIGHT = "right";
  const ALIGN_LEFT = "left";
  const ALIGN_CENTER = "center";
  const ISSUER_ADDRESS_LABEL = "Company Address";
  const IMAGE_CONTENT_TYPE = "PNG";
  const CUSTOM_FONT_NAME = "customFont";
  const DEFAULT_CURRENT_HEIGHT = 10;
  const DSC_HEIGHT = 30;

  //starting at 15mm
  let currentHeight = 15;

  const pdfConfig = {
    headerTextSize: 20,
    labelTitleSize: 16,
    labelTextSize: 12,
    fieldTextSize: 10,
    textSizeSmall: 8,
    lineHeight: 6,
    subLineHeight: 4,
  };
  doc.addFileToVFS("customFont.ttf", getCustomFont());
  doc.addFont("customFont.ttf", CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
  doc.setFont(CUSTOM_FONT_NAME);

  //Adding PDF title
  if (param.pdfTitle) {
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    currentHeight -= 7;
    doc.setFontSize(pdfConfig.labelTextSize);
    doc.text(docWidth / 2, currentHeight, param.pdfTitle, ALIGN_CENTER);
    currentHeight += pdfConfig.labelTextSize;
  }

  if (param.pdfSubTitle) {
    currentHeight -= 5;
    doc.text(docWidth / 2, currentHeight, param.pdfSubTitle, ALIGN_CENTER);
    currentHeight += pdfConfig.labelTextSize;
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
  }

  doc.setFontSize(pdfConfig.headerTextSize);
  doc.setTextColor(colorBlack);
  doc.text(
    docWidth - pdfConfig.fieldTextSize,
    currentHeight,
    param.business.name,
    ALIGN_RIGHT
  );
  doc.setFontSize(pdfConfig.fieldTextSize);

  // company logo
  if (param.logo.src) {
    doc.addImage(
      param.logo.src,
      IMAGE_CONTENT_TYPE,
      pdfConfig.fieldTextSize + param.logo.margin.left,
      currentHeight - 5 + param.logo.margin.top,
      param.logo.width,
      param.logo.height
    );
  }

  // tenant tax number
  if (param.business.taxNumber) {
    currentHeight += pdfConfig.subLineHeight + 2;
    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlue);
    doc.text(
      docWidth - pdfConfig.fieldTextSize,
      currentHeight,
      param.business.taxNumber,
      ALIGN_RIGHT
    );
    currentHeight += pdfConfig.subLineHeight;
  }
  doc.setTextColor(colorBlack);
  // IRP QR code
  // If QR code is availble, align issuer address to left. Else keep in right.
  const IRPQrCode = param.data?.indiaIRP?.qrCode;
  if (IRPQrCode) {
    await QRCode.toDataURL(IRPQrCode)
      .then((imagebase64) => {
        const qrBase64 = imagebase64;

        doc.addImage(
          qrBase64,
          IMAGE_CONTENT_TYPE,
          docWidth - 40,
          currentHeight,
          30,
          30
        );
        currentHeight += pdfConfig.fieldTextSize;
      })
      .catch((err) => {
        console.error(err);
      });

    if (param?.business?.address) {
      doc.setFontSize(pdfConfig.fieldTextSize);
      doc.text(pdfConfig.fieldTextSize, currentHeight, ISSUER_ADDRESS_LABEL);
    }
    currentHeight += pdfConfig.subLineHeight;
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    const addressLine1 = splitTextAndGetHeight(
      param.business.address,
      (docWidth * 4) / pdfConfig.fieldTextSize
    );

    doc.text(pdfConfig.fieldTextSize, currentHeight, param.business.address);
    currentHeight += addressLine1.height + 1;
    const addressLine2 = splitTextAndGetHeight(
      param.business.addressLine2,
      (docWidth * 4) / 10
    );
    doc.text(10, currentHeight, addressLine2.text);
    currentHeight += addressLine2.height + 1;

    if (param.business.addressLine3) {
      const addressLine3 = splitTextAndGetHeight(
        param.business.addressLine3,
        (docWidth * 4) / 10
      );
      doc.text(10, currentHeight, param.business.addressLine3);
      currentHeight += addressLine3.height + 1;
    }

    doc.text(10, currentHeight, param.business.country);

    currentHeight += pdfConfig.subLineHeight;
    doc.text(10, currentHeight, param.business.email_1);
  } else {
    if (param?.business?.address) {
      currentHeight += pdfConfig.lineHeight;
      doc.setFontSize(pdfConfig.fieldTextSize);
      doc.text(docWidth - 10, currentHeight, ISSUER_ADDRESS_LABEL, ALIGN_RIGHT);
    }
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    currentHeight += pdfConfig.subLineHeight;
    const addressLine1 = splitTextAndGetHeight(
      param.business.address,
      (docWidth * 4) / 10
    );
    doc.text(docWidth - 10, currentHeight, addressLine1.text, ALIGN_RIGHT);
    currentHeight += addressLine1.height + 1;
    const addressLine2 = splitTextAndGetHeight(
      param.business.addressLine2,
      (docWidth * 4) / 10
    );
    doc.text(docWidth - 10, currentHeight, addressLine2.text, ALIGN_RIGHT);
    currentHeight += addressLine2.height + 1;
    if (param.business.addressLine3) {
      const addressLine3 = splitTextAndGetHeight(
        param.business.addressLine3,
        (docWidth * 4) / 10
      );
      doc.text(docWidth - 10, currentHeight, addressLine3.text, ALIGN_RIGHT);
      currentHeight += addressLine3.height + 1;
    }

    doc.text(docWidth - 10, currentHeight, param.business.country, ALIGN_RIGHT);

    currentHeight += pdfConfig.subLineHeight;
    doc.text(docWidth - 10, currentHeight, param.business.email_1, ALIGN_RIGHT);
  }

  doc.setTextColor(colorGray);

  //line breaker after logo & business info
  if (param.data.header.length) {
    currentHeight += pdfConfig.subLineHeight;
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  }

  //Contact part
  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);
  currentHeight += pdfConfig.lineHeight + 2;

  doc.setFontSize(pdfConfig.headerTextSize - 7);
  let customerNameHeight = 0;
  if (param.contact.name) {
    const customerName = splitTextAndGetHeight(
      param.contact.name,
      pageWidth / 2
    );
    doc.text(10, currentHeight, customerName.text);
    customerNameHeight = customerName.height;
  }

  doc.setTextColor(colorBlack);
  doc.setTextColor(lightGray);
  doc.setFontSize(pdfConfig.headerTextSize - 5);
  let labelHeight = 0;
  if (param.data.label && param.data.num) {
    const label = splitTextAndGetHeight(
      param.data.label + param.data.num,
      (pageWidth * 4) / 10
    );
    doc.text(docWidth - 10, currentHeight, label.text, ALIGN_RIGHT);
    labelHeight = label.height;
  }

  if (param.contact.name || (param.data.label && param.data.num)) {
    currentHeight +=
      customerNameHeight > labelHeight ? customerNameHeight : labelHeight;
  }

  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);

  currentHeight += pdfConfig.subLineHeight;

  if (
    param.contact?.billingAddress?.label ||
    param.data.date1 ||
    param.data.date2
  ) {
    doc.setTextColor(colorBlack);
    const billingAddressLabel = param.contact?.billingAddress.label;
    const shippingAddressLabel = param.contact?.shippingAddress.label;
    doc.text(10, currentHeight, billingAddressLabel);
    doc.text(pageWidth / 3, currentHeight, shippingAddressLabel);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    if (param.data?.netTerm || param.data?.netTermLabel) {
      doc.text(
        docWidth - 70,
        currentHeight,
        param.data.date1Label,
        ALIGN_RIGHT
      );
      doc.text(
        docWidth - 40,
        currentHeight,
        param.data.netTermLabel,
        ALIGN_RIGHT
      );
    } else {
      doc.text(
        docWidth - 10,
        currentHeight,
        param.data.date1Label,
        ALIGN_RIGHT
      );
    }
    doc.text(docWidth - 10, currentHeight, param.data.date2Label, ALIGN_RIGHT);
    currentHeight += pdfConfig.subLineHeight;
  }

  if (
    param.contact?.billingAddress?.label ||
    param.data.date1 ||
    param.data.date2
  ) {
    const billingAddress = splitTextAndGetHeight(
      param.contact?.billingAddress.address,
      pageWidth / 2
    );
    const shippingAddress = splitTextAndGetHeight(
      param.contact?.shippingAddress.address,
      pageWidth / 2
    );
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth / 3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    if (param.data?.netTerm || param.data?.netTermLabel) {
      doc.text(docWidth - 70, currentHeight, param.data.date1, ALIGN_RIGHT);
      doc.text(docWidth - 40, currentHeight, param.data.netTerm, ALIGN_RIGHT);
    } else {
      doc.text(docWidth - 40, currentHeight, param.data.date1, ALIGN_RIGHT);
    }
    doc.text(docWidth - 10, currentHeight, param.data.date2, ALIGN_RIGHT);
    currentHeight +=
      billingAddress.height > shippingAddress.height
        ? billingAddress.height
        : shippingAddress.height;
  }

  if (param.contact?.billingAddress.addressLine1 || param.data.date2) {
    const billingAddress = splitTextAndGetHeight(
      param.contact?.billingAddress.addressLine2,
      pageWidth / 3 - 25
    );
    const shippingAddress = splitTextAndGetHeight(
      param.contact?.shippingAddress.addressLine2,
      pageWidth / 3 - 25
    );
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth / 3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    currentHeight +=
      billingAddress.height > shippingAddress.height
        ? billingAddress.height
        : shippingAddress.height;
  }

  if (param.contact?.billingAddress.addressLine3) {
    const billingAddress = splitTextAndGetHeight(
      param.contact?.billingAddress.addressLine3,
      pageWidth / 3 - 25
    );
    const shippingAddress = splitTextAndGetHeight(
      param.contact?.shippingAddress.addressLine3,
      pageWidth / 3 - 25
    );
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth / 3, currentHeight, shippingAddress.text);
    currentHeight +=
      billingAddress.height > shippingAddress.height
        ? billingAddress.height
        : shippingAddress.height;
  }

  if (
    param.contact.billingAddress.country ||
    param.contact.shippingAddress.country
  ) {
    doc.text(10, currentHeight, param.contact.billingAddress.country);
    doc.text(
      pageWidth / 3,
      currentHeight,
      param.contact.shippingAddress.country
    );
  } else currentHeight -= pdfConfig.subLineHeight;
  //end contact part

  if (param.contact?.taxNumber) {
    currentHeight += pdfConfig.subLineHeight;
    doc.text(10, currentHeight, param.contact.taxNumber);
  }

  const indiaIRP = param.data?.indiaIRP;
  if (indiaIRP) {
    currentHeight += 2 * pdfConfig.subLineHeight;

    if (indiaIRP.gstRegType) {
      doc.setFont(undefined, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, indiaIRP.label1);
      doc.setFont(undefined, FONT_TYPE_BOLD);
      doc.text(
        10 + doc.getTextWidth(indiaIRP.label1),
        currentHeight,
        indiaIRP.gstRegType
      );
      currentHeight += pdfConfig.subLineHeight;
    }

    if (indiaIRP.gstStateWithCode) {
      doc.setFont(undefined, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, indiaIRP.label2);
      doc.setFont(undefined, FONT_TYPE_BOLD);
      doc.text(
        10 + doc.getTextWidth(indiaIRP.label2),
        currentHeight,
        indiaIRP.gstStateWithCode
      );
      currentHeight += pdfConfig.subLineHeight;
    }

    if (indiaIRP.hsnNum) {
      doc.setFont(undefined, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, indiaIRP.label3);
      doc.setFont(undefined, FONT_TYPE_BOLD);
      doc.text(
        10 + doc.getTextWidth(indiaIRP.label3),
        currentHeight,
        indiaIRP.hsnNum
      );
      currentHeight += pdfConfig.subLineHeight;
    }

    if (indiaIRP.irn) {
      doc.setFont(undefined, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, indiaIRP.label4);
      doc.setFont(undefined, FONT_TYPE_BOLD);
      doc.text(
        10 + doc.getTextWidth(indiaIRP.label4),
        currentHeight,
        indiaIRP.irn
      );
      currentHeight += pdfConfig.subLineHeight;
    } else {
      doc.setFont(undefined, FONT_TYPE_BOLD);
      currentHeight += pdfConfig.subLineHeight;
    }

    if (indiaIRP.ackDate && indiaIRP.ackNumber) {
      doc.setFont(undefined, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, indiaIRP.label5);
      doc.setFont(undefined, FONT_TYPE_BOLD);
      doc.text(
        10 + doc.getTextWidth(indiaIRP.label5),
        currentHeight,
        indiaIRP.ackDate
      );
      currentHeight += pdfConfig.subLineHeight;
      doc.setFont(undefined, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, indiaIRP.label6);
      doc.setFont(undefined, FONT_TYPE_BOLD);
      doc.text(
        10 + doc.getTextWidth(indiaIRP.label6),
        currentHeight,
        indiaIRP.ackNumber
      );
      currentHeight += pdfConfig.subLineHeight;
    }
  }

  // INVOICE TITLE - INMOBI change
  if (param.data?.pdfTitle) {
    currentHeight += pdfConfig.subLineHeight + 2;
    // doc.setTextColor(colorBlue);
    doc.setFontSize(pdfConfig.labelTextSize);
    const pdfTitle = splitTextAndGetHeight(
      param.data?.pdfTitle,
      (pageWidth * 3) / 4
    );

    doc.text(10, currentHeight, pdfTitle.text, ALIGN_LEFT);
    currentHeight += pdfTitle.height - 4;
  }

  doc.setTextColor(colorGray);

  //TABLE PART

  const tdWidth =
    (pageWidth - pdfConfig.headerTextSize) / param.data.header.length;

  function getTdWidthDimensions() {
    let leftShift = 10;
    const result = [];
    for (let i = 0; i < param.data.header.length; i++) {
      result.push({
        shift: leftShift,
        width: param.data.headerWidth?.[i]
          ? (pageWidth - pdfConfig.headerTextSize) * param.data.headerWidth[i]
          : tdWidth,
      });
      leftShift =
        leftShift +
        (param.data.headerWidth?.[i]
          ? (pageWidth - pdfConfig.headerTextSize) * param.data.headerWidth[i]
          : tdWidth);
    }
    return result;
  }

  const addTableHeaderBoarder = () => {
    const tdWidthDimensions = getTdWidthDimensions();
    currentHeight += 2;
    for (let i = 0; i < param.data.header.length; i++) {
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
      doc.rect(
        tdWidthDimensions?.[i]?.shift,
        currentHeight,
        tdWidthDimensions?.[i]?.width,
        7
      );
    }
    currentHeight -= 2;
  };
  const addTableBodyBoarder = (lineHeight) => {
    const tdWidthDimensions = getTdWidthDimensions();
    for (let i = 0; i < param.data.header.length; i++) {
      doc.rect(
        tdWidthDimensions?.[i]?.shift,
        currentHeight,
        tdWidthDimensions?.[i]?.width,
        lineHeight
      );
    }
  };
  const addTableHeader = () => {
    if (param.data.headerBorder) addTableHeaderBoarder();

    currentHeight += pdfConfig.subLineHeight + DEFAULT_CURRENT_HEIGHT;
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize);
    //border color
    doc.setDrawColor(colorGray);
    currentHeight += 2;

    const tdWidthDimensions = getTdWidthDimensions();
    let maxTextHeightHeader = 0;
    param.data.header.forEach(function (row, index) {
      const rowtext = splitTextAndGetHeight(
        row,
        tdWidthDimensions[index].width - 3
      );
      maxTextHeightHeader = Math.max(maxTextHeightHeader, rowtext.height);
      doc.text(rowtext.text, tdWidthDimensions?.[index]?.shift, currentHeight);
    });

    currentHeight += pdfConfig.subLineHeight - 1;
    currentHeight += maxTextHeightHeader + 1;
    doc.setTextColor(colorGray);
    doc.setLineWidth(0.5);
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  };
  addTableHeader();

  //table body
  const tableBodyLength = param.data.table.length;
  doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);

  param.data.table.forEach(function (row, index) {
    //get nax height for the current row
    let rowsHeight = [];
    const getRowsHeight = function () {
      doc.setFontSize(pdfConfig.textSizeSmall);
      const tdWidthDimensions = getTdWidthDimensions();
      row.forEach(function (rr, index) {
        //size should be the same used in other td
        let item = splitTextAndGetHeight(
          rr.toString(),
          tdWidthDimensions?.[index]?.width - 1
        ); //minus 1, to fix the padding issue between borders
        rowsHeight.push(item.height);
      });
    };
    getRowsHeight();
    const maxHeight = Math.max(...rowsHeight);

    //body borders
    if (param.data.tableBodyBorder) addTableBodyBoarder(maxHeight + 1);

    //display text into row cells
    //Object.entries(row).forEach(function(col, index) {
    const tdWidthDimensions = getTdWidthDimensions();

    //pre-increase currentHeight to check the height based on next row
    if (index + 1 < tableBodyLength) currentHeight += maxHeight;

    if (isBreakPage(currentHeight, pageHeight)) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
      if (index + 1 < tableBodyLength) addTableHeader();
    } else {
      // check if new page
      if (index + 1 < tableBodyLength && currentHeight > 30)
        currentHeight -= maxHeight;
    }

    doc.setFontSize(pdfConfig.textSizeSmall);
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
    row.forEach(function (rr, index) {
      let item = splitTextAndGetHeight(
        rr.toString(),
        tdWidthDimensions?.[index]?.width - 1
      );

      doc.text(item.text, tdWidthDimensions?.[index]?.shift, currentHeight + 4);
    });

    doc.setLineWidth(0.1);
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
    currentHeight += maxHeight + 2;

    //td border height
    currentHeight += 4;
  });

  // no table data
  if (tableBodyLength === 0) {
    currentHeight += 6;
    doc.text("No Data", docWidth / 2, currentHeight);
  }

  doc.setTextColor(colorBlack);
  doc.setFontSize(10);
  currentHeight += pdfConfig.lineHeight;

  if (
    param.data.subTotal ||
    param.data.row1 ||
    param.data.row2 ||
    param.data.total
  ) {
    if (isBreakPage(currentHeight, pageHeight)) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
    }
  }

  currentHeight += pdfConfig.lineHeight;

  if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
    doc.addPage();
    currentHeight = DEFAULT_CURRENT_HEIGHT;
  }

  // No. of rows of sub total, taxes, discounts .. until Total (NOT TABLE ROWS).
  let finalRowCount = 0;

  //line breaker before invoce total
  if (
    param.data.header.length &&
    (param.data.subTotal || param.data.subTotalLabel || param.data.currency)
  ) {
    doc.setLineWidth(0.5);
    doc.line(docWidth / 2 + 10, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
  }

  // return the page number the above line is on
  const pageNumberForInvoiceTotal = doc.internal.getNumberOfPages();
  const invoiceTotalLineHeight = currentHeight;

  // Subtotal line
  if (param.data.subTotalLabel && param.data.subTotal) {
    doc.text(
      docWidth - 50,
      currentHeight,
      param.data.subTotalLabel,
      ALIGN_RIGHT
    );
    doc.text(
      docWidth - 10,
      currentHeight,
      param.data.currency + "  " + param.data.subTotal.toLocaleString(),
      ALIGN_RIGHT
    );

    finalRowCount += 1;
  }

  if (param.data.dppNilaiLainLabel && param.data.dppNilaiLain) {
    doc.text(
      docWidth - 50,
      currentHeight += pdfConfig.lineHeight,
      param.data.dppNilaiLainLabel,
      ALIGN_RIGHT
    );
    doc.text(
      docWidth - 10,
      currentHeight,
      param.data.currency + "  " + param.data.dppNilaiLain.toLocaleString(),
      ALIGN_RIGHT
    );

    finalRowCount += 1;
  }

  //row1 - tax
  if (
    param.data.row1 &&
    (param.data.row1.col1 || param.data.row1.col2 || param.data.row1.col3)
  ) {
    if (!param.data.row1.hideTotal) {
      currentHeight += pdfConfig.lineHeight;
      doc.setFontSize(param.data.row1.style.fontSize);

      doc.text(docWidth - 50, currentHeight, param.data.row1.col1, ALIGN_RIGHT);
      doc.text(
        docWidth - 10,
        currentHeight,
        param.data.row1.col3 + "  " + param.data.row1.col2,
        ALIGN_RIGHT
      );

      finalRowCount += 1;
    }

    // Show all the taxes applied
    const taxData = param.data.row1?.col4;
    if (taxData) {
      doc.setTextColor(lightGray);
      taxData.forEach((tax) => {
        currentHeight += pdfConfig.lineHeight;
        if (isBreakPage(currentHeight, pageHeight)) {
          doc.addPage();
          currentHeight = pdfConfig.headerTextSize;
        }
        doc.text(docWidth - 50, currentHeight, `${tax.name}:`, ALIGN_RIGHT);
        doc.text(
          docWidth - 10,
          currentHeight,
          param.data.row1.col3 + "  " + tax.amount,
          ALIGN_RIGHT
        );
      });

      finalRowCount += taxData.length;
    }
  }
  //end row1

  doc.setTextColor(colorBlack);
  //row2 - discounts
  if (
    param.data.row2 &&
    (param.data.row2.col1 || param.data.row2.col2 || param.data.row2.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row2.style.fontSize);

    doc.text(docWidth - 50, currentHeight, param.data.row2.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.row2.col2, ALIGN_RIGHT);
    finalRowCount += 1;
  }
  //end row2

  if (
    param.data.row3 &&
    (param.data.row3.col1 || param.data.row3.col2 || param.data.row3.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.text(docWidth - 50, currentHeight, param.data.row3.col1, ALIGN_RIGHT);
    doc.text(
      docWidth - 10,
      currentHeight,
      param.data.row3.col3 + "  " + param.data.row3.col2,
      ALIGN_RIGHT
    );
    finalRowCount += 1;
  }

  // Main total
  if (
    param.data.total &&
    (param.data.total.col1 || param.data.total.col2 || param.data.total.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.text(docWidth - 50, currentHeight, param.data.total.col1, ALIGN_RIGHT);
    doc.text(
      docWidth - 10,
      currentHeight,
      param.data.total.col3 + "  " + param.data.total.col2,
      ALIGN_RIGHT
    );
    finalRowCount += 1;
  }

  // -1 = because the fx rate box is one row lower
  // 5 = each row height
  const finalRowHeight = (finalRowCount - 1) * 5;

  // Add a line height after convertion rate table and totals
  // 35 = height of fx rate box
  if (param.data.total.totalConv && finalRowHeight < 35) {
    const diff = 35 - finalRowHeight;
    currentHeight += pdfConfig.fieldTextSize + diff;
  } else {
    currentHeight += pdfConfig.fieldTextSize;
  }

  // Total in words
  if (param.data.total?.col4 && param.data.total?.col5) {
    if (isBreakPage(currentHeight, pageHeight)) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
    }
    const totalInWords = splitTextAndGetHeight(
      param.data.total.col5,
      pageWidth - pdfConfig.headerTextSize
    );

    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.total.col4);
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(
      10 + doc.getTextWidth(param.data.total.col4),
      currentHeight,
      totalInWords.text
    );
    currentHeight += pdfConfig.subLineHeight + totalInWords.height;
  }

  // Amount Due
  doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);

  if (
    param.data.amountDue &&
    (param.data.amountDue.col1 ||
      param.data.amountDue.col2 ||
      param.data.amountDue.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.amountDue.style.fontSize);
    doc.text(
      docWidth - 50,
      currentHeight,
      param.data.creditNoteLabel,
      ALIGN_RIGHT
    );
    doc.text(docWidth - 10, currentHeight, param.data.creditNote, ALIGN_RIGHT);
    currentHeight += pdfConfig.lineHeight;

    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;

    doc.text(
      docWidth - 50,
      currentHeight,
      param.data.amountDue.col1,
      ALIGN_RIGHT
    );
    doc.text(
      docWidth - 10,
      currentHeight,
      param.data.amountDue.col3 + "  " + param.data.amountDue.col2,
      ALIGN_RIGHT
    );
  }

  if (param.data.total.isFxConversionVisible) {
    // (15 = Conv table height) + (10 = box height) = 25
    if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
    }

    // Define the box parameters
    const boxWidth = 95;
    const boxHeight = 30;
    const boxX = pageWidth - boxWidth - 10;
    const boxY = currentHeight + 5;

    // Draw the box
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(255, 255, 255);
    doc.setLineWidth(0.2);
    doc.rect(boxX, boxY, boxWidth, boxHeight, "FD");

    // Add text to the box
    doc.setTextColor(0, 0, 0);
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.text("For GST reporting purposes:", boxX + 5, boxY + 5);
    doc.line(boxX + 5, boxY + 7.5, boxX + boxWidth - 5, boxY + 7.5);
    doc.setFontSize(10);
    doc.text(
      `1 ${param.data.total.col3} = ${param.data.total.convRate} ${param.data.total.defaultCurrency}`,
      boxX + 5,
      boxY + 13
    );

    // Add the table
    doc.autoTable({
      startY: boxY + 18,
      margin: { left: boxX, right: 0 },
      head: [["", `Amount ${param.data.total.defaultCurrency}`]],
      body: [
        ["Subtotal", param.data.total.subTotalConv],
        
        ["Dpp Nilai Lain", param.data.total.dppNilaiLainConv],
        
        ["Total Tax", param.data.total.totalTaxAmountConv],
        [
          {
            content: `Total ${param.data.total.defaultCurrency}`,
            fontStyle: "bold",
          },
          { content: param.data.total.totalConv, fontStyle: "bold" },
        ],
      ],
      theme: "plain",
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.2,
        fontSize: 8,
        align: "right",
        minCellHeight: 5,
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        lineWidth: 0.2,
        lineColor: [0, 0, 0],
        fontSize: 9,
        minCellHeight: 5,
      },
      columnStyles: {
        0: { cellWidth: 40, halign: "right", valign: "top" },
        1: { cellWidth: 55, halign: "left", valign: "top" },
      },
      rowStyles: {
        1: { fontStyle: "bold" },
      },
    });
    currentHeight += boxHeight + 30;
  }

  doc.setTextColor(colorBlack);
  currentHeight += pdfConfig.subLineHeight - 1;
  //   currentHeight += pdfConfig.subLineHeight;
  doc.setFontSize(pdfConfig.labelTextSize);

  // requested by and created by (side by side)
  if (param.data.requestedBy || param.data.createdBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    
    // If both fields exist, place them side by side
    if (param.data.requestedBy && param.data.createdBy) {
      // Requested By (left side)
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
      doc.text(10, currentHeight, "Requested By");
      
      // Created By (right side - positioned at middle of page)
      doc.text(docWidth / 2, currentHeight, "Created By");
      
      currentHeight += pdfConfig.subLineHeight;
      
      // Values for both fields
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, param.data.requestedBy);
      doc.text(docWidth / 2, currentHeight, param.data.createdBy);
      
      currentHeight += pdfConfig.lineHeight;
    } else {
      // If only one field exists, display it normally
      if (param.data.requestedBy) {
        doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
        doc.text(10, currentHeight, "Request By");
        currentHeight += pdfConfig.subLineHeight;
        
        doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
        doc.text(10, currentHeight, param.data.requestedBy);
      } else if (param.data.createdBy) {
        doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
        doc.text(10, currentHeight, "Created By");
        currentHeight += pdfConfig.subLineHeight;
        
        doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
        doc.text(10, currentHeight, param.data.createdBy);
      }
      currentHeight += pdfConfig.lineHeight;
    }
  }

  const addDesc = () => {
    doc.setFontSize(pdfConfig.labelTextSize - 2);
    doc.setTextColor(colorBlack);

    if (param.data?.desc.length > 0) {
      currentHeight += 1;
      param.data?.desc?.forEach((el, index) => {
        const desc = splitTextAndGetHeight(el, pageWidth - 40);
        if (currentHeight + desc.height > pageHeight) {
          doc.addPage();
          currentHeight = DEFAULT_CURRENT_HEIGHT;
        }

        if (index === 0) {
          doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
          doc.text(10, currentHeight, param.data.descLabel);
          doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
          currentHeight += pdfConfig.subLineHeight;
        }
        doc.text(10, currentHeight, desc.text);
        currentHeight += desc.height + 1;
      });
    }
  };

  if (param.data?.desc?.length > 0) addDesc();

  // Note
  if (param.data.note) {
    currentHeight += pdfConfig.labelTextSize;
    const noteData = splitTextAndGetHeight(
      param.data.note,
      pageWidth - pdfConfig.headerTextSize
    );

    if (currentHeight + noteData.height > pageHeight) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
    }
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.setFontSize(pdfConfig.labelTextSize);
    doc.text(10, currentHeight, "Note");
    currentHeight += pdfConfig.lineHeight;

    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, noteData.text);
    currentHeight += pdfConfig.lineHeight + noteData.height;
  }

  // Additional Information - custom fields
  if (param.data.customFields.length) {
    currentHeight += pdfConfig.lineHeight;

    // Write the "Additional Information" label

    param.data.customFields.forEach((item, index) => {
      // Calculate text height
      const { text, height } = splitTextAndGetHeight(
        item,
        pageWidth - pdfConfig.headerTextSize
      );

      // Check if adding this item will exceed the page height
      if (currentHeight + height > pageHeight) {
        doc.addPage();
        currentHeight = pdfConfig.headerTextSize; // Reset to the top of the new page
      }

      if (index === 0) {
        doc.setFontSize(pdfConfig.labelTextSize);
        doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
        doc.text(
          pdfConfig.fieldTextSize,
          currentHeight,
          "Additional Information"
        );
        // Increment height for the next line
        currentHeight += 2 * pdfConfig.subLineHeight;
        doc.setFontSize(pdfConfig.fieldTextSize);
        doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
      }

      // Add the text
      doc.text(pdfConfig.fieldTextSize, currentHeight, text);
      currentHeight += height; // Increment the current height
    });

    // Add spacing after the section
    currentHeight += pdfConfig.lineHeight;
  }

  // authorised by
  if (param.data.authorisedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, "Authorised By");
    currentHeight += pdfConfig.subLineHeight;

    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.authorisedBy);
    currentHeight += pdfConfig.lineHeight;
  }

  // static VA payment details
  if (param.data.staticVA) {
    currentHeight += pdfConfig.lineHeight;
    const staticVAContent = `Account Name: ${param.business.name}\nBank Name: ${param.data.staticVA.bank}\nAccount Number: ${param.data.staticVA.account}`;
    const paymentDetails = splitTextAndGetHeight(
      staticVAContent,
      pageWidth - 40
    );

    if (currentHeight + paymentDetails.height > pageHeight) {
      doc.addPage();
      currentHeight = pdfConfig.headerTextSize;
    }
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, "Payment details");
    currentHeight += pdfConfig.subLineHeight;

    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, paymentDetails.text);
    currentHeight += pdfConfig.lineHeight + paymentDetails.height;
  }

  let signaturePageNumber;
  let signatureLineHeight;
  if (param?.isPdfForDsc) {
    // PDF is for Digital Signature
    currentHeight += pdfConfig.subLineHeight;
    if (
      currentHeight + DSC_HEIGHT > pageHeight ||
      (currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT &&
        doc.getNumberOfPages() > 1)
    ) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
    }
    signaturePageNumber = doc.internal.getNumberOfPages();
    signatureLineHeight = currentHeight;
    currentHeight += DSC_HEIGHT;
    currentHeight += pdfConfig.subLineHeight;
  }

  // E signature
  if (param.data?.eSign?.signature?.src) {
    if (
      currentHeight +
        (param.data?.eSign?.signature?.height || pdfConfig.headerTextSize) >
        pageHeight ||
      (currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT &&
        doc.getNumberOfPages() > 1)
    ) {
      doc.addPage();
      currentHeight = DEFAULT_CURRENT_HEIGHT;
    }
    currentHeight += pdfConfig.subLineHeight;
    doc.addImage(
      param.data?.eSign?.signature?.src,
      IMAGE_CONTENT_TYPE,
      docWidth - 65,
      currentHeight,
      param.data?.eSign?.signature?.width,
      param.data?.eSign?.signature?.height
    );
    currentHeight += pdfConfig.headerTextSize;

    doc.setFontSize(pdfConfig.labelTextSize - 2);
    doc.setTextColor(colorBlack);

    if (param.data?.eSign?.authorizer) {
      currentHeight += pdfConfig.lineHeight;
      doc.text(
        docWidth - 10,
        currentHeight,
        `${param.data?.eSign?.authorizer},`,
        ALIGN_RIGHT
      );
    }

    currentHeight += pdfConfig.subLineHeight;
    doc.text(
      docWidth - 10,
      currentHeight,
      `${param.data?.eSign?.approverText} ${param.data?.eSign?.approverName},`,
      ALIGN_RIGHT
    );

    currentHeight += pdfConfig.subLineHeight;
    doc.text(
      docWidth - 10,
      currentHeight,
      `on ${param.data?.eSign?.approvedAt}.`,
      ALIGN_RIGHT
    );
  }

  const numPages = doc.getNumberOfPages();

  // Add Page Number at bottom
  // Iterates through each page and adds the page number at bottom
  for (let i = 1; i <= numPages; i++) {
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.setTextColor(colorGray);
    if (param.pageEnable) {
      doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
    }
    doc.setPage(i);
    doc.text(
      param.pageLabel + " " + i + " / " + numPages,
      docWidth - pdfConfig.headerTextSize,
      doc.internal.pageSize.height - 6
    );
  }

  let returnObj = {
    pagesNumber: doc.getNumberOfPages(),
  };

  if (param.returnJsPDFDocObject) {
    returnObj = {
      ...returnObj,
      jsPDFDocObject: doc,
    };
  }

  if (param.outputType === OutputType.Save) doc.save(param.fileName);
  else if (param.outputType === OutputType.Blob) {
    const blobOutput = doc.output(OutputType.Blob);
    returnObj = {
      ...returnObj,
      blob: blobOutput,
    };
  } else if (param.outputType === OutputType.DataUriString) {
    returnObj = {
      ...returnObj,
      dataUriString: doc.output(OutputType.DataUriString, {
        filename: param.fileName,
      }),
    };
  } else if (param.outputType === OutputType.ArrayBuffer) {
    returnObj = {
      ...returnObj,
      arrayBuffer: doc.output(OutputType.ArrayBuffer),
    };
  } else
    doc.output(param.outputType, {
      filename: param.fileName,
    });

  returnObj.estamp = {
    pageNumberForInvoiceTotal,
    invoiceTotalLineHeight,
  };

  if (param.isPdfForDsc) {
    returnObj.digitalSign = {
      signaturePageNumber,
      signatureLineHeight,
    };
  }

  return returnObj;
}

export default jsPDFInvoiceTemplate;
