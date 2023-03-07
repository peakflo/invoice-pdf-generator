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
 *       staticVA?: {
 *          account: string,
 *          bank: string,
 *       },
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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data23$row, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data26, _props$data26$row, _props$data26$row$sty, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$total, _props$data32, _props$data32$total, _props$data33, _props$data33$total, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$amountD, _props$data36, _props$data36$amountD, _props$data37, _props$data37$amountD, _props$data38, _props$data38$amountD, _props$data38$amountD2, _props$data39, _props$footer, _param$contact, _param$contact4, _param$contact7, _param$contact10, _param$data7, _param$data7$desc;

  var param = {
    outputType: props.outputType || OutputType.Save,
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
      country: ((_props$business6 = props.business) === null || _props$business6 === void 0 ? void 0 : _props$business6.country) || "",
      taxNumber: ((_props$business7 = props.business) === null || _props$business7 === void 0 ? void 0 : _props$business7.taxNumber) || ""
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
      staticVA: (_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.staticVA,
      desc: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.desc) || "",
      creditNoteLabel: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.creditNoteLabel) || "",
      note: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.note) || "",
      row1: {
        col1: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : (_props$data23$row = _props$data23.row1) === null || _props$data23$row === void 0 ? void 0 : _props$data23$row.col1) || "",
        col2: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : (_props$data24$row = _props$data24.row1) === null || _props$data24$row === void 0 ? void 0 : _props$data24$row.col2) || "",
        col3: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : (_props$data25$row = _props$data25.row1) === null || _props$data25$row === void 0 ? void 0 : _props$data25$row.col3) || "",
        style: {
          fontSize: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$row = _props$data26.row1) === null || _props$data26$row === void 0 ? void 0 : (_props$data26$row$sty = _props$data26$row.style) === null || _props$data26$row$sty === void 0 ? void 0 : _props$data26$row$sty.fontSize) || 12
        }
      },
      row2: {
        col1: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$row = _props$data27.row2) === null || _props$data27$row === void 0 ? void 0 : _props$data27$row.col1) || "",
        col2: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$row = _props$data28.row2) === null || _props$data28$row === void 0 ? void 0 : _props$data28$row.col2) || "",
        col3: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row2) === null || _props$data29$row === void 0 ? void 0 : _props$data29$row.col3) || "",
        style: {
          fontSize: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$row = _props$data30.row2) === null || _props$data30$row === void 0 ? void 0 : (_props$data30$row$sty = _props$data30$row.style) === null || _props$data30$row$sty === void 0 ? void 0 : _props$data30$row$sty.fontSize) || 12
        }
      },
      total: {
        col1: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$total = _props$data31.total) === null || _props$data31$total === void 0 ? void 0 : _props$data31$total.col1) || "",
        col2: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$total = _props$data32.total) === null || _props$data32$total === void 0 ? void 0 : _props$data32$total.col2) || "",
        col3: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$total = _props$data33.total) === null || _props$data33$total === void 0 ? void 0 : _props$data33$total.col3) || "",
        style: {
          fontSize: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row2) === null || _props$data34$row === void 0 ? void 0 : (_props$data34$row$sty = _props$data34$row.style) === null || _props$data34$row$sty === void 0 ? void 0 : _props$data34$row$sty.fontSize) || 12
        }
      },
      amountDue: {
        col1: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$amountD = _props$data35.amountDue) === null || _props$data35$amountD === void 0 ? void 0 : _props$data35$amountD.col1) || "",
        col2: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$amountD = _props$data36.amountDue) === null || _props$data36$amountD === void 0 ? void 0 : _props$data36$amountD.col2) || "",
        col3: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$amountD = _props$data37.amountDue) === null || _props$data37$amountD === void 0 ? void 0 : _props$data37$amountD.col3) || "",
        style: {
          fontSize: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$amountD = _props$data38.amountDue) === null || _props$data38$amountD === void 0 ? void 0 : (_props$data38$amountD2 = _props$data38$amountD.style) === null || _props$data38$amountD2 === void 0 ? void 0 : _props$data38$amountD2.fontSize) || 12
        }
      },
      creditNote: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : _props$data39.creditNote) || ""
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
  var pageWidth = doc.getPageWidth();
  var pageHeight = doc.getPageHeight() - 25; //25 is bottom margin

  var docWidth = doc.internal.pageSize.width;
  var docHeight = doc.internal.pageSize.height;
  var colorBlack = "#000000";
  var colorBlue = "#3367d6";
  var colorGray = "#4d4e53";
  var lightGray = "#888888";
  var FONT_TYPE_NORMAL = "normal";
  var FONT_TYPE_BOLD = "bold";
  var ALIGN_RIGHT = "right";
  var ALIGN_CENTER = "center"; //starting at 15mm

  var currentHeight = 15;
  var pdfConfig = {
    headerTextSize: 20,
    labelTextSize: 12,
    fieldTextSize: 10,
    lineHeight: 6,
    subLineHeight: 4
  };
  doc.setFontSize(pdfConfig.headerTextSize);
  doc.setTextColor(colorBlack);
  doc.text(docWidth - 10, currentHeight, param.business.name, ALIGN_RIGHT);
  doc.setFontSize(pdfConfig.fieldTextSize);

  if (param.logo.src) {
    doc.addImage(param.logo.src, 'PNG', 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
  }

  if (param.business.taxNumber) {
    currentHeight += pdfConfig.subLineHeight + 2;
    doc.setFontSize(pdfConfig.labelTextSize);
    doc.setTextColor(colorBlue);
    doc.text(docWidth - 10, currentHeight, param.business.taxNumber, ALIGN_RIGHT);
  }

  doc.setTextColor(colorGray);
  currentHeight += pdfConfig.subLineHeight;
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.address, ALIGN_RIGHT);
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.addressLine2, ALIGN_RIGHT);
  doc.setFontSize(pdfConfig.fieldTextSize); // doc.setTextColor(colorGray);

  currentHeight += pdfConfig.subLineHeight;

  if (param.business.addressLine3) {
    doc.text(docWidth - 10, currentHeight, param.business.addressLine3, ALIGN_RIGHT);
    currentHeight += pdfConfig.subLineHeight;
  }

  doc.text(docWidth - 10, currentHeight, param.business.country, ALIGN_RIGHT);
  currentHeight += pdfConfig.subLineHeight;
  doc.text(docWidth - 10, currentHeight, param.business.email_1, ALIGN_RIGHT); //line breaker after logo & business info

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
    doc.text(docWidth - 10, currentHeight, param.data.label + param.data.num, ALIGN_RIGHT);
  }

  if (param.contact.name || param.data.label && param.data.num) currentHeight += pdfConfig.subLineHeight + 2;
  doc.setTextColor(colorGray);
  doc.setFontSize(pdfConfig.fieldTextSize);

  if ((_param$contact = param.contact) !== null && _param$contact !== void 0 && _param$contact.billingAddress.address || param.data.date1) {
    var _param$contact2, _param$contact3, _param$data, _param$data2;

    var billingAddressLabel = (_param$contact2 = param.contact) === null || _param$contact2 === void 0 ? void 0 : _param$contact2.billingAddress.label;
    var shippingAddressLabel = (_param$contact3 = param.contact) === null || _param$contact3 === void 0 ? void 0 : _param$contact3.shippingAddress.label;
    doc.text(10, currentHeight, billingAddressLabel);
    doc.text(pageWidth / 3, currentHeight, shippingAddressLabel);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);

    if ((_param$data = param.data) !== null && _param$data !== void 0 && _param$data.netTerm || (_param$data2 = param.data) !== null && _param$data2 !== void 0 && _param$data2.netTermLabel) {
      doc.text(docWidth - 70, currentHeight, param.data.date1Label, ALIGN_RIGHT);
      doc.text(docWidth - 40, currentHeight, param.data.netTermLabel, ALIGN_RIGHT);
    } else {
      doc.text(docWidth - 40, currentHeight, param.data.date1Label, ALIGN_RIGHT);
    }

    doc.text(docWidth - 10, currentHeight, param.data.date2Label, ALIGN_RIGHT);
    currentHeight += pdfConfig.subLineHeight;
  }

  if ((_param$contact4 = param.contact) !== null && _param$contact4 !== void 0 && _param$contact4.billingAddress.address || param.data.date1) {
    var _param$contact5, _param$contact6, _param$data3, _param$data4;

    var billingAddress = splitTextAndGetHeight((_param$contact5 = param.contact) === null || _param$contact5 === void 0 ? void 0 : _param$contact5.billingAddress.address, pageWidth / 3 - 25);
    var shippingAddress = splitTextAndGetHeight((_param$contact6 = param.contact) === null || _param$contact6 === void 0 ? void 0 : _param$contact6.shippingAddress.address, pageWidth / 3 - 25);
    doc.text(10, currentHeight, billingAddress.text);
    doc.text(pageWidth / 3, currentHeight, shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);

    if ((_param$data3 = param.data) !== null && _param$data3 !== void 0 && _param$data3.netTerm || (_param$data4 = param.data) !== null && _param$data4 !== void 0 && _param$data4.netTermLabel) {
      doc.text(docWidth - 70, currentHeight, param.data.date1, ALIGN_RIGHT);
      doc.text(docWidth - 40, currentHeight, param.data.netTerm, ALIGN_RIGHT);
    } else {
      doc.text(docWidth - 40, currentHeight, param.data.date1, ALIGN_RIGHT);
    }

    doc.text(docWidth - 10, currentHeight, param.data.date2, ALIGN_RIGHT);
    currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
  }

  if ((_param$contact7 = param.contact) !== null && _param$contact7 !== void 0 && _param$contact7.billingAddress.addressLine1 || param.data.date2) {
    var _param$contact8, _param$contact9;

    var _billingAddress = splitTextAndGetHeight((_param$contact8 = param.contact) === null || _param$contact8 === void 0 ? void 0 : _param$contact8.billingAddress.addressLine2, pageWidth / 3 - 25);

    var _shippingAddress = splitTextAndGetHeight((_param$contact9 = param.contact) === null || _param$contact9 === void 0 ? void 0 : _param$contact9.shippingAddress.addressLine2, pageWidth / 3 - 25);

    doc.text(10, currentHeight, _billingAddress.text);
    doc.text(pageWidth / 3, currentHeight, _shippingAddress.text);
    doc.setFontSize(pdfConfig.fieldTextSize - 2);
    currentHeight += _billingAddress.height > _shippingAddress.height ? _billingAddress.height : _shippingAddress.height;
  }

  if ((_param$contact10 = param.contact) !== null && _param$contact10 !== void 0 && _param$contact10.billingAddress.addressLine3) {
    var _param$contact11, _param$contact12;

    var _billingAddress2 = splitTextAndGetHeight((_param$contact11 = param.contact) === null || _param$contact11 === void 0 ? void 0 : _param$contact11.billingAddress.addressLine3, pageWidth / 3 - 25);

    var _shippingAddress2 = splitTextAndGetHeight((_param$contact12 = param.contact) === null || _param$contact12 === void 0 ? void 0 : _param$contact12.shippingAddress.addressLine3, pageWidth / 3 - 25);

    doc.text(10, currentHeight, _billingAddress2.text);
    doc.text(pageWidth / 3, currentHeight, _shippingAddress2.text);
    currentHeight += _billingAddress2.height > _shippingAddress2.height ? _billingAddress2.height : _shippingAddress2.height;
  }

  if (param.contact.billingAddress.country || param.contact.shippingAddress.country) {
    doc.text(10, currentHeight, param.contact.billingAddress.country);
    doc.text(pageWidth / 3, currentHeight, param.contact.shippingAddress.country);
  } else currentHeight -= pdfConfig.subLineHeight; //end contact part
  //TABLE PART


  var tdWidth = (pageWidth - 20) / param.data.header.length;

  var addTableHeaderBoarder = function addTableHeaderBoarder() {
    currentHeight += 2;

    for (var i = 0; i < param.data.header.length; i++) {
      doc.setFont(undefined, FONT_TYPE_BOLD);
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
    doc.setFont(undefined, FONT_TYPE_BOLD);
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
  doc.setFont(undefined, FONT_TYPE_NORMAL);
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

    if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
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


  doc.text(docWidth - 50, currentHeight, param.data.subTotalLabel, ALIGN_RIGHT);
  doc.text(docWidth - 10, currentHeight, param.data.currency + "  " + param.data.subTotal.toLocaleString(), ALIGN_RIGHT); //row1 - tax

  if (param.data.row1 && (param.data.row1.col1 || param.data.row1.col2 || param.data.row1.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row1.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.row1.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.row1.col2, ALIGN_RIGHT);
  } //end row1
  //row2 - discounts


  if (param.data.row2 && (param.data.row2.col1 || param.data.row2.col2 || param.data.row2.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.row2.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.row2.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.row2.col2, ALIGN_RIGHT);
  } //end row2
  // Main total


  if (param.data.total && (param.data.total.col1 || param.data.total.col2 || param.data.total.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(docWidth - 50, currentHeight, param.data.total.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.total.col3 + "  " + param.data.total.col2, ALIGN_RIGHT);
  } // Amount Due


  doc.setFont(undefined, FONT_TYPE_NORMAL);

  if (param.data.amountDue && (param.data.amountDue.col1 || param.data.amountDue.col2 || param.data.amountDue.col3)) {
    currentHeight += pdfConfig.lineHeight;
    doc.setFontSize(param.data.amountDue.style.fontSize);
    doc.text(docWidth - 50, currentHeight, param.data.creditNoteLabel, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.creditNote, ALIGN_RIGHT);
    currentHeight += pdfConfig.lineHeight;
    doc.line(docWidth / 2, currentHeight, docWidth - 10, currentHeight);
    currentHeight += pdfConfig.lineHeight;
    doc.text(docWidth - 50, currentHeight, param.data.amountDue.col1, ALIGN_RIGHT);
    doc.text(docWidth - 10, currentHeight, param.data.amountDue.col3 + "  " + param.data.amountDue.col2, ALIGN_RIGHT);
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
        doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
        doc.setPage(i);
        doc.text(param.pageLabel + " " + i + " / " + doc.getNumberOfPages(), docWidth - 20, doc.internal.pageSize.height - 6);
      }
    }
  } // requested by


  if (param.data.requestedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Requested By');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.requestedBy);
    currentHeight += pdfConfig.lineHeight;
  } // authorised by


  if (param.data.authorisedBy) {
    doc.setFontSize(pdfConfig.fieldTextSize);
    currentHeight += pdfConfig.lineHeight;
    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Authorised By');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.text(10, currentHeight, param.data.authorisedBy);
    currentHeight += pdfConfig.lineHeight;
  } // static VA payment details


  if (param.data.staticVA) {
    currentHeight += pdfConfig.lineHeight;
    var staticVAContent = "Account Name: ".concat(param.business.name, "\nBank Name: ").concat(param.data.staticVA.bank, "\nAccount Number: ").concat(param.data.staticVA.account);
    var paymentDetails = splitTextAndGetHeight(staticVAContent, pageWidth - 40);

    if (currentHeight + paymentDetails.height > pageHeight) {
      doc.addPage();
      currentHeight = 20;
    }

    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Payment details');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, FONT_TYPE_NORMAL);
    doc.setFontSize(pdfConfig.fieldTextSize);
    doc.text(10, currentHeight, paymentDetails.text);
    currentHeight += pdfConfig.lineHeight + paymentDetails.height;
  } // Note 


  if (param.data.note) {
    currentHeight += pdfConfig.lineHeight;
    var noteData = splitTextAndGetHeight(param.data.note, pageWidth - 40);

    if (currentHeight + noteData.height > pageHeight) {
      doc.addPage();
      currentHeight = 10;
    }

    doc.setFont(undefined, FONT_TYPE_BOLD);
    doc.text(10, currentHeight, 'Note');
    currentHeight += pdfConfig.subLineHeight;
    doc.setFont(undefined, FONT_TYPE_NORMAL);
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
        var desc = splitTextAndGetHeight(el, pageWidth - 40);

        if (currentHeight + desc.height > pageHeight) {
          doc.addPage();
          currentHeight = 10;
        }

        if (index === 0) {
          doc.setFont(undefined, FONT_TYPE_BOLD);
          doc.text(10, currentHeight, param.data.descLabel);
          doc.setFont(undefined, FONT_TYPE_NORMAL);
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
    doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
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

  if (param.outputType === OutputType.Save) doc.save(param.fileName);else if (param.outputType === OutputType.Blob) {
    var blobOutput = doc.output(OutputType.Blob);
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      blob: blobOutput
    });
  } else if (param.outputType === OutputType.DataUriString) {
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      dataUriString: doc.output(OutputType.DataUriString, {
        filename: param.fileName
      })
    });
  } else if (param.outputType === OutputType.ArrayBuffer) {
    returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
      arrayBuffer: doc.output(OutputType.ArrayBuffer)
    });
  } else doc.output(param.outputType, {
    filename: param.fileName
  });
  return returnObj;
}

var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJwYWdlV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZ2V0UGFnZUhlaWdodCIsImRvY1dpZHRoIiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0NFTlRFUiIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwibGluZSIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsImFkZHJlc3NMaW5lMSIsInRkV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwic2V0UGFnZSIsInN0YXRpY1ZBQ29udGVudCIsImJhbmsiLCJhY2NvdW50IiwicGF5bWVudERldGFpbHMiLCJub3RlRGF0YSIsImFkZERlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFKRDtBQUlxQjtBQUN0Q0MsRUFBQUEsSUFBSSxFQUFFLE1BTFc7QUFLSDtBQUNkQyxFQUFBQSxXQUFXLEVBQUUsYUFOSSxDQU1XOztBQU5YLENBQW5COzs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFD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QyxVQUFOLEtBQXFCVixVQUFVLENBQUNNLFdBQXBDLEVBQWlEO0FBQ3REMkksSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQUyxNQUFBQSxXQUFXLEVBQUVsRixHQUFHLENBQUM4RSxNQUFKLENBQVd0SixVQUFVLENBQUNNLFdBQXRCO0FBRk4sTUFBVDtBQUlELEdBTE0sTUFNTGtFLEdBQUcsQ0FBQzhFLE1BQUosQ0FBVzdJLEtBQUssQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0IrSSxJQUFBQSxRQUFRLEVBQUVoSixLQUFLLENBQUNHO0FBRFcsR0FBN0I7QUFJRixTQUFPcUksU0FBUDtBQUNEOztlQUVjMUksb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiAgcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG5cblxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIlxuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCJcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCJcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIlxuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIlxuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiXG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICAnUE5HJyxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG5cbiAgaWYocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyB8fCBwYXJhbS5kYXRhLmRhdGUxKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWxcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZihwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCl7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgfWVsc2V7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodFxuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcywgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfWVsc2V7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMiwgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fCBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5KSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpO1xuICB9XG4gIGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChyci50b1N0cmluZygpLCB0ZFdpZHRoIC0gMSk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBpZiAoaW5kZXggPT0gMCkgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSwgY3VycmVudEhlaWdodCArIDQpO1xuICAgICAgZWxzZSBkb2MudGV4dChpdGVtLnRleHQsIDExICsgaW5kZXggKiB0ZFdpZHRoLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IChwYWdlSGVpZ2h0IC0gMTApICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoJ05vIERhdGEnLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuXG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCwgQUxJR05fUklHSFQpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgQUxJR05fUklHSFQpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICBcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdBdXRob3Jpc2VkIEJ5Jyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBcbiAgICAgIGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gXG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoc3RhdGljVkFDb250ZW50LCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnUGF5bWVudCBkZXRhaWxzJyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgKHBhZ2VXaWR0aCAtIDQwKSlcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgZGVzYy5oZWlnaHQ7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=