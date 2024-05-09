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
 *  pdfSubTitle?: string,
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
            pdfSubTitle: props.pdfSubTitle || "",
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
          }
          if (param.pdfSubTitle) {
            currentHeight -= 5;
            doc.text(docWidth / 2, currentHeight, param.pdfSubTitle, ALIGN_CENTER);
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
            _context.next = 57;
            break;
          }
          _context.next = 44;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 44:
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
          _context.next = 68;
          break;
        case 57:
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
        case 68:
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
        case 142:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImlzQnJlYWtQYWdlIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsIkRFRkFVTFRfQ1VSUkVOVF9IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGJ1c2luZXNzMiIsImN1c3RvbWVyTmFtZSIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImFkZGl0aW9uYWxJbmZvU2l6ZSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsInBkZlN1YlRpdGxlIiwibG9nbyIsInNyYyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJidXNpbmVzcyIsIm5hbWUiLCJhZGRyZXNzIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiZW1haWxfMSIsImNvdW50cnkiLCJ0YXhOdW1iZXIiLCJjb250YWN0IiwibGFiZWwiLCJzdWJUb3RhbExhYmVsIiwiZGF0ZTFMYWJlbCIsIm51bSIsImRhdGUyTGFiZWwiLCJuZXRUZXJtTGFiZWwiLCJkYXRlMSIsImRhdGUyIiwibmV0VGVybSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsInRhYmxlIiwic3ViVG90YWwiLCJjdXJyZW5jeSIsImRlc2NMYWJlbCIsInJlcXVlc3RlZEJ5IiwiY3VzdG9tRmllbGRzIiwiYXV0aG9yaXNlZEJ5Iiwic3RhdGljVkEiLCJkZXNjIiwiY3JlZGl0Tm90ZUxhYmVsIiwibm90ZSIsInJvdzEiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0Iiwic3R5bGUiLCJmb250U2l6ZSIsImhpZGVUb3RhbCIsInJvdzIiLCJyb3czIiwidG90YWwiLCJjb2w1IiwidG90YWxDb252Iiwic3ViVG90YWxDb252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImxhYmVsNSIsImxhYmVsNiIsImFja0RhdGUiLCJhY2tOdW1iZXIiLCJlU2lnbiIsImFwcHJvdmVyTmFtZSIsImFwcHJvdmVkQXQiLCJhdXRob3JpemVyIiwiYXBwcm92ZXJUZXh0Iiwic2lnbmF0dXJlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzaXplIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJnZXROdW1iZXJPZlBhZ2VzIiwianNQREYiLCJnZXRQYWdlV2lkdGgiLCJnZXRQYWdlSGVpZ2h0IiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImhlYWRlclRleHRTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJhZGRyZXNzTGluZTEiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsInJvdyIsImluZGV4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluIiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJhZGRQYWdlIiwidG9Mb2NhbGVTdHJpbmciLCJ0YXgiLCJjb25jYXQiLCJhbW91bnQiLCJzZXRGaWxsQ29sb3IiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJzZXRQYWdlIiwibWFwIiwiX3NwbGl0VGV4dEFuZEdldEhlaWdoIiwiYmFuayIsImFjY291bnQiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImFicnVwdCIsInN0b3AiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGVcIjtcbmltcG9ydCB7IGdldEN1c3RvbUZvbnQgfSBmcm9tIFwiLi9mb250XCI7XG5pbXBvcnQganNQREZSZnFUZW1wbGF0ZSBmcm9tIFwiLi9SRlFcIjtcbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGLCBqc1BERlJmcVRlbXBsYXRlIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgcGRmU3ViVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgY3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjPzogc3RyaW5nW10sXG4gKiAgICAgICBjcmVkaXROb3RlTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBub3RlPzogc3RyaW5nLFxuICogICAgICAgcmVxdWVzdGVkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBjdXN0b21GaWVsZHM/OiBzdHJpbmdbXSxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICBpbmRpYUlSUD86IHtcbiAqICAgICAgICAgIHFyQ29kZTogc3RyaW5nLFxuICogICAgICAgICAgaXJuOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDQ6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFJlZ1R5cGU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMTogc3RyaW5nLFxuICogICAgICAgICAgaHNuTnVtOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDM6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHN0cmluZ1xuICogICAgICAgICAgbGFiZWwyOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNjogc3RyaW5nLFxuICogICAgICAgICAgYWNrRGF0ZTogc3RyaW5nLFxuICogICAgICAgICAgYWNrTnVtYmVyOiBzdHJpbmcsXG4gKiAgICAgIH0sXG4gKiAgICAgIGVTaWduPzoge1xuICogICAgICAgICAgYXBwcm92ZXJOYW1lPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZWRBdD86IHN0cmluZyxcbiAqICAgICAgICAgIGF1dGhvcml6ZXI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlclRleHQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBzaWduYXR1cmU/OiB7XG4gKiAgICAgICAgICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICAgICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICAgICAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgICAgICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgIH0sXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBhbnksXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfSxcbiAqICAgICAgICAgICBoaWRlVG90YWw/OiBib29sZWFuXG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mz86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w1Pzogc3RyaW5nLFxuICogICAgICAgICAgIHRvdGFsQ29udj86IHN0cmluZyxcbiAqICAgICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IGJvb2xlYW4sXG4gKiAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbnZSYXRlPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIHBkZlRpdGxlOiBwcm9wcy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgICBoaWRlVG90YWw6IHByb3BzLmRhdGE/LnJvdzE/LmhpZGVUb3RhbCB8fCBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3czOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mz8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzM/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICAvLyB3ZSBjaGVjayBpZiB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIHBhZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBwYWdlIGhlaWdodC5cbiAgLy8gaWYgdHJ1ZSwgdGhlbiB3ZSBicmVhayB0aGUgY2hhbmdlLlxuICAvLyBDaGVja2luZyB3aXRoIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgYmVjYXVzZSBvZiBjdXJyZW50IHBhZ2UgbmVlZHMgdG8gaGF2ZSBzb21lIHNwYWNpbmcgYXQgdGhlIGJvdHRvbS5cbiAgY29uc3QgaXNCcmVha1BhZ2UgPSAoaGVpZ2h0LCBwYWdlSGVpZ2h0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChoZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG4gIGNvbnN0IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgPSAxMDtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICB9XG5cbiAgaWYgKHBhcmFtLnBkZlN1YlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCAtPSA1XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZTdWJUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICB9XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcudGV4dFNpemVTbWFsbDtcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuYWNrRGF0ZSAmJiBpbmRpYUlSUC5hY2tOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw1KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDUpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tEYXRlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw2KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDYpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tOdW1iZXJcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIElOVk9JQ0UgVElUTEUgLSBJTk1PQkkgY2hhbmdlXG4gIGlmIChwYXJhbS5kYXRhPy5wZGZUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGE/LnBkZlRpdGxlLCBBTElHTl9MRUZUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID0gKHBhZ2VXaWR0aCAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBkb2MudGV4dChyb3csIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIC8vcmVzZXQgdGhlIGhlaWdodCB0aGF0IHdhcyBpbmNyZWFzZWQgdG8gY2hlY2sgdGhlIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHBhZ2UgbnVtYmVyIHRoZSBhYm92ZSBsaW5lIGlzIG9uXG4gIGNvbnN0IHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICBjb25zdCBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gcGFnZVdpZHRoIC0gYm94V2lkdGggLSAxMDtcbiAgICBjb25zdCBib3hZID0gY3VycmVudEhlaWdodCArIDU7XG5cbiAgICAvLyBEcmF3IHRoZSBib3hcbiAgICBkb2Muc2V0RHJhd0NvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjIpO1xuICAgIGRvYy5yZWN0KGJveFgsIGJveFksIGJveFdpZHRoLCBib3hIZWlnaHQsIFwiRkRcIik7XG5cbiAgICAvLyBBZGQgdGV4dCB0byB0aGUgYm94XG4gICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXCJGb3IgR1NUIHJlcG9ydGluZyBwdXJwb3NlczpcIiwgYm94WCArIDUsIGJveFkgKyA1KTtcbiAgICBkb2MubGluZShib3hYICsgNSwgYm94WSArIDcuNSwgYm94WCArIGJveFdpZHRoIC0gNSwgYm94WSArIDcuNSk7XG4gICAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGAxICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfSA9ICR7cGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZX0gJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgYm94WCArIDUsXG4gICAgICBib3hZICsgMTNcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSB0YWJsZVxuICAgIGRvYy5hdXRvVGFibGUoe1xuICAgICAgc3RhcnRZOiBib3hZICsgMTgsXG4gICAgICBtYXJnaW46IHsgbGVmdDogYm94WCwgcmlnaHQ6IDAgfSxcbiAgICAgIGhlYWQ6IFtbXCJcIiwgYEFtb3VudCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWBdXSxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAgW1wiU3VidG90YWxcIiwgcGFyYW0uZGF0YS50b3RhbC5zdWJUb3RhbENvbnZdLFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYm94SGVpZ2h0ICsgMzA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIC8vIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gc2VjdGlvbiB3aWxsIHRha2UgdGhlIGZvbGxvd2luZyBzcGFjZVxuICAgIC8qKlxuICAgICAqIDEuIExhYmVsIC0gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiA9PiAgMSBMaW5lXG4gICAgICogMi4gRWFjaCBjdXN0b20gZmllbGQgPT4gMSBMaW5lXG4gICAgICovXG4gICAgY29uc3QgYWRkaXRpb25hbEluZm9TaXplID1cbiAgICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICtcbiAgICAgIHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgYWRkaXRpb25hbEluZm9TaXplID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoaXRlbSwgcGFnZVdpZHRoIC0gMjApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHRleHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBoZWlnaHQ7XG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC8gMixcbiAgICAgIGRvY0hlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQsXG4gICAgICBwYXJhbS5mb290ZXIudGV4dCxcbiAgICAgIEFMSUdOX0NFTlRFUlxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybk9iai5lc3RhbXAgPSB7XG4gICAgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCxcbiAgICBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0LFxuICB9O1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUgsT0FBQTtBQUFxQyxTQUFBTSxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFBRyxNQUFBLENBQUFDLHFCQUFBLFFBQUFDLE9BQUEsR0FBQUYsTUFBQSxDQUFBQyxxQkFBQSxDQUFBSixNQUFBLEdBQUFDLGNBQUEsS0FBQUksT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBSixNQUFBLENBQUFLLHdCQUFBLENBQUFSLE1BQUEsRUFBQU8sR0FBQSxFQUFBRSxVQUFBLE9BQUFQLElBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULElBQUEsRUFBQUcsT0FBQSxZQUFBSCxJQUFBO0FBQUEsU0FBQVUsY0FBQUMsTUFBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFGLENBQUEsVUFBQUcsTUFBQSxXQUFBRixTQUFBLENBQUFELENBQUEsSUFBQUMsU0FBQSxDQUFBRCxDQUFBLFFBQUFBLENBQUEsT0FBQWYsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsT0FBQUMsT0FBQSxXQUFBQyxHQUFBLFFBQUFDLGdCQUFBLGFBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRixNQUFBLENBQUFFLEdBQUEsU0FBQWhCLE1BQUEsQ0FBQWtCLHlCQUFBLEdBQUFsQixNQUFBLENBQUFtQixnQkFBQSxDQUFBVCxNQUFBLEVBQUFWLE1BQUEsQ0FBQWtCLHlCQUFBLENBQUFKLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBaEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixNQUFBLEVBQUFNLEdBQUEsRUFBQWhCLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVMsTUFBQSxFQUFBRSxHQUFBLGlCQUFBTixNQUFBO0FBQ3JDLElBQU1XLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7QUFBQ0MsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5KQSxTQW9KZVEsb0JBQW9CQSxDQUFBQyxFQUFBO0VBQUEsT0FBQUMscUJBQUEsQ0FBQXZCLEtBQUEsT0FBQUksU0FBQTtBQUFBO0FBQUEsU0FBQW1CLHNCQUFBO0VBQUFBLHFCQUFBLE9BQUFDLGtCQUFBLDJCQUFBQyxZQUFBLFlBQUFDLElBQUEsQ0FBbkMsU0FBQUMsUUFBb0NDLEtBQUs7SUFBQSxJQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1C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