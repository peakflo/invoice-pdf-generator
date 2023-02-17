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
  var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data23$row, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data26, _props$data26$row, _props$data26$row$sty, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$total, _props$data32, _props$data32$total, _props$data33, _props$data33$total, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$amountD, _props$data36, _props$data36$amountD, _props$data37, _props$data37$amountD, _props$data38, _props$data38$amountD, _props$data38$amountD2, _props$data39, _props$footer, _param$contact, _param$contact4, _param$contact7, _param$contact10, _param$data7, _param$data7$desc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJwYWdlV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZ2V0UGFnZUhlaWdodCIsImRvY1dpZHRoIiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0NFTlRFUiIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwibGluZSIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsImFkZHJlc3NMaW5lMSIsInRkV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwic2V0UGFnZSIsInN0YXRpY1ZBQ29udGVudCIsImJhbmsiLCJhY2NvdW50IiwicGF5bWVudERldGFpbHMiLCJub3RlRGF0YSIsImFkZERlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFKRDtBQUlxQjtBQUN0Q0MsRUFBQUEsSUFBSSxFQUFFLE1BTFc7QUFLSDtBQUNkQyxFQUFBQSxXQUFXLEVBQUUsYUFOSSxDQU1XOztBQU5YLENBQW5COzs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFDbkMsTUFBTUMsS0FBSyxHQUFHO0FBQ1pD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LElBQUlILEtBQUssQ0FBQ0MsVUFBTixLQUFxQlYsVUFBVSxDQUFDSyxJQUFwQyxFQUEwQztBQUM3QyxRQUFNOEksVUFBVSxHQUFHNUUsR0FBRyxDQUFDNkUsTUFBSixDQUFXcEosVUFBVSxDQUFDSyxJQUF0QixDQUFuQjtBQUNBMEksSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQTSxNQUFBQSxJQUFJLEVBQUVGO0FBRkMsTUFBVDtBQUlELEdBTkksTUFNRSxJQUFJMUksS0FBSyxDQUFDQyxVQUFOLEtBQXFCVixVQUFVLENBQUNFLGFBQXBDLEVBQW1EO0FBQ3hENkksSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQTyxNQUFBQSxhQUFhLEVBQUUvRSxHQUFHLENBQUM2RSxNQUFKLENBQVdwSixVQUFVLENBQUNFLGFBQXRCLEVBQXFDO0FBQ2xEcUosUUFBQUEsUUFBUSxFQUFFOUksS0FBSyxDQUFDRztBQURrQyxPQUFyQztBQUZSLE1BQVQ7QUFNRCxHQVBNLE1BT0EsSUFBSUgsS0FBSyxDQUFDQyxVQUFOLEtBQXFCVixVQUFVLENBQUNNLFdBQXBDLEVBQWlEO0FBQ3REeUksSUFBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQUyxNQUFBQSxXQUFXLEVBQUVqRixHQUFHLENBQUM2RSxNQUFKLENBQVdwSixVQUFVLENBQUNNLFdBQXRCO0FBRk4sTUFBVDtBQUlELEdBTE0sTUFNTGlFLEdBQUcsQ0FBQzZFLE1BQUosQ0FBVzNJLEtBQUssQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0I2SSxJQUFBQSxRQUFRLEVBQUU5SSxLQUFLLENBQUNHO0FBRFcsR0FBN0I7QUFJRixTQUFPbUksU0FBUDtBQUNEOztlQUVjeEksb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6ICBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogIHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuXG5cbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IGZhbHNlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiXG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiXG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCJcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCJcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIlxuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBBTElHTl9SSUdIVCk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgJ1BORycsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyB8fCBwYXJhbS5kYXRhLmRhdGUxKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWxcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZihwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCl7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgfWVsc2V7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodFxuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcywgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfWVsc2V7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMiwgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fCBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5KSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpO1xuICB9XG4gIGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChyci50b1N0cmluZygpLCB0ZFdpZHRoIC0gMSk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBpZiAoaW5kZXggPT0gMCkgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSwgY3VycmVudEhlaWdodCArIDQpO1xuICAgICAgZWxzZSBkb2MudGV4dChpdGVtLnRleHQsIDExICsgaW5kZXggKiB0ZFdpZHRoLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IChwYWdlSGVpZ2h0IC0gMTApICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoJ05vIERhdGEnLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuXG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCwgQUxJR05fUklHSFQpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgQUxJR05fUklHSFQpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICBcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdBdXRob3Jpc2VkIEJ5Jyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBcbiAgICAgIGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gXG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoc3RhdGljVkFDb250ZW50LCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnUGF5bWVudCBkZXRhaWxzJyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgKHBhZ2VXaWR0aCAtIDQwKSlcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgZGVzYy5oZWlnaHQ7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=