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
 *       netTermLabel?: string,
 *       netTerm?: string,
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
      netTermLabel: ((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.netTermLabel) || "",
      date1: ((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.date1) || "",
      date2: ((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.date2) || "",
      netTerm: ((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.netTerm) || "",
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

    if ((_param$data = param.data) !== null && _param$data !== void 0 && _param$data.netTerm || (_param$data2 = param.data) !== null && _param$data2 !== void 0 && _param$data2.netTermLabel) {
      doc.text(docWidth - 70, currentHeight, param.data.date1Label, "right");
      doc.text(docWidth - 40, currentHeight, param.data.netTermLabel, "right");
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

    if ((_param$data3 = param.data) !== null && _param$data3 !== void 0 && _param$data3.netTerm || (_param$data4 = param.data) !== null && _param$data4 !== void 0 && _param$data4.netTermLabel) {
      doc.text(docWidth - 70, currentHeight, param.data.date1, "right");
      doc.text(docWidth - 40, currentHeight, param.data.netTerm, "right");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicm93MSIsImNvbDEiLCJjb2wyIiwiY29sMyIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJzaXplIiwibGluZXMiLCJkb2MiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJsZW5ndGgiLCJFcnJvciIsIm9wdGlvbnMiLCJvcmllbnRhdGlvbiIsImpzUERGIiwiZG9jV2lkdGgiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwibGluZSIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsImdldFBhZ2VXaWR0aCIsImFkZHJlc3NMaW5lMSIsInRkV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwic2V0UGFnZSIsIm5vdGVEYXRhIiwiYWRkRGVzYyIsImVsIiwicmV0dXJuT2JqIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJibG9iT3V0cHV0Iiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxJQUFJLEVBQUUsTUFEVztBQUNI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bnQiOlsiaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5mdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IFwic2F2ZVwiLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6ICBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuXG5cbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IGZhbHNlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgdmFyIGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gIH07XG5cbiAgdmFyIGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcblxuICB2YXIgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIHZhciBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIHZhciBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIHZhciBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgdmFyIGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICB2YXIgY3VycmVudEhlaWdodCA9IDE1O1xuICAvL3ZhciBzdGFydFBvaW50UmVjdFBhbmVsMSA9IGN1cnJlbnRIZWlnaHQgKyA2O1xuXG4gIHZhciBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgXCJyaWdodFwiKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICAnUE5HJyxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBcInJpZ2h0XCIpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIFwicmlnaHRcIik7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBcInJpZ2h0XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBcInJpZ2h0XCIpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIFwicmlnaHRcIik7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKVxuICB9O1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICBcInJpZ2h0XCJcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWxcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbFxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgXCJyaWdodFwiKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIH1lbHNle1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBcInJpZ2h0XCIpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodFxuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgXCJyaWdodFwiKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgXCJyaWdodFwiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIFwicmlnaHRcIik7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMiwgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgoZG9jLmdldFBhZ2VXaWR0aCgpLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChkb2MuZ2V0UGFnZVdpZHRoKCkvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLCAoKGRvYy5nZXRQYWdlV2lkdGgoKS8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChkb2MuZ2V0UGFnZVdpZHRoKCkvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KGRvYy5nZXRQYWdlV2lkdGgoKS8zLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgfVxuICBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIC8vVEFCTEUgUEFSVFxuICAvL3ZhciB0ZFdpZHRoID0gMzEuNjY7XG4gIC8vMTAgbWFyZ2luIGxlZnQgLSAxMCBtYXJnaW4gcmlnaHRcbiAgdmFyIHRkV2lkdGggPSAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIHZhciBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIHZhciBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICB9XG4gIH07XG4gIHZhciBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIHZhciBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSArIGluZGV4ICogdGRXaWR0aCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJlxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAxODUgfHxcbiAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiAxNzggJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIXBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlICYmXG4gICAgICAoY3VycmVudEhlaWdodCA+IDI2NSB8fFxuICAgICAgICAoY3VycmVudEhlaWdodCA+IDI1NSAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG5cblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8XG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLCBcInJpZ2h0XCIpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgXCJyaWdodFwiKTtcblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgXCJyaWdodFwiKVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMiwgXCJyaWdodFwiKTtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCwgXCJyaWdodFwiKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIFwicmlnaHRcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgIFxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsIFwicmlnaHRcIik7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsIFwicmlnaHRcIik7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIFwiY2VudGVyXCIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHRcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgJ2JvbGQnKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ0F1dGhvcmlzZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnbm9ybWFsJyk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuXG4gIC8vIE5vdGUgXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgKGRvYy5nZXRQYWdlV2lkdGgoKSAtIDQwKSlcbiAgICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IDE3Mykge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gIFxuICAgIGlmICghcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IDI3MCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCAnYm9sZCcpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgdmFyIGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCAoZG9jLmdldFBhZ2VXaWR0aCgpIC0gNDApKVxuICAgICAgICBpZiAocGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgJiYgY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gMTczKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKCFwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSAmJiBjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiAyNzApIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdib2xkJyk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsICdub3JtYWwnKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgZGVzYy5oZWlnaHQ7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgXCJjZW50ZXJcIik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJzYXZlXCIpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gXCJibG9iXCIpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChcImJsb2JcIik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiZGF0YXVyaXN0cmluZ1wiKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChcImRhdGF1cmlzdHJpbmdcIiwge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IFwiYXJyYXlidWZmZXJcIikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KFwiYXJyYXlidWZmZXJcIiksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=