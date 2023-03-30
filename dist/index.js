"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("regenerator-runtime");

var _jspdf = require("jspdf");

var _qrcode = _interopRequireDefault(require("qrcode"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  _jsPDFInvoiceTemplate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(props) {
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data23$row, _props$data24, _props$data24$row, _props$data25, _props$data25$row, _props$data26, _props$data26$row, _props$data26$row$sty, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$total, _props$data32, _props$data32$total, _props$data33, _props$data33$total, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$amountD, _props$data36, _props$data36$amountD, _props$data37, _props$data37$amountD, _props$data38, _props$data38$amountD, _props$data38$amountD2, _props$data39, _props$data40, _props$data40$indiaIR, _props$data41, _props$data41$indiaIR, _props$data42, _props$data42$eSign, _props$data43, _props$data43$eSign, _props$data44, _props$data44$eSign, _props$data45, _props$data45$eSign, _props$data46, _props$data46$eSign, _props$data46$eSign$s, _props$data47, _props$data47$eSign, _props$data47$eSign$s, _props$data48, _props$data48$eSign, _props$data48$eSign$s, _props$data49, _props$data49$eSign, _props$data49$eSign$s, _props$data49$eSign$s2, _props$data50, _props$data50$eSign, _props$data50$eSign$s, _props$data50$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$data2, _param$data2$indiaIRP, _param$contact2, _param$data4, _param$data4$indiaIRP, _param$contact3, _param$contact3$billi, _param$contact6, _param$contact6$billi, _param$contact9, _param$contact12, _param$data9, _param$data9$eSign, _param$data9$eSign$si, _param$data20, _param$data20$desc;

    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, _param$data3, _param$contact4, _param$contact5, _param$data5, _param$data6, billingAddressLabel, shippingAddressLabel, _param$contact7, _param$contact8, _param$data7, _param$data8, billingAddress, shippingAddress, _param$contact10, _param$contact11, _billingAddress, _shippingAddress, _param$contact13, _param$contact14, _billingAddress2, _shippingAddress2, tdWidth, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, i, staticVAContent, paymentDetails, _param$data10, _param$data10$eSign, _param$data10$eSign$s, _param$data11, _param$data11$eSign, _param$data11$eSign$s, _param$data12, _param$data12$eSign, _param$data12$eSign$s, _param$data13, _param$data13$eSign, _param$data15, _param$data15$eSign, _param$data16, _param$data16$eSign, _param$data17, _param$data17$eSign, _param$data14, _param$data14$eSign, noteData, addDesc, returnObj, blobOutput;

    return _regenerator["default"].wrap(function _callee$(_context) {
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
              orientation: param.orientationLandscape ? "landscape" : "",
              compressPdf: true
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
              doc.text(docWidth - 10, currentHeight, "on ".concat((_param$data17 = param.data) === null || _param$data17 === void 0 ? void 0 : (_param$data17$eSign = _param$data17.eSign) === null || _param$data17$eSign === void 0 ? void 0 : _param$data17$eSign.approvedAt, "."), ALIGN_RIGHT);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdXRwdXRUeXBlIiwiU2F2ZSIsIkRhdGFVcmlTdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVybE5ld1dpbmRvdyIsIkJsb2IiLCJBcnJheUJ1ZmZlciIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwicHJvcHMiLCJwYXJhbSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJkYXRhIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJoZWFkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJpbmRpYUlSUCIsInFyQ29kZSIsImlybiIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsInNpemUiLCJsaW5lcyIsImRvYyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsImxlbmd0aCIsIkVycm9yIiwib3B0aW9ucyIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJqc1BERiIsInBhZ2VXaWR0aCIsImdldFBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJnZXRQYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIklSUFFyQ29kZSIsIlFSQ29kZSIsInRvRGF0YVVSTCIsInRoZW4iLCJpbWFnZWJhc2U2NCIsInFyQmFzZTY0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGluZSIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsImFkZHJlc3NMaW5lMSIsInRkV2lkdGgiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJpIiwic2V0Rm9udCIsInVuZGVmaW5lZCIsInJlY3QiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJzZXREcmF3Q29sb3IiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJzZXRMaW5lV2lkdGgiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiaXRlbSIsInRvU3RyaW5nIiwicHVzaCIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwic2V0UGFnZSIsInN0YXRpY1ZBQ29udGVudCIsImJhbmsiLCJhY2NvdW50IiwicGF5bWVudERldGFpbHMiLCJub3RlRGF0YSIsImFkZERlc2MiLCJlbCIsInJldHVybk9iaiIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwiYmxvYk91dHB1dCIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFDSDtBQUNkQyxFQUFBQSxhQUFhLEVBQUUsZUFGRTtBQUVlO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUsU0FIUTtBQUdHO0FBQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFKRDtBQUlxQjtBQUN0Q0MsRUFBQUEsSUFBSSxFQUFFLE1BTFc7QUFLSDtBQUNkQyxFQUFBQSxXQUFXLEVBQUUsYUFOSSxDQU1XOztBQU5YLENBQW5COzs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1NBQ2VDLG9COzs7Ozt3R0FBZixpQkFBb0NDLEtBQXBDO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsWUFBQUEsS0FEUixHQUNnQjtBQUNaQyxjQUFBQSxVQUFVLEVBQUVGLEtBQUssQ0FBQ0UsVUFBTixJQUFvQlYsVUFBVSxDQUFDQyxJQUQvQjtBQUVaVSxjQUFBQSxvQkFBb0IsRUFBRUgsS0FBSyxDQUFDRyxvQkFBTixJQUE4QixLQUZ4QztBQUdaQyxjQUFBQSxRQUFRLEVBQUVKLEtBQUssQ0FBQ0ksUUFBTixJQUFrQixFQUhoQjtBQUlaQyxjQUFBQSxvQkFBb0IsRUFBRUwsS0FBSyxDQUFDSyxvQkFBTixJQUE4QixLQUp4QztBQUtaQyxjQUFBQSxJQUFJLEVBQUU7QUFDSkMsZ0JBQUFBLEdBQUcsRUFBRSxnQkFBQVAsS0FBSyxDQUFDTSxJQUFOLDREQUFZQyxHQUFaLEtBQW1CLEVBRHBCO0FBRUpDLGdCQUFBQSxLQUFLLEVBQUUsaUJBQUFSLEtBQUssQ0FBQ00sSUFBTiw4REFBWUUsS0FBWixLQUFxQixFQUZ4QjtBQUdKQyxnQkFBQUEsTUFBTSxFQUFFLGlCQUFBVCxLQUFLLENBQUNNLElBQU4sOERBQVlHLE1BQVosS0FBc0IsRUFIMUI7QUFJSkMsZ0JBQUFBLE1BQU0sRUFBRTtBQUNOQyxrQkFBQUEsR0FBRyxFQUFFLGlCQUFBWCxLQUFLLENBQUNNLElBQU4scUZBQVlJLE1BQVosNEVBQW9CQyxHQUFwQixLQUEyQixDQUQxQjtBQUVOQyxrQkFBQUEsSUFBSSxFQUFFLGlCQUFBWixLQUFLLENBQUNNLElBQU4scUZBQVlJLE1BQVosNEVBQW9CRSxJQUFwQixLQUE0QjtBQUY1QjtBQUpKLGVBTE07QUFjWkMsY0FBQUEsUUFBUSxFQUFFO0FBQ1JDLGdCQUFBQSxJQUFJLEVBQUUsb0JBQUFkLEtBQUssQ0FBQ2EsUUFBTixvRUFBZ0JDLElBQWhCLEtBQXdCLEVBRHRCO0FBRVJDLGdCQUFBQSxPQUFPLEVBQUUscUJBQUFmLEtBQUssQ0FBQ2EsUUFBTixzRUFBZ0JFLE9BQWhCLEtBQTJCLEVBRjVCO0FBR1JDLGdCQUFBQSxZQUFZLEVBQUUscUJBQUFoQixLQUFLLENBQUNhLFFBQU4sc0VBQWdCRyxZQUFoQixLQUFnQyxFQUh0QztBQUlSQyxnQkFBQUEsWUFBWSxFQUFFLHFCQUFBakIsS0FBSyxDQUFDYSxRQUFOLHNFQUFnQkksWUFBaEIsS0FBZ0MsRUFKdEM7QUFLUkMsZ0JBQUFBLE9BQU8sRUFBRSxxQkFBQWxCLEtBQUssQ0FBQ2EsUUFBTixzRUFBZ0JLLE9BQWhCLEtBQTJCLEVBTDVCO0FBTVJDLGdCQUFBQSxPQUFPLEVBQUUscUJBQUFuQixLQUFLLENBQUNhLFFBQU4sc0VBQWdCTSxPQUFoQixLQUEyQixFQU41QjtBQU9SQyxnQkFBQUEsU0FBUyxFQUFFLHFCQUFBcEIsS0FBSyxDQUFDYSxRQUFOLHNFQUFnQk8sU0FBaEIsS0FBNkI7QUFQaEMsZUFkRTtBQXVCWkMsY0FBQUEsT0FBTyxFQUFFO0FBQ1BDLGdCQUFBQSxLQUFLLEVBQUUsbUJBQUF0QixLQUFLLENBQUNxQixPQUFOLGtFQUFlQyxLQUFmLEtBQXdCLEVBRHhCO0FBRVBSLGdCQUFBQSxJQUFJLEVBQUUsb0JBQUFkLEtBQUssQ0FBQ3FCLE9BQU4sb0VBQWVQLElBQWYsS0FBdUIsRUFGdEI7QUFHUFMsZ0JBQUFBLGNBQWMsRUFBRTtBQUNkRCxrQkFBQUEsS0FBSyxFQUFFLG9CQUFBdEIsS0FBSyxDQUFDcUIsT0FBTiw2RkFBZUUsY0FBZixnRkFBK0JELEtBQS9CLEtBQXdDLEVBRGpDO0FBRWRQLGtCQUFBQSxPQUFPLEVBQUUsb0JBQUFmLEtBQUssQ0FBQ3FCLE9BQU4sNkZBQWVFLGNBQWYsZ0ZBQStCUixPQUEvQixLQUEwQyxFQUZyQztBQUdkQyxrQkFBQUEsWUFBWSxFQUFFLG9CQUFBaEIsS0FBSyxDQUFDcUIsT0FBTiw2RkFBZUUsY0FBZixnRkFBK0JQLFlBQS9CLEtBQStDLEVBSC9DO0FBSWRDLGtCQUFBQSxZQUFZLEVBQUUsb0JBQUFqQixLQUFLLENBQUNxQixPQUFOLDZGQUFlRSxjQUFmLGdGQUErQk4sWUFBL0IsS0FBK0MsRUFKL0M7QUFLZEUsa0JBQUFBLE9BQU8sRUFBRSxvQkFBQW5CLEtBQUssQ0FBQ3FCLE9BQU4sNkZBQWVFLGNBQWYsZ0ZBQStCSixPQUEvQixLQUEwQztBQUxyQyxpQkFIVDtBQVVQSyxnQkFBQUEsZUFBZSxFQUFFO0FBQ2ZGLGtCQUFBQSxLQUFLLEVBQUUsb0JBQUF0QixLQUFLLENBQUNxQixPQUFOLDZGQUFlRyxlQUFmLGdGQUFnQ0YsS0FBaEMsS0FBeUMsRUFEakM7QUFFZlAsa0JBQUFBLE9BQU8sRUFBRSxvQkFBQWYsS0FBSyxDQUFDcUIsT0FBTiw2RkFBZUcsZUFBZixnRkFBZ0NULE9BQWhDLEtBQTJDLEVBRnJDO0FBR2ZDLGtCQUFBQSxZQUFZLEVBQUUscUJBQUFoQixLQUFLLENBQUNxQixPQUFOLCtGQUFlRyxlQUFmLGdGQUFnQ1IsWUFBaEMsS0FBZ0QsRUFIL0M7QUFJZkMsa0JBQUFBLFlBQVksRUFBRSxxQkFBQWpCLEtBQUssQ0FBQ3FCLE9BQU4sK0ZBQWVHLGVBQWYsZ0ZBQWdDUCxZQUFoQyxLQUFnRCxFQUovQztBQUtmRSxrQkFBQUEsT0FBTyxFQUFFLHFCQUFBbkIsS0FBSyxDQUFDcUIsT0FBTiwrRkFBZUcsZUFBZixnRkFBZ0NMLE9BQWhDLEtBQTJDO0FBTHJDLGlCQVZWO0FBaUJQQyxnQkFBQUEsU0FBUyxFQUFFLHFCQUFBcEIsS0FBSyxDQUFDcUIsT0FBTixzRUFBZUQsU0FBZixLQUE0QjtBQWpCaEMsZUF2Qkc7QUEwQ1pLLGNBQUFBLElBQUksRUFBRTtBQUNKSCxnQkFBQUEsS0FBSyxFQUFFLGdCQUFBdEIsS0FBSyxDQUFDeUIsSUFBTiw0REFBWUgsS0FBWixLQUFxQixFQUR4QjtBQUVKSSxnQkFBQUEsYUFBYSxFQUFFLGlCQUFBMUIsS0FBSyxDQUFDeUIsSUFBTiw4REFBWUMsYUFBWixLQUE2QixFQUZ4QztBQUdKQyxnQkFBQUEsVUFBVSxFQUFFLGlCQUFBM0IsS0FBSyxDQUFDeUIsSUFBTiw4REFBWUUsVUFBWixLQUEwQixFQUhsQztBQUlKQyxnQkFBQUEsR0FBRyxFQUFFLGlCQUFBNUIsS0FBSyxDQUFDeUIsSUFBTiw4REFBWUcsR0FBWixLQUFtQixFQUpwQjtBQUtKQyxnQkFBQUEsVUFBVSxFQUFFLGlCQUFBN0IsS0FBSyxDQUFDeUIsSUFBTiw4REFBWUksVUFBWixLQUEwQixFQUxsQztBQU1KQyxnQkFBQUEsWUFBWSxFQUFFLGlCQUFBOUIsS0FBSyxDQUFDeUIsSUFBTiw4REFBWUssWUFBWixLQUE0QixFQU50QztBQU9KQyxnQkFBQUEsS0FBSyxFQUFFLGlCQUFBL0IsS0FBSyxDQUFDeUIsSUFBTiw4REFBWU0sS0FBWixLQUFxQixFQVB4QjtBQVFKQyxnQkFBQUEsS0FBSyxFQUFFLGlCQUFBaEMsS0FBSyxDQUFDeUIsSUFBTiw4REFBWU8sS0FBWixLQUFxQixFQVJ4QjtBQVNKQyxnQkFBQUEsT0FBTyxFQUFFLGlCQUFBakMsS0FBSyxDQUFDeUIsSUFBTiw4REFBWVEsT0FBWixLQUF1QixFQVQ1QjtBQVVKQyxnQkFBQUEsWUFBWSxFQUFFLGtCQUFBbEMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWVMsWUFBWixLQUE0QixLQVZ0QztBQVdKQyxnQkFBQUEsZUFBZSxFQUFFLGtCQUFBbkMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWVUsZUFBWixLQUErQixLQVg1QztBQVlKQyxnQkFBQUEsTUFBTSxFQUFFLGtCQUFBcEMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWVcsTUFBWixLQUFzQixFQVoxQjtBQWFKQyxnQkFBQUEsS0FBSyxFQUFFLGtCQUFBckMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWVksS0FBWixLQUFxQixFQWJ4QjtBQWNKQyxnQkFBQUEsUUFBUSxFQUFFLGtCQUFBdEMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWWEsUUFBWixLQUF3QixFQWQ5QjtBQWVKQyxnQkFBQUEsUUFBUSxFQUFFLGtCQUFBdkMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWWMsUUFBWixLQUF3QixFQWY5QjtBQWdCSkMsZ0JBQUFBLFNBQVMsRUFBRSxrQkFBQXhDLEtBQUssQ0FBQ3lCLElBQU4sZ0VBQVllLFNBQVosS0FBeUIsRUFoQmhDO0FBaUJKQyxnQkFBQUEsV0FBVyxFQUFFLGtCQUFBekMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWWdCLFdBQVosS0FBMkIsRUFqQnBDO0FBa0JKQyxnQkFBQUEsWUFBWSxFQUFFLGtCQUFBMUMsS0FBSyxDQUFDeUIsSUFBTixnRUFBWWlCLFlBQVosS0FBNEIsRUFsQnRDO0FBbUJKQyxnQkFBQUEsUUFBUSxtQkFBRTNDLEtBQUssQ0FBQ3lCLElBQVIsa0RBQUUsY0FBWWtCLFFBbkJsQjtBQW9CSkMsZ0JBQUFBLElBQUksRUFBRSxrQkFBQTVDLEtBQUssQ0FBQ3lCLElBQU4sZ0VBQVltQixJQUFaLEtBQW9CLEVBcEJ0QjtBQXFCSkMsZ0JBQUFBLGVBQWUsRUFBRSxrQkFBQTdDLEtBQUssQ0FBQ3lCLElBQU4sZ0VBQVlvQixlQUFaLEtBQStCLEVBckI1QztBQXNCSkMsZ0JBQUFBLElBQUksRUFBRSxrQkFBQTlDLEtBQUssQ0FBQ3lCLElBQU4sZ0VBQVlxQixJQUFaLEtBQW9CLEVBdEJ0QjtBQXVCSkMsZ0JBQUFBLElBQUksRUFBRTtBQUNKQyxrQkFBQUEsSUFBSSxFQUFFLGtCQUFBaEQsS0FBSyxDQUFDeUIsSUFBTixxRkFBWXNCLElBQVosd0VBQWtCQyxJQUFsQixLQUEwQixFQUQ1QjtBQUVKQyxrQkFBQUEsSUFBSSxFQUFFLGtCQUFBakQsS0FBSyxDQUFDeUIsSUFBTixxRkFBWXNCLElBQVosd0VBQWtCRSxJQUFsQixLQUEwQixFQUY1QjtBQUdKQyxrQkFBQUEsSUFBSSxFQUFFLGtCQUFBbEQsS0FBSyxDQUFDeUIsSUFBTixxRkFBWXNCLElBQVosd0VBQWtCRyxJQUFsQixLQUEwQixFQUg1QjtBQUlKQyxrQkFBQUEsS0FBSyxFQUFFO0FBQ0xDLG9CQUFBQSxRQUFRLEVBQUUsa0JBQUFwRCxLQUFLLENBQUN5QixJQUFOLHFGQUFZc0IsSUFBWixpR0FBa0JJLEtBQWxCLGdGQUF5QkMsUUFBekIsS0FBcUM7QUFEMUM7QUFKSCxpQkF2QkY7QUErQkpDLGdCQUFBQSxJQUFJLEVBQUU7QUFDSkwsa0JBQUFBLElBQUksRUFBRSxrQkFBQWhELEtBQUssQ0FBQ3lCLElBQU4scUZBQVk0QixJQUFaLHdFQUFrQkwsSUFBbEIsS0FBMEIsRUFENUI7QUFFSkMsa0JBQUFBLElBQUksRUFBRSxrQkFBQWpELEtBQUssQ0FBQ3lCLElBQU4scUZBQVk0QixJQUFaLHdFQUFrQkosSUFBbEIsS0FBMEIsRUFGNUI7QUFHSkMsa0JBQUFBLElBQUksRUFBRSxrQkFBQWxELEtBQUssQ0FBQ3lCLElBQU4scUZBQVk0QixJQUFaLHdFQUFrQkgsSUFBbEIsS0FBMEIsRUFINUI7QUFJSkMsa0JBQUFBLEtBQUssRUFBRTtBQUNMQyxvQkFBQUEsUUFBUSxFQUFFLGtCQUFBcEQsS0FBSyxDQUFDeUIsSUFBTixxRkFBWTRCLElBQVosaUdBQWtCRixLQUFsQixnRkFBeUJDLFFBQXpCLEtBQXFDO0FBRDFDO0FBSkgsaUJBL0JGO0FBdUNKRSxnQkFBQUEsS0FBSyxFQUFFO0FBQ0xOLGtCQUFBQSxJQUFJLEVBQUUsa0JBQUFoRCxLQUFLLENBQUN5QixJQUFOLHVGQUFZNkIsS0FBWiw0RUFBbUJOLElBQW5CLEtBQTJCLEVBRDVCO0FBRUxDLGtCQUFBQSxJQUFJLEVBQUUsa0JBQUFqRCxLQUFLLENBQUN5QixJQUFOLHVGQUFZNkIsS0FBWiw0RUFBbUJMLElBQW5CLEtBQTJCLEVBRjVCO0FBR0xDLGtCQUFBQSxJQUFJLEVBQUUsa0JBQUFsRCxLQUFLLENBQUN5QixJQUFOLHVGQUFZNkIsS0FBWiw0RUFBbUJKLElBQW5CLEtBQTJCLEVBSDVCO0FBSUxDLGtCQUFBQSxLQUFLLEVBQUU7QUFDTEMsb0JBQUFBLFFBQVEsRUFBRSxrQkFBQXBELEtBQUssQ0FBQ3lCLElBQU4scUZBQVk0QixJQUFaLGlHQUFrQkYsS0FBbEIsZ0ZBQXlCQyxRQUF6QixLQUFxQztBQUQxQztBQUpGLGlCQXZDSDtBQStDSkcsZ0JBQUFBLFNBQVMsRUFBRTtBQUNUUCxrQkFBQUEsSUFBSSxFQUFFLGtCQUFBaEQsS0FBSyxDQUFDeUIsSUFBTix5RkFBWThCLFNBQVosZ0ZBQXVCUCxJQUF2QixLQUErQixFQUQ1QjtBQUVUQyxrQkFBQUEsSUFBSSxFQUFFLGtCQUFBakQsS0FBSyxDQUFDeUIsSUFBTix5RkFBWThCLFNBQVosZ0ZBQXVCTixJQUF2QixLQUErQixFQUY1QjtBQUdUQyxrQkFBQUEsSUFBSSxFQUFFLGtCQUFBbEQsS0FBSyxDQUFDeUIsSUFBTix5RkFBWThCLFNBQVosZ0ZBQXVCTCxJQUF2QixLQUErQixFQUg1QjtBQUlUQyxrQkFBQUEsS0FBSyxFQUFFO0FBQ0xDLG9CQUFBQSxRQUFRLEVBQUUsa0JBQUFwRCxLQUFLLENBQUN5QixJQUFOLHlGQUFZOEIsU0FBWiwwR0FBdUJKLEtBQXZCLGtGQUE4QkMsUUFBOUIsS0FBMEM7QUFEL0M7QUFKRSxpQkEvQ1A7QUF1REpJLGdCQUFBQSxVQUFVLEVBQUUsa0JBQUF4RCxLQUFLLENBQUN5QixJQUFOLGdFQUFZK0IsVUFBWixLQUEwQixFQXZEbEM7QUF3REpDLGdCQUFBQSxRQUFRLEVBQUU7QUFDUkMsa0JBQUFBLE1BQU0sRUFBRSxrQkFBQTFELEtBQUssQ0FBQ3lCLElBQU4seUZBQVlnQyxRQUFaLGdGQUFzQkMsTUFBdEIsS0FBZ0MsRUFEaEM7QUFFUkMsa0JBQUFBLEdBQUcsRUFBRSxrQkFBQTNELEtBQUssQ0FBQ3lCLElBQU4seUZBQVlnQyxRQUFaLGdGQUFzQkUsR0FBdEIsS0FBNkI7QUFGMUIsaUJBeEROO0FBNERKQyxnQkFBQUEsS0FBSyxFQUFFO0FBQ0xDLGtCQUFBQSxZQUFZLEVBQUUsa0JBQUE3RCxLQUFLLENBQUN5QixJQUFOLHVGQUFZbUMsS0FBWiw0RUFBbUJDLFlBQW5CLEtBQW1DLEVBRDVDO0FBRUxDLGtCQUFBQSxVQUFVLEVBQUUsa0JBQUE5RCxLQUFLLENBQUN5QixJQUFOLHVGQUFZbUMsS0FBWiw0RUFBbUJFLFVBQW5CLEtBQWlDLEVBRnhDO0FBR0xDLGtCQUFBQSxVQUFVLEVBQUUsa0JBQUEvRCxLQUFLLENBQUN5QixJQUFOLHVGQUFZbUMsS0FBWiw0RUFBbUJHLFVBQW5CLEtBQWlDLEVBSHhDO0FBSUxDLGtCQUFBQSxZQUFZLEVBQUUsa0JBQUFoRSxLQUFLLENBQUN5QixJQUFOLHVGQUFZbUMsS0FBWiw0RUFBbUJJLFlBQW5CLEtBQW1DLEVBSjVDO0FBS0xDLGtCQUFBQSxTQUFTLEVBQUU7QUFDVDFELG9CQUFBQSxHQUFHLEVBQUUsa0JBQUFQLEtBQUssQ0FBQ3lCLElBQU4sdUZBQVltQyxLQUFaLHFHQUFtQkssU0FBbkIsZ0ZBQThCMUQsR0FBOUIsS0FBcUMsRUFEakM7QUFFVEMsb0JBQUFBLEtBQUssRUFBRSxrQkFBQVIsS0FBSyxDQUFDeUIsSUFBTix1RkFBWW1DLEtBQVoscUdBQW1CSyxTQUFuQixnRkFBOEJ6RCxLQUE5QixLQUF1QyxFQUZyQztBQUdUQyxvQkFBQUEsTUFBTSxFQUFFLGtCQUFBVCxLQUFLLENBQUN5QixJQUFOLHVGQUFZbUMsS0FBWixxR0FBbUJLLFNBQW5CLGdGQUE4QnhELE1BQTlCLEtBQXdDLEVBSHZDO0FBSVRDLG9CQUFBQSxNQUFNLEVBQUU7QUFDTkMsc0JBQUFBLEdBQUcsRUFBRSxrQkFBQVgsS0FBSyxDQUFDeUIsSUFBTix1RkFBWW1DLEtBQVoscUdBQW1CSyxTQUFuQiwwR0FBOEJ2RCxNQUE5QixrRkFBc0NDLEdBQXRDLEtBQTZDLEVBRDVDO0FBRU5DLHNCQUFBQSxJQUFJLEVBQUUsa0JBQUFaLEtBQUssQ0FBQ3lCLElBQU4sdUZBQVltQyxLQUFaLHFHQUFtQkssU0FBbkIsMEdBQThCdkQsTUFBOUIsa0ZBQXNDRSxJQUF0QyxLQUE4QztBQUY5QztBQUpDO0FBTE47QUE1REgsZUExQ007QUFzSFpzRCxjQUFBQSxNQUFNLEVBQUU7QUFDTkMsZ0JBQUFBLElBQUksRUFBRSxrQkFBQW5FLEtBQUssQ0FBQ2tFLE1BQU4sZ0VBQWNDLElBQWQsS0FBc0I7QUFEdEIsZUF0SEk7QUF5SFpDLGNBQUFBLFVBQVUsRUFBRXBFLEtBQUssQ0FBQ29FLFVBQU4sSUFBb0IsS0F6SHBCO0FBMEhaQyxjQUFBQSxTQUFTLEVBQUVyRSxLQUFLLENBQUNxRSxTQUFOLElBQW1CO0FBMUhsQixhQURoQjs7QUE4SFFDLFlBQUFBLHFCQTlIUixHQThIZ0MsU0FBeEJBLHFCQUF3QixDQUFDSCxJQUFELEVBQU9JLElBQVAsRUFBZ0I7QUFDNUMsa0JBQU1DLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CUCxJQUFwQixFQUEwQkksSUFBMUIsQ0FBZDtBQUNBLHFCQUFPO0FBQ0xKLGdCQUFBQSxJQUFJLEVBQUVLLEtBREQ7QUFFTC9ELGdCQUFBQSxNQUFNLEVBQUVnRSxHQUFHLENBQUNFLGlCQUFKLENBQXNCSCxLQUF0QixFQUE2Qkk7QUFGaEMsZUFBUDtBQUlELGFBcElIOztBQUFBLGtCQXFJTTNFLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1ksS0FBWCxJQUFvQnBDLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1ksS0FBWCxDQUFpQndDLE1BckkzQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFzSVE1RSxLQUFLLENBQUN3QixJQUFOLENBQVdZLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0J3QyxNQUFwQixJQUE4QjVFLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1csTUFBWCxDQUFrQnlDLE1BdEl4RDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkF1SVlDLEtBQUssQ0FBQyxrREFBRCxDQXZJakI7O0FBQUE7QUEwSVFDLFlBQUFBLE9BMUlSLEdBMElrQjtBQUNkQyxjQUFBQSxXQUFXLEVBQUUvRSxLQUFLLENBQUNJLG9CQUFOLEdBQTZCLFdBQTdCLEdBQTJDLEVBRDFDO0FBRWQ0RSxjQUFBQSxXQUFXLEVBQUU7QUFGQyxhQTFJbEI7QUErSVFSLFlBQUFBLEdBL0lSLEdBK0ljLElBQUlTLFlBQUosQ0FBVUgsT0FBVixDQS9JZDtBQWdKUUksWUFBQUEsU0FoSlIsR0FnSm9CVixHQUFHLENBQUNXLFlBQUosRUFoSnBCO0FBaUpRQyxZQUFBQSxVQWpKUixHQWlKcUJaLEdBQUcsQ0FBQ2EsYUFBSixLQUFzQixFQWpKM0MsRUFpSitDOztBQUN2Q0MsWUFBQUEsUUFsSlIsR0FrSm1CZCxHQUFHLENBQUNlLFFBQUosQ0FBYUMsUUFBYixDQUFzQmpGLEtBbEp6QztBQW1KUWtGLFlBQUFBLFNBbkpSLEdBbUpvQmpCLEdBQUcsQ0FBQ2UsUUFBSixDQUFhQyxRQUFiLENBQXNCaEYsTUFuSjFDO0FBcUpRa0YsWUFBQUEsVUFySlIsR0FxSnFCLFNBckpyQjtBQXNKUUMsWUFBQUEsU0F0SlIsR0FzSm9CLFNBdEpwQjtBQXVKUUMsWUFBQUEsU0F2SlIsR0F1Sm9CLFNBdkpwQjtBQXdKUUMsWUFBQUEsU0F4SlIsR0F3Sm9CLFNBeEpwQjtBQXlKUUMsWUFBQUEsZ0JBekpSLEdBeUoyQixRQXpKM0I7QUEwSlFDLFlBQUFBLGNBMUpSLEdBMEp5QixNQTFKekI7QUEySlFDLFlBQUFBLFdBM0pSLEdBMkpzQixPQTNKdEI7QUE0SlFDLFlBQUFBLFlBNUpSLEdBNEp1QixRQTVKdkI7QUE2SlFDLFlBQUFBLG9CQTdKUixHQTZKK0IsZ0JBN0ovQjtBQThKUUMsWUFBQUEsa0JBOUpSLEdBOEo2QixLQTlKN0IsRUFnS0U7O0FBQ0lDLFlBQUFBLGFBaktOLEdBaUtzQixFQWpLdEI7QUFtS1FDLFlBQUFBLFNBbktSLEdBbUtvQjtBQUNoQkMsY0FBQUEsY0FBYyxFQUFFLEVBREE7QUFFaEJDLGNBQUFBLGFBQWEsRUFBRSxFQUZDO0FBR2hCQyxjQUFBQSxhQUFhLEVBQUUsRUFIQztBQUloQkMsY0FBQUEsVUFBVSxFQUFFLENBSkk7QUFLaEJDLGNBQUFBLGFBQWEsRUFBRTtBQUxDLGFBbktwQjtBQTJLRWxDLFlBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0MsY0FBMUI7QUFDQTlCLFlBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJsQixVQUFqQjtBQUNBbEIsWUFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDWSxRQUFOLENBQWVDLElBQXRELEVBQTREbUYsV0FBNUQ7QUFDQXhCLFlBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBMUI7O0FBQ0EsZ0JBQUl4RyxLQUFLLENBQUNLLElBQU4sQ0FBV0MsR0FBZixFQUFvQjtBQUNsQmtFLGNBQUFBLEdBQUcsQ0FBQ3FDLFFBQUosQ0FDRTdHLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxHQURiLEVBRUU2RixrQkFGRixFQUdFLEtBQUtuRyxLQUFLLENBQUNLLElBQU4sQ0FBV0ksTUFBWCxDQUFrQkUsSUFIekIsRUFJRXlGLGFBQWEsR0FBRyxDQUFoQixHQUFvQnBHLEtBQUssQ0FBQ0ssSUFBTixDQUFXSSxNQUFYLENBQWtCQyxHQUp4QyxFQUtFVixLQUFLLENBQUNLLElBQU4sQ0FBV0UsS0FMYixFQU1FUCxLQUFLLENBQUNLLElBQU4sQ0FBV0csTUFOYjtBQVFEOztBQUdELGdCQUFHUixLQUFLLENBQUNZLFFBQU4sQ0FBZU8sU0FBbEIsRUFBNkI7QUFDM0JpRixjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBVixHQUEwQixDQUEzQztBQUNBbEMsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRSxhQUExQjtBQUNBL0IsY0FBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmpCLFNBQWpCO0FBQ0FuQixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUNZLFFBQU4sQ0FBZU8sU0FBdEQsRUFBaUU2RSxXQUFqRTtBQUNBSSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDRDs7QUFDRGxDLFlBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJsQixVQUFqQixFQWxNRixDQW1NSTtBQUNBOztBQUNNb0IsWUFBQUEsU0FyTVYsa0JBcU1zQjlHLEtBQUssQ0FBQ3dCLElBck01Qix3RUFxTXNCLFlBQVlnQyxRQXJNbEMseURBcU1zQixxQkFBc0JDLE1Bck01Qzs7QUFBQSxpQkFzTVFxRCxTQXRNUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQXVNWUMsbUJBQU9DLFNBQVAsQ0FBaUJGLFNBQWpCLEVBQ0hHLElBREcsQ0FDRSxVQUFDQyxXQUFELEVBQWlCO0FBQ3JCLGtCQUFNQyxRQUFRLEdBQUdELFdBQWpCO0FBRUExQyxjQUFBQSxHQUFHLENBQUNxQyxRQUFKLENBQ0VNLFFBREYsRUFFRWhCLGtCQUZGLEVBR0ViLFFBQVEsR0FBRyxFQUhiLEVBSUVjLGFBSkYsRUFLRSxFQUxGLEVBTUUsRUFORjtBQVFBQSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0csYUFBM0I7QUFDRCxhQWJHLFdBY0csVUFBQ1ksR0FBRCxFQUFTO0FBQ2RDLGNBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0QsYUFoQkcsQ0F2TVo7O0FBQUE7QUF5TlEsZ0JBQUlwSCxLQUFKLGFBQUlBLEtBQUosa0NBQUlBLEtBQUssQ0FBRVksUUFBWCw0Q0FBSSxnQkFBaUJFLE9BQXJCLEVBQThCO0FBQzVCMEQsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUExQjtBQUNBaEMsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QkYsb0JBQTVCO0FBQ0Q7O0FBQ0RFLFlBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSyxhQUEzQjtBQUNBbEMsWUFBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUFWLEdBQTBCLENBQTFDO0FBQ0FoQyxZQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCcEcsS0FBSyxDQUFDWSxRQUFOLENBQWVFLE9BQTNDO0FBQ0FzRixZQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDQWxDLFlBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLEVBQVQsRUFBYWtDLGFBQWIsRUFBNEJwRyxLQUFLLENBQUNZLFFBQU4sQ0FBZUcsWUFBM0M7QUFDQXFGLFlBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSyxhQUEzQjs7QUFFQSxnQkFBSTFHLEtBQUssQ0FBQ1ksUUFBTixDQUFlSSxZQUFuQixFQUFpQztBQUMvQndELGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLEVBQVQsRUFBYWtDLGFBQWIsRUFBNEJwRyxLQUFLLENBQUNZLFFBQU4sQ0FBZUksWUFBM0M7QUFDQW9GLGNBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSyxhQUEzQjtBQUNEOztBQUVEbEMsWUFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QnBHLEtBQUssQ0FBQ1ksUUFBTixDQUFlTSxPQUEzQztBQUVBa0YsWUFBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCO0FBQ0FsQyxZQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCcEcsS0FBSyxDQUFDWSxRQUFOLENBQWVLLE9BQTNDO0FBNU9SO0FBQUE7O0FBQUE7QUE4T00sZ0JBQUlqQixLQUFKLGFBQUlBLEtBQUosbUNBQUlBLEtBQUssQ0FBRVksUUFBWCw2Q0FBSSxpQkFBaUJFLE9BQXJCLEVBQThCO0FBQzVCc0YsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCO0FBQ0FqQyxjQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCTixTQUFTLENBQUNHLGFBQTFCO0FBQ0FoQyxjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNGLG9CQUF2QyxFQUE2REYsV0FBN0Q7QUFDRDs7QUFDRHhCLFlBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBVixHQUEwQixDQUExQztBQUNBSixZQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDQWxDLFlBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ1ksUUFBTixDQUFlRSxPQUF0RCxFQUErRGtGLFdBQS9EO0FBQ0FJLFlBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSyxhQUEzQjtBQUNBbEMsWUFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDWSxRQUFOLENBQWVHLFlBQXRELEVBQW9FaUYsV0FBcEU7QUFDQUksWUFBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCOztBQUVBLGdCQUFJMUcsS0FBSyxDQUFDWSxRQUFOLENBQWVJLFlBQW5CLEVBQWlDO0FBQy9Cd0QsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDWSxRQUFOLENBQWVJLFlBQXRELEVBQW9FZ0YsV0FBcEU7QUFDQUksY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCO0FBQ0Q7O0FBRURsQyxZQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUNZLFFBQU4sQ0FBZU0sT0FBdEQsRUFBK0Q4RSxXQUEvRDtBQUVBSSxZQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDQWxDLFlBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ1ksUUFBTixDQUFlSyxPQUF0RCxFQUErRCtFLFdBQS9EOztBQWxRTjtBQXFRRXhCLFlBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJoQixTQUFqQixFQXJRRixDQXdRRTs7QUFDQSxnQkFBSTVGLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1csTUFBWCxDQUFrQnlDLE1BQXRCLEVBQThCO0FBQzVCd0IsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCO0FBQ0FsQyxjQUFBQSxHQUFHLENBQUMrQyxJQUFKLENBQVMsRUFBVCxFQUFhbkIsYUFBYixFQUE0QmQsUUFBUSxHQUFHLEVBQXZDLEVBQTJDYyxhQUEzQztBQUNELGFBNVFILENBOFFFOzs7QUFDQTVCLFlBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJoQixTQUFqQjtBQUNBcEIsWUFBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUExQjtBQUNBSixZQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ksVUFBVixHQUF1QixDQUF4QztBQUVBakMsWUFBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDQyxjQUFWLEdBQTJCLENBQTNDOztBQUNBLGdCQUFJdEcsS0FBSyxDQUFDb0IsT0FBTixDQUFjUCxJQUFsQixFQUF3QjtBQUN0QjJELGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLEVBQVQsRUFBYWtDLGFBQWIsRUFBNEJwRyxLQUFLLENBQUNvQixPQUFOLENBQWNQLElBQTFDO0FBQ0Q7O0FBQUE7QUFFRDJELFlBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJsQixVQUFqQjtBQUNBbEIsWUFBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmYsU0FBakI7QUFDQXJCLFlBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0MsY0FBVixHQUEyQixDQUEzQzs7QUFDQSxnQkFBSXRHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV0gsS0FBWCxJQUFvQnJCLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV0csR0FBbkMsRUFBd0M7QUFDdEM2QyxjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FDRW9CLFFBQVEsR0FBRyxFQURiLEVBRUVjLGFBRkYsRUFHRXBHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV0gsS0FBWCxHQUFtQnJCLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV0csR0FIaEMsRUFJRXFFLFdBSkY7QUFNRDs7QUFFRCxnQkFBSWhHLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY1AsSUFBZCxJQUF1QmIsS0FBSyxDQUFDd0IsSUFBTixDQUFXSCxLQUFYLElBQW9CckIsS0FBSyxDQUFDd0IsSUFBTixDQUFXRyxHQUExRCxFQUNFeUUsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQVYsR0FBMEIsQ0FBM0M7O0FBRUEsa0NBQUcxRyxLQUFLLENBQUNvQixPQUFULDJDQUFHLGVBQWVELFNBQWxCLEVBQTZCO0FBQzNCcUQsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUExQjtBQUNBaEMsY0FBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmpCLFNBQWpCO0FBQ0FuQixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCcEcsS0FBSyxDQUFDb0IsT0FBTixDQUFjRCxTQUExQztBQUNEOztBQUVIcUQsWUFBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmhCLFNBQWpCO0FBQ0FwQixZQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCTixTQUFTLENBQUNHLGFBQTFCOztBQUVBLGdDQUFJeEcsS0FBSyxDQUFDd0IsSUFBVixrRUFBSSxhQUFZZ0MsUUFBaEIsa0RBQUksc0JBQXNCRSxHQUExQixFQUErQjtBQUM3QmMsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUExQjtBQUNBaEMsY0FBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmpCLFNBQWpCO0FBQ0FuQixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FDRW9CLFFBQVEsR0FBRyxFQURiLEVBRUVjLGFBRkYsaUNBR1VwRyxLQUFLLENBQUN3QixJQUhoQixpREFHVSxhQUFZZ0MsUUFBWixDQUFxQkUsR0FIL0IsR0FJRXNDLFdBSkY7QUFNRDs7QUFDRCxnQkFBSSxtQkFBQWhHLEtBQUssQ0FBQ29CLE9BQU4sNERBQWVELFNBQWYsb0JBQTRCbkIsS0FBSyxDQUFDd0IsSUFBbEMsa0VBQTRCLGFBQVlnQyxRQUF4QyxrREFBNEIsc0JBQXNCRSxHQUF0RCxFQUNFMEMsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCOztBQUVGLGdCQUFJLG1CQUFBekcsS0FBSyxDQUFDb0IsT0FBTixxRkFBZUUsY0FBZix3RUFBK0JELEtBQS9CLElBQXdDckIsS0FBSyxDQUFDd0IsSUFBTixDQUFXTSxLQUF2RCxFQUE4RDtBQUM1RDBDLGNBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJsQixVQUFqQjtBQUNNOEIsY0FBQUEsbUJBRnNELHNCQUVoQ3hILEtBQUssQ0FBQ29CLE9BRjBCLG9EQUVoQyxnQkFBZUUsY0FBZixDQUE4QkQsS0FGRTtBQUd0RG9HLGNBQUFBLG9CQUhzRCxzQkFHL0J6SCxLQUFLLENBQUNvQixPQUh5QixvREFHL0IsZ0JBQWVHLGVBQWYsQ0FBK0JGLEtBSEE7QUFJNURtRCxjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCb0IsbUJBQTVCO0FBQ0FoRCxjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU2dCLFNBQVMsR0FBQyxDQUFuQixFQUFzQmtCLGFBQXRCLEVBQXFDcUIsb0JBQXJDO0FBQ0FqRCxjQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCTixTQUFTLENBQUNHLGFBQVYsR0FBMEIsQ0FBMUM7O0FBQ0Esa0JBQUcsZ0JBQUF4RyxLQUFLLENBQUN3QixJQUFOLHNEQUFZUSxPQUFaLG9CQUF1QmhDLEtBQUssQ0FBQ3dCLElBQTdCLHlDQUF1QixhQUFZSyxZQUF0QyxFQUFtRDtBQUNqRDJDLGdCQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUN3QixJQUFOLENBQVdFLFVBQWxELEVBQThEc0UsV0FBOUQ7QUFDQXhCLGdCQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUN3QixJQUFOLENBQVdLLFlBQWxELEVBQWdFbUUsV0FBaEU7QUFDRCxlQUhELE1BR0s7QUFDSHhCLGdCQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUN3QixJQUFOLENBQVdFLFVBQWxELEVBQThEc0UsV0FBOUQ7QUFDRDs7QUFDRHhCLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV0ksVUFBbEQsRUFBOERvRSxXQUE5RDtBQUNBSSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDRDs7QUFFRCxnQkFBSSxtQkFBQTFHLEtBQUssQ0FBQ29CLE9BQU4scUZBQWVFLGNBQWYsd0VBQStCRCxLQUEvQixJQUF3Q3JCLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV00sS0FBdkQsRUFBOEQ7QUFDdERSLGNBQUFBLGNBRHNELEdBQ3JDK0MscUJBQXFCLG9CQUFDckUsS0FBSyxDQUFDb0IsT0FBUCxvREFBQyxnQkFBZUUsY0FBZixDQUE4QlIsT0FBL0IsRUFBMENvRSxTQUFTLEdBQUMsQ0FBWCxHQUFnQixFQUF6RCxDQURnQjtBQUV0RDNELGNBQUFBLGVBRnNELEdBRXBDOEMscUJBQXFCLG9CQUFDckUsS0FBSyxDQUFDb0IsT0FBUCxvREFBQyxnQkFBZUcsZUFBZixDQUErQlQsT0FBaEMsRUFBMkNvRSxTQUFTLEdBQUMsQ0FBWCxHQUFnQixFQUExRCxDQUZlO0FBRzVEVixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCOUUsY0FBYyxDQUFDNEMsSUFBM0M7QUFDQU0sY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNnQixTQUFTLEdBQUMsQ0FBbkIsRUFBc0JrQixhQUF0QixFQUFxQzdFLGVBQWUsQ0FBQzJDLElBQXJEO0FBQ0FNLGNBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBVixHQUEwQixDQUExQzs7QUFDQSxrQkFBRyxnQkFBQXhHLEtBQUssQ0FBQ3dCLElBQU4sc0RBQVlRLE9BQVosb0JBQXVCaEMsS0FBSyxDQUFDd0IsSUFBN0IseUNBQXVCLGFBQVlLLFlBQXRDLEVBQW1EO0FBQ2pEMkMsZ0JBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV00sS0FBbEQsRUFBeURrRSxXQUF6RDtBQUNBeEIsZ0JBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1EsT0FBbEQsRUFBMkRnRSxXQUEzRDtBQUNELGVBSEQsTUFHSztBQUNIeEIsZ0JBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV00sS0FBbEQsRUFBeURrRSxXQUF6RDtBQUNEOztBQUNEeEIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXTyxLQUFsRCxFQUF5RGlFLFdBQXpEO0FBQ0FJLGNBQUFBLGFBQWEsSUFBSTlFLGNBQWMsQ0FBQ2QsTUFBZixHQUF3QmUsZUFBZSxDQUFDZixNQUF4QyxHQUFpRGMsY0FBYyxDQUFDZCxNQUFoRSxHQUF5RWUsZUFBZSxDQUFDZixNQUExRztBQUNEOztBQUVELGdCQUFJLG1CQUFBUixLQUFLLENBQUNvQixPQUFOLDREQUFlRSxjQUFmLENBQThCb0csWUFBOUIsSUFBOEMxSCxLQUFLLENBQUN3QixJQUFOLENBQVdPLEtBQTdELEVBQW9FO0FBQzVEVCxjQUFBQSxlQUQ0RCxHQUMzQytDLHFCQUFxQixxQkFBQ3JFLEtBQUssQ0FBQ29CLE9BQVAscURBQUMsaUJBQWVFLGNBQWYsQ0FBOEJQLFlBQS9CLEVBQStDbUUsU0FBUyxHQUFDLENBQVgsR0FBZ0IsRUFBOUQsQ0FEc0I7QUFFNUQzRCxjQUFBQSxnQkFGNEQsR0FFMUM4QyxxQkFBcUIscUJBQUNyRSxLQUFLLENBQUNvQixPQUFQLHFEQUFDLGlCQUFlRyxlQUFmLENBQStCUixZQUFoQyxFQUFnRG1FLFNBQVMsR0FBQyxDQUFYLEdBQWdCLEVBQS9ELENBRnFCO0FBR2xFVixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCOUUsZUFBYyxDQUFDNEMsSUFBM0M7QUFDQU0sY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNnQixTQUFTLEdBQUMsQ0FBbkIsRUFBc0JrQixhQUF0QixFQUFxQzdFLGdCQUFlLENBQUMyQyxJQUFyRDtBQUNBTSxjQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCTixTQUFTLENBQUNHLGFBQVYsR0FBMEIsQ0FBMUM7QUFDQUosY0FBQUEsYUFBYSxJQUFJOUUsZUFBYyxDQUFDZCxNQUFmLEdBQXdCZSxnQkFBZSxDQUFDZixNQUF4QyxHQUFpRGMsZUFBYyxDQUFDZCxNQUFoRSxHQUF5RWUsZ0JBQWUsQ0FBQ2YsTUFBMUc7QUFDRDs7QUFFRCxvQ0FBSVIsS0FBSyxDQUFDb0IsT0FBViw2Q0FBSSxpQkFBZUUsY0FBZixDQUE4Qk4sWUFBbEMsRUFBZ0Q7QUFDeENNLGNBQUFBLGdCQUR3QyxHQUN2QitDLHFCQUFxQixxQkFBQ3JFLEtBQUssQ0FBQ29CLE9BQVAscURBQUMsaUJBQWVFLGNBQWYsQ0FBOEJOLFlBQS9CLEVBQStDa0UsU0FBUyxHQUFDLENBQVgsR0FBZ0IsRUFBOUQsQ0FERTtBQUV4QzNELGNBQUFBLGlCQUZ3QyxHQUV0QjhDLHFCQUFxQixxQkFBQ3JFLEtBQUssQ0FBQ29CLE9BQVAscURBQUMsaUJBQWVHLGVBQWYsQ0FBK0JQLFlBQWhDLEVBQWdEa0UsU0FBUyxHQUFDLENBQVgsR0FBZ0IsRUFBL0QsQ0FGQztBQUc5Q1YsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QjlFLGdCQUFjLENBQUM0QyxJQUEzQztBQUNBTSxjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU2dCLFNBQVMsR0FBQyxDQUFuQixFQUFzQmtCLGFBQXRCLEVBQXFDN0UsaUJBQWUsQ0FBQzJDLElBQXJEO0FBQ0FrQyxjQUFBQSxhQUFhLElBQUk5RSxnQkFBYyxDQUFDZCxNQUFmLEdBQXdCZSxpQkFBZSxDQUFDZixNQUF4QyxHQUFpRGMsZ0JBQWMsQ0FBQ2QsTUFBaEUsR0FBeUVlLGlCQUFlLENBQUNmLE1BQTFHO0FBQ0Q7O0FBRUQsZ0JBQUlSLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0UsY0FBZCxDQUE2QkosT0FBN0IsSUFBd0NsQixLQUFLLENBQUNvQixPQUFOLENBQWNHLGVBQWQsQ0FBOEJMLE9BQTFFLEVBQW1GO0FBQ2pGc0QsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QnBHLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0UsY0FBZCxDQUE2QkosT0FBekQ7QUFDQXNELGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTZ0IsU0FBUyxHQUFDLENBQW5CLEVBQXNCa0IsYUFBdEIsRUFBcUNwRyxLQUFLLENBQUNvQixPQUFOLENBQWNHLGVBQWQsQ0FBOEJMLE9BQW5FO0FBQ0QsYUFIRCxNQUlLa0YsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCLENBblhQLENBb1hFO0FBRUE7OztBQUVNaUIsWUFBQUEsT0F4WFIsR0F3WGtCLENBQUN6QyxTQUFTLEdBQUcsRUFBYixJQUFtQmxGLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1csTUFBWCxDQUFrQnlDLE1BeFh2RDs7QUEwWFFnRCxZQUFBQSxxQkExWFIsR0EwWGdDLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQ3hCLGNBQUFBLGFBQWEsSUFBSSxDQUFqQjs7QUFDQSxtQkFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzdILEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1csTUFBWCxDQUFrQnlDLE1BQXRDLEVBQThDaUQsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRHJELGdCQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJoQyxjQUF2QjtBQUNBLG9CQUFJOEIsQ0FBQyxLQUFLLENBQVYsRUFBYXJELEdBQUcsQ0FBQ3dELElBQUosQ0FBUyxFQUFULEVBQWE1QixhQUFiLEVBQTRCdUIsT0FBNUIsRUFBcUMsQ0FBckMsRUFBYixLQUNLbkQsR0FBRyxDQUFDd0QsSUFBSixDQUFTTCxPQUFPLEdBQUdFLENBQVYsR0FBYyxFQUF2QixFQUEyQnpCLGFBQTNCLEVBQTBDdUIsT0FBMUMsRUFBbUQsQ0FBbkQ7QUFDTjs7QUFDRHZCLGNBQUFBLGFBQWEsSUFBSSxDQUFqQjtBQUNELGFBbFlIOztBQW1ZUTZCLFlBQUFBLG1CQW5ZUixHQW1ZOEIsU0FBdEJBLG1CQUFzQixDQUFDeEIsVUFBRCxFQUFnQjtBQUMxQyxtQkFBSyxJQUFJb0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzdILEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1csTUFBWCxDQUFrQnlDLE1BQXRDLEVBQThDaUQsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRCxvQkFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYXJELEdBQUcsQ0FBQ3dELElBQUosQ0FBUyxFQUFULEVBQWE1QixhQUFiLEVBQTRCdUIsT0FBNUIsRUFBcUNsQixVQUFyQyxFQUFiLEtBQ0tqQyxHQUFHLENBQUN3RCxJQUFKLENBQVNMLE9BQU8sR0FBR0UsQ0FBVixHQUFjLEVBQXZCLEVBQTJCekIsYUFBM0IsRUFBMEN1QixPQUExQyxFQUFtRGxCLFVBQW5EO0FBQ047QUFDRixhQXhZSDs7QUF5WVF5QixZQUFBQSxjQXpZUixHQXlZeUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0Isa0JBQUlsSSxLQUFLLENBQUN3QixJQUFOLENBQVdTLFlBQWYsRUFBNkIyRixxQkFBcUI7QUFFbER4QixjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBVixHQUEwQixFQUEzQztBQUNBbEMsY0FBQUEsR0FBRyxDQUFDc0QsT0FBSixDQUFZQyxTQUFaLEVBQXVCaEMsY0FBdkI7QUFDQXZCLGNBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJsQixVQUFqQjtBQUNBbEIsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUExQixFQU4yQixDQU8zQjs7QUFDQWhDLGNBQUFBLEdBQUcsQ0FBQzJELFlBQUosQ0FBaUJ2QyxTQUFqQjtBQUNBUSxjQUFBQSxhQUFhLElBQUksQ0FBakI7QUFFQXBHLGNBQUFBLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1csTUFBWCxDQUFrQmlHLE9BQWxCLENBQTBCLFVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUM5QyxvQkFBSUEsS0FBSyxJQUFJLENBQWIsRUFBZ0I5RCxHQUFHLENBQUNOLElBQUosQ0FBU21FLEdBQVQsRUFBYyxFQUFkLEVBQWtCakMsYUFBbEIsRUFBaEIsS0FDSzVCLEdBQUcsQ0FBQ04sSUFBSixDQUFTbUUsR0FBVCxFQUFjQyxLQUFLLEdBQUdYLE9BQVIsR0FBa0IsRUFBaEMsRUFBb0N2QixhQUFwQztBQUNOLGVBSEQ7QUFLQUEsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQVYsR0FBMEIsQ0FBM0M7QUFDQWxDLGNBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJoQixTQUFqQjtBQUNBcEIsY0FBQUEsR0FBRyxDQUFDK0QsWUFBSixDQUFpQixHQUFqQjtBQUNBL0QsY0FBQUEsR0FBRyxDQUFDK0MsSUFBSixDQUFTLEVBQVQsRUFBYW5CLGFBQWIsRUFBNEJkLFFBQVEsR0FBRyxFQUF2QyxFQUEyQ2MsYUFBM0M7QUFDRCxhQTdaSDs7QUE4WkU4QixZQUFBQSxjQUFjLEdBOVpoQixDQWdhRTs7QUFDTU0sWUFBQUEsZUFqYVIsR0FpYTBCeEksS0FBSyxDQUFDd0IsSUFBTixDQUFXWSxLQUFYLENBQWlCd0MsTUFqYTNDO0FBa2FFSixZQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJqQyxnQkFBdkI7QUFFQTlGLFlBQUFBLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1ksS0FBWCxDQUFpQmdHLE9BQWpCLENBQXlCLFVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUM3QztBQUNBLGtCQUFJRyxVQUFVLEdBQUcsRUFBakI7O0FBQ0Esa0JBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBWTtBQUNoQ0wsZ0JBQUFBLEdBQUcsQ0FBQ0QsT0FBSixDQUFZLFVBQVVPLEVBQVYsRUFBY0wsS0FBZCxFQUFxQjtBQUMvQjtBQUNBLHNCQUFJTSxJQUFJLEdBQUd2RSxxQkFBcUIsQ0FBQ3NFLEVBQUUsQ0FBQ0UsUUFBSCxFQUFELEVBQWdCbEIsT0FBTyxHQUFHLENBQTFCLENBQWhDLENBRitCLENBRStCOztBQUM5RGMsa0JBQUFBLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQkYsSUFBSSxDQUFDcEksTUFBckI7QUFDRCxpQkFKRDtBQUtELGVBTkQ7O0FBT0FrSSxjQUFBQSxhQUFhO0FBQ2Isa0JBQU1LLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksRUFBUVAsVUFBUixDQUF0QixDQVg2QyxDQWE3Qzs7QUFDQSxrQkFBSXpJLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV1UsZUFBZixFQUFnQytGLG1CQUFtQixDQUFDYyxTQUFTLEdBQUcsQ0FBYixDQUFuQixDQWRhLENBZ0I3QztBQUNBOztBQUNBVixjQUFBQSxHQUFHLENBQUNELE9BQUosQ0FBWSxVQUFVTyxFQUFWLEVBQWNMLEtBQWQsRUFBcUI7QUFDL0Isb0JBQUlNLElBQUksR0FBR3ZFLHFCQUFxQixDQUFDc0UsRUFBRSxDQUFDRSxRQUFILEVBQUQsRUFBZ0JsQixPQUFPLEdBQUcsQ0FBMUIsQ0FBaEMsQ0FEK0IsQ0FDK0I7O0FBRTlELG9CQUFJVyxLQUFLLElBQUksQ0FBYixFQUFnQjlELEdBQUcsQ0FBQ04sSUFBSixDQUFTMEUsSUFBSSxDQUFDMUUsSUFBZCxFQUFvQixFQUFwQixFQUF3QmtDLGFBQWEsR0FBRyxDQUF4QyxFQUFoQixLQUNLNUIsR0FBRyxDQUFDTixJQUFKLENBQVMwRSxJQUFJLENBQUMxRSxJQUFkLEVBQW9CLEtBQUtvRSxLQUFLLEdBQUdYLE9BQWpDLEVBQTBDdkIsYUFBYSxHQUFHLENBQTFEO0FBQ04sZUFMRCxFQWxCNkMsQ0F5QjdDOztBQUNBLGtCQUFJa0MsS0FBSyxHQUFHLENBQVIsR0FBWUUsZUFBaEIsRUFBaUNwQyxhQUFhLElBQUkyQyxTQUFqQjs7QUFFakMsa0JBQ0UzQyxhQUFhLEdBQUdoQixVQUFoQixJQUNDZ0IsYUFBYSxHQUFJaEIsVUFBVSxHQUFHLEVBQTlCLElBQXFDWixHQUFHLENBQUMwRSxnQkFBSixLQUF5QixDQUZqRSxFQUdFO0FBQ0ExRSxnQkFBQUEsR0FBRyxDQUFDMkUsT0FBSjtBQUNBL0MsZ0JBQUFBLGFBQWEsR0FBRyxFQUFoQjtBQUNBLG9CQUFJa0MsS0FBSyxHQUFHLENBQVIsR0FBWUUsZUFBaEIsRUFBaUNOLGNBQWM7QUFDaEQsZUFuQzRDLENBcUM3Qzs7O0FBQ0Esa0JBQUlJLEtBQUssR0FBRyxDQUFSLEdBQVlFLGVBQVosSUFBK0JwQyxhQUFhLEdBQUcsRUFBbkQsRUFDRTtBQUNBQSxnQkFBQUEsYUFBYSxJQUFJMkMsU0FBakI7QUFFRnZFLGNBQUFBLEdBQUcsQ0FBQytELFlBQUosQ0FBaUIsR0FBakI7QUFDQS9ELGNBQUFBLEdBQUcsQ0FBQytDLElBQUosQ0FBUyxFQUFULEVBQWFuQixhQUFiLEVBQTRCZCxRQUFRLEdBQUcsRUFBdkMsRUFBMkNjLGFBQTNDO0FBQ0FBLGNBQUFBLGFBQWEsSUFBSTJDLFNBQVMsR0FBRyxDQUE3QixDQTVDNkMsQ0E4QzdDOztBQUNBM0MsY0FBQUEsYUFBYSxJQUFJLENBQWpCO0FBQ0QsYUFoREQsRUFwYUYsQ0FzZEU7O0FBQ0EsZ0JBQUlvQyxlQUFlLEtBQUssQ0FBeEIsRUFBMkI7QUFDekJwQyxjQUFBQSxhQUFhLElBQUksQ0FBakI7QUFDQTVCLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLFNBQVQsRUFBb0JvQixRQUFRLEdBQUcsQ0FBL0IsRUFBa0NjLGFBQWxDO0FBQ0Q7O0FBRUQ1QixZQUFBQSxHQUFHLENBQUNvQyxZQUFKLENBQWlCbEIsVUFBakI7QUFDQWxCLFlBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0IsRUFBaEI7QUFDQVAsWUFBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCOztBQUdBLGdCQUNFekcsS0FBSyxDQUFDd0IsSUFBTixDQUFXYSxRQUFYLElBQ0FyQyxLQUFLLENBQUN3QixJQUFOLENBQVdzQixJQURYLElBRUE5QyxLQUFLLENBQUN3QixJQUFOLENBQVc0QixJQUZYLElBR0FwRCxLQUFLLENBQUN3QixJQUFOLENBQVc2QixLQUpiLEVBS0U7QUFDQSxrQkFDRStDLGFBQWEsR0FBR2hCLFVBQWhCLElBQ0NnQixhQUFhLEdBQUloQixVQUFVLEdBQUcsRUFBOUIsSUFBcUNaLEdBQUcsQ0FBQzBFLGdCQUFKLEtBQXlCLENBRmpFLEVBR0U7QUFDQTFFLGdCQUFBQSxHQUFHLENBQUMyRSxPQUFKO0FBQ0EvQyxnQkFBQUEsYUFBYSxHQUFHLEVBQWhCO0FBQ0Q7QUFDRixhQTllSCxDQWdmRTs7O0FBQ0EsZ0JBQ0VwRyxLQUFLLENBQUN3QixJQUFOLENBQVdXLE1BQVgsQ0FBa0J5QyxNQUFsQixLQUNDNUUsS0FBSyxDQUFDd0IsSUFBTixDQUFXYSxRQUFYLElBQ0NyQyxLQUFLLENBQUN3QixJQUFOLENBQVdDLGFBRFosSUFFQ3pCLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV2MsUUFIYixDQURGLEVBS0U7QUFDQWtDLGNBQUFBLEdBQUcsQ0FBQytELFlBQUosQ0FBaUIsR0FBakI7QUFDQS9ELGNBQUFBLEdBQUcsQ0FBQytDLElBQUosQ0FBU2pDLFFBQVEsR0FBRyxDQUFwQixFQUF1QmMsYUFBdkIsRUFBc0NkLFFBQVEsR0FBRyxFQUFqRCxFQUFxRGMsYUFBckQ7QUFDQUEsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCO0FBQ0QsYUExZkgsQ0E0ZkU7OztBQUNBakMsWUFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXQyxhQUFsRCxFQUFpRXVFLFdBQWpFO0FBQ0F4QixZQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBd0NwRyxLQUFLLENBQUN3QixJQUFOLENBQVdjLFFBQVgsR0FBc0IsSUFBdEIsR0FBNkJ0QyxLQUFLLENBQUN3QixJQUFOLENBQVdhLFFBQVgsQ0FBb0IrRyxjQUFwQixFQUFyRSxFQUEyR3BELFdBQTNHLEVBOWZGLENBZ2dCRTs7QUFDQSxnQkFDRWhHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV3NCLElBQVgsS0FDQzlDLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV3NCLElBQVgsQ0FBZ0JDLElBQWhCLElBQ0MvQyxLQUFLLENBQUN3QixJQUFOLENBQVdzQixJQUFYLENBQWdCRSxJQURqQixJQUVDaEQsS0FBSyxDQUFDd0IsSUFBTixDQUFXc0IsSUFBWCxDQUFnQkcsSUFIbEIsQ0FERixFQUtFO0FBQ0FtRCxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ksVUFBM0I7QUFDQWpDLGNBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0IzRyxLQUFLLENBQUN3QixJQUFOLENBQVdzQixJQUFYLENBQWdCSSxLQUFoQixDQUFzQkMsUUFBdEM7QUFFQXFCLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV3NCLElBQVgsQ0FBZ0JDLElBQXZELEVBQTZEaUQsV0FBN0Q7QUFDQXhCLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV3NCLElBQVgsQ0FBZ0JFLElBQXZELEVBQTZEZ0QsV0FBN0Q7QUFDRCxhQTVnQkgsQ0E2Z0JFO0FBRUE7OztBQUNBLGdCQUNFaEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXNEIsSUFBWCxLQUNDcEQsS0FBSyxDQUFDd0IsSUFBTixDQUFXNEIsSUFBWCxDQUFnQkwsSUFBaEIsSUFDQy9DLEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzRCLElBQVgsQ0FBZ0JKLElBRGpCLElBRUNoRCxLQUFLLENBQUN3QixJQUFOLENBQVc0QixJQUFYLENBQWdCSCxJQUhsQixDQURGLEVBS0U7QUFDQW1ELGNBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSSxVQUEzQjtBQUNBakMsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQjNHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzRCLElBQVgsQ0FBZ0JGLEtBQWhCLENBQXNCQyxRQUF0QztBQUVBcUIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXNEIsSUFBWCxDQUFnQkwsSUFBdkQsRUFBNkRpRCxXQUE3RDtBQUNBeEIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXNEIsSUFBWCxDQUFnQkosSUFBdkQsRUFBNkRnRCxXQUE3RDtBQUNELGFBM2hCSCxDQTRoQkU7QUFFQTs7O0FBQ0EsZ0JBQ0VoRyxLQUFLLENBQUN3QixJQUFOLENBQVc2QixLQUFYLEtBQ0NyRCxLQUFLLENBQUN3QixJQUFOLENBQVc2QixLQUFYLENBQWlCTixJQUFqQixJQUNDL0MsS0FBSyxDQUFDd0IsSUFBTixDQUFXNkIsS0FBWCxDQUFpQkwsSUFEbEIsSUFFQ2hELEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzZCLEtBQVgsQ0FBaUJKLElBSG5CLENBREYsRUFLRTtBQUNBbUQsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCO0FBQ0FqQyxjQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCLEVBQWhCO0FBQ0FuQyxjQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJoQyxjQUF2QjtBQUNBdkIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXNkIsS0FBWCxDQUFpQk4sSUFBeEQsRUFBOERpRCxXQUE5RDtBQUNBeEIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLEVBQXVDcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXNkIsS0FBWCxDQUFpQkosSUFBakIsR0FBd0IsSUFBeEIsR0FBK0JqRCxLQUFLLENBQUN3QixJQUFOLENBQVc2QixLQUFYLENBQWlCTCxJQUF2RixFQUE2RmdELFdBQTdGO0FBQ0QsYUExaUJILENBNGlCRTs7O0FBQ0F4QixZQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJqQyxnQkFBdkI7O0FBRUEsZ0JBQ0U5RixLQUFLLENBQUN3QixJQUFOLENBQVc4QixTQUFYLEtBQ0N0RCxLQUFLLENBQUN3QixJQUFOLENBQVc4QixTQUFYLENBQXFCUCxJQUFyQixJQUNDL0MsS0FBSyxDQUFDd0IsSUFBTixDQUFXOEIsU0FBWCxDQUFxQk4sSUFEdEIsSUFFQ2hELEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzhCLFNBQVgsQ0FBcUJMLElBSHZCLENBREYsRUFLRTtBQUNBbUQsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCO0FBQ0FqQyxjQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCM0csS0FBSyxDQUFDd0IsSUFBTixDQUFXOEIsU0FBWCxDQUFxQkosS0FBckIsQ0FBMkJDLFFBQTNDO0FBQ0FxQixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUN3QixJQUFOLENBQVdvQixlQUFsRCxFQUFtRW9ELFdBQW5FO0FBQ0F4QixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxFQUFwQixFQUF3QmMsYUFBeEIsRUFBdUNwRyxLQUFLLENBQUN3QixJQUFOLENBQVcrQixVQUFsRCxFQUE4RHlDLFdBQTlEO0FBQ0FJLGNBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSSxVQUEzQjtBQUVBakMsY0FBQUEsR0FBRyxDQUFDK0MsSUFBSixDQUFTakMsUUFBUSxHQUFHLENBQXBCLEVBQXVCYyxhQUF2QixFQUFzQ2QsUUFBUSxHQUFHLEVBQWpELEVBQXFEYyxhQUFyRDtBQUNBQSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ksVUFBM0I7QUFFQWpDLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzhCLFNBQVgsQ0FBcUJQLElBQTVELEVBQWtFaUQsV0FBbEU7QUFDQXhCLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixFQUF1Q3BHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzhCLFNBQVgsQ0FBcUJMLElBQXJCLEdBQTRCLElBQTVCLEdBQW1DakQsS0FBSyxDQUFDd0IsSUFBTixDQUFXOEIsU0FBWCxDQUFxQk4sSUFBL0YsRUFBcUdnRCxXQUFyRztBQUNEOztBQUVEeEIsWUFBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmxCLFVBQWpCO0FBQ0FVLFlBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSyxhQUEzQjtBQUNBTixZQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0IsQ0Fwa0JGLENBcWtCRTs7QUFDQWxDLFlBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0UsYUFBMUIsRUF0a0JGLENBd2tCRTs7QUFDQSxnQkFBSS9CLEdBQUcsQ0FBQzBFLGdCQUFKLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLG1CQUFTckIsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsSUFBSXJELEdBQUcsQ0FBQzBFLGdCQUFKLEVBQXJCLEVBQTZDckIsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRHJELGdCQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCTixTQUFTLENBQUNHLGFBQVYsR0FBMEIsQ0FBMUM7QUFDQWhDLGdCQUFBQSxHQUFHLENBQUNvQyxZQUFKLENBQWlCaEIsU0FBakI7O0FBRUEsb0JBQUk1RixLQUFLLENBQUNtRSxVQUFWLEVBQXNCO0FBQ3BCSyxrQkFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsQ0FBcEIsRUFBdUJHLFNBQVMsR0FBRyxFQUFuQyxFQUF1Q3pGLEtBQUssQ0FBQ2lFLE1BQU4sQ0FBYUMsSUFBcEQsRUFBMEQrQixZQUExRDtBQUNBekIsa0JBQUFBLEdBQUcsQ0FBQzZFLE9BQUosQ0FBWXhCLENBQVo7QUFDQXJELGtCQUFBQSxHQUFHLENBQUNOLElBQUosQ0FDRWxFLEtBQUssQ0FBQ29FLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0J5RCxDQUF4QixHQUE0QixLQUE1QixHQUFvQ3JELEdBQUcsQ0FBQzBFLGdCQUFKLEVBRHRDLEVBRUU1RCxRQUFRLEdBQUcsRUFGYixFQUdFZCxHQUFHLENBQUNlLFFBQUosQ0FBYUMsUUFBYixDQUFzQmhGLE1BQXRCLEdBQStCLENBSGpDO0FBS0Q7QUFDRjtBQUNGLGFBeGxCSCxDQTBsQkU7OztBQUNBLGdCQUFJUixLQUFLLENBQUN3QixJQUFOLENBQVdnQixXQUFmLEVBQTRCO0FBQzFCZ0MsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRyxhQUExQjtBQUNBSixjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ksVUFBM0I7QUFDQWpDLGNBQUFBLEdBQUcsQ0FBQ3NELE9BQUosQ0FBWUMsU0FBWixFQUF1QmhDLGNBQXZCO0FBQ0F2QixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCLGNBQTVCO0FBQ0FBLGNBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSyxhQUEzQjtBQUVBbEMsY0FBQUEsR0FBRyxDQUFDc0QsT0FBSixDQUFZQyxTQUFaLEVBQXVCakMsZ0JBQXZCO0FBQ0F0QixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXZ0IsV0FBdkM7QUFDQTRELGNBQUFBLGFBQWEsSUFBSUMsU0FBUyxDQUFDSSxVQUEzQjtBQUNELGFBcm1CSCxDQXVtQkU7OztBQUNBLGdCQUFJekcsS0FBSyxDQUFDd0IsSUFBTixDQUFXaUIsWUFBZixFQUE2QjtBQUMzQitCLGNBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBMUI7QUFDQUosY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCO0FBQ0FqQyxjQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJoQyxjQUF2QjtBQUNBdkIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QixlQUE1QjtBQUNBQSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFFQWxDLGNBQUFBLEdBQUcsQ0FBQ3NELE9BQUosQ0FBWUMsU0FBWixFQUF1QmpDLGdCQUF2QjtBQUNBdEIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QnBHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV2lCLFlBQXZDO0FBQ0EyRCxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ksVUFBM0I7QUFDRCxhQWxuQkgsQ0FvbkJFOzs7QUFDQSxnQkFBSXpHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV2tCLFFBQWYsRUFBeUI7QUFDdkIwRCxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ksVUFBM0I7QUFDTTZDLGNBQUFBLGVBRmlCLDJCQUdKdEosS0FBSyxDQUFDWSxRQUFOLENBQWVDLElBSFgsMEJBRytCYixLQUFLLENBQUN3QixJQUFOLENBQVdrQixRQUFYLENBQW9CNkcsSUFIbkQsK0JBRzRFdkosS0FBSyxDQUFDd0IsSUFBTixDQUFXa0IsUUFBWCxDQUFvQjhHLE9BSGhHO0FBSWpCQyxjQUFBQSxjQUppQixHQUlBcEYscUJBQXFCLENBQUNpRixlQUFELEVBQW1CcEUsU0FBUyxHQUFHLEVBQS9CLENBSnJCOztBQU12QixrQkFBSWtCLGFBQWEsR0FBR3FELGNBQWMsQ0FBQ2pKLE1BQS9CLEdBQXdDNEUsVUFBNUMsRUFBd0Q7QUFDdERaLGdCQUFBQSxHQUFHLENBQUMyRSxPQUFKO0FBQ0EvQyxnQkFBQUEsYUFBYSxHQUFHLEVBQWhCO0FBQ0Q7O0FBQ0Q1QixjQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJoQyxjQUF2QjtBQUNBdkIsY0FBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QixpQkFBNUI7QUFDQUEsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCO0FBRUFsQyxjQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJqQyxnQkFBdkI7QUFDQXRCLGNBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBMUI7QUFDQWhDLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLEVBQVQsRUFBYWtDLGFBQWIsRUFBNEJxRCxjQUFjLENBQUN2RixJQUEzQztBQUNBa0MsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQVYsR0FBdUJnRCxjQUFjLENBQUNqSixNQUF2RDtBQUNELGFBdm9CSCxDQXlvQkU7OztBQUNBLGdDQUFJUixLQUFLLENBQUN3QixJQUFWLCtEQUFJLGFBQVltQyxLQUFoQix3RUFBSSxtQkFBbUJLLFNBQXZCLGtEQUFJLHNCQUE4QjFELEdBQWxDLEVBQXVDO0FBQ3JDLGtCQUNFOEYsYUFBYSxHQUFHaEIsVUFBaEIsSUFDQ2dCLGFBQWEsR0FBSWhCLFVBQVUsR0FBRyxFQUE5QixJQUFxQ1osR0FBRyxDQUFDMEUsZ0JBQUosS0FBeUIsQ0FGakUsRUFHRTtBQUNBMUUsZ0JBQUFBLEdBQUcsQ0FBQzJFLE9BQUo7QUFDQS9DLGdCQUFBQSxhQUFhLEdBQUcsRUFBaEI7QUFDRDs7QUFFRDVCLGNBQUFBLEdBQUcsQ0FBQ3FDLFFBQUosa0JBQ0U3RyxLQUFLLENBQUN3QixJQURSLHlFQUNFLGNBQVltQyxLQURkLGlGQUNFLG9CQUFtQkssU0FEckIsMERBQ0Usc0JBQThCMUQsR0FEaEMsRUFFRTZGLGtCQUZGLEVBR0ViLFFBQVEsR0FBRyxFQUhiLEVBSUVjLGFBSkYsbUJBS0VwRyxLQUFLLENBQUN3QixJQUxSLHlFQUtFLGNBQVltQyxLQUxkLGlGQUtFLG9CQUFtQkssU0FMckIsMERBS0Usc0JBQThCekQsS0FMaEMsbUJBTUVQLEtBQUssQ0FBQ3dCLElBTlIseUVBTUUsY0FBWW1DLEtBTmQsaUZBTUUsb0JBQW1CSyxTQU5yQiwwREFNRSxzQkFBOEJ4RCxNQU5oQztBQVFBNEYsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNDLGNBQTNCO0FBRUE5QixjQUFBQSxHQUFHLENBQUNtQyxXQUFKLENBQWdCTixTQUFTLENBQUNFLGFBQVYsR0FBMEIsQ0FBMUM7QUFDQS9CLGNBQUFBLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJsQixVQUFqQjs7QUFFQSxtQ0FBSTFGLEtBQUssQ0FBQ3dCLElBQVYsaUVBQUksY0FBWW1DLEtBQWhCLGdEQUFJLG9CQUFtQkcsVUFBdkIsRUFBbUM7QUFDakNzQyxnQkFBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQTNCO0FBQ0FqQyxnQkFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVNvQixRQUFRLEdBQUcsRUFBcEIsRUFBd0JjLGFBQXhCLDZCQUEwQ3BHLEtBQUssQ0FBQ3dCLElBQWhELHlFQUEwQyxjQUFZbUMsS0FBdEQsd0RBQTBDLG9CQUFtQkcsVUFBN0QsUUFBNEVrQyxXQUE1RTtBQUNEOztBQUVESSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDQWxDLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4Qiw2QkFBMENwRyxLQUFLLENBQUN3QixJQUFoRCx5RUFBMEMsY0FBWW1DLEtBQXRELHdEQUEwQyxvQkFBbUJJLFlBQTdELCtCQUE2RS9ELEtBQUssQ0FBQ3dCLElBQW5GLHlFQUE2RSxjQUFZbUMsS0FBekYsd0RBQTZFLG9CQUFtQkMsWUFBaEcsUUFBaUhvQyxXQUFqSDtBQUVBSSxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0ssYUFBM0I7QUFDQWxDLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTb0IsUUFBUSxHQUFHLEVBQXBCLEVBQXdCYyxhQUF4QixnQ0FBNkNwRyxLQUFLLENBQUN3QixJQUFuRCx5RUFBNkMsY0FBWW1DLEtBQXpELHdEQUE2QyxvQkFBbUJFLFVBQWhFLFFBQStFbUMsV0FBL0U7QUFDRCxhQTFxQkgsQ0E0cUJFOzs7QUFDQSxnQkFBSWhHLEtBQUssQ0FBQ3dCLElBQU4sQ0FBV3FCLElBQWYsRUFBcUI7QUFDbkJ1RCxjQUFBQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ0UsYUFBM0I7QUFDTW1ELGNBQUFBLFFBRmEsR0FFRnJGLHFCQUFxQixDQUFDckUsS0FBSyxDQUFDd0IsSUFBTixDQUFXcUIsSUFBWixFQUFtQnFDLFNBQVMsR0FBRyxFQUEvQixDQUZuQjs7QUFJbkIsa0JBQUlrQixhQUFhLEdBQUdzRCxRQUFRLENBQUNsSixNQUF6QixHQUFrQzRFLFVBQXRDLEVBQWtEO0FBQ2hEWixnQkFBQUEsR0FBRyxDQUFDMkUsT0FBSjtBQUNBL0MsZ0JBQUFBLGFBQWEsR0FBRyxFQUFoQjtBQUNEOztBQUNENUIsY0FBQUEsR0FBRyxDQUFDc0QsT0FBSixDQUFZQyxTQUFaLEVBQXVCaEMsY0FBdkI7QUFDQXZCLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLEVBQVQsRUFBYWtDLGFBQWIsRUFBNEIsTUFBNUI7QUFDQUEsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCO0FBRUFsQyxjQUFBQSxHQUFHLENBQUNzRCxPQUFKLENBQVlDLFNBQVosRUFBdUJqQyxnQkFBdkI7QUFDQXRCLGNBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBMUI7QUFDQWhDLGNBQUFBLEdBQUcsQ0FBQ04sSUFBSixDQUFTLEVBQVQsRUFBYWtDLGFBQWIsRUFBNEJzRCxRQUFRLENBQUN4RixJQUFyQztBQUNBa0MsY0FBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNJLFVBQVYsR0FBdUJpRCxRQUFRLENBQUNsSixNQUFqRDtBQUNEOztBQUVLbUosWUFBQUEsT0EvckJSLEdBK3JCa0IsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCbkYsY0FBQUEsR0FBRyxDQUFDbUMsV0FBSixDQUFnQk4sU0FBUyxDQUFDRSxhQUFWLEdBQTBCLENBQTFDO0FBQ0EvQixjQUFBQSxHQUFHLENBQUNvQyxZQUFKLENBQWlCbEIsVUFBakI7O0FBRUEsa0JBQUksa0JBQUExRixLQUFLLENBQUN3QixJQUFOLGdFQUFZbUIsSUFBWixDQUFpQmlDLE1BQWpCLElBQTBCLENBQTlCLEVBQWlDO0FBQUE7O0FBQy9Cd0IsZ0JBQUFBLGFBQWEsSUFBSSxDQUFqQjtBQUNBLGlDQUFBcEcsS0FBSyxDQUFDd0IsSUFBTixzRkFBWW1CLElBQVosMEVBQWtCeUYsT0FBbEIsQ0FBMEIsVUFBQ3dCLEVBQUQsRUFBS3RCLEtBQUwsRUFBZTtBQUN2QyxzQkFBTTNGLElBQUksR0FBRzBCLHFCQUFxQixDQUFDdUYsRUFBRCxFQUFNMUUsU0FBUyxHQUFHLEVBQWxCLENBQWxDOztBQUNBLHNCQUFJa0IsYUFBYSxHQUFHekQsSUFBSSxDQUFDbkMsTUFBckIsR0FBOEI0RSxVQUFsQyxFQUE4QztBQUM1Q1osb0JBQUFBLEdBQUcsQ0FBQzJFLE9BQUo7QUFDQS9DLG9CQUFBQSxhQUFhLEdBQUcsRUFBaEI7QUFDRDs7QUFFRCxzQkFBSWtDLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2Y5RCxvQkFBQUEsR0FBRyxDQUFDc0QsT0FBSixDQUFZQyxTQUFaLEVBQXVCaEMsY0FBdkI7QUFDQXZCLG9CQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBUyxFQUFULEVBQWFrQyxhQUFiLEVBQTRCcEcsS0FBSyxDQUFDd0IsSUFBTixDQUFXZSxTQUF2QztBQUNBaUMsb0JBQUFBLEdBQUcsQ0FBQ3NELE9BQUosQ0FBWUMsU0FBWixFQUF1QmpDLGdCQUF2QjtBQUNBTSxvQkFBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQTNCO0FBQ0Q7O0FBQ0RsQyxrQkFBQUEsR0FBRyxDQUFDTixJQUFKLENBQVMsRUFBVCxFQUFha0MsYUFBYixFQUE0QnpELElBQUksQ0FBQ3VCLElBQWpDO0FBQ0FrQyxrQkFBQUEsYUFBYSxJQUFJQyxTQUFTLENBQUNLLGFBQVYsR0FBMEIvRCxJQUFJLENBQUNuQyxNQUFoRDtBQUNELGlCQWZEO0FBZ0JEO0FBQ0YsYUF0dEJIOztBQXd0QkUsZ0JBQUksa0JBQUFSLEtBQUssQ0FBQ3dCLElBQU4sc0ZBQVltQixJQUFaLDBFQUFrQmlDLE1BQWxCLElBQTJCLENBQS9CLEVBQWtDK0UsT0FBTyxHQXh0QjNDLENBMHRCRTs7QUFDQSxnQkFBSW5GLEdBQUcsQ0FBQzBFLGdCQUFKLE9BQTJCLENBQTNCLElBQWdDbEosS0FBSyxDQUFDbUUsVUFBMUMsRUFBc0Q7QUFDcERLLGNBQUFBLEdBQUcsQ0FBQ21DLFdBQUosQ0FBZ0JOLFNBQVMsQ0FBQ0csYUFBVixHQUEwQixDQUExQztBQUNBaEMsY0FBQUEsR0FBRyxDQUFDb0MsWUFBSixDQUFpQmhCLFNBQWpCO0FBQ0FwQixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FBU29CLFFBQVEsR0FBRyxDQUFwQixFQUF1QkcsU0FBUyxHQUFHLEVBQW5DLEVBQXVDekYsS0FBSyxDQUFDaUUsTUFBTixDQUFhQyxJQUFwRCxFQUEwRCtCLFlBQTFEO0FBQ0F6QixjQUFBQSxHQUFHLENBQUNOLElBQUosQ0FDRWxFLEtBQUssQ0FBQ29FLFNBQU4sR0FBa0IsT0FEcEIsRUFFRWtCLFFBQVEsR0FBRyxFQUZiLEVBR0VkLEdBQUcsQ0FBQ2UsUUFBSixDQUFhQyxRQUFiLENBQXNCaEYsTUFBdEIsR0FBK0IsQ0FIakM7QUFLRDs7QUFFR3FKLFlBQUFBLFNBdHVCTixHQXN1QmtCO0FBQ2RDLGNBQUFBLFdBQVcsRUFBRXRGLEdBQUcsQ0FBQzBFLGdCQUFKO0FBREMsYUF0dUJsQjs7QUEwdUJFLGdCQUFJbEosS0FBSyxDQUFDRSxvQkFBVixFQUFnQztBQUM5QjJKLGNBQUFBLFNBQVMsbUNBQ0pBLFNBREk7QUFFUEUsZ0JBQUFBLGNBQWMsRUFBRXZGO0FBRlQsZ0JBQVQ7QUFJRDs7QUFFRCxnQkFBSXhFLEtBQUssQ0FBQ0MsVUFBTixLQUFxQlYsVUFBVSxDQUFDQyxJQUFwQyxFQUEwQ2dGLEdBQUcsQ0FBQ3dGLElBQUosQ0FBU2hLLEtBQUssQ0FBQ0csUUFBZixFQUExQyxLQUNLLElBQUlILEtBQUssQ0FBQ0MsVUFBTixLQUFxQlYsVUFBVSxDQUFDSyxJQUFwQyxFQUEwQztBQUN2Q3FLLGNBQUFBLFVBRHVDLEdBQzFCekYsR0FBRyxDQUFDMEYsTUFBSixDQUFXM0ssVUFBVSxDQUFDSyxJQUF0QixDQUQwQjtBQUU3Q2lLLGNBQUFBLFNBQVMsbUNBQ0pBLFNBREk7QUFFUE0sZ0JBQUFBLElBQUksRUFBRUY7QUFGQyxnQkFBVDtBQUlELGFBTkksTUFNRSxJQUFJakssS0FBSyxDQUFDQyxVQUFOLEtBQXFCVixVQUFVLENBQUNFLGFBQXBDLEVBQW1EO0FBQ3hEb0ssY0FBQUEsU0FBUyxtQ0FDSkEsU0FESTtBQUVQTyxnQkFBQUEsYUFBYSxFQUFFNUYsR0FBRyxDQUFDMEYsTUFBSixDQUFXM0ssVUFBVSxDQUFDRSxhQUF0QixFQUFxQztBQUNsRDRLLGtCQUFBQSxRQUFRLEVBQUVySyxLQUFLLENBQUNHO0FBRGtDLGlCQUFyQztBQUZSLGdCQUFUO0FBTUQsYUFQTSxNQU9BLElBQUlILEtBQUssQ0FBQ0MsVUFBTixLQUFxQlYsVUFBVSxDQUFDTSxXQUFwQyxFQUFpRDtBQUN0RGdLLGNBQUFBLFNBQVMsbUNBQ0pBLFNBREk7QUFFUFMsZ0JBQUFBLFdBQVcsRUFBRTlGLEdBQUcsQ0FBQzBGLE1BQUosQ0FBVzNLLFVBQVUsQ0FBQ00sV0FBdEI7QUFGTixnQkFBVDtBQUlELGFBTE0sTUFNTDJFLEdBQUcsQ0FBQzBGLE1BQUosQ0FBV2xLLEtBQUssQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0JvSyxjQUFBQSxRQUFRLEVBQUVySyxLQUFLLENBQUNHO0FBRFcsYUFBN0I7QUFyd0JKLDZDQXl3QlMwSixTQXp3QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztlQTR3QmUvSixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSdcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZSdcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICBpbmRpYUlSUD86IHtcbiAqICAgICAgICAgIHFyQ29kZTogc3RyaW5nLFxuICogICAgICAgICAgaXJuOiBzdHJpbmdcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSwgICAgIFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YT8uaW5kaWFJUlA/LnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICBpcm46IHByb3BzLmRhdGE/LmluZGlhSVJQPy5pcm4gfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IFwiXCIsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgZmFsc2UsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlXG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiXG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIlxuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIlxuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiXG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiXG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCJcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSAnQ29tcGFueSBBZHJlc3MnXG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9ICdQTkcnXG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuXG4gIGlmKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlciwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICAvLyBJUlAgUVIgY29kZVxuICAgIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICAgIGlmIChJUlBRckNvZGUpIHtcbiAgICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuICBcbiAgICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAzMFxuICAgICAgICAgICk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpXG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIFxuICAgICAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcbiAgICAgIFxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgICAgfVxuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMiwgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBcbiAgICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICB9XG4gICAgXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG4gICAgXG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICAgIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpXG4gIH07XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gICAgaWYocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGlmIChwYXJhbS5kYXRhPy5pbmRpYUlSUD8uaXJuKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBJUk46ICR7cGFyYW0uZGF0YT8uaW5kaWFJUlAuaXJufWAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlciB8fCBwYXJhbS5kYXRhPy5pbmRpYUlSUD8uaXJuKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBwYXJhbS5kYXRhLmRhdGUxKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWxcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbFxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGgvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IHBhcmFtLmRhdGEuZGF0ZTEpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGgvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKXtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH1lbHNle1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMiwgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsICgocGFnZVdpZHRoLzMpIC0gMjUpKVxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGgvMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodCA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodCA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLCAoKHBhZ2VXaWR0aC8zKSAtIDI1KSlcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMywgKChwYWdlV2lkdGgvMykgLSAyNSkpXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0ID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0IDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHwgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aC8zLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgfVxuICBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIDcpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCA3KTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIHRkV2lkdGgsIGxpbmVIZWlnaHQpO1xuICAgICAgZWxzZSBkb2MucmVjdCh0ZFdpZHRoICogaSArIDEwLCBjdXJyZW50SGVpZ2h0LCB0ZFdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMTA7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PSAwKSBkb2MudGV4dChyb3csIDExLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQocm93LCBpbmRleCAqIHRkV2lkdGggKyAxMSwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpOyBcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHJyLnRvU3RyaW5nKCksIHRkV2lkdGggLSAxKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocnIudG9TdHJpbmcoKSwgdGRXaWR0aCAtIDEpOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgaWYgKGluZGV4ID09IDApIGRvYy50ZXh0KGl0ZW0udGV4dCwgMTEsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICAgIGVsc2UgZG9jLnRleHQoaXRlbS50ZXh0LCAxMSArIGluZGV4ICogdGRXaWR0aCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiAocGFnZUhlaWdodCAtIDEwKSAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIC8vcmVzZXQgdGhlIGhlaWdodCB0aGF0IHdhcyBpbmNyZWFzZWQgdG8gY2hlY2sgdGhlIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gIFxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTsgXG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KCdObyBEYXRhJywgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gKHBhZ2VIZWlnaHQgLSAxMCkgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTsgXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksIEFMSUdOX1JJR0hUKTtcblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMiwgQUxJR05fUklHSFQpO1xuICB9XG4gIC8vZW5kIHJvdzFcblxuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMiwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnUmVxdWVzdGVkIEJ5Jyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHRcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnQXV0aG9yaXNlZCBCeScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodFxuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gXG4gICAgICBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YFxuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHN0YXRpY1ZBQ29udGVudCwgKHBhZ2VXaWR0aCAtIDQwKSlcbiAgXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgJ1BheW1lbnQgZGV0YWlscycpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gKHBhZ2VIZWlnaHQgLSAxMCkgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cblxuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLCBBTElHTl9SSUdIVCk7XG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgLy8gTm90ZSBcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCAocGFnZVdpZHRoIC0gNDApKVxuICBcbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCAnTm90ZScpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgKHBhZ2VXaWR0aCAtIDQwKSlcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgZGVzYy5oZWlnaHQ7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXX0=