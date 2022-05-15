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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiaW52b2ljZSIsImludlRvdGFsTGFiZWwiLCJpbnZEdWVEYXRlTGFiZWwiLCJudW0iLCJpbnZHZW5EYXRlTGFiZWwiLCJpbnZEYXRlIiwiaW52R2VuRGF0ZSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwiaW52VG90YWwiLCJpbnZDdXJyZW5jeSIsImludkRlc2NMYWJlbCIsImludkRlc2MiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiaW1hZ2VIZWFkZXIiLCJJbWFnZSIsImFkZEltYWdlIiwibGluZSIsInRkV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsImludkRlc2NTaXplIiwidG9Mb2NhbGVTdHJpbmciLCJzZXRQYWdlIiwiYWRkSW52b2ljZURlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFKRDtBQUlxQjtBQUN0Q0MsRUFB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ZXNDb250ZW50IjpbImltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5cbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7IHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICB9LFxuICogICBpbnZvaWNlPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIsXG4gKiAgICAgICBpbnZEdWVEYXRlTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGludkRhdGU/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZHZW5EYXRlTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGludkdlbkRhdGU/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBpbnZUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgaW52VG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGludkRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGludkRlc2M/OiBzdHJpbmcsXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5jb3VudHJ5IHx8IFwiXCIsXG4gICAgfSxcbiAgICBpbnZvaWNlOiB7XG4gICAgICBsYWJlbDogcHJvcHMuaW52b2ljZT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIGludlRvdGFsTGFiZWw6IHByb3BzLmludm9pY2U/LmludlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGludkR1ZURhdGVMYWJlbDogcHJvcHMuaW52b2ljZT8uaW52RHVlRGF0ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmludm9pY2U/Lm51bSB8fCBcIlwiLFxuICAgICAgaW52R2VuRGF0ZUxhYmVsOiBwcm9wcy5pbnZvaWNlPy5pbnZHZW5EYXRlTGFiZWwgfHwgXCJcIixcbiAgICAgIGludkRhdGU6IHByb3BzLmludm9pY2U/LmludkRhdGUgfHwgXCJcIixcbiAgICAgIGludkdlbkRhdGU6IHByb3BzLmludm9pY2U/LmludkdlbkRhdGUgfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuaW52b2ljZT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5pbnZvaWNlPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmludm9pY2U/LmhlYWRlciB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5pbnZvaWNlPy50YWJsZSB8fCBbXSxcbiAgICAgIGludlRvdGFsOiBwcm9wcy5pbnZvaWNlPy5pbnZUb3RhbCB8fCBcIlwiLFxuICAgICAgaW52Q3VycmVuY3k6IHByb3BzLmludm9pY2U/LmludkN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBpbnZEZXNjTGFiZWw6IHByb3BzLmludm9pY2U/LmludkRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgaW52RGVzYzogcHJvcHMuaW52b2ljZT8uaW52RGVzYyB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmludm9pY2U/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmludm9pY2U/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuaW52b2ljZT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuaW52b2ljZT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5pbnZvaWNlPy5jcmVkaXROb3RlIHx8IFwiXCIsXG5cblxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICB2YXIgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlICYmIHBhcmFtLmludm9pY2UudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmludm9pY2UudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICB2YXIgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuXG4gIHZhciBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgdmFyIGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgdmFyIGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgdmFyIGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICB2YXIgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCJcbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gMTU7XG4gIC8vdmFyIHN0YXJ0UG9pbnRSZWN0UGFuZWwxID0gY3VycmVudEhlaWdodCArIDY7XG5cbiAgdmFyIHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIHZhciBpbWFnZUhlYWRlciA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlSGVhZGVyLnNyYyA9IHBhcmFtLmxvZ28uc3JjO1xuICAgIC8vZG9jLnRleHQoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQsIGRvY1dpZHRoIC0gKGRvYy5nZXRUZXh0V2lkdGgoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQpICsgMTApLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBpbWFnZUhlYWRlcixcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBcInJpZ2h0XCIpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBcInJpZ2h0XCIpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIFwicmlnaHRcIik7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKVxuICB9O1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uaW52b2ljZS5sYWJlbCAmJiBwYXJhbS5pbnZvaWNlLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5pbnZvaWNlLmxhYmVsICsgcGFyYW0uaW52b2ljZS5udW0sXG4gICAgICBcInJpZ2h0XCJcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uaW52b2ljZS5sYWJlbCAmJiBwYXJhbS5pbnZvaWNlLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5jb250YWN0LmFkZHJlc3MgfHwgcGFyYW0uaW52b2ljZS5pbnZEYXRlKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzcyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkdlbkRhdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkR1ZURhdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUyIHx8IHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmFkZHJlc3NMaW5lMik7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5pbnZEYXRlLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuY291bnRyeSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5jb3VudHJ5KTtcbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5pbnZvaWNlLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmludm9pY2UuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmludm9pY2UuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5pbnZvaWNlLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgcGFyYW0uaW52b2ljZS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cbiAgLy8gICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTsgLy9uZXNlIGR1YW0gdGUgc2hmYXFpbSBsaW5lIG5lIGZ1bmQgdGUgdGFiZWxlc1xuXG4gIHZhciBpbnZEZXNjU2l6ZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICBwYXJhbS5pbnZvaWNlLmludkRlc2MsXG4gICAgZG9jV2lkdGggLyAyXG4gICkuaGVpZ2h0O1xuICAvL0VORCBUQUJMRSBQQVJUXG5cbiAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE3Mykge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmludm9pY2UuaW52VG90YWwgfHxcbiAgICAgIHBhcmFtLmludm9pY2UuaW52VG90YWxMYWJlbCB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5pbnZDdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gNjAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52VG90YWxMYWJlbCwgXCJyaWdodFwiKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAyMCwgY3VycmVudEhlaWdodCwgIHBhcmFtLmludm9pY2UuaW52Q3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5pbnZvaWNlLmludlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksIFwicmlnaHRcIik7XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLnJvdzEgJiZcbiAgICAocGFyYW0uaW52b2ljZS5yb3cxLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93MS5jb2wyIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNjAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2Uucm93MS5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMjAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2Uucm93MS5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG4gIC8vZW5kIHJvdzFcblxuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmludm9pY2Uucm93MiAmJlxuICAgIChwYXJhbS5pbnZvaWNlLnJvdzIuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5yb3cyLmNvbDIgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5pbnZvaWNlLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA2MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5yb3cyLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAyMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5yb3cyLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmludm9pY2UudG90YWwgJiZcbiAgICAocGFyYW0uaW52b2ljZS50b3RhbC5jb2wxIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDIgfHxcbiAgICAgIHBhcmFtLmludm9pY2UudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDYwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDEsIFwicmlnaHRcIilcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDIwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDMgKyBcIiAgIFwiICsgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuY3JlZGl0Tm90ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAxLjUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAyNSwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMiwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wzLCBcInJpZ2h0XCIpO1xuICB9XG5cblxuXG4gIGlmIChwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgXCJjZW50ZXJcIik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAxODMpIHtcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDI3MCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGFkZEludm9pY2VEZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGRvYy50ZXh0KHBhcmFtLmludm9pY2UuaW52RGVzY0xhYmVsLCAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUocGFyYW0uaW52b2ljZS5pbnZEZXNjLCBkb2NXaWR0aCAvIDIpO1xuICAgIC8vdGV4dCBpbiBsZWZ0IGhhbGZcbiAgICBpZiAocGFyYW0uaW52b2ljZT8uaW52RGVzYy5sZW5ndGggPiAwKVxuICAgICAgcGFyYW0uaW52b2ljZT8uaW52RGVzYz8uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZG9jLnRleHQoZWwsIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIH0pXG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oID4gNVxuICAgICAgICA/IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCArIDZcbiAgICAgICAgOiBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIHJldHVybiBjdXJyZW50SGVpZ2h0O1xuICB9O1xuICBhZGRJbnZvaWNlRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgXCJjZW50ZXJcIik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJzYXZlXCIpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJibG9iXCIpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChcImJsb2JcIik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiZGF0YXVyaXN0cmluZ1wiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChcImRhdGF1cmlzdHJpbmdcIiwge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYXJyYXlidWZmZXJcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KFwiYXJyYXlidWZmZXJcIiksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=