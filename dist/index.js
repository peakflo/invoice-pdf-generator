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
        case 133:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzQkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHRvdGFsIiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkdG90YWwiLCJfcHJvcHMkZGF0YTM3IiwiX3Byb3BzJGRhdGEzNyR0b3RhbCIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHRvdGFsIiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkdG90YWwiLCJfcHJvcHMkZGF0YTQwIiwiX3Byb3BzJGRhdGE0MCR0b3RhbCIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHRvdGFsIiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHJvdyIsIl9wcm9wcyRkYXRhNDckcm93JHN0eSIsIl9wcm9wcyRkYXRhNDgiLCJfcHJvcHMkZGF0YTQ4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTEiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1MiIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRlU2lnbiIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JGVTaWduIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkZVNpZ24iLCJfcHJvcHMkZGF0YTU3IiwiX3Byb3BzJGRhdGE1NyRlU2lnbiIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGVTaWduIiwiX3Byb3BzJGRhdGE1OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTU5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjAkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MiRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MiRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJmaW5hbFJvd0NvdW50IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJ1c2luZXNzIiwibmFtZSIsImFkZHJlc3MiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJlbWFpbF8xIiwiY291bnRyeSIsInRheE51bWJlciIsImNvbnRhY3QiLCJsYWJlbCIsInN1YlRvdGFsTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJzdWJUb3RhbCIsImN1cnJlbmN5IiwiZGVzY0xhYmVsIiwicmVxdWVzdGVkQnkiLCJjdXN0b21GaWVsZHMiLCJhdXRob3Jpc2VkQnkiLCJzdGF0aWNWQSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicGRmVGl0bGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJjb2w1IiwidG90YWxDb252Iiwic3ViVG90YWxDb252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzZXRGaWxsQ29sb3IiLCJjb25jYXQiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImFtb3VudCIsInNldFBhZ2UiLCJtYXAiLCJiYW5rIiwiYWNjb3VudCIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w1Pzogc3RyaW5nLFxuICogICAgICAgICAgIHRvdGFsQ29udj86IHN0cmluZyxcbiAqICAgICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IGJvb2xlYW4sXG4gKiAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbnZSYXRlPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIElOVk9JQ0UgVElUTEUgLSBJTk1PQkkgY2hhbmdlXG4gIGlmIChwYXJhbS5kYXRhPy5wZGZUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGE/LnBkZlRpdGxlLCBBTElHTl9MRUZUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID0gKHBhZ2VXaWR0aCAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMTA7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgZG9jLnRleHQocm93LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIC8vcmVzZXQgdGhlIGhlaWdodCB0aGF0IHdhcyBpbmNyZWFzZWQgdG8gY2hlY2sgdGhlIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgMTA7XG5cbiAgICAvLyBEcmF3IHRoZSBib3hcbiAgICBkb2Muc2V0RHJhd0NvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjIpO1xuICAgIGRvYy5yZWN0KGJveFgsIGJveFksIGJveFdpZHRoLCBib3hIZWlnaHQsIFwiRkRcIik7XG5cbiAgICAvLyBBZGQgdGV4dCB0byB0aGUgYm94XG4gICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXCJGb3IgR1NUIHJlcG9ydGluZyBwdXJwb3NlczpcIiwgYm94WCArIDUsIGJveFkgKyA1KTtcbiAgICBkb2MubGluZShib3hYICsgNSwgYm94WSArIDcuNSwgYm94WCArIGJveFdpZHRoIC0gNSwgYm94WSArIDcuNSk7XG4gICAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGAxICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfSA9ICR7cGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZX0gJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgYm94WCArIDUsXG4gICAgICBib3hZICsgMTNcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSB0YWJsZVxuICAgIGRvYy5hdXRvVGFibGUoe1xuICAgICAgc3RhcnRZOiBib3hZICsgMTgsXG4gICAgICBtYXJnaW46IHsgbGVmdDogYm94WCwgcmlnaHQ6IDAgfSxcbiAgICAgIGhlYWQ6IFtbXCJcIiwgYEFtb3VudCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWBdXSxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAgW1wiU3VidG90YWxcIiwgcGFyYW0uZGF0YS50b3RhbC5zdWJUb3RhbENvbnZdLFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICAgICApIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIDIwXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKTtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpdGVtKTtcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkF1dGhvcmlzZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gO1xuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgc3RhdGljVkFDb250ZW50LFxuICAgICAgcGFnZVdpZHRoIC0gNDBcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIHBhZ2VXaWR0aCAtIDIwKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBRixzQkFBQSxDQUFBSCxPQUFBO0FBQXFDLFNBQUFNLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVBQUFGLE1BQUEsQ0FBQUUsR0FBQSxTQUFBaEIsTUFBQSxDQUFBa0IseUJBQUEsR0FBQWxCLE1BQUEsQ0FBQW1CLGdCQUFBLENBQUFULE1BQUEsRUFBQVYsTUFBQSxDQUFBa0IseUJBQUEsQ0FBQUosTUFBQSxLQUFBbEIsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsR0FBQUMsT0FBQSxXQUFBQyxHQUFBLElBQUFoQixNQUFBLENBQUFvQixjQUFBLENBQUFWLE1BQUEsRUFBQU0sR0FBQSxFQUFBaEIsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUyxNQUFBLEVBQUFFLEdBQUEsaUJBQUFOLE1BQUE7QUFDckMsSUFBTVcsVUFBVSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLGFBQWEsRUFBRSxlQUFlO0VBQUU7RUFDaENDLE9BQU8sRUFBRSxTQUFTO0VBQUU7RUFDcEJDLGdCQUFnQixFQUFFLGtCQUFrQjtFQUFFO0VBQ3RDQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLFdBQVcsRUFBRSxhQUFhLENBQUU7QUFDOUIsQ0FBQztBQUFDQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcElBLFNBcUllUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxHQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxZQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGFBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxvQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsWUFBQSxF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