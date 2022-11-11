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
 *       date3Label?: string,
 *       date3?: string,
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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data22$row, _props$data23, _props$data23$row, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data25$row$sty, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data29$row$sty, _props$data30, _props$data30$total, _props$data31, _props$data31$total, _props$data32, _props$data32$total, _props$data33, _props$data33$row, _props$data33$row$sty, _props$data34, _props$data34$amountD, _props$data35, _props$data35$amountD, _props$data36, _props$data36$amountD, _props$data37, _props$data37$amountD, _props$data37$amountD2, _props$data38, _props$footer, _param$contact, _param$contact4, _param$contact7, _param$contact10, _param$data7, _param$data7$desc;

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
      date3Label: ((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.date3Label) || "",
      date1: ((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.date1) || "",
      date2: ((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.date2) || "",
      date3: ((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.date3) || "",
      headerBorder: ((_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.headerBorder) || false,
      tableBodyBorder: ((_props$data11 = props.data) === null || _props$data11 === void 0 ? void 0 : _props$data11.tableBodyBorder) || false,
      header: ((_props$data12 = props.data) === null || _props$data12 === void 0 ? void 0 : _props$data12.header) || [],
      table: ((_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.table) || [],
      subTotal: ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.subTotal) || "",
      currency: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.currency) || "",
      descLabel: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.descLabel) || "",
      requestedBy: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.requestedBy) || "",
      authorisedBy: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.authorisedBy) || "",
      desc: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.desc) || "",
      creditNoteLabel: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.creditNoteLabel) || "",
      note: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.note) || "",
      row1: {
        col1: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : (_props$data22$row = _props$data22.row1) === null || _props$data22$row === void 0 ? void 0 : _props$data22$row.col1) || "",
        col2: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : (_props$data23$row = _props$data23.row1) === null || _props$data23$row === void 0 ? void 0 : _props$data23$row.col2) || "",
        col3: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : (_props$data24$row = _props$data24.row1) === null || _props$data24$row === void 0 ? void 0 : _props$data24$row.col3) || "",
        style: {
          fontSize: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : (_props$data25$row = _props$data25.row1) === null || _props$data25$row === void 0 ? void 0 : (_props$data25$row$sty = _props$data25$row.style) === null || _props$data25$row$sty === void 0 ? void 0 : _props$data25$row$sty.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$row = _props$data26.row2) === null || _props$data26$row === void 0 ? void 0 : _props$data26$row.col1) || "",
        col2: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$row = _props$data27.row2) === null || _props$data27$row === void 0 ? void 0 : _props$data27$row.col2) || "",
        col3: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$row = _props$data28.row2) === null || _props$data28$row === void 0 ? void 0 : _props$data28$row.col3) || "",
        style: {
          fontSize: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row2) === null || _props$data29$row === void 0 ? void 0 : (_props$data29$row$sty = _props$data29$row.style) === null || _props$data29$row$sty === void 0 ? void 0 : _props$data29$row$sty.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$total = _props$data30.total) === null || _props$data30$total === void 0 ? void 0 : _props$data30$total.col1) || "",
        col2: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$total = _props$data31.total) === null || _props$data31$total === void 0 ? void 0 : _props$data31$total.col2) || "",
        col3: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$total = _props$data32.total) === null || _props$data32$total === void 0 ? void 0 : _props$data32$total.col3) || "",
        style: {
          fontSize: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row2) === null || _props$data33$row === void 0 ? void 0 : (_props$data33$row$sty = _props$data33$row.style) === null || _props$data33$row$sty === void 0 ? void 0 : _props$data33$row$sty.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$amountD = _props$data34.amountDue) === null || _props$data34$amountD === void 0 ? void 0 : _props$data34$amountD.col1) || "",
        col2: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$amountD = _props$data35.amountDue) === null || _props$data35$amountD === void 0 ? void 0 : _props$data35$amountD.col2) || "",
        col3: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$amountD = _props$data36.amountDue) === null || _props$data36$amountD === void 0 ? void 0 : _props$data36$amountD.col3) || "",
        style: {
          fontSize: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$amountD = _props$data37.amountDue) === null || _props$data37$amountD === void 0 ? void 0 : (_props$data37$amountD2 = _props$data37$amountD.style) === null || _props$data37$amountD2 === void 0 ? void 0 : _props$data37$amountD2.fontSize) || 12
        }
      },
      creditNote: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : _props$data38.creditNote) || ""
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
    var _param$contact2, _param$contact3, _param$data, _param$data2;

    var billingAddressLabel = (_param$contact2 = param.contact) === null || _param$contact2 === void 0 ? void 0 : _param$contact2.billingAddress.label;
    var shippingAddressLabel = (_param$contact3 = param.contact) === null || _param$contact3 === void 0 ? void 0 : _param$contact3.shippingAddress.label;
    doc.text(10, currentHeight, billingAddressLabel);
    doc.text(doc.getPageWidth() / 3, currentHeight, shippingAddressLabel);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);

    if ((_param$data = param.data) !== null && _param$data !== void 0 && _param$data.data3 || (_param$data2 = param.data) !== null && _param$data2 !== void 0 && _param$data2.date3Label) {
      doc.text(docWidth - 70, currentHeight, param.data.date1Label, "right");
      doc.text(docWidth - 40, currentHeight, param.data.date3Label, "right");
    } else {
      doc.text(docWidth - 40, currentHeight, param.data.date1Label, "right");
    }

    doc.text(docWidth - 10, currentHeight, param.data.date2Label, "right");
    currentHeight += pdfConfig.subLineHeight;
  }

  if ((_param$contact4 = param.contact) !== null && _param$contact4 !== void 0 && _param$contact4.billingAddress.address || param.data.date1) {
    var _param$contact5, _param$contact6, _param$data3, _param$data4;

    var billingAddress = splitTextAndGetHeight((_param$contact5 = param.contact) === null || _param$contact5 === void 0 ? void 0 : _param$contact5.billingAddress.address, doc.getPageWidth() / 3 - 25);
    var shippingAddress = splitTextAndGetHeight((_param$contact6 = param.contact) === null || _param$contact6 === void 0 ? void 0 : _param$contact6.shippingAddress.address, doc.getPageWidth() / 3 - 25);
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(doc.getPageWidth() / 3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);

    if ((_param$data3 = param.data) !== null && _param$data3 !== void 0 && _param$data3.data3 || (_param$data4 = param.data) !== null && _param$data4 !== void 0 && _param$data4.date3Label) {
      doc.text(docWidth - 70, currentHeight, param.data.date1, "right");
      doc.text(docWidth - 40, currentHeight, param.data.date3, "right");
    } else {
      doc.text(docWidth - 40, currentHeight, param.data.date1, "right");
    }

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
    var _param$data5;

    doc.setFontSize(pdfConfig.labelTextSize - 2);
    doc.setTextColor(colorBlack);

    if (((_param$data5 = param.data) === null || _param$data5 === void 0 ? void 0 : _param$data5.desc.length) > 0) {
      var _param$data6, _param$data6$desc;

      currentHeight += 1;
      (_param$data6 = param.data) === null || _param$data6 === void 0 ? void 0 : (_param$data6$desc = _param$data6.desc) === null || _param$data6$desc === void 0 ? void 0 : _param$data6$desc.forEach(function (el, index) {
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

  if (((_param$data7 = param.data) === null || _param$data7 === void 0 ? void 0 : (_param$data7$desc = _param$data7.desc) === null || _param$data7$desc === void 0 ? void 0 : _param$data7$desc.length) > 0) addDesc(); //add num of page at the bottom

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwiZGF0ZTNMYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJkYXRlMyIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsImhlYWRlciIsInRhYmxlIiwic3ViVG90YWwiLCJjdXJyZW5jeSIsImRlc2NMYWJlbCIsInJlcXVlc3RlZEJ5IiwiYXV0aG9yaXNlZEJ5IiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJkb2NXaWR0aCIsImludGVybmFsIiwicGFnZVNpemUiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJsaW5lIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiZ2V0UGFnZVdpZHRoIiwiZGF0YTMiLCJhZGRyZXNzTGluZTEiLCJ0ZFdpZHRoIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiaSIsInNldEZvbnQiLCJ1bmRlZmluZWQiLCJyZWN0IiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwic2V0RHJhd0NvbG9yIiwiZm9yRWFjaCIsInJvdyIsImluZGV4Iiwic2V0TGluZVdpZHRoIiwidGFibGVCb2R5TGVuZ3RoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIml0ZW0iLCJ0b1N0cmluZyIsInB1c2giLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJ0b0xvY2FsZVN0cmluZyIsInNldFBhZ2UiLCJub3RlRGF0YSIsImFkZERlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5cbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlM0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTM/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6ICBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlM0xhYmVsOiBwcm9wcy5kYXRhPy5kYXRlM0xhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgZGF0ZTM6IHByb3BzLmRhdGE/LmRhdGUzIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcblxuXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCBmYWxzZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIHZhciBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICB9O1xuXG4gIHZhciBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG5cbiAgdmFyIGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICB2YXIgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICB2YXIgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICB2YXIgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIHZhciBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIlxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgdmFyIGN1cnJlbnRIZWlnaHQgPSAxNTtcbiAgLy92YXIgc3RhcnRQb2ludFJlY3RQYW5lbDEgPSBjdXJyZW50SGVpZ2h0ICsgNjtcblxuICB2YXIgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgJ1BORycsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgXCJyaWdodFwiKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLCBcInJpZ2h0XCIpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMywgXCJyaWdodFwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgXCJyaWdodFwiKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBcInJpZ2h0XCIpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubmFtZSlcbiAgfTtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgXCJyaWdodFwiXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyB8fCBwYXJhbS5kYXRhLmRhdGUxKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWxcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQoZG9jLmdldFBhZ2VXaWR0aCgpLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZihwYXJhbS5kYXRhPy5kYXRhMyB8fCBwYXJhbS5kYXRhPy5kYXRlM0xhYmVsKXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgXCJyaWdodFwiKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTNMYWJlbCwgXCJyaWdodFwiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgXCJyaWdodFwiKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHRcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmKHBhcmFtLmRhdGE/LmRhdGEzIHx8IHBhcmFtLmRhdGE/LmRhdGUzTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgXCJyaWdodFwiKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTMsIFwicmlnaHRcIik7XG4gICAgfWVsc2V7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBcInJpZ2h0XCIpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQoZG9jLmdldFBhZ2VXaWR0aCgpLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8IHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSk7XG4gIH1cbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcbiAgLy92YXIgdGRXaWR0aCA9IDMxLjY2O1xuICAvLzEwIG1hcmdpbiBsZWZ0IC0gMTAgbWFyZ2luIHJpZ2h0XG4gIHZhciB0ZFdpZHRoID0gKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICB2YXIgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICB2YXIgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIHZhciB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICB2YXIgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiZcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTg1IHx8XG4gICAgICAgIChjdXJyZW50SGVpZ2h0ID4gMTc4ICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNjUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAyNTUgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoJ05vIERhdGEnLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuXG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCwgXCJyaWdodFwiKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksIFwicmlnaHRcIik7XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG4gIC8vZW5kIHJvdzFcblxuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIFwicmlnaHRcIilcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICBcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLCBcInJpZ2h0XCIpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLCBcInJpZ2h0XCIpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBcImNlbnRlclwiKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnUmVxdWVzdGVkIEJ5Jyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdBdXRob3Jpc2VkIEJ5Jyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ25vcm1hbCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cblxuICAvLyBOb3RlIFxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIChkb2MuZ2V0UGFnZVdpZHRoKCkgLSA0MCkpXG4gICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiAxNzMpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICBcbiAgICBpZiAoIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiAyNzApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ05vdGUnKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIHZhciBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDQwKSlcbiAgICAgICAgaWYgKHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmIGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IDE3Mykge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gMjcwKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIGRlc2MuaGVpZ2h0O1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwic2F2ZVwiKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYmxvYlwiKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoXCJibG9iXCIpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImRhdGF1cmlzdHJpbmdcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoXCJkYXRhdXJpc3RyaW5nXCIsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBcImFycmF5YnVmZmVyXCIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChcImFycmF5YnVmZmVyXCIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl19