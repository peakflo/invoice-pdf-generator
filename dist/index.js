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
require("jspdf-autotable");
var _qrcode = _interopRequireDefault(require("qrcode"));
var _font = require("./font");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
 *       headerWidth?: number[],
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
 *       pdfTitle?: string,
 *       staticVA?: {
 *          account: string,
 *          bank: string,
 *       },
 *      indiaIRP?: {
 *          qrCode: string,
 *          irn: string,
 *          label4: string,
 *          gstRegType: string,
 *          label1: string,
 *          hsnNum: string,
 *          label3: string,
 *          gstStateWithCode: string
 *          label2: string,
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
 *           col4?: any,
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
 *           col4?: string,
 *           col5?: string,
 *           totalConv?: string,
 *           defaultCurrency?: string,
 *           convRate?: string,
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data25$row, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data29$row$sty, _props$data30, _props$data30$row, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data33$row$sty, _props$data34, _props$data34$total, _props$data35, _props$data35$total, _props$data36, _props$data36$total, _props$data37, _props$data37$total, _props$data38, _props$data38$total, _props$data39, _props$data39$total, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$row, _props$data42$row$sty, _props$data43, _props$data43$amountD, _props$data44, _props$data44$amountD, _props$data45, _props$data45$amountD, _props$data46, _props$data46$amountD, _props$data46$amountD2, _props$data47, _props$data48, _props$data49, _props$data49$eSign, _props$data50, _props$data50$eSign, _props$data51, _props$data51$eSign, _props$data52, _props$data52$eSign, _props$data53, _props$data53$eSign, _props$data53$eSign$s, _props$data54, _props$data54$eSign, _props$data54$eSign$s, _props$data55, _props$data55$eSign, _props$data55$eSign$s, _props$data56, _props$data56$eSign, _props$data56$eSign$s, _props$data56$eSign$s2, _props$data57, _props$data57$eSign, _props$data57$eSign$s, _props$data57$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, boxWidth, boxHeight, boxX, boxY, finalRowCount, _param$data$row, taxData, finalRowHeight, diff, totalInWords, i, staticVAContent, paymentDetails, addDesc, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, returnObj, blobOutput;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getTdWidthDimensions = function _getTdWidthDimensions() {
            var leftShift = 10;
            var result = [];
            for (var i = 0; i < param.data.header.length; i++) {
              var _param$data$headerWid, _param$data$headerWid2;
              result.push({
                shift: leftShift,
                width: (_param$data$headerWid = param.data.headerWidth) !== null && _param$data$headerWid !== void 0 && _param$data$headerWid[i] ? (pageWidth - 20) * param.data.headerWidth[i] : tdWidth
              });
              leftShift = leftShift + ((_param$data$headerWid2 = param.data.headerWidth) !== null && _param$data$headerWid2 !== void 0 && _param$data$headerWid2[i] ? (pageWidth - 20) * param.data.headerWidth[i] : tdWidth);
            }
            return result;
          };
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
            data: _objectSpread(_objectSpread({
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
              headerWidth: ((_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.headerWidth) || [],
              table: ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.table) || [],
              subTotal: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.subTotal) || "",
              currency: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.currency) || "",
              descLabel: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.descLabel) || "",
              requestedBy: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.requestedBy) || "",
              authorisedBy: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.authorisedBy) || "",
              staticVA: (_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.staticVA,
              desc: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.desc) || "",
              creditNoteLabel: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.creditNoteLabel) || "",
              note: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : _props$data23.note) || "",
              pdfTitle: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : _props$data24.pdfTitle) || "",
              row1: {
                col1: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : (_props$data25$row = _props$data25.row1) === null || _props$data25$row === void 0 ? void 0 : _props$data25$row.col1) || "",
                col2: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$row = _props$data26.row1) === null || _props$data26$row === void 0 ? void 0 : _props$data26$row.col2) || "",
                col3: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$row = _props$data27.row1) === null || _props$data27$row === void 0 ? void 0 : _props$data27$row.col3) || "",
                col4: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$row = _props$data28.row1) === null || _props$data28$row === void 0 ? void 0 : _props$data28$row.col4) || [],
                style: {
                  fontSize: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row1) === null || _props$data29$row === void 0 ? void 0 : (_props$data29$row$sty = _props$data29$row.style) === null || _props$data29$row$sty === void 0 ? void 0 : _props$data29$row$sty.fontSize) || 12
                }
              },
              row2: {
                col1: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$row = _props$data30.row2) === null || _props$data30$row === void 0 ? void 0 : _props$data30$row.col1) || "",
                col2: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row2) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.col2) || "",
                col3: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row2) === null || _props$data32$row === void 0 ? void 0 : _props$data32$row.col3) || "",
                style: {
                  fontSize: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row2) === null || _props$data33$row === void 0 ? void 0 : (_props$data33$row$sty = _props$data33$row.style) === null || _props$data33$row$sty === void 0 ? void 0 : _props$data33$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$total = _props$data34.total) === null || _props$data34$total === void 0 ? void 0 : _props$data34$total.col1) || "",
                // Total label
                col2: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$total = _props$data35.total) === null || _props$data35$total === void 0 ? void 0 : _props$data35$total.col2) || "",
                // Total amount
                col3: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$total = _props$data36.total) === null || _props$data36$total === void 0 ? void 0 : _props$data36$total.col3) || "",
                // Invoice currency
                col4: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$total = _props$data37.total) === null || _props$data37$total === void 0 ? void 0 : _props$data37$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$total = _props$data38.total) === null || _props$data38$total === void 0 ? void 0 : _props$data38$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$total = _props$data39.total) === null || _props$data39$total === void 0 ? void 0 : _props$data39$total.totalConv) || "",
                // Total converted amount
                defaultCurrency: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$total = _props$data40.total) === null || _props$data40$total === void 0 ? void 0 : _props$data40$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$total = _props$data41.total) === null || _props$data41$total === void 0 ? void 0 : _props$data41$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$row = _props$data42.row2) === null || _props$data42$row === void 0 ? void 0 : (_props$data42$row$sty = _props$data42$row.style) === null || _props$data42$row$sty === void 0 ? void 0 : _props$data42$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$amountD = _props$data43.amountDue) === null || _props$data43$amountD === void 0 ? void 0 : _props$data43$amountD.col1) || "",
                col2: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$amountD = _props$data44.amountDue) === null || _props$data44$amountD === void 0 ? void 0 : _props$data44$amountD.col2) || "",
                col3: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$amountD = _props$data45.amountDue) === null || _props$data45$amountD === void 0 ? void 0 : _props$data45$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$amountD = _props$data46.amountDue) === null || _props$data46$amountD === void 0 ? void 0 : (_props$data46$amountD2 = _props$data46$amountD.style) === null || _props$data46$amountD2 === void 0 ? void 0 : _props$data46$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : _props$data47.creditNote) || ""
            }, ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : _props$data48.indiaIRP) && {
              indiaIRP: {
                qrCode: props.data.indiaIRP.qrCode || "",
                irn: props.data.indiaIRP.irn || "",
                gstRegType: props.data.indiaIRP.gstRegType || "",
                hsnNum: props.data.indiaIRP.hsnNum || "",
                gstStateWithCode: props.data.indiaIRP.gstStateWithCode || "",
                label1: props.data.indiaIRP.label1 || "",
                label2: props.data.indiaIRP.label2 || "",
                label3: props.data.indiaIRP.label3 || "",
                label4: props.data.indiaIRP.label4 || ""
              }
            }), {}, {
              eSign: {
                approverName: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$eSign = _props$data49.eSign) === null || _props$data49$eSign === void 0 ? void 0 : _props$data49$eSign.approverName) || "",
                approvedAt: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$eSign = _props$data50.eSign) === null || _props$data50$eSign === void 0 ? void 0 : _props$data50$eSign.approvedAt) || "",
                authorizer: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$eSign = _props$data51.eSign) === null || _props$data51$eSign === void 0 ? void 0 : _props$data51$eSign.authorizer) || "",
                approverText: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : (_props$data52$eSign = _props$data52.eSign) === null || _props$data52$eSign === void 0 ? void 0 : _props$data52$eSign.approverText) || "",
                signature: {
                  src: ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : (_props$data53$eSign = _props$data53.eSign) === null || _props$data53$eSign === void 0 ? void 0 : (_props$data53$eSign$s = _props$data53$eSign.signature) === null || _props$data53$eSign$s === void 0 ? void 0 : _props$data53$eSign$s.src) || "",
                  width: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$eSign = _props$data54.eSign) === null || _props$data54$eSign === void 0 ? void 0 : (_props$data54$eSign$s = _props$data54$eSign.signature) === null || _props$data54$eSign$s === void 0 ? void 0 : _props$data54$eSign$s.width) || 55,
                  height: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$eSign = _props$data55.eSign) === null || _props$data55$eSign === void 0 ? void 0 : (_props$data55$eSign$s = _props$data55$eSign.signature) === null || _props$data55$eSign$s === void 0 ? void 0 : _props$data55$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$eSign = _props$data56.eSign) === null || _props$data56$eSign === void 0 ? void 0 : (_props$data56$eSign$s = _props$data56$eSign.signature) === null || _props$data56$eSign$s === void 0 ? void 0 : (_props$data56$eSign$s2 = _props$data56$eSign$s.margin) === null || _props$data56$eSign$s2 === void 0 ? void 0 : _props$data56$eSign$s2.top) || "",
                    left: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : (_props$data57$eSign = _props$data57.eSign) === null || _props$data57$eSign === void 0 ? void 0 : (_props$data57$eSign$s = _props$data57$eSign.signature) === null || _props$data57$eSign$s === void 0 ? void 0 : (_props$data57$eSign$s2 = _props$data57$eSign$s.margin) === null || _props$data57$eSign$s2 === void 0 ? void 0 : _props$data57$eSign$s2.left) || ""
                  }
                }
              }
            }),
            footer: {
              text: ((_props$footer = props.footer) === null || _props$footer === void 0 ? void 0 : _props$footer.text) || ""
            },
            pageEnable: props.pageEnable || true,
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
            _context.next = 6;
            break;
          }
          if (!(param.data.table[0].length != param.data.header.length)) {
            _context.next = 6;
            break;
          }
          throw Error("Length of header and table column must be equal.");
        case 6:
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
          ALIGN_LEFT = "left";
          ALIGN_CENTER = "center";
          ISSUER_ADDRESS_LABEL = "Company Address";
          IMAGE_CONTENT_TYPE = "PNG";
          CUSTOM_FONT_NAME = "customFont"; //starting at 15mm
          currentHeight = 15;
          pdfConfig = {
            headerTextSize: 20,
            labelTitleSize: 16,
            labelTextSize: 12,
            fieldTextSize: 10,
            textSizeSmall: 8,
            lineHeight: 6,
            subLineHeight: 4
          };
          doc.addFileToVFS("customFont.ttf", (0, _font.getCustomFont)());
          doc.addFont("customFont.ttf", CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
          doc.setFont(CUSTOM_FONT_NAME);
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
          doc.setTextColor(colorBlack);
          // IRP QR code
          // If QR code is availble, align issuer address to left. Else keep in right.
          IRPQrCode = (_param$data = param.data) === null || _param$data === void 0 ? void 0 : (_param$data$indiaIRP = _param$data.indiaIRP) === null || _param$data$indiaIRP === void 0 ? void 0 : _param$data$indiaIRP.qrCode;
          if (!IRPQrCode) {
            _context.next = 53;
            break;
          }
          _context.next = 40;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 40:
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
          _context.next = 64;
          break;
        case 53:
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
        case 64:
          doc.setTextColor(colorGray);

          //line breaker after logo & business info
          if (param.data.header.length) {
            currentHeight += pdfConfig.subLineHeight;
            doc.line(10, currentHeight, docWidth - 10, currentHeight);
          }

          //Contact part
          doc.setTextColor(colorGray);
          doc.setFontSize(pdfConfig.fieldTextSize);
          currentHeight += pdfConfig.lineHeight + 2;
          doc.setFontSize(pdfConfig.headerTextSize - 7);
          if (param.contact.name) {
            doc.text(10, currentHeight, param.contact.name);
          }
          doc.setTextColor(colorBlack);
          doc.setTextColor(lightGray);
          doc.setFontSize(pdfConfig.headerTextSize - 5);
          if (param.data.label && param.data.num) {
            doc.text(docWidth - 10, currentHeight, param.data.label + param.data.num, ALIGN_RIGHT);
          }
          if (param.contact.name || param.data.label && param.data.num) currentHeight += pdfConfig.subLineHeight + 2;
          doc.setTextColor(colorGray);
          doc.setFontSize(pdfConfig.fieldTextSize);
          currentHeight += pdfConfig.subLineHeight;
          if ((_param$contact = param.contact) !== null && _param$contact !== void 0 && (_param$contact$billin = _param$contact.billingAddress) !== null && _param$contact$billin !== void 0 && _param$contact$billin.label || param.data.date1 || param.data.date2) {
            doc.setTextColor(colorBlack);
            billingAddressLabel = (_param$contact2 = param.contact) === null || _param$contact2 === void 0 ? void 0 : _param$contact2.billingAddress.label;
            shippingAddressLabel = (_param$contact3 = param.contact) === null || _param$contact3 === void 0 ? void 0 : _param$contact3.shippingAddress.label;
            doc.text(10, currentHeight, billingAddressLabel);
            doc.text(pageWidth / 3, currentHeight, shippingAddressLabel);
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            if ((_param$data2 = param.data) !== null && _param$data2 !== void 0 && _param$data2.netTerm || (_param$data3 = param.data) !== null && _param$data3 !== void 0 && _param$data3.netTermLabel) {
              doc.text(docWidth - 70, currentHeight, param.data.date1Label, ALIGN_RIGHT);
              doc.text(docWidth - 40, currentHeight, param.data.netTermLabel, ALIGN_RIGHT);
            } else {
              doc.text(docWidth - 10, currentHeight, param.data.date1Label, ALIGN_RIGHT);
            }
            doc.text(docWidth - 10, currentHeight, param.data.date2Label, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
          }
          if ((_param$contact4 = param.contact) !== null && _param$contact4 !== void 0 && (_param$contact4$billi = _param$contact4.billingAddress) !== null && _param$contact4$billi !== void 0 && _param$contact4$billi.label || param.data.date1 || param.data.date2) {
            billingAddress = splitTextAndGetHeight((_param$contact5 = param.contact) === null || _param$contact5 === void 0 ? void 0 : _param$contact5.billingAddress.address, pageWidth / 2);
            shippingAddress = splitTextAndGetHeight((_param$contact6 = param.contact) === null || _param$contact6 === void 0 ? void 0 : _param$contact6.shippingAddress.address, pageWidth / 2);
            doc.text(10, currentHeight, billingAddress.text);
            doc.text(pageWidth / 3, currentHeight, shippingAddress.text);
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            if ((_param$data4 = param.data) !== null && _param$data4 !== void 0 && _param$data4.netTerm || (_param$data5 = param.data) !== null && _param$data5 !== void 0 && _param$data5.netTermLabel) {
              doc.text(docWidth - 70, currentHeight, param.data.date1, ALIGN_RIGHT);
              doc.text(docWidth - 40, currentHeight, param.data.netTerm, ALIGN_RIGHT);
            } else {
              doc.text(docWidth - 40, currentHeight, param.data.date1, ALIGN_RIGHT);
            }
            doc.text(docWidth - 10, currentHeight, param.data.date2, ALIGN_RIGHT);
            currentHeight += billingAddress.height > shippingAddress.height ? billingAddress.height : shippingAddress.height;
          }
          if ((_param$contact7 = param.contact) !== null && _param$contact7 !== void 0 && _param$contact7.billingAddress.addressLine1 || param.data.date2) {
            _billingAddress = splitTextAndGetHeight((_param$contact8 = param.contact) === null || _param$contact8 === void 0 ? void 0 : _param$contact8.billingAddress.addressLine2, pageWidth / 3 - 25);
            _shippingAddress = splitTextAndGetHeight((_param$contact9 = param.contact) === null || _param$contact9 === void 0 ? void 0 : _param$contact9.shippingAddress.addressLine2, pageWidth / 3 - 25);
            doc.text(10, currentHeight, _billingAddress.text);
            doc.text(pageWidth / 3, currentHeight, _shippingAddress.text);
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            currentHeight += _billingAddress.height > _shippingAddress.height ? _billingAddress.height : _shippingAddress.height;
          }
          if ((_param$contact10 = param.contact) !== null && _param$contact10 !== void 0 && _param$contact10.billingAddress.addressLine3) {
            _billingAddress2 = splitTextAndGetHeight((_param$contact11 = param.contact) === null || _param$contact11 === void 0 ? void 0 : _param$contact11.billingAddress.addressLine3, pageWidth / 3 - 25);
            _shippingAddress2 = splitTextAndGetHeight((_param$contact12 = param.contact) === null || _param$contact12 === void 0 ? void 0 : _param$contact12.shippingAddress.addressLine3, pageWidth / 3 - 25);
            doc.text(10, currentHeight, _billingAddress2.text);
            doc.text(pageWidth / 3, currentHeight, _shippingAddress2.text);
            currentHeight += _billingAddress2.height > _shippingAddress2.height ? _billingAddress2.height : _shippingAddress2.height;
          }
          if (param.contact.billingAddress.country || param.contact.shippingAddress.country) {
            doc.text(10, currentHeight, param.contact.billingAddress.country);
            doc.text(pageWidth / 3, currentHeight, param.contact.shippingAddress.country);
          } else currentHeight -= pdfConfig.subLineHeight;
          //end contact part

          if ((_param$contact13 = param.contact) !== null && _param$contact13 !== void 0 && _param$contact13.taxNumber) {
            currentHeight += pdfConfig.subLineHeight;
            doc.text(10, currentHeight, param.contact.taxNumber);
          }
          indiaIRP = (_param$data6 = param.data) === null || _param$data6 === void 0 ? void 0 : _param$data6.indiaIRP;
          if (indiaIRP) {
            currentHeight += 2 * pdfConfig.subLineHeight;
            if (indiaIRP.gstRegType) {
              doc.setFont(undefined, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, indiaIRP.label1);
              doc.setFont(undefined, FONT_TYPE_BOLD);
              doc.text(10 + doc.getTextWidth(indiaIRP.label1), currentHeight, indiaIRP.gstRegType);
              currentHeight += pdfConfig.subLineHeight;
            }
            if (indiaIRP.gstStateWithCode) {
              doc.setFont(undefined, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, indiaIRP.label2);
              doc.setFont(undefined, FONT_TYPE_BOLD);
              doc.text(10 + doc.getTextWidth(indiaIRP.label2), currentHeight, indiaIRP.gstStateWithCode);
              currentHeight += pdfConfig.subLineHeight;
            }
            if (indiaIRP.hsnNum) {
              doc.setFont(undefined, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, indiaIRP.label3);
              doc.setFont(undefined, FONT_TYPE_BOLD);
              doc.text(10 + doc.getTextWidth(indiaIRP.label3), currentHeight, indiaIRP.hsnNum);
              currentHeight += pdfConfig.subLineHeight;
            }
            if (indiaIRP.irn) {
              doc.setFont(undefined, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, indiaIRP.label4);
              doc.setFont(undefined, FONT_TYPE_BOLD);
              doc.text(10 + doc.getTextWidth(indiaIRP.label4), currentHeight, indiaIRP.irn);
              currentHeight += pdfConfig.subLineHeight;
            }
          } else {
            doc.setFont(undefined, FONT_TYPE_BOLD);
            currentHeight += pdfConfig.subLineHeight;
          }

          // INVOICE TITLE - INMOBI change
          if ((_param$data7 = param.data) !== null && _param$data7 !== void 0 && _param$data7.pdfTitle) {
            currentHeight += pdfConfig.subLineHeight + 2;
            // doc.setTextColor(colorBlue);
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.text(10, currentHeight, (_param$data8 = param.data) === null || _param$data8 === void 0 ? void 0 : _param$data8.pdfTitle, ALIGN_LEFT);
          }
          doc.setTextColor(colorGray);

          //TABLE PART
          tdWidth = (pageWidth - 20) / param.data.header.length;
          addTableHeaderBoarder = function addTableHeaderBoarder() {
            var tdWidthDimensions = getTdWidthDimensions();
            currentHeight += 2;
            for (var i = 0; i < param.data.header.length; i++) {
              var _tdWidthDimensions$i, _tdWidthDimensions$i2;
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.rect(tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$i = tdWidthDimensions[i]) === null || _tdWidthDimensions$i === void 0 ? void 0 : _tdWidthDimensions$i.shift, currentHeight, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$i2 = tdWidthDimensions[i]) === null || _tdWidthDimensions$i2 === void 0 ? void 0 : _tdWidthDimensions$i2.width, 7);
            }
            currentHeight -= 2;
          };
          addTableBodyBoarder = function addTableBodyBoarder(lineHeight) {
            var tdWidthDimensions = getTdWidthDimensions();
            for (var i = 0; i < param.data.header.length; i++) {
              var _tdWidthDimensions$i3, _tdWidthDimensions$i4;
              doc.rect(tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$i3 = tdWidthDimensions[i]) === null || _tdWidthDimensions$i3 === void 0 ? void 0 : _tdWidthDimensions$i3.shift, currentHeight, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$i4 = tdWidthDimensions[i]) === null || _tdWidthDimensions$i4 === void 0 ? void 0 : _tdWidthDimensions$i4.width, lineHeight);
            }
          };
          addTableHeader = function addTableHeader() {
            if (param.data.headerBorder) addTableHeaderBoarder();
            currentHeight += pdfConfig.subLineHeight + 10;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setTextColor(colorBlack);
            doc.setFontSize(pdfConfig.fieldTextSize);
            //border color
            doc.setDrawColor(colorGray);
            currentHeight += 2;
            var tdWidthDimensions = getTdWidthDimensions();
            param.data.header.forEach(function (row, index) {
              var _tdWidthDimensions$in;
              doc.text(row, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in = tdWidthDimensions[index]) === null || _tdWidthDimensions$in === void 0 ? void 0 : _tdWidthDimensions$in.shift, currentHeight);
            });
            currentHeight += pdfConfig.subLineHeight - 1;
            doc.setTextColor(colorGray);
            doc.setLineWidth(0.5);
            doc.line(10, currentHeight, docWidth - 10, currentHeight);
          };
          addTableHeader();

          //table body
          tableBodyLength = param.data.table.length;
          doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
          param.data.table.forEach(function (row, index) {
            //get nax height for the current row
            var rowsHeight = [];
            var getRowsHeight = function getRowsHeight() {
              doc.setFontSize(pdfConfig.textSizeSmall);
              var tdWidthDimensions = getTdWidthDimensions();
              row.forEach(function (rr, index) {
                var _tdWidthDimensions$in2;
                //size should be the same used in other td
                var item = splitTextAndGetHeight(rr.toString(), (tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in2 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in2 === void 0 ? void 0 : _tdWidthDimensions$in2.width) - 1); //minus 1, to fix the padding issue between borders
                rowsHeight.push(item.height);
              });
            };
            getRowsHeight();
            var maxHeight = Math.max.apply(Math, rowsHeight);

            //body borders
            if (param.data.tableBodyBorder) addTableBodyBoarder(maxHeight + 1);

            //display text into row cells
            //Object.entries(row).forEach(function(col, index) {
            var tdWidthDimensions = getTdWidthDimensions();
            row.forEach(function (rr, index) {
              var _tdWidthDimensions$in3, _tdWidthDimensions$in4;
              var item = splitTextAndGetHeight(rr.toString(), (tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in3 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in3 === void 0 ? void 0 : _tdWidthDimensions$in3.width) - 1); //minus 1, to fix the padding issue between borders

              doc.text(item.text, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in4 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in4 === void 0 ? void 0 : _tdWidthDimensions$in4.shift, currentHeight + 4);
            });

            //pre-increase currentHeight to check the height based on next row
            if (index + 1 < tableBodyLength) currentHeight += maxHeight;
            if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
              if (index + 1 < tableBodyLength) addTableHeader();
            }

            //reset the height that was increased to check the next row
            if (index + 1 < tableBodyLength && currentHeight > 30)
              // check if new page
              currentHeight -= maxHeight;
            doc.setLineWidth(0.1);
            doc.line(10, currentHeight, docWidth - 10, currentHeight);
            currentHeight += maxHeight + 2;

            //td border height
            currentHeight += 4;
          });

          // no table data
          if (tableBodyLength === 0) {
            currentHeight += 6;
            doc.text("No Data", docWidth / 2, currentHeight);
          }
          doc.setTextColor(colorBlack);
          doc.setFontSize(10);
          currentHeight += pdfConfig.lineHeight;
          if (param.data.subTotal || param.data.row1 || param.data.row2 || param.data.total) {
            if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
            }
          }
          if (param.data.total.totalConv && param.data.total.convRate && param.data.total.defaultCurrency) {
            // (15 = Conv table height) + (10 = box height) = 25
            if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
              doc.addPage();
              currentHeight = 10;
            }

            // Define the box parameters
            boxWidth = 95;
            boxHeight = 30;
            boxX = 10;
            boxY = currentHeight + 10; // Draw the box
            doc.setDrawColor(0, 0, 0);
            doc.setFillColor(255, 255, 255);
            doc.setLineWidth(0.2);
            doc.rect(boxX, boxY, boxWidth, boxHeight, "FD");

            // Add text to the box
            doc.setTextColor(0, 0, 0);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text("For GST reporting purposes:", boxX + 5, boxY + 5);
            doc.line(boxX + 5, boxY + 7.5, boxX + boxWidth - 5, boxY + 7.5);
            doc.setFontSize(10);
            doc.text("1 ".concat(param.data.total.defaultCurrency, " = ").concat(param.data.total.convRate, " ").concat(param.data.total.col3), boxX + 5, boxY + 13);

            // Add the table
            doc.autoTable({
              startY: boxY + 18,
              margin: {
                left: boxX,
                right: 0
              },
              head: [["", "Amount ".concat(param.data.total.defaultCurrency)]],
              body: [["Subtotal", param.data.total.totalConv], [{
                content: "Total ".concat(param.data.total.defaultCurrency),
                fontStyle: "bold"
              }, {
                content: param.data.total.totalConv,
                fontStyle: "bold"
              }]],
              theme: "plain",
              headStyles: {
                fillColor: [255, 255, 255],
                textColor: [0, 0, 0],
                lineColor: [0, 0, 0],
                lineWidth: 0.2,
                fontSize: 8,
                align: "right",
                minCellHeight: 5
              },
              bodyStyles: {
                fillColor: [255, 255, 255],
                textColor: [0, 0, 0],
                lineWidth: 0.2,
                lineColor: [0, 0, 0],
                fontSize: 9,
                minCellHeight: 5
              },
              columnStyles: {
                0: {
                  cellWidth: 40,
                  halign: "right",
                  valign: "top"
                },
                1: {
                  cellWidth: 55,
                  halign: "left",
                  valign: "top"
                }
              },
              rowStyles: {
                1: {
                  fontStyle: "bold"
                }
              }
            });
          }

          // No. of rows of sub total, taxes, discounts .. until Total (NOT TABLE ROWS).
          finalRowCount = 0; //line breaker before invoce total
          if (param.data.header.length && (param.data.subTotal || param.data.subTotalLabel || param.data.currency)) {
            doc.setLineWidth(0.5);
            doc.line(docWidth / 2 + 10, currentHeight, docWidth - 10, currentHeight);
            currentHeight += pdfConfig.lineHeight;
          }

          // Subtotal line
          if (param.data.subTotalLabel && param.data.subTotal) {
            doc.text(docWidth - 50, currentHeight, param.data.subTotalLabel, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.currency + "  " + param.data.subTotal.toLocaleString(), ALIGN_RIGHT);
            finalRowCount += 1;
          }

          //row1 - tax
          if (param.data.row1 && (param.data.row1.col1 || param.data.row1.col2 || param.data.row1.col3)) {
            currentHeight += pdfConfig.lineHeight;
            doc.setFontSize(param.data.row1.style.fontSize);
            doc.text(docWidth - 50, currentHeight, param.data.row1.col1, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.row1.col3 + "  " + param.data.row1.col2, ALIGN_RIGHT);
            finalRowCount += 1;

            // Show all the taxes applied
            taxData = (_param$data$row = param.data.row1) === null || _param$data$row === void 0 ? void 0 : _param$data$row.col4;
            if (taxData) {
              doc.setTextColor(lightGray);
              taxData.forEach(function (tax) {
                currentHeight += pdfConfig.lineHeight;
                if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
                  doc.addPage();
                  currentHeight = 20;
                }
                doc.text(docWidth - 50, currentHeight, "".concat(tax.name, ":"), ALIGN_RIGHT);
                doc.text(docWidth - 10, currentHeight, param.data.row1.col3 + "  " + tax.amount, ALIGN_RIGHT);
              });
              finalRowCount += taxData.length;
            }
          }
          //end row1

          doc.setTextColor(colorBlack);
          //row2 - discounts
          if (param.data.row2 && (param.data.row2.col1 || param.data.row2.col2 || param.data.row2.col3)) {
            currentHeight += pdfConfig.lineHeight;
            doc.setFontSize(param.data.row2.style.fontSize);
            doc.text(docWidth - 50, currentHeight, param.data.row2.col1, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.row2.col2, ALIGN_RIGHT);
            finalRowCount += 1;
          }
          //end row2

          // Main total
          if (param.data.total && (param.data.total.col1 || param.data.total.col2 || param.data.total.col3)) {
            currentHeight += pdfConfig.lineHeight;
            doc.setFontSize(12);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(docWidth - 50, currentHeight, param.data.total.col1, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.total.col3 + "  " + param.data.total.col2, ALIGN_RIGHT);
            finalRowCount += 1;
          }

          // -1 = because the fx rate box is one row lower
          // 5 = each row height
          finalRowHeight = (finalRowCount - 1) * 5; // Add a line height after convertion rate table and totals
          // 35 = height of fx rate box
          if (param.data.total.totalConv && finalRowHeight < 35) {
            diff = 35 - finalRowHeight;
            currentHeight += pdfConfig.fieldTextSize + diff;
          } else {
            currentHeight += pdfConfig.fieldTextSize;
          }

          // Total in words
          if ((_param$data$total = param.data.total) !== null && _param$data$total !== void 0 && _param$data$total.col4 && (_param$data$total2 = param.data.total) !== null && _param$data$total2 !== void 0 && _param$data$total2.col5) {
            totalInWords = splitTextAndGetHeight(param.data.total.col5, pageWidth - 20);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.setFont(undefined, FONT_TYPE_NORMAL);
            doc.text(10, currentHeight, param.data.total.col4);
            doc.setFont(undefined, FONT_TYPE_BOLD);
            doc.text(10 + doc.getTextWidth(param.data.total.col4), currentHeight, totalInWords.text);
            currentHeight += pdfConfig.subLineHeight + totalInWords.height;
          }

          // Amount Due
          doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
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
          currentHeight += pdfConfig.subLineHeight - 1;
          //   currentHeight += pdfConfig.subLineHeight;
          doc.setFontSize(pdfConfig.labelTextSize);

          //add num of pages at the bottom
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
          }

          // requested by
          if (param.data.requestedBy) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Requested By");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.text(10, currentHeight, param.data.requestedBy);
            currentHeight += pdfConfig.lineHeight;
          }

          // authorised by
          if (param.data.authorisedBy) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Authorised By");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.text(10, currentHeight, param.data.authorisedBy);
            currentHeight += pdfConfig.lineHeight;
          }

          // static VA payment details
          if (param.data.staticVA) {
            currentHeight += pdfConfig.lineHeight;
            staticVAContent = "Account Name: ".concat(param.business.name, "\nBank Name: ").concat(param.data.staticVA.bank, "\nAccount Number: ").concat(param.data.staticVA.account);
            paymentDetails = splitTextAndGetHeight(staticVAContent, pageWidth - 40);
            if (currentHeight + paymentDetails.height > pageHeight) {
              doc.addPage();
              currentHeight = 20;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Payment details");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(10, currentHeight, paymentDetails.text);
            currentHeight += pdfConfig.lineHeight + paymentDetails.height;
          }
          addDesc = function addDesc() {
            var _param$data9;
            doc.setFontSize(pdfConfig.labelTextSize - 2);
            doc.setTextColor(colorBlack);
            if (((_param$data9 = param.data) === null || _param$data9 === void 0 ? void 0 : _param$data9.desc.length) > 0) {
              var _param$data10, _param$data10$desc;
              currentHeight += 1;
              (_param$data10 = param.data) === null || _param$data10 === void 0 ? void 0 : (_param$data10$desc = _param$data10.desc) === null || _param$data10$desc === void 0 ? void 0 : _param$data10$desc.forEach(function (el, index) {
                var desc = splitTextAndGetHeight(el, pageWidth - 40);
                if (currentHeight + desc.height > pageHeight) {
                  doc.addPage();
                  currentHeight = 10;
                }
                if (index === 0) {
                  doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
                  doc.text(10, currentHeight, param.data.descLabel);
                  doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
                  currentHeight += pdfConfig.subLineHeight;
                }
                doc.text(10, currentHeight, desc.text);
                currentHeight += desc.height + 1;
              });
            }
          };
          if (((_param$data11 = param.data) === null || _param$data11 === void 0 ? void 0 : (_param$data11$desc = _param$data11.desc) === null || _param$data11$desc === void 0 ? void 0 : _param$data11$desc.length) > 0) addDesc();

          // E signature
          if ((_param$data12 = param.data) !== null && _param$data12 !== void 0 && (_param$data12$eSign = _param$data12.eSign) !== null && _param$data12$eSign !== void 0 && (_param$data12$eSign$s = _param$data12$eSign.signature) !== null && _param$data12$eSign$s !== void 0 && _param$data12$eSign$s.src) {
            if (currentHeight + (((_param$data13 = param.data) === null || _param$data13 === void 0 ? void 0 : (_param$data13$eSign = _param$data13.eSign) === null || _param$data13$eSign === void 0 ? void 0 : (_param$data13$eSign$s = _param$data13$eSign.signature) === null || _param$data13$eSign$s === void 0 ? void 0 : _param$data13$eSign$s.height) || 20) > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
            }
            currentHeight += pdfConfig.subLineHeight;
            doc.addImage((_param$data14 = param.data) === null || _param$data14 === void 0 ? void 0 : (_param$data14$eSign = _param$data14.eSign) === null || _param$data14$eSign === void 0 ? void 0 : (_param$data14$eSign$s = _param$data14$eSign.signature) === null || _param$data14$eSign$s === void 0 ? void 0 : _param$data14$eSign$s.src, IMAGE_CONTENT_TYPE, docWidth - 65, currentHeight, (_param$data15 = param.data) === null || _param$data15 === void 0 ? void 0 : (_param$data15$eSign = _param$data15.eSign) === null || _param$data15$eSign === void 0 ? void 0 : (_param$data15$eSign$s = _param$data15$eSign.signature) === null || _param$data15$eSign$s === void 0 ? void 0 : _param$data15$eSign$s.width, (_param$data16 = param.data) === null || _param$data16 === void 0 ? void 0 : (_param$data16$eSign = _param$data16.eSign) === null || _param$data16$eSign === void 0 ? void 0 : (_param$data16$eSign$s = _param$data16$eSign.signature) === null || _param$data16$eSign$s === void 0 ? void 0 : _param$data16$eSign$s.height);
            currentHeight += pdfConfig.headerTextSize;
            doc.setFontSize(pdfConfig.labelTextSize - 2);
            doc.setTextColor(colorBlack);
            if ((_param$data17 = param.data) !== null && _param$data17 !== void 0 && (_param$data17$eSign = _param$data17.eSign) !== null && _param$data17$eSign !== void 0 && _param$data17$eSign.authorizer) {
              currentHeight += pdfConfig.lineHeight;
              doc.text(docWidth - 10, currentHeight, "".concat((_param$data18 = param.data) === null || _param$data18 === void 0 ? void 0 : (_param$data18$eSign = _param$data18.eSign) === null || _param$data18$eSign === void 0 ? void 0 : _param$data18$eSign.authorizer, ","), ALIGN_RIGHT);
            }
            currentHeight += pdfConfig.subLineHeight;
            doc.text(docWidth - 10, currentHeight, "".concat((_param$data19 = param.data) === null || _param$data19 === void 0 ? void 0 : (_param$data19$eSign = _param$data19.eSign) === null || _param$data19$eSign === void 0 ? void 0 : _param$data19$eSign.approverText, " ").concat((_param$data20 = param.data) === null || _param$data20 === void 0 ? void 0 : (_param$data20$eSign = _param$data20.eSign) === null || _param$data20$eSign === void 0 ? void 0 : _param$data20$eSign.approverName, ","), ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
            doc.text(docWidth - 10, currentHeight, "on ".concat((_param$data21 = param.data) === null || _param$data21 === void 0 ? void 0 : (_param$data21$eSign = _param$data21.eSign) === null || _param$data21$eSign === void 0 ? void 0 : _param$data21$eSign.approvedAt, "."), ALIGN_RIGHT);
          }

          // Note
          if (param.data.note) {
            currentHeight += pdfConfig.labelTextSize;
            noteData = splitTextAndGetHeight(param.data.note, pageWidth - 20);
            if (currentHeight + noteData.height > pageHeight) {
              doc.addPage();
              currentHeight = 10;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.text(10, currentHeight, "Note");
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(10, currentHeight, noteData.text);
            currentHeight += pdfConfig.lineHeight + noteData.height;
          }

          //add num of page at the bottom
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
        case 131:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiT3V0cHV0VHlwZSIsIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJleHBvcnRzIiwianNQREZJbnZvaWNlVGVtcGxhdGUiLCJfeCIsIl9qc1BERkludm9pY2VUZW1wbGF0ZSIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicHJvcHMiLCJfcHJvcHMkbG9nbyIsIl9wcm9wcyRsb2dvMiIsIl9wcm9wcyRsb2dvMyIsIl9wcm9wcyRsb2dvNCIsIl9wcm9wcyRsb2dvNCRtYXJnaW4iLCJfcHJvcHMkbG9nbzUiLCJfcHJvcHMkbG9nbzUkbWFyZ2luIiwiX3Byb3BzJGJ1c2luZXNzIiwiX3Byb3BzJGJ1c2luZXNzMiIsIl9wcm9wcyRidXNpbmVzczMiLCJfcHJvcHMkYnVzaW5lc3M0IiwiX3Byb3BzJGJ1c2luZXNzNSIsIl9wcm9wcyRidXNpbmVzczYiLCJfcHJvcHMkYnVzaW5lc3M3IiwiX3Byb3BzJGNvbnRhY3QiLCJfcHJvcHMkY29udGFjdDIiLCJfcHJvcHMkY29udGFjdDMiLCJfcHJvcHMkY29udGFjdDMkYmlsbGkiLCJfcHJvcHMkY29udGFjdDQiLCJfcHJvcHMkY29udGFjdDQkYmlsbGkiLCJfcHJvcHMkY29udGFjdDUiLCJfcHJvcHMkY29udGFjdDUkYmlsbGkiLCJfcHJvcHMkY29udGFjdDYiLCJfcHJvcHMkY29udGFjdDYkYmlsbGkiLCJfcHJvcHMkY29udGFjdDciLCJfcHJvcHMkY29udGFjdDckYmlsbGkiLCJfcHJvcHMkY29udGFjdDgiLCJfcHJvcHMkY29udGFjdDgkc2hpcHAiLCJfcHJvcHMkY29udGFjdDkiLCJfcHJvcHMkY29udGFjdDkkc2hpcHAiLCJfcHJvcHMkY29udGFjdDEwIiwiX3Byb3BzJGNvbnRhY3QxMCRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMSIsIl9wcm9wcyRjb250YWN0MTEkc2hpcCIsIl9wcm9wcyRjb250YWN0MTIiLCJfcHJvcHMkY29udGFjdDEyJHNoaXAiLCJfcHJvcHMkY29udGFjdDEzIiwiX3Byb3BzJGRhdGEiLCJfcHJvcHMkZGF0YTIiLCJfcHJvcHMkZGF0YTMiLCJfcHJvcHMkZGF0YTQiLCJfcHJvcHMkZGF0YTUiLCJfcHJvcHMkZGF0YTYiLCJfcHJvcHMkZGF0YTciLCJfcHJvcHMkZGF0YTgiLCJfcHJvcHMkZGF0YTkiLCJfcHJvcHMkZGF0YTEwIiwiX3Byb3BzJGRhdGExMSIsIl9wcm9wcyRkYXRhMTIiLCJfcHJvcHMkZGF0YTEzIiwiX3Byb3BzJGRhdGExNCIsIl9wcm9wcyRkYXRhMTUiLCJfcHJvcHMkZGF0YTE2IiwiX3Byb3BzJGRhdGExNyIsIl9wcm9wcyRkYXRhMTgiLCJfcHJvcHMkZGF0YTE5IiwiX3Byb3BzJGRhdGEyMCIsIl9wcm9wcyRkYXRhMjEiLCJfcHJvcHMkZGF0YTIyIiwiX3Byb3BzJGRhdGEyMyIsIl9wcm9wcyRkYXRhMjQiLCJfcHJvcHMkZGF0YTI1IiwiX3Byb3BzJGRhdGEyNSRyb3ciLCJfcHJvcHMkZGF0YTI2IiwiX3Byb3BzJGRhdGEyNiRyb3ciLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyNyRyb3ciLCJfcHJvcHMkZGF0YTI4IiwiX3Byb3BzJGRhdGEyOCRyb3ciLCJfcHJvcHMkZGF0YTI5IiwiX3Byb3BzJGRhdGEyOSRyb3ciLCJfcHJvcHMkZGF0YTI5JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTMwIiwiX3Byb3BzJGRhdGEzMCRyb3ciLCJfcHJvcHMkZGF0YTMxIiwiX3Byb3BzJGRhdGEzMSRyb3ciLCJfcHJvcHMkZGF0YTMyIiwiX3Byb3BzJGRhdGEzMiRyb3ciLCJfcHJvcHMkZGF0YTMzIiwiX3Byb3BzJGRhdGEzMyRyb3ciLCJfcHJvcHMkZGF0YTMzJHJvdyRzdHkiLCJfcHJvcHMkZGF0YTM0IiwiX3Byb3BzJGRhdGEzNCR0b3RhbCIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHRvdGFsIiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkdG90YWwiLCJfcHJvcHMkZGF0YTM3IiwiX3Byb3BzJGRhdGEzNyR0b3RhbCIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHRvdGFsIiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkdG90YWwiLCJfcHJvcHMkZGF0YTQwIiwiX3Byb3BzJGRhdGE0MCR0b3RhbCIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHRvdGFsIiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkcm93IiwiX3Byb3BzJGRhdGE0MiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MyIsIl9wcm9wcyRkYXRhNDMkYW1vdW50RCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSRhbW91bnREIiwiX3Byb3BzJGRhdGE0NiIsIl9wcm9wcyRkYXRhNDYkYW1vdW50RCIsIl9wcm9wcyRkYXRhNDYkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTQ3IiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JGVTaWduIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkZVNpZ24iLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSRlU2lnbiIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJGVTaWduIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkZVNpZ24iLCJfcHJvcHMkZGF0YTUzJGVTaWduJHMiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRlU2lnbiIsIl9wcm9wcyRkYXRhNTQkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JGVTaWduIiwiX3Byb3BzJGRhdGE1NSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkZVNpZ24iLCJfcHJvcHMkZGF0YTU2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTU2JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckZVNpZ24iLCJfcHJvcHMkZGF0YTU3JGVTaWduJHMiLCJfcHJvcHMkZGF0YTU3JGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsIklSUFFyQ29kZSIsIl9wYXJhbSRidXNpbmVzcyIsIl9wYXJhbSRidXNpbmVzczIiLCJfcGFyYW0kY29udGFjdDIiLCJfcGFyYW0kY29udGFjdDMiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTMiLCJiaWxsaW5nQWRkcmVzc0xhYmVsIiwic2hpcHBpbmdBZGRyZXNzTGFiZWwiLCJfcGFyYW0kY29udGFjdDUiLCJfcGFyYW0kY29udGFjdDYiLCJfcGFyYW0kZGF0YTQiLCJfcGFyYW0kZGF0YTUiLCJiaWxsaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0OCIsIl9wYXJhbSRjb250YWN0OSIsIl9iaWxsaW5nQWRkcmVzcyIsIl9zaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDExIiwiX3BhcmFtJGNvbnRhY3QxMiIsIl9iaWxsaW5nQWRkcmVzczIiLCJfc2hpcHBpbmdBZGRyZXNzMiIsImluZGlhSVJQIiwiX3BhcmFtJGRhdGE4IiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImZpbmFsUm93Q291bnQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJhZGREZXNjIiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibm90ZURhdGEiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJwZGZUaXRsZSIsInJvdzEiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0Iiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImNvbDUiLCJ0b3RhbENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzZXRGaWxsQ29sb3IiLCJjb25jYXQiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImFtb3VudCIsInNldFBhZ2UiLCJiYW5rIiwiYWNjb3VudCIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICBpbmRpYUlSUD86IHtcbiAqICAgICAgICAgIHFyQ29kZTogc3RyaW5nLFxuICogICAgICAgICAgaXJuOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDQ6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFJlZ1R5cGU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMTogc3RyaW5nLFxuICogICAgICAgICAgaHNuTnVtOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDM6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHN0cmluZ1xuICogICAgICAgICAgbGFiZWwyOiBzdHJpbmcsXG4gKiAgICAgIH0sXG4gKiAgICAgIGVTaWduPzoge1xuICogICAgICAgICAgYXBwcm92ZXJOYW1lPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZWRBdD86IHN0cmluZyxcbiAqICAgICAgICAgIGF1dGhvcml6ZXI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlclRleHQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBzaWduYXR1cmU/OiB7XG4gKiAgICAgICAgICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICAgICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICAgICAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgICAgICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgIH0sXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBhbnksXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbnZSYXRlPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBBTElHTl9SSUdIVCk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhPy5wZGZUaXRsZSwgQUxJR05fTEVGVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmXG4gICAgcGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZSAmJlxuICAgIHBhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5XG4gICkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyAxMDtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX0gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICAgICApIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIDIwXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkF1dGhvcmlzZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gO1xuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgc3RhdGljVkFDb250ZW50LFxuICAgICAgcGFnZVdpZHRoIC0gNDBcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIHBhZ2VXaWR0aCAtIDIwKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQXVDLFNBQUFLLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVBQUFGLE1BQUEsQ0FBQUUsR0FBQSxTQUFBaEIsTUFBQSxDQUFBa0IseUJBQUEsR0FBQWxCLE1BQUEsQ0FBQW1CLGdCQUFBLENBQUFULE1BQUEsRUFBQVYsTUFBQSxDQUFBa0IseUJBQUEsQ0FBQUosTUFBQSxLQUFBbEIsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsR0FBQUMsT0FBQSxXQUFBQyxHQUFBLElBQUFoQixNQUFBLENBQUFvQixjQUFBLENBQUFWLE1BQUEsRUFBQU0sR0FBQSxFQUFBaEIsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUyxNQUFBLEVBQUFFLEdBQUEsaUJBQUFOLE1BQUE7QUFFdkMsSUFBTVcsVUFBVSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLGFBQWEsRUFBRSxlQUFlO0VBQUU7RUFDaENDLE9BQU8sRUFBRSxTQUFTO0VBQUU7RUFDcEJDLGdCQUFnQixFQUFFLGtCQUFrQjtFQUFFO0VBQ3RDQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLFdBQVcsRUFBRSxhQUFhLENBQUU7QUFDOUIsQ0FBQztBQUFDQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsSUEsU0FtSWVRLG9CQUFvQkEsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLHFCQUFBLENBQUF2QixLQUFBLE9BQUFJLFNBQUE7QUFBQTtBQUFBLFNBQUFtQixzQkFBQTtFQUFBQSxxQkFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQW5DLFNBQUFDLFFBQW9DQyxLQUFLO0lBQUEsSUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGNBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUE7SUFBQSxJQUFBQyxLQUFBLEVBQUFDLHFCQUFBLEVBQUFDLE9BQUEsRUFBQUMsR0FBQSxFQUFBQyxTQUFBLEVBQUFDLFVBQUEsRUFBQUMsUUFBQSxFQUFBQyxTQUFBLEVBQUFDLFVB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