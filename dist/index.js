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
 * @param { {
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
 *   invoice?: {
 *       label?: string,
 *       num?: number,
 *       invDueDateLabel?: string
 *       invDate?: string,
 *       invGenDateLabel?: string
 *       invGenDate?: string,
 *       headerBorder?: boolean,
 *       tableBodyBorder?: boolean,
 *       header?: string[],
 *       table?: any,
 *       invTotalLabel?: string,
 *       invTotal?: string,
 *       invCurrency?: string,
 *       invDescLabel?: string,
 *       invDesc?: string,
 *       creditNoteLabel?: string,
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
 *   },
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
function jsPDFInvoiceTemplate(props) {
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact4, _props$contact5, _props$contact6, _props$invoice, _props$invoice2, _props$invoice3, _props$invoice4, _props$invoice5, _props$invoice6, _props$invoice7, _props$invoice8, _props$invoice9, _props$invoice10, _props$invoice11, _props$invoice12, _props$invoice13, _props$invoice14, _props$invoice15, _props$invoice16, _props$invoice17, _props$invoice17$row, _props$invoice18, _props$invoice18$row, _props$invoice19, _props$invoice19$row, _props$invoice20, _props$invoice20$row, _props$invoice20$row$, _props$invoice21, _props$invoice21$row, _props$invoice22, _props$invoice22$row, _props$invoice23, _props$invoice23$row, _props$invoice24, _props$invoice24$row, _props$invoice24$row$, _props$invoice25, _props$invoice25$tota, _props$invoice26, _props$invoice26$tota, _props$invoice27, _props$invoice27$tota, _props$invoice28, _props$invoice28$row, _props$invoice28$row$, _props$invoice29, _props$invoice29$amou, _props$invoice30, _props$invoice30$amou, _props$invoice31, _props$invoice31$amou, _props$invoice32, _props$invoice32$amou, _props$invoice32$amou2, _props$invoice33, _props$footer;

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
    invoice: {
      label: ((_props$invoice = props.invoice) === null || _props$invoice === void 0 ? void 0 : _props$invoice.label) || "",
      invTotalLabel: ((_props$invoice2 = props.invoice) === null || _props$invoice2 === void 0 ? void 0 : _props$invoice2.invTotalLabel) || "",
      invDueDateLabel: ((_props$invoice3 = props.invoice) === null || _props$invoice3 === void 0 ? void 0 : _props$invoice3.invDueDateLabel) || "",
      num: ((_props$invoice4 = props.invoice) === null || _props$invoice4 === void 0 ? void 0 : _props$invoice4.num) || "",
      invGenDateLabel: ((_props$invoice5 = props.invoice) === null || _props$invoice5 === void 0 ? void 0 : _props$invoice5.invGenDateLabel) || "",
      invDate: ((_props$invoice6 = props.invoice) === null || _props$invoice6 === void 0 ? void 0 : _props$invoice6.invDate) || "",
      invGenDate: ((_props$invoice7 = props.invoice) === null || _props$invoice7 === void 0 ? void 0 : _props$invoice7.invGenDate) || "",
      headerBorder: ((_props$invoice8 = props.invoice) === null || _props$invoice8 === void 0 ? void 0 : _props$invoice8.headerBorder) || false,
      tableBodyBorder: ((_props$invoice9 = props.invoice) === null || _props$invoice9 === void 0 ? void 0 : _props$invoice9.tableBodyBorder) || false,
      header: ((_props$invoice10 = props.invoice) === null || _props$invoice10 === void 0 ? void 0 : _props$invoice10.header) || [],
      table: ((_props$invoice11 = props.invoice) === null || _props$invoice11 === void 0 ? void 0 : _props$invoice11.table) || [],
      invTotal: ((_props$invoice12 = props.invoice) === null || _props$invoice12 === void 0 ? void 0 : _props$invoice12.invTotal) || "",
      invCurrency: ((_props$invoice13 = props.invoice) === null || _props$invoice13 === void 0 ? void 0 : _props$invoice13.invCurrency) || "",
      invDescLabel: ((_props$invoice14 = props.invoice) === null || _props$invoice14 === void 0 ? void 0 : _props$invoice14.invDescLabel) || "",
      invDesc: ((_props$invoice15 = props.invoice) === null || _props$invoice15 === void 0 ? void 0 : _props$invoice15.invDesc) || "",
      creditNoteLabel: ((_props$invoice16 = props.invoice) === null || _props$invoice16 === void 0 ? void 0 : _props$invoice16.creditNoteLabel) || "",
      row1: {
        col1: ((_props$invoice17 = props.invoice) === null || _props$invoice17 === void 0 ? void 0 : (_props$invoice17$row = _props$invoice17.row1) === null || _props$invoice17$row === void 0 ? void 0 : _props$invoice17$row.col1) || "",
        col2: ((_props$invoice18 = props.invoice) === null || _props$invoice18 === void 0 ? void 0 : (_props$invoice18$row = _props$invoice18.row1) === null || _props$invoice18$row === void 0 ? void 0 : _props$invoice18$row.col2) || "",
        col3: ((_props$invoice19 = props.invoice) === null || _props$invoice19 === void 0 ? void 0 : (_props$invoice19$row = _props$invoice19.row1) === null || _props$invoice19$row === void 0 ? void 0 : _props$invoice19$row.col3) || "",
        style: {
          fontSize: ((_props$invoice20 = props.invoice) === null || _props$invoice20 === void 0 ? void 0 : (_props$invoice20$row = _props$invoice20.row1) === null || _props$invoice20$row === void 0 ? void 0 : (_props$invoice20$row$ = _props$invoice20$row.style) === null || _props$invoice20$row$ === void 0 ? void 0 : _props$invoice20$row$.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$invoice21 = props.invoice) === null || _props$invoice21 === void 0 ? void 0 : (_props$invoice21$row = _props$invoice21.row2) === null || _props$invoice21$row === void 0 ? void 0 : _props$invoice21$row.col1) || "",
        col2: ((_props$invoice22 = props.invoice) === null || _props$invoice22 === void 0 ? void 0 : (_props$invoice22$row = _props$invoice22.row2) === null || _props$invoice22$row === void 0 ? void 0 : _props$invoice22$row.col2) || "",
        col3: ((_props$invoice23 = props.invoice) === null || _props$invoice23 === void 0 ? void 0 : (_props$invoice23$row = _props$invoice23.row2) === null || _props$invoice23$row === void 0 ? void 0 : _props$invoice23$row.col3) || "",
        style: {
          fontSize: ((_props$invoice24 = props.invoice) === null || _props$invoice24 === void 0 ? void 0 : (_props$invoice24$row = _props$invoice24.row2) === null || _props$invoice24$row === void 0 ? void 0 : (_props$invoice24$row$ = _props$invoice24$row.style) === null || _props$invoice24$row$ === void 0 ? void 0 : _props$invoice24$row$.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$invoice25 = props.invoice) === null || _props$invoice25 === void 0 ? void 0 : (_props$invoice25$tota = _props$invoice25.total) === null || _props$invoice25$tota === void 0 ? void 0 : _props$invoice25$tota.col1) || "",
        col2: ((_props$invoice26 = props.invoice) === null || _props$invoice26 === void 0 ? void 0 : (_props$invoice26$tota = _props$invoice26.total) === null || _props$invoice26$tota === void 0 ? void 0 : _props$invoice26$tota.col2) || "",
        col3: ((_props$invoice27 = props.invoice) === null || _props$invoice27 === void 0 ? void 0 : (_props$invoice27$tota = _props$invoice27.total) === null || _props$invoice27$tota === void 0 ? void 0 : _props$invoice27$tota.col3) || "",
        style: {
          fontSize: ((_props$invoice28 = props.invoice) === null || _props$invoice28 === void 0 ? void 0 : (_props$invoice28$row = _props$invoice28.row2) === null || _props$invoice28$row === void 0 ? void 0 : (_props$invoice28$row$ = _props$invoice28$row.style) === null || _props$invoice28$row$ === void 0 ? void 0 : _props$invoice28$row$.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$invoice29 = props.invoice) === null || _props$invoice29 === void 0 ? void 0 : (_props$invoice29$amou = _props$invoice29.amountDue) === null || _props$invoice29$amou === void 0 ? void 0 : _props$invoice29$amou.col1) || "",
        col2: ((_props$invoice30 = props.invoice) === null || _props$invoice30 === void 0 ? void 0 : (_props$invoice30$amou = _props$invoice30.amountDue) === null || _props$invoice30$amou === void 0 ? void 0 : _props$invoice30$amou.col2) || "",
        col3: ((_props$invoice31 = props.invoice) === null || _props$invoice31 === void 0 ? void 0 : (_props$invoice31$amou = _props$invoice31.amountDue) === null || _props$invoice31$amou === void 0 ? void 0 : _props$invoice31$amou.col3) || "",
        style: {
          fontSize: ((_props$invoice32 = props.invoice) === null || _props$invoice32 === void 0 ? void 0 : (_props$invoice32$amou = _props$invoice32.amountDue) === null || _props$invoice32$amou === void 0 ? void 0 : (_props$invoice32$amou2 = _props$invoice32$amou.style) === null || _props$invoice32$amou2 === void 0 ? void 0 : _props$invoice32$amou2.fontSize) || 12
        }
      },
      creditNote: ((_props$invoice33 = props.invoice) === null || _props$invoice33 === void 0 ? void 0 : _props$invoice33.creditNote) || ""
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

  if (param.invoice.table && param.invoice.table.length) {
    if (param.invoice.table[0].length != param.invoice.header.length) throw Error("Length of header and table column must be equal.");
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

  if (param.invoice.header.length) {
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

  if (param.invoice.label && param.invoice.num) {
    doc.text(docWidth - 10, currentHeight, param.invoice.label + param.invoice.num, "right");
  }

  if (param.contact.name || param.invoice.label && param.invoice.num) currentHeight += pdfConfig.subLineHeight + 2;
  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);

  if (param.contact.address || param.invoice.invDate) {
    doc.text(10, currentHeight, param.contact.address);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(docWidth - 10, currentHeight, param.invoice.invGenDateLabel, "right");
    doc.text(docWidth - 40, currentHeight, param.invoice.invDueDateLabel, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  if (param.contact.addressLine2 || param.invoice.invGenDate) {
    doc.text(10, currentHeight, param.contact.addressLine2);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    doc.text(docWidth - 40, currentHeight, param.invoice.invDate, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.invGenDate, "right");
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

  var tdWidth = (doc.getPageWidth() - 20) / param.invoice.header.length;

  var addTableHeaderBoarder = function addTableHeaderBoarder() {
    currentHeight += 2;

    for (var i = 0; i < param.invoice.header.length; i++) {
      doc.setFont(undefined, 'bold');
      if (i === 0) doc.rect(10, currentHeight, tdWidth, 7);else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, 7);
    }

    currentHeight -= 2;
  };

  var addTableBodyBoarder = function addTableBodyBoarder(lineHeight) {
    for (var i = 0; i < param.invoice.header.length; i++) {
      if (i === 0) doc.rect(10, currentHeight, tdWidth, lineHeight);else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, lineHeight);
    }
  };

  var addTableHeader = function addTableHeader() {
    if (param.invoice.headerBorder) addTableHeaderBoarder();
    currentHeight += pdfConfig.subLineHeight + 10;
    doc.setFont(undefined, 'bold');
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize); //border color

    doc.setDrawColor(colorGray);
    currentHeight += 2;
    param.invoice.header.forEach(function (row, index) {
      if (index == 0) doc.text(row, 11, currentHeight);else doc.text(row, index * tdWidth + 11, currentHeight);
    });
    currentHeight += pdfConfig.subLineHeight - 1;
    doc.setTextColor(colorGray);
    doc.setLineWidth(0.5);
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  };

  addTableHeader(); //table body

  var tableBodyLength = param.invoice.table.length;
  doc.setFont(undefined, 'normal');
  param.invoice.table.forEach(function (row, index) {
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

    if (param.invoice.tableBodyBorder) addTableBodyBoarder(maxHeight + 1); //display text into row cells
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


  var invDescSize = splitTextAndGetHeight(param.invoice.invDesc, docWidth / 2).height; //END TABLE PART

  if (param.orientationLandscape && currentHeight + invDescSize > 173) {
    doc.addPage();
    currentHeight = 10;
  }

  if (!param.orientationLandscape && currentHeight + invDescSize > 270) {
    doc.addPage();
    currentHeight = 10;
  }

  doc.setTextColor(colorBlack);
  doc.setFontSize(10);
  currentHeight += pdfConfig.lineHeight; //line breaker before invoce total

  if (param.invoice.header.length && (param.invoice.invTotal || param.invoice.invTotalLabel || param.invoice.invCurrency)) {
    doc.setLineWidth(0.5);
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
  } // Subtotal line


  doc.text(docWidth - 50, currentHeight, param.invoice.invTotalLabel, "right");
  doc.text(docWidth - 10, currentHeight, param.invoice.invCurrency + "  " + param.invoice.invTotal.toLocaleString(), "right"); //row1 - tax

  if (param.invoice.row1 && (param.invoice.row1.col1 || param.invoice.row1.col2 || param.invoice.row1.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.row1.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.invoice.row1.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.row1.col2, "right");
  } //end row1
  //row2 - discounts


  if (param.invoice.row2 && (param.invoice.row2.col1 || param.invoice.row2.col2 || param.invoice.row2.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.row2.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.invoice.row2.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.row2.col2, "right");
  } //end row2
  // Main total


  if (param.invoice.total && (param.invoice.total.col1 || param.invoice.total.col2 || param.invoice.total.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(docWidth - 50, currentHeight, param.invoice.total.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.total.col3 + "  " + param.invoice.total.col2, "right");
  } // Amount Due


  doc.setFont(undefined, 'normal');

  if (param.invoice.amountDue && (param.invoice.amountDue.col1 || param.invoice.amountDue.col2 || param.invoice.amountDue.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.amountDue.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.invoice.creditNoteLabel, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.creditNote, "right");
    currentHeight += pdfConfig.lineHeight;
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
    doc.text(docWidth - 50, currentHeight, param.invoice.amountDue.col1, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.amountDue.col3 + "  " + param.invoice.amountDue.col2, "right");
  }

  if (param.orientationLandscape && currentHeight + invDescSize > 173) {
    doc.addPage();
    currentHeight = 10;
  }

  if (!param.orientationLandscape && currentHeight + invDescSize > 270) {
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

      if (param.orientationLandscape && currentHeight + invDescSize > 183) {
        doc.addPage();
        currentHeight = 10;
      }

      if (!param.orientationLandscape && currentHeight + invDescSize > 270) {
        doc.addPage();
        currentHeight = 10;
      }
    }
  }

  var addInvoiceDesc = function addInvoiceDesc() {
    var _param$invoice, _param$invoice2, _param$invoice2$invDe;

    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlack);
    doc.text(param.invoice.invDescLabel, 10, currentHeight);
    currentHeight += pdfConfig.subLineHeight;
    doc.setTextColor(colorGray);
    doc.setFontSize(pdfConfig.fieldTextSize);
    var lines = doc.splitTextToSize(param.invoice.invDesc, docWidth / 2); //text in left half

    if (((_param$invoice = param.invoice) === null || _param$invoice === void 0 ? void 0 : _param$invoice.invDesc.length) > 0) (_param$invoice2 = param.invoice) === null || _param$invoice2 === void 0 ? void 0 : (_param$invoice2$invDe = _param$invoice2.invDesc) === null || _param$invoice2$invDe === void 0 ? void 0 : _param$invoice2$invDe.forEach(function (el) {
      doc.text(el, 10, currentHeight);
      currentHeight += pdfConfig.subLineHeight;
    });
    currentHeight += doc.getTextDimensions(lines).h > 5 ? doc.getTextDimensions(lines).h + 6 : pdfConfig.lineHeight;
    return currentHeight;
  };

  addInvoiceDesc(); //add num of page at the bottom

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiaW52b2ljZSIsImludlRvdGFsTGFiZWwiLCJpbnZEdWVEYXRlTGFiZWwiLCJudW0iLCJpbnZHZW5EYXRlTGFiZWwiLCJpbnZEYXRlIiwiaW52R2VuRGF0ZSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwiaW52VG90YWwiLCJpbnZDdXJyZW5jeSIsImludkRlc2NMYWJlbCIsImludkRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiaW1hZ2VIZWFkZXIiLCJJbWFnZSIsImFkZEltYWdlIiwibGluZSIsInRkV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsImludkRlc2NTaXplIiwidG9Mb2NhbGVTdHJpbmciLCJzZXRQYWdlIiwiYWRkSW52b2ljZURlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFK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TUFBVDtBQUlELEdBTE0sTUFNTGpFLEdBQUcsQ0FBQ2lFLE1BQUosQ0FBV3ZILEtBQUssQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0J5SCxJQUFBQSxRQUFRLEVBQUUxSCxLQUFLLENBQUNHO0FBRFcsR0FBN0I7QUFJRixTQUFPK0csU0FBUDtBQUNEOztlQUVjcEgsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgaW52b2ljZT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyLFxuICogICAgICAgaW52RHVlRGF0ZUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBpbnZEYXRlPzogc3RyaW5nLFxuICogICAgICAgaW52R2VuRGF0ZUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBpbnZHZW5EYXRlPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgaW52VG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGludlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgaW52Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZEZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZEZXNjPzogc3RyaW5nLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBcInNhdmVcIixcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uY291bnRyeSB8fCBcIlwiLFxuICAgIH0sXG4gICAgaW52b2ljZToge1xuICAgICAgbGFiZWw6IHByb3BzLmludm9pY2U/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBpbnZUb3RhbExhYmVsOiBwcm9wcy5pbnZvaWNlPy5pbnZUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBpbnZEdWVEYXRlTGFiZWw6IHByb3BzLmludm9pY2U/LmludkR1ZURhdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5pbnZvaWNlPy5udW0gfHwgXCJcIixcbiAgICAgIGludkdlbkRhdGVMYWJlbDogcHJvcHMuaW52b2ljZT8uaW52R2VuRGF0ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBpbnZEYXRlOiBwcm9wcy5pbnZvaWNlPy5pbnZEYXRlIHx8IFwiXCIsXG4gICAgICBpbnZHZW5EYXRlOiBwcm9wcy5pbnZvaWNlPy5pbnZHZW5EYXRlIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmludm9pY2U/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuaW52b2ljZT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5pbnZvaWNlPy5oZWFkZXIgfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuaW52b2ljZT8udGFibGUgfHwgW10sXG4gICAgICBpbnZUb3RhbDogcHJvcHMuaW52b2ljZT8uaW52VG90YWwgfHwgXCJcIixcbiAgICAgIGludkN1cnJlbmN5OiBwcm9wcy5pbnZvaWNlPy5pbnZDdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgaW52RGVzY0xhYmVsOiBwcm9wcy5pbnZvaWNlPy5pbnZEZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIGludkRlc2M6IHByb3BzLmludm9pY2U/LmludkRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuaW52b2ljZT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy50b3RhbD8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5pbnZvaWNlPy50b3RhbD8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy50b3RhbD8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmludm9pY2U/LmNyZWRpdE5vdGUgfHwgXCJcIixcblxuXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCBmYWxzZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmludm9pY2UudGFibGUgJiYgcGFyYW0uaW52b2ljZS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uaW52b2ljZS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICB9O1xuXG4gIHZhciBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG5cbiAgdmFyIGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICB2YXIgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICB2YXIgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICB2YXIgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIHZhciBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIlxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgdmFyIGN1cnJlbnRIZWlnaHQgPSAxNTtcbiAgLy92YXIgc3RhcnRQb2ludFJlY3RQYW5lbDEgPSBjdXJyZW50SGVpZ2h0ICsgNjtcblxuICB2YXIgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgdmFyIGltYWdlSGVhZGVyID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VIZWFkZXIuc3JjID0gcGFyYW0ubG9nby5zcmM7XG4gICAgLy9kb2MudGV4dChodG1sRG9jLnNlc3Npb25EYXRlVGV4dCwgZG9jV2lkdGggLSAoZG9jLmdldFRleHRXaWR0aChodG1sRG9jLnNlc3Npb25EYXRlVGV4dCkgKyAxMCksIGN1cnJlbnRIZWlnaHQpO1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIGltYWdlSGVhZGVyLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIFwicmlnaHRcIik7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgXCJyaWdodFwiKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIFwicmlnaHRcIik7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgXCJyaWdodFwiKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5pbnZvaWNlLmxhYmVsICYmIHBhcmFtLmludm9pY2UubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmludm9pY2UubGFiZWwgKyBwYXJhbS5pbnZvaWNlLm51bSxcbiAgICAgIFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5pbnZvaWNlLmxhYmVsICYmIHBhcmFtLmludm9pY2UubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzcyB8fCBwYXJhbS5pbnZvaWNlLmludkRhdGUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52RHVlRGF0ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTIgfHwgcGFyYW0uaW52b2ljZS5pbnZHZW5EYXRlKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUyKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkRhdGUsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5pbnZHZW5EYXRlLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTMpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5jb3VudHJ5KVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmNvdW50cnkpO1xuICBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIC8vVEFCTEUgUEFSVFxuICAvL3ZhciB0ZFdpZHRoID0gMzEuNjY7XG4gIC8vMTAgbWFyZ2luIGxlZnQgLSAxMCBtYXJnaW4gcmlnaHRcbiAgdmFyIHRkV2lkdGggPSAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gMjApIC8gcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoO1xuXG4gIHZhciBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIHZhciBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICB9XG4gIH07XG4gIHZhciBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uaW52b2ljZS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uaW52b2ljZS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmludm9pY2UudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBwYXJhbS5pbnZvaWNlLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIHZhciBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmludm9pY2UudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSArIGluZGV4ICogdGRXaWR0aCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAxODUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAxNzggJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmXG4gICAgICAoY3VycmVudEhlaWdodCA+IDI2NSB8fFxuICAgICAgICAoY3VycmVudEhlaWdodCA+IDI1NSAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICAgIC8vICAgICAgIGVsc2VcbiAgICAgIC8vICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDIgKyBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7IC8vc2FtZSBhcyBpbiBhZGR0YWJsZUhlYWRlclxuICAgIH1cblxuICAgIC8vcmVzZXQgdGhlIGhlaWdodCB0aGF0IHdhcyBpbmNyZWFzZWQgdG8gY2hlY2sgdGhlIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gIFxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTsgXG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KCdObyBEYXRhJywgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuICAvLyAgICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpOyAvL25lc2UgZHVhbSB0ZSBzaGZhcWltIGxpbmUgbmUgZnVuZCB0ZSB0YWJlbGVzXG5cbiAgdmFyIGludkRlc2NTaXplID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgIHBhcmFtLmludm9pY2UuaW52RGVzYyxcbiAgICBkb2NXaWR0aCAvIDJcbiAgKS5oZWlnaHQ7XG4gIC8vRU5EIFRBQkxFIFBBUlRcblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMTczKSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gIH1cblxuICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uaW52b2ljZS5pbnZUb3RhbCB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5pbnZUb3RhbExhYmVsIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLmludkN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5pbnZUb3RhbExhYmVsLCBcInJpZ2h0XCIpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uaW52b2ljZS5pbnZDdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmludm9pY2UuaW52VG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgXCJyaWdodFwiKTtcblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmludm9pY2Uucm93MSAmJlxuICAgIChwYXJhbS5pbnZvaWNlLnJvdzEuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDIgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5pbnZvaWNlLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5yb3cyICYmXG4gICAgKHBhcmFtLmludm9pY2Uucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmludm9pY2Uucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS50b3RhbCAmJlxuICAgIChwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2UudG90YWwuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UudG90YWwuY29sMSwgXCJyaWdodFwiKVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmludm9pY2UudG90YWwuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmludm9pY2UuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmludm9pY2UuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmNyZWRpdE5vdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmNyZWRpdE5vdGUsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgIFxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cblxuXG5cbiAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE3Mykge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cblxuICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE4Mykge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMjcwKSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgYWRkSW52b2ljZURlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgZG9jLnRleHQocGFyYW0uaW52b2ljZS5pbnZEZXNjTGFiZWwsIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gICAgdmFyIGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZShwYXJhbS5pbnZvaWNlLmludkRlc2MsIGRvY1dpZHRoIC8gMik7XG4gICAgLy90ZXh0IGluIGxlZnQgaGFsZlxuICAgIGlmIChwYXJhbS5pbnZvaWNlPy5pbnZEZXNjLmxlbmd0aCA+IDApXG4gICAgICBwYXJhbS5pbnZvaWNlPy5pbnZEZXNjPy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBkb2MudGV4dChlbCwgMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgfSlcbiAgICBcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmggPiA1XG4gICAgICAgID8gZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oICsgNlxuICAgICAgICA6IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIGN1cnJlbnRIZWlnaHQ7XG4gIH07XG4gIGFkZEludm9pY2VEZXNjKCk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcInNhdmVcIikgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImJsb2JcIikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KFwiYmxvYlwiKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJkYXRhdXJpc3RyaW5nXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KFwiZGF0YXVyaXN0cmluZ1wiLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoXCJhcnJheWJ1ZmZlclwiKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdfQ==