import "regenerator-runtime";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { getCustomFont } from "../font";

const OutputType = {
  Save: "save", //save pdf as a file
  DataUriString: "datauristring", //returns the data uri string
  DataUri: "datauri", //opens the data uri in current window
  DataUrlNewWindow: "dataurlnewwindow", //opens the data uri in new window
  Blob: "blob", //return blob format of the doc,
  ArrayBuffer: "arraybuffer", //return ArrayBuffer format
};

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
async function jsPDFRfqTemplate(props) {
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
      taxNumber: props.business?.taxNumber || "",
      phone: props.business?.phone || "",
    },
    data: {
      label: props.data?.label || "",
      subTotalLabel: props.data?.subTotalLabel || "",
      dppNilaiLainLabel: props.data?.dppNilaiLainLabel || "",
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
      descLabel: props.data?.descLabel || "",
      requestedBy: props.data?.requestedBy || "",
      desc: props.data?.desc || "",
      creditNoteLabel: props.data?.creditNoteLabel || "",
      note: props.data?.note || "",
      col1: props.data?.col1 || [],
      col2: props.data?.col2 || [],
      deliveryInstructions: props.data?.deliveryInstructions || "",
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
  var heightBelowLogo;

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
  doc.setFontSize(pdfConfig.headerTextSize);
  doc.setTextColor(colorBlack);
  doc.setFontSize(pdfConfig.fieldTextSize);
  if (param.logo.src) {
    doc.addImage(
      param.logo.src,
      IMAGE_CONTENT_TYPE,
      10 + param.logo.margin.left,
      currentHeight - 5 + param.logo.margin.top,
      param.logo.width,
      param.logo.height
    );

    currentHeight += param.logo.height + param.logo.margin.top;
  }

  if (param.business.name) {
    doc.text(
      10 + param.logo.margin.left,
      currentHeight,
      param.business.name,
      ALIGN_LEFT
    );

    currentHeight += pdfConfig.lineHeight;
    heightBelowLogo = currentHeight;
  }

  if (param?.business?.address) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(
      10 + param.logo.margin.left,
      currentHeight,
      ISSUER_ADDRESS_LABEL,
      ALIGN_LEFT
    );

    currentHeight += pdfConfig.subLineHeight;
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    const businessAddress = splitTextAndGetHeight(
      param.business.address,
      docWidth * 0.4
    );
    doc.text(
      10 + param.logo.margin.left,
      currentHeight,
      businessAddress.text,
      ALIGN_LEFT
    );

    currentHeight += businessAddress.height;
    const businessAddress2 = splitTextAndGetHeight(
      param.business.addressLine2,
      docWidth * 0.4
    );
    doc.text(
      10 + param.logo.margin.left,
      currentHeight,
      businessAddress2.text,
      ALIGN_LEFT
    );

    currentHeight += businessAddress2.height;

    if (param.business.addressLine3) {
      const businessAddress3 = splitTextAndGetHeight(
        param.business.addressLine3,
        docWidth * 0.4
      );
      doc.text(
        10 + param.logo.margin.left,
        currentHeight,
        businessAddress3.text,
        ALIGN_LEFT
      );
      currentHeight += businessAddress3.height;
    }

    if (param.business.country) {
      doc.text(
        10 + param.logo.margin.left,
        currentHeight,
        param.business.country,
        ALIGN_LEFT
      );
      currentHeight += pdfConfig.subLineHeight;
    }

    if (param.business.email_1) {
      doc.text(
        10 + param.logo.margin.left,
        currentHeight,
        param.business.email_1,
        ALIGN_LEFT
      );
    }
    currentHeight += pdfConfig.subLineHeight;

    if (param.business.phone) {
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
      doc.text(
        10 + param.logo.margin.left,
        currentHeight,
        "Tel Number: ",
        ALIGN_LEFT
      );
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
      doc.text(
        27 + param.logo.margin.left,
        currentHeight,
        param.business.phone
      );
    }
    currentHeight += pdfConfig.subLineHeight;

    if (param.business.taxNumber) {
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
      doc.text(
        10 + param.logo.margin.left,
        currentHeight,
        "Tax Number: ",
        ALIGN_LEFT
      );
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
      doc.text(
        27 + param.logo.margin.left,
        currentHeight,
        param.business.taxNumber
      );
    }
  }

  if (param.data.col1 && param.data.col2) {
    // PO Number and other details on the right side
    const headers = param.data.col1;
    const values = param.data.col2;
    const size = headers.length;
    var heightHeaders = heightBelowLogo;
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);

    for (var i = 0; i < size; i++) {
      const detailsText = headers[i] + ": ";
      doc.text(docWidth - 30, heightHeaders, detailsText, ALIGN_RIGHT);
      heightHeaders += pdfConfig.subLineHeight;
    }
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);

    for (var i = 0; i < size; i++) {
      const detailsText = values[i];
      doc.text(docWidth - 10, heightBelowLogo, detailsText, ALIGN_RIGHT);
      heightBelowLogo += pdfConfig.subLineHeight;
    }
  }

  currentHeight = Math.max(currentHeight, heightBelowLogo);

  doc.setFontSize(pdfConfig.fieldTextSize);
  currentHeight += pdfConfig.lineHeight + 2;

  doc.setFontSize(pdfConfig.headerTextSize - 6);

  if (param.data.label) {
    doc.text(docWidth / 2, currentHeight, param.data.label, ALIGN_CENTER);
  }

  doc.setFont(undefined, FONT_TYPE_BOLD);
  currentHeight += pdfConfig.subLineHeight;

  //line breaker Doc text
  if (param.data.header.length) {
    currentHeight += pdfConfig.subLineHeight;
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  }

  doc.setTextColor(colorGray);

  //TABLE PART

  const tdWidth = (pageWidth - 20) / param.data.header.length;

  function getTdWidthDimensions() {
    let leftShift = 10;
    const result = [];
    for (let i = 0; i < param.data.header.length; i++) {
      result.push({
        shift: leftShift,
        width: param.data.headerWidth?.[i]
          ? (pageWidth - 20) * param.data.headerWidth[i]
          : tdWidth,
      });
      leftShift =
        leftShift +
        (param.data.headerWidth?.[i]
          ? (pageWidth - 20) * param.data.headerWidth[i]
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

    currentHeight += pdfConfig.subLineHeight + 2;
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize);
    //border color
    doc.setDrawColor(colorGray);
    // currentHeight += 2;

    const tdWidthDimensions = getTdWidthDimensions();
    param.data.header.forEach(function (row, index) {
      doc.text(row, tdWidthDimensions?.[index]?.shift, currentHeight);
    });

    currentHeight += pdfConfig.subLineHeight;
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
    row.forEach(function (rr, index) {
      let item = splitTextAndGetHeight(
        rr.toString(),
        tdWidthDimensions?.[index]?.width - 1
      ); //minus 1, to fix the padding issue between borders

      doc.text(item.text, tdWidthDimensions?.[index]?.shift, currentHeight + 5);
    });

    //pre-increase currentHeight to check the height based on next row
    if (index + 1 < tableBodyLength) currentHeight += maxHeight;

    if (
      currentHeight > pageHeight ||
      (currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1)
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
    if (
      currentHeight > pageHeight ||
      (currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1)
    ) {
      doc.addPage();
      currentHeight = 10;
    }
  }

  doc.setTextColor(colorBlack);
  currentHeight += pdfConfig.subLineHeight - 1;
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
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, "Requests By");
    currentHeight += pdfConfig.subLineHeight;

    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.requestedBy.name);
    currentHeight += pdfConfig.subLineHeight;

    if (param.data.requestedBy.phone) {
      doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
      doc.text(10, currentHeight, param.data.requestedBy.phone);
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
          currentHeight = 10;
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

  // Delivery Instructions
  if (param.data.deliveryInstructions) {
    currentHeight += pdfConfig.labelTextSize;
    const diData = splitTextAndGetHeight(
      param.data.deliveryInstructions,
      pageWidth - 20
    );
    if (currentHeight + diData.height > pageHeight) {
      doc.addPage();
      currentHeight = 10;
    }
    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
    doc.setFontSize(pdfConfig.labelTextSize);
    doc.text(10, currentHeight, "Delivery Instructions:");
    currentHeight += pdfConfig.lineHeight;

    doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, diData.text);
    currentHeight += pdfConfig.lineHeight + diData.height;
  }

  // Note
  if (param.data.note) {
    currentHeight += pdfConfig.labelTextSize;
    const noteData = splitTextAndGetHeight(param.data.note, pageWidth - 20);

    if (currentHeight + noteData.height > pageHeight) {
      doc.addPage();
      currentHeight = 10;
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

export default jsPDFRfqTemplate;
