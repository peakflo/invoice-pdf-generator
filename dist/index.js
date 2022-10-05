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
    doc.addImage(param.logo.src, 'PNG', 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
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
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
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
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
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
      if (index + 1 < tableBodyLength) addTableHeader();
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
    }
  } // requested by


  if (param.data.requestedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Requested By');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, 'normal');
    doc.text(10, currentHeight, param.data.requestedBy);
    currentHeight += pdfConfig.lineHeight;
  } // authorised by


  if (param.data.authorisedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Authorised By');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, 'normal');
    doc.text(10, currentHeight, param.data.authorisedBy);
    currentHeight += pdfConfig.lineHeight;
  } // Note 


  if (param.data.note) {
    currentHeight += pdfConfig.lineHeight;
    var noteData = splitTextAndGetHeight(param.data.note, doc.getPageWidth() - 40);

    if (param.orientationLandscape && currentHeight + noteData.height > 173) {
      doc.addPage();
      currentHeight = 10;
    }

    if (!param.orientationLandscape && currentHeight + noteData.height > 270) {
      doc.addPage();
      currentHeight = 10;
    }

    doc.setFont(undefined, 'bold');
    doc.text(10, currentHeight, 'Note');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, noteData.text);
    currentHeight += pdfConfig.lineHeight + noteData.height;
  }

  var addDesc = function addDesc() {
    var _param$data;

    doc.setFontSize(pdfConfig.labelTextSize - 2);
    doc.setTextColor(colorBlack);

    if (((_param$data = param.data) === null || _param$data === void 0 ? void 0 : _param$data.desc.length) > 0) {
      var _param$data2, _param$data2$desc;

      currentHeight += 1;
      (_param$data2 = param.data) === null || _param$data2 === void 0 ? void 0 : (_param$data2$desc = _param$data2.desc) === null || _param$data2$desc === void 0 ? void 0 : _param$data2$desc.forEach(function (el, index) {
        var desc = splitTextAndGetHeight(el, doc.getPageWidth() - 40);

        if (param.orientationLandscape && currentHeight + desc.height > 173) {
          doc.addPage();
          currentHeight = 10;
        }

        if (!param.orientationLandscape && currentHeight + desc.height > 270) {
          doc.addPage();
          currentHeight = 10;
        }

        if (index === 0) {
          doc.setFont(undefined, 'bold');
          doc.text(10, currentHeight, param.data.descLabel);
          doc.setFont(undefined, 'normal');
          currentHeight += pdfConfig.subLineHeight;
        }

        doc.text(10, currentHeight, desc.text);
        currentHeight += pdfConfig.subLineHeight + desc.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwic3ViVG90YWwiLCJjdXJyZW5jeSIsImRlc2NMYWJlbCIsInJlcXVlc3RlZEJ5IiwiYXV0aG9yaXNlZEJ5IiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJsaW5lIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiZ2V0UGFnZVdpZHRoIiwiYWRkcmVzc0xpbmUxIiwidGRXaWR0aCIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImkiLCJzZXRGb250IiwidW5kZWZpbmVkIiwicmVjdCIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInNldERyYXdDb2xvciIsImZvckVhY2giLCJyb3ciLCJpbmRleCIsInNldExpbmVXaWR0aCIsInRhYmxlQm9keUxlbmd0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJpdGVtIiwidG9TdHJpbmciLCJwdXNoIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwidG9Mb2NhbGVTdHJpbmciLCJzZXRQYWdlIiwibm90ZURhdGEiLCJhZGREZXNjIiwiZWwiLCJyZXR1cm5PYmoiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsImJsb2JPdXRwdXQiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLElBQUksRUFBRSxNQURXO0FBQ0g7QUFDZEMsRUFBQUEsYUFBYSxFQUFFLGVB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QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5cbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6ICBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG5cblxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICB2YXIgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICB2YXIgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuXG4gIHZhciBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgdmFyIGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgdmFyIGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgdmFyIGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICB2YXIgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCJcbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gMTU7XG4gIC8vdmFyIHN0YXJ0UG9pbnRSZWN0UGFuZWwxID0gY3VycmVudEhlaWdodCArIDY7XG5cbiAgdmFyIHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgICdQTkcnLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIFwicmlnaHRcIik7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgXCJyaWdodFwiKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIFwicmlnaHRcIik7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgXCJyaWdodFwiKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbFxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyB8fCBwYXJhbS5kYXRhLmRhdGUxKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQoZG9jLmdldFBhZ2VXaWR0aCgpLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMiwgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgfVxuICBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIC8vVEFCTEUgUEFSVFxuICAvL3ZhciB0ZFdpZHRoID0gMzEuNjY7XG4gIC8vMTAgbWFyZ2luIGxlZnQgLSAxMCBtYXJnaW4gcmlnaHRcbiAgdmFyIHRkV2lkdGggPSAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIHZhciBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIHZhciBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICB9XG4gIH07XG4gIHZhciBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIHZhciBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSArIGluZGV4ICogdGRXaWR0aCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAxODUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAxNzggJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmXG4gICAgICAoY3VycmVudEhlaWdodCA+IDI2NSB8fFxuICAgICAgICAoY3VycmVudEhlaWdodCA+IDI1NSAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG5cblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8XG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLCBcInJpZ2h0XCIpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgXCJyaWdodFwiKTtcblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgXCJyaWdodFwiKVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgIFxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHRcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ0F1dGhvcmlzZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuXG4gIC8vIE5vdGUgXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDQwKSlcbiAgICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IDE3Mykge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gIFxuICAgIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IDI3MCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgdmFyIGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gNDApKVxuICAgICAgICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gMTczKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiAyNzApIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgZGVzYy5oZWlnaHQ7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgXCJjZW50ZXJcIik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJzYXZlXCIpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJibG9iXCIpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChcImJsb2JcIik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiZGF0YXVyaXN0cmluZ1wiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChcImRhdGF1cmlzdHJpbmdcIiwge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYXJyYXlidWZmZXJcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KFwiYXJyYXlidWZmZXJcIiksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=