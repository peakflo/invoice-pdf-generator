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
 *   },
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
function jsPDFInvoiceTemplate(props) {
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact4, _props$contact5, _props$contact6, _props$invoice, _props$invoice2, _props$invoice3, _props$invoice4, _props$invoice5, _props$invoice6, _props$invoice7, _props$invoice8, _props$invoice9, _props$invoice10, _props$invoice11, _props$invoice12, _props$invoice13, _props$invoice14, _props$invoice15, _props$invoice16, _props$invoice17, _props$invoice18, _props$invoice18$row, _props$invoice19, _props$invoice19$row, _props$invoice20, _props$invoice20$row, _props$invoice21, _props$invoice21$row, _props$invoice21$row$, _props$invoice22, _props$invoice22$row, _props$invoice23, _props$invoice23$row, _props$invoice24, _props$invoice24$row, _props$invoice25, _props$invoice25$row, _props$invoice25$row$, _props$invoice26, _props$invoice26$tota, _props$invoice27, _props$invoice27$tota, _props$invoice28, _props$invoice28$tota, _props$invoice29, _props$invoice29$row, _props$invoice29$row$, _props$invoice30, _props$invoice30$amou, _props$invoice31, _props$invoice31$amou, _props$invoice32, _props$invoice32$amou, _props$invoice33, _props$invoice33$amou, _props$invoice33$amou2, _props$invoice34, _props$footer;

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
      note: ((_props$invoice17 = props.invoice) === null || _props$invoice17 === void 0 ? void 0 : _props$invoice17.note) || "",
      row1: {
        col1: ((_props$invoice18 = props.invoice) === null || _props$invoice18 === void 0 ? void 0 : (_props$invoice18$row = _props$invoice18.row1) === null || _props$invoice18$row === void 0 ? void 0 : _props$invoice18$row.col1) || "",
        col2: ((_props$invoice19 = props.invoice) === null || _props$invoice19 === void 0 ? void 0 : (_props$invoice19$row = _props$invoice19.row1) === null || _props$invoice19$row === void 0 ? void 0 : _props$invoice19$row.col2) || "",
        col3: ((_props$invoice20 = props.invoice) === null || _props$invoice20 === void 0 ? void 0 : (_props$invoice20$row = _props$invoice20.row1) === null || _props$invoice20$row === void 0 ? void 0 : _props$invoice20$row.col3) || "",
        style: {
          fontSize: ((_props$invoice21 = props.invoice) === null || _props$invoice21 === void 0 ? void 0 : (_props$invoice21$row = _props$invoice21.row1) === null || _props$invoice21$row === void 0 ? void 0 : (_props$invoice21$row$ = _props$invoice21$row.style) === null || _props$invoice21$row$ === void 0 ? void 0 : _props$invoice21$row$.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$invoice22 = props.invoice) === null || _props$invoice22 === void 0 ? void 0 : (_props$invoice22$row = _props$invoice22.row2) === null || _props$invoice22$row === void 0 ? void 0 : _props$invoice22$row.col1) || "",
        col2: ((_props$invoice23 = props.invoice) === null || _props$invoice23 === void 0 ? void 0 : (_props$invoice23$row = _props$invoice23.row2) === null || _props$invoice23$row === void 0 ? void 0 : _props$invoice23$row.col2) || "",
        col3: ((_props$invoice24 = props.invoice) === null || _props$invoice24 === void 0 ? void 0 : (_props$invoice24$row = _props$invoice24.row2) === null || _props$invoice24$row === void 0 ? void 0 : _props$invoice24$row.col3) || "",
        style: {
          fontSize: ((_props$invoice25 = props.invoice) === null || _props$invoice25 === void 0 ? void 0 : (_props$invoice25$row = _props$invoice25.row2) === null || _props$invoice25$row === void 0 ? void 0 : (_props$invoice25$row$ = _props$invoice25$row.style) === null || _props$invoice25$row$ === void 0 ? void 0 : _props$invoice25$row$.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$invoice26 = props.invoice) === null || _props$invoice26 === void 0 ? void 0 : (_props$invoice26$tota = _props$invoice26.total) === null || _props$invoice26$tota === void 0 ? void 0 : _props$invoice26$tota.col1) || "",
        col2: ((_props$invoice27 = props.invoice) === null || _props$invoice27 === void 0 ? void 0 : (_props$invoice27$tota = _props$invoice27.total) === null || _props$invoice27$tota === void 0 ? void 0 : _props$invoice27$tota.col2) || "",
        col3: ((_props$invoice28 = props.invoice) === null || _props$invoice28 === void 0 ? void 0 : (_props$invoice28$tota = _props$invoice28.total) === null || _props$invoice28$tota === void 0 ? void 0 : _props$invoice28$tota.col3) || "",
        style: {
          fontSize: ((_props$invoice29 = props.invoice) === null || _props$invoice29 === void 0 ? void 0 : (_props$invoice29$row = _props$invoice29.row2) === null || _props$invoice29$row === void 0 ? void 0 : (_props$invoice29$row$ = _props$invoice29$row.style) === null || _props$invoice29$row$ === void 0 ? void 0 : _props$invoice29$row$.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$invoice30 = props.invoice) === null || _props$invoice30 === void 0 ? void 0 : (_props$invoice30$amou = _props$invoice30.amountDue) === null || _props$invoice30$amou === void 0 ? void 0 : _props$invoice30$amou.col1) || "",
        col2: ((_props$invoice31 = props.invoice) === null || _props$invoice31 === void 0 ? void 0 : (_props$invoice31$amou = _props$invoice31.amountDue) === null || _props$invoice31$amou === void 0 ? void 0 : _props$invoice31$amou.col2) || "",
        col3: ((_props$invoice32 = props.invoice) === null || _props$invoice32 === void 0 ? void 0 : (_props$invoice32$amou = _props$invoice32.amountDue) === null || _props$invoice32$amou === void 0 ? void 0 : _props$invoice32$amou.col3) || "",
        style: {
          fontSize: ((_props$invoice33 = props.invoice) === null || _props$invoice33 === void 0 ? void 0 : (_props$invoice33$amou = _props$invoice33.amountDue) === null || _props$invoice33$amou === void 0 ? void 0 : (_props$invoice33$amou2 = _props$invoice33$amou.style) === null || _props$invoice33$amou2 === void 0 ? void 0 : _props$invoice33$amou2.fontSize) || 12
        }
      },
      creditNote: ((_props$invoice34 = props.invoice) === null || _props$invoice34 === void 0 ? void 0 : _props$invoice34.creditNote) || ""
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
  } // Note 


  if (param.invoice.note) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Note:');
    doc.setFont(undefined, 'normal');
    doc.setFontSize(pdfConfig.fieldTextSize);
    var noteData = splitTextAndGetHeight(param.invoice.note, doc.getPageWidth() - 40);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(22, currentHeight, noteData.text);
    currentHeight += pdfConfig.lineHeight + noteData.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiaW52b2ljZSIsImludlRvdGFsTGFiZWwiLCJpbnZEdWVEYXRlTGFiZWwiLCJudW0iLCJpbnZHZW5EYXRlTGFiZWwiLCJpbnZEYXRlIiwiaW52R2VuRGF0ZSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwiaW52VG90YWwiLCJpbnZDdXJyZW5jeSIsImludkRlc2NMYWJlbCIsImludkRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicm93MSIsImNvbDEiLCJjb2wyIiwiY29sMyIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJzaXplIiwibGluZXMiLCJkb2MiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJsZW5ndGgiLCJFcnJvciIsIm9wdGlvbnMiLCJvcmllbnRhdGlvbiIsImpzUERGIiwiZG9jV2lkdGgiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImltYWdlSGVhZGVyIiwiSW1hZ2UiLCJhZGRJbWFnZSIsImxpbmUiLCJ0ZFdpZHRoIiwiZ2V0UGFnZVdpZHRoIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiaSIsInNldEZvbnQiLCJ1bmRlZmluZWQiLCJyZWN0IiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwic2V0RHJhd0NvbG9yIiwiZm9yRWFjaCIsInJvdyIsImluZGV4Iiwic2V0TGluZVdpZHRoIiwidGFibGVCb2R5TGVuZ3RoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIml0ZW0iLCJ0b1N0cmluZyIsInB1c2giLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJpbnZEZXNjU2l6ZSIsInRvTG9jYWxlU3RyaW5nIiwic2V0UGFnZSIsIm5vdGVEYXRhIiwiYWRkSW52b2ljZURlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFB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dGVudCI6WyJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgaW52b2ljZT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyLFxuICogICAgICAgaW52RHVlRGF0ZUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBpbnZEYXRlPzogc3RyaW5nLFxuICogICAgICAgaW52R2VuRGF0ZUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBpbnZHZW5EYXRlPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgaW52VG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGludlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgaW52Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZEZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZEZXNjPzogc3RyaW5nLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgXCJzYXZlXCIsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGludm9pY2U6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5pbnZvaWNlPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgaW52VG90YWxMYWJlbDogcHJvcHMuaW52b2ljZT8uaW52VG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgaW52RHVlRGF0ZUxhYmVsOiBwcm9wcy5pbnZvaWNlPy5pbnZEdWVEYXRlTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuaW52b2ljZT8ubnVtIHx8IFwiXCIsXG4gICAgICBpbnZHZW5EYXRlTGFiZWw6IHByb3BzLmludm9pY2U/LmludkdlbkRhdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgaW52RGF0ZTogcHJvcHMuaW52b2ljZT8uaW52RGF0ZSB8fCBcIlwiLFxuICAgICAgaW52R2VuRGF0ZTogcHJvcHMuaW52b2ljZT8uaW52R2VuRGF0ZSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5pbnZvaWNlPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmludm9pY2U/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuaW52b2ljZT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmludm9pY2U/LnRhYmxlIHx8IFtdLFxuICAgICAgaW52VG90YWw6IHByb3BzLmludm9pY2U/LmludlRvdGFsIHx8IFwiXCIsXG4gICAgICBpbnZDdXJyZW5jeTogcHJvcHMuaW52b2ljZT8uaW52Q3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGludkRlc2NMYWJlbDogcHJvcHMuaW52b2ljZT8uaW52RGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICBpbnZEZXNjOiBwcm9wcy5pbnZvaWNlPy5pbnZEZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmludm9pY2U/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuaW52b2ljZT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmludm9pY2U/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmludm9pY2U/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuaW52b2ljZT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuaW52b2ljZT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuaW52b2ljZT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuaW52b2ljZT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5pbnZvaWNlPy5jcmVkaXROb3RlIHx8IFwiXCIsXG5cblxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICB2YXIgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlICYmIHBhcmFtLmludm9pY2UudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmludm9pY2UudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICB2YXIgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuXG4gIHZhciBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgdmFyIGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgdmFyIGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgdmFyIGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICB2YXIgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCJcbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gMTU7XG4gIC8vdmFyIHN0YXJ0UG9pbnRSZWN0UGFuZWwxID0gY3VycmVudEhlaWdodCArIDY7XG5cbiAgdmFyIHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIHZhciBpbWFnZUhlYWRlciA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlSGVhZGVyLnNyYyA9IHBhcmFtLmxvZ28uc3JjO1xuICAgIC8vZG9jLnRleHQoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQsIGRvY1dpZHRoIC0gKGRvYy5nZXRUZXh0V2lkdGgoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQpICsgMTApLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBpbWFnZUhlYWRlcixcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBcInJpZ2h0XCIpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBcInJpZ2h0XCIpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIFwicmlnaHRcIik7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKVxuICB9O1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uaW52b2ljZS5sYWJlbCAmJiBwYXJhbS5pbnZvaWNlLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5pbnZvaWNlLmxhYmVsICsgcGFyYW0uaW52b2ljZS5udW0sXG4gICAgICBcInJpZ2h0XCJcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uaW52b2ljZS5sYWJlbCAmJiBwYXJhbS5pbnZvaWNlLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5jb250YWN0LmFkZHJlc3MgfHwgcGFyYW0uaW52b2ljZS5pbnZEYXRlKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzcyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkdlbkRhdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkR1ZURhdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUyIHx8IHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmFkZHJlc3NMaW5lMik7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5pbnZEYXRlLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuY291bnRyeSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5jb3VudHJ5KTtcbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5pbnZvaWNlLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmludm9pY2UuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmludm9pY2UuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5pbnZvaWNlLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgcGFyYW0uaW52b2ljZS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cbiAgLy8gICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTsgLy9uZXNlIGR1YW0gdGUgc2hmYXFpbSBsaW5lIG5lIGZ1bmQgdGUgdGFiZWxlc1xuXG4gIHZhciBpbnZEZXNjU2l6ZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICBwYXJhbS5pbnZvaWNlLmludkRlc2MsXG4gICAgZG9jV2lkdGggLyAyXG4gICkuaGVpZ2h0O1xuICAvL0VORCBUQUJMRSBQQVJUXG5cbiAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE3Mykge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cblxuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5pbnZvaWNlLmludlRvdGFsIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLmludlRvdGFsTGFiZWwgfHxcbiAgICAgIHBhcmFtLmludm9pY2UuaW52Q3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTsgXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludlRvdGFsTGFiZWwsIFwicmlnaHRcIik7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsICBwYXJhbS5pbnZvaWNlLmludkN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uaW52b2ljZS5pbnZUb3RhbC50b0xvY2FsZVN0cmluZygpLCBcInJpZ2h0XCIpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5yb3cxICYmXG4gICAgKHBhcmFtLmludm9pY2Uucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmludm9pY2Uucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLnJvdzIgJiZcbiAgICAocGFyYW0uaW52b2ljZS5yb3cyLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93Mi5jb2wyIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2Uucm93Mi5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2Uucm93Mi5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLnRvdGFsICYmXG4gICAgKHBhcmFtLmludm9pY2UudG90YWwuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wyIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wxLCBcInJpZ2h0XCIpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuY3JlZGl0Tm90ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuY3JlZGl0Tm90ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG5cblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMTczKSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gIH1cblxuXG4gIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMjcwKSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGludkRlc2NTaXplID4gMTgzKSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAyNzApIHtcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmludm9pY2Uubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZTonKTtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uaW52b2ljZS5ub3RlLCAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gNDApKVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgICBkb2MudGV4dCgyMiwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgdmFyIGFkZEludm9pY2VEZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGRvYy50ZXh0KHBhcmFtLmludm9pY2UuaW52RGVzY0xhYmVsLCAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUocGFyYW0uaW52b2ljZS5pbnZEZXNjLCBkb2NXaWR0aCAvIDIpO1xuICAgIC8vdGV4dCBpbiBsZWZ0IGhhbGZcbiAgICBpZiAocGFyYW0uaW52b2ljZT8uaW52RGVzYy5sZW5ndGggPiAwKVxuICAgICAgcGFyYW0uaW52b2ljZT8uaW52RGVzYz8uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZG9jLnRleHQoZWwsIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIH0pXG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oID4gNVxuICAgICAgICA/IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCArIDZcbiAgICAgICAgOiBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIHJldHVybiBjdXJyZW50SGVpZ2h0O1xuICB9O1xuICBhZGRJbnZvaWNlRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgXCJjZW50ZXJcIik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJzYXZlXCIpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJibG9iXCIpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChcImJsb2JcIik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiZGF0YXVyaXN0cmluZ1wiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChcImRhdGF1cmlzdHJpbmdcIiwge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYXJyYXlidWZmZXJcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KFwiYXJyYXlidWZmZXJcIiksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=