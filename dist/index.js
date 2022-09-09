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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwic3ViVG90YWwiLCJjdXJyZW5jeSIsImRlc2NMYWJlbCIsInJlcXVlc3RlZEJ5IiwiYXV0aG9yaXNlZEJ5IiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJsaW5lIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiZ2V0UGFnZVdpZHRoIiwiYWRkcmVzc0xpbmUxIiwidGRXaWR0aCIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImkiLCJzZXRGb250IiwidW5kZWZpbmVkIiwicmVjdCIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInNldERyYXdDb2xvciIsImZvckVhY2giLCJyb3ciLCJpbmRleCIsInNldExpbmVXaWR0aCIsInRhYmxlQm9keUxlbmd0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJpdGVtIiwidG9TdHJpbmciLCJwdXNoIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwidG9Mb2NhbGVTdHJpbmciLCJzZXRQYWdlIiwibm90ZURhdGEiLCJhZGREZXNjIiwiZWwiLCJyZXR1cm5PYmoiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsImJsb2JPdXRwdXQiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLElBQUksRUFBRSxNQURXO0FBQ0g7QUFDZEMsRUFBQUEsYUFBYSxFQUFFLGVB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bUNBQ0pBLFNBREk7QUFFUE8sTUFBQUEsYUFBYSxFQUFFcEUsR0FBRyxDQUFDa0UsTUFBSixDQUFXLGVBQVgsRUFBNEI7QUFDekNHLFFBQUFBLFFBQVEsRUFBRWhJLEtBQUssQ0FBQ0c7QUFEeUIsT0FBNUI7QUFGUixNQUFUO0FBTUQsR0FQTSxNQU9BLElBQUlILEtBQUssQ0FBQ0MsVUFBTixLQUFxQixhQUF6QixFQUF3QztBQUM3Q3VILElBQUFBLFNBQVMsbUNBQ0pBLFNBREk7QUFFUFMsTUFBQUEsV0FBVyxFQUFFdEUsR0FBRyxDQUFDa0UsTUFBSixDQUFXLGFBQVg7QUFGTixNQUFUO0FBSUQsR0FMTSxNQU1MbEUsR0FBRyxDQUFDa0UsTUFBSixDQUFXN0gsS0FBSyxDQUFDQyxVQUFqQixFQUE2QjtBQUMzQitILElBQUFBLFFBQVEsRUFBRWhJLEtBQUssQ0FBQ0c7QUFEVyxHQUE3QjtBQUlGLFNBQU9xSCxTQUFQO0FBQ0Q7O2VBRWMxSCxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5cbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6ICBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG5cblxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICB2YXIgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICB2YXIgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuXG4gIHZhciBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgdmFyIGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgdmFyIGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgdmFyIGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICB2YXIgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCJcbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gMTU7XG4gIC8vdmFyIHN0YXJ0UG9pbnRSZWN0UGFuZWwxID0gY3VycmVudEhlaWdodCArIDY7XG5cbiAgdmFyIHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgICdQTkcnLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIFwicmlnaHRcIik7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgXCJyaWdodFwiKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIFwicmlnaHRcIik7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgXCJyaWdodFwiKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbFxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHRcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQoZG9jLmdldFBhZ2VXaWR0aCgpLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8IHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSk7XG4gIH1cbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgICAvLyAgICAgICBlbHNlXG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyICsgcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxOyAvL3NhbWUgYXMgaW4gYWRkdGFibGVIZWFkZXJcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cbiAgLy8gICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTsgLy9uZXNlIGR1YW0gdGUgc2hmYXFpbSBsaW5lIG5lIGZ1bmQgdGUgdGFiZWxlc1xuXG4gIHZhciBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgIHBhcmFtLmRhdGEuZGVzYyxcbiAgICBkb2NXaWR0aCAvIDJcbiAgKS5oZWlnaHQ7XG4gIC8vRU5EIFRBQkxFIFBBUlRcblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAyNzApIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cblxuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTsgXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsIFwicmlnaHRcIik7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLCBcInJpZ2h0XCIpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBcInJpZ2h0XCIpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG5cblxuICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MgPiAxNzMpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG5cbiAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYyA+IDI3MCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBkZXNjID4gMTgzKSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYyA+IDI3MCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ0F1dGhvcmlzZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHRcbiAgfVxuXG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDQwKSlcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIHZhciBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gNDApKVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgdGV4dC50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRleHQuaGVpZ2h0O1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwic2F2ZVwiKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYmxvYlwiKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoXCJibG9iXCIpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImRhdGF1cmlzdHJpbmdcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoXCJkYXRhdXJpc3RyaW5nXCIsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImFycmF5YnVmZmVyXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChcImFycmF5YnVmZmVyXCIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl19