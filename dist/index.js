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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact4, _props$contact5, _props$contact6, _props$invoice, _props$invoice2, _props$invoice3, _props$invoice4, _props$invoice5, _props$invoice6, _props$invoice7, _props$invoice8, _props$invoice9, _props$invoice10, _props$invoice11, _props$invoice12, _props$invoice13, _props$invoice14, _props$invoice15, _props$invoice16, _props$invoice16$row, _props$invoice17, _props$invoice17$row, _props$invoice18, _props$invoice18$row, _props$invoice19, _props$invoice19$row, _props$invoice19$row$, _props$invoice20, _props$invoice20$row, _props$invoice21, _props$invoice21$row, _props$invoice22, _props$invoice22$row, _props$invoice23, _props$invoice23$row, _props$invoice23$row$, _props$invoice24, _props$invoice24$tota, _props$invoice25, _props$invoice25$tota, _props$invoice26, _props$invoice26$tota, _props$invoice27, _props$invoice27$row, _props$invoice27$row$, _props$invoice28, _props$invoice28$amou, _props$invoice29, _props$invoice29$amou, _props$invoice30, _props$invoice30$amou, _props$invoice31, _props$invoice31$amou, _props$invoice31$amou2, _props$invoice32, _props$footer;

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
      row1: {
        col1: ((_props$invoice16 = props.invoice) === null || _props$invoice16 === void 0 ? void 0 : (_props$invoice16$row = _props$invoice16.row1) === null || _props$invoice16$row === void 0 ? void 0 : _props$invoice16$row.col1) || "",
        col2: ((_props$invoice17 = props.invoice) === null || _props$invoice17 === void 0 ? void 0 : (_props$invoice17$row = _props$invoice17.row1) === null || _props$invoice17$row === void 0 ? void 0 : _props$invoice17$row.col2) || "",
        col3: ((_props$invoice18 = props.invoice) === null || _props$invoice18 === void 0 ? void 0 : (_props$invoice18$row = _props$invoice18.row1) === null || _props$invoice18$row === void 0 ? void 0 : _props$invoice18$row.col3) || "",
        style: {
          fontSize: ((_props$invoice19 = props.invoice) === null || _props$invoice19 === void 0 ? void 0 : (_props$invoice19$row = _props$invoice19.row1) === null || _props$invoice19$row === void 0 ? void 0 : (_props$invoice19$row$ = _props$invoice19$row.style) === null || _props$invoice19$row$ === void 0 ? void 0 : _props$invoice19$row$.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$invoice20 = props.invoice) === null || _props$invoice20 === void 0 ? void 0 : (_props$invoice20$row = _props$invoice20.row2) === null || _props$invoice20$row === void 0 ? void 0 : _props$invoice20$row.col1) || "",
        col2: ((_props$invoice21 = props.invoice) === null || _props$invoice21 === void 0 ? void 0 : (_props$invoice21$row = _props$invoice21.row2) === null || _props$invoice21$row === void 0 ? void 0 : _props$invoice21$row.col2) || "",
        col3: ((_props$invoice22 = props.invoice) === null || _props$invoice22 === void 0 ? void 0 : (_props$invoice22$row = _props$invoice22.row2) === null || _props$invoice22$row === void 0 ? void 0 : _props$invoice22$row.col3) || "",
        style: {
          fontSize: ((_props$invoice23 = props.invoice) === null || _props$invoice23 === void 0 ? void 0 : (_props$invoice23$row = _props$invoice23.row2) === null || _props$invoice23$row === void 0 ? void 0 : (_props$invoice23$row$ = _props$invoice23$row.style) === null || _props$invoice23$row$ === void 0 ? void 0 : _props$invoice23$row$.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$invoice24 = props.invoice) === null || _props$invoice24 === void 0 ? void 0 : (_props$invoice24$tota = _props$invoice24.total) === null || _props$invoice24$tota === void 0 ? void 0 : _props$invoice24$tota.col1) || "",
        col2: ((_props$invoice25 = props.invoice) === null || _props$invoice25 === void 0 ? void 0 : (_props$invoice25$tota = _props$invoice25.total) === null || _props$invoice25$tota === void 0 ? void 0 : _props$invoice25$tota.col2) || "",
        col3: ((_props$invoice26 = props.invoice) === null || _props$invoice26 === void 0 ? void 0 : (_props$invoice26$tota = _props$invoice26.total) === null || _props$invoice26$tota === void 0 ? void 0 : _props$invoice26$tota.col3) || "",
        style: {
          fontSize: ((_props$invoice27 = props.invoice) === null || _props$invoice27 === void 0 ? void 0 : (_props$invoice27$row = _props$invoice27.row2) === null || _props$invoice27$row === void 0 ? void 0 : (_props$invoice27$row$ = _props$invoice27$row.style) === null || _props$invoice27$row$ === void 0 ? void 0 : _props$invoice27$row$.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$invoice28 = props.invoice) === null || _props$invoice28 === void 0 ? void 0 : (_props$invoice28$amou = _props$invoice28.amountDue) === null || _props$invoice28$amou === void 0 ? void 0 : _props$invoice28$amou.col1) || "",
        col2: ((_props$invoice29 = props.invoice) === null || _props$invoice29 === void 0 ? void 0 : (_props$invoice29$amou = _props$invoice29.amountDue) === null || _props$invoice29$amou === void 0 ? void 0 : _props$invoice29$amou.col2) || "",
        col3: ((_props$invoice30 = props.invoice) === null || _props$invoice30 === void 0 ? void 0 : (_props$invoice30$amou = _props$invoice30.amountDue) === null || _props$invoice30$amou === void 0 ? void 0 : _props$invoice30$amou.col3) || "",
        style: {
          fontSize: ((_props$invoice31 = props.invoice) === null || _props$invoice31 === void 0 ? void 0 : (_props$invoice31$amou = _props$invoice31.amountDue) === null || _props$invoice31$amou === void 0 ? void 0 : (_props$invoice31$amou2 = _props$invoice31$amou.style) === null || _props$invoice31$amou2 === void 0 ? void 0 : _props$invoice31$amou2.fontSize) || 12
        }
      },
      creditNote: ((_props$invoice32 = props.invoice) === null || _props$invoice32 === void 0 ? void 0 : _props$invoice32.creditNote) || ""
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
  }); //     doc.line(10, currentHeight, docWidth - 10, currentHeight); //nese duam te shfaqim line ne fund te tabeles

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


  doc.text(docWidth - 60, currentHeight, param.invoice.invTotalLabel, "right");
  doc.text(docWidth - 20, currentHeight, param.invoice.invCurrency + "  " + param.invoice.invTotal.toLocaleString(), "right"); //row1 - tax

  if (param.invoice.row1 && (param.invoice.row1.col1 || param.invoice.row1.col2 || param.invoice.row1.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.row1.style.fontSize);
    doc.text(docWidth - 60, currentHeight, param.invoice.row1.col1, "right");
    doc.text(docWidth - 20, currentHeight, param.invoice.row1.col2, "right");
  } //end row1
  //row2 - discounts


  if (param.invoice.row2 && (param.invoice.row2.col1 || param.invoice.row2.col2 || param.invoice.row2.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.row2.style.fontSize);
    doc.text(docWidth - 60, currentHeight, param.invoice.row2.col1, "right");
    doc.text(docWidth - 20, currentHeight, param.invoice.row2.col2, "right");
  } //end row2
  // Main total


  if (param.invoice.total && (param.invoice.total.col1 || param.invoice.total.col2 || param.invoice.total.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(docWidth - 60, currentHeight, param.invoice.total.col1, "right");
    doc.text(docWidth - 20, currentHeight, param.invoice.total.col3 + "   " + param.invoice.total.col2, "right");
  } // Amount Due


  doc.setFont(undefined, 'normal');

  if (param.invoice.amountDue && (param.invoice.amountDue.col1 || param.invoice.amountDue.col2 || param.invoice.amountDue.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.amountDue.style.fontSize);
    doc.text(docWidth - 10, currentHeight, param.invoice.creditNote, "right");
    currentHeight += pdfConfig.lineHeight;
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
    doc.text(docWidth / 1.5, currentHeight, param.invoice.amountDue.col1, "right");
    doc.text(docWidth - 25, currentHeight, param.invoice.amountDue.col2, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.amountDue.col3, "right");
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
    var _param$invoice, _param$invoice$invDes;

    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlack);
    doc.text(param.invoice.invDescLabel, 10, currentHeight);
    currentHeight += pdfConfig.subLineHeight;
    doc.setTextColor(colorGray);
    doc.setFontSize(pdfConfig.fieldTextSize);
    var lines = doc.splitTextToSize(param.invoice.invDesc, docWidth / 2); //text in left half

    (_param$invoice = param.invoice) === null || _param$invoice === void 0 ? void 0 : (_param$invoice$invDes = _param$invoice.invDesc) === null || _param$invoice$invDes === void 0 ? void 0 : _param$invoice$invDes.forEach(function (el) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiaW52b2ljZSIsImludlRvdGFsTGFiZWwiLCJpbnZEdWVEYXRlTGFiZWwiLCJudW0iLCJpbnZHZW5EYXRlTGFiZWwiLCJpbnZEYXRlIiwiaW52R2VuRGF0ZSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwiaW52VG90YWwiLCJpbnZDdXJyZW5jeSIsImludkRlc2NMYWJlbCIsImludkRlc2MiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiaW1hZ2VIZWFkZXIiLCJJbWFnZSIsImFkZEltYWdlIiwibGluZSIsInRkV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsImludkRlc2NTaXplIiwidG9Mb2NhbGVTdHJpbmciLCJzZXRQYWdlIiwiYWRkSW52b2ljZURlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFKRDtBQUlxQjtBQUN0Q0MsRUFB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QUNLLElBQUlILEtBQUssQ0FBQ0MsVUFBTixLQUFxQixNQUF6QixFQUFpQztBQUNwQyxRQUFNb0gsVUFBVSxHQUFHaEUsR0FBRyxDQUFDaUUsTUFBSixDQUFXLE1BQVgsQ0FBbkI7QUFDQUwsSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQTSxNQUFBQSxJQUFJLEVBQUVGO0FBRkMsTUFBVDtBQUlELEdBTkksTUFNRSxJQUFJckgsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLGVBQXpCLEVBQTBDO0FBQy9DZ0gsSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQTyxNQUFBQSxhQUFhLEVBQUVuRSxHQUFHLENBQUNpRSxNQUFKLENBQVcsZUFBWCxFQUE0QjtBQUN6Q0csUUFBQUEsUUFBUSxFQUFFekgsS0FBSyxDQUFDRztBQUR5QixPQUE1QjtBQUZSLE1BQVQ7QUFNRCxHQVBNLE1BT0EsSUFBSUgsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLGFBQXpCLEVBQXdDO0FBQzdDZ0gsSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQUyxNQUFBQSxXQUFXLEVBQUVyRSxHQUFHLENBQUNpRSxNQUFKLENBQVcsYUFBWDtBQUZOLE1BQVQ7QUFJRCxHQUxNLE1BTUxqRSxHQUFHLENBQUNpRSxNQUFKLENBQVd0SCxLQUFLLENBQUNDLFVBQWpCLEVBQTZCO0FBQzNCd0gsSUFBQUEsUUFBUSxFQUFFekgsS0FBSyxDQUFDRztBQURXLEdBQTdCO0FBSUYsU0FBTzhHLFNBQVA7QUFDRDs7ZUFFY25ILG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHsge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGludm9pY2U/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlcixcbiAqICAgICAgIGludkR1ZURhdGVMYWJlbD86IHN0cmluZ1xuICogICAgICAgaW52RGF0ZT86IHN0cmluZyxcbiAqICAgICAgIGludkdlbkRhdGVMYWJlbD86IHN0cmluZ1xuICogICAgICAgaW52R2VuRGF0ZT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIGludlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGludkN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgaW52RGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgaW52RGVzYz86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgXCJzYXZlXCIsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGludm9pY2U6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5pbnZvaWNlPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgaW52VG90YWxMYWJlbDogcHJvcHMuaW52b2ljZT8uaW52VG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgaW52RHVlRGF0ZUxhYmVsOiBwcm9wcy5pbnZvaWNlPy5pbnZEdWVEYXRlTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuaW52b2ljZT8ubnVtIHx8IFwiXCIsXG4gICAgICBpbnZHZW5EYXRlTGFiZWw6IHByb3BzLmludm9pY2U/LmludkdlbkRhdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgaW52RGF0ZTogcHJvcHMuaW52b2ljZT8uaW52RGF0ZSB8fCBcIlwiLFxuICAgICAgaW52R2VuRGF0ZTogcHJvcHMuaW52b2ljZT8uaW52R2VuRGF0ZSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5pbnZvaWNlPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmludm9pY2U/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuaW52b2ljZT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmludm9pY2U/LnRhYmxlIHx8IFtdLFxuICAgICAgaW52VG90YWw6IHByb3BzLmludm9pY2U/LmludlRvdGFsIHx8IFwiXCIsXG4gICAgICBpbnZDdXJyZW5jeTogcHJvcHMuaW52b2ljZT8uaW52Q3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGludkRlc2NMYWJlbDogcHJvcHMuaW52b2ljZT8uaW52RGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICBpbnZEZXNjOiBwcm9wcy5pbnZvaWNlPy5pbnZEZXNjIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy50b3RhbD8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5pbnZvaWNlPy50b3RhbD8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy50b3RhbD8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmludm9pY2U/LmNyZWRpdE5vdGUgfHwgXCJcIixcblxuXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCBmYWxzZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmludm9pY2UudGFibGUgJiYgcGFyYW0uaW52b2ljZS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uaW52b2ljZS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICB9O1xuXG4gIHZhciBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG5cbiAgdmFyIGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICB2YXIgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICB2YXIgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICB2YXIgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIHZhciBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIlxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgdmFyIGN1cnJlbnRIZWlnaHQgPSAxNTtcbiAgLy92YXIgc3RhcnRQb2ludFJlY3RQYW5lbDEgPSBjdXJyZW50SGVpZ2h0ICsgNjtcblxuICB2YXIgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgdmFyIGltYWdlSGVhZGVyID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VIZWFkZXIuc3JjID0gcGFyYW0ubG9nby5zcmM7XG4gICAgLy9kb2MudGV4dChodG1sRG9jLnNlc3Npb25EYXRlVGV4dCwgZG9jV2lkdGggLSAoZG9jLmdldFRleHRXaWR0aChodG1sRG9jLnNlc3Npb25EYXRlVGV4dCkgKyAxMCksIGN1cnJlbnRIZWlnaHQpO1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIGltYWdlSGVhZGVyLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIFwicmlnaHRcIik7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgXCJyaWdodFwiKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIFwicmlnaHRcIik7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgXCJyaWdodFwiKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5pbnZvaWNlLmxhYmVsICYmIHBhcmFtLmludm9pY2UubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmludm9pY2UubGFiZWwgKyBwYXJhbS5pbnZvaWNlLm51bSxcbiAgICAgIFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5pbnZvaWNlLmxhYmVsICYmIHBhcmFtLmludm9pY2UubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzcyB8fCBwYXJhbS5pbnZvaWNlLmludkRhdGUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52RHVlRGF0ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTIgfHwgcGFyYW0uaW52b2ljZS5pbnZHZW5EYXRlKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUyKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkRhdGUsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5pbnZHZW5EYXRlLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTMpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5jb3VudHJ5KVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmNvdW50cnkpO1xuICBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIC8vVEFCTEUgUEFSVFxuICAvL3ZhciB0ZFdpZHRoID0gMzEuNjY7XG4gIC8vMTAgbWFyZ2luIGxlZnQgLSAxMCBtYXJnaW4gcmlnaHRcbiAgdmFyIHRkV2lkdGggPSAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gMjApIC8gcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoO1xuXG4gIHZhciBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIHZhciBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICB9XG4gIH07XG4gIHZhciBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uaW52b2ljZS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uaW52b2ljZS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmludm9pY2UudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgcGFyYW0uaW52b2ljZS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuICAvLyAgICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpOyAvL25lc2UgZHVhbSB0ZSBzaGZhcWltIGxpbmUgbmUgZnVuZCB0ZSB0YWJlbGVzXG5cbiAgdmFyIGludkRlc2NTaXplID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgIHBhcmFtLmludm9pY2UuaW52RGVzYyxcbiAgICBkb2NXaWR0aCAvIDJcbiAgKS5oZWlnaHQ7XG4gIC8vRU5EIFRBQkxFIFBBUlRcblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMTczKSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gIH1cblxuICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uaW52b2ljZS5pbnZUb3RhbCB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5pbnZUb3RhbExhYmVsIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLmludkN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgZG9jLnRleHQoZG9jV2lkdGggLSA2MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5pbnZUb3RhbExhYmVsLCBcInJpZ2h0XCIpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDIwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uaW52b2ljZS5pbnZDdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmludm9pY2UuaW52VG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgXCJyaWdodFwiKTtcblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmludm9pY2Uucm93MSAmJlxuICAgIChwYXJhbS5pbnZvaWNlLnJvdzEuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDIgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5pbnZvaWNlLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA2MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAyMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5yb3cyICYmXG4gICAgKHBhcmFtLmludm9pY2Uucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmludm9pY2Uucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDYwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDIwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS50b3RhbCAmJlxuICAgIChwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2UudG90YWwuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNjAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UudG90YWwuY29sMSwgXCJyaWdodFwiKVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMjAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UudG90YWwuY29sMyArIFwiICAgXCIgKyBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5jcmVkaXROb3RlLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICBcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDEuNSwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDI1LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wyLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDMsIFwicmlnaHRcIik7XG4gIH1cblxuXG5cbiAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE3Mykge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cblxuICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE4Mykge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMjcwKSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgYWRkSW52b2ljZURlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgZG9jLnRleHQocGFyYW0uaW52b2ljZS5pbnZEZXNjTGFiZWwsIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gICAgdmFyIGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZShwYXJhbS5pbnZvaWNlLmludkRlc2MsIGRvY1dpZHRoIC8gMik7XG4gICAgLy90ZXh0IGluIGxlZnQgaGFsZlxuICAgIHBhcmFtLmludm9pY2U/LmludkRlc2M/LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBkb2MudGV4dChlbCwgMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9KVxuICAgIFxuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCA+IDVcbiAgICAgICAgPyBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmggKyA2XG4gICAgICAgIDogcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4gY3VycmVudEhlaWdodDtcbiAgfTtcbiAgYWRkSW52b2ljZURlc2MoKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwic2F2ZVwiKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYmxvYlwiKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoXCJibG9iXCIpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImRhdGF1cmlzdHJpbmdcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoXCJkYXRhdXJpc3RyaW5nXCIsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImFycmF5YnVmZmVyXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChcImFycmF5YnVmZmVyXCIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl19