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
 *          label5: string,
 *          label6: string,
 *          ackDate: string,
 *          ackNumber: string,
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
 *           },
 *           hideTotal?: boolean
 *       },
 *       row2?: {
 *           col1?: string,
 *           col2?: string,
 *           col3?: string,
 *           style?: {
 *               fontSize?: number
 *           }
 *       },
 *       row3?: {
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data35, _props$data35$row, _props$data35$row$sty, _props$data36, _props$data36$row, _props$data37, _props$data37$row, _props$data38, _props$data38$row, _props$data39, _props$data39$row, _props$data39$row$sty, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$total, _props$data48, _props$data48$total, _props$data49, _props$data49$total, _props$data50, _props$data50$total, _props$data51, _props$data51$total, _props$data52, _props$data52$row, _props$data52$row$sty, _props$data53, _props$data53$amountD, _props$data54, _props$data54$amountD, _props$data55, _props$data55$amountD, _props$data56, _props$data56$amountD, _props$data56$amountD2, _props$data57, _props$data58, _props$data$indiaIRP$, _props$data$indiaIRP$2, _props$data59, _props$data59$eSign, _props$data60, _props$data60$eSign, _props$data61, _props$data61$eSign, _props$data62, _props$data62$eSign, _props$data63, _props$data63$eSign, _props$data63$eSign$s, _props$data64, _props$data64$eSign, _props$data64$eSign$s, _props$data65, _props$data65$eSign, _props$data65$eSign$s, _props$data66, _props$data66$eSign, _props$data66$eSign$s, _props$data66$eSign$s2, _props$data67, _props$data67$eSign, _props$data67$eSign$s, _props$data67$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, customerName, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, i, additionalInfoSize, staticVAContent, paymentDetails, addDesc, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, returnObj, blobOutput;
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
                },
                hideTotal: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row1) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.hideTotal) || false
              },
              row2: {
                col1: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row2) === null || _props$data32$row === void 0 ? void 0 : _props$data32$row.col1) || "",
                col2: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row2) === null || _props$data33$row === void 0 ? void 0 : _props$data33$row.col2) || "",
                col3: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row2) === null || _props$data34$row === void 0 ? void 0 : _props$data34$row.col3) || "",
                style: {
                  fontSize: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$row = _props$data35.row2) === null || _props$data35$row === void 0 ? void 0 : (_props$data35$row$sty = _props$data35$row.style) === null || _props$data35$row$sty === void 0 ? void 0 : _props$data35$row$sty.fontSize) || 12
                }
              },
              row3: {
                col1: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$row = _props$data36.row3) === null || _props$data36$row === void 0 ? void 0 : _props$data36$row.col1) || "",
                col2: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$row = _props$data37.row3) === null || _props$data37$row === void 0 ? void 0 : _props$data37$row.col2) || "",
                col3: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$row = _props$data38.row3) === null || _props$data38$row === void 0 ? void 0 : _props$data38$row.col3) || "",
                style: {
                  fontSize: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$row = _props$data39.row3) === null || _props$data39$row === void 0 ? void 0 : (_props$data39$row$sty = _props$data39$row.style) === null || _props$data39$row$sty === void 0 ? void 0 : _props$data39$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$total = _props$data40.total) === null || _props$data40$total === void 0 ? void 0 : _props$data40$total.col1) || "",
                // Total label
                col2: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$total = _props$data41.total) === null || _props$data41$total === void 0 ? void 0 : _props$data41$total.col2) || "",
                // Total amount
                col3: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$total = _props$data42.total) === null || _props$data42$total === void 0 ? void 0 : _props$data42$total.col3) || "",
                // Invoice currency
                col4: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.totalConv) || "",
                // Total converted amount
                subTotalConv: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$total = _props$data46.total) === null || _props$data46$total === void 0 ? void 0 : _props$data46$total.subTotalConv) || "",
                // sub total converted amount
                isFxConversionVisible: (_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$total = _props$data47.total) === null || _props$data47$total === void 0 ? void 0 : _props$data47$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$total = _props$data48.total) === null || _props$data48$total === void 0 ? void 0 : _props$data48$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$total = _props$data49.total) === null || _props$data49$total === void 0 ? void 0 : _props$data49$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$total = _props$data50.total) === null || _props$data50$total === void 0 ? void 0 : _props$data50$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$total = _props$data51.total) === null || _props$data51$total === void 0 ? void 0 : _props$data51$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : (_props$data52$row = _props$data52.row2) === null || _props$data52$row === void 0 ? void 0 : (_props$data52$row$sty = _props$data52$row.style) === null || _props$data52$row$sty === void 0 ? void 0 : _props$data52$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : (_props$data53$amountD = _props$data53.amountDue) === null || _props$data53$amountD === void 0 ? void 0 : _props$data53$amountD.col1) || "",
                col2: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$amountD = _props$data54.amountDue) === null || _props$data54$amountD === void 0 ? void 0 : _props$data54$amountD.col2) || "",
                col3: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$amountD = _props$data55.amountDue) === null || _props$data55$amountD === void 0 ? void 0 : _props$data55$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$amountD = _props$data56.amountDue) === null || _props$data56$amountD === void 0 ? void 0 : (_props$data56$amountD2 = _props$data56$amountD.style) === null || _props$data56$amountD2 === void 0 ? void 0 : _props$data56$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : _props$data57.creditNote) || ""
            }, ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : _props$data58.indiaIRP) && {
              indiaIRP: {
                qrCode: props.data.indiaIRP.qrCode || "",
                irn: props.data.indiaIRP.irn || "",
                gstRegType: props.data.indiaIRP.gstRegType || "",
                hsnNum: props.data.indiaIRP.hsnNum || "",
                gstStateWithCode: props.data.indiaIRP.gstStateWithCode || "",
                label1: props.data.indiaIRP.label1 || "",
                label2: props.data.indiaIRP.label2 || "",
                label3: props.data.indiaIRP.label3 || "",
                label4: props.data.indiaIRP.label4 || "",
                label5: props.data.indiaIRP.label5 || "",
                label6: props.data.indiaIRP.label6 || "",
                ackDate: (_props$data$indiaIRP$ = props.data.indiaIRP.ackDate) !== null && _props$data$indiaIRP$ !== void 0 ? _props$data$indiaIRP$ : null,
                ackNumber: (_props$data$indiaIRP$2 = props.data.indiaIRP.ackNumber) !== null && _props$data$indiaIRP$2 !== void 0 ? _props$data$indiaIRP$2 : null
              }
            }), {}, {
              eSign: {
                approverName: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$eSign = _props$data59.eSign) === null || _props$data59$eSign === void 0 ? void 0 : _props$data59$eSign.approverName) || "",
                approvedAt: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : (_props$data60$eSign = _props$data60.eSign) === null || _props$data60$eSign === void 0 ? void 0 : _props$data60$eSign.approvedAt) || "",
                authorizer: ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : (_props$data61$eSign = _props$data61.eSign) === null || _props$data61$eSign === void 0 ? void 0 : _props$data61$eSign.authorizer) || "",
                approverText: ((_props$data62 = props.data) === null || _props$data62 === void 0 ? void 0 : (_props$data62$eSign = _props$data62.eSign) === null || _props$data62$eSign === void 0 ? void 0 : _props$data62$eSign.approverText) || "",
                signature: {
                  src: ((_props$data63 = props.data) === null || _props$data63 === void 0 ? void 0 : (_props$data63$eSign = _props$data63.eSign) === null || _props$data63$eSign === void 0 ? void 0 : (_props$data63$eSign$s = _props$data63$eSign.signature) === null || _props$data63$eSign$s === void 0 ? void 0 : _props$data63$eSign$s.src) || "",
                  width: ((_props$data64 = props.data) === null || _props$data64 === void 0 ? void 0 : (_props$data64$eSign = _props$data64.eSign) === null || _props$data64$eSign === void 0 ? void 0 : (_props$data64$eSign$s = _props$data64$eSign.signature) === null || _props$data64$eSign$s === void 0 ? void 0 : _props$data64$eSign$s.width) || 55,
                  height: ((_props$data65 = props.data) === null || _props$data65 === void 0 ? void 0 : (_props$data65$eSign = _props$data65.eSign) === null || _props$data65$eSign === void 0 ? void 0 : (_props$data65$eSign$s = _props$data65$eSign.signature) === null || _props$data65$eSign$s === void 0 ? void 0 : _props$data65$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data66 = props.data) === null || _props$data66 === void 0 ? void 0 : (_props$data66$eSign = _props$data66.eSign) === null || _props$data66$eSign === void 0 ? void 0 : (_props$data66$eSign$s = _props$data66$eSign.signature) === null || _props$data66$eSign$s === void 0 ? void 0 : (_props$data66$eSign$s2 = _props$data66$eSign$s.margin) === null || _props$data66$eSign$s2 === void 0 ? void 0 : _props$data66$eSign$s2.top) || "",
                    left: ((_props$data67 = props.data) === null || _props$data67 === void 0 ? void 0 : (_props$data67$eSign = _props$data67.eSign) === null || _props$data67$eSign === void 0 ? void 0 : (_props$data67$eSign$s = _props$data67$eSign.signature) === null || _props$data67$eSign$s === void 0 ? void 0 : (_props$data67$eSign$s2 = _props$data67$eSign$s.margin) === null || _props$data67$eSign$s2 === void 0 ? void 0 : _props$data67$eSign$s2.left) || ""
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
          }; // we check if the current height of the page is greater than the page height.
          // if true, then we break the change.
          // Checking with DEFAULT_CURRENT_HEIGHT because of current page needs to have some spacing at the bottom.
          isBreakPage = function isBreakPage(height, pageHeight) {
            return height > pageHeight || height > pageHeight - DEFAULT_CURRENT_HEIGHT && doc.getNumberOfPages() > 1;
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
          CUSTOM_FONT_NAME = "customFont";
          DEFAULT_CURRENT_HEIGHT = 10; //starting at 15mm
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

          // company logo
          if (param.logo.src) {
            doc.addImage(param.logo.src, IMAGE_CONTENT_TYPE, 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
          }

          // tenant tax number
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
            _context.next = 56;
            break;
          }
          _context.next = 43;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 43:
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
          _context.next = 67;
          break;
        case 56:
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
        case 67:
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
            customerName = splitTextAndGetHeight(param.contact.name, pageWidth / 2);
            doc.text(10, currentHeight, customerName.text);
          }
          doc.setTextColor(colorBlack);
          doc.setTextColor(lightGray);
          doc.setFontSize(pdfConfig.headerTextSize - 5);
          if (param.data.label && param.data.num) {
            doc.text(docWidth - 10, currentHeight, param.data.label + param.data.num, ALIGN_RIGHT);
          }
          if (param.contact.name || param.data.label && param.data.num) currentHeight += pdfConfig.textSizeSmall;
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
            } else {
              doc.setFont(undefined, FONT_TYPE_BOLD);
              currentHeight += pdfConfig.subLineHeight;
            }
            if (indiaIRP.ackDate && indiaIRP.ackNumber) {
              doc.setFont(undefined, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, indiaIRP.label5);
              doc.setFont(undefined, FONT_TYPE_BOLD);
              doc.text(10 + doc.getTextWidth(indiaIRP.label5), currentHeight, indiaIRP.ackDate);
              currentHeight += pdfConfig.subLineHeight;
              doc.setFont(undefined, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, indiaIRP.label6);
              doc.setFont(undefined, FONT_TYPE_BOLD);
              doc.text(10 + doc.getTextWidth(indiaIRP.label6), currentHeight, indiaIRP.ackNumber);
              currentHeight += pdfConfig.subLineHeight;
            }
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
            currentHeight += pdfConfig.subLineHeight + DEFAULT_CURRENT_HEIGHT;
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
            if (isBreakPage(currentHeight, pageHeight)) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
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
            if (isBreakPage(currentHeight, pageHeight)) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
            }
          }
          currentHeight += pdfConfig.lineHeight;
          if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
            doc.addPage();
            currentHeight = DEFAULT_CURRENT_HEIGHT;
          }

          // No. of rows of sub total, taxes, discounts .. until Total (NOT TABLE ROWS).
          finalRowCount = 0; //line breaker before invoce total
          if (param.data.header.length && (param.data.subTotal || param.data.subTotalLabel || param.data.currency)) {
            doc.setLineWidth(0.5);
            doc.line(docWidth / 2 + 10, currentHeight, docWidth - 10, currentHeight);
            currentHeight += pdfConfig.lineHeight;
          }

          // return the page number the above line is on
          pageNumberForInvoiceTotal = doc.internal.getNumberOfPages();
          invoiceTotalLineHeight = currentHeight; // Subtotal line
          if (param.data.subTotalLabel && param.data.subTotal) {
            doc.text(docWidth - 50, currentHeight, param.data.subTotalLabel, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.currency + "  " + param.data.subTotal.toLocaleString(), ALIGN_RIGHT);
            finalRowCount += 1;
          }

          //row1 - tax
          if (param.data.row1 && (param.data.row1.col1 || param.data.row1.col2 || param.data.row1.col3)) {
            if (!param.data.row1.hideTotal) {
              currentHeight += pdfConfig.lineHeight;
              doc.setFontSize(param.data.row1.style.fontSize);
              doc.text(docWidth - 50, currentHeight, param.data.row1.col1, ALIGN_RIGHT);
              doc.text(docWidth - 10, currentHeight, param.data.row1.col3 + "  " + param.data.row1.col2, ALIGN_RIGHT);
              finalRowCount += 1;
            }

            // Show all the taxes applied
            taxData = (_param$data$row = param.data.row1) === null || _param$data$row === void 0 ? void 0 : _param$data$row.col4;
            if (taxData) {
              doc.setTextColor(lightGray);
              taxData.forEach(function (tax) {
                currentHeight += pdfConfig.lineHeight;
                if (isBreakPage(currentHeight, pageHeight)) {
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

          if (param.data.row3 && (param.data.row3.col1 || param.data.row3.col2 || param.data.row3.col3)) {
            currentHeight += pdfConfig.lineHeight;
            doc.text(docWidth - 50, currentHeight, param.data.row3.col1, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.row3.col3 + "  " + param.data.row3.col2, ALIGN_RIGHT);
            finalRowCount += 1;
          }

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
            if (isBreakPage(currentHeight, pageHeight)) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
            }
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
          if (param.data.total.isFxConversionVisible) {
            // (15 = Conv table height) + (10 = box height) = 25
            if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
            }

            // Define the box parameters
            boxWidth = 95;
            boxHeight = 30;
            boxX = pageWidth - boxWidth - 10;
            boxY = currentHeight + 5; // Draw the box
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
            currentHeight += boxHeight + 30;
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
            currentHeight += pdfConfig.lineHeight;
            // Additional information section will take the following space
            /**
             * 1. Label - Additional Information =>  1 Line
             * 2. Each custom field => 1 Line
             */
            additionalInfoSize = param.data.customFields.length * pdfConfig.subLineHeight + pdfConfig.lineHeight;
            if (currentHeight + additionalInfoSize > pageHeight) {
              doc.addPage();
              currentHeight = 20;
            }
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Additional Information");
            doc.setFontSize(pdfConfig.fieldTextSize);
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
                  currentHeight = DEFAULT_CURRENT_HEIGHT;
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
            if (currentHeight + (((_param$data13 = param.data) === null || _param$data13 === void 0 ? void 0 : (_param$data13$eSign = _param$data13.eSign) === null || _param$data13$eSign === void 0 ? void 0 : (_param$data13$eSign$s = _param$data13$eSign.signature) === null || _param$data13$eSign$s === void 0 ? void 0 : _param$data13$eSign$s.height) || 20) > pageHeight || currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
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
              currentHeight = DEFAULT_CURRENT_HEIGHT;
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
            doc.text(docWidth / 2, docHeight - DEFAULT_CURRENT_HEIGHT, param.footer.text, ALIGN_CENTER);
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
          returnObj.estamp = {
            pageNumberForInvoiceTotal: pageNumberForInvoiceTotal,
            invoiceTotalLineHeight: invoiceTotalLineHeight
          };
          return _context.abrupt("return", returnObj);
        case 141:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImlzQnJlYWtQYWdlIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsIkRFRkFVTFRfQ1VSUkVOVF9IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGJ1c2luZXNzMiIsImN1c3RvbWVyTmFtZSIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImFkZGl0aW9uYWxJbmZvU2l6ZSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImlzRnhDb252ZXJzaW9uVmlzaWJsZSIsInRvdGFsVGF4QW1vdW50IiwidG90YWxUYXhBbW91bnRDb252IiwiZGVmYXVsdEN1cnJlbmN5IiwiY29udlJhdGUiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwicXJDb2RlIiwiaXJuIiwiZ3N0UmVnVHlwZSIsImhzbk51bSIsImdzdFN0YXRlV2l0aENvZGUiLCJsYWJlbDEiLCJsYWJlbDIiLCJsYWJlbDMiLCJsYWJlbDQiLCJsYWJlbDUiLCJsYWJlbDYiLCJhY2tEYXRlIiwiYWNrTnVtYmVyIiwiZVNpZ24iLCJhcHByb3Zlck5hbWUiLCJhcHByb3ZlZEF0IiwiYXV0aG9yaXplciIsImFwcHJvdmVyVGV4dCIsInNpZ25hdHVyZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic2l6ZSIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwidGF4IiwiY29uY2F0IiwiYW1vdW50Iiwic2V0RmlsbENvbG9yIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsImNvbnRlbnQiLCJmb250U3R5bGUiLCJ0aGVtZSIsImhlYWRTdHlsZXMiLCJmaWxsQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJhbGlnbiIsIm1pbkNlbGxIZWlnaHQiLCJib2R5U3R5bGVzIiwiY29sdW1uU3R5bGVzIiwiY2VsbFdpZHRoIiwiaGFsaWduIiwidmFsaWduIiwicm93U3R5bGVzIiwic2V0UGFnZSIsIm1hcCIsImJhbmsiLCJhY2NvdW50IiwiX3BhcmFtJGRhdGE5IiwiX3BhcmFtJGRhdGExMCIsIl9wYXJhbSRkYXRhMTAkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJlc3RhbXAiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIHBkZlRpdGxlPzogc3RyaW5nLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRheE51bWJlcjogcHJvcHMuY29udGFjdD8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIGhlYWRlcldpZHRoOiBwcm9wcy5kYXRhPy5oZWFkZXJXaWR0aCB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBoZWlnaHQuXG4gIC8vIGlmIHRydWUsIHRoZW4gd2UgYnJlYWsgdGhlIGNoYW5nZS5cbiAgLy8gQ2hlY2tpbmcgd2l0aCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUIGJlY2F1c2Ugb2YgY3VycmVudCBwYWdlIG5lZWRzIHRvIGhhdmUgc29tZSBzcGFjaW5nIGF0IHRoZSBib3R0b20uXG4gIGNvbnN0IGlzQnJlYWtQYWdlID0gKGhlaWdodCwgcGFnZUhlaWdodCkgPT4ge1xuICAgIHJldHVybiBoZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICB9XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgQUxJR05fUklHSFQpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIC8vIGNvbXBhbnkgbG9nb1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIC8vIHRlbmFudCB0YXggbnVtYmVyXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgY29uc3QgY3VzdG9tZXJOYW1lID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdC5uYW1lLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGN1c3RvbWVyTmFtZS50ZXh0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSlcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsO1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YT8ucGRmVGl0bGUsIEFMSUdOX0xFRlQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgYCR7dGF4Lm5hbWV9OmAsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgdGF4LmFtb3VudCxcbiAgICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gdGF4RGF0YS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIC8vZW5kIHJvdzFcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzMgJiZcbiAgICAocGFyYW0uZGF0YS5yb3czLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3czLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3czLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3czLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5yb3czLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzMuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gLTEgPSBiZWNhdXNlIHRoZSBmeCByYXRlIGJveCBpcyBvbmUgcm93IGxvd2VyXG4gIC8vIDUgPSBlYWNoIHJvdyBoZWlnaHRcbiAgY29uc3QgZmluYWxSb3dIZWlnaHQgPSAoZmluYWxSb3dDb3VudCAtIDEpICogNTtcblxuICAvLyBBZGQgYSBsaW5lIGhlaWdodCBhZnRlciBjb252ZXJ0aW9uIHJhdGUgdGFibGUgYW5kIHRvdGFsc1xuICAvLyAzNSA9IGhlaWdodCBvZiBmeCByYXRlIGJveFxuICBpZiAocGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYgJiYgZmluYWxSb3dIZWlnaHQgPCAzNSkge1xuICAgIGNvbnN0IGRpZmYgPSAzNSAtIGZpbmFsUm93SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBkaWZmO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gIH1cblxuICAvLyBUb3RhbCBpbiB3b3Jkc1xuICBpZiAocGFyYW0uZGF0YS50b3RhbD8uY29sNCAmJiBwYXJhbS5kYXRhLnRvdGFsPy5jb2w1KSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIDIwXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSBwYWdlV2lkdGggLSBib3hXaWR0aCAtIDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgNTtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAgIFtcIlRvdGFsIFRheFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsVGF4QW1vdW50Q29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBib3hIZWlnaHQgKyAzMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgLy8gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBzZWN0aW9uIHdpbGwgdGFrZSB0aGUgZm9sbG93aW5nIHNwYWNlXG4gICAgLyoqXG4gICAgICogMS4gTGFiZWwgLSBBZGRpdGlvbmFsIEluZm9ybWF0aW9uID0+ICAxIExpbmVcbiAgICAgKiAyLiBFYWNoIGN1c3RvbSBmaWVsZCA9PiAxIExpbmVcbiAgICAgKi9cbiAgICBjb25zdCBhZGRpdGlvbmFsSW5mb1NpemUgPVxuICAgICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgK1xuICAgICAgcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBhZGRpdGlvbmFsSW5mb1NpemUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIpO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaXRlbSk7XG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxJQUFBLEdBQUFGLHNCQUFBLENBQUFILE9BQUE7QUFBcUMsU0FBQU0sUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUNyQyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDO0FBQUNDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEpBLFNBbUplUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGNBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUE7SUFBQSxJQUFBQyxLQUFBLEVBQUFDLHFCQUFBLEVBQUFDLE9BQUEsRUFBQUMsV0FBQSxFQUFBQyxHQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFB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