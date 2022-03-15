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
 *       invDate?: string,
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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact4, _props$contact5, _props$contact6, _props$invoice, _props$invoice2, _props$invoice3, _props$invoice4, _props$invoice5, _props$invoice6, _props$invoice7, _props$invoice8, _props$invoice9, _props$invoice10, _props$invoice11, _props$invoice12, _props$invoice13, _props$invoice14, _props$invoice14$row, _props$invoice15, _props$invoice15$row, _props$invoice16, _props$invoice16$row, _props$invoice17, _props$invoice17$row, _props$invoice17$row$, _props$invoice18, _props$invoice18$row, _props$invoice19, _props$invoice19$row, _props$invoice20, _props$invoice20$row, _props$invoice21, _props$invoice21$row, _props$invoice21$row$, _props$invoice22, _props$invoice22$tota, _props$invoice23, _props$invoice23$tota, _props$invoice24, _props$invoice24$tota, _props$invoice25, _props$invoice25$row, _props$invoice25$row$, _props$invoice26, _props$invoice26$amou, _props$invoice27, _props$invoice27$amou, _props$invoice28, _props$invoice28$amou, _props$invoice29, _props$invoice29$amou, _props$invoice29$amou2, _props$invoice30, _props$footer;

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
      num: ((_props$invoice3 = props.invoice) === null || _props$invoice3 === void 0 ? void 0 : _props$invoice3.num) || "",
      invDate: ((_props$invoice4 = props.invoice) === null || _props$invoice4 === void 0 ? void 0 : _props$invoice4.invDate) || "",
      invGenDate: ((_props$invoice5 = props.invoice) === null || _props$invoice5 === void 0 ? void 0 : _props$invoice5.invGenDate) || "",
      headerBorder: ((_props$invoice6 = props.invoice) === null || _props$invoice6 === void 0 ? void 0 : _props$invoice6.headerBorder) || false,
      tableBodyBorder: ((_props$invoice7 = props.invoice) === null || _props$invoice7 === void 0 ? void 0 : _props$invoice7.tableBodyBorder) || false,
      header: ((_props$invoice8 = props.invoice) === null || _props$invoice8 === void 0 ? void 0 : _props$invoice8.header) || [],
      table: ((_props$invoice9 = props.invoice) === null || _props$invoice9 === void 0 ? void 0 : _props$invoice9.table) || [],
      invTotal: ((_props$invoice10 = props.invoice) === null || _props$invoice10 === void 0 ? void 0 : _props$invoice10.invTotal) || "",
      invCurrency: ((_props$invoice11 = props.invoice) === null || _props$invoice11 === void 0 ? void 0 : _props$invoice11.invCurrency) || "",
      invDescLabel: ((_props$invoice12 = props.invoice) === null || _props$invoice12 === void 0 ? void 0 : _props$invoice12.invDescLabel) || "",
      invDesc: ((_props$invoice13 = props.invoice) === null || _props$invoice13 === void 0 ? void 0 : _props$invoice13.invDesc) || "",
      row1: {
        col1: ((_props$invoice14 = props.invoice) === null || _props$invoice14 === void 0 ? void 0 : (_props$invoice14$row = _props$invoice14.row1) === null || _props$invoice14$row === void 0 ? void 0 : _props$invoice14$row.col1) || "",
        col2: ((_props$invoice15 = props.invoice) === null || _props$invoice15 === void 0 ? void 0 : (_props$invoice15$row = _props$invoice15.row1) === null || _props$invoice15$row === void 0 ? void 0 : _props$invoice15$row.col2) || "",
        col3: ((_props$invoice16 = props.invoice) === null || _props$invoice16 === void 0 ? void 0 : (_props$invoice16$row = _props$invoice16.row1) === null || _props$invoice16$row === void 0 ? void 0 : _props$invoice16$row.col3) || "",
        style: {
          fontSize: ((_props$invoice17 = props.invoice) === null || _props$invoice17 === void 0 ? void 0 : (_props$invoice17$row = _props$invoice17.row1) === null || _props$invoice17$row === void 0 ? void 0 : (_props$invoice17$row$ = _props$invoice17$row.style) === null || _props$invoice17$row$ === void 0 ? void 0 : _props$invoice17$row$.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$invoice18 = props.invoice) === null || _props$invoice18 === void 0 ? void 0 : (_props$invoice18$row = _props$invoice18.row2) === null || _props$invoice18$row === void 0 ? void 0 : _props$invoice18$row.col1) || "",
        col2: ((_props$invoice19 = props.invoice) === null || _props$invoice19 === void 0 ? void 0 : (_props$invoice19$row = _props$invoice19.row2) === null || _props$invoice19$row === void 0 ? void 0 : _props$invoice19$row.col2) || "",
        col3: ((_props$invoice20 = props.invoice) === null || _props$invoice20 === void 0 ? void 0 : (_props$invoice20$row = _props$invoice20.row2) === null || _props$invoice20$row === void 0 ? void 0 : _props$invoice20$row.col3) || "",
        style: {
          fontSize: ((_props$invoice21 = props.invoice) === null || _props$invoice21 === void 0 ? void 0 : (_props$invoice21$row = _props$invoice21.row2) === null || _props$invoice21$row === void 0 ? void 0 : (_props$invoice21$row$ = _props$invoice21$row.style) === null || _props$invoice21$row$ === void 0 ? void 0 : _props$invoice21$row$.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$invoice22 = props.invoice) === null || _props$invoice22 === void 0 ? void 0 : (_props$invoice22$tota = _props$invoice22.total) === null || _props$invoice22$tota === void 0 ? void 0 : _props$invoice22$tota.col1) || "",
        col2: ((_props$invoice23 = props.invoice) === null || _props$invoice23 === void 0 ? void 0 : (_props$invoice23$tota = _props$invoice23.total) === null || _props$invoice23$tota === void 0 ? void 0 : _props$invoice23$tota.col2) || "",
        col3: ((_props$invoice24 = props.invoice) === null || _props$invoice24 === void 0 ? void 0 : (_props$invoice24$tota = _props$invoice24.total) === null || _props$invoice24$tota === void 0 ? void 0 : _props$invoice24$tota.col3) || "",
        style: {
          fontSize: ((_props$invoice25 = props.invoice) === null || _props$invoice25 === void 0 ? void 0 : (_props$invoice25$row = _props$invoice25.row2) === null || _props$invoice25$row === void 0 ? void 0 : (_props$invoice25$row$ = _props$invoice25$row.style) === null || _props$invoice25$row$ === void 0 ? void 0 : _props$invoice25$row$.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$invoice26 = props.invoice) === null || _props$invoice26 === void 0 ? void 0 : (_props$invoice26$amou = _props$invoice26.amountDue) === null || _props$invoice26$amou === void 0 ? void 0 : _props$invoice26$amou.col1) || "",
        col2: ((_props$invoice27 = props.invoice) === null || _props$invoice27 === void 0 ? void 0 : (_props$invoice27$amou = _props$invoice27.amountDue) === null || _props$invoice27$amou === void 0 ? void 0 : _props$invoice27$amou.col2) || "",
        col3: ((_props$invoice28 = props.invoice) === null || _props$invoice28 === void 0 ? void 0 : (_props$invoice28$amou = _props$invoice28.amountDue) === null || _props$invoice28$amou === void 0 ? void 0 : _props$invoice28$amou.col3) || "",
        style: {
          fontSize: ((_props$invoice29 = props.invoice) === null || _props$invoice29 === void 0 ? void 0 : (_props$invoice29$amou = _props$invoice29.amountDue) === null || _props$invoice29$amou === void 0 ? void 0 : (_props$invoice29$amou2 = _props$invoice29$amou.style) === null || _props$invoice29$amou2 === void 0 ? void 0 : _props$invoice29$amou2.fontSize) || 12
        }
      },
      creditNote: ((_props$invoice30 = props.invoice) === null || _props$invoice30 === void 0 ? void 0 : _props$invoice30.creditNote) || ""
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
  var colorGray = "#4d4e53"; //starting at 15mm

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
  doc.text(docWidth - 10, currentHeight, param.business.addressLine3, "right");
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.country, "right");
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.email_1, "right"); //line breaker after logo & business info

  if (param.invoice.header.length) {
    currentHeight += pdfConfig.subLineHeight;
    doc.line(10, currentHeight, docWidth - 10, currentHeight);
  } //Contact part


  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);
  currentHeight += pdfConfig.lineHeight;

  if (param.contact.label) {
    doc.text(10, currentHeight, param.contact.label);
    currentHeight += pdfConfig.lineHeight;
  }

  doc.setTextColor(colorBlack);
  doc.setFontSize(pdfConfig.headerTextSize - 5);
  if (param.contact.name) doc.text(10, currentHeight, param.contact.name);

  if (param.invoice.label && param.invoice.num) {
    doc.text(docWidth - 10, currentHeight, param.invoice.label + param.invoice.num, "right");
  }

  if (param.contact.name || param.invoice.label && param.invoice.num) currentHeight += pdfConfig.subLineHeight;
  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize - 2);

  if (param.contact.address || param.invoice.invDate) {
    doc.text(10, currentHeight, param.contact.address);
    doc.text(docWidth - 10, currentHeight, param.invoice.invDate, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  if (param.contact.addressLine2 || param.invoice.invGenDate) {
    doc.text(10, currentHeight, param.contact.addressLine2);
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
    currentHeight += pdfConfig.subLineHeight;
    doc.setTextColor(colorBlack);
    doc.setFontSize(pdfConfig.fieldTextSize); //border color

    doc.setDrawColor(colorGray);
    currentHeight += 2;
    param.invoice.header.forEach(function (row, index) {
      if (index == 0) doc.text(row, 11, currentHeight);else doc.text(row, index * tdWidth + 11, currentHeight);
    });
    currentHeight += pdfConfig.subLineHeight - 1;
    doc.setTextColor(colorGray);
  };

  addTableHeader(); //table body

  var tableBodyLength = param.invoice.table.length;
  param.invoice.table.forEach(function (row, index) {
    doc.line(10, currentHeight, docWidth - 10, currentHeight); //get nax height for the current row

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
    });
    currentHeight += maxHeight - 4; //td border height

    currentHeight += 5; //pre-increase currentHeight to check the height based on next row

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
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
  } //     doc.text("Faleminderit!", 10, currentHeight);


  doc.text(docWidth / 1.5, currentHeight, param.invoice.invTotalLabel, "right");
  doc.text(docWidth - 25, currentHeight, param.invoice.invTotal, "right");
  doc.text(docWidth - 10, currentHeight, param.invoice.invCurrency, "right"); //row1

  if (param.invoice.row1 && (param.invoice.row1.col1 || param.invoice.row1.col2 || param.invoice.row1.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.row1.style.fontSize);
    doc.text(docWidth / 1.5, currentHeight, param.invoice.row1.col1, "right");
    doc.text(docWidth - 25, currentHeight, param.invoice.row1.col2, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.row1.col3, "right");
  } //end row1
  //row2


  if (param.invoice.row2 && (param.invoice.row2.col1 || param.invoice.row2.col2 || param.invoice.row2.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.invoice.row2.style.fontSize);
    doc.text(docWidth / 1.5, currentHeight, param.invoice.row2.col1, "right");
    doc.text(docWidth - 25, currentHeight, param.invoice.row2.col2, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.row2.col3, "right");
  } //end row2
  // Main total


  if (param.invoice.total && (param.invoice.total.col1 || param.invoice.total.col2 || param.invoice.total.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(docWidth / 1.5, currentHeight, param.invoice.total.col1, "right");
    doc.text(docWidth - 25, currentHeight, param.invoice.total.col2, "right");
    doc.text(docWidth - 10, currentHeight, param.invoice.total.col3, "right");
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
    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlack);
    doc.text(param.invoice.invDescLabel, 10, currentHeight);
    currentHeight += pdfConfig.subLineHeight;
    doc.setTextColor(colorGray);
    doc.setFontSize(pdfConfig.fieldTextSize - 1);
    var lines = doc.splitTextToSize(param.invoice.invDesc, docWidth / 2); //text in left half

    doc.text(lines, 10, currentHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiaW52b2ljZSIsImludlRvdGFsTGFiZWwiLCJudW0iLCJpbnZEYXRlIiwiaW52R2VuRGF0ZSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwiaW52VG90YWwiLCJpbnZDdXJyZW5jeSIsImludkRlc2NMYWJlbCIsImludkRlc2MiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiaW1hZ2VIZWFkZXIiLCJJbWFnZSIsImFkZEltYWdlIiwibGluZSIsInRkV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwicmVjdCIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInNldERyYXdDb2xvciIsImZvckVhY2giLCJyb3ciLCJpbmRleCIsInRhYmxlQm9keUxlbmd0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJpdGVtIiwidG9TdHJpbmciLCJwdXNoIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwiaW52RGVzY1NpemUiLCJzZXRGb250IiwidW5kZWZpbmVkIiwic2V0UGFnZSIsImFkZEludm9pY2VEZXNjIiwicmV0dXJuT2JqIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJibG9iT3V0cHV0Iiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxJQUFJLEVBQUUsTUFEVztBQUNIO0FBQ2RDLEVBQUFBLGFBQWEsRUFBRSxlQUZFO0FBRWU7QUFDaENDLEVBQUFBLE9BQU8sRUFBRSxTQUhRO0FBR0c7QUFDcEJDLEVBQUFBLGdCQUFnQixFQUFFLGtCQUpEO0FBSXFCO0FBQ3RDQyxFQUFBQSxJQUFJLEVBQUUsTUFMVztBQUtIO0FBQ2RDLEVBQUFBLFdBQVcsRUFBRSxhQU5JLENBTVc7O0FBTlgsQ0FBbkI7OztBQVdBO0FBQ0E7QUFDQTtB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QUFBQSxjQUFjLEVBQUUxRDtBQUZULE1BQVQ7QUFJRDs7QUFFRCxNQUFJbkQsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLE1BQXpCLEVBQWlDa0QsR0FBRyxDQUFDMkQsSUFBSixDQUFTOUcsS0FBSyxDQUFDRyxRQUFmLEVBQWpDLEtBQ0ssSUFBSUgsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLE1BQXpCLEVBQWlDO0FBQ3BDLFFBQU04RyxVQUFVLEdBQUc1RCxHQUFHLENBQUM2RCxNQUFKLENBQVcsTUFBWCxDQUFuQjtBQUNBTCxJQUFBQSxTQUFTLG1DQUNKQSxTQURJO0FBRVBNLE1BQUFBLElBQUksRUFBRUY7QUFGQyxNQUFUO0FBSUQsR0FOSSxNQU1FLElBQUkvRyxLQUFLLENBQUNDLFVBQU4sS0FBcUIsZUFBekIsRUFBMEM7QUFDL0MwRyxJQUFBQSxTQUFTLG1DQUNKQSxTQURJO0FBRVBPLE1BQUFBLGFBQWEsRUFBRS9ELEdBQUcsQ0FBQzZELE1BQUosQ0FBVyxlQUFYLEVBQTRCO0FBQ3pDRyxRQUFBQSxRQUFRLEVBQUVuSCxLQUFLLENBQUNHO0FBRHlCLE9BQTVCO0FBRlIsTUFBVDtBQU1ELEdBUE0sTUFPQSxJQUFJSCxLQUFLLENBQUNDLFVBQU4sS0FBcUIsYUFBekIsRUFBd0M7QUFDN0MwRyxJQUFBQSxTQUFTLG1DQUNKQSxTQURJO0FBRVBTLE1BQUFBLFdBQVcsRUFBRWpFLEdBQUcsQ0FBQzZELE1BQUosQ0FBVyxhQUFYO0FBRk4sTUFBVDtBQUlELEdBTE0sTUFNTDdELEdBQUcsQ0FBQzZELE1BQUosQ0FBV2hILEtBQUssQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0JrSCxJQUFBQSxRQUFRLEVBQUVuSCxLQUFLLENBQUNHO0FBRFcsR0FBN0I7QUFJRixTQUFPd0csU0FBUDtBQUNEOztlQUVjN0csb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgaW52b2ljZT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyLFxuICogICAgICAgaW52RGF0ZT86IHN0cmluZyxcbiAqICAgICAgIGludkdlbkRhdGU/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBpbnZUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgaW52VG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBpbnZDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGludkRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGludkRlc2M/OiBzdHJpbmcsXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5jb3VudHJ5IHx8IFwiXCIsXG4gICAgfSxcbiAgICBpbnZvaWNlOiB7XG4gICAgICBsYWJlbDogcHJvcHMuaW52b2ljZT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIGludlRvdGFsTGFiZWw6IHByb3BzLmludm9pY2U/LmludlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuaW52b2ljZT8ubnVtIHx8IFwiXCIsXG4gICAgICBpbnZEYXRlOiBwcm9wcy5pbnZvaWNlPy5pbnZEYXRlIHx8IFwiXCIsXG4gICAgICBpbnZHZW5EYXRlOiBwcm9wcy5pbnZvaWNlPy5pbnZHZW5EYXRlIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmludm9pY2U/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuaW52b2ljZT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5pbnZvaWNlPy5oZWFkZXIgfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuaW52b2ljZT8udGFibGUgfHwgW10sXG4gICAgICBpbnZUb3RhbDogcHJvcHMuaW52b2ljZT8uaW52VG90YWwgfHwgXCJcIixcbiAgICAgIGludkN1cnJlbmN5OiBwcm9wcy5pbnZvaWNlPy5pbnZDdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgaW52RGVzY0xhYmVsOiBwcm9wcy5pbnZvaWNlPy5pbnZEZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIGludkRlc2M6IHByb3BzLmludm9pY2U/LmludkRlc2MgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuaW52b2ljZT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5pbnZvaWNlPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmludm9pY2U/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuaW52b2ljZT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuaW52b2ljZT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5pbnZvaWNlPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmludm9pY2U/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuaW52b2ljZT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmludm9pY2U/LnRvdGFsPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmludm9pY2U/LnRvdGFsPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmludm9pY2U/LnRvdGFsPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmludm9pY2U/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuaW52b2ljZT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmludm9pY2U/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5pbnZvaWNlPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuaW52b2ljZT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuaW52b2ljZT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuXG5cbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IGZhbHNlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgdmFyIGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uaW52b2ljZS50YWJsZSAmJiBwYXJhbS5pbnZvaWNlLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5pbnZvaWNlLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gIH07XG5cbiAgdmFyIGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcblxuICB2YXIgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIHZhciBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIHZhciBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIHZhciBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gMTU7XG4gIC8vdmFyIHN0YXJ0UG9pbnRSZWN0UGFuZWwxID0gY3VycmVudEhlaWdodCArIDY7XG5cbiAgdmFyIHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIHZhciBpbWFnZUhlYWRlciA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlSGVhZGVyLnNyYyA9IHBhcmFtLmxvZ28uc3JjO1xuICAgIC8vZG9jLnRleHQoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQsIGRvY1dpZHRoIC0gKGRvYy5nZXRUZXh0V2lkdGgoaHRtbERvYy5zZXNzaW9uRGF0ZVRleHQpICsgMTApLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBpbWFnZUhlYWRlcixcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBcInJpZ2h0XCIpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBcInJpZ2h0XCIpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIFwicmlnaHRcIik7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgXCJyaWdodFwiKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIGlmIChwYXJhbS5jb250YWN0LmxhYmVsKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubGFiZWwpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpO1xuXG4gIGlmIChwYXJhbS5pbnZvaWNlLmxhYmVsICYmIHBhcmFtLmludm9pY2UubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmludm9pY2UubGFiZWwgKyBwYXJhbS5pbnZvaWNlLm51bSxcbiAgICAgIFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5pbnZvaWNlLmxhYmVsICYmIHBhcmFtLmludm9pY2UubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzcyB8fCBwYXJhbS5pbnZvaWNlLmludkRhdGUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludkRhdGUsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0LmFkZHJlc3NMaW5lMiB8fCBwYXJhbS5pbnZvaWNlLmludkdlbkRhdGUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5hZGRyZXNzTGluZTIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52R2VuRGF0ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYWRkcmVzc0xpbmUzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuY291bnRyeSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5jb3VudHJ5KTtcbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmludm9pY2UuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5pbnZvaWNlLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmludm9pY2UuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmludm9pY2UuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5pbnZvaWNlLnRhYmxlLmxlbmd0aDtcbiAgcGFyYW0uaW52b2ljZS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuXG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5pbnZvaWNlLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0IC0gNDtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICB9KTtcbiAgLy8gICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTsgLy9uZXNlIGR1YW0gdGUgc2hmYXFpbSBsaW5lIG5lIGZ1bmQgdGUgdGFiZWxlc1xuXG4gIHZhciBpbnZEZXNjU2l6ZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICBwYXJhbS5pbnZvaWNlLmludkRlc2MsXG4gICAgZG9jV2lkdGggLyAyXG4gICkuaGVpZ2h0O1xuICAvL0VORCBUQUJMRSBQQVJUXG5cbiAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDE3Mykge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmludm9pY2UuaW52VG90YWwgfHxcbiAgICAgIHBhcmFtLmludm9pY2UuaW52VG90YWxMYWJlbCB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5pbnZDdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gICAgIGRvYy50ZXh0KFwiRmFsZW1pbmRlcml0IVwiLCAxMCwgY3VycmVudEhlaWdodCk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC8gMS41LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmludlRvdGFsTGFiZWwsIFwicmlnaHRcIik7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMjUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52VG90YWwsIFwicmlnaHRcIik7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuaW52Q3VycmVuY3ksIFwicmlnaHRcIik7XG5cbiAgLy9yb3cxXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLnJvdzEgJiZcbiAgICAocGFyYW0uaW52b2ljZS5yb3cxLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93MS5jb2wyIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMS41LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDI1LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMiwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzEuY29sMywgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgLy9yb3cyXG4gIGlmIChcbiAgICBwYXJhbS5pbnZvaWNlLnJvdzIgJiZcbiAgICAocGFyYW0uaW52b2ljZS5yb3cyLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2Uucm93Mi5jb2wyIHx8XG4gICAgICBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMS41LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDI1LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMiwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnJvdzIuY29sMywgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS50b3RhbCAmJlxuICAgIChwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDEgfHxcbiAgICAgIHBhcmFtLmludm9pY2UudG90YWwuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMS41LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDEsIFwicmlnaHRcIilcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDI1LCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLnRvdGFsLmNvbDIsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS50b3RhbC5jb2wzLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBpZiAoXG4gICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uaW52b2ljZS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuY3JlZGl0Tm90ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAxLjUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmludm9pY2UuYW1vdW50RHVlLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAyNSwgY3VycmVudEhlaWdodCwgcGFyYW0uaW52b2ljZS5hbW91bnREdWUuY29sMiwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5pbnZvaWNlLmFtb3VudER1ZS5jb2wzLCBcInJpZ2h0XCIpO1xuICB9XG5cblxuXG4gIGlmIChwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgXCJjZW50ZXJcIik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgaW52RGVzY1NpemUgPiAxODMpIHtcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBpbnZEZXNjU2l6ZSA+IDI3MCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGFkZEludm9pY2VEZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGRvYy50ZXh0KHBhcmFtLmludm9pY2UuaW52RGVzY0xhYmVsLCAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMSk7XG5cbiAgICB2YXIgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHBhcmFtLmludm9pY2UuaW52RGVzYywgZG9jV2lkdGggLyAyKTtcbiAgICAvL3RleHQgaW4gbGVmdCBoYWxmXG4gICAgZG9jLnRleHQobGluZXMsIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmggPiA1XG4gICAgICAgID8gZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oICsgNlxuICAgICAgICA6IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIGN1cnJlbnRIZWlnaHQ7XG4gIH07XG4gIGFkZEludm9pY2VEZXNjKCk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcInNhdmVcIikgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImJsb2JcIikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KFwiYmxvYlwiKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJkYXRhdXJpc3RyaW5nXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KFwiZGF0YXVyaXN0cmluZ1wiLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoXCJhcnJheWJ1ZmZlclwiKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdfQ==