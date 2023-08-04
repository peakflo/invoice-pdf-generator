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
Object.defineProperty(exports, "jsPDFRfqTemplate", {
  enumerable: true,
  get: function get() {
    return _RFQ["default"];
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
var _RFQ = _interopRequireDefault(require("./RFQ"));
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
 *  pdfTitle?: string,
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
 *       customFields?: string[],
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
 *           isFxConversionVisible: boolean,
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$total, _props$data36, _props$data36$total, _props$data37, _props$data37$total, _props$data38, _props$data38$total, _props$data39, _props$data39$total, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$row, _props$data47$row$sty, _props$data48, _props$data48$amountD, _props$data49, _props$data49$amountD, _props$data50, _props$data50$amountD, _props$data51, _props$data51$amountD, _props$data51$amountD2, _props$data52, _props$data53, _props$data54, _props$data54$eSign, _props$data55, _props$data55$eSign, _props$data56, _props$data56$eSign, _props$data57, _props$data57$eSign, _props$data58, _props$data58$eSign, _props$data58$eSign$s, _props$data59, _props$data59$eSign, _props$data59$eSign$s, _props$data60, _props$data60$eSign, _props$data60$eSign$s, _props$data61, _props$data61$eSign, _props$data61$eSign$s, _props$data61$eSign$s2, _props$data62, _props$data62$eSign, _props$data62$eSign$s, _props$data62$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
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
            pdfTitle: props.pdfTitle || "",
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
              customFields: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.customFields) || [],
              authorisedBy: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.authorisedBy) || "",
              staticVA: (_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.staticVA,
              desc: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.desc) || "",
              creditNoteLabel: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : _props$data23.creditNoteLabel) || "",
              note: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : _props$data24.note) || "",
              pdfTitle: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : _props$data25.pdfTitle) || "",
              row1: {
                col1: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$row = _props$data26.row1) === null || _props$data26$row === void 0 ? void 0 : _props$data26$row.col1) || "",
                col2: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$row = _props$data27.row1) === null || _props$data27$row === void 0 ? void 0 : _props$data27$row.col2) || "",
                col3: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$row = _props$data28.row1) === null || _props$data28$row === void 0 ? void 0 : _props$data28$row.col3) || "",
                col4: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row1) === null || _props$data29$row === void 0 ? void 0 : _props$data29$row.col4) || [],
                style: {
                  fontSize: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$row = _props$data30.row1) === null || _props$data30$row === void 0 ? void 0 : (_props$data30$row$sty = _props$data30$row.style) === null || _props$data30$row$sty === void 0 ? void 0 : _props$data30$row$sty.fontSize) || 12
                }
              },
              row2: {
                col1: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row2) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.col1) || "",
                col2: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row2) === null || _props$data32$row === void 0 ? void 0 : _props$data32$row.col2) || "",
                col3: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row2) === null || _props$data33$row === void 0 ? void 0 : _props$data33$row.col3) || "",
                style: {
                  fontSize: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row2) === null || _props$data34$row === void 0 ? void 0 : (_props$data34$row$sty = _props$data34$row.style) === null || _props$data34$row$sty === void 0 ? void 0 : _props$data34$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$total = _props$data35.total) === null || _props$data35$total === void 0 ? void 0 : _props$data35$total.col1) || "",
                // Total label
                col2: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$total = _props$data36.total) === null || _props$data36$total === void 0 ? void 0 : _props$data36$total.col2) || "",
                // Total amount
                col3: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$total = _props$data37.total) === null || _props$data37$total === void 0 ? void 0 : _props$data37$total.col3) || "",
                // Invoice currency
                col4: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$total = _props$data38.total) === null || _props$data38$total === void 0 ? void 0 : _props$data38$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$total = _props$data39.total) === null || _props$data39$total === void 0 ? void 0 : _props$data39$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$total = _props$data40.total) === null || _props$data40$total === void 0 ? void 0 : _props$data40$total.totalConv) || "",
                // Total converted amount
                subTotalConv: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$total = _props$data41.total) === null || _props$data41$total === void 0 ? void 0 : _props$data41$total.subTotalConv) || "",
                // sub total converted amount
                isFxConversionVisible: (_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$total = _props$data42.total) === null || _props$data42$total === void 0 ? void 0 : _props$data42$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$total = _props$data46.total) === null || _props$data46$total === void 0 ? void 0 : _props$data46$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$row = _props$data47.row2) === null || _props$data47$row === void 0 ? void 0 : (_props$data47$row$sty = _props$data47$row.style) === null || _props$data47$row$sty === void 0 ? void 0 : _props$data47$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$amountD = _props$data48.amountDue) === null || _props$data48$amountD === void 0 ? void 0 : _props$data48$amountD.col1) || "",
                col2: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$amountD = _props$data49.amountDue) === null || _props$data49$amountD === void 0 ? void 0 : _props$data49$amountD.col2) || "",
                col3: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$amountD = _props$data50.amountDue) === null || _props$data50$amountD === void 0 ? void 0 : _props$data50$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$amountD = _props$data51.amountDue) === null || _props$data51$amountD === void 0 ? void 0 : (_props$data51$amountD2 = _props$data51$amountD.style) === null || _props$data51$amountD2 === void 0 ? void 0 : _props$data51$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : _props$data52.creditNote) || ""
            }, ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : _props$data53.indiaIRP) && {
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
                approverName: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$eSign = _props$data54.eSign) === null || _props$data54$eSign === void 0 ? void 0 : _props$data54$eSign.approverName) || "",
                approvedAt: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$eSign = _props$data55.eSign) === null || _props$data55$eSign === void 0 ? void 0 : _props$data55$eSign.approvedAt) || "",
                authorizer: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$eSign = _props$data56.eSign) === null || _props$data56$eSign === void 0 ? void 0 : _props$data56$eSign.authorizer) || "",
                approverText: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : (_props$data57$eSign = _props$data57.eSign) === null || _props$data57$eSign === void 0 ? void 0 : _props$data57$eSign.approverText) || "",
                signature: {
                  src: ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : (_props$data58$eSign = _props$data58.eSign) === null || _props$data58$eSign === void 0 ? void 0 : (_props$data58$eSign$s = _props$data58$eSign.signature) === null || _props$data58$eSign$s === void 0 ? void 0 : _props$data58$eSign$s.src) || "",
                  width: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$eSign = _props$data59.eSign) === null || _props$data59$eSign === void 0 ? void 0 : (_props$data59$eSign$s = _props$data59$eSign.signature) === null || _props$data59$eSign$s === void 0 ? void 0 : _props$data59$eSign$s.width) || 55,
                  height: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : (_props$data60$eSign = _props$data60.eSign) === null || _props$data60$eSign === void 0 ? void 0 : (_props$data60$eSign$s = _props$data60$eSign.signature) === null || _props$data60$eSign$s === void 0 ? void 0 : _props$data60$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : (_props$data61$eSign = _props$data61.eSign) === null || _props$data61$eSign === void 0 ? void 0 : (_props$data61$eSign$s = _props$data61$eSign.signature) === null || _props$data61$eSign$s === void 0 ? void 0 : (_props$data61$eSign$s2 = _props$data61$eSign$s.margin) === null || _props$data61$eSign$s2 === void 0 ? void 0 : _props$data61$eSign$s2.top) || "",
                    left: ((_props$data62 = props.data) === null || _props$data62 === void 0 ? void 0 : (_props$data62$eSign = _props$data62.eSign) === null || _props$data62$eSign === void 0 ? void 0 : (_props$data62$eSign$s = _props$data62$eSign.signature) === null || _props$data62$eSign$s === void 0 ? void 0 : (_props$data62$eSign$s2 = _props$data62$eSign$s.margin) === null || _props$data62$eSign$s2 === void 0 ? void 0 : _props$data62$eSign$s2.left) || ""
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

          //Adding PDF title
          if (param.pdfTitle) {
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            currentHeight -= 7;
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.text(docWidth / 2, currentHeight, param.pdfTitle, ALIGN_CENTER);
            currentHeight += pdfConfig.labelTextSize;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
          }
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
            _context.next = 54;
            break;
          }
          _context.next = 41;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 41:
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
          _context.next = 65;
          break;
        case 54:
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
        case 65:
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
          if (param.data.total.isFxConversionVisible) {
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
            doc.text("1 ".concat(param.data.total.col3, " = ").concat(param.data.total.convRate, " ").concat(param.data.total.defaultCurrency), boxX + 5, boxY + 13);

            // Add the table
            doc.autoTable({
              startY: boxY + 18,
              margin: {
                left: boxX,
                right: 0
              },
              head: [["", "Amount ".concat(param.data.total.defaultCurrency)]],
              body: [["Subtotal", param.data.total.subTotalConv], ["Total Tax", param.data.total.totalTaxAmountConv], [{
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
          currentHeight += pdfConfig.lineHeight;

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

          // Additional Information - custom fields
          if (param.data.customFields.length) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Additional Information");
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            param.data.customFields.map(function (item) {
              currentHeight += pdfConfig.subLineHeight;
              doc.text(10, currentHeight, item);
            });
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
        case 134:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzQkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHRvdGFsIiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkdG90YWwiLCJfcHJvcHMkZGF0YTM3IiwiX3Byb3BzJGRhdGEzNyR0b3RhbCIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHRvdGFsIiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkdG90YWwiLCJfcHJvcHMkZGF0YTQwIiwiX3Byb3BzJGRhdGE0MCR0b3RhbCIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHRvdGFsIiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHJvdyIsIl9wcm9wcyRkYXRhNDckcm93JHN0eSIsIl9wcm9wcyRkYXRhNDgiLCJfcHJvcHMkZGF0YTQ4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTEiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1MiIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRlU2lnbiIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JGVTaWduIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkZVNpZ24iLCJfcHJvcHMkZGF0YTU3IiwiX3Byb3BzJGRhdGE1NyRlU2lnbiIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGVTaWduIiwiX3Byb3BzJGRhdGE1OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTU5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjAkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MiRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MiRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJmaW5hbFJvd0NvdW50IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJjb2w1IiwidG90YWxDb252Iiwic3ViVG90YWxDb252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzZXRGaWxsQ29sb3IiLCJjb25jYXQiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImFtb3VudCIsInNldFBhZ2UiLCJtYXAiLCJiYW5rIiwiYWNjb3VudCIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w1Pzogc3RyaW5nLFxuICogICAgICAgICAgIHRvdGFsQ29udj86IHN0cmluZyxcbiAqICAgICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IGJvb2xlYW4sXG4gKiAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbnZSYXRlPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIHBkZlRpdGxlOiBwcm9wcy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBBTElHTl9SSUdIVCk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5uYW1lKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhPy5wZGZUaXRsZSwgQUxJR05fTEVGVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSAxMDtcbiAgICBjb25zdCBib3hZID0gY3VycmVudEhlaWdodCArIDEwO1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgYCR7dGF4Lm5hbWV9OmAsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgdGF4LmFtb3VudCxcbiAgICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gdGF4RGF0YS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIC8vZW5kIHJvdzFcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIik7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaXRlbSk7XG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUgsT0FBQTtBQUFxQyxTQUFBTSxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFBRyxNQUFBLENBQUFDLHFCQUFBLFFBQUFDLE9BQUEsR0FBQUYsTUFBQSxDQUFBQyxxQkFBQSxDQUFBSixNQUFBLEdBQUFDLGNBQUEsS0FBQUksT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBSixNQUFBLENBQUFLLHdCQUFBLENBQUFSLE1BQUEsRUFBQU8sR0FBQSxFQUFBRSxVQUFBLE9BQUFQLElBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULElBQUEsRUFBQUcsT0FBQSxZQUFBSCxJQUFBO0FBQUEsU0FBQVUsY0FBQUMsTUFBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFGLENBQUEsVUFBQUcsTUFBQSxXQUFBRixTQUFBLENBQUFELENBQUEsSUFBQUMsU0FBQSxDQUFBRCxDQUFBLFFBQUFBLENBQUEsT0FBQWYsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsT0FBQUMsT0FBQSxXQUFBQyxHQUFBLFFBQUFDLGdCQUFBLGFBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRixNQUFBLENBQUFFLEdBQUEsU0FBQWhCLE1BQUEsQ0FBQWtCLHlCQUFBLEdBQUFsQixNQUFBLENBQUFtQixnQkFBQSxDQUFBVCxNQUFBLEVBQUFWLE1BQUEsQ0FBQWtCLHlCQUFBLENBQUFKLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBaEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixNQUFBLEVBQUFNLEdBQUEsRUFBQWhCLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVMsTUFBQSxFQUFBRSxHQUFBLGlCQUFBTixNQUFBO0FBQ3JDLElBQU1XLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7QUFBQ0MsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcklBLFNBc0llUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEs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