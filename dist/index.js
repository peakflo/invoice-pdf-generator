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
            currentHeight += pdfConfig.subLineHeight;
            param.data.customFields.map(function (item) {
              var _splitTextAndGetHeigh = splitTextAndGetHeight(item, pageWidth - 20),
                text = _splitTextAndGetHeigh.text,
                height = _splitTextAndGetHeigh.height;
              doc.text(10, currentHeight, text);
              currentHeight += height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImlzQnJlYWtQYWdlIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsIkRFRkFVTFRfQ1VSUkVOVF9IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGJ1c2luZXNzMiIsImN1c3RvbWVyTmFtZSIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImFkZGl0aW9uYWxJbmZvU2l6ZSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImlzRnhDb252ZXJzaW9uVmlzaWJsZSIsInRvdGFsVGF4QW1vdW50IiwidG90YWxUYXhBbW91bnRDb252IiwiZGVmYXVsdEN1cnJlbmN5IiwiY29udlJhdGUiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwicXJDb2RlIiwiaXJuIiwiZ3N0UmVnVHlwZSIsImhzbk51bSIsImdzdFN0YXRlV2l0aENvZGUiLCJsYWJlbDEiLCJsYWJlbDIiLCJsYWJlbDMiLCJsYWJlbDQiLCJsYWJlbDUiLCJsYWJlbDYiLCJhY2tEYXRlIiwiYWNrTnVtYmVyIiwiZVNpZ24iLCJhcHByb3Zlck5hbWUiLCJhcHByb3ZlZEF0IiwiYXV0aG9yaXplciIsImFwcHJvdmVyVGV4dCIsInNpZ25hdHVyZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic2l6ZSIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwidGF4IiwiY29uY2F0IiwiYW1vdW50Iiwic2V0RmlsbENvbG9yIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsImNvbnRlbnQiLCJmb250U3R5bGUiLCJ0aGVtZSIsImhlYWRTdHlsZXMiLCJmaWxsQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJhbGlnbiIsIm1pbkNlbGxIZWlnaHQiLCJib2R5U3R5bGVzIiwiY29sdW1uU3R5bGVzIiwiY2VsbFdpZHRoIiwiaGFsaWduIiwidmFsaWduIiwicm93U3R5bGVzIiwic2V0UGFnZSIsIm1hcCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50IiwiX3BhcmFtJGRhdGE5IiwiX3BhcmFtJGRhdGExMCIsIl9wYXJhbSRkYXRhMTAkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJlc3RhbXAiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIHBkZlRpdGxlPzogc3RyaW5nLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRheE51bWJlcjogcHJvcHMuY29udGFjdD8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIGhlYWRlcldpZHRoOiBwcm9wcy5kYXRhPy5oZWFkZXJXaWR0aCB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBoZWlnaHQuXG4gIC8vIGlmIHRydWUsIHRoZW4gd2UgYnJlYWsgdGhlIGNoYW5nZS5cbiAgLy8gQ2hlY2tpbmcgd2l0aCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUIGJlY2F1c2Ugb2YgY3VycmVudCBwYWdlIG5lZWRzIHRvIGhhdmUgc29tZSBzcGFjaW5nIGF0IHRoZSBib3R0b20uXG4gIGNvbnN0IGlzQnJlYWtQYWdlID0gKGhlaWdodCwgcGFnZUhlaWdodCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBoZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoaGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICBjb25zdCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUID0gMTA7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBBTElHTl9SSUdIVCk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgLy8gY29tcGFueSBsb2dvXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgLy8gdGVuYW50IHRheCBudW1iZXJcbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBjb25zdCBjdXN0b21lck5hbWUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Lm5hbWUsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgY3VzdG9tZXJOYW1lLnRleHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnRleHRTaXplU21hbGw7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhPy5wZGZUaXRsZSwgQUxJR05fTEVGVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgZG9jLnRleHQocm93LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGlmICghcGFyYW0uZGF0YS5yb3cxLmhpZGVUb3RhbCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gMjBcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAvLyBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHNlY3Rpb24gd2lsbCB0YWtlIHRoZSBmb2xsb3dpbmcgc3BhY2VcbiAgICAvKipcbiAgICAgKiAxLiBMYWJlbCAtIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gPT4gIDEgTGluZVxuICAgICAqIDIuIEVhY2ggY3VzdG9tIGZpZWxkID0+IDEgTGluZVxuICAgICAqL1xuICAgIGNvbnN0IGFkZGl0aW9uYWxJbmZvU2l6ZSA9XG4gICAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGggKiBwZGZDb25maWcuc3ViTGluZUhlaWdodCArXG4gICAgICBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBpZiAoY3VycmVudEhlaWdodCArIGFkZGl0aW9uYWxJbmZvU2l6ZSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIik7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IHRleHQsIGhlaWdodCB9ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGl0ZW0sIHBhZ2VXaWR0aCAtIDIwKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0O1xuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAvIDIsXG4gICAgICBkb2NIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hULFxuICAgICAgcGFyYW0uZm9vdGVyLnRleHQsXG4gICAgICBBTElHTl9DRU5URVJcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxJQUFBLEdBQUFGLHNCQUFBLENBQUFILE9BQUE7QUFBcUMsU0FBQU0sUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUNyQyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDO0FBQUNDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEpBLFNBbUplUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGNBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFB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