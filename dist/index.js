"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OutputType = void 0;
Object.defineProperty(exports, "jsPDF", {
  enumerable: true,
  get: function get() {
    return _jspdf.jsPDF;
  }
});

var _jspdf = require("jspdf");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OutputType = {
  Save: "save",
  //save pdf as a file
  DataUriString: "datauristring",
  //returns the data uri string
  DataUri: "datauri",
  //opens the data uri in current window
  DataUrlNewWindow: "dataurlnewwindow",
  //opens the data uri in new window
  Blob: "blob",
  //return blob format of the doc,
  ArrayBuffer: "arraybuffer" //return ArrayBuffer format

};
exports.OutputType = OutputType;

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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact4, _props$contact5, _props$contact6, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data18$row, _props$data19, _props$data19$row, _props$data20, _props$data20$row, _props$data21, _props$data21$row, _props$data21$row$sty, _props$data22, _props$data22$row, _props$data23, _props$data23$row, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data25$row$sty, _props$data26, _props$data26$total, _props$data27, _props$data27$total, _props$data28, _props$data28$total, _props$data29, _props$data29$row, _props$data29$row$sty, _props$data30, _props$data30$amountD, _props$data31, _props$data31$amountD, _props$data32, _props$data32$amountD, _props$data33, _props$data33$amountD, _props$data33$amountD2, _props$data34, _props$footer, _param$data3, _param$data3$desc;

  var param = {
    outputType: props.outputType || "save",
    returnJsPDFDocObject: props.returnJsPDFDocObject || false,
    fileName: props.fileName || "",
    orientationLandscape: props.orientationLandscape || false,
    logo: {
      src: ((_props$logo = props.logo) === null || _props$logo === void 0 ? void 0 : _props$logo.src) || "",
      width: ((_props$logo2 = props.logo) === null || _props$logo2 === void 0 ? void 0 : _props$logo2.width) || "",
      height: ((_props$logo3 = props.logo) === null || _props$logo3 === void 0 ? void 0 : _props$logo3.height) || "",
      margin: {
        top: ((_props$logo4 = props.logo) === null || _props$logo4 === void 0 ? void 0 : (_props$logo4$margin = _props$logo4.margin) === null || _props$logo4$margin === void 0 ? void 0 : _props$logo4$margin.top) || 0,
        left: ((_props$logo5 = props.logo) === null || _props$logo5 === void 0 ? void 0 : (_props$logo5$margin = _props$logo5.margin) === null || _props$logo5$margin === void 0 ? void 0 : _props$logo5$margin.left) || 0
      }
    },
    business: {
      name: ((_props$business = props.business) === null || _props$business === void 0 ? void 0 : _props$business.name) || "",
      address: ((_props$business2 = props.business) === null || _props$business2 === void 0 ? void 0 : _props$business2.address) || "",
      addressLine2: ((_props$business3 = props.business) === null || _props$business3 === void 0 ? void 0 : _props$business3.addressLine2) || "",
      addressLine3: ((_props$business4 = props.business) === null || _props$business4 === void 0 ? void 0 : _props$business4.addressLine3) || "",
      email_1: ((_props$business5 = props.business) === null || _props$business5 === void 0 ? void 0 : _props$business5.email_1) || "",
      country: ((_props$business6 = props.business) === null || _props$business6 === void 0 ? void 0 : _props$business6.country) || ""
    },
    contact: {
      label: ((_props$contact = props.contact) === null || _props$contact === void 0 ? void 0 : _props$contact.label) || "",
      name: ((_props$contact2 = props.contact) === null || _props$contact2 === void 0 ? void 0 : _props$contact2.name) || "",
      address: ((_props$contact3 = props.contact) === null || _props$contact3 === void 0 ? void 0 : _props$contact3.address) || "",
      addressLine2: ((_props$contact4 = props.contact) === null || _props$contact4 === void 0 ? void 0 : _props$contact4.addressLine2) || "",
      addressLine3: ((_props$contact5 = props.contact) === null || _props$contact5 === void 0 ? void 0 : _props$contact5.addressLine3) || "",
      country: ((_props$contact6 = props.contact) === null || _props$contact6 === void 0 ? void 0 : _props$contact6.country) || ""
    },
    data: {
      label: ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.label) || "",
      subTotalLabel: ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.subTotalLabel) || "",
      date1Label: ((_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.date1Label) || "",
      num: ((_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.num) || "",
      date2Label: ((_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.date2Label) || "",
      date1: ((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.date1) || "",
      date2: ((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.date2) || "",
      headerBorder: ((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.headerBorder) || false,
      tableBodyBorder: ((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.tableBodyBorder) || false,
      header: ((_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.header) || [],
      table: ((_props$data11 = props.data) === null || _props$data11 === void 0 ? void 0 : _props$data11.table) || [],
      subTotal: ((_props$data12 = props.data) === null || _props$data12 === void 0 ? void 0 : _props$data12.subTotal) || "",
      currency: ((_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.currency) || "",
      descLabel: ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.descLabel) || "",
      desc: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.desc) || "",
      creditNoteLabel: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.creditNoteLabel) || "",
      note: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.note) || "",
      row1: {
        col1: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : (_props$data18$row = _props$data18.row1) === null || _props$data18$row === void 0 ? void 0 : _props$data18$row.col1) || "",
        col2: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : (_props$data19$row = _props$data19.row1) === null || _props$data19$row === void 0 ? void 0 : _props$data19$row.col2) || "",
        col3: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : (_props$data20$row = _props$data20.row1) === null || _props$data20$row === void 0 ? void 0 : _props$data20$row.col3) || "",
        style: {
          fontSize: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : (_props$data21$row = _props$data21.row1) === null || _props$data21$row === void 0 ? void 0 : (_props$data21$row$sty = _props$data21$row.style) === null || _props$data21$row$sty === void 0 ? void 0 : _props$data21$row$sty.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : (_props$data22$row = _props$data22.row2) === null || _props$data22$row === void 0 ? void 0 : _props$data22$row.col1) || "",
        col2: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : (_props$data23$row = _props$data23.row2) === null || _props$data23$row === void 0 ? void 0 : _props$data23$row.col2) || "",
        col3: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : (_props$data24$row = _props$data24.row2) === null || _props$data24$row === void 0 ? void 0 : _props$data24$row.col3) || "",
        style: {
          fontSize: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : (_props$data25$row = _props$data25.row2) === null || _props$data25$row === void 0 ? void 0 : (_props$data25$row$sty = _props$data25$row.style) === null || _props$data25$row$sty === void 0 ? void 0 : _props$data25$row$sty.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$total = _props$data26.total) === null || _props$data26$total === void 0 ? void 0 : _props$data26$total.col1) || "",
        col2: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$total = _props$data27.total) === null || _props$data27$total === void 0 ? void 0 : _props$data27$total.col2) || "",
        col3: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$total = _props$data28.total) === null || _props$data28$total === void 0 ? void 0 : _props$data28$total.col3) || "",
        style: {
          fontSize: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row2) === null || _props$data29$row === void 0 ? void 0 : (_props$data29$row$sty = _props$data29$row.style) === null || _props$data29$row$sty === void 0 ? void 0 : _props$data29$row$sty.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$amountD = _props$data30.amountDue) === null || _props$data30$amountD === void 0 ? void 0 : _props$data30$amountD.col1) || "",
        col2: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$amountD = _props$data31.amountDue) === null || _props$data31$amountD === void 0 ? void 0 : _props$data31$amountD.col2) || "",
        col3: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$amountD = _props$data32.amountDue) === null || _props$data32$amountD === void 0 ? void 0 : _props$data32$amountD.col3) || "",
        style: {
          fontSize: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$amountD = _props$data33.amountDue) === null || _props$data33$amountD === void 0 ? void 0 : (_props$data33$amountD2 = _props$data33$amountD.style) === null || _props$data33$amountD2 === void 0 ? void 0 : _props$data33$amountD2.fontSize) || 12
        }
      },
      creditNote: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : _props$data34.creditNote) || ""
    },
    footer: {
      text: ((_props$footer = props.footer) === null || _props$footer === void 0 ? void 0 : _props$footer.text) || ""
    },
    pageEnable: props.pageEnable || false,
    pageLabel: props.pageLabel || "Page"
  };

  var splitTextAndGetHeight = function splitTextAndGetHeight(text, size) {
    var lines = doc.splitTextToSize(text, size);
    return {
      text: lines,
      height: doc.getTextDimensions(lines).h
    };
  };

  if (param.data.table && param.data.table.length) {
    if (param.data.table[0].length != param.data.header.length) throw Error("Length of header and table column must be equal.");
  }

  var options = {
    orientation: param.orientationLandscape ? "landscape" : ""
  };
  var doc = new _jspdf.jsPDF(options);
  var docWidth = doc.internal.pageSize.width;
  var docHeight = doc.internal.pageSize.height;
  var colorBlack = "#000000";
  var colorGray = "#4d4e53";
  var lightGray = "#888888"; //starting at 15mm

  var currentHeight = 15; //var startPointRectPanel1 = currentHeight + 6;

  var pdfConfig = {
    headerTextSize: 20,
    labelTextSize: 12,
    fieldTextSize: 10,
    lineHeight: 6,
    subLineHeight: 4
  };
  doc.setFontSize(pdfConfig.headerTextSize);
  doc.setTextColor(colorBlack);
  doc.text(docWidth - 10, currentHeight, param.business.name, "right");
  doc.setFontSize(pdfConfig.fieldTextSize);

  if (param.logo.src) {
    var imageHeader = new Image();
    imageHeader.src = param.logo.src; //doc.text(htmlDoc.sessionDateText, docWidth - (doc.getTextWidth(htmlDoc.sessionDateText) + 10), currentHeight);

    doc.addImage(imageHeader, 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
  }

  doc.setTextColor(colorGray);
  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.address, "right");
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.addressLine2, "right");
  doc.setFontSize(pdfConfig.fieldTextSize); // doc.setTextColor(colorGray);

  currentHeight += pdfConfig.subLineHeight;

  if (param.business.addressLine3) {
    doc.text(docWidth - 10, currentHeight, param.business.addressLine3, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  doc.text(docWidth - 10, currentHeight, param.business.country, "right");
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.email_1, "right"); //line breaker after logo & business info

  if (param.data.header.length) {
    currentHeight += pdfConfig.subLineHeight;
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  } //Contact part


  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);
  currentHeight += pdfConfig.lineHeight + 2;
  doc.setFontSize(pdfConfig.headerTextSize - 7);

  if (param.contact.name) {
    doc.text(10, currentHeight, param.contact.name);
  }

  ;
  doc.setTextColor(colorBlack);
  doc.setTextColor(lightGray);
  doc.setFontSize(pdfConfig.headerTextSize - 5);

  if (param.data.label && param.data.num) {
    doc.text(docWidth - 10, currentHeight, param.data.label + param.data.num, "right");
  }

  if (param.contact.name || param.data.label && param.data.num) currentHeight += pdfConfig.subLineHeight + 2;
  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);

  if (param.contact.address || param.data.date1) {
    doc.text(10, currentHeight, param.contact.address);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(docWidth - 10, currentHeight, param.data.date2Label, "right");
    doc.text(docWidth - 40, currentHeight, param.data.date1Label, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  if (param.contact.addressLine2 || param.data.date2) {
    doc.text(10, currentHeight, param.contact.addressLine2);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.text(docWidth - 40, currentHeight, param.data.date1, "right");
    doc.text(docWidth - 10, currentHeight, param.data.date2, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  if (param.contact.addressLine3) {
    doc.text(10, currentHeight, param.contact.addressLine3);
    currentHeight += pdfConfig.subLineHeight;
  }

  if (param.contact.country) doc.text(10, currentHeight, param.contact.country);else currentHeight -= pdfConfig.subLineHeight; //end contact part
  //TABLE PART
  //var tdWidth = 31.66;
  //10 margin left - 10 margin right

  var tdWidth = (doc.getPageWidth() - 20) / param.data.header.length;

  var addTableHeaderBoarder = function addTableHeaderBoarder() {
    currentHeight += 2;

    for (var i = 0; i < param.data.header.length; i++) {
      doc.setFont(undefined, 'bold');
      if (i === 0) doc.rect(10, currentHeight, tdWidth, 7);else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, 7);
    }

    currentHeight -= 2;
  };

  var addTableBodyBoarder = function addTableBodyBoarder(lineHeight) {
    for (var i = 0; i < param.data.header.length; i++) {
      if (i === 0) doc.rect(10, currentHeight, tdWidth, lineHeight);else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, lineHeight);
    }
  };

  var addTableHeader = function addTableHeader() {
    if (param.data.headerBorder) addTableHeaderBoarder();
    currentHeight += pdfConfig.subLineHeight + 10;
    doc.setFont(undefined, 'bold');
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize); //border color

    doc.setDrawColor(colorGray);
    currentHeight += 2;
    param.data.header.forEach(function (row, index) {
      if (index == 0) doc.text(row, 11, currentHeight);else doc.text(row, index * tdWidth + 11, currentHeight);
    });
    currentHeight += pdfConfig.subLineHeight - 1;
    doc.setTextColor(colorGray);
    doc.setLineWidth(0.5);
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  };

  addTableHeader(); //table body

  var tableBodyLength = param.data.table.length;
  doc.setFont(undefined, 'normal');
  param.data.table.forEach(function (row, index) {
    //get nax height for the current row
    var rowsHeight = [];

    var getRowsHeight = function getRowsHeight() {
      row.forEach(function (rr, index) {
        //size should be the same used in other td
        var item = splitTextAndGetHeight(rr.toString(), tdWidth - 1); //minus 1, to fix the padding issue between borders

        rowsHeight.push(item.height);
      });
    };

    getRowsHeight();
    var maxHeight = Math.max.apply(Math, rowsHeight); //body borders

    if (param.data.tableBodyBorder) addTableBodyBoarder(maxHeight + 1); //display text into row cells
    //Object.entries(row).forEach(function(col, index) {

    row.forEach(function (rr, index) {
      var item = splitTextAndGetHeight(rr.toString(), tdWidth - 1); //minus 1, to fix the padding issue between borders

      if (index == 0) doc.text(item.text, 11, currentHeight + 4);else doc.text(item.text, 11 + index * tdWidth, currentHeight + 4);
    }); //pre-increase currentHeight to check the height based on next row

    if (index + 1 < tableBodyLength) currentHeight += maxHeight;

    if (param.orientationLandscape && (currentHeight > 185 || currentHeight > 178 && doc.getNumberOfPages() > 1)) {
      doc.addPage();
      currentHeight = 10;
      if (index + 1 < tableBodyLength) addTableHeader();
    }

    if (!param.orientationLandscape && (currentHeight > 265 || currentHeight > 255 && doc.getNumberOfPages() > 1)) {
      doc.addPage();
      currentHeight = 10;
      if (index + 1 < tableBodyLength) addTableHeader(); //       else
      //         currentHeight += pdfConfig.subLineHeight + 2 + pdfConfig.subLineHeight - 1; //same as in addtableHeader
    } //reset the height that was increased to check the next row


    if (index + 1 < tableBodyLength && currentHeight > 30) // check if new page
      currentHeight -= maxHeight;
    doc.setLineWidth(0.1);
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
    currentHeight += maxHeight + 2; //td border height

    currentHeight += 4;
  }); // no table data

  if (tableBodyLength === 0) {
    currentHeight += 6;
    doc.text('No Data', docWidth / 2, currentHeight);
  } //     doc.line(10, currentHeight, docWidth - 10, currentHeight); //nese duam te shfaqim line ne fund te tabeles


  var desc = splitTextAndGetHeight(param.data.desc, docWidth / 2).height; //END TABLE PART

  if (param.orientationLandscape && currentHeight + desc > 173) {
    doc.addPage();
    currentHeight = 10;
  }

  if (!param.orientationLandscape && currentHeight + desc > 270) {
    doc.addPage();
    currentHeight = 10;
  }

  doc.setTextColor(colorBlack);
  doc.setFontSize(10);
  currentHeight += pdfConfig.lineHeight; //line breaker before invoce total

  if (param.data.header.length && (param.data.subTotal || param.data.subTotalLabel || param.data.currency)) {
    doc.setLineWidth(0.5);
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
  } // Subtotal line


  doc.text(docWidth - 50, currentHeight, param.data.subTotalLabel, "right");
  doc.text(docWidth - 10, currentHeight, param.data.currency + "  " + param.data.subTotal.toLocaleString(), "right"); //row1 - tax

  if (param.data.row1 && (param.data.row1.col1 || param.data.row1.col2 || param.data.row1.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row1.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.row1.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.data.row1.col2, "right");
  } //end row1
  //row2 - discounts


  if (param.data.row2 && (param.data.row2.col1 || param.data.row2.col2 || param.data.row2.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row2.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.row2.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.data.row2.col2, "right");
  } //end row2
  // Main total


  if (param.data.total && (param.data.total.col1 || param.data.total.col2 || param.data.total.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(docWidth - 50, currentHeight, param.data.total.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.data.total.col3 + "  " + param.data.total.col2, "right");
  } // Amount Due


  doc.setFont(undefined, 'normal');

  if (param.data.amountDue && (param.data.amountDue.col1 || param.data.amountDue.col2 || param.data.amountDue.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.amountDue.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.creditNoteLabel, "right");
    doc.text(docWidth - 10, currentHeight, param.data.creditNote, "right");
    currentHeight += pdfConfig.lineHeight;
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
    doc.text(docWidth - 50, currentHeight, param.data.amountDue.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.data.amountDue.col3 + "  " + param.data.amountDue.col2, "right");
  }

  if (param.orientationLandscape && currentHeight + desc > 173) {
    doc.addPage();
    currentHeight = 10;
  }

  if (!param.orientationLandscape && currentHeight + desc > 270) {
    doc.addPage();
    currentHeight = 10;
  }

  doc.setTextColor(colorBlack);
  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight; //   currentHeight += pdfConfig.subLineHeight;

  doc.setFontSize(pdfConfig.labelTextSize); //add num of pages at the bottom

  if (doc.getNumberOfPages() > 1) {
    for (var i = 1; i <= doc.getNumberOfPages(); i++) {
      doc.setFontSize(pdfConfig.fieldTextSize - 2);
      doc.setTextColor(colorGray);

      if (param.pageEnable) {
        doc.text(docWidth / 2, docHeight - 10, param.footer.text, "center");
        doc.setPage(i);
        doc.text(param.pageLabel + " " + i + " / " + doc.getNumberOfPages(), docWidth - 20, doc.internal.pageSize.height - 6);
      }

      if (param.orientationLandscape && currentHeight + desc > 183) {
        doc.addPage();
        currentHeight = 10;
      }

      if (!param.orientationLandscape && currentHeight + desc > 270) {
        doc.addPage();
        currentHeight = 10;
      }
    }
  } // Note 


  if (param.data.note) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Note:');
    doc.setFont(undefined, 'normal');
    doc.setFontSize(pdfConfig.fieldTextSize);
    var noteData = splitTextAndGetHeight(param.data.note, doc.getPageWidth() - 40);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(22, currentHeight, noteData.text);
    currentHeight += pdfConfig.lineHeight + noteData.height;
  }

  var addDesc = function addDesc() {
    var _param$data;

    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlack);
    doc.setFont(undefined, 'bold');
    doc.text(param.data.descLabel, 10, currentHeight);
    doc.setFont(undefined, 'normal');
    currentHeight += pdfConfig.subLineHeight;
    doc.setTextColor(colorGray);
    doc.setFontSize(pdfConfig.fieldTextSize);
    var lines = doc.splitTextToSize(param.data.desc, docWidth / 2); //text in left half

    if (((_param$data = param.data) === null || _param$data === void 0 ? void 0 : _param$data.desc.length) > 0) {
      var _param$data2, _param$data2$desc;

      currentHeight += 1;
      (_param$data2 = param.data) === null || _param$data2 === void 0 ? void 0 : (_param$data2$desc = _param$data2.desc) === null || _param$data2$desc === void 0 ? void 0 : _param$data2$desc.forEach(function (el) {
        doc.text(el, 10, currentHeight);
        currentHeight += pdfConfig.subLineHeight;
      });
    }

    currentHeight += doc.getTextDimensions(lines).h > 5 ? doc.getTextDimensions(lines).h + 6 : pdfConfig.lineHeight;
    return currentHeight;
  };

  if (((_param$data3 = param.data) === null || _param$data3 === void 0 ? void 0 : (_param$data3$desc = _param$data3.desc) === null || _param$data3$desc === void 0 ? void 0 : _param$data3$desc.length) > 0) addDesc(); //add num of page at the bottom

  if (doc.getNumberOfPages() === 1 && param.pageEnable) {
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.setTextColor(colorGray);
    doc.text(docWidth / 2, docHeight - 10, param.footer.text, "center");
    doc.text(param.pageLabel + "1 / 1", docWidth - 20, doc.internal.pageSize.height - 6);
  }

  var returnObj = {
    pagesNumber: doc.getNumberOfPages()
  };

  if (param.returnJsPDFDocObject) {
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      jsPDFDocObject: doc
    });
  }

  if (param.outputType === "save") doc.save(param.fileName);else if (param.outputType === "blob") {
    var blobOutput = doc.output("blob");
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      blob: blobOutput
    });
  } else if (param.outputType === "datauristring") {
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      dataUriString: doc.output("datauristring", {
        filename: param.fileName
      })
    });
  } else if (param.outputType === "arraybuffer") {
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      arrayBuffer: doc.output("arraybuffer")
    });
  } else doc.output(param.outputType, {
    filename: param.fileName
  });
  return returnObj;
}

var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiZGF0YSIsInN1YlRvdGFsTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJkZXNjIiwiY3JlZGl0Tm90ZUxhYmVsIiwibm90ZSIsInJvdzEiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJzdHlsZSIsImZvbnRTaXplIiwicm93MiIsInRvdGFsIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwic2l6ZSIsImxpbmVzIiwiZG9jIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwibGVuZ3RoIiwiRXJyb3IiLCJvcHRpb25zIiwib3JpZW50YXRpb24iLCJqc1BERiIsImRvY1dpZHRoIiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJpbWFnZUhlYWRlciIsIkltYWdlIiwiYWRkSW1hZ2UiLCJsaW5lIiwidGRXaWR0aCIsImdldFBhZ2VXaWR0aCIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImkiLCJzZXRGb250IiwidW5kZWZpbmVkIiwicmVjdCIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInNldERyYXdDb2xvciIsImZvckVhY2giLCJyb3ciLCJpbmRleCIsInNldExpbmVXaWR0aCIsInRhYmxlQm9keUxlbmd0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJpdGVtIiwidG9TdHJpbmciLCJwdXNoIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwidG9Mb2NhbGVTdHJpbmciLCJzZXRQYWdlIiwibm90ZURhdGEiLCJhZGREZXNjIiwiZWwiLCJyZXR1cm5PYmoiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsImJsb2JPdXRwdXQiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLElBQUksRUFBRSxNQURXO0FBQ0g7QUFDZEMsRUFBQUEsYUFBYSxFQUFFLGVBRkU7QUFFZTtBQUNoQ0MsRUFBQUEsT0FBTyxFQUFFLFNBSFE7QUFHRztBQUNwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBSkQ7QUFJcUI7QUFDdENDLEVBQUFBLElBQUksRUFBRSxN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QUFFckUsR0FBRyxDQUFDaUUsTUFBSixDQUFXLGFBQVg7QUFGTixNQUFUO0FBSUQsR0FMTSxNQU1MakUsR0FBRyxDQUFDaUUsTUFBSixDQUFXeEgsS0FBSyxDQUFDQyxVQUFqQixFQUE2QjtBQUMzQjBILElBQUFBLFFBQVEsRUFBRTNILEtBQUssQ0FBQ0c7QUFEVyxHQUE3QjtBQUlGLFNBQU9nSCxTQUFQO0FBQ0Q7O2VBRWNySCxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5cbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5jb3VudHJ5IHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG5cblxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICB2YXIgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICB2YXIgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuXG4gIHZhciBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgdmFyIGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgdmFyIGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgdmFyIGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICB2YXIgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCJcbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gMTU7XG4gIC8vdmFyIHN0YXJ0UG9pbnRSZWN0UGFuZWwxID0gY3VycmVudEhlaWdodCArIDY7XG5cbiAgdmFyIHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIHZhciBpbWFnZUhlYWRlciA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlSGVhZGVyLnNyYyA9IHBhcmFtLmxvZ28uc3JjO1xuICAgIC8vZG9jLnRleHQoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQsIGRvY1dpZHRoIC0gKGRvYy5nZXRUZXh0V2lkdGgoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQpICsgMTApLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBpbWFnZUhlYWRlcixcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBcInJpZ2h0XCIpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBcInJpZ2h0XCIpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIFwicmlnaHRcIik7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKVxuICB9O1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICBcInJpZ2h0XCJcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5jb250YWN0LmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmFkZHJlc3MpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUyIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTIpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuY291bnRyeSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5jb3VudHJ5KTtcbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cbiAgLy8gICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTsgLy9uZXNlIGR1YW0gdGUgc2hmYXFpbSBsaW5lIG5lIGZ1bmQgdGUgdGFiZWxlc1xuXG4gIHZhciBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgIHBhcmFtLmRhdGEuZGVzYyxcbiAgICBkb2NXaWR0aCAvIDJcbiAgKS5oZWlnaHQ7XG4gIC8vRU5EIFRBQkxFIFBBUlRcblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cblxuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTsgXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsIFwicmlnaHRcIik7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLCBcInJpZ2h0XCIpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBcInJpZ2h0XCIpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG5cblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYyA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBkZXNjID4gMTgzKSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYyA+IDI3MCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvLyBOb3RlIFxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdOb3RlOicpO1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIChkb2MuZ2V0UGFnZVdpZHRoKCkgLSA0MCkpXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDIyLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICB2YXIgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KHBhcmFtLmRhdGEuZGVzY0xhYmVsLCAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUocGFyYW0uZGF0YS5kZXNjLCBkb2NXaWR0aCAvIDIpO1xuICAgIC8vdGV4dCBpbiBsZWZ0IGhhbGZcbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBkb2MudGV4dChlbCwgMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgfSlcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oID4gNVxuICAgICAgICA/IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCArIDZcbiAgICAgICAgOiBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIHJldHVybiBjdXJyZW50SGVpZ2h0O1xuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcInNhdmVcIikgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImJsb2JcIikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KFwiYmxvYlwiKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJkYXRhdXJpc3RyaW5nXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KFwiZGF0YXVyaXN0cmluZ1wiLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoXCJhcnJheWJ1ZmZlclwiKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdfQ==