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
              startY: boxY + 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiT3V0cHV0VHlwZSIsIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJleHBvcnRzIiwianNQREZJbnZvaWNlVGVtcGxhdGUiLCJfeCIsIl9qc1BERkludm9pY2VUZW1wbGF0ZSIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicHJvcHMiLCJfcHJvcHMkbG9nbyIsIl9wcm9wcyRsb2dvMiIsIl9wcm9wcyRsb2dvMyIsIl9wcm9wcyRsb2dvNCIsIl9wcm9wcyRsb2dvNCRtYXJnaW4iLCJfcHJvcHMkbG9nbzUiLCJfcHJvcHMkbG9nbzUkbWFyZ2luIiwiX3Byb3BzJGJ1c2luZXNzIiwiX3Byb3BzJGJ1c2luZXNzMiIsIl9wcm9wcyRidXNpbmVzczMiLCJfcHJvcHMkYnVzaW5lc3M0IiwiX3Byb3BzJGJ1c2luZXNzNSIsIl9wcm9wcyRidXNpbmVzczYiLCJfcHJvcHMkYnVzaW5lc3M3IiwiX3Byb3BzJGNvbnRhY3QiLCJfcHJvcHMkY29udGFjdDIiLCJfcHJvcHMkY29udGFjdDMiLCJfcHJvcHMkY29udGFjdDMkYmlsbGkiLCJfcHJvcHMkY29udGFjdDQiLCJfcHJvcHMkY29udGFjdDQkYmlsbGkiLCJfcHJvcHMkY29udGFjdDUiLCJfcHJvcHMkY29udGFjdDUkYmlsbGkiLCJfcHJvcHMkY29udGFjdDYiLCJfcHJvcHMkY29udGFjdDYkYmlsbGkiLCJfcHJvcHMkY29udGFjdDciLCJfcHJvcHMkY29udGFjdDckYmlsbGkiLCJfcHJvcHMkY29udGFjdDgiLCJfcHJvcHMkY29udGFjdDgkc2hpcHAiLCJfcHJvcHMkY29udGFjdDkiLCJfcHJvcHMkY29udGFjdDkkc2hpcHAiLCJfcHJvcHMkY29udGFjdDEwIiwiX3Byb3BzJGNvbnRhY3QxMCRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMSIsIl9wcm9wcyRjb250YWN0MTEkc2hpcCIsIl9wcm9wcyRjb250YWN0MTIiLCJfcHJvcHMkY29udGFjdDEyJHNoaXAiLCJfcHJvcHMkY29udGFjdDEzIiwiX3Byb3BzJGRhdGEiLCJfcHJvcHMkZGF0YTIiLCJfcHJvcHMkZGF0YTMiLCJfcHJvcHMkZGF0YTQiLCJfcHJvcHMkZGF0YTUiLCJfcHJvcHMkZGF0YTYiLCJfcHJvcHMkZGF0YTciLCJfcHJvcHMkZGF0YTgiLCJfcHJvcHMkZGF0YTkiLCJfcHJvcHMkZGF0YTEwIiwiX3Byb3BzJGRhdGExMSIsIl9wcm9wcyRkYXRhMTIiLCJfcHJvcHMkZGF0YTEzIiwiX3Byb3BzJGRhdGExNCIsIl9wcm9wcyRkYXRhMTUiLCJfcHJvcHMkZGF0YTE2IiwiX3Byb3BzJGRhdGExNyIsIl9wcm9wcyRkYXRhMTgiLCJfcHJvcHMkZGF0YTE5IiwiX3Byb3BzJGRhdGEyMCIsIl9wcm9wcyRkYXRhMjEiLCJfcHJvcHMkZGF0YTIyIiwiX3Byb3BzJGRhdGEyMyIsIl9wcm9wcyRkYXRhMjQiLCJfcHJvcHMkZGF0YTI1IiwiX3Byb3BzJGRhdGEyNSRyb3ciLCJfcHJvcHMkZGF0YTI2IiwiX3Byb3BzJGRhdGEyNiRyb3ciLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyNyRyb3ciLCJfcHJvcHMkZGF0YTI4IiwiX3Byb3BzJGRhdGEyOCRyb3ciLCJfcHJvcHMkZGF0YTI5IiwiX3Byb3BzJGRhdGEyOSRyb3ciLCJfcHJvcHMkZGF0YTI5JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTMwIiwiX3Byb3BzJGRhdGEzMCRyb3ciLCJfcHJvcHMkZGF0YTMxIiwiX3Byb3BzJGRhdGEzMSRyb3ciLCJfcHJvcHMkZGF0YTMyIiwiX3Byb3BzJGRhdGEzMiRyb3ciLCJfcHJvcHMkZGF0YTMzIiwiX3Byb3BzJGRhdGEzMyRyb3ciLCJfcHJvcHMkZGF0YTMzJHJvdyRzdHkiLCJfcHJvcHMkZGF0YTM0IiwiX3Byb3BzJGRhdGEzNCR0b3RhbCIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHRvdGFsIiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkdG90YWwiLCJfcHJvcHMkZGF0YTM3IiwiX3Byb3BzJGRhdGEzNyR0b3RhbCIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHRvdGFsIiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkdG90YWwiLCJfcHJvcHMkZGF0YTQwIiwiX3Byb3BzJGRhdGE0MCR0b3RhbCIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHRvdGFsIiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkcm93IiwiX3Byb3BzJGRhdGE0MiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MyIsIl9wcm9wcyRkYXRhNDMkYW1vdW50RCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSRhbW91bnREIiwiX3Byb3BzJGRhdGE0NiIsIl9wcm9wcyRkYXRhNDYkYW1vdW50RCIsIl9wcm9wcyRkYXRhNDYkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTQ3IiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JGVTaWduIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkZVNpZ24iLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSRlU2lnbiIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJGVTaWduIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkZVNpZ24iLCJfcHJvcHMkZGF0YTUzJGVTaWduJHMiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRlU2lnbiIsIl9wcm9wcyRkYXRhNTQkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JGVTaWduIiwiX3Byb3BzJGRhdGE1NSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkZVNpZ24iLCJfcHJvcHMkZGF0YTU2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTU2JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckZVNpZ24iLCJfcHJvcHMkZGF0YTU3JGVTaWduJHMiLCJfcHJvcHMkZGF0YTU3JGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsIklSUFFyQ29kZSIsIl9wYXJhbSRidXNpbmVzcyIsIl9wYXJhbSRidXNpbmVzczIiLCJfcGFyYW0kY29udGFjdDIiLCJfcGFyYW0kY29udGFjdDMiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTMiLCJiaWxsaW5nQWRkcmVzc0xhYmVsIiwic2hpcHBpbmdBZGRyZXNzTGFiZWwiLCJfcGFyYW0kY29udGFjdDUiLCJfcGFyYW0kY29udGFjdDYiLCJfcGFyYW0kZGF0YTQiLCJfcGFyYW0kZGF0YTUiLCJiaWxsaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0OCIsIl9wYXJhbSRjb250YWN0OSIsIl9iaWxsaW5nQWRkcmVzcyIsIl9zaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDExIiwiX3BhcmFtJGNvbnRhY3QxMiIsIl9iaWxsaW5nQWRkcmVzczIiLCJfc2hpcHBpbmdBZGRyZXNzMiIsImluZGlhSVJQIiwiX3BhcmFtJGRhdGE4IiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImZpbmFsUm93Q291bnQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJhZGREZXNjIiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibm90ZURhdGEiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJwZGZUaXRsZSIsInJvdzEiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0Iiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImNvbDUiLCJ0b3RhbENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzZXRGaWxsQ29sb3IiLCJjb25jYXQiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJsaW5lV2lkdGgiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImFtb3VudCIsInNldFBhZ2UiLCJiYW5rIiwiYWNjb3VudCIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICBpbmRpYUlSUD86IHtcbiAqICAgICAgICAgIHFyQ29kZTogc3RyaW5nLFxuICogICAgICAgICAgaXJuOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDQ6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFJlZ1R5cGU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMTogc3RyaW5nLFxuICogICAgICAgICAgaHNuTnVtOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDM6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHN0cmluZ1xuICogICAgICAgICAgbGFiZWwyOiBzdHJpbmcsXG4gKiAgICAgIH0sXG4gKiAgICAgIGVTaWduPzoge1xuICogICAgICAgICAgYXBwcm92ZXJOYW1lPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZWRBdD86IHN0cmluZyxcbiAqICAgICAgICAgIGF1dGhvcml6ZXI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlclRleHQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBzaWduYXR1cmU/OiB7XG4gKiAgICAgICAgICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICAgICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICAgICAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgICAgICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgIH0sXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBhbnksXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbnZSYXRlPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBBTElHTl9SSUdIVCk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhPy5wZGZUaXRsZSwgQUxJR05fTEVGVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmXG4gICAgcGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZSAmJlxuICAgIHBhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5XG4gICkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyAxMDtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX0gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxNCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgICAgICkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gLTEgPSBiZWNhdXNlIHRoZSBmeCByYXRlIGJveCBpcyBvbmUgcm93IGxvd2VyXG4gIC8vIDUgPSBlYWNoIHJvdyBoZWlnaHRcbiAgY29uc3QgZmluYWxSb3dIZWlnaHQgPSAoZmluYWxSb3dDb3VudCAtIDEpICogNTtcblxuICAvLyBBZGQgYSBsaW5lIGhlaWdodCBhZnRlciBjb252ZXJ0aW9uIHJhdGUgdGFibGUgYW5kIHRvdGFsc1xuICAvLyAzNSA9IGhlaWdodCBvZiBmeCByYXRlIGJveFxuICBpZiAocGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYgJiYgZmluYWxSb3dIZWlnaHQgPCAzNSkge1xuICAgIGNvbnN0IGRpZmYgPSAzNSAtIGZpbmFsUm93SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBkaWZmO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gIH1cblxuICAvLyBUb3RhbCBpbiB3b3Jkc1xuICBpZiAocGFyYW0uZGF0YS50b3RhbD8uY29sNCAmJiBwYXJhbS5kYXRhLnRvdGFsPy5jb2w1KSB7XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gMjBcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjApID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFBdUMsU0FBQUssUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUV2QyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDO0FBQUNDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxJQSxTQW1JZVEsb0JBQW9CQSxDQUFBQyxFQUFBO0VBQUEsT0FBQUMscUJBQUEsQ0FBQXZCLEtBQUEsT0FBQUksU0FBQTtBQUFBO0FBQUEsU0FBQW1CLHNCQUFBO0VBQUFBLHFCQUFBLE9BQUFDLGtCQUFBLDJCQUFBQyxZQUFBLFlBQUFDLElBQUEsQ0FBbkMsU0FBQUMsUUFBb0NDLEtBQUs7SUFBQSxJQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxHQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEs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