import { jsPDF } from "jspdf";

const OutputType = {
  Save: "save", //save pdf as a file
  DataUriString: "datauristring", //returns the data uri string
  DataUri: "datauri", //opens the data uri in current window
  DataUrlNewWindow: "dataurlnewwindow", //opens the data uri in new window
  Blob: "blob", //return blob format of the doc,
  ArrayBuffer: "arraybuffer", //return ArrayBuffer format
};

export { OutputType, jsPDF };

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
 *       requestedBy?: string,
 *       authorisedBy?: string,
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
function jsPDFInvoiceTemplate(props) {
  const param = {
    outputType: props.outputType || OutputType.Save,
    returnJsPDFDocObject: props.returnJsPDFDocObject || false,
    fileName: props.fileName || "",
    orientationLandscape: props.orientationLandscape || false,
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
    },
    contact: {
      label: props.contact?.label || "",
      name: props.contact?.name || "",
      billingAddress: {
        label:  props.contact?.billingAddress?.label || "",
        address: props.contact?.billingAddress?.address || "",
        addressLine2: props.contact?.billingAddress?.addressLine2 || "",
        addressLine3: props.contact?.billingAddress?.addressLine3 || "",
        country: props.contact?.billingAddress?.country || "",
      },
      shippingAddress: {
        label:  props.contact?.shippingAddress?.label || "",
        address: props.contact?.shippingAddress?.address || "",
        addressLine2: props.contact?.shippingAddress?.addressLine2 || "",
        addressLine3: props.contact?.shippingAddress?.addressLine3 || "",
        country: props.contact?.shippingAddress?.country || "",
      },
    },
    data: {
      label: props.data?.label || "",
      subTotalLabel: props.data?.subTotalLabel || "",
      date1Label: props.data?.date1Label || "",
      num: props.data?.num || "",
      date2Label: props.data?.date2Label || "",
      date1: props.data?.date1 || "",
      date2: props.data?.date2 || "",
      headerBorder: props.data?.headerBorder || false,
      tableBodyBorder: props.data?.tableBodyBorder || false,
      header: props.data?.header || [],
      table: props.data?.table || [],
      subTotal: props.data?.subTotal || "",
      currency: props.data?.currency || "",
      descLabel: props.data?.descLabel || "",
      requestedBy: props.data?.requestedBy || "",
      authorisedBy: props.data?.authorisedBy || "",
      desc: props.data?.desc || "",
      creditNoteLabel: props.data?.creditNoteLabel || "",
      note: props.data?.note || "",
      row1: {
        col1: props.data?.row1?.col1 || "",
        col2: props.data?.row1?.col2 || "",
        col3: props.data?.row1?.col3 || "",
        style: {
          fontSize: props.data?.row1?.style?.fontSize || 12,
        },
      },
      row2: {
        col1: props.data?.row2?.col1 || "",
        col2: props.data?.row2?.col2 || "",
        col3: props.data?.row2?.col3 || "",
        style: {
          fontSize: props.data?.row2?.style?.fontSize || 12,
        },
      },
      total: {
        col1: props.data?.total?.col1 || "",
        col2: props.data?.total?.col2 || "",
        col3: props.data?.total?.col3 || "",
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


    },
    footer: {
      text: props.footer?.text || "",
    },
    pageEnable: props.pageEnable || false,
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
  };

  const doc = new jsPDF(options);
  const pageWidth = doc.getPageWidth();
  const pageHeight = doc.getPageHeight() - 25; //25 is bottom margin
  const docWidth = doc.internal.pageSize.width;
  const docHeight = doc.internal.pageSize.height;

  const colorBlack = "#000000";
  const colorGray = "#4d4e53";
  const lightGray = "#888888"
  const FONT_TYPE_NORMAL = "normal"
  const FONT_TYPE_BOLD = "bold"
  const ALIGN_RIGHT = "right"
  const ALIGN_CENTER = "center"

  //starting at 15mm
  let currentHeight = 15;

  const pdfConfig = {
    headerTextSize: 20,
    labelTextSize: 12,
    fieldTextSize: 10,
    lineHeight: 6,
    subLineHeight: 4,
  };

  doc.setFontSize(pdfConfig.headerTextSize);
  doc.setTextColor(colorBlack);
  doc.text(docWidth - 10, currentHeight, param.business.name, ALIGN_RIGHT);
  doc.setFontSize(pdfConfig.fieldTextSize);
  if (param.logo.src) {
    doc.addImage(
      param.logo.src,
      'PNG',
      10 + param.logo.margin.left,
      currentHeight - 5 + param.logo.margin.top,
      param.logo.width,
      param.logo.height
    );
  }

  doc.setTextColor(colorGray);

  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.address, ALIGN_RIGHT);
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.addressLine2, ALIGN_RIGHT);
  doc.setFontSize(pdfConfig.fieldTextSize);
  // doc.setTextColor(colorGray);
  currentHeight += pdfConfig.subLineHeight;

  if (param.business.addressLine3) {
    doc.text(docWidth - 10, currentHeight, param.business.addressLine3, ALIGN_RIGHT);
    currentHeight += pdfConfig.subLineHeight;
  }

  doc.text(docWidth - 10, currentHeight, param.business.country, ALIGN_RIGHT);

  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.email_1, ALIGN_RIGHT);

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
  if (param.contact.name) {
    doc.text(10, currentHeight, param.contact.name)
  };

  doc.setTextColor(colorBlack);
  doc.setTextColor(lightGray);
  doc.setFontSize(pdfConfig.headerTextSize - 5);
  if (param.data.label && param.data.num) {
    doc.text(
      docWidth - 10,
      currentHeight,
      param.data.label + param.data.num,
      ALIGN_RIGHT
    );
  }

  if (param.contact.name || (param.data.label && param.data.num))
    currentHeight += pdfConfig.subLineHeight + 2;

  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);

  if (param.contact?.billingAddress.address || param.data.date1) {
    const billingAddressLabel = param.contact?.billingAddress.label
    const shippingAddressLabel = param.contact?.shippingAddress.label
    doc.text(10, currentHeight, billingAddressLabel);
    doc.text(pageWidth/3, currentHeight, shippingAddressLabel);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.text(docWidth - 10, currentHeight, param.data.date2Label, ALIGN_RIGHT);
    doc.text(docWidth - 40, currentHeight, param.data.date1Label, ALIGN_RIGHT);
    currentHeight += pdfConfig.subLineHeight
  }

  if (param.contact?.billingAddress.address || param.data.date1) {
    const billingAddress = splitTextAndGetHeight(param.contact?.billingAddress.address, ((pageWidth/3) - 25))
    const shippingAddress = splitTextAndGetHeight(param.contact?.shippingAddress.address, ((pageWidth/3) - 25))
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth/3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.text(docWidth - 40, currentHeight, param.data.date1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.date2, ALIGN_RIGHT);
    currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
  }

  if (param.contact?.billingAddress.addressLine1 || param.data.date2) {
    const billingAddress = splitTextAndGetHeight(param.contact?.billingAddress.addressLine2, ((pageWidth/3) - 25))
    const shippingAddress = splitTextAndGetHeight(param.contact?.shippingAddress.addressLine2, ((pageWidth/3) - 25))
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth/3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
  }

  if (param.contact?.billingAddress.addressLine3) {
    const billingAddress = splitTextAndGetHeight(param.contact?.billingAddress.addressLine3, ((pageWidth/3) - 25))
    const shippingAddress = splitTextAndGetHeight(param.contact?.shippingAddress.addressLine3, ((pageWidth/3) - 25))
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth/3, currentHeight, shippingAddress.text);
    currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
  }

  if (param.contact.billingAddress.country || param.contact.shippingAddress.country) {
    doc.text(10, currentHeight, param.contact.billingAddress.country);
    doc.text(pageWidth/3, currentHeight, param.contact.shippingAddress.country);
  }
  else currentHeight -= pdfConfig.subLineHeight;
  //end contact part

  //TABLE PART

  const tdWidth = (pageWidth - 20) / param.data.header.length;

  const addTableHeaderBoarder = () => {
    currentHeight += 2;
    for (let i = 0; i < param.data.header.length; i++) {
      doc.setFont(undefined, FONT_TYPE_BOLD);
      if (i === 0) doc.rect(10, currentHeight, tdWidth, 7);
      else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, 7);
    }
    currentHeight -= 2;
  };
  const addTableBodyBoarder = (lineHeight) => {
    for (let i = 0; i < param.data.header.length; i++) {
      if (i === 0) doc.rect(10, currentHeight, tdWidth, lineHeight);
      else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, lineHeight);
    }
  };
  const addTableHeader = () => {
    if (param.data.headerBorder) addTableHeaderBoarder();

    currentHeight += pdfConfig.subLineHeight + 10;
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize);
    //border color
    doc.setDrawColor(colorGray);
    currentHeight += 2;

    param.data.header.forEach(function (row, index) {
      if (index == 0) doc.text(row, 11, currentHeight);
      else doc.text(row, index * tdWidth + 11, currentHeight);
    });

    currentHeight += pdfConfig.subLineHeight - 1;
    doc.setTextColor(colorGray);
    doc.setLineWidth(0.5); 
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  };
  addTableHeader();

  //table body
  const tableBodyLength = param.data.table.length;
  doc.setFont(undefined, FONT_TYPE_NORMAL);

  param.data.table.forEach(function (row, index) {
    //get nax height for the current row
    let rowsHeight = [];
    const getRowsHeight = function () {
      row.forEach(function (rr, index) {
        //size should be the same used in other td
        let item = splitTextAndGetHeight(rr.toString(), tdWidth - 1); //minus 1, to fix the padding issue between borders
        rowsHeight.push(item.height);
      });
    };
    getRowsHeight();
    const maxHeight = Math.max(...rowsHeight);

    //body borders
    if (param.data.tableBodyBorder) addTableBodyBoarder(maxHeight + 1);

    //display text into row cells
    //Object.entries(row).forEach(function(col, index) {
    row.forEach(function (rr, index) {
      let item = splitTextAndGetHeight(rr.toString(), tdWidth - 1); //minus 1, to fix the padding issue between borders

      if (index == 0) doc.text(item.text, 11, currentHeight + 4);
      else doc.text(item.text, 11 + index * tdWidth, currentHeight + 4);
    });

    //pre-increase currentHeight to check the height based on next row
    if (index + 1 < tableBodyLength) currentHeight += maxHeight;

    if (
      currentHeight > pageHeight ||
      (currentHeight > (pageHeight - 10) && doc.getNumberOfPages() > 1)
    ) {
      doc.addPage();
      currentHeight = 10;
      if (index + 1 < tableBodyLength) addTableHeader();
    }

    //reset the height that was increased to check the next row
    if (index + 1 < tableBodyLength && currentHeight > 30)
      // check if new page
      currentHeight -= maxHeight;
  
    doc.setLineWidth(0.1); 
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
    currentHeight += maxHeight + 2;

    //td border height
    currentHeight += 4;
  });

  // no table data
  if (tableBodyLength === 0) {
    currentHeight += 6;
    doc.text('No Data', docWidth / 2, currentHeight);
  }

  doc.setTextColor(colorBlack);
  doc.setFontSize(10);
  currentHeight += pdfConfig.lineHeight;



  //line breaker before invoce total
  if (
    param.data.header.length &&
    (param.data.subTotal ||
      param.data.subTotalLabel ||
      param.data.currency)
  ) {
    doc.setLineWidth(0.5); 
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
  }

  // Subtotal line
  doc.text(docWidth - 50, currentHeight, param.data.subTotalLabel, ALIGN_RIGHT);
  doc.text(docWidth - 10, currentHeight,  param.data.currency + "  " + param.data.subTotal.toLocaleString(), ALIGN_RIGHT);

  //row1 - tax
  if (
    param.data.row1 &&
    (param.data.row1.col1 ||
      param.data.row1.col2 ||
      param.data.row1.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row1.style.fontSize);

    doc.text(docWidth - 50, currentHeight, param.data.row1.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.row1.col2, ALIGN_RIGHT);
  }
  //end row1

  //row2 - discounts
  if (
    param.data.row2 &&
    (param.data.row2.col1 ||
      param.data.row2.col2 ||
      param.data.row2.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row2.style.fontSize);

    doc.text(docWidth - 50, currentHeight, param.data.row2.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.row2.col2, ALIGN_RIGHT);
  }
  //end row2

  // Main total
  if (
    param.data.total &&
    (param.data.total.col1 ||
      param.data.total.col2 ||
      param.data.total.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(docWidth - 50, currentHeight, param.data.total.col1, ALIGN_RIGHT)
    doc.text(docWidth - 10, currentHeight, param.data.total.col3 + "  " + param.data.total.col2, ALIGN_RIGHT);
  }

  // Amount Due
  doc.setFont(undefined, FONT_TYPE_NORMAL);

  if (
    param.data.amountDue &&
    (param.data.amountDue.col1 ||
      param.data.amountDue.col2 ||
      param.data.amountDue.col3)
  ) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.amountDue.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.creditNoteLabel, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.creditNote, ALIGN_RIGHT);
    currentHeight += pdfConfig.lineHeight;

    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
   
    doc.text(docWidth - 50, currentHeight, param.data.amountDue.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.amountDue.col3 + "  " + param.data.amountDue.col2, ALIGN_RIGHT);
  }

  doc.setTextColor(colorBlack);
  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight;
  //   currentHeight += pdfConfig.subLineHeight;
  doc.setFontSize(pdfConfig.labelTextSize);

  //add num of pages at the bottom
  if (doc.getNumberOfPages() > 1) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      doc.setFontSize(pdfConfig.fieldTextSize - 2);
      doc.setTextColor(colorGray);

      if (param.pageEnable) {
        doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
        doc.setPage(i);
        doc.text(
          param.pageLabel + " " + i + " / " + doc.getNumberOfPages(),
          docWidth - 20,
          doc.internal.pageSize.height - 6
        );
      }
    }
  }

  // requested by
  if (param.data.requestedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Requested By');
    currentHeight += pdfConfig.subLineHeight;

    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.requestedBy);
    currentHeight += pdfConfig.lineHeight
  }

  // authorised by
  if (param.data.authorisedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Authorised By');
    currentHeight += pdfConfig.subLineHeight;

    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.authorisedBy);
    currentHeight += pdfConfig.lineHeight
  }


  // Note 
  if (param.data.note) {
    currentHeight += pdfConfig.lineHeight;
    const noteData = splitTextAndGetHeight(param.data.note, (pageWidth - 40))
  
    if (currentHeight + noteData.height > pageHeight) {
      doc.addPage();
      currentHeight = 10;
    }
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Note');
    currentHeight += pdfConfig.subLineHeight;

    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, noteData.text);
    currentHeight += pdfConfig.lineHeight + noteData.height;
  }

  const addDesc = () => {
    doc.setFontSize(pdfConfig.labelTextSize - 2);
    doc.setTextColor(colorBlack);

    if (param.data?.desc.length > 0) {
      currentHeight += 1;
      param.data?.desc?.forEach((el, index) => {
        const desc = splitTextAndGetHeight(el, (pageWidth - 40))
        if (currentHeight + desc.height > pageHeight) {
          doc.addPage();
          currentHeight = 10;
        }

        if (index === 0) {
          doc.setFont(undefined, FONT_TYPE_BOLD);
          doc.text(10, currentHeight, param.data.descLabel);
          doc.setFont(undefined, FONT_TYPE_NORMAL);
          currentHeight += pdfConfig.subLineHeight;
        }
        doc.text(10, currentHeight, desc.text);
        currentHeight += pdfConfig.subLineHeight + desc.height;
      })
    }
  };

  if (param.data?.desc?.length > 0) addDesc();

  //add num of page at the bottom
  if (doc.getNumberOfPages() === 1 && param.pageEnable) {
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.setTextColor(colorGray);
    doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
    doc.text(
      param.pageLabel + "1 / 1",
      docWidth - 20,
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

  return returnObj;
}

export default jsPDFInvoiceTemplate;
