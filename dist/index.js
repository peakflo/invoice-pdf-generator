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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data20$row, _props$data21, _props$data21$row, _props$data22, _props$data22$row, _props$data23, _props$data23$row, _props$data23$row$sty, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data27$row$sty, _props$data28, _props$data28$total, _props$data29, _props$data29$total, _props$data30, _props$data30$total, _props$data31, _props$data31$row, _props$data31$row$sty, _props$data32, _props$data32$amountD, _props$data33, _props$data33$amountD, _props$data34, _props$data34$amountD, _props$data35, _props$data35$amountD, _props$data35$amountD2, _props$data36, _props$footer, _param$contact, _param$contact4, _param$contact7, _param$contact10, _param$data3, _param$data3$desc;

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
      billingAddress: {
        label: ((_props$contact3 = props.contact) === null || _props$contact3 === void 0 ? void 0 : (_props$contact3$billi = _props$contact3.billingAddress) === null || _props$contact3$billi === void 0 ? void 0 : _props$contact3$billi.label) || "",
        address: ((_props$contact4 = props.contact) === null || _props$contact4 === void 0 ? void 0 : (_props$contact4$billi = _props$contact4.billingAddress) === null || _props$contact4$billi === void 0 ? void 0 : _props$contact4$billi.address) || "",
        addressLine2: ((_props$contact5 = props.contact) === null || _props$contact5 === void 0 ? void 0 : (_props$contact5$billi = _props$contact5.billingAddress) === null || _props$contact5$billi === void 0 ? void 0 : _props$contact5$billi.addressLine2) || "",
        addressLine3: ((_props$contact6 = props.contact) === null || _props$contact6 === void 0 ? void 0 : (_props$contact6$billi = _props$contact6.billingAddress) === null || _props$contact6$billi === void 0 ? void 0 : _props$contact6$billi.addressLine3) || "",
        country: ((_props$contact7 = props.contact) === null || _props$contact7 === void 0 ? void 0 : (_props$contact7$billi = _props$contact7.billingAddress) === null || _props$contact7$billi === void 0 ? void 0 : _props$contact7$billi.country) || ""
      },
      shippingAddress: {
        label: ((_props$contact8 = props.contact) === null || _props$contact8 === void 0 ? void 0 : (_props$contact8$shipp = _props$contact8.shippingAddress) === null || _props$contact8$shipp === void 0 ? void 0 : _props$contact8$shipp.label) || "",
        address: ((_props$contact9 = props.contact) === null || _props$contact9 === void 0 ? void 0 : (_props$contact9$shipp = _props$contact9.shippingAddress) === null || _props$contact9$shipp === void 0 ? void 0 : _props$contact9$shipp.address) || "",
        addressLine2: ((_props$contact10 = props.contact) === null || _props$contact10 === void 0 ? void 0 : (_props$contact10$ship = _props$contact10.shippingAddress) === null || _props$contact10$ship === void 0 ? void 0 : _props$contact10$ship.addressLine2) || "",
        addressLine3: ((_props$contact11 = props.contact) === null || _props$contact11 === void 0 ? void 0 : (_props$contact11$ship = _props$contact11.shippingAddress) === null || _props$contact11$ship === void 0 ? void 0 : _props$contact11$ship.addressLine3) || "",
        country: ((_props$contact12 = props.contact) === null || _props$contact12 === void 0 ? void 0 : (_props$contact12$ship = _props$contact12.shippingAddress) === null || _props$contact12$ship === void 0 ? void 0 : _props$contact12$ship.country) || ""
      }
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
      requestedBy: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.requestedBy) || "",
      authorisedBy: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.authorisedBy) || "",
      desc: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.desc) || "",
      creditNoteLabel: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.creditNoteLabel) || "",
      note: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.note) || "",
      row1: {
        col1: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : (_props$data20$row = _props$data20.row1) === null || _props$data20$row === void 0 ? void 0 : _props$data20$row.col1) || "",
        col2: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : (_props$data21$row = _props$data21.row1) === null || _props$data21$row === void 0 ? void 0 : _props$data21$row.col2) || "",
        col3: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : (_props$data22$row = _props$data22.row1) === null || _props$data22$row === void 0 ? void 0 : _props$data22$row.col3) || "",
        style: {
          fontSize: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : (_props$data23$row = _props$data23.row1) === null || _props$data23$row === void 0 ? void 0 : (_props$data23$row$sty = _props$data23$row.style) === null || _props$data23$row$sty === void 0 ? void 0 : _props$data23$row$sty.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : (_props$data24$row = _props$data24.row2) === null || _props$data24$row === void 0 ? void 0 : _props$data24$row.col1) || "",
        col2: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : (_props$data25$row = _props$data25.row2) === null || _props$data25$row === void 0 ? void 0 : _props$data25$row.col2) || "",
        col3: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$row = _props$data26.row2) === null || _props$data26$row === void 0 ? void 0 : _props$data26$row.col3) || "",
        style: {
          fontSize: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$row = _props$data27.row2) === null || _props$data27$row === void 0 ? void 0 : (_props$data27$row$sty = _props$data27$row.style) === null || _props$data27$row$sty === void 0 ? void 0 : _props$data27$row$sty.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$total = _props$data28.total) === null || _props$data28$total === void 0 ? void 0 : _props$data28$total.col1) || "",
        col2: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$total = _props$data29.total) === null || _props$data29$total === void 0 ? void 0 : _props$data29$total.col2) || "",
        col3: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$total = _props$data30.total) === null || _props$data30$total === void 0 ? void 0 : _props$data30$total.col3) || "",
        style: {
          fontSize: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row2) === null || _props$data31$row === void 0 ? void 0 : (_props$data31$row$sty = _props$data31$row.style) === null || _props$data31$row$sty === void 0 ? void 0 : _props$data31$row$sty.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$amountD = _props$data32.amountDue) === null || _props$data32$amountD === void 0 ? void 0 : _props$data32$amountD.col1) || "",
        col2: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$amountD = _props$data33.amountDue) === null || _props$data33$amountD === void 0 ? void 0 : _props$data33$amountD.col2) || "",
        col3: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$amountD = _props$data34.amountDue) === null || _props$data34$amountD === void 0 ? void 0 : _props$data34$amountD.col3) || "",
        style: {
          fontSize: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$amountD = _props$data35.amountDue) === null || _props$data35$amountD === void 0 ? void 0 : (_props$data35$amountD2 = _props$data35$amountD.style) === null || _props$data35$amountD2 === void 0 ? void 0 : _props$data35$amountD2.fontSize) || 12
        }
      },
      creditNote: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : _props$data36.creditNote) || ""
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

  if ((_param$contact = param.contact) !== null && _param$contact !== void 0 && _param$contact.billingAddress.address || param.data.date1) {
    var _param$contact2, _param$contact3;

    var billingAddressLabel = (_param$contact2 = param.contact) === null || _param$contact2 === void 0 ? void 0 : _param$contact2.billingAddress.label;
    var shippingAddressLabel = (_param$contact3 = param.contact) === null || _param$contact3 === void 0 ? void 0 : _param$contact3.shippingAddress.label;
    doc.text(10, currentHeight, billingAddressLabel);
    doc.text(doc.getPageWidth() / 3, currentHeight, shippingAddressLabel);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(docWidth - 10, currentHeight, param.data.date2Label, "right");
    doc.text(docWidth - 40, currentHeight, param.data.date1Label, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  if ((_param$contact4 = param.contact) !== null && _param$contact4 !== void 0 && _param$contact4.billingAddress.address || param.data.date1) {
    var _param$contact5, _param$contact6;

    var billingAddress = splitTextAndGetHeight((_param$contact5 = param.contact) === null || _param$contact5 === void 0 ? void 0 : _param$contact5.billingAddress.address, doc.getPageWidth() / 3 - 25);
    var shippingAddress = splitTextAndGetHeight((_param$contact6 = param.contact) === null || _param$contact6 === void 0 ? void 0 : _param$contact6.shippingAddress.address, doc.getPageWidth() / 3 - 25);
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(doc.getPageWidth() / 3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(docWidth - 40, currentHeight, param.data.date1, "right");
    doc.text(docWidth - 10, currentHeight, param.data.date2, "right");
    currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
  }

  if ((_param$contact7 = param.contact) !== null && _param$contact7 !== void 0 && _param$contact7.billingAddress.addressLine1 || param.data.date2) {
    var _param$contact8, _param$contact9;

    var _billingAddress = splitTextAndGetHeight((_param$contact8 = param.contact) === null || _param$contact8 === void 0 ? void 0 : _param$contact8.billingAddress.addressLine2, doc.getPageWidth() / 3 - 25);

    var _shippingAddress = splitTextAndGetHeight((_param$contact9 = param.contact) === null || _param$contact9 === void 0 ? void 0 : _param$contact9.shippingAddress.addressLine2, doc.getPageWidth() / 3 - 25);

    doc.text(10, currentHeight, _billingAddress.text);
    doc.text(doc.getPageWidth() / 3, currentHeight, _shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    currentHeight += _billingAddress.height > _shippingAddress.height ? _billingAddress.height : _shippingAddress.height;
  }

  if ((_param$contact10 = param.contact) !== null && _param$contact10 !== void 0 && _param$contact10.billingAddress.addressLine3) {
    var _param$contact11, _param$contact12;

    var _billingAddress2 = splitTextAndGetHeight((_param$contact11 = param.contact) === null || _param$contact11 === void 0 ? void 0 : _param$contact11.billingAddress.addressLine3, doc.getPageWidth() / 3 - 25);

    var _shippingAddress2 = splitTextAndGetHeight((_param$contact12 = param.contact) === null || _param$contact12 === void 0 ? void 0 : _param$contact12.shippingAddress.addressLine3, doc.getPageWidth() / 3 - 25);

    doc.text(10, currentHeight, _billingAddress2.text);
    doc.text(doc.getPageWidth() / 3, currentHeight, _shippingAddress2.text);
    currentHeight += _billingAddress2.height > _shippingAddress2.height ? _billingAddress2.height : _shippingAddress2.height;
  }

  if (param.contact.billingAddress.country || param.contact.shippingAddress.country) {
    doc.text(10, currentHeight, param.contact.billingAddress.country);
    doc.text(doc.getPageWidth() / 3, currentHeight, param.contact.shippingAddress.country);
  } else currentHeight -= pdfConfig.subLineHeight; //end contact part
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
  } // requested by


  if (param.data.requestedBy) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Requested By');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, param.data.requestedBy);
    currentHeight += pdfConfig.lineHeight;
  } // authorised by


  if (param.data.authorisedBy) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Authorised By');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, param.data.authorisedBy);
    currentHeight += pdfConfig.lineHeight;
  } // Note 


  if (param.data.note) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Note');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(pdfConfig.fieldTextSize);
    var noteData = splitTextAndGetHeight(param.data.note, doc.getPageWidth() - 40);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, noteData.text);
    currentHeight += pdfConfig.lineHeight + noteData.height;
  }

  var addDesc = function addDesc() {
    var _param$data;

    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlack);
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, param.data.descLabel);
    doc.setFont(undefined, 'normal');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFontSize(pdfConfig.fieldTextSize);

    if (((_param$data = param.data) === null || _param$data === void 0 ? void 0 : _param$data.desc.length) > 0) {
      var _param$data2, _param$data2$desc;

      currentHeight += 1;
      (_param$data2 = param.data) === null || _param$data2 === void 0 ? void 0 : (_param$data2$desc = _param$data2.desc) === null || _param$data2$desc === void 0 ? void 0 : _param$data2$desc.forEach(function (el) {
        var text = splitTextAndGetHeight(el, doc.getPageWidth() - 40);
        doc.text(10, currentHeight, text.text);
        currentHeight += pdfConfig.subLineHeight + text.height;
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwic3ViVG90YWwiLCJjdXJyZW5jeSIsImRlc2NMYWJlbCIsInJlcXVlc3RlZEJ5IiwiYXV0aG9yaXNlZEJ5IiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiaW1hZ2VIZWFkZXIiLCJJbWFnZSIsImFkZEltYWdlIiwibGluZSIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsImdldFBhZ2VXaWR0aCIsImFkZHJlc3NMaW5lMSIsInRkV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwic2V0UGFnZSIsIm5vdGVEYXRhIiwiYWRkRGVzYyIsImVsIiwicmV0dXJuT2JqIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJibG9iT3V0cHV0Iiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxJQUFJLEVBQUUsTUFEVztBQUNIO0FB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U0FESTtBQUVQTSxNQUFBQSxJQUFJLEVBQUVGO0FBRkMsTUFBVDtBQUlELEdBTkksTUFNRSxJQUFJOUgsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLGVBQXpCLEVBQTBDO0FBQy9DeUgsSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQTyxNQUFBQSxhQUFhLEVBQUV0RSxHQUFHLENBQUNvRSxNQUFKLENBQVcsZUFBWCxFQUE0QjtBQUN6Q0csUUFBQUEsUUFBUSxFQUFFbEksS0FBSyxDQUFDRztBQUR5QixPQUE1QjtBQUZSLE1BQVQ7QUFNRCxHQVBNLE1BT0EsSUFBSUgsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLGFBQXpCLEVBQXdDO0FBQzdDeUgsSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQUyxNQUFBQSxXQUFXLEVBQUV4RSxHQUFHLENBQUNvRSxNQUFKLENBQVcsYUFBWDtBQUZOLE1BQVQ7QUFJRCxHQUxNLE1BTUxwRSxHQUFHLENBQUNvRSxNQUFKLENBQVcvSCxLQUFLLENBQUNDLFVBQWpCLEVBQTZCO0FBQzNCaUksSUFBQUEsUUFBUSxFQUFFbEksS0FBSyxDQUFDRztBQURXLEdBQTdCO0FBSUYsU0FBT3VILFNBQVA7QUFDRDs7ZUFFYzVILG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgXCJzYXZlXCIsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiAgcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcblxuXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCBmYWxzZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICB9O1xuXG4gIHZhciBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG5cbiAgdmFyIGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICB2YXIgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICB2YXIgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICB2YXIgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIHZhciBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIlxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgdmFyIGN1cnJlbnRIZWlnaHQgPSAxNTtcbiAgLy92YXIgc3RhcnRQb2ludFJlY3RQYW5lbDEgPSBjdXJyZW50SGVpZ2h0ICsgNjtcblxuICB2YXIgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgdmFyIGltYWdlSGVhZGVyID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VIZWFkZXIuc3JjID0gcGFyYW0ubG9nby5zcmM7XG4gICAgLy9kb2MudGV4dChodG1sRG9jLnNlc3Npb25EYXRlVGV4dCwgZG9jV2lkdGggLSAoZG9jLmdldFRleHRXaWR0aChodG1sRG9jLnNlc3Npb25EYXRlVGV4dCkgKyAxMCksIGN1cnJlbnRIZWlnaHQpO1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIGltYWdlSGVhZGVyLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIFwicmlnaHRcIik7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgXCJyaWdodFwiKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIFwicmlnaHRcIik7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgXCJyaWdodFwiKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbFxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHRcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQoZG9jLmdldFBhZ2VXaWR0aCgpLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8IHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSk7XG4gIH1cbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cbiAgLy8gICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTsgLy9uZXNlIGR1YW0gdGUgc2hmYXFpbSBsaW5lIG5lIGZ1bmQgdGUgdGFiZWxlc1xuXG4gIHZhciBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgIHBhcmFtLmRhdGEuZGVzYyxcbiAgICBkb2NXaWR0aCAvIDJcbiAgKS5oZWlnaHQ7XG4gIC8vRU5EIFRBQkxFIFBBUlRcblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cblxuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTsgXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsIFwicmlnaHRcIik7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLCBcInJpZ2h0XCIpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBcInJpZ2h0XCIpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG5cblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYyA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBkZXNjID4gMTgzKSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYyA+IDI3MCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ0F1dGhvcmlzZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHRcbiAgfVxuXG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDQwKSlcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIHZhciBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gNDApKVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgdGV4dC50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRleHQuaGVpZ2h0O1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwic2F2ZVwiKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYmxvYlwiKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoXCJibG9iXCIpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImRhdGF1cmlzdHJpbmdcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoXCJkYXRhdXJpc3RyaW5nXCIsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImFycmF5YnVmZmVyXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChcImFycmF5YnVmZmVyXCIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl19