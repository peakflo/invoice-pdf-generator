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

require("regenerator-runtime");

var _jspdf = require("jspdf");

var _qrcode = _interopRequireDefault(require("qrcode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 *       taxNumber?: string
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
 *      indiaIRP?: {
 *          qrCode: string,
 *          irn: string
 *      },
 *      eSign?: {
 *          approverName?: string,
 *          approvedAt?: string,
 *          authorizer?: string,
 *          approverText?: string,
 *          signature?: {
 *              src?: string,
 *              width?: number,
 *              height?: number,
 *              margin?: {
 *                  top?: number,
 *                  left?: number
 *              }
 *          },     
 *      },
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
function jsPDFInvoiceTemplate(_x) {
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}

function _jsPDFInvoiceTemplate() {
  _jsPDFInvoiceTemplate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props) {
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data23$row, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data26, _props$data26$row, _props$data26$row$sty, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$total, _props$data32, _props$data32$total, _props$data33, _props$data33$total, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$amountD, _props$data36, _props$data36$amountD, _props$data37, _props$data37$amountD, _props$data38, _props$data38$amountD, _props$data38$amountD2, _props$data39, _props$data40, _props$data40$indiaIR, _props$data41, _props$data41$indiaIR, _props$data42, _props$data42$eSign, _props$data43, _props$data43$eSign, _props$data44, _props$data44$eSign, _props$data45, _props$data45$eSign, _props$data46, _props$data46$eSign, _props$data46$eSign$s, _props$data47, _props$data47$eSign, _props$data47$eSign$s, _props$data48, _props$data48$eSign, _props$data48$eSign$s, _props$data49, _props$data49$eSign, _props$data49$eSign$s, _props$data49$eSign$s2, _props$data50, _props$data50$eSign, _props$data50$eSign$s, _props$data50$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$data2, _param$data2$indiaIRP, _param$contact2, _param$data4, _param$data4$indiaIRP, _param$contact3, _param$contact3$billi, _param$contact6, _param$contact6$billi, _param$contact9, _param$contact12, _param$data9, _param$data9$eSign, _param$data9$eSign$si, _param$data20, _param$data20$desc;

    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, _param$data3, _param$contact4, _param$contact5, _param$data5, _param$data6, billingAddressLabel, shippingAddressLabel, _param$contact7, _param$contact8, _param$data7, _param$data8, billingAddress, shippingAddress, _param$contact10, _param$contact11, _billingAddress, _shippingAddress, _param$contact13, _param$contact14, _billingAddress2, _shippingAddress2, tdWidth, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, i, staticVAContent, paymentDetails, _param$data10, _param$data10$eSign, _param$data10$eSign$s, _param$data11, _param$data11$eSign, _param$data11$eSign$s, _param$data12, _param$data12$eSign, _param$data12$eSign$s, _param$data13, _param$data13$eSign, _param$data15, _param$data15$eSign, _param$data16, _param$data16$eSign, _param$data17, _param$data17$eSign, _param$data14, _param$data14$eSign, noteData, addDesc, returnObj, blobOutput;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            param = {
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
                },
                taxNumber: ((_props$contact13 = props.contact) === null || _props$contact13 === void 0 ? void 0 : _props$contact13.taxNumber) || ""
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
                creditNote: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : _props$data39.creditNote) || "",
                indiaIRP: {
                  qrCode: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$indiaIR = _props$data40.indiaIRP) === null || _props$data40$indiaIR === void 0 ? void 0 : _props$data40$indiaIR.qrCode) || "",
                  irn: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$indiaIR = _props$data41.indiaIRP) === null || _props$data41$indiaIR === void 0 ? void 0 : _props$data41$indiaIR.irn) || ""
                },
                eSign: {
                  approverName: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$eSign = _props$data42.eSign) === null || _props$data42$eSign === void 0 ? void 0 : _props$data42$eSign.approverName) || "",
                  approvedAt: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$eSign = _props$data43.eSign) === null || _props$data43$eSign === void 0 ? void 0 : _props$data43$eSign.approvedAt) || "",
                  authorizer: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$eSign = _props$data44.eSign) === null || _props$data44$eSign === void 0 ? void 0 : _props$data44$eSign.authorizer) || "",
                  approverText: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$eSign = _props$data45.eSign) === null || _props$data45$eSign === void 0 ? void 0 : _props$data45$eSign.approverText) || "",
                  signature: {
                    src: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$eSign = _props$data46.eSign) === null || _props$data46$eSign === void 0 ? void 0 : (_props$data46$eSign$s = _props$data46$eSign.signature) === null || _props$data46$eSign$s === void 0 ? void 0 : _props$data46$eSign$s.src) || "",
                    width: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$eSign = _props$data47.eSign) === null || _props$data47$eSign === void 0 ? void 0 : (_props$data47$eSign$s = _props$data47$eSign.signature) === null || _props$data47$eSign$s === void 0 ? void 0 : _props$data47$eSign$s.width) || "",
                    height: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$eSign = _props$data48.eSign) === null || _props$data48$eSign === void 0 ? void 0 : (_props$data48$eSign$s = _props$data48$eSign.signature) === null || _props$data48$eSign$s === void 0 ? void 0 : _props$data48$eSign$s.height) || "",
                    margin: {
                      top: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$eSign = _props$data49.eSign) === null || _props$data49$eSign === void 0 ? void 0 : (_props$data49$eSign$s = _props$data49$eSign.signature) === null || _props$data49$eSign$s === void 0 ? void 0 : (_props$data49$eSign$s2 = _props$data49$eSign$s.margin) === null || _props$data49$eSign$s2 === void 0 ? void 0 : _props$data49$eSign$s2.top) || "",
                      left: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$eSign = _props$data50.eSign) === null || _props$data50$eSign === void 0 ? void 0 : (_props$data50$eSign$s = _props$data50$eSign.signature) === null || _props$data50$eSign$s === void 0 ? void 0 : (_props$data50$eSign$s2 = _props$data50$eSign$s.margin) === null || _props$data50$eSign$s2 === void 0 ? void 0 : _props$data50$eSign$s2.left) || ""
                    }
                  }
                }
              },
              footer: {
                text: ((_props$footer = props.footer) === null || _props$footer === void 0 ? void 0 : _props$footer.text) || ""
              },
              pageEnable: props.pageEnable || false,
              pageLabel: props.pageLabel || "Page"
            };

            splitTextAndGetHeight = function splitTextAndGetHeight(text, size) {
              var lines = doc.splitTextToSize(text, size);
              return {
                text: lines,
                height: doc.getTextDimensions(lines).h
              };
            };

            if (!(param.data.table && param.data.table.length)) {
              _context.next = 5;
              break;
            }

            if (!(param.data.table[0].length != param.data.header.length)) {
              _context.next = 5;
              break;
            }

            throw Error("Length of header and table column must be equal.");

          case 5:
            options = {
              orientation: param.orientationLandscape ? "landscape" : ""
            };
            doc = new _jspdf.jsPDF(options);
            pageWidth = doc.getPageWidth();
            pageHeight = doc.getPageHeight() - 25; //25 is bottom margin

            docWidth = doc.internal.pageSize.width;
            docHeight = doc.internal.pageSize.height;
            colorBlack = "#000000";
            colorBlue = "#3367d6";
            colorGray = "#4d4e53";
            lightGray = "#888888";
            FONT_TYPE_NORMAL = "normal";
            FONT_TYPE_BOLD = "bold";
            ALIGN_RIGHT = "right";
            ALIGN_CENTER = "center";
            ISSUER_ADDRESS_LABEL = 'Company Adress';
            IMAGE_CONTENT_TYPE = 'PNG'; //starting at 15mm

            currentHeight = 15;
            pdfConfig = {
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
              doc.addImage(param.logo.src, IMAGE_CONTENT_TYPE, 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
            }

            if (param.business.taxNumber) {
              currentHeight += pdfConfig.subLineHeight + 2;
              doc.setFontSize(pdfConfig.labelTextSize);
              doc.setTextColor(colorBlue);
              doc.text(docWidth - 10, currentHeight, param.business.taxNumber, ALIGN_RIGHT);
              currentHeight += pdfConfig.subLineHeight;
            }

            doc.setTextColor(colorBlack); // IRP QR code
            // If QR code is availble, align issuer address to left. Else keep in right.

            IRPQrCode = (_param$data = param.data) === null || _param$data === void 0 ? void 0 : (_param$data$indiaIRP = _param$data.indiaIRP) === null || _param$data$indiaIRP === void 0 ? void 0 : _param$data$indiaIRP.qrCode;

            if (!IRPQrCode) {
              _context.next = 47;
              break;
            }

            _context.next = 34;
            return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
              var qrBase64 = imagebase64;
              doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
              currentHeight += pdfConfig.fieldTextSize;
            })["catch"](function (err) {
              console.error(err);
            });

          case 34:
            if (param !== null && param !== void 0 && (_param$business = param.business) !== null && _param$business !== void 0 && _param$business.address) {
              doc.setFontSize(pdfConfig.fieldTextSize);
              doc.text(10, currentHeight, ISSUER_ADDRESS_LABEL);
            }

            currentHeight += pdfConfig.subLineHeight;
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            doc.text(10, currentHeight, param.business.address);
            currentHeight += pdfConfig.subLineHeight;
            doc.text(10, currentHeight, param.business.addressLine2);
            currentHeight += pdfConfig.subLineHeight;

            if (param.business.addressLine3) {
              doc.text(10, currentHeight, param.business.addressLine3);
              currentHeight += pdfConfig.subLineHeight;
            }

            doc.text(10, currentHeight, param.business.country);
            currentHeight += pdfConfig.subLineHeight;
            doc.text(10, currentHeight, param.business.email_1);
            _context.next = 58;
            break;

          case 47:
            if (param !== null && param !== void 0 && (_param$business2 = param.business) !== null && _param$business2 !== void 0 && _param$business2.address) {
              currentHeight += pdfConfig.lineHeight;
              doc.setFontSize(pdfConfig.fieldTextSize);
              doc.text(docWidth - 10, currentHeight, ISSUER_ADDRESS_LABEL, ALIGN_RIGHT);
            }

            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            currentHeight += pdfConfig.subLineHeight;
            doc.text(docWidth - 10, currentHeight, param.business.address, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
            doc.text(docWidth - 10, currentHeight, param.business.addressLine2, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;

            if (param.business.addressLine3) {
              doc.text(docWidth - 10, currentHeight, param.business.addressLine3, ALIGN_RIGHT);
              currentHeight += pdfConfig.subLineHeight;
            }

            doc.text(docWidth - 10, currentHeight, param.business.country, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
            doc.text(docWidth - 10, currentHeight, param.business.email_1, ALIGN_RIGHT);

          case 58:
            doc.setTextColor(colorGray); //line breaker after logo & business info

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

            if ((_param$contact = param.contact) !== null && _param$contact !== void 0 && _param$contact.taxNumber) {
              doc.setFontSize(pdfConfig.fieldTextSize);
              doc.setTextColor(colorBlue);
              doc.text(10, currentHeight, param.contact.taxNumber);
            }

            doc.setTextColor(colorGray);
            doc.setFontSize(pdfConfig.fieldTextSize);

            if ((_param$data2 = param.data) !== null && _param$data2 !== void 0 && (_param$data2$indiaIRP = _param$data2.indiaIRP) !== null && _param$data2$indiaIRP !== void 0 && _param$data2$indiaIRP.irn) {
              doc.setFontSize(pdfConfig.fieldTextSize);
              doc.setTextColor(colorBlue);
              doc.text(docWidth - 10, currentHeight, "IRN: ".concat((_param$data3 = param.data) === null || _param$data3 === void 0 ? void 0 : _param$data3.indiaIRP.irn), ALIGN_RIGHT);
            }

            if ((_param$contact2 = param.contact) !== null && _param$contact2 !== void 0 && _param$contact2.taxNumber || (_param$data4 = param.data) !== null && _param$data4 !== void 0 && (_param$data4$indiaIRP = _param$data4.indiaIRP) !== null && _param$data4$indiaIRP !== void 0 && _param$data4$indiaIRP.irn) currentHeight += pdfConfig.lineHeight;

            if ((_param$contact3 = param.contact) !== null && _param$contact3 !== void 0 && (_param$contact3$billi = _param$contact3.billingAddress) !== null && _param$contact3$billi !== void 0 && _param$contact3$billi.label || param.data.date1) {
              doc.setTextColor(colorBlack);
              billingAddressLabel = (_param$contact4 = param.contact) === null || _param$contact4 === void 0 ? void 0 : _param$contact4.billingAddress.label;
              shippingAddressLabel = (_param$contact5 = param.contact) === null || _param$contact5 === void 0 ? void 0 : _param$contact5.shippingAddress.label;
              doc.text(10, currentHeight, billingAddressLabel);
              doc.text(pageWidth / 3, currentHeight, shippingAddressLabel);
              doc.setFontSize(pdfConfig.fieldTextSize - 2);

              if ((_param$data5 = param.data) !== null && _param$data5 !== void 0 && _param$data5.netTerm || (_param$data6 = param.data) !== null && _param$data6 !== void 0 && _param$data6.netTermLabel) {
                doc.text(docWidth - 70, currentHeight, param.data.date1Label, ALIGN_RIGHT);
                doc.text(docWidth - 40, currentHeight, param.data.netTermLabel, ALIGN_RIGHT);
              } else {
                doc.text(docWidth - 40, currentHeight, param.data.date1Label, ALIGN_RIGHT);
              }

              doc.text(docWidth - 10, currentHeight, param.data.date2Label, ALIGN_RIGHT);
              currentHeight += pdfConfig.subLineHeight;
            }

            if ((_param$contact6 = param.contact) !== null && _param$contact6 !== void 0 && (_param$contact6$billi = _param$contact6.billingAddress) !== null && _param$contact6$billi !== void 0 && _param$contact6$billi.label || param.data.date1) {
              billingAddress = splitTextAndGetHeight((_param$contact7 = param.contact) === null || _param$contact7 === void 0 ? void 0 : _param$contact7.billingAddress.address, pageWidth / 3 - 25);
              shippingAddress = splitTextAndGetHeight((_param$contact8 = param.contact) === null || _param$contact8 === void 0 ? void 0 : _param$contact8.shippingAddress.address, pageWidth / 3 - 25);
              doc.text(10, currentHeight, billingAddress.text);
              doc.text(pageWidth / 3, currentHeight, shippingAddress.text);
              doc.setFontSize(pdfConfig.fieldTextSize - 2);

              if ((_param$data7 = param.data) !== null && _param$data7 !== void 0 && _param$data7.netTerm || (_param$data8 = param.data) !== null && _param$data8 !== void 0 && _param$data8.netTermLabel) {
                doc.text(docWidth - 70, currentHeight, param.data.date1, ALIGN_RIGHT);
                doc.text(docWidth - 40, currentHeight, param.data.netTerm, ALIGN_RIGHT);
              } else {
                doc.text(docWidth - 40, currentHeight, param.data.date1, ALIGN_RIGHT);
              }

              doc.text(docWidth - 10, currentHeight, param.data.date2, ALIGN_RIGHT);
              currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
            }

            if ((_param$contact9 = param.contact) !== null && _param$contact9 !== void 0 && _param$contact9.billingAddress.addressLine1 || param.data.date2) {
              _billingAddress = splitTextAndGetHeight((_param$contact10 = param.contact) === null || _param$contact10 === void 0 ? void 0 : _param$contact10.billingAddress.addressLine2, pageWidth / 3 - 25);
              _shippingAddress = splitTextAndGetHeight((_param$contact11 = param.contact) === null || _param$contact11 === void 0 ? void 0 : _param$contact11.shippingAddress.addressLine2, pageWidth / 3 - 25);
              doc.text(10, currentHeight, _billingAddress.text);
              doc.text(pageWidth / 3, currentHeight, _shippingAddress.text);
              doc.setFontSize(pdfConfig.fieldTextSize - 2);
              currentHeight += _billingAddress.height > _shippingAddress.height ? _billingAddress.height : _shippingAddress.height;
            }

            if ((_param$contact12 = param.contact) !== null && _param$contact12 !== void 0 && _param$contact12.billingAddress.addressLine3) {
              _billingAddress2 = splitTextAndGetHeight((_param$contact13 = param.contact) === null || _param$contact13 === void 0 ? void 0 : _param$contact13.billingAddress.addressLine3, pageWidth / 3 - 25);
              _shippingAddress2 = splitTextAndGetHeight((_param$contact14 = param.contact) === null || _param$contact14 === void 0 ? void 0 : _param$contact14.shippingAddress.addressLine3, pageWidth / 3 - 25);
              doc.text(10, currentHeight, _billingAddress2.text);
              doc.text(pageWidth / 3, currentHeight, _shippingAddress2.text);
              currentHeight += _billingAddress2.height > _shippingAddress2.height ? _billingAddress2.height : _shippingAddress2.height;
            }

            if (param.contact.billingAddress.country || param.contact.shippingAddress.country) {
              doc.text(10, currentHeight, param.contact.billingAddress.country);
              doc.text(pageWidth / 3, currentHeight, param.contact.shippingAddress.country);
            } else currentHeight -= pdfConfig.subLineHeight; //end contact part
            //TABLE PART


            tdWidth = (pageWidth - 20) / param.data.header.length;

            addTableHeaderBoarder = function addTableHeaderBoarder() {
              currentHeight += 2;

              for (var i = 0; i < param.data.header.length; i++) {
                doc.setFont(undefined, FONT_TYPE_BOLD);
                if (i === 0) doc.rect(10, currentHeight, tdWidth, 7);else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, 7);
              }

              currentHeight -= 2;
            };

            addTableBodyBoarder = function addTableBodyBoarder(lineHeight) {
              for (var i = 0; i < param.data.header.length; i++) {
                if (i === 0) doc.rect(10, currentHeight, tdWidth, lineHeight);else doc.rect(tdWidth * i + 10, currentHeight, tdWidth, lineHeight);
              }
            };

            addTableHeader = function addTableHeader() {
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

            tableBodyLength = param.data.table.length;
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
            currentHeight += pdfConfig.lineHeight;

            if (param.data.subTotal || param.data.row1 || param.data.row2 || param.data.total) {
              if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
                doc.addPage();
                currentHeight = 10;
              }
            } //line breaker before invoce total


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
              for (i = 1; i <= doc.getNumberOfPages(); i++) {
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
              staticVAContent = "Account Name: ".concat(param.business.name, "\nBank Name: ").concat(param.data.staticVA.bank, "\nAccount Number: ").concat(param.data.staticVA.account);
              paymentDetails = splitTextAndGetHeight(staticVAContent, pageWidth - 40);

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
            } // E signature


            if ((_param$data9 = param.data) !== null && _param$data9 !== void 0 && (_param$data9$eSign = _param$data9.eSign) !== null && _param$data9$eSign !== void 0 && (_param$data9$eSign$si = _param$data9$eSign.signature) !== null && _param$data9$eSign$si !== void 0 && _param$data9$eSign$si.src) {
              if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
                doc.addPage();
                currentHeight = 10;
              }

              doc.addImage((_param$data10 = param.data) === null || _param$data10 === void 0 ? void 0 : (_param$data10$eSign = _param$data10.eSign) === null || _param$data10$eSign === void 0 ? void 0 : (_param$data10$eSign$s = _param$data10$eSign.signature) === null || _param$data10$eSign$s === void 0 ? void 0 : _param$data10$eSign$s.src, IMAGE_CONTENT_TYPE, docWidth - 65, currentHeight, (_param$data11 = param.data) === null || _param$data11 === void 0 ? void 0 : (_param$data11$eSign = _param$data11.eSign) === null || _param$data11$eSign === void 0 ? void 0 : (_param$data11$eSign$s = _param$data11$eSign.signature) === null || _param$data11$eSign$s === void 0 ? void 0 : _param$data11$eSign$s.width, (_param$data12 = param.data) === null || _param$data12 === void 0 ? void 0 : (_param$data12$eSign = _param$data12.eSign) === null || _param$data12$eSign === void 0 ? void 0 : (_param$data12$eSign$s = _param$data12$eSign.signature) === null || _param$data12$eSign$s === void 0 ? void 0 : _param$data12$eSign$s.height);
              currentHeight += pdfConfig.headerTextSize;
              doc.setFontSize(pdfConfig.labelTextSize - 2);
              doc.setTextColor(colorBlack);

              if ((_param$data13 = param.data) !== null && _param$data13 !== void 0 && (_param$data13$eSign = _param$data13.eSign) !== null && _param$data13$eSign !== void 0 && _param$data13$eSign.authorizer) {
                currentHeight += pdfConfig.lineHeight;
                doc.text(docWidth - 10, currentHeight, "".concat((_param$data14 = param.data) === null || _param$data14 === void 0 ? void 0 : (_param$data14$eSign = _param$data14.eSign) === null || _param$data14$eSign === void 0 ? void 0 : _param$data14$eSign.authorizer, ","), ALIGN_RIGHT);
              }

              currentHeight += pdfConfig.subLineHeight;
              doc.text(docWidth - 10, currentHeight, "".concat((_param$data15 = param.data) === null || _param$data15 === void 0 ? void 0 : (_param$data15$eSign = _param$data15.eSign) === null || _param$data15$eSign === void 0 ? void 0 : _param$data15$eSign.approverText, " ").concat((_param$data16 = param.data) === null || _param$data16 === void 0 ? void 0 : (_param$data16$eSign = _param$data16.eSign) === null || _param$data16$eSign === void 0 ? void 0 : _param$data16$eSign.approverName, ","), ALIGN_RIGHT);
              currentHeight += pdfConfig.subLineHeight;
              doc.text(docWidth - 10, currentHeight, "at ".concat((_param$data17 = param.data) === null || _param$data17 === void 0 ? void 0 : (_param$data17$eSign = _param$data17.eSign) === null || _param$data17$eSign === void 0 ? void 0 : _param$data17$eSign.approvedAt, "."), ALIGN_RIGHT);
            } // Note 


            if (param.data.note) {
              currentHeight += pdfConfig.labelTextSize;
              noteData = splitTextAndGetHeight(param.data.note, pageWidth - 40);

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

            addDesc = function addDesc() {
              var _param$data18;

              doc.setFontSize(pdfConfig.labelTextSize - 2);
              doc.setTextColor(colorBlack);

              if (((_param$data18 = param.data) === null || _param$data18 === void 0 ? void 0 : _param$data18.desc.length) > 0) {
                var _param$data19, _param$data19$desc;

                currentHeight += 1;
                (_param$data19 = param.data) === null || _param$data19 === void 0 ? void 0 : (_param$data19$desc = _param$data19.desc) === null || _param$data19$desc === void 0 ? void 0 : _param$data19$desc.forEach(function (el, index) {
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

            if (((_param$data20 = param.data) === null || _param$data20 === void 0 ? void 0 : (_param$data20$desc = _param$data20.desc) === null || _param$data20$desc === void 0 ? void 0 : _param$data20$desc.length) > 0) addDesc(); //add num of page at the bottom

            if (doc.getNumberOfPages() === 1 && param.pageEnable) {
              doc.setFontSize(pdfConfig.fieldTextSize - 2);
              doc.setTextColor(colorGray);
              doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
              doc.text(param.pageLabel + "1 / 1", docWidth - 20, doc.internal.pageSize.height - 6);
            }

            returnObj = {
              pagesNumber: doc.getNumberOfPages()
            };

            if (param.returnJsPDFDocObject) {
              returnObj = _objectSpread(_objectSpread({}, returnObj), {}, {
                jsPDFDocObject: doc
              });
            }

            if (param.outputType === OutputType.Save) doc.save(param.fileName);else if (param.outputType === OutputType.Blob) {
              blobOutput = doc.output(OutputType.Blob);
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
            return _context.abrupt("return", returnObj);

          case 119:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}

var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJpbmRpYUlSUCIsInFyQ29kZSIsImlybiIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJwYWdlV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZ2V0UGFnZUhlaWdodCIsImRvY1dpZHRoIiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJJUlBRckNvZGUiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJiaWxsaW5nQWRkcmVzc0xhYmVsIiwic2hpcHBpbmdBZGRyZXNzTGFiZWwiLCJhZGRyZXNzTGluZTEiLCJ0ZFdpZHRoIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiaSIsInNldEZvbnQiLCJ1bmRlZmluZWQiLCJyZWN0IiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwic2V0RHJhd0NvbG9yIiwiZm9yRWFjaCIsInJvdyIsImluZGV4Iiwic2V0TGluZVdpZHRoIiwidGFibGVCb2R5TGVuZ3RoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIml0ZW0iLCJ0b1N0cmluZyIsInB1c2giLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJ0b0xvY2FsZVN0cmluZyIsInNldFBhZ2UiLCJzdGF0aWNWQUNvbnRlbnQiLCJiYW5rIiwiYWNjb3VudCIsInBheW1lbnREZXRhaWxzIiwibm90ZURhdGEiLCJhZGREZXNjIiwiZWwiLCJyZXR1cm5PYmoiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsImJsb2JPdXRwdXQiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLElBQUksRUFBRSxNQURXO0FBQ0g7QUFDZEMsRUFBQUEsYUFBYSxFQUFFLGVBRkU7QUFFZTtBQUNoQ0MsRUFBQUEsT0FBTyxFQUFFLFNBSFE7QUFHRztBQUNwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBSkQ7QUFJcUI7QUFDdENDLEVBQUFBLElBQUksRUFBRSxNQUxXO0FBS0g7QUFDZEMsRUFBQUEsV0FBVyxFQUFFLGFBTkksQ0FNVzs7QUFOWCxDQUFuQjs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LE1BQUosQ0FBVzFLLFVBQVUsQ0FBQ0UsYUFBdEIsRUFBcUM7QUFDbEQySyxrQkFBQUEsUUFBUSxFQUFFcEssS0FBSyxDQUFDRztBQURrQyxpQkFBckM7QUFGUixnQkFBVDtBQU1ELGFBUE0sTUFPQSxJQUFJSCxLQUFLLENBQUNDLFVBQU4sS0FBcUJWLFVBQVUsQ0FBQ00sV0FBcEMsRUFBaUQ7QUFDdEQrSixjQUFBQSxTQUFTLG1DQUNKQSxTQURJO0FBRVBTLGdCQUFBQSxXQUFXLEVBQUU3RixHQUFHLENBQUN5RixNQUFKLENBQVcxSyxVQUFVLENBQUNNLFdBQXRCO0FBRk4sZ0JBQVQ7QUFJRCxhQUxNLE1BTUwyRSxHQUFHLENBQUN5RixNQUFKLENBQVdqSyxLQUFLLENBQUNDLFVBQWpCLEVBQTZCO0FBQzNCbUssY0FBQUEsUUFBUSxFQUFFcEssS0FBSyxDQUFDRztBQURXLGFBQTdCO0FBcHdCSiw2Q0F3d0JTeUosU0F4d0JUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7ZUEyd0JlOUosb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnXG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUnXG5cbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nXG4gKiAgICAgIH0sXG4gKiAgICAgIGVTaWduPzoge1xuICogICAgICAgICAgYXBwcm92ZXJOYW1lPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZWRBdD86IHN0cmluZyxcbiAqICAgICAgICAgIGF1dGhvcml6ZXI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlclRleHQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBzaWduYXR1cmU/OiB7XG4gKiAgICAgICAgICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICAgICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICAgICAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgICAgICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgIH0sICAgICBcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICBpbmRpYUlSUDoge1xuICAgICAgICBxckNvZGU6IHByb3BzLmRhdGE/LmluZGlhSVJQPy5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgaXJuOiBwcm9wcy5kYXRhPy5pbmRpYUlSUD8uaXJuIHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCBcIlwiLFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IGZhbHNlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCJcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiXG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiXG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCJcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCJcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIlxuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9ICdDb21wYW55IEFkcmVzcydcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gJ1BORydcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgQUxJR05fUklHSFQpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG5cbiAgaWYocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIC8vIElSUCBRUiBjb2RlXG4gICAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICAgIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gICAgaWYgKElSUFFyQ29kZSkge1xuICAgICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG4gIFxuICAgICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgICAzMCxcbiAgICAgICAgICAgIDMwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSlcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgXG4gICAgICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuICAgICAgXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpXG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgICB9XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIFxuICAgICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIH1cbiAgICBcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcbiAgICBcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubmFtZSlcbiAgfTtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgICBpZihwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICAgIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmluZGlhSVJQPy5pcm4pIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYElSTjogJHtwYXJhbS5kYXRhPy5pbmRpYUlSUC5pcm59YCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyIHx8IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5pcm4pXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbFxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIH1lbHNle1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHRcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgcGFyYW0uZGF0YS5kYXRlMSkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcywgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfWVsc2V7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMiwgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fCBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5KSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpO1xuICB9XG4gIGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgICBlbHNlIGRvYy5yZWN0KHRkV2lkdGggKiBpICsgMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KHJvdywgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MudGV4dChyb3csIGluZGV4ICogdGRXaWR0aCArIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChyci50b1N0cmluZygpLCB0ZFdpZHRoIC0gMSk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBpZiAoaW5kZXggPT0gMCkgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSwgY3VycmVudEhlaWdodCArIDQpO1xuICAgICAgZWxzZSBkb2MudGV4dChpdGVtLnRleHQsIDExICsgaW5kZXggKiB0ZFdpZHRoLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IChwYWdlSGVpZ2h0IC0gMTApICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoJ05vIERhdGEnLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAocGFnZUhlaWdodCAtIDEwKSAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCwgQUxJR05fUklHSFQpO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSwgQUxJR05fUklHSFQpO1xuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICBcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdSZXF1ZXN0ZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdBdXRob3Jpc2VkIEJ5Jyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBcbiAgICAgIGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gXG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoc3RhdGljVkFDb250ZW50LCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnUGF5bWVudCBkZXRhaWxzJyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAocGFnZUhlaWdodCAtIDEwKSAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuXG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsIEFMSUdOX1JJR0hUKTtcbiAgICBcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGBhdCAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICAvLyBOb3RlIFxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIChwYWdlV2lkdGggLSA0MCkpXG4gIFxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdOb3RlJyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCAocGFnZVdpZHRoIC0gNDApKVxuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBkZXNjLmhlaWdodDtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdfQ==