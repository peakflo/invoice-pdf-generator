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

            if ((_param$contact3 = param.contact) !== null && _param$contact3 !== void 0 && (_param$contact3$billi = _param$contact3.billingAddress.address) !== null && _param$contact3$billi !== void 0 && _param$contact3$billi.label || param.data.date1) {
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

            if ((_param$contact6 = param.contact) !== null && _param$contact6 !== void 0 && (_param$contact6$billi = _param$contact6.billingAddress.address) !== null && _param$contact6$billi !== void 0 && _param$contact6$billi.label || param.data.date1) {
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

          case 118:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJpbmRpYUlSUCIsInFyQ29kZSIsImlybiIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwianNQREYiLCJwYWdlV2lkdGgiLCJnZXRQYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZ2V0UGFnZUhlaWdodCIsImRvY1dpZHRoIiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImhlYWRlclRleHRTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJJUlBRckNvZGUiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJiaWxsaW5nQWRkcmVzc0xhYmVsIiwic2hpcHBpbmdBZGRyZXNzTGFiZWwiLCJhZGRyZXNzTGluZTEiLCJ0ZFdpZHRoIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiaSIsInNldEZvbnQiLCJ1bmRlZmluZWQiLCJyZWN0IiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwic2V0RHJhd0NvbG9yIiwiZm9yRWFjaCIsInJvdyIsImluZGV4Iiwic2V0TGluZVdpZHRoIiwidGFibGVCb2R5TGVuZ3RoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIml0ZW0iLCJ0b1N0cmluZyIsInB1c2giLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJ0b0xvY2FsZVN0cmluZyIsInNldFBhZ2UiLCJzdGF0aWNWQUNvbnRlbnQiLCJiYW5rIiwiYWNjb3VudCIsInBheW1lbnREZXRhaWxzIiwibm90ZURhdGEiLCJhZGREZXNjIiwiZWwiLCJyZXR1cm5PYmoiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsImJsb2JPdXRwdXQiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLElBQUksRUFBRSxNQURXO0FBQ0g7QUFDZEMsRUFBQUEsYUFBYSxFQUFFLGVBRkU7QUFFZTtBQUNoQ0MsRUFBQUEsT0FBTyxFQUFFLFNBSFE7QUFHRztBQUNwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBSkQ7QUFJcUI7QUFDdENDLEVBQUFBLElBQUksRUFBRSxNQUxXO0FBS0g7QUFDZEMsRUFBQUEsV0FBVyxFQUFFLGFBTkksQ0FNVzs7QUFOWCxDQUFuQjs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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anNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlJ1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgY3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjPzogc3RyaW5nW10sXG4gKiAgICAgICBjcmVkaXROb3RlTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBub3RlPzogc3RyaW5nLFxuICogICAgICAgcmVxdWVzdGVkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZ1xuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LCAgICAgXG4gKiAgICAgIH0sXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRheE51bWJlcjogcHJvcHMuY29udGFjdD8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgIGlybjogcHJvcHMuZGF0YT8uaW5kaWFJUlA/LmlybiB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgXCJcIixcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCBmYWxzZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiXG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIlxuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIlxuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiXG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiXG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCJcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSAnQ29tcGFueSBBZHJlc3MnXG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9ICdQTkcnXG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuXG4gIGlmKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlciwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICAvLyBJUlAgUVIgY29kZVxuICAgIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICAgIGlmIChJUlBRckNvZGUpIHtcbiAgICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuICBcbiAgICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAzMFxuICAgICAgICAgICk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpXG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIFxuICAgICAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcbiAgICAgIFxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgICAgfVxuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBcbiAgICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICB9XG4gICAgXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG4gICAgXG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICAgIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gICAgaWYocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5kYXRhPy5pbmRpYUlSUD8uaXJuKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBJUk46ICR7cGFyYW0uZGF0YT8uaW5kaWFJUlAuaXJufWAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlciB8fCBwYXJhbS5kYXRhPy5pbmRpYUlSUD8uaXJuKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3M/LmxhYmVsIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbFxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpe1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIH1lbHNle1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHRcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzPy5sYWJlbCB8fCBwYXJhbS5kYXRhLmRhdGUxKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcywgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZihwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCl7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoLzMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGgvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8IHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnkpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGgvMywgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSk7XG4gIH1cbiAgZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID0gKHBhZ2VXaWR0aCAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgNyk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIGRvYy5yZWN0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnJlY3QodGRXaWR0aCAqIGkgKyAxMCwgY3VycmVudEhlaWdodCwgdGRXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT0gMCkgZG9jLnRleHQocm93LCAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KHJvdywgaW5kZXggKiB0ZFdpZHRoICsgMTEsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTsgXG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChyci50b1N0cmluZygpLCB0ZFdpZHRoIC0gMSk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChpdGVtLnRleHQsIDExLCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgICBlbHNlIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEgKyBpbmRleCAqIHRkV2lkdGgsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gKHBhZ2VIZWlnaHQgLSAxMCkgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICBcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7IFxuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dCgnTm8gRGF0YScsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG5cblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8XG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7IFxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLCBBTElHTl9SSUdIVCk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLCBBTElHTl9SSUdIVCk7XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVClcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgIFxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ1JlcXVlc3RlZCBCeScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ0F1dGhvcmlzZWQgQnknKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHRcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IFxuICAgICAgYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWBcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChzdGF0aWNWQUNvbnRlbnQsIChwYWdlV2lkdGggLSA0MCkpXG4gIFxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsICdQYXltZW50IGRldGFpbHMnKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLCBBTElHTl9SSUdIVCk7XG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBgYXQgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgKHBhZ2VXaWR0aCAtIDQwKSlcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgZGVzYy5oZWlnaHQ7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=