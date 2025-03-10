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
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
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
 *  isPdfForDsc?: boolean,
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
 *       dppNilaiLainLabel?: string,
 *       dppNilaiLain?: string,
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data27, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data32$row$sty, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data35, _props$data35$row, _props$data36, _props$data36$row, _props$data37, _props$data37$row, _props$data37$row$sty, _props$data38, _props$data38$row, _props$data39, _props$data39$row, _props$data40, _props$data40$row, _props$data41, _props$data41$row, _props$data41$row$sty, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$total, _props$data48, _props$data48$total, _props$data49, _props$data49$total, _props$data50, _props$data50$total, _props$data51, _props$data51$total, _props$data52, _props$data52$total, _props$data53, _props$data53$total, _props$data54, _props$data54$total, _props$data55, _props$data55$row, _props$data55$row$sty, _props$data56, _props$data56$amountD, _props$data57, _props$data57$amountD, _props$data58, _props$data58$amountD, _props$data59, _props$data59$amountD, _props$data59$amountD2, _props$data60, _props$data61, _props$data$indiaIRP$, _props$data$indiaIRP$2, _props$data62, _props$data62$eSign, _props$data63, _props$data63$eSign, _props$data64, _props$data64$eSign, _props$data65, _props$data65$eSign, _props$data66, _props$data66$eSign, _props$data66$eSign$s, _props$data67, _props$data67$eSign, _props$data67$eSign$s, _props$data68, _props$data68$eSign, _props$data68$eSign$s, _props$data69, _props$data69$eSign, _props$data69$eSign$s, _props$data69$eSign$s2, _props$data70, _props$data70$eSign, _props$data70$eSign$s, _props$data70$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, DSC_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, _param$data$total3, boxWidth, boxHeight, boxX, boxY, addDesc, noteData, staticVAContent, paymentDetails, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, numPages, i, returnObj, blobOutput;
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
                width: (_param$data$headerWid = param.data.headerWidth) !== null && _param$data$headerWid !== void 0 && _param$data$headerWid[i] ? (pageWidth - pdfConfig.headerTextSize) * param.data.headerWidth[i] : tdWidth
              });
              leftShift = leftShift + ((_param$data$headerWid2 = param.data.headerWidth) !== null && _param$data$headerWid2 !== void 0 && _param$data$headerWid2[i] ? (pageWidth - pdfConfig.headerTextSize) * param.data.headerWidth[i] : tdWidth);
            }
            return result;
          };
          param = {
            outputType: props.outputType || OutputType.Save,
            returnJsPDFDocObject: props.returnJsPDFDocObject || false,
            fileName: props.fileName || "",
            orientationLandscape: props.orientationLandscape || false,
            pdfTitle: props.pdfTitle || "",
            isPdfForDsc: props.isPdfForDsc || false,
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
              dppNilaiLainLabel: ((_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.dppNilaiLainLabel) || "",
              dppNilaiLain: ((_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.dppNilaiLain) || "",
              date1Label: ((_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.date1Label) || "",
              num: ((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.num) || "",
              date2Label: ((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.date2Label) || "",
              netTermLabel: ((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.netTermLabel) || "",
              date1: ((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.date1) || "",
              date2: ((_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.date2) || "",
              netTerm: ((_props$data11 = props.data) === null || _props$data11 === void 0 ? void 0 : _props$data11.netTerm) || "",
              headerBorder: ((_props$data12 = props.data) === null || _props$data12 === void 0 ? void 0 : _props$data12.headerBorder) || false,
              tableBodyBorder: ((_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.tableBodyBorder) || false,
              header: ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.header) || [],
              headerWidth: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.headerWidth) || [],
              table: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.table) || [],
              subTotal: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.subTotal) || "",
              currency: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.currency) || "",
              descLabel: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.descLabel) || "",
              requestedBy: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.requestedBy) || "",
              customFields: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.customFields) || [],
              authorisedBy: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.authorisedBy) || "",
              staticVA: (_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : _props$data23.staticVA,
              desc: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : _props$data24.desc) || "",
              creditNoteLabel: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : _props$data25.creditNoteLabel) || "",
              note: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : _props$data26.note) || "",
              pdfTitle: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : _props$data27.pdfTitle) || "",
              row1: {
                col1: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$row = _props$data28.row1) === null || _props$data28$row === void 0 ? void 0 : _props$data28$row.col1) || "",
                col2: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row1) === null || _props$data29$row === void 0 ? void 0 : _props$data29$row.col2) || "",
                col3: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$row = _props$data30.row1) === null || _props$data30$row === void 0 ? void 0 : _props$data30$row.col3) || "",
                col4: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row1) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.col4) || [],
                style: {
                  fontSize: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row1) === null || _props$data32$row === void 0 ? void 0 : (_props$data32$row$sty = _props$data32$row.style) === null || _props$data32$row$sty === void 0 ? void 0 : _props$data32$row$sty.fontSize) || 12
                },
                hideTotal: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row1) === null || _props$data33$row === void 0 ? void 0 : _props$data33$row.hideTotal) || false
              },
              row2: {
                col1: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row2) === null || _props$data34$row === void 0 ? void 0 : _props$data34$row.col1) || "",
                col2: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$row = _props$data35.row2) === null || _props$data35$row === void 0 ? void 0 : _props$data35$row.col2) || "",
                col3: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$row = _props$data36.row2) === null || _props$data36$row === void 0 ? void 0 : _props$data36$row.col3) || "",
                style: {
                  fontSize: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$row = _props$data37.row2) === null || _props$data37$row === void 0 ? void 0 : (_props$data37$row$sty = _props$data37$row.style) === null || _props$data37$row$sty === void 0 ? void 0 : _props$data37$row$sty.fontSize) || 12
                }
              },
              row3: {
                col1: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$row = _props$data38.row3) === null || _props$data38$row === void 0 ? void 0 : _props$data38$row.col1) || "",
                col2: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$row = _props$data39.row3) === null || _props$data39$row === void 0 ? void 0 : _props$data39$row.col2) || "",
                col3: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$row = _props$data40.row3) === null || _props$data40$row === void 0 ? void 0 : _props$data40$row.col3) || "",
                style: {
                  fontSize: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$row = _props$data41.row3) === null || _props$data41$row === void 0 ? void 0 : (_props$data41$row$sty = _props$data41$row.style) === null || _props$data41$row$sty === void 0 ? void 0 : _props$data41$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$total = _props$data42.total) === null || _props$data42$total === void 0 ? void 0 : _props$data42$total.col1) || "",
                // Total label
                col2: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.col2) || "",
                // Total amount
                col3: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.col3) || "",
                // Invoice currency
                col4: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$total = _props$data46.total) === null || _props$data46$total === void 0 ? void 0 : _props$data46$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$total = _props$data47.total) === null || _props$data47$total === void 0 ? void 0 : _props$data47$total.totalConv) || "",
                // Total converted amount
                subTotalConv: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$total = _props$data48.total) === null || _props$data48$total === void 0 ? void 0 : _props$data48$total.subTotalConv) || "",
                // sub total converted amount
                dppNilaiLainConv: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$total = _props$data49.total) === null || _props$data49$total === void 0 ? void 0 : _props$data49$total.dppNilaiLainConv) || "",
                isFxConversionVisible: (_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$total = _props$data50.total) === null || _props$data50$total === void 0 ? void 0 : _props$data50$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$total = _props$data51.total) === null || _props$data51$total === void 0 ? void 0 : _props$data51$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : (_props$data52$total = _props$data52.total) === null || _props$data52$total === void 0 ? void 0 : _props$data52$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : (_props$data53$total = _props$data53.total) === null || _props$data53$total === void 0 ? void 0 : _props$data53$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$total = _props$data54.total) === null || _props$data54$total === void 0 ? void 0 : _props$data54$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$row = _props$data55.row2) === null || _props$data55$row === void 0 ? void 0 : (_props$data55$row$sty = _props$data55$row.style) === null || _props$data55$row$sty === void 0 ? void 0 : _props$data55$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$amountD = _props$data56.amountDue) === null || _props$data56$amountD === void 0 ? void 0 : _props$data56$amountD.col1) || "",
                col2: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : (_props$data57$amountD = _props$data57.amountDue) === null || _props$data57$amountD === void 0 ? void 0 : _props$data57$amountD.col2) || "",
                col3: ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : (_props$data58$amountD = _props$data58.amountDue) === null || _props$data58$amountD === void 0 ? void 0 : _props$data58$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$amountD = _props$data59.amountDue) === null || _props$data59$amountD === void 0 ? void 0 : (_props$data59$amountD2 = _props$data59$amountD.style) === null || _props$data59$amountD2 === void 0 ? void 0 : _props$data59$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : _props$data60.creditNote) || ""
            }, ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : _props$data61.indiaIRP) && {
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
                approverName: ((_props$data62 = props.data) === null || _props$data62 === void 0 ? void 0 : (_props$data62$eSign = _props$data62.eSign) === null || _props$data62$eSign === void 0 ? void 0 : _props$data62$eSign.approverName) || "",
                approvedAt: ((_props$data63 = props.data) === null || _props$data63 === void 0 ? void 0 : (_props$data63$eSign = _props$data63.eSign) === null || _props$data63$eSign === void 0 ? void 0 : _props$data63$eSign.approvedAt) || "",
                authorizer: ((_props$data64 = props.data) === null || _props$data64 === void 0 ? void 0 : (_props$data64$eSign = _props$data64.eSign) === null || _props$data64$eSign === void 0 ? void 0 : _props$data64$eSign.authorizer) || "",
                approverText: ((_props$data65 = props.data) === null || _props$data65 === void 0 ? void 0 : (_props$data65$eSign = _props$data65.eSign) === null || _props$data65$eSign === void 0 ? void 0 : _props$data65$eSign.approverText) || "",
                signature: {
                  src: ((_props$data66 = props.data) === null || _props$data66 === void 0 ? void 0 : (_props$data66$eSign = _props$data66.eSign) === null || _props$data66$eSign === void 0 ? void 0 : (_props$data66$eSign$s = _props$data66$eSign.signature) === null || _props$data66$eSign$s === void 0 ? void 0 : _props$data66$eSign$s.src) || "",
                  width: ((_props$data67 = props.data) === null || _props$data67 === void 0 ? void 0 : (_props$data67$eSign = _props$data67.eSign) === null || _props$data67$eSign === void 0 ? void 0 : (_props$data67$eSign$s = _props$data67$eSign.signature) === null || _props$data67$eSign$s === void 0 ? void 0 : _props$data67$eSign$s.width) || 55,
                  height: ((_props$data68 = props.data) === null || _props$data68 === void 0 ? void 0 : (_props$data68$eSign = _props$data68.eSign) === null || _props$data68$eSign === void 0 ? void 0 : (_props$data68$eSign$s = _props$data68$eSign.signature) === null || _props$data68$eSign$s === void 0 ? void 0 : _props$data68$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data69 = props.data) === null || _props$data69 === void 0 ? void 0 : (_props$data69$eSign = _props$data69.eSign) === null || _props$data69$eSign === void 0 ? void 0 : (_props$data69$eSign$s = _props$data69$eSign.signature) === null || _props$data69$eSign$s === void 0 ? void 0 : (_props$data69$eSign$s2 = _props$data69$eSign$s.margin) === null || _props$data69$eSign$s2 === void 0 ? void 0 : _props$data69$eSign$s2.top) || "",
                    left: ((_props$data70 = props.data) === null || _props$data70 === void 0 ? void 0 : (_props$data70$eSign = _props$data70.eSign) === null || _props$data70$eSign === void 0 ? void 0 : (_props$data70$eSign$s = _props$data70$eSign.signature) === null || _props$data70$eSign$s === void 0 ? void 0 : (_props$data70$eSign$s2 = _props$data70$eSign$s.margin) === null || _props$data70$eSign$s2 === void 0 ? void 0 : _props$data70$eSign$s2.left) || ""
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
          DEFAULT_CURRENT_HEIGHT = 10;
          DSC_HEIGHT = 30; //starting at 15mm
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
          doc.text(docWidth - pdfConfig.fieldTextSize, currentHeight, param.business.name, ALIGN_RIGHT);
          doc.setFontSize(pdfConfig.fieldTextSize);

          // company logo
          if (param.logo.src) {
            doc.addImage(param.logo.src, IMAGE_CONTENT_TYPE, pdfConfig.fieldTextSize + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
          }

          // tenant tax number
          if (param.business.taxNumber) {
            currentHeight += pdfConfig.subLineHeight + 2;
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.setTextColor(colorBlue);
            doc.text(docWidth - pdfConfig.fieldTextSize, currentHeight, param.business.taxNumber, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
          }
          doc.setTextColor(colorBlack);
          // IRP QR code
          // If QR code is availble, align issuer address to left. Else keep in right.
          IRPQrCode = (_param$data = param.data) === null || _param$data === void 0 ? void 0 : (_param$data$indiaIRP = _param$data.indiaIRP) === null || _param$data$indiaIRP === void 0 ? void 0 : _param$data$indiaIRP.qrCode;
          if (!IRPQrCode) {
            _context.next = 60;
            break;
          }
          _context.next = 45;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 45:
          if (param !== null && param !== void 0 && (_param$business = param.business) !== null && _param$business !== void 0 && _param$business.address) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(pdfConfig.fieldTextSize, currentHeight, ISSUER_ADDRESS_LABEL);
          }
          currentHeight += pdfConfig.subLineHeight;
          doc.setFontSize(pdfConfig.fieldTextSize - 2);
          addressLine1 = splitTextAndGetHeight(param.business.address, docWidth * 4 / pdfConfig.fieldTextSize);
          doc.text(pdfConfig.fieldTextSize, currentHeight, param.business.address);
          currentHeight += addressLine1.height + 1;
          addressLine2 = splitTextAndGetHeight(param.business.addressLine2, docWidth * 4 / 10);
          doc.text(10, currentHeight, addressLine2.text);
          currentHeight += addressLine2.height + 1;
          if (param.business.addressLine3) {
            addressLine3 = splitTextAndGetHeight(param.business.addressLine3, docWidth * 4 / 10);
            doc.text(10, currentHeight, param.business.addressLine3);
            currentHeight += addressLine3.height + 1;
          }
          doc.text(10, currentHeight, param.business.country);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(10, currentHeight, param.business.email_1);
          _context.next = 73;
          break;
        case 60:
          if (param !== null && param !== void 0 && (_param$business2 = param.business) !== null && _param$business2 !== void 0 && _param$business2.address) {
            currentHeight += pdfConfig.lineHeight;
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(docWidth - 10, currentHeight, ISSUER_ADDRESS_LABEL, ALIGN_RIGHT);
          }
          doc.setFontSize(pdfConfig.fieldTextSize - 2);
          currentHeight += pdfConfig.subLineHeight;
          _addressLine = splitTextAndGetHeight(param.business.address, docWidth * 4 / 10);
          doc.text(docWidth - 10, currentHeight, _addressLine.text, ALIGN_RIGHT);
          currentHeight += _addressLine.height + 1;
          _addressLine2 = splitTextAndGetHeight(param.business.addressLine2, docWidth * 4 / 10);
          doc.text(docWidth - 10, currentHeight, _addressLine2.text, ALIGN_RIGHT);
          currentHeight += _addressLine2.height + 1;
          if (param.business.addressLine3) {
            _addressLine3 = splitTextAndGetHeight(param.business.addressLine3, docWidth * 4 / 10);
            doc.text(docWidth - 10, currentHeight, _addressLine3.text, ALIGN_RIGHT);
            currentHeight += _addressLine3.height + 1;
          }
          doc.text(docWidth - 10, currentHeight, param.business.country, ALIGN_RIGHT);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(docWidth - 10, currentHeight, param.business.email_1, ALIGN_RIGHT);
        case 73:
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
          customerNameHeight = 0;
          if (param.contact.name) {
            customerName = splitTextAndGetHeight(param.contact.name, pageWidth / 2);
            doc.text(10, currentHeight, customerName.text);
            customerNameHeight = customerName.height;
          }
          doc.setTextColor(colorBlack);
          doc.setTextColor(lightGray);
          doc.setFontSize(pdfConfig.headerTextSize - 5);
          labelHeight = 0;
          if (param.data.label && param.data.num) {
            label = splitTextAndGetHeight(param.data.label + param.data.num, pageWidth * 4 / 10);
            doc.text(docWidth - 10, currentHeight, label.text, ALIGN_RIGHT);
            labelHeight = label.height;
          }
          if (param.contact.name || param.data.label && param.data.num) {
            currentHeight += customerNameHeight > labelHeight ? customerNameHeight : labelHeight;
          }
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
            pdfTitle = splitTextAndGetHeight((_param$data8 = param.data) === null || _param$data8 === void 0 ? void 0 : _param$data8.pdfTitle, pageWidth * 3 / 4);
            doc.text(10, currentHeight, pdfTitle.text, ALIGN_LEFT);
            currentHeight += pdfTitle.height - 4;
          }
          doc.setTextColor(colorGray);

          //TABLE PART
          tdWidth = (pageWidth - pdfConfig.headerTextSize) / param.data.header.length;
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
            var maxTextHeightHeader = 0;
            param.data.header.forEach(function (row, index) {
              var _tdWidthDimensions$in;
              var rowtext = splitTextAndGetHeight(row, tdWidthDimensions[index].width - 3);
              maxTextHeightHeader = Math.max(maxTextHeightHeader, rowtext.height);
              doc.text(rowtext.text, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in = tdWidthDimensions[index]) === null || _tdWidthDimensions$in === void 0 ? void 0 : _tdWidthDimensions$in.shift, currentHeight);
            });
            currentHeight += pdfConfig.subLineHeight - 1;
            currentHeight += maxTextHeightHeader + 1;
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

            //pre-increase currentHeight to check the height based on next row
            if (index + 1 < tableBodyLength) currentHeight += maxHeight;
            if (isBreakPage(currentHeight, pageHeight)) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
              if (index + 1 < tableBodyLength) addTableHeader();
            } else {
              // check if new page
              if (index + 1 < tableBodyLength && currentHeight > 30) currentHeight -= maxHeight;
            }
            doc.setFontSize(pdfConfig.textSizeSmall);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            row.forEach(function (rr, index) {
              var _tdWidthDimensions$in3, _tdWidthDimensions$in4;
              var item = splitTextAndGetHeight(rr.toString(), (tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in3 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in3 === void 0 ? void 0 : _tdWidthDimensions$in3.width) - 1);
              doc.text(item.text, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in4 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in4 === void 0 ? void 0 : _tdWidthDimensions$in4.shift, currentHeight + 4);
            });
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
          if (param.data.dppNilaiLainLabel && param.data.dppNilaiLain) {
            doc.text(docWidth - 50, currentHeight, param.data.dppNilaiLainLabel, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.currency + "  " + param.data.dppNilaiLain.toLocaleString(), ALIGN_RIGHT);
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
                  currentHeight = pdfConfig.headerTextSize;
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
            totalInWords = splitTextAndGetHeight(param.data.total.col5, pageWidth - pdfConfig.headerTextSize);
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
              body: [["Subtotal", param.data.total.subTotalConv]].concat((0, _toConsumableArray2["default"])((_param$data$total3 = param.data.total) !== null && _param$data$total3 !== void 0 && _param$data$total3.dppNilaiLainConv ? [["Dpp Nilai Lain", param.data.total.dppNilaiLainConv]] : []), [["Total Tax", param.data.total.totalTaxAmountConv], [{
                content: "Total ".concat(param.data.total.defaultCurrency),
                fontStyle: "bold"
              }, {
                content: param.data.total.totalConv,
                fontStyle: "bold"
              }]]),
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

          // Note
          if (param.data.note) {
            currentHeight += pdfConfig.labelTextSize;
            noteData = splitTextAndGetHeight(param.data.note, pageWidth - pdfConfig.headerTextSize);
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

          // Additional Information - custom fields
          if (param.data.customFields.length) {
            currentHeight += pdfConfig.lineHeight;

            // Write the "Additional Information" label

            param.data.customFields.forEach(function (item, index) {
              // Calculate text height
              var _splitTextAndGetHeigh = splitTextAndGetHeight(item, pageWidth - pdfConfig.headerTextSize),
                text = _splitTextAndGetHeigh.text,
                height = _splitTextAndGetHeigh.height;

              // Check if adding this item will exceed the page height
              if (currentHeight + height > pageHeight) {
                doc.addPage();
                currentHeight = pdfConfig.headerTextSize; // Reset to the top of the new page
              }
              if (index === 0) {
                doc.setFontSize(pdfConfig.labelTextSize);
                doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
                doc.text(pdfConfig.fieldTextSize, currentHeight, "Additional Information");
                // Increment height for the next line
                currentHeight += 2 * pdfConfig.subLineHeight;
                doc.setFontSize(pdfConfig.fieldTextSize);
                doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              }

              // Add the text
              doc.text(pdfConfig.fieldTextSize, currentHeight, text);
              currentHeight += height; // Increment the current height
            });

            // Add spacing after the section
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
              currentHeight = pdfConfig.headerTextSize;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Payment details");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(10, currentHeight, paymentDetails.text);
            currentHeight += pdfConfig.lineHeight + paymentDetails.height;
          }
          if (param !== null && param !== void 0 && param.isPdfForDsc) {
            // PDF is for Digital Signature
            currentHeight += pdfConfig.subLineHeight;
            if (currentHeight + DSC_HEIGHT > pageHeight || currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
            }
            signaturePageNumber = doc.internal.getNumberOfPages();
            signatureLineHeight = currentHeight;
            currentHeight += DSC_HEIGHT;
            currentHeight += pdfConfig.subLineHeight;
          }

          // E signature
          if ((_param$data12 = param.data) !== null && _param$data12 !== void 0 && (_param$data12$eSign = _param$data12.eSign) !== null && _param$data12$eSign !== void 0 && (_param$data12$eSign$s = _param$data12$eSign.signature) !== null && _param$data12$eSign$s !== void 0 && _param$data12$eSign$s.src) {
            if (currentHeight + (((_param$data13 = param.data) === null || _param$data13 === void 0 ? void 0 : (_param$data13$eSign = _param$data13.eSign) === null || _param$data13$eSign === void 0 ? void 0 : (_param$data13$eSign$s = _param$data13$eSign.signature) === null || _param$data13$eSign$s === void 0 ? void 0 : _param$data13$eSign$s.height) || pdfConfig.headerTextSize) > pageHeight || currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT && doc.getNumberOfPages() > 1) {
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
          numPages = doc.getNumberOfPages(); // Add Page Number at bottom
          // Iterates through each page and adds the page number at bottom
          for (i = 1; i <= numPages; i++) {
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            doc.setTextColor(colorGray);
            if (param.pageEnable) {
              doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
            }
            doc.setPage(i);
            doc.text(param.pageLabel + " " + i + " / " + numPages, docWidth - pdfConfig.headerTextSize, doc.internal.pageSize.height - 6);
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
          if (param.isPdfForDsc) {
            returnObj.digitalSign = {
              signaturePageNumber: signaturePageNumber,
              signatureLineHeight: signatureLineHeight
            };
          }
          return _context.abrupt("return", returnObj);
        case 152:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMiRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkcm93IiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkcm93IiwiX3Byb3BzJGRhdGEzNyIsIl9wcm9wcyRkYXRhMzckcm93IiwiX3Byb3BzJGRhdGEzNyRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkcm93IiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkcm93IiwiX3Byb3BzJGRhdGE0MCIsIl9wcm9wcyRkYXRhNDAkcm93IiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkcm93IiwiX3Byb3BzJGRhdGE0MSRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHRvdGFsIiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDgkdG90YWwiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSR0b3RhbCIsIl9wcm9wcyRkYXRhNTAiLCJfcHJvcHMkZGF0YTUwJHRvdGFsIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTEkdG90YWwiLCJfcHJvcHMkZGF0YTUyIiwiX3Byb3BzJGRhdGE1MiR0b3RhbCIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJHRvdGFsIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkdG90YWwiLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRyb3ciLCJfcHJvcHMkZGF0YTU1JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRhbW91bnREIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1OSRhbW91bnREMiIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MyIsIl9wcm9wcyRkYXRhNjMkZVNpZ24iLCJfcHJvcHMkZGF0YTY0IiwiX3Byb3BzJGRhdGE2NCRlU2lnbiIsIl9wcm9wcyRkYXRhNjUiLCJfcHJvcHMkZGF0YTY1JGVTaWduIiwiX3Byb3BzJGRhdGE2NiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24iLCJfcHJvcHMkZGF0YTY2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjgiLCJfcHJvcHMkZGF0YTY4JGVTaWduIiwiX3Byb3BzJGRhdGE2OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OSIsIl9wcm9wcyRkYXRhNjkkZVNpZ24iLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE3MCIsIl9wcm9wcyRkYXRhNzAkZVNpZ24iLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJpc0JyZWFrUGFnZSIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJERUZBVUxUX0NVUlJFTlRfSEVJR0hUIiwiRFNDX0hFSUdIVCIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX2FkZHJlc3NMaW5lIiwiX2FkZHJlc3NMaW5lMiIsIl9hZGRyZXNzTGluZTMiLCJjdXN0b21lck5hbWVIZWlnaHQiLCJjdXN0b21lck5hbWUiLCJsYWJlbEhlaWdodCIsImxhYmVsIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInBkZlRpdGxlIiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiZmluYWxSb3dDb3VudCIsInBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwiLCJpbnZvaWNlVG90YWxMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsIl9wYXJhbSRkYXRhJHRvdGFsMyIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJfdG9Db25zdW1hYmxlQXJyYXkyIiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2giLCJiYW5rIiwiYWNjb3VudCIsInNldFBhZ2UiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImRpZ2l0YWxTaWduIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBpc1BkZkZvckRzYz86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgcGRmU3ViVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgZHBwTmlsYWlMYWluTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW4/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw2OiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tEYXRlOiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tOdW1iZXI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIGhpZGVUb3RhbD86IGJvb2xlYW5cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3czPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgcGRmVGl0bGU6IHByb3BzLnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgaXNQZGZGb3JEc2M6IHByb3BzLmlzUGRmRm9yRHNjIHx8IGZhbHNlLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZHBwTmlsYWlMYWluTGFiZWw6IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbkxhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW46IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbiB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgICBoaWRlVG90YWw6IHByb3BzLmRhdGE/LnJvdzE/LmhpZGVUb3RhbCB8fCBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3czOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mz8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzM/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBkcHBOaWxhaUxhaW5Db252OiBwcm9wcy5kYXRhPy50b3RhbD8uZHBwTmlsYWlMYWluQ29udiB8fCBcIlwiLFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICAvLyB3ZSBjaGVjayBpZiB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIHBhZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBwYWdlIGhlaWdodC5cbiAgLy8gaWYgdHJ1ZSwgdGhlbiB3ZSBicmVhayB0aGUgY2hhbmdlLlxuICAvLyBDaGVja2luZyB3aXRoIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgYmVjYXVzZSBvZiBjdXJyZW50IHBhZ2UgbmVlZHMgdG8gaGF2ZSBzb21lIHNwYWNpbmcgYXQgdGhlIGJvdHRvbS5cbiAgY29uc3QgaXNCcmVha1BhZ2UgPSAoaGVpZ2h0LCBwYWdlSGVpZ2h0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChoZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG4gIGNvbnN0IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgPSAxMDtcbiAgY29uc3QgRFNDX0hFSUdIVCA9IDMwO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gIH1cblxuICBpZiAocGFyYW0ucGRmU3ViVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDU7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZTdWJUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICB9XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KFxuICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgY3VycmVudEhlaWdodCxcbiAgICBwYXJhbS5idXNpbmVzcy5uYW1lLFxuICAgIEFMSUdOX1JJR0hUXG4gICk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgLy8gY29tcGFueSBsb2dvXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgLy8gdGVuYW50IHRheCBudW1iZXJcbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyBwZGZDb25maWcuZmllbGRUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMS50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTMudGV4dCwgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgbGV0IGN1c3RvbWVyTmFtZUhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBjb25zdCBjdXN0b21lck5hbWUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Lm5hbWUsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgY3VzdG9tZXJOYW1lLnRleHQpO1xuICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IGN1c3RvbWVyTmFtZS5oZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgbGV0IGxhYmVsSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBjb25zdCBsYWJlbCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIChwYWdlV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBsYWJlbC50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgbGFiZWxIZWlnaHQgPSBsYWJlbC5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA+IGxhYmVsSGVpZ2h0ID8gY3VzdG9tZXJOYW1lSGVpZ2h0IDogbGFiZWxIZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuYWNrRGF0ZSAmJiBpbmRpYUlSUC5hY2tOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw1KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDUpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tEYXRlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw2KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDYpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tOdW1iZXJcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIElOVk9JQ0UgVElUTEUgLSBJTk1PQkkgY2hhbmdlXG4gIGlmIChwYXJhbS5kYXRhPy5wZGZUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGNvbnN0IHBkZlRpdGxlID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YT8ucGRmVGl0bGUsXG4gICAgICAocGFnZVdpZHRoICogMykgLyA0XG4gICAgKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwZGZUaXRsZS50ZXh0LCBBTElHTl9MRUZUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZlRpdGxlLmhlaWdodCAtIDQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9XG4gICAgKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBsZXQgbWF4VGV4dEhlaWdodEhlYWRlciA9IDA7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgY29uc3Qgcm93dGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9uc1tpbmRleF0ud2lkdGggLSAzXG4gICAgICApO1xuICAgICAgbWF4VGV4dEhlaWdodEhlYWRlciA9IE1hdGgubWF4KG1heFRleHRIZWlnaHRIZWFkZXIsIHJvd3RleHQuaGVpZ2h0KTtcbiAgICAgIGRvYy50ZXh0KHJvd3RleHQudGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4VGV4dEhlaWdodEhlYWRlciArIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7XG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHBhZ2UgbnVtYmVyIHRoZSBhYm92ZSBsaW5lIGlzIG9uXG4gIGNvbnN0IHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICBjb25zdCBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCAmJiBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbikge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbkxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4udG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgXG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBEcHAgTmlsYWkgTGFpbiBpZiB0aGUgdmFsdWUgZXhpc3RzXG4gICAgICAgIC4uLihwYXJhbS5kYXRhLnRvdGFsPy5kcHBOaWxhaUxhaW5Db252ID8gW1tcIkRwcCBOaWxhaSBMYWluXCIsIHBhcmFtLmRhdGEudG90YWwuZHBwTmlsYWlMYWluQ29udl1dIDogW10pLFxuICAgICAgICBcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLm5vdGUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIC8vIFdyaXRlIHRoZSBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIiBsYWJlbFxuXG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0ZXh0IGhlaWdodFxuICAgICAgY29uc3QgeyB0ZXh0LCBoZWlnaHQgfSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgaXRlbSxcbiAgICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgICApO1xuXG4gICAgICAvLyBDaGVjayBpZiBhZGRpbmcgdGhpcyBpdGVtIHdpbGwgZXhjZWVkIHRoZSBwYWdlIGhlaWdodFxuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBoZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7IC8vIFJlc2V0IHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSW5jcmVtZW50IGhlaWdodCBmb3IgdGhlIG5leHQgbGluZVxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgdGV4dFxuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHRleHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBoZWlnaHQ7IC8vIEluY3JlbWVudCB0aGUgY3VycmVudCBoZWlnaHRcbiAgICB9KTtcblxuICAgIC8vIEFkZCBzcGFjaW5nIGFmdGVyIHRoZSBzZWN0aW9uXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBsZXQgc2lnbmF0dXJlUGFnZU51bWJlcjtcbiAgbGV0IHNpZ25hdHVyZUxpbmVIZWlnaHQ7XG4gIGlmIChwYXJhbT8uaXNQZGZGb3JEc2MpIHtcbiAgICAvLyBQREYgaXMgZm9yIERpZ2l0YWwgU2lnbmF0dXJlXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgRFNDX0hFSUdIVCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gRFNDX0hFSUdIVDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgK1xuICAgICAgICAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBjb25zdCBudW1QYWdlcyA9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7XG5cbiAgLy8gQWRkIFBhZ2UgTnVtYmVyIGF0IGJvdHRvbVxuICAvLyBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcGFnZSBhbmQgYWRkcyB0aGUgcGFnZSBudW1iZXIgYXQgYm90dG9tXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVBhZ2VzOyBpKyspIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIH1cbiAgICBkb2Muc2V0UGFnZShpKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBudW1QYWdlcyxcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybk9iai5lc3RhbXAgPSB7XG4gICAgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCxcbiAgICBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0LFxuICB9O1xuXG4gIGlmIChwYXJhbS5pc1BkZkZvckRzYykge1xuICAgIHJldHVybk9iai5kaWdpdGFsU2lnbiA9IHtcbiAgICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIsXG4gICAgICBzaWduYXR1cmVMaW5lSGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBRixzQkFBQSxDQUFBSCxPQUFBO0FBQXFDLFNBQUFNLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVBQUFGLE1BQUEsQ0FBQUUsR0FBQSxTQUFBaEIsTUFBQSxDQUFBa0IseUJBQUEsR0FBQWxCLE1BQUEsQ0FBQW1CLGdCQUFBLENBQUFULE1BQUEsRUFBQVYsTUFBQSxDQUFBa0IseUJBQUEsQ0FBQUosTUFBQSxLQUFBbEIsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsR0FBQUMsT0FBQSxXQUFBQyxHQUFBLElBQUFoQixNQUFBLENBQUFvQixjQUFBLENBQUFWLE1BQUEsRUFBQU0sR0FBQSxFQUFBaEIsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUyxNQUFBLEVBQUFFLEdBQUEsaUJBQUFOLE1BQUE7QUFDckMsSUFBTVcsVUFBVSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLGFBQWEsRUFBRSxlQUFlO0VBQUU7RUFDaENDLE9BQU8sRUFBRSxTQUFTO0VBQUU7RUFDcEJDLGdCQUFnQixFQUFFLGtCQUFrQjtFQUFFO0VBQ3RDQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLFdBQVcsRUFBRSxhQUFhLENBQUU7QUFDOUIsQ0FBQztBQUFDQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEpBLFNBdUplUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGNBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUE7SUFBQSxJQUFBQyxLQUFBLEVBQUFDLHFCQUFBLEVBQUFDLE9BQUEsRUFBQUMsV0FBQSxFQUFBQyxHQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxZQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLFVBQUEsRUFBQUMsYUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxZQUFBLEVBQUFDLFdBQUEsRUFBQUMsS0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFFBQUEsRUFBQUMsWUFBQSxFQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUE2bkI5QkMsb0JBQW9CLEVBQUFDLHFCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxhQUFBLEVBQUFDLHlCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGVBQUEsRUFBQUMsT0FBQSxFQUFBQyxjQUFBLEVBQUFDLElBQUEsRUFBQUMsWUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsSUFBQSxFQUFBQyxJQUFBLEVBQUFDLE9BQUEsRUFBQUMsUUFBQSxFQUFBQyxlQUFBLEVBQUFDLGNBQUEsRUFBQUMsbUJBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsUUFBQSxFQUFBM1QsQ0FBQSxFQUFBNFQsU0FBQSxFQUFBQyxVQUFBO0lBQUEsT0FBQXZTLFlBQUEsWUFBQXdTLElBQUEsVUFBQUMsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBcEJyRCxvQkFBb0IsWUFBQXNELHNCQUFBLEVBQUc7WUFDOUIsSUFBSUMsU0FBUyxHQUFHLEVBQUU7WUFDbEIsSUFBTUMsTUFBTSxHQUFHLEVBQUU7WUFDakIsS0FBSyxJQUFJclUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK00sS0FBSyxDQUFDdUgsSUFBSSxDQUFDQyxNQUFNLENBQUNyVSxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO2NBQUEsSUFBQXdVLHFCQUFBLEVBQUFDLHNCQUFBO2NBQ2pESixNQUFNLENBQUN6VSxJQUFJLENBQUM7Z0JBQ1Y4VSxLQUFLLEVBQUVOLFNBQVM7Z0JBQ2hCTyxLQUFLLEVBQUUsQ0FBQUgscUJBQUEsR0FBQXpILEtBQUssQ0FBQ3VILElBQUksQ0FBQ00sV0FBVyxjQUFBSixxQkFBQSxlQUF0QkEscUJBQUEsQ0FBeUJ4VSxDQUFDLENBQUMsR0FDOUIsQ0FBQ29OLFNBQVMsR0FBR21CLFNBQVMsQ0FBQ3NHLGNBQWMsSUFBSTlILEtBQUssQ0FBQ3VILElBQUksQ0FBQ00sV0FBVyxDQUFDNVUsQ0FBQyxDQUFDLEdBQ2xFNFE7Y0FDTixDQUFDLENBQUM7Y0FDRndELFNBQVMsR0FDUEEsU0FBUyxJQUNSLENBQUFLLHNCQUFBLEdBQUExSCxLQUFLLENBQUN1SCxJQUFJLENBQUNNLFdBQVcsY0FBQUgsc0JBQUEsZUFBdEJBLHNCQUFBLENBQXlCelUsQ0FBQyxDQUFDLEdBQ3hCLENBQUNvTixTQUFTLEdBQUdtQixTQUFTLENBQUNzRyxjQUFjLElBQUk5SCxLQUFLLENBQUN1SCxJQUFJLENBQUNNLFdBQVcsQ0FBQzVVLENBQUMsQ0FBQyxHQUNsRTRRLE9BQU8sQ0FBQztZQUNoQjtZQUNBLE9BQU95RCxNQUFNO1VBQ2YsQ0FBQztVQTdvQkt0SCxLQUFLLEdBQUc7WUFDWitILFVBQVUsRUFBRXJULEtBQUssQ0FBQ3FULFVBQVUsSUFBSXBVLFVBQVUsQ0FBQ0MsSUFBSTtZQUMvQ29VLG9CQUFvQixFQUFFdFQsS0FBSyxDQUFDc1Qsb0JBQW9CLElBQUksS0FBSztZQUN6REMsUUFBUSxFQUFFdlQsS0FBSyxDQUFDdVQsUUFBUSxJQUFJLEVBQUU7WUFDOUJDLG9CQUFvQixFQUFFeFQsS0FBSyxDQUFDd1Qsb0JBQW9CLElBQUksS0FBSztZQUN6RHRFLFFBQVEsRUFBRWxQLEtBQUssQ0FBQ2tQLFFBQVEsSUFBSSxFQUFFO1lBQzlCdUUsV0FBVyxFQUFFelQsS0FBSyxDQUFDeVQsV0FBVyxJQUFJLEtBQUs7WUFDdkNDLFdBQVcsRUFBRTFULEtBQUssQ0FBQzBULFdBQVcsSUFBSSxFQUFFO1lBQ3BDQyxJQUFJLEVBQUU7Y0FDSkMsR0FBRyxFQUFFLEVBQUEzVCxXQUFBLEdBQUFELEtBQUssQ0FBQzJULElBQUksY0FBQTFULFdBQUEsdUJBQVZBLFdBQUEsQ0FBWTJULEdBQUcsS0FBSSxFQUFFO2NBQzFCVixLQUFLLEVBQUUsRUFBQWhULFlBQUEsR0FBQUYsS0FBSyxDQUFDMlQsSUFBSSxjQUFBelQsWUFBQSx1QkFBVkEsWUFBQSxDQUFZZ1QsS0FBSyxLQUFJLEVBQUU7Y0FDOUJXLE1BQU0sRUFBRSxFQUFBMVQsWUFBQSxHQUFBSCxLQUFLLENBQUMyVCxJQUFJLGNBQUF4VCxZQUFBLHVCQUFWQSxZQUFBLENBQVkwVCxNQUFNLEtBQUksRUFBRTtjQUNoQ0MsTUFBTSxFQUFFO2dCQUNOQyxHQUFHLEVBQUUsRUFBQTNULFlBQUEsR0FBQUosS0FBSyxDQUFDMlQsSUFBSSxjQUFBdlQsWUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsWUFBQSxDQUFZMFQsTUFBTSxjQUFBelQsbUJBQUEsdUJBQWxCQSxtQkFBQSxDQUFvQjBULEdBQUcsS0FBSSxDQUFDO2dCQUNqQ0MsSUFBSSxFQUFFLEVBQUExVCxZQUFBLEdBQUFOLEtBQUssQ0FBQzJULElBQUksY0FBQXJULFlBQUEsd0JBQUFDLG1CQUFBLEdBQVZELFlBQUEsQ0FBWXdULE1BQU0sY0FBQXZULG1CQUFBLHVCQUFsQkEsbUJBQUEsQ0FBb0J5VCxJQUFJLEtBQUk7Y0FDcEM7WUFDRixDQUFDO1lBQ0RDLFFBQVEsRUFBRTtjQUNSQyxJQUFJLEVBQUUsRUFBQTFULGVBQUEsR0FBQVIsS0FBSyxDQUFDaVUsUUFBUSxjQUFBelQsZUFBQSx1QkFBZEEsZUFBQSxDQUFnQjBULElBQUksS0FBSSxFQUFFO2NBQ2hDQyxPQUFPLEVBQUUsRUFBQTFULGdCQUFBLEdBQUFULEtBQUssQ0FBQ2lVLFFBQVEsY0FBQXhULGdCQUFBLHVCQUFkQSxnQkFBQSxDQUFnQjBULE9BQU8sS0FBSSxFQUFFO2NBQ3RDakgsWUFBWSxFQUFFLEVBQUF4TSxnQkFBQSxHQUFBVixLQUFLLENBQUNpVSxRQUFRLGNBQUF2VCxnQkFBQSx1QkFBZEEsZ0JBQUEsQ0FBZ0J3TSxZQUFZLEtBQUksRUFBRTtjQUNoREMsWUFBWSxFQUFFLEVBQUF4TSxnQkFBQSxHQUFBWCxLQUFLLENBQUNpVSxRQUFRLGNBQUF0VCxnQkFBQSx1QkFBZEEsZ0JBQUEsQ0FBZ0J3TSxZQUFZLEtBQUksRUFBRTtjQUNoRGlILE9BQU8sRUFBRSxFQUFBeFQsZ0JBQUEsR0FBQVosS0FBSyxDQUFDaVUsUUFBUSxjQUFBclQsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCd1QsT0FBTyxLQUFJLEVBQUU7Y0FDdENDLE9BQU8sRUFBRSxFQUFBeFQsZ0JBQUEsR0FBQWIsS0FBSyxDQUFDaVUsUUFBUSxjQUFBcFQsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCd1QsT0FBTyxLQUFJLEVBQUU7Y0FDdENDLFNBQVMsRUFBRSxFQUFBeFQsZ0JBQUEsR0FBQWQsS0FBSyxDQUFDaVUsUUFBUSxjQUFBblQsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCd1QsU0FBUyxLQUFJO1lBQzFDLENBQUM7WUFDREMsT0FBTyxFQUFFO2NBQ1A1RyxLQUFLLEVBQUUsRUFBQTVNLGNBQUEsR0FBQWYsS0FBSyxDQUFDdVUsT0FBTyxjQUFBeFQsY0FBQSx1QkFBYkEsY0FBQSxDQUFlNE0sS0FBSyxLQUFJLEVBQUU7Y0FDakN1RyxJQUFJLEVBQUUsRUFBQWxULGVBQUEsR0FBQWhCLEtBQUssQ0FBQ3VVLE9BQU8sY0FBQXZULGVBQUEsdUJBQWJBLGVBQUEsQ0FBZWtULElBQUksS0FBSSxFQUFFO2NBQy9CNUYsY0FBYyxFQUFFO2dCQUNkWCxLQUFLLEVBQUUsRUFBQTFNLGVBQUEsR0FBQWpCLEtBQUssQ0FBQ3VVLE9BQU8sY0FBQXRULGVBQUEsd0JBQUFDLHFCQUFBLEdBQWJELGVBQUEsQ0FBZXFOLGNBQWMsY0FBQXBOLHFCQUFBLHVCQUE3QkEscUJBQUEsQ0FBK0J5TSxLQUFLLEtBQUksRUFBRTtnQkFDakR3RyxPQUFPLEVBQUUsRUFBQWhULGVBQUEsR0FBQW5CLEtBQUssQ0FBQ3VVLE9BQU8sY0FBQXBULGVBQUEsd0JBQUFDLHFCQUFBLEdBQWJELGVBQUEsQ0FBZW1OLGNBQWMsY0FBQWxOLHFCQUFBLHVCQUE3QkEscUJBQUEsQ0FBK0IrUyxPQUFPLEtBQUksRUFBRTtnQkFDckRqSCxZQUFZLEVBQUUsRUFBQTdMLGVBQUEsR0FBQXJCLEtBQUssQ0FBQ3VVLE9BQU8sY0FBQWxULGVBQUEsd0JBQUFDLHFCQUFBLEdBQWJELGVBQUEsQ0FBZWlOLGNBQWMsY0FBQWhOLHFCQUFBLHVCQUE3QkEscUJBQUEsQ0FBK0I0TCxZQUFZLEtBQUksRUFBRTtnQkFDL0RDLFlBQVksRUFBRSxFQUFBNUwsZUFBQSxHQUFBdkIsS0FBSyxDQUFDdVUsT0FBTyxjQUFBaFQsZUFBQSx3QkFBQUMscUJBQUEsR0FBYkQsZUFBQSxDQUFlK00sY0FBYyxjQUFBOU0scUJBQUEsdUJBQTdCQSxxQkFBQSxDQUErQjJMLFlBQVksS0FBSSxFQUFFO2dCQUMvRGtILE9BQU8sRUFBRSxFQUFBNVMsZUFBQSxHQUFBekIsS0FBSyxDQUFDdVUsT0FBTyxjQUFBOVMsZUFBQSx3QkFBQUMscUJBQUEsR0FBYkQsZUFBQSxDQUFlNk0sY0FBYyxjQUFBNU0scUJBQUEsdUJBQTdCQSxxQkFBQSxDQUErQjJTLE9BQU8sS0FBSTtjQUNyRCxDQUFDO2NBQ0Q5RixlQUFlLEVBQUU7Z0JBQ2ZaLEtBQUssRUFBRSxFQUFBaE0sZUFBQSxHQUFBM0IsS0FBSyxDQUFDdVUsT0FBTyxjQUFBNVMsZUFBQSx3QkFBQUMscUJBQUEsR0FBYkQsZUFBQSxDQUFlNE0sZUFBZSxjQUFBM00scUJBQUEsdUJBQTlCQSxxQkFBQSxDQUFnQytMLEtBQUssS0FBSSxFQUFFO2dCQUNsRHdHLE9BQU8sRUFBRSxFQUFBdFMsZUFBQSxHQUFBN0IsS0FBSyxDQUFDdVUsT0FBTyxjQUFBMVMsZUFBQSx3QkFBQUMscUJBQUEsR0FBYkQsZUFBQSxDQUFlME0sZUFBZSxjQUFBek0scUJBQUEsdUJBQTlCQSxxQkFBQSxDQUFnQ3FTLE9BQU8sS0FBSSxFQUFFO2dCQUN0RGpILFlBQVksRUFBRSxFQUFBbkwsZ0JBQUEsR0FBQS9CLEtBQUssQ0FBQ3VVLE9BQU8sY0FBQXhTLGdCQUFBLHdCQUFBQyxxQkFBQSxHQUFiRCxnQkFBQSxDQUFld00sZUFBZSxjQUFBdk0scUJBQUEsdUJBQTlCQSxxQkFBQSxDQUFnQ2tMLFlBQVksS0FBSSxFQUFFO2dCQUNoRUMsWUFBWSxFQUFFLEVBQUFsTCxnQkFBQSxHQUFBakMsS0FBSyxDQUFDdVUsT0FBTyxjQUFBdFMsZ0JBQUEsd0JBQUFDLHFCQUFBLEdBQWJELGdCQUFBLENBQWVzTSxlQUFlLGNBQUFyTSxxQkFBQSx1QkFBOUJBLHFCQUFBLENBQWdDaUwsWUFBWSxLQUFJLEVBQUU7Z0JBQ2hFa0gsT0FBTyxFQUFFLEVBQUFsUyxnQkFBQSxHQUFBbkMsS0FBSyxDQUFDdVUsT0FBTyxjQUFBcFMsZ0JBQUEsd0JBQUFDLHFCQUFBLEdBQWJELGdCQUFBLENBQWVvTSxlQUFlLGNBQUFuTSxxQkFBQSx1QkFBOUJBLHFCQUFBLENBQWdDaVMsT0FBTyxLQUFJO2NBQ3RELENBQUM7Y0FDREMsU0FBUyxFQUFFLEVBQUFqUyxnQkFBQSxHQUFBckMsS0FBSyxDQUFDdVUsT0FBTyxjQUFBbFMsZ0JBQUEsdUJBQWJBLGdCQUFBLENBQWVpUyxTQUFTLEtBQUk7WUFDekMsQ0FBQztZQUNEekIsSUFBSSxFQUFBeFUsYUFBQSxDQUFBQSxhQUFBO2NBQ0ZzUCxLQUFLLEVBQUUsRUFBQXJMLFdBQUEsR0FBQXRDLEtBQUssQ0FBQzZTLElBQUksY0FBQXZRLFdBQUEsdUJBQVZBLFdBQUEsQ0FBWXFMLEtBQUssS0FBSSxFQUFFO2NBQzlCNkcsYUFBYSxFQUFFLEVBQUFqUyxZQUFBLEdBQUF2QyxLQUFLLENBQUM2UyxJQUFJLGNBQUF0USxZQUFBLHVCQUFWQSxZQUFBLENBQVlpUyxhQUFhLEtBQUksRUFBRTtjQUM5Q0MsaUJBQWlCLEVBQUUsRUFBQWpTLFlBQUEsR0FBQXhDLEtBQUssQ0FBQzZTLElBQUksY0FBQXJRLFlBQUEsdUJBQVZBLFlBQUEsQ0FBWWlTLGlCQUFpQixLQUFJLEVBQUU7Y0FDdERDLFlBQVksRUFBRSxFQUFBalMsWUFBQSxHQUFBekMsS0FBSyxDQUFDNlMsSUFBSSxjQUFBcFEsWUFBQSx1QkFBVkEsWUFBQSxDQUFZaVMsWUFBWSxLQUFJLEVBQUU7Y0FDNUNDLFVBQVUsRUFBRSxFQUFBalMsWUFBQSxHQUFBMUMsS0FBSyxDQUFDNlMsSUFBSSxjQUFBblEsWUFBQSx1QkFBVkEsWUFBQSxDQUFZaVMsVUFBVSxLQUFJLEVBQUU7Y0FDeENDLEdBQUcsRUFBRSxFQUFBalMsWUFBQSxHQUFBM0MsS0FBSyxDQUFDNlMsSUFBSSxjQUFBbFEsWUFBQSx1QkFBVkEsWUFBQSxDQUFZaVMsR0FBRyxLQUFJLEVBQUU7Y0FDMUJDLFVBQVUsRUFBRSxFQUFBalMsWUFBQSxHQUFBNUMsS0FBSyxDQUFDNlMsSUFBSSxjQUFBalEsWUFBQSx1QkFBVkEsWUFBQSxDQUFZaVMsVUFBVSxLQUFJLEVBQUU7Y0FDeENDLFlBQVksRUFBRSxFQUFBalMsWUFBQSxHQUFBN0MsS0FBSyxDQUFDNlMsSUFBSSxjQUFBaFEsWUFBQSx1QkFBVkEsWUFBQSxDQUFZaVMsWUFBWSxLQUFJLEVBQUU7Y0FDNUNDLEtBQUssRUFBRSxFQUFBalMsWUFBQSxHQUFBOUMsS0FBSyxDQUFDNlMsSUFBSSxjQUFBL1AsWUFBQSx1QkFBVkEsWUFBQSxDQUFZaVMsS0FBSyxLQUFJLEVBQUU7Y0FDOUJDLEtBQUssRUFBRSxFQUFBalMsYUFBQSxHQUFBL0MsS0FBSyxDQUFDNlMsSUFBSSxjQUFBOVAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZaVMsS0FBSyxLQUFJLEVBQUU7Y0FDOUJDLE9BQU8sRUFBRSxFQUFBalMsYUFBQSxHQUFBaEQsS0FBSyxDQUFDNlMsSUFBSSxjQUFBN1AsYUFBQSx1QkFBVkEsYUFBQSxDQUFZaVMsT0FBTyxLQUFJLEVBQUU7Y0FDbENDLFlBQVksRUFBRSxFQUFBalMsYUFBQSxHQUFBakQsS0FBSyxDQUFDNlMsSUFBSSxjQUFBNVAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZaVMsWUFBWSxLQUFJLEtBQUs7Y0FDL0NDLGVBQWUsRUFBRSxFQUFBalMsYUFBQSxHQUFBbEQsS0FBSyxDQUFDNlMsSUFBSSxjQUFBM1AsYUFBQSx1QkFBVkEsYUFBQSxDQUFZaVMsZUFBZSxLQUFJLEtBQUs7Y0FDckRyQyxNQUFNLEVBQUUsRUFBQTNQLGFBQUEsR0FBQW5ELEtBQUssQ0FBQzZTLElBQUksY0FBQTFQLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTJQLE1BQU0sS0FBSSxFQUFFO2NBQ2hDSyxXQUFXLEVBQUUsRUFBQS9QLGFBQUEsR0FBQXBELEtBQUssQ0FBQzZTLElBQUksY0FBQXpQLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWStQLFdBQVcsS0FBSSxFQUFFO2NBQzFDaUMsS0FBSyxFQUFFLEVBQUEvUixhQUFBLEdBQUFyRCxLQUFLLENBQUM2UyxJQUFJLGNBQUF4UCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixLQUFLLEtBQUksRUFBRTtjQUM5QkMsUUFBUSxFQUFFLEVBQUEvUixhQUFBLEdBQUF0RCxLQUFLLENBQUM2UyxJQUFJLGNBQUF2UCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixRQUFRLEtBQUksRUFBRTtjQUNwQ0MsUUFBUSxFQUFFLEVBQUEvUixhQUFBLEdBQUF2RCxLQUFLLENBQUM2UyxJQUFJLGNBQUF0UCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixRQUFRLEtBQUksRUFBRTtjQUNwQ0MsU0FBUyxFQUFFLEVBQUEvUixhQUFBLEdBQUF4RCxLQUFLLENBQUM2UyxJQUFJLGNBQUFyUCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixTQUFTLEtBQUksRUFBRTtjQUN0Q0MsV0FBVyxFQUFFLEVBQUEvUixhQUFBLEdBQUF6RCxLQUFLLENBQUM2UyxJQUFJLGNBQUFwUCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixXQUFXLEtBQUksRUFBRTtjQUMxQ0MsWUFBWSxFQUFFLEVBQUEvUixhQUFBLEdBQUExRCxLQUFLLENBQUM2UyxJQUFJLGNBQUFuUCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixZQUFZLEtBQUksRUFBRTtjQUM1Q0MsWUFBWSxFQUFFLEVBQUEvUixhQUFBLEdBQUEzRCxLQUFLLENBQUM2UyxJQUFJLGNBQUFsUCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixZQUFZLEtBQUksRUFBRTtjQUM1Q0MsUUFBUSxHQUFBL1IsYUFBQSxHQUFFNUQsS0FBSyxDQUFDNlMsSUFBSSxjQUFBalAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZK1IsUUFBUTtjQUM5QkMsSUFBSSxFQUFFLEVBQUEvUixhQUFBLEdBQUE3RCxLQUFLLENBQUM2UyxJQUFJLGNBQUFoUCxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixJQUFJLEtBQUksRUFBRTtjQUM1QkMsZUFBZSxFQUFFLEVBQUEvUixhQUFBLEdBQUE5RCxLQUFLLENBQUM2UyxJQUFJLGNBQUEvTyxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixlQUFlLEtBQUksRUFBRTtjQUNsREMsSUFBSSxFQUFFLEVBQUEvUixhQUFBLEdBQUEvRCxLQUFLLENBQUM2UyxJQUFJLGNBQUE5TyxhQUFBLHVCQUFWQSxhQUFBLENBQVkrUixJQUFJLEtBQUksRUFBRTtjQUM1QjVHLFFBQVEsRUFBRSxFQUFBbEwsYUFBQSxHQUFBaEUsS0FBSyxDQUFDNlMsSUFBSSxjQUFBN08sYUFBQSx1QkFBVkEsYUFBQSxDQUFZa0wsUUFBUSxLQUFJLEVBQUU7Y0FDcEM2RyxJQUFJLEVBQUU7Z0JBQ0pDLElBQUksRUFBRSxFQUFBL1IsYUFBQSxHQUFBakUsS0FBSyxDQUFDNlMsSUFBSSxjQUFBNU8sYUFBQSx3QkFBQUMsaUJBQUEsR0FBVkQsYUFBQSxDQUFZOFIsSUFBSSxjQUFBN1IsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQjhSLElBQUksS0FBSSxFQUFFO2dCQUNsQ0MsSUFBSSxFQUFFLEVBQUE5UixhQUFBLEdBQUFuRSxLQUFLLENBQUM2UyxJQUFJLGNBQUExTyxhQUFBLHdCQUFBQyxpQkFBQSxHQUFWRCxhQUFBLENBQVk0UixJQUFJLGNBQUEzUixpQkFBQSx1QkFBaEJBLGlCQUFBLENBQWtCNlIsSUFBSSxLQUFJLEVBQUU7Z0JBQ2xDQyxJQUFJLEVBQUUsRUFBQTdSLGFBQUEsR0FBQXJFLEtBQUssQ0FBQzZTLElBQUksY0FBQXhPLGFBQUEsd0JBQUFDLGlCQUFBLEdBQVZELGFBQUEsQ0FBWTBSLElBQUksY0FBQXpSLGlCQUFBLHVCQUFoQkEsaUJBQUEsQ0FBa0I0UixJQUFJLEtBQUksRUFBRTtnQkFDbENDLElBQUksRUFBRSxFQUFBNVIsYUFBQSxHQUFBdkUsS0FBSyxDQUFDNlMsSUFBSSxjQUFBdE8sYUFBQSx3QkFBQUMsaUJBQUEsR0FBVkQsYUFBQSxDQUFZd1IsSUFBSSxjQUFBdlIsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQjJSLElBQUksS0FBSSxFQUFFO2dCQUNsQ0MsS0FBSyxFQUFFO2tCQUNMQyxRQUFRLEVBQUUsRUFBQTVSLGFBQUEsR0FBQXpFLEtBQUssQ0FBQzZTLElBQUksY0FBQXBPLGFBQUEsd0JBQUFDLGlCQUFBLEdBQVZELGFBQUEsQ0FBWXNSLElBQUksY0FBQXJSLGlCQUFBLHdCQUFBQyxxQkFBQSxHQUFoQkQsaUJBQUEsQ0FBa0IwUixLQUFLLGNBQUF6UixxQkFBQSx1QkFBdkJBLHFCQUFBLENBQXlCMFIsUUFBUSxLQUFJO2dCQUNqRCxDQUFDO2dCQUNEQyxTQUFTLEVBQUUsRUFBQTFSLGFBQUEsR0FBQTVFLEtBQUssQ0FBQzZTLElBQUksY0FBQWpPLGFBQUEsd0JBQUFDLGlCQUFBLEdBQVZELGFBQUEsQ0FBWW1SLElBQUksY0FBQWxSLGlCQUFBLHVCQUFoQkEsaUJBQUEsQ0FBa0J5UixTQUFTLEtBQUk7Y0FDNUMsQ0FBQztjQUNEQyxJQUFJLEVBQUU7Z0JBQ0pQLElBQUksRUFBRSxFQUFBbFIsYUFBQSxHQUFBOUUsS0FBSyxDQUFDNlMsSUFBSSxjQUFBL04sYUFBQSx3QkFBQUMsaUJBQUEsR0FBVkQsYUFBQSxDQUFZeVIsSUFBSSxjQUFBeFIsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQmlSLElBQUksS0FBSSxFQUFFO2dCQUNsQ0MsSUFBSSxFQUFFLEVBQUFqUixhQUFBLEdBQUFoRixLQUFLLENBQUM2UyxJQUFJLGNBQUE3TixhQUFBLHdCQUFBQyxpQkFBQSxHQUFWRCxhQUFBLENBQVl1UixJQUFJLGNBQUF0UixpQkFBQSx1QkFBaEJBLGlCQUFBLENBQWtCZ1IsSUFBSSxLQUFJLEVBQUU7Z0JBQ2xDQyxJQUFJLEVBQUUsRUFBQWhSLGFBQUEsR0FBQWxGLEtBQUssQ0FBQzZTLElBQUksY0FBQTNOLGFBQUEsd0JBQUFDLGlCQUFBLEdBQVZELGFBQUEsQ0FBWXFSLElBQUksY0FBQXBSLGlCQUFBLHVCQUFoQkEsaUJBQUEsQ0FBa0IrUSxJQUFJLEtBQUksRUFBRTtnQkFDbENFLEtBQUssRUFBRTtrQkFDTEMsUUFBUSxFQUFFLEVBQUFqUixhQUFBLEdBQUFwRixLQUFLLENBQUM2UyxJQUFJLGNBQUF6TixhQUFBLHdCQUFBQyxpQkFBQSxHQUFWRCxhQUFBLENBQVltUixJQUFJLGNBQUFsUixpQkFBQSx3QkFBQUMscUJBQUEsR0FBaEJELGlCQUFBLENBQWtCK1EsS0FBSyxjQUFBOVEscUJBQUEsdUJBQXZCQSxxQkFBQSxDQUF5QitRLFFBQVEsS0FBSTtnQkFDakQ7Y0FDRixDQUFDO2NBQ0RHLElBQUksRUFBRTtnQkFDSlIsSUFBSSxFQUFFLEVBQUF6USxhQUFBLEdBQUF2RixLQUFLLENBQUM2UyxJQUFJLGNBQUF0TixhQUFBLHdCQUFBQyxpQkFBQSxHQUFWRCxhQUFBLENBQVlpUixJQUFJLGNBQUFoUixpQkFBQSx1QkFBaEJBLGlCQUFBLENBQWtCd1EsSUFBSSxLQUFJLEVBQUU7Z0JBQ2xDQyxJQUFJLEVBQUUsRUFBQXhRLGFBQUEsR0FBQXpGLEtBQUssQ0FBQzZTLElBQUksY0FBQXBOLGFBQUEsd0JBQUFDLGlCQUFBLEdBQVZELGFBQUEsQ0FBWStRLElBQUksY0FBQTlRLGlCQUFBLHVCQUFoQkEsaUJBQUEsQ0FBa0J1USxJQUFJLEtBQUksRUFBRTtnQkFDbENDLElBQUksRUFBRSxFQUFBdlEsYUFBQSxHQUFBM0YsS0FBSyxDQUFDNlMsSUFBSSxjQUFBbE4sYUFBQSx3QkFBQUMsaUJBQUEsR0FBVkQsYUFBQSxDQUFZNlEsSUFBSSxjQUFBNVEsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQnNRLElBQUksS0FBSSxFQUFFO2dCQUNsQ0UsS0FBSyxFQUFFO2tCQUNMQyxRQUFRLEVBQUUsRUFBQXhRLGFBQUEsR0FBQTdGLEtBQUssQ0FBQzZTLElBQUksY0FBQWhOLGFBQUEsd0JBQUFDLGlCQUFBLEdBQVZELGFBQUEsQ0FBWTJRLElBQUksY0FBQTFRLGlCQUFBLHdCQUFBQyxxQkFBQSxHQUFoQkQsaUJBQUEsQ0FBa0JzUSxLQUFLLGNBQUFyUSxxQkFBQSx1QkFBdkJBLHFCQUFBLENBQXlCc1EsUUFBUSxLQUFJO2dCQUNqRDtjQUNGLENBQUM7Y0FDREksS0FBSyxFQUFFO2dCQUNMVCxJQUFJLEVBQUUsRUFBQWhRLGFBQUEsR0FBQWhHLEtBQUssQ0FBQzZTLElBQUksY0FBQTdNLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWXlRLEtBQUssY0FBQXhRLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUIrUCxJQUFJLEtBQUksRUFBRTtnQkFBRTtnQkFDckNDLElBQUksRUFBRSxFQUFBL1AsYUFBQSxHQUFBbEcsS0FBSyxDQUFDNlMsSUFBSSxjQUFBM00sYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZdVEsS0FBSyxjQUFBdFEsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQjhQLElBQUksS0FBSSxFQUFFO2dCQUFFO2dCQUNyQ0MsSUFBSSxFQUFFLEVBQUE5UCxhQUFBLEdBQUFwRyxLQUFLLENBQUM2UyxJQUFJLGNBQUF6TSxhQUFBLHdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVlxUSxLQUFLLGNBQUFwUSxtQkFBQSx1QkFBakJBLG1CQUFBLENBQW1CNlAsSUFBSSxLQUFJLEVBQUU7Z0JBQUU7Z0JBQ3JDQyxJQUFJLEVBQUUsRUFBQTdQLGFBQUEsR0FBQXRHLEtBQUssQ0FBQzZTLElBQUksY0FBQXZNLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWW1RLEtBQUssY0FBQWxRLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUI0UCxJQUFJLEtBQUksRUFBRTtnQkFBRTtnQkFDckNPLElBQUksRUFBRSxFQUFBbFEsYUFBQSxHQUFBeEcsS0FBSyxDQUFDNlMsSUFBSSxjQUFBck0sYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZaVEsS0FBSyxjQUFBaFEsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQmlRLElBQUksS0FBSSxFQUFFO2dCQUFFO2dCQUNyQ0MsU0FBUyxFQUFFLEVBQUFqUSxhQUFBLEdBQUExRyxLQUFLLENBQUM2UyxJQUFJLGNBQUFuTSxhQUFBLHdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVkrUCxLQUFLLGNBQUE5UCxtQkFBQSx1QkFBakJBLG1CQUFBLENBQW1CZ1EsU0FBUyxLQUFJLEVBQUU7Z0JBQUU7Z0JBQy9DQyxZQUFZLEVBQUUsRUFBQWhRLGFBQUEsR0FBQTVHLEtBQUssQ0FBQzZTLElBQUksY0FBQWpNLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWTZQLEtBQUssY0FBQTVQLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUIrUCxZQUFZLEtBQUksRUFBRTtnQkFBRTtnQkFDckRDLGdCQUFnQixFQUFFLEVBQUEvUCxhQUFBLEdBQUE5RyxLQUFLLENBQUM2UyxJQUFJLGNBQUEvTCxhQUFBLHdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVkyUCxLQUFLLGNBQUExUCxtQkFBQSx1QkFBakJBLG1CQUFBLENBQW1COFAsZ0JBQWdCLEtBQUksRUFBRTtnQkFDM0RDLHFCQUFxQixHQUFBOVAsYUFBQSxHQUFFaEgsS0FBSyxDQUFDNlMsSUFBSSxjQUFBN0wsYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZeVAsS0FBSyxjQUFBeFAsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQjZQLHFCQUFxQjtnQkFDL0RDLGNBQWMsRUFBRSxFQUFBN1AsYUFBQSxHQUFBbEgsS0FBSyxDQUFDNlMsSUFBSSxjQUFBM0wsYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZdVAsS0FBSyxjQUFBdFAsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQjRQLGNBQWMsS0FBSSxFQUFFO2dCQUN2REMsa0JBQWtCLEVBQUUsRUFBQTVQLGFBQUEsR0FBQXBILEtBQUssQ0FBQzZTLElBQUksY0FBQXpMLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWXFQLEtBQUssY0FBQXBQLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUIyUCxrQkFBa0IsS0FBSSxFQUFFO2dCQUMvREMsZUFBZSxFQUFFLEVBQUEzUCxhQUFBLEdBQUF0SCxLQUFLLENBQUM2UyxJQUFJLGNBQUF2TCxhQUFBLHdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVltUCxLQUFLLGNBQUFsUCxtQkFBQSx1QkFBakJBLG1CQUFBLENBQW1CMFAsZUFBZSxLQUFJLEVBQUU7Z0JBQUU7Z0JBQzNEQyxRQUFRLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXhILEtBQUssQ0FBQzZTLElBQUksY0FBQXJMLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWWlQLEtBQUssY0FBQWhQLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUJ5UCxRQUFRLEtBQUksRUFBRTtnQkFBRTtnQkFDN0NkLEtBQUssRUFBRTtrQkFDTEMsUUFBUSxFQUFFLEVBQUEzTyxhQUFBLEdBQUExSCxLQUFLLENBQUM2UyxJQUFJLGNBQUFuTCxhQUFBLHdCQUFBQyxpQkFBQSxHQUFWRCxhQUFBLENBQVk2TyxJQUFJLGNBQUE1TyxpQkFBQSx3QkFBQUMscUJBQUEsR0FBaEJELGlCQUFBLENBQWtCeU8sS0FBSyxjQUFBeE8scUJBQUEsdUJBQXZCQSxxQkFBQSxDQUF5QnlPLFFBQVEsS0FBSTtnQkFDakQ7Y0FDRixDQUFDO2NBQ0RjLFNBQVMsRUFBRTtnQkFDVG5CLElBQUksRUFBRSxFQUFBbk8sYUFBQSxHQUFBN0gsS0FBSyxDQUFDNlMsSUFBSSxjQUFBaEwsYUFBQSx3QkFBQUMscUJBQUEsR0FBVkQsYUFBQSxDQUFZc1AsU0FBUyxjQUFBclAscUJBQUEsdUJBQXJCQSxxQkFBQSxDQUF1QmtPLElBQUksS0FBSSxFQUFFO2dCQUN2Q0MsSUFBSSxFQUFFLEVBQUFsTyxhQUFBLEdBQUEvSCxLQUFLLENBQUM2UyxJQUFJLGNBQUE5SyxhQUFBLHdCQUFBQyxxQkFBQSxHQUFWRCxhQUFBLENBQVlvUCxTQUFTLGNBQUFuUCxxQkFBQSx1QkFBckJBLHFCQUFBLENBQXVCaU8sSUFBSSxLQUFJLEVBQUU7Z0JBQ3ZDQyxJQUFJLEVBQUUsRUFBQWpPLGFBQUEsR0FBQWpJLEtBQUssQ0FBQzZTLElBQUksY0FBQTVLLGFBQUEsd0JBQUFDLHFCQUFBLEdBQVZELGFBQUEsQ0FBWWtQLFNBQVMsY0FBQWpQLHFCQUFBLHVCQUFyQkEscUJBQUEsQ0FBdUJnTyxJQUFJLEtBQUksRUFBRTtnQkFDdkNFLEtBQUssRUFBRTtrQkFDTEMsUUFBUSxFQUFFLEVBQUFsTyxhQUFBLEdBQUFuSSxLQUFLLENBQUM2UyxJQUFJLGNBQUExSyxhQUFBLHdCQUFBQyxxQkFBQSxHQUFWRCxhQUFBLENBQVlnUCxTQUFTLGNBQUEvTyxxQkFBQSx3QkFBQUMsc0JBQUEsR0FBckJELHFCQUFBLENBQXVCZ08sS0FBSyxjQUFBL04sc0JBQUEsdUJBQTVCQSxzQkFBQSxDQUE4QmdPLFFBQVEsS0FBSTtnQkFDdEQ7Y0FDRixDQUFDO2NBQ0RlLFVBQVUsRUFBRSxFQUFBOU8sYUFBQSxHQUFBdEksS0FBSyxDQUFDNlMsSUFBSSxjQUFBdkssYUFBQSx1QkFBVkEsYUFBQSxDQUFZOE8sVUFBVSxLQUFJO1lBQUUsR0FDcEMsRUFBQTdPLGFBQUEsR0FBQXZJLEtBQUssQ0FBQzZTLElBQUksY0FBQXRLLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWXlHLFFBQVEsS0FBSTtjQUMxQkEsUUFBUSxFQUFFO2dCQUNScUksTUFBTSxFQUFFclgsS0FBSyxDQUFDNlMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDcUksTUFBTSxJQUFJLEVBQUU7Z0JBQ3hDQyxHQUFHLEVBQUV0WCxLQUFLLENBQUM2UyxJQUFJLENBQUM3RCxRQUFRLENBQUNzSSxHQUFHLElBQUksRUFBRTtnQkFDbENDLFVBQVUsRUFBRXZYLEtBQUssQ0FBQzZTLElBQUksQ0FBQzdELFFBQVEsQ0FBQ3VJLFVBQVUsSUFBSSxFQUFFO2dCQUNoREMsTUFBTSxFQUFFeFgsS0FBSyxDQUFDNlMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDd0ksTUFBTSxJQUFJLEVBQUU7Z0JBQ3hDQyxnQkFBZ0IsRUFBRXpYLEtBQUssQ0FBQzZTLElBQUksQ0FBQzdELFFBQVEsQ0FBQ3lJLGdCQUFnQixJQUFJLEVBQUU7Z0JBQzVEQyxNQUFNLEVBQUUxWCxLQUFLLENBQUM2UyxJQUFJLENBQUM3RCxRQUFRLENBQUMwSSxNQUFNLElBQUksRUFBRTtnQkFDeENDLE1BQU0sRUFBRTNYLEtBQUssQ0FBQzZTLElBQUksQ0FBQzdELFFBQVEsQ0FBQzJJLE1BQU0sSUFBSSxFQUFFO2dCQUN4Q0MsTUFBTSxFQUFFNVgsS0FBSyxDQUFDNlMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDNEksTUFBTSxJQUFJLEVBQUU7Z0JBQ3hDQyxNQUFNLEVBQUU3WCxLQUFLLENBQUM2UyxJQUFJLENBQUM3RCxRQUFRLENBQUM2SSxNQUFNLElBQUksRUFBRTtnQkFDeENDLE1BQU0sRUFBRTlYLEtBQUssQ0FBQzZTLElBQUksQ0FBQzdELFFBQVEsQ0FBQzhJLE1BQU0sSUFBSSxFQUFFO2dCQUN4Q0MsTUFBTSxFQUFFL1gsS0FBSyxDQUFDNlMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDK0ksTUFBTSxJQUFJLEVBQUU7Z0JBQ3hDQyxPQUFPLEdBQUF4UCxxQkFBQSxHQUFFeEksS0FBSyxDQUFDNlMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDZ0osT0FBTyxjQUFBeFAscUJBQUEsY0FBQUEscUJBQUEsR0FBSSxJQUFJO2dCQUM1Q3lQLFNBQVMsR0FBQXhQLHNCQUFBLEdBQUV6SSxLQUFLLENBQUM2UyxJQUFJLENBQUM3RCxRQUFRLENBQUNpSixTQUFTLGNBQUF4UCxzQkFBQSxjQUFBQSxzQkFBQSxHQUFJO2NBQzlDO1lBQ0YsQ0FBQztjQUNEeVAsS0FBSyxFQUFFO2dCQUNMQyxZQUFZLEVBQUUsRUFBQXpQLGFBQUEsR0FBQTFJLEtBQUssQ0FBQzZTLElBQUksY0FBQW5LLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWXdQLEtBQUssY0FBQXZQLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUJ3UCxZQUFZLEtBQUksRUFBRTtnQkFDbkRDLFVBQVUsRUFBRSxFQUFBeFAsYUFBQSxHQUFBNUksS0FBSyxDQUFDNlMsSUFBSSxjQUFBakssYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZc1AsS0FBSyxjQUFBclAsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQnVQLFVBQVUsS0FBSSxFQUFFO2dCQUMvQ0MsVUFBVSxFQUFFLEVBQUF2UCxhQUFBLEdBQUE5SSxLQUFLLENBQUM2UyxJQUFJLGNBQUEvSixhQUFBLHdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVlvUCxLQUFLLGNBQUFuUCxtQkFBQSx1QkFBakJBLG1CQUFBLENBQW1Cc1AsVUFBVSxLQUFJLEVBQUU7Z0JBQy9DQyxZQUFZLEVBQUUsRUFBQXRQLGFBQUEsR0FBQWhKLEtBQUssQ0FBQzZTLElBQUksY0FBQTdKLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWWtQLEtBQUssY0FBQWpQLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUJxUCxZQUFZLEtBQUksRUFBRTtnQkFDbkRDLFNBQVMsRUFBRTtrQkFDVDNFLEdBQUcsRUFBRSxFQUFBMUssYUFBQSxHQUFBbEosS0FBSyxDQUFDNlMsSUFBSSxjQUFBM0osYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZZ1AsS0FBSyxjQUFBL08sbUJBQUEsd0JBQUFDLHFCQUFBLEdBQWpCRCxtQkFBQSxDQUFtQm9QLFNBQVMsY0FBQW5QLHFCQUFBLHVCQUE1QkEscUJBQUEsQ0FBOEJ3SyxHQUFHLEtBQUksRUFBRTtrQkFDNUNWLEtBQUssRUFBRSxFQUFBN0osYUFBQSxHQUFBckosS0FBSyxDQUFDNlMsSUFBSSxjQUFBeEosYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZNk8sS0FBSyxjQUFBNU8sbUJBQUEsd0JBQUFDLHFCQUFBLEdBQWpCRCxtQkFBQSxDQUFtQmlQLFNBQVMsY0FBQWhQLHFCQUFBLHVCQUE1QkEscUJBQUEsQ0FBOEIySixLQUFLLEtBQUksRUFBRTtrQkFDaERXLE1BQU0sRUFBRSxFQUFBckssYUFBQSxHQUFBeEosS0FBSyxDQUFDNlMsSUFBSSxjQUFBckosYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZME8sS0FBSyxjQUFBek8sbUJBQUEsd0JBQUFDLHFCQUFBLEdBQWpCRCxtQkFBQSxDQUFtQjhPLFNBQVMsY0FBQTdPLHFCQUFBLHVCQUE1QkEscUJBQUEsQ0FBOEJtSyxNQUFNLEtBQUksRUFBRTtrQkFDbERDLE1BQU0sRUFBRTtvQkFDTkMsR0FBRyxFQUFFLEVBQUFwSyxhQUFBLEdBQUEzSixLQUFLLENBQUM2UyxJQUFJLGNBQUFsSixhQUFBLHdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVl1TyxLQUFLLGNBQUF0TyxtQkFBQSx3QkFBQUMscUJBQUEsR0FBakJELG1CQUFBLENBQW1CMk8sU0FBUyxjQUFBMU8scUJBQUEsd0JBQUFDLHNCQUFBLEdBQTVCRCxxQkFBQSxDQUE4QmlLLE1BQU0sY0FBQWhLLHNCQUFBLHVCQUFwQ0Esc0JBQUEsQ0FBc0NpSyxHQUFHLEtBQUksRUFBRTtvQkFDcERDLElBQUksRUFBRSxFQUFBakssYUFBQSxHQUFBL0osS0FBSyxDQUFDNlMsSUFBSSxjQUFBOUksYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZbU8sS0FBSyxjQUFBbE8sbUJBQUEsd0JBQUFDLHFCQUFBLEdBQWpCRCxtQkFBQSxDQUFtQnVPLFNBQVMsY0FBQXRPLHFCQUFBLHdCQUFBQyxzQkFBQSxHQUE1QkQscUJBQUEsQ0FBOEI2SixNQUFNLGNBQUE1SixzQkFBQSx1QkFBcENBLHNCQUFBLENBQXNDOEosSUFBSSxLQUFJO2tCQUN0RDtnQkFDRjtjQUNGO1lBQUMsRUFDRjtZQUNEd0UsTUFBTSxFQUFFO2NBQ05DLElBQUksRUFBRSxFQUFBdE8sYUFBQSxHQUFBbkssS0FBSyxDQUFDd1ksTUFBTSxjQUFBck8sYUFBQSx1QkFBWkEsYUFBQSxDQUFjc08sSUFBSSxLQUFJO1lBQzlCLENBQUM7WUFDREMsVUFBVSxFQUFFMVksS0FBSyxDQUFDMFksVUFBVSxJQUFJLElBQUk7WUFDcENDLFNBQVMsRUFBRTNZLEtBQUssQ0FBQzJZLFNBQVMsSUFBSTtVQUNoQyxDQUFDO1VBRUtwTixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFJa04sSUFBSSxFQUFFRyxJQUFJLEVBQUs7WUFDNUMsSUFBTUMsS0FBSyxHQUFHbk4sR0FBRyxDQUFDb04sZUFBZSxDQUFDTCxJQUFJLEVBQUVHLElBQUksQ0FBQztZQUM3QyxPQUFPO2NBQ0xILElBQUksRUFBRUksS0FBSztjQUNYaEYsTUFBTSxFQUFFbkksR0FBRyxDQUFDcU4saUJBQWlCLENBQUNGLEtBQUssQ0FBQyxDQUFDRztZQUN2QyxDQUFDO1VBQ0gsQ0FBQztVQUFBLE1BQ0cxTixLQUFLLENBQUN1SCxJQUFJLENBQUN1QyxLQUFLLElBQUk5SixLQUFLLENBQUN1SCxJQUFJLENBQUN1QyxLQUFLLENBQUMzVyxNQUFNO1lBQUE4VCxRQUFBLENBQUFFLElBQUE7WUFBQTtVQUFBO1VBQUEsTUFDekNuSCxLQUFLLENBQUN1SCxJQUFJLENBQUN1QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMzVyxNQUFNLElBQUk2TSxLQUFLLENBQUN1SCxJQUFJLENBQUNDLE1BQU0sQ0FBQ3JVLE1BQU07WUFBQThULFFBQUEsQ0FBQUUsSUFBQTtZQUFBO1VBQUE7VUFBQSxNQUNsRHdHLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztRQUFBO1VBRzdEek4sT0FBTyxHQUFHO1lBQ2QwTixXQUFXLEVBQUU1TixLQUFLLENBQUNrSSxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUMxRDJGLFdBQVcsRUFBRTtVQUNmLENBQUMsRUFFRDtVQUNBO1VBQ0E7VUFDTTFOLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJb0ksTUFBTSxFQUFFakksVUFBVSxFQUFLO1lBQzFDLE9BQ0VpSSxNQUFNLEdBQUdqSSxVQUFVLElBQ2xCaUksTUFBTSxHQUFHakksVUFBVSxHQUFHZSxzQkFBc0IsSUFDM0NqQixHQUFHLENBQUMwTixnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBRTtVQUVqQyxDQUFDO1VBRUsxTixHQUFHLEdBQUcsSUFBSTJOLFlBQUssQ0FBQzdOLE9BQU8sQ0FBQztVQUN4QkcsU0FBUyxHQUFHRCxHQUFHLENBQUM0TixZQUFZLENBQUMsQ0FBQztVQUM5QjFOLFVBQVUsR0FBR0YsR0FBRyxDQUFDNk4sYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7VUFDdkMxTixRQUFRLEdBQUdILEdBQUcsQ0FBQzhOLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDdkcsS0FBSztVQUN0Q3BILFNBQVMsR0FBR0osR0FBRyxDQUFDOE4sUUFBUSxDQUFDQyxRQUFRLENBQUM1RixNQUFNO1VBRXhDOUgsVUFBVSxHQUFHLFNBQVM7VUFDdEJDLFNBQVMsR0FBRyxTQUFTO1VBQ3JCQyxTQUFTLEdBQUcsU0FBUztVQUNyQkMsU0FBUyxHQUFHLFNBQVM7VUFDckJDLGdCQUFnQixHQUFHLFFBQVE7VUFDM0JDLGNBQWMsR0FBRyxNQUFNO1VBQ3ZCQyxXQUFXLEdBQUcsT0FBTztVQUNyQkMsVUFBVSxHQUFHLE1BQU07VUFDbkJDLFlBQVksR0FBRyxRQUFRO1VBQ3ZCQyxvQkFBb0IsR0FBRyxpQkFBaUI7VUFDeENDLGtCQUFrQixHQUFHLEtBQUs7VUFDMUJDLGdCQUFnQixHQUFHLFlBQVk7VUFDL0JDLHNCQUFzQixHQUFHLEVBQUU7VUFDM0JDLFVBQVUsR0FBRyxFQUFFLEVBRXJCO1VBQ0lDLGFBQWEsR0FBRyxFQUFFO1VBRWhCQyxTQUFTLEdBQUc7WUFDaEJzRyxjQUFjLEVBQUUsRUFBRTtZQUNsQnNHLGNBQWMsRUFBRSxFQUFFO1lBQ2xCQyxhQUFhLEVBQUUsRUFBRTtZQUNqQkMsYUFBYSxFQUFFLEVBQUU7WUFDakJDLGFBQWEsRUFBRSxDQUFDO1lBQ2hCQyxVQUFVLEVBQUUsQ0FBQztZQUNiQyxhQUFhLEVBQUU7VUFDakIsQ0FBQztVQUNEck8sR0FBRyxDQUFDc08sWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUFDLG1CQUFhLEVBQUMsQ0FBQyxDQUFDO1VBQ25Edk8sR0FBRyxDQUFDd08sT0FBTyxDQUFDLGdCQUFnQixFQUFFeE4sZ0JBQWdCLEVBQUVQLGdCQUFnQixDQUFDO1VBQ2pFVCxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsQ0FBQzs7VUFFN0I7VUFDQSxJQUFJcEIsS0FBSyxDQUFDNEQsUUFBUSxFQUFFO1lBQ2xCeEQsR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVOLGNBQWMsQ0FBQztZQUM3Q1MsYUFBYSxJQUFJLENBQUM7WUFDbEJuQixHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUM2TSxhQUFhLENBQUM7WUFDeENqTyxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsQ0FBQyxFQUFFZ0IsYUFBYSxFQUFFdkIsS0FBSyxDQUFDNEQsUUFBUSxFQUFFM0MsWUFBWSxDQUFDO1lBQ25FTSxhQUFhLElBQUlDLFNBQVMsQ0FBQzZNLGFBQWE7VUFDMUM7VUFFQSxJQUFJck8sS0FBSyxDQUFDb0ksV0FBVyxFQUFFO1lBQ3JCN0csYUFBYSxJQUFJLENBQUM7WUFDbEJuQixHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsQ0FBQyxFQUFFZ0IsYUFBYSxFQUFFdkIsS0FBSyxDQUFDb0ksV0FBVyxFQUFFbkgsWUFBWSxDQUFDO1lBQ3RFTSxhQUFhLElBQUlDLFNBQVMsQ0FBQzZNLGFBQWE7WUFDeENqTyxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRVAsZ0JBQWdCLENBQUM7VUFDakQ7VUFFQVQsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDc0csY0FBYyxDQUFDO1VBQ3pDMUgsR0FBRyxDQUFDMk8sWUFBWSxDQUFDdE8sVUFBVSxDQUFDO1VBQzVCTCxHQUFHLENBQUMrTSxJQUFJLENBQ041TSxRQUFRLEdBQUdpQixTQUFTLENBQUM4TSxhQUFhLEVBQ2xDL00sYUFBYSxFQUNidkIsS0FBSyxDQUFDMkksUUFBUSxDQUFDQyxJQUFJLEVBQ25CN0gsV0FDRixDQUFDO1VBQ0RYLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsQ0FBQzs7VUFFeEM7VUFDQSxJQUFJdE8sS0FBSyxDQUFDcUksSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDbEJsSSxHQUFHLENBQUM0TyxRQUFRLENBQ1ZoUCxLQUFLLENBQUNxSSxJQUFJLENBQUNDLEdBQUcsRUFDZG5ILGtCQUFrQixFQUNsQkssU0FBUyxDQUFDOE0sYUFBYSxHQUFHdE8sS0FBSyxDQUFDcUksSUFBSSxDQUFDRyxNQUFNLENBQUNFLElBQUksRUFDaERuSCxhQUFhLEdBQUcsQ0FBQyxHQUFHdkIsS0FBSyxDQUFDcUksSUFBSSxDQUFDRyxNQUFNLENBQUNDLEdBQUcsRUFDekN6SSxLQUFLLENBQUNxSSxJQUFJLENBQUNULEtBQUssRUFDaEI1SCxLQUFLLENBQUNxSSxJQUFJLENBQUNFLE1BQ2IsQ0FBQztVQUNIOztVQUVBO1VBQ0EsSUFBSXZJLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0ssU0FBUyxFQUFFO1lBQzVCekgsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhLEdBQUcsQ0FBQztZQUM1Q3JPLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzZNLGFBQWEsQ0FBQztZQUN4Q2pPLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3JPLFNBQVMsQ0FBQztZQUMzQk4sR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHaUIsU0FBUyxDQUFDOE0sYUFBYSxFQUNsQy9NLGFBQWEsRUFDYnZCLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0ssU0FBUyxFQUN4QmpJLFdBQ0YsQ0FBQztZQUNEUSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7VUFDMUM7VUFDQXJPLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3RPLFVBQVUsQ0FBQztVQUM1QjtVQUNBO1VBQ01nQixTQUFTLElBQUEzQyxXQUFBLEdBQUdrQixLQUFLLENBQUN1SCxJQUFJLGNBQUF6SSxXQUFBLHdCQUFBQyxvQkFBQSxHQUFWRCxXQUFBLENBQVk0RSxRQUFRLGNBQUEzRSxvQkFBQSx1QkFBcEJBLG9CQUFBLENBQXNCZ04sTUFBTTtVQUFBLEtBQzFDdEssU0FBUztZQUFBd0YsUUFBQSxDQUFBRSxJQUFBO1lBQUE7VUFBQTtVQUFBRixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUNMOEgsa0JBQU0sQ0FBQ0MsU0FBUyxDQUFDek4sU0FBUyxDQUFDLENBQzlCME4sSUFBSSxDQUFDLFVBQUNDLFdBQVcsRUFBSztZQUNyQixJQUFNQyxRQUFRLEdBQUdELFdBQVc7WUFFNUJoUCxHQUFHLENBQUM0TyxRQUFRLENBQ1ZLLFFBQVEsRUFDUmxPLGtCQUFrQixFQUNsQlosUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYixFQUFFLEVBQ0YsRUFDRixDQUFDO1lBQ0RBLGFBQWEsSUFBSUMsU0FBUyxDQUFDOE0sYUFBYTtVQUMxQyxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUNnQixHQUFHLEVBQUs7WUFDZEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztVQUNwQixDQUFDLENBQUM7UUFBQTtVQUVKLElBQUl0UCxLQUFLLGFBQUxBLEtBQUssZ0JBQUEwQixlQUFBLEdBQUwxQixLQUFLLENBQUUySSxRQUFRLGNBQUFqSCxlQUFBLGVBQWZBLGVBQUEsQ0FBaUJtSCxPQUFPLEVBQUU7WUFDNUJ6SSxHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUM4TSxhQUFhLENBQUM7WUFDeENsTyxHQUFHLENBQUMrTSxJQUFJLENBQUMzTCxTQUFTLENBQUM4TSxhQUFhLEVBQUUvTSxhQUFhLEVBQUVMLG9CQUFvQixDQUFDO1VBQ3hFO1VBQ0FLLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtVQUN4Q3JPLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsR0FBRyxDQUFDLENBQUM7VUFDdEMzTSxZQUFZLEdBQUcxQixxQkFBcUIsQ0FDeENELEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0UsT0FBTyxFQUNyQnRJLFFBQVEsR0FBRyxDQUFDLEdBQUlpQixTQUFTLENBQUM4TSxhQUM3QixDQUFDO1VBRURsTyxHQUFHLENBQUMrTSxJQUFJLENBQUMzTCxTQUFTLENBQUM4TSxhQUFhLEVBQUUvTSxhQUFhLEVBQUV2QixLQUFLLENBQUMySSxRQUFRLENBQUNFLE9BQU8sQ0FBQztVQUN4RXRILGFBQWEsSUFBSUksWUFBWSxDQUFDNEcsTUFBTSxHQUFHLENBQUM7VUFDbEMzRyxZQUFZLEdBQUczQixxQkFBcUIsQ0FDeENELEtBQUssQ0FBQzJJLFFBQVEsQ0FBQy9HLFlBQVksRUFDMUJyQixRQUFRLEdBQUcsQ0FBQyxHQUFJLEVBQ25CLENBQUM7VUFDREgsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRUssWUFBWSxDQUFDdUwsSUFBSSxDQUFDO1VBQzlDNUwsYUFBYSxJQUFJSyxZQUFZLENBQUMyRyxNQUFNLEdBQUcsQ0FBQztVQUV4QyxJQUFJdkksS0FBSyxDQUFDMkksUUFBUSxDQUFDOUcsWUFBWSxFQUFFO1lBQ3pCQSxZQUFZLEdBQUc1QixxQkFBcUIsQ0FDeENELEtBQUssQ0FBQzJJLFFBQVEsQ0FBQzlHLFlBQVksRUFDMUJ0QixRQUFRLEdBQUcsQ0FBQyxHQUFJLEVBQ25CLENBQUM7WUFDREgsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQzlHLFlBQVksQ0FBQztZQUN4RE4sYUFBYSxJQUFJTSxZQUFZLENBQUMwRyxNQUFNLEdBQUcsQ0FBQztVQUMxQztVQUVBbkksR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDO1VBRW5EeEgsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhO1VBQ3hDck8sR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO1VBQUM3QixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBRXBELElBQUluSCxLQUFLLGFBQUxBLEtBQUssZ0JBQUE4QixnQkFBQSxHQUFMOUIsS0FBSyxDQUFFMkksUUFBUSxjQUFBN0csZ0JBQUEsZUFBZkEsZ0JBQUEsQ0FBaUIrRyxPQUFPLEVBQUU7WUFDNUJ0SCxhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7WUFDckNwTyxHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUM4TSxhQUFhLENBQUM7WUFDeENsTyxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFTCxvQkFBb0IsRUFBRUgsV0FBVyxDQUFDO1VBQzNFO1VBQ0FYLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsR0FBRyxDQUFDLENBQUM7VUFDNUMvTSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7VUFDbEM5TSxZQUFZLEdBQUcxQixxQkFBcUIsQ0FDeENELEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0UsT0FBTyxFQUNyQnRJLFFBQVEsR0FBRyxDQUFDLEdBQUksRUFDbkIsQ0FBQztVQUNESCxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFSSxZQUFZLENBQUN3TCxJQUFJLEVBQUVwTSxXQUFXLENBQUM7VUFDdEVRLGFBQWEsSUFBSUksWUFBWSxDQUFDNEcsTUFBTSxHQUFHLENBQUM7VUFDbEMzRyxhQUFZLEdBQUczQixxQkFBcUIsQ0FDeENELEtBQUssQ0FBQzJJLFFBQVEsQ0FBQy9HLFlBQVksRUFDMUJyQixRQUFRLEdBQUcsQ0FBQyxHQUFJLEVBQ25CLENBQUM7VUFDREgsR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsRUFBRUssYUFBWSxDQUFDdUwsSUFBSSxFQUFFcE0sV0FBVyxDQUFDO1VBQ3RFUSxhQUFhLElBQUlLLGFBQVksQ0FBQzJHLE1BQU0sR0FBRyxDQUFDO1VBQ3hDLElBQUl2SSxLQUFLLENBQUMySSxRQUFRLENBQUM5RyxZQUFZLEVBQUU7WUFDekJBLGFBQVksR0FBRzVCLHFCQUFxQixDQUN4Q0QsS0FBSyxDQUFDMkksUUFBUSxDQUFDOUcsWUFBWSxFQUMxQnRCLFFBQVEsR0FBRyxDQUFDLEdBQUksRUFDbkIsQ0FBQztZQUNESCxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFTSxhQUFZLENBQUNzTCxJQUFJLEVBQUVwTSxXQUFXLENBQUM7WUFDdEVRLGFBQWEsSUFBSU0sYUFBWSxDQUFDMEcsTUFBTSxHQUFHLENBQUM7VUFDMUM7VUFFQW5JLEdBQUcsQ0FBQytNLElBQUksQ0FBQzVNLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLEVBQUV2QixLQUFLLENBQUMySSxRQUFRLENBQUNJLE9BQU8sRUFBRWhJLFdBQVcsQ0FBQztVQUUzRVEsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhO1VBQ3hDck8sR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsRUFBRXZCLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0csT0FBTyxFQUFFL0gsV0FBVyxDQUFDO1FBQUM7VUFHOUVYLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3BPLFNBQVMsQ0FBQzs7VUFFM0I7VUFDQSxJQUFJWCxLQUFLLENBQUN1SCxJQUFJLENBQUNDLE1BQU0sQ0FBQ3JVLE1BQU0sRUFBRTtZQUM1Qm9PLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUN4Q3JPLEdBQUcsQ0FBQ3FQLElBQUksQ0FBQyxFQUFFLEVBQUVsTyxhQUFhLEVBQUVoQixRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxDQUFDO1VBQzNEOztVQUVBO1VBQ0FuQixHQUFHLENBQUMyTyxZQUFZLENBQUNwTyxTQUFTLENBQUM7VUFDM0JQLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsQ0FBQztVQUN4Qy9NLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVSxHQUFHLENBQUM7VUFFekNwTyxHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUNzRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1VBQ3pDNUYsa0JBQWtCLEdBQUcsQ0FBQztVQUMxQixJQUFJbEMsS0FBSyxDQUFDaUosT0FBTyxDQUFDTCxJQUFJLEVBQUU7WUFDaEJ6RyxZQUFZLEdBQUdsQyxxQkFBcUIsQ0FDeENELEtBQUssQ0FBQ2lKLE9BQU8sQ0FBQ0wsSUFBSSxFQUNsQnZJLFNBQVMsR0FBRyxDQUNkLENBQUM7WUFDREQsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRVksWUFBWSxDQUFDZ0wsSUFBSSxDQUFDO1lBQzlDakwsa0JBQWtCLEdBQUdDLFlBQVksQ0FBQ29HLE1BQU07VUFDMUM7VUFFQW5JLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3RPLFVBQVUsQ0FBQztVQUM1QkwsR0FBRyxDQUFDMk8sWUFBWSxDQUFDbk8sU0FBUyxDQUFDO1VBQzNCUixHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUNzRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1VBQ3pDMUYsV0FBVyxHQUFHLENBQUM7VUFDbkIsSUFBSXBDLEtBQUssQ0FBQ3VILElBQUksQ0FBQ2xGLEtBQUssSUFBSXJDLEtBQUssQ0FBQ3VILElBQUksQ0FBQytCLEdBQUcsRUFBRTtZQUNoQ2pILEtBQUssR0FBR3BDLHFCQUFxQixDQUNqQ0QsS0FBSyxDQUFDdUgsSUFBSSxDQUFDbEYsS0FBSyxHQUFHckMsS0FBSyxDQUFDdUgsSUFBSSxDQUFDK0IsR0FBRyxFQUNoQ2pKLFNBQVMsR0FBRyxDQUFDLEdBQUksRUFDcEIsQ0FBQztZQUNERCxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFYyxLQUFLLENBQUM4SyxJQUFJLEVBQUVwTSxXQUFXLENBQUM7WUFDL0RxQixXQUFXLEdBQUdDLEtBQUssQ0FBQ2tHLE1BQU07VUFDNUI7VUFFQSxJQUFJdkksS0FBSyxDQUFDaUosT0FBTyxDQUFDTCxJQUFJLElBQUs1SSxLQUFLLENBQUN1SCxJQUFJLENBQUNsRixLQUFLLElBQUlyQyxLQUFLLENBQUN1SCxJQUFJLENBQUMrQixHQUFJLEVBQUU7WUFDOUQvSCxhQUFhLElBQ1hXLGtCQUFrQixHQUFHRSxXQUFXLEdBQUdGLGtCQUFrQixHQUFHRSxXQUFXO1VBQ3ZFO1VBRUFoQyxHQUFHLENBQUMyTyxZQUFZLENBQUNwTyxTQUFTLENBQUM7VUFDM0JQLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsQ0FBQztVQUV4Qy9NLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtVQUV4QyxJQUNFLENBQUF6UCxjQUFBLEdBQUFnQixLQUFLLENBQUNpSixPQUFPLGNBQUFqSyxjQUFBLGdCQUFBQyxxQkFBQSxHQUFiRCxjQUFBLENBQWVnRSxjQUFjLGNBQUEvRCxxQkFBQSxlQUE3QkEscUJBQUEsQ0FBK0JvRCxLQUFLLElBQ3BDckMsS0FBSyxDQUFDdUgsSUFBSSxDQUFDa0MsS0FBSyxJQUNoQnpKLEtBQUssQ0FBQ3VILElBQUksQ0FBQ21DLEtBQUssRUFDaEI7WUFDQXRKLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3RPLFVBQVUsQ0FBQztZQUN0QmlDLG1CQUFtQixJQUFBSixlQUFBLEdBQUd0QyxLQUFLLENBQUNpSixPQUFPLGNBQUEzRyxlQUFBLHVCQUFiQSxlQUFBLENBQWVVLGNBQWMsQ0FBQ1gsS0FBSztZQUN6RE0sb0JBQW9CLElBQUFKLGVBQUEsR0FBR3ZDLEtBQUssQ0FBQ2lKLE9BQU8sY0FBQTFHLGVBQUEsdUJBQWJBLGVBQUEsQ0FBZVUsZUFBZSxDQUFDWixLQUFLO1lBQ2pFakMsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRW1CLG1CQUFtQixDQUFDO1lBQ2hEdEMsR0FBRyxDQUFDK00sSUFBSSxDQUFDOU0sU0FBUyxHQUFHLENBQUMsRUFBRWtCLGFBQWEsRUFBRW9CLG9CQUFvQixDQUFDO1lBQzVEdkMsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDOE0sYUFBYSxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUE5TCxZQUFBLEdBQUF4QyxLQUFLLENBQUN1SCxJQUFJLGNBQUEvRSxZQUFBLGVBQVZBLFlBQUEsQ0FBWW1ILE9BQU8sS0FBQWxILFlBQUEsR0FBSXpDLEtBQUssQ0FBQ3VILElBQUksY0FBQTlFLFlBQUEsZUFBVkEsWUFBQSxDQUFZK0csWUFBWSxFQUFFO2NBQ25EcEosR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYnZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzhCLFVBQVUsRUFDckJ0SSxXQUNGLENBQUM7Y0FDRFgsR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYnZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQ2lDLFlBQVksRUFDdkJ6SSxXQUNGLENBQUM7WUFDSCxDQUFDLE1BQU07Y0FDTFgsR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYnZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzhCLFVBQVUsRUFDckJ0SSxXQUNGLENBQUM7WUFDSDtZQUNBWCxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFdkIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDZ0MsVUFBVSxFQUFFeEksV0FBVyxDQUFDO1lBQzFFUSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7VUFDMUM7VUFFQSxJQUNFLENBQUF2UCxlQUFBLEdBQUFjLEtBQUssQ0FBQ2lKLE9BQU8sY0FBQS9KLGVBQUEsZ0JBQUFDLHFCQUFBLEdBQWJELGVBQUEsQ0FBZThELGNBQWMsY0FBQTdELHFCQUFBLGVBQTdCQSxxQkFBQSxDQUErQmtELEtBQUssSUFDcENyQyxLQUFLLENBQUN1SCxJQUFJLENBQUNrQyxLQUFLLElBQ2hCekosS0FBSyxDQUFDdUgsSUFBSSxDQUFDbUMsS0FBSyxFQUNoQjtZQUNNMUcsY0FBYyxHQUFHL0MscUJBQXFCLEVBQUEyQyxlQUFBLEdBQzFDNUMsS0FBSyxDQUFDaUosT0FBTyxjQUFBckcsZUFBQSx1QkFBYkEsZUFBQSxDQUFlSSxjQUFjLENBQUM2RixPQUFPLEVBQ3JDeEksU0FBUyxHQUFHLENBQ2QsQ0FBQztZQUNLNEMsZUFBZSxHQUFHaEQscUJBQXFCLEVBQUE0QyxlQUFBLEdBQzNDN0MsS0FBSyxDQUFDaUosT0FBTyxjQUFBcEcsZUFBQSx1QkFBYkEsZUFBQSxDQUFlSSxlQUFlLENBQUM0RixPQUFPLEVBQ3RDeEksU0FBUyxHQUFHLENBQ2QsQ0FBQztZQUNERCxHQUFHLENBQUMrTSxJQUFJLENBQUMsRUFBRSxFQUFFNUwsYUFBYSxFQUFFeUIsY0FBYyxDQUFDbUssSUFBSSxDQUFDO1lBQ2hEL00sR0FBRyxDQUFDK00sSUFBSSxDQUFDOU0sU0FBUyxHQUFHLENBQUMsRUFBRWtCLGFBQWEsRUFBRTBCLGVBQWUsQ0FBQ2tLLElBQUksQ0FBQztZQUM1RC9NLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFBeEwsWUFBQSxHQUFBOUMsS0FBSyxDQUFDdUgsSUFBSSxjQUFBekUsWUFBQSxlQUFWQSxZQUFBLENBQVk2RyxPQUFPLEtBQUE1RyxZQUFBLEdBQUkvQyxLQUFLLENBQUN1SCxJQUFJLGNBQUF4RSxZQUFBLGVBQVZBLFlBQUEsQ0FBWXlHLFlBQVksRUFBRTtjQUNuRHBKLEdBQUcsQ0FBQytNLElBQUksQ0FBQzVNLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLEVBQUV2QixLQUFLLENBQUN1SCxJQUFJLENBQUNrQyxLQUFLLEVBQUUxSSxXQUFXLENBQUM7Y0FDckVYLEdBQUcsQ0FBQytNLElBQUksQ0FBQzVNLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLEVBQUV2QixLQUFLLENBQUN1SCxJQUFJLENBQUNvQyxPQUFPLEVBQUU1SSxXQUFXLENBQUM7WUFDekUsQ0FBQyxNQUFNO2NBQ0xYLEdBQUcsQ0FBQytNLElBQUksQ0FBQzVNLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLEVBQUV2QixLQUFLLENBQUN1SCxJQUFJLENBQUNrQyxLQUFLLEVBQUUxSSxXQUFXLENBQUM7WUFDdkU7WUFDQVgsR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQ21DLEtBQUssRUFBRTNJLFdBQVcsQ0FBQztZQUNyRVEsYUFBYSxJQUNYeUIsY0FBYyxDQUFDdUYsTUFBTSxHQUFHdEYsZUFBZSxDQUFDc0YsTUFBTSxHQUMxQ3ZGLGNBQWMsQ0FBQ3VGLE1BQU0sR0FDckJ0RixlQUFlLENBQUNzRixNQUFNO1VBQzlCO1VBRUEsSUFBSSxDQUFBbkosZUFBQSxHQUFBWSxLQUFLLENBQUNpSixPQUFPLGNBQUE3SixlQUFBLGVBQWJBLGVBQUEsQ0FBZTRELGNBQWMsQ0FBQ3JCLFlBQVksSUFBSTNCLEtBQUssQ0FBQ3VILElBQUksQ0FBQ21DLEtBQUssRUFBRTtZQUM1RDFHLGVBQWMsR0FBRy9DLHFCQUFxQixFQUFBaUQsZUFBQSxHQUMxQ2xELEtBQUssQ0FBQ2lKLE9BQU8sY0FBQS9GLGVBQUEsdUJBQWJBLGVBQUEsQ0FBZUYsY0FBYyxDQUFDcEIsWUFBWSxFQUMxQ3ZCLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFDbEIsQ0FBQztZQUNLNEMsZ0JBQWUsR0FBR2hELHFCQUFxQixFQUFBa0QsZUFBQSxHQUMzQ25ELEtBQUssQ0FBQ2lKLE9BQU8sY0FBQTlGLGVBQUEsdUJBQWJBLGVBQUEsQ0FBZUYsZUFBZSxDQUFDckIsWUFBWSxFQUMzQ3ZCLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFDbEIsQ0FBQztZQUNERCxHQUFHLENBQUMrTSxJQUFJLENBQUMsRUFBRSxFQUFFNUwsYUFBYSxFQUFFeUIsZUFBYyxDQUFDbUssSUFBSSxDQUFDO1lBQ2hEL00sR0FBRyxDQUFDK00sSUFBSSxDQUFDOU0sU0FBUyxHQUFHLENBQUMsRUFBRWtCLGFBQWEsRUFBRTBCLGdCQUFlLENBQUNrSyxJQUFJLENBQUM7WUFDNUQvTSxHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUM4TSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQzVDL00sYUFBYSxJQUNYeUIsZUFBYyxDQUFDdUYsTUFBTSxHQUFHdEYsZ0JBQWUsQ0FBQ3NGLE1BQU0sR0FDMUN2RixlQUFjLENBQUN1RixNQUFNLEdBQ3JCdEYsZ0JBQWUsQ0FBQ3NGLE1BQU07VUFDOUI7VUFFQSxLQUFBbEosZ0JBQUEsR0FBSVcsS0FBSyxDQUFDaUosT0FBTyxjQUFBNUosZ0JBQUEsZUFBYkEsZ0JBQUEsQ0FBZTJELGNBQWMsQ0FBQ25CLFlBQVksRUFBRTtZQUN4Q21CLGdCQUFjLEdBQUcvQyxxQkFBcUIsRUFBQXFELGdCQUFBLEdBQzFDdEQsS0FBSyxDQUFDaUosT0FBTyxjQUFBM0YsZ0JBQUEsdUJBQWJBLGdCQUFBLENBQWVOLGNBQWMsQ0FBQ25CLFlBQVksRUFDMUN4QixTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQ2xCLENBQUM7WUFDSzRDLGlCQUFlLEdBQUdoRCxxQkFBcUIsRUFBQXNELGdCQUFBLEdBQzNDdkQsS0FBSyxDQUFDaUosT0FBTyxjQUFBMUYsZ0JBQUEsdUJBQWJBLGdCQUFBLENBQWVOLGVBQWUsQ0FBQ3BCLFlBQVksRUFDM0N4QixTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQ2xCLENBQUM7WUFDREQsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXlCLGdCQUFjLENBQUNtSyxJQUFJLENBQUM7WUFDaEQvTSxHQUFHLENBQUMrTSxJQUFJLENBQUM5TSxTQUFTLEdBQUcsQ0FBQyxFQUFFa0IsYUFBYSxFQUFFMEIsaUJBQWUsQ0FBQ2tLLElBQUksQ0FBQztZQUM1RDVMLGFBQWEsSUFDWHlCLGdCQUFjLENBQUN1RixNQUFNLEdBQUd0RixpQkFBZSxDQUFDc0YsTUFBTSxHQUMxQ3ZGLGdCQUFjLENBQUN1RixNQUFNLEdBQ3JCdEYsaUJBQWUsQ0FBQ3NGLE1BQU07VUFDOUI7VUFFQSxJQUNFdkksS0FBSyxDQUFDaUosT0FBTyxDQUFDakcsY0FBYyxDQUFDK0YsT0FBTyxJQUNwQy9JLEtBQUssQ0FBQ2lKLE9BQU8sQ0FBQ2hHLGVBQWUsQ0FBQzhGLE9BQU8sRUFDckM7WUFDQTNJLEdBQUcsQ0FBQytNLElBQUksQ0FBQyxFQUFFLEVBQUU1TCxhQUFhLEVBQUV2QixLQUFLLENBQUNpSixPQUFPLENBQUNqRyxjQUFjLENBQUMrRixPQUFPLENBQUM7WUFDakUzSSxHQUFHLENBQUMrTSxJQUFJLENBQ045TSxTQUFTLEdBQUcsQ0FBQyxFQUNia0IsYUFBYSxFQUNidkIsS0FBSyxDQUFDaUosT0FBTyxDQUFDaEcsZUFBZSxDQUFDOEYsT0FDaEMsQ0FBQztVQUNILENBQUMsTUFBTXhILGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtVQUMvQzs7VUFFQSxLQUFBblAsZ0JBQUEsR0FBSVUsS0FBSyxDQUFDaUosT0FBTyxjQUFBM0osZ0JBQUEsZUFBYkEsZ0JBQUEsQ0FBZTBKLFNBQVMsRUFBRTtZQUM1QnpILGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUN4Q3JPLEdBQUcsQ0FBQytNLElBQUksQ0FBQyxFQUFFLEVBQUU1TCxhQUFhLEVBQUV2QixLQUFLLENBQUNpSixPQUFPLENBQUNELFNBQVMsQ0FBQztVQUN0RDtVQUVNdEYsUUFBUSxJQUFBbkUsWUFBQSxHQUFHUyxLQUFLLENBQUN1SCxJQUFJLGNBQUFoSSxZQUFBLHVCQUFWQSxZQUFBLENBQVltRSxRQUFRO1VBQ3JDLElBQUlBLFFBQVEsRUFBRTtZQUNabkMsYUFBYSxJQUFJLENBQUMsR0FBR0MsU0FBUyxDQUFDaU4sYUFBYTtZQUU1QyxJQUFJL0ssUUFBUSxDQUFDdUksVUFBVSxFQUFFO2NBQ3ZCN0wsR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU3TyxnQkFBZ0IsQ0FBQztjQUN4Q1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRW1DLFFBQVEsQ0FBQzBJLE1BQU0sQ0FBQztjQUM1Q2hNLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ2EsU0FBUyxFQUFFNU8sY0FBYyxDQUFDO2NBQ3RDVixHQUFHLENBQUMrTSxJQUFJLENBQ04sRUFBRSxHQUFHL00sR0FBRyxDQUFDdVAsWUFBWSxDQUFDak0sUUFBUSxDQUFDMEksTUFBTSxDQUFDLEVBQ3RDN0ssYUFBYSxFQUNibUMsUUFBUSxDQUFDdUksVUFDWCxDQUFDO2NBQ0QxSyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7WUFDMUM7WUFFQSxJQUFJL0ssUUFBUSxDQUFDeUksZ0JBQWdCLEVBQUU7Y0FDN0IvTCxHQUFHLENBQUN5TyxPQUFPLENBQUNhLFNBQVMsRUFBRTdPLGdCQUFnQixDQUFDO2NBQ3hDVCxHQUFHLENBQUMrTSxJQUFJLENBQUMsRUFBRSxFQUFFNUwsYUFBYSxFQUFFbUMsUUFBUSxDQUFDMkksTUFBTSxDQUFDO2NBQzVDak0sR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU1TyxjQUFjLENBQUM7Y0FDdENWLEdBQUcsQ0FBQytNLElBQUksQ0FDTixFQUFFLEdBQUcvTSxHQUFHLENBQUN1UCxZQUFZLENBQUNqTSxRQUFRLENBQUMySSxNQUFNLENBQUMsRUFDdEM5SyxhQUFhLEVBQ2JtQyxRQUFRLENBQUN5SSxnQkFDWCxDQUFDO2NBQ0Q1SyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7WUFDMUM7WUFFQSxJQUFJL0ssUUFBUSxDQUFDd0ksTUFBTSxFQUFFO2NBQ25COUwsR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU3TyxnQkFBZ0IsQ0FBQztjQUN4Q1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRW1DLFFBQVEsQ0FBQzRJLE1BQU0sQ0FBQztjQUM1Q2xNLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ2EsU0FBUyxFQUFFNU8sY0FBYyxDQUFDO2NBQ3RDVixHQUFHLENBQUMrTSxJQUFJLENBQ04sRUFBRSxHQUFHL00sR0FBRyxDQUFDdVAsWUFBWSxDQUFDak0sUUFBUSxDQUFDNEksTUFBTSxDQUFDLEVBQ3RDL0ssYUFBYSxFQUNibUMsUUFBUSxDQUFDd0ksTUFDWCxDQUFDO2NBQ0QzSyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7WUFDMUM7WUFFQSxJQUFJL0ssUUFBUSxDQUFDc0ksR0FBRyxFQUFFO2NBQ2hCNUwsR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU3TyxnQkFBZ0IsQ0FBQztjQUN4Q1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRW1DLFFBQVEsQ0FBQzZJLE1BQU0sQ0FBQztjQUM1Q25NLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ2EsU0FBUyxFQUFFNU8sY0FBYyxDQUFDO2NBQ3RDVixHQUFHLENBQUMrTSxJQUFJLENBQ04sRUFBRSxHQUFHL00sR0FBRyxDQUFDdVAsWUFBWSxDQUFDak0sUUFBUSxDQUFDNkksTUFBTSxDQUFDLEVBQ3RDaEwsYUFBYSxFQUNibUMsUUFBUSxDQUFDc0ksR0FDWCxDQUFDO2NBQ0R6SyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7WUFDMUMsQ0FBQyxNQUFNO2NBQ0xyTyxHQUFHLENBQUN5TyxPQUFPLENBQUNhLFNBQVMsRUFBRTVPLGNBQWMsQ0FBQztjQUN0Q1MsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhO1lBQzFDO1lBRUEsSUFBSS9LLFFBQVEsQ0FBQ2dKLE9BQU8sSUFBSWhKLFFBQVEsQ0FBQ2lKLFNBQVMsRUFBRTtjQUMxQ3ZNLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ2EsU0FBUyxFQUFFN08sZ0JBQWdCLENBQUM7Y0FDeENULEdBQUcsQ0FBQytNLElBQUksQ0FBQyxFQUFFLEVBQUU1TCxhQUFhLEVBQUVtQyxRQUFRLENBQUM4SSxNQUFNLENBQUM7Y0FDNUNwTSxHQUFHLENBQUN5TyxPQUFPLENBQUNhLFNBQVMsRUFBRTVPLGNBQWMsQ0FBQztjQUN0Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUNOLEVBQUUsR0FBRy9NLEdBQUcsQ0FBQ3VQLFlBQVksQ0FBQ2pNLFFBQVEsQ0FBQzhJLE1BQU0sQ0FBQyxFQUN0Q2pMLGFBQWEsRUFDYm1DLFFBQVEsQ0FBQ2dKLE9BQ1gsQ0FBQztjQUNEbkwsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhO2NBQ3hDck8sR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU3TyxnQkFBZ0IsQ0FBQztjQUN4Q1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRW1DLFFBQVEsQ0FBQytJLE1BQU0sQ0FBQztjQUM1Q3JNLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ2EsU0FBUyxFQUFFNU8sY0FBYyxDQUFDO2NBQ3RDVixHQUFHLENBQUMrTSxJQUFJLENBQ04sRUFBRSxHQUFHL00sR0FBRyxDQUFDdVAsWUFBWSxDQUFDak0sUUFBUSxDQUFDK0ksTUFBTSxDQUFDLEVBQ3RDbEwsYUFBYSxFQUNibUMsUUFBUSxDQUFDaUosU0FDWCxDQUFDO2NBQ0RwTCxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7WUFDMUM7VUFDRjs7VUFFQTtVQUNBLEtBQUFqUCxZQUFBLEdBQUlRLEtBQUssQ0FBQ3VILElBQUksY0FBQS9ILFlBQUEsZUFBVkEsWUFBQSxDQUFZb0UsUUFBUSxFQUFFO1lBQ3hCckMsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhLEdBQUcsQ0FBQztZQUM1QztZQUNBck8sR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDNk0sYUFBYSxDQUFDO1lBQ2xDekssUUFBUSxHQUFHM0QscUJBQXFCLEVBQUEwRCxZQUFBLEdBQ3BDM0QsS0FBSyxDQUFDdUgsSUFBSSxjQUFBNUQsWUFBQSx1QkFBVkEsWUFBQSxDQUFZQyxRQUFRLEVBQ25CdkQsU0FBUyxHQUFHLENBQUMsR0FBSSxDQUNwQixDQUFDO1lBRURELEdBQUcsQ0FBQytNLElBQUksQ0FBQyxFQUFFLEVBQUU1TCxhQUFhLEVBQUVxQyxRQUFRLENBQUN1SixJQUFJLEVBQUVuTSxVQUFVLENBQUM7WUFDdERPLGFBQWEsSUFBSXFDLFFBQVEsQ0FBQzJFLE1BQU0sR0FBRyxDQUFDO1VBQ3RDO1VBRUFuSSxHQUFHLENBQUMyTyxZQUFZLENBQUNwTyxTQUFTLENBQUM7O1VBRTNCO1VBRU1rRCxPQUFPLEdBQ1gsQ0FBQ3hELFNBQVMsR0FBR21CLFNBQVMsQ0FBQ3NHLGNBQWMsSUFBSTlILEtBQUssQ0FBQ3VILElBQUksQ0FBQ0MsTUFBTSxDQUFDclUsTUFBTTtVQXFCN0Q0USxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFBLEVBQVM7WUFDbEMsSUFBTTZMLGlCQUFpQixHQUFHOUwsb0JBQW9CLENBQUMsQ0FBQztZQUNoRHZDLGFBQWEsSUFBSSxDQUFDO1lBQ2xCLEtBQUssSUFBSXRPLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRytNLEtBQUssQ0FBQ3VILElBQUksQ0FBQ0MsTUFBTSxDQUFDclUsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtjQUFBLElBQUE0YyxvQkFBQSxFQUFBQyxxQkFBQTtjQUNqRDFQLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFTixjQUFjLENBQUM7Y0FDN0NWLEdBQUcsQ0FBQzJQLElBQUksQ0FDTkgsaUJBQWlCLGFBQWpCQSxpQkFBaUIsd0JBQUFDLG9CQUFBLEdBQWpCRCxpQkFBaUIsQ0FBRzNjLENBQUMsQ0FBQyxjQUFBNGMsb0JBQUEsdUJBQXRCQSxvQkFBQSxDQUF3QmxJLEtBQUssRUFDN0JwRyxhQUFhLEVBQ2JxTyxpQkFBaUIsYUFBakJBLGlCQUFpQix3QkFBQUUscUJBQUEsR0FBakJGLGlCQUFpQixDQUFHM2MsQ0FBQyxDQUFDLGNBQUE2YyxxQkFBQSx1QkFBdEJBLHFCQUFBLENBQXdCbEksS0FBSyxFQUM3QixDQUNGLENBQUM7WUFDSDtZQUNBckcsYUFBYSxJQUFJLENBQUM7VUFDcEIsQ0FBQztVQUNLeUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSXdLLFVBQVUsRUFBSztZQUMxQyxJQUFNb0IsaUJBQWlCLEdBQUc5TCxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2hELEtBQUssSUFBSTdRLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRytNLEtBQUssQ0FBQ3VILElBQUksQ0FBQ0MsTUFBTSxDQUFDclUsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtjQUFBLElBQUErYyxxQkFBQSxFQUFBQyxxQkFBQTtjQUNqRDdQLEdBQUcsQ0FBQzJQLElBQUksQ0FDTkgsaUJBQWlCLGFBQWpCQSxpQkFBaUIsd0JBQUFJLHFCQUFBLEdBQWpCSixpQkFBaUIsQ0FBRzNjLENBQUMsQ0FBQyxjQUFBK2MscUJBQUEsdUJBQXRCQSxxQkFBQSxDQUF3QnJJLEtBQUssRUFDN0JwRyxhQUFhLEVBQ2JxTyxpQkFBaUIsYUFBakJBLGlCQUFpQix3QkFBQUsscUJBQUEsR0FBakJMLGlCQUFpQixDQUFHM2MsQ0FBQyxDQUFDLGNBQUFnZCxxQkFBQSx1QkFBdEJBLHFCQUFBLENBQXdCckksS0FBSyxFQUM3QjRHLFVBQ0YsQ0FBQztZQUNIO1VBQ0YsQ0FBQztVQUNLdkssY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7WUFDM0IsSUFBSWpFLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3FDLFlBQVksRUFBRTdGLHFCQUFxQixDQUFDLENBQUM7WUFFcER4QyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWEsR0FBR3BOLHNCQUFzQjtZQUNqRWpCLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFTixjQUFjLENBQUM7WUFDN0NWLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3RPLFVBQVUsQ0FBQztZQUM1QkwsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDOE0sYUFBYSxDQUFDO1lBQ3hDO1lBQ0FsTyxHQUFHLENBQUM4UCxZQUFZLENBQUN2UCxTQUFTLENBQUM7WUFDM0JZLGFBQWEsSUFBSSxDQUFDO1lBRWxCLElBQU1xTyxpQkFBaUIsR0FBRzlMLG9CQUFvQixDQUFDLENBQUM7WUFDaEQsSUFBSXFNLG1CQUFtQixHQUFHLENBQUM7WUFDM0JuUSxLQUFLLENBQUN1SCxJQUFJLENBQUNDLE1BQU0sQ0FBQ25VLE9BQU8sQ0FBQyxVQUFVK2MsR0FBRyxFQUFFQyxLQUFLLEVBQUU7Y0FBQSxJQUFBQyxxQkFBQTtjQUM5QyxJQUFNQyxPQUFPLEdBQUd0USxxQkFBcUIsQ0FDbkNtUSxHQUFHLEVBQ0hSLGlCQUFpQixDQUFDUyxLQUFLLENBQUMsQ0FBQ3pJLEtBQUssR0FBRyxDQUNuQyxDQUFDO2NBQ0R1SSxtQkFBbUIsR0FBR0ssSUFBSSxDQUFDQyxHQUFHLENBQUNOLG1CQUFtQixFQUFFSSxPQUFPLENBQUNoSSxNQUFNLENBQUM7Y0FDbkVuSSxHQUFHLENBQUMrTSxJQUFJLENBQUNvRCxPQUFPLENBQUNwRCxJQUFJLEVBQUV5QyxpQkFBaUIsYUFBakJBLGlCQUFpQix3QkFBQVUscUJBQUEsR0FBakJWLGlCQUFpQixDQUFHUyxLQUFLLENBQUMsY0FBQUMscUJBQUEsdUJBQTFCQSxxQkFBQSxDQUE0QjNJLEtBQUssRUFBRXBHLGFBQWEsQ0FBQztZQUMxRSxDQUFDLENBQUM7WUFFRkEsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhLEdBQUcsQ0FBQztZQUM1Q2xOLGFBQWEsSUFBSTRPLG1CQUFtQixHQUFHLENBQUM7WUFDeEMvUCxHQUFHLENBQUMyTyxZQUFZLENBQUNwTyxTQUFTLENBQUM7WUFDM0JQLEdBQUcsQ0FBQ3NRLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDckJ0USxHQUFHLENBQUNxUCxJQUFJLENBQUMsRUFBRSxFQUFFbE8sYUFBYSxFQUFFaEIsUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsQ0FBQztVQUMzRCxDQUFDO1VBQ0QwQyxjQUFjLENBQUMsQ0FBQzs7VUFFaEI7VUFDTUMsZUFBZSxHQUFHbEUsS0FBSyxDQUFDdUgsSUFBSSxDQUFDdUMsS0FBSyxDQUFDM1csTUFBTTtVQUMvQ2lOLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFUCxnQkFBZ0IsQ0FBQztVQUUvQ2IsS0FBSyxDQUFDdUgsSUFBSSxDQUFDdUMsS0FBSyxDQUFDelcsT0FBTyxDQUFDLFVBQVUrYyxHQUFHLEVBQUVDLEtBQUssRUFBRTtZQUM3QztZQUNBLElBQUlNLFVBQVUsR0FBRyxFQUFFO1lBQ25CLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFlO2NBQ2hDeFEsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDK00sYUFBYSxDQUFDO2NBQ3hDLElBQU1xQixpQkFBaUIsR0FBRzlMLG9CQUFvQixDQUFDLENBQUM7Y0FDaERzTSxHQUFHLENBQUMvYyxPQUFPLENBQUMsVUFBVXdkLEVBQUUsRUFBRVIsS0FBSyxFQUFFO2dCQUFBLElBQUFTLHNCQUFBO2dCQUMvQjtnQkFDQSxJQUFJQyxJQUFJLEdBQUc5USxxQkFBcUIsQ0FDOUI0USxFQUFFLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsQ0FBQXBCLGlCQUFpQixhQUFqQkEsaUJBQWlCLHdCQUFBa0Isc0JBQUEsR0FBakJsQixpQkFBaUIsQ0FBR1MsS0FBSyxDQUFDLGNBQUFTLHNCQUFBLHVCQUExQkEsc0JBQUEsQ0FBNEJsSixLQUFLLElBQUcsQ0FDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0grSSxVQUFVLENBQUM5ZCxJQUFJLENBQUNrZSxJQUFJLENBQUN4SSxNQUFNLENBQUM7Y0FDOUIsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUNEcUksYUFBYSxDQUFDLENBQUM7WUFDZixJQUFNSyxTQUFTLEdBQUdULElBQUksQ0FBQ0MsR0FBRyxDQUFBM2QsS0FBQSxDQUFSMGQsSUFBSSxFQUFRRyxVQUFVLENBQUM7O1lBRXpDO1lBQ0EsSUFBSTNRLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3NDLGVBQWUsRUFBRTdGLG1CQUFtQixDQUFDaU4sU0FBUyxHQUFHLENBQUMsQ0FBQzs7WUFFbEU7WUFDQTtZQUNBLElBQU1yQixpQkFBaUIsR0FBRzlMLG9CQUFvQixDQUFDLENBQUM7O1lBRWhEO1lBQ0EsSUFBSXVNLEtBQUssR0FBRyxDQUFDLEdBQUduTSxlQUFlLEVBQUUzQyxhQUFhLElBQUkwUCxTQUFTO1lBRTNELElBQUk5USxXQUFXLENBQUNvQixhQUFhLEVBQUVqQixVQUFVLENBQUMsRUFBRTtjQUMxQ0YsR0FBRyxDQUFDOFEsT0FBTyxDQUFDLENBQUM7Y0FDYjNQLGFBQWEsR0FBR0Ysc0JBQXNCO2NBQ3RDLElBQUlnUCxLQUFLLEdBQUcsQ0FBQyxHQUFHbk0sZUFBZSxFQUFFRCxjQUFjLENBQUMsQ0FBQztZQUNuRCxDQUFDLE1BQU07Y0FDTDtjQUNBLElBQUlvTSxLQUFLLEdBQUcsQ0FBQyxHQUFHbk0sZUFBZSxJQUFJM0MsYUFBYSxHQUFHLEVBQUUsRUFDbkRBLGFBQWEsSUFBSTBQLFNBQVM7WUFDOUI7WUFFQTdRLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQytNLGFBQWEsQ0FBQztZQUN4Q25PLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFUCxnQkFBZ0IsQ0FBQztZQUMvQ3VQLEdBQUcsQ0FBQy9jLE9BQU8sQ0FBQyxVQUFVd2QsRUFBRSxFQUFFUixLQUFLLEVBQUU7Y0FBQSxJQUFBYyxzQkFBQSxFQUFBQyxzQkFBQTtjQUMvQixJQUFJTCxJQUFJLEdBQUc5USxxQkFBcUIsQ0FDOUI0USxFQUFFLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsQ0FBQXBCLGlCQUFpQixhQUFqQkEsaUJBQWlCLHdCQUFBdUIsc0JBQUEsR0FBakJ2QixpQkFBaUIsQ0FBR1MsS0FBSyxDQUFDLGNBQUFjLHNCQUFBLHVCQUExQkEsc0JBQUEsQ0FBNEJ2SixLQUFLLElBQUcsQ0FDdEMsQ0FBQztjQUVEeEgsR0FBRyxDQUFDK00sSUFBSSxDQUFDNEQsSUFBSSxDQUFDNUQsSUFBSSxFQUFFeUMsaUJBQWlCLGFBQWpCQSxpQkFBaUIsd0JBQUF3QixzQkFBQSxHQUFqQnhCLGlCQUFpQixDQUFHUyxLQUFLLENBQUMsY0FBQWUsc0JBQUEsdUJBQTFCQSxzQkFBQSxDQUE0QnpKLEtBQUssRUFBRXBHLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDO1lBRUZuQixHQUFHLENBQUNzUSxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQ3JCdFEsR0FBRyxDQUFDcVAsSUFBSSxDQUFDLEVBQUUsRUFBRWxPLGFBQWEsRUFBRWhCLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLENBQUM7WUFDekRBLGFBQWEsSUFBSTBQLFNBQVMsR0FBRyxDQUFDOztZQUU5QjtZQUNBMVAsYUFBYSxJQUFJLENBQUM7VUFDcEIsQ0FBQyxDQUFDOztVQUVGO1VBQ0EsSUFBSTJDLGVBQWUsS0FBSyxDQUFDLEVBQUU7WUFDekIzQyxhQUFhLElBQUksQ0FBQztZQUNsQm5CLEdBQUcsQ0FBQytNLElBQUksQ0FBQyxTQUFTLEVBQUU1TSxRQUFRLEdBQUcsQ0FBQyxFQUFFZ0IsYUFBYSxDQUFDO1VBQ2xEO1VBRUFuQixHQUFHLENBQUMyTyxZQUFZLENBQUN0TyxVQUFVLENBQUM7VUFDNUJMLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQyxFQUFFLENBQUM7VUFDbkJ2TixhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7VUFFckMsSUFDRXhPLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3dDLFFBQVEsSUFDbkIvSixLQUFLLENBQUN1SCxJQUFJLENBQUNrRCxJQUFJLElBQ2Z6SyxLQUFLLENBQUN1SCxJQUFJLENBQUMwRCxJQUFJLElBQ2ZqTCxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLEVBQ2hCO1lBQ0EsSUFBSWhMLFdBQVcsQ0FBQ29CLGFBQWEsRUFBRWpCLFVBQVUsQ0FBQyxFQUFFO2NBQzFDRixHQUFHLENBQUM4USxPQUFPLENBQUMsQ0FBQztjQUNiM1AsYUFBYSxHQUFHRixzQkFBc0I7WUFDeEM7VUFDRjtVQUVBRSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7VUFFckMsSUFBSWpOLGFBQWEsR0FBR2pCLFVBQVUsSUFBSWlCLGFBQWEsR0FBRyxFQUFFLEdBQUdqQixVQUFVLEVBQUU7WUFDakVGLEdBQUcsQ0FBQzhRLE9BQU8sQ0FBQyxDQUFDO1lBQ2IzUCxhQUFhLEdBQUdGLHNCQUFzQjtVQUN4Qzs7VUFFQTtVQUNJOEMsYUFBYSxHQUFHLENBQUMsRUFFckI7VUFDQSxJQUNFbkUsS0FBSyxDQUFDdUgsSUFBSSxDQUFDQyxNQUFNLENBQUNyVSxNQUFNLEtBQ3ZCNk0sS0FBSyxDQUFDdUgsSUFBSSxDQUFDd0MsUUFBUSxJQUFJL0osS0FBSyxDQUFDdUgsSUFBSSxDQUFDMkIsYUFBYSxJQUFJbEosS0FBSyxDQUFDdUgsSUFBSSxDQUFDeUMsUUFBUSxDQUFDLEVBQ3hFO1lBQ0E1SixHQUFHLENBQUNzUSxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQ3JCdFEsR0FBRyxDQUFDcVAsSUFBSSxDQUFDbFAsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUVnQixhQUFhLEVBQUVoQixRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxDQUFDO1lBQ3hFQSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7VUFDdkM7O1VBRUE7VUFDTXBLLHlCQUF5QixHQUFHaEUsR0FBRyxDQUFDOE4sUUFBUSxDQUFDSixnQkFBZ0IsQ0FBQyxDQUFDO1VBQzNEekosc0JBQXNCLEdBQUc5QyxhQUFhLEVBRTVDO1VBQ0EsSUFBSXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzJCLGFBQWEsSUFBSWxKLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3dDLFFBQVEsRUFBRTtZQUNuRDNKLEdBQUcsQ0FBQytNLElBQUksQ0FDTjVNLFFBQVEsR0FBRyxFQUFFLEVBQ2JnQixhQUFhLEVBQ2J2QixLQUFLLENBQUN1SCxJQUFJLENBQUMyQixhQUFhLEVBQ3hCbkksV0FDRixDQUFDO1lBQ0RYLEdBQUcsQ0FBQytNLElBQUksQ0FDTjVNLFFBQVEsR0FBRyxFQUFFLEVBQ2JnQixhQUFhLEVBQ2J2QixLQUFLLENBQUN1SCxJQUFJLENBQUN5QyxRQUFRLEdBQUcsSUFBSSxHQUFHaEssS0FBSyxDQUFDdUgsSUFBSSxDQUFDd0MsUUFBUSxDQUFDc0gsY0FBYyxDQUFDLENBQUMsRUFDakV0USxXQUNGLENBQUM7WUFFRG9ELGFBQWEsSUFBSSxDQUFDO1VBQ3BCO1VBRUEsSUFBSW5FLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRCLGlCQUFpQixJQUFJbkosS0FBSyxDQUFDdUgsSUFBSSxDQUFDNkIsWUFBWSxFQUFFO1lBQzNEaEosR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYnZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRCLGlCQUFpQixFQUM1QnBJLFdBQ0YsQ0FBQztZQUNEWCxHQUFHLENBQUMrTSxJQUFJLENBQ041TSxRQUFRLEdBQUcsRUFBRSxFQUNiZ0IsYUFBYSxFQUNidkIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDeUMsUUFBUSxHQUFHLElBQUksR0FBR2hLLEtBQUssQ0FBQ3VILElBQUksQ0FBQzZCLFlBQVksQ0FBQ2lJLGNBQWMsQ0FBQyxDQUFDLEVBQ3JFdFEsV0FDRixDQUFDO1lBRURvRCxhQUFhLElBQUksQ0FBQztVQUNwQjs7VUFFQTtVQUNBLElBQ0VuRSxLQUFLLENBQUN1SCxJQUFJLENBQUNrRCxJQUFJLEtBQ2R6SyxLQUFLLENBQUN1SCxJQUFJLENBQUNrRCxJQUFJLENBQUNDLElBQUksSUFBSTFLLEtBQUssQ0FBQ3VILElBQUksQ0FBQ2tELElBQUksQ0FBQ0UsSUFBSSxJQUFJM0ssS0FBSyxDQUFDdUgsSUFBSSxDQUFDa0QsSUFBSSxDQUFDRyxJQUFJLENBQUMsRUFDdEU7WUFDQSxJQUFJLENBQUM1SyxLQUFLLENBQUN1SCxJQUFJLENBQUNrRCxJQUFJLENBQUNPLFNBQVMsRUFBRTtjQUM5QnpKLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVTtjQUNyQ3BPLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQzlPLEtBQUssQ0FBQ3VILElBQUksQ0FBQ2tELElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRLENBQUM7Y0FFL0MzSyxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFdkIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDa0QsSUFBSSxDQUFDQyxJQUFJLEVBQUUzSixXQUFXLENBQUM7Y0FDekVYLEdBQUcsQ0FBQytNLElBQUksQ0FDTjVNLFFBQVEsR0FBRyxFQUFFLEVBQ2JnQixhQUFhLEVBQ2J2QixLQUFLLENBQUN1SCxJQUFJLENBQUNrRCxJQUFJLENBQUNHLElBQUksR0FBRyxJQUFJLEdBQUc1SyxLQUFLLENBQUN1SCxJQUFJLENBQUNrRCxJQUFJLENBQUNFLElBQUksRUFDbEQ1SixXQUNGLENBQUM7Y0FFRG9ELGFBQWEsSUFBSSxDQUFDO1lBQ3BCOztZQUVBO1lBQ01JLE9BQU8sSUFBQUQsZUFBQSxHQUFHdEUsS0FBSyxDQUFDdUgsSUFBSSxDQUFDa0QsSUFBSSxjQUFBbkcsZUFBQSx1QkFBZkEsZUFBQSxDQUFpQnVHLElBQUk7WUFDckMsSUFBSXRHLE9BQU8sRUFBRTtjQUNYbkUsR0FBRyxDQUFDMk8sWUFBWSxDQUFDbk8sU0FBUyxDQUFDO2NBQzNCMkQsT0FBTyxDQUFDbFIsT0FBTyxDQUFDLFVBQUNpZSxHQUFHLEVBQUs7Z0JBQ3ZCL1AsYUFBYSxJQUFJQyxTQUFTLENBQUNnTixVQUFVO2dCQUNyQyxJQUFJck8sV0FBVyxDQUFDb0IsYUFBYSxFQUFFakIsVUFBVSxDQUFDLEVBQUU7a0JBQzFDRixHQUFHLENBQUM4USxPQUFPLENBQUMsQ0FBQztrQkFDYjNQLGFBQWEsR0FBR0MsU0FBUyxDQUFDc0csY0FBYztnQkFDMUM7Z0JBQ0ExSCxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxLQUFBZ1EsTUFBQSxDQUFLRCxHQUFHLENBQUMxSSxJQUFJLFFBQUs3SCxXQUFXLENBQUM7Z0JBQ25FWCxHQUFHLENBQUMrTSxJQUFJLENBQ041TSxRQUFRLEdBQUcsRUFBRSxFQUNiZ0IsYUFBYSxFQUNidkIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDa0QsSUFBSSxDQUFDRyxJQUFJLEdBQUcsSUFBSSxHQUFHMEcsR0FBRyxDQUFDRSxNQUFNLEVBQ3hDelEsV0FDRixDQUFDO2NBQ0gsQ0FBQyxDQUFDO2NBRUZvRCxhQUFhLElBQUlJLE9BQU8sQ0FBQ3BSLE1BQU07WUFDakM7VUFDRjtVQUNBOztVQUVBaU4sR0FBRyxDQUFDMk8sWUFBWSxDQUFDdE8sVUFBVSxDQUFDO1VBQzVCO1VBQ0EsSUFDRVQsS0FBSyxDQUFDdUgsSUFBSSxDQUFDMEQsSUFBSSxLQUNkakwsS0FBSyxDQUFDdUgsSUFBSSxDQUFDMEQsSUFBSSxDQUFDUCxJQUFJLElBQUkxSyxLQUFLLENBQUN1SCxJQUFJLENBQUMwRCxJQUFJLENBQUNOLElBQUksSUFBSTNLLEtBQUssQ0FBQ3VILElBQUksQ0FBQzBELElBQUksQ0FBQ0wsSUFBSSxDQUFDLEVBQ3RFO1lBQ0FySixhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7WUFDckNwTyxHQUFHLENBQUMwTyxXQUFXLENBQUM5TyxLQUFLLENBQUN1SCxJQUFJLENBQUMwRCxJQUFJLENBQUNILEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBRS9DM0ssR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzBELElBQUksQ0FBQ1AsSUFBSSxFQUFFM0osV0FBVyxDQUFDO1lBQ3pFWCxHQUFHLENBQUMrTSxJQUFJLENBQUM1TSxRQUFRLEdBQUcsRUFBRSxFQUFFZ0IsYUFBYSxFQUFFdkIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDMEQsSUFBSSxDQUFDTixJQUFJLEVBQUU1SixXQUFXLENBQUM7WUFDekVvRCxhQUFhLElBQUksQ0FBQztVQUNwQjtVQUNBOztVQUVBLElBQ0VuRSxLQUFLLENBQUN1SCxJQUFJLENBQUMyRCxJQUFJLEtBQ2RsTCxLQUFLLENBQUN1SCxJQUFJLENBQUMyRCxJQUFJLENBQUNSLElBQUksSUFBSTFLLEtBQUssQ0FBQ3VILElBQUksQ0FBQzJELElBQUksQ0FBQ1AsSUFBSSxJQUFJM0ssS0FBSyxDQUFDdUgsSUFBSSxDQUFDMkQsSUFBSSxDQUFDTixJQUFJLENBQUMsRUFDdEU7WUFDQXJKLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVTtZQUNyQ3BPLEdBQUcsQ0FBQytNLElBQUksQ0FBQzVNLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLEVBQUV2QixLQUFLLENBQUN1SCxJQUFJLENBQUMyRCxJQUFJLENBQUNSLElBQUksRUFBRTNKLFdBQVcsQ0FBQztZQUN6RVgsR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYnZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzJELElBQUksQ0FBQ04sSUFBSSxHQUFHLElBQUksR0FBRzVLLEtBQUssQ0FBQ3VILElBQUksQ0FBQzJELElBQUksQ0FBQ1AsSUFBSSxFQUNsRDVKLFdBQ0YsQ0FBQztZQUNEb0QsYUFBYSxJQUFJLENBQUM7VUFDcEI7O1VBRUE7VUFDQSxJQUNFbkUsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxLQUNmbkwsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDVCxJQUFJLElBQUkxSyxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLENBQUNSLElBQUksSUFBSTNLLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRELEtBQUssQ0FBQ1AsSUFBSSxDQUFDLEVBQ3pFO1lBQ0FySixhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7WUFDckNwTyxHQUFHLENBQUMwTyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ25CMU8sR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVOLGNBQWMsQ0FBQztZQUM3Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRELEtBQUssQ0FBQ1QsSUFBSSxFQUFFM0osV0FBVyxDQUFDO1lBQzFFWCxHQUFHLENBQUMrTSxJQUFJLENBQ041TSxRQUFRLEdBQUcsRUFBRSxFQUNiZ0IsYUFBYSxFQUNidkIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDUCxJQUFJLEdBQUcsSUFBSSxHQUFHNUssS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDUixJQUFJLEVBQ3BENUosV0FDRixDQUFDO1lBQ0RvRCxhQUFhLElBQUksQ0FBQztVQUNwQjs7VUFFQTtVQUNBO1VBQ01LLGNBQWMsR0FBRyxDQUFDTCxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFFOUM7VUFDQTtVQUNBLElBQUluRSxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLENBQUNFLFNBQVMsSUFBSTdHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDL0NDLElBQUksR0FBRyxFQUFFLEdBQUdELGNBQWM7WUFDaENqRCxhQUFhLElBQUlDLFNBQVMsQ0FBQzhNLGFBQWEsR0FBRzdKLElBQUk7VUFDakQsQ0FBQyxNQUFNO1lBQ0xsRCxhQUFhLElBQUlDLFNBQVMsQ0FBQzhNLGFBQWE7VUFDMUM7O1VBRUE7VUFDQSxJQUFJLENBQUE3TyxpQkFBQSxHQUFBTyxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLGNBQUExTCxpQkFBQSxlQUFoQkEsaUJBQUEsQ0FBa0JvTCxJQUFJLEtBQUFuTCxrQkFBQSxHQUFJTSxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLGNBQUF6TCxrQkFBQSxlQUFoQkEsa0JBQUEsQ0FBa0IwTCxJQUFJLEVBQUU7WUFDcEQsSUFBSWpMLFdBQVcsQ0FBQ29CLGFBQWEsRUFBRWpCLFVBQVUsQ0FBQyxFQUFFO2NBQzFDRixHQUFHLENBQUM4USxPQUFPLENBQUMsQ0FBQztjQUNiM1AsYUFBYSxHQUFHRixzQkFBc0I7WUFDeEM7WUFDTXFELFlBQVksR0FBR3pFLHFCQUFxQixDQUN4Q0QsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDQyxJQUFJLEVBQ3JCL0ssU0FBUyxHQUFHbUIsU0FBUyxDQUFDc0csY0FDeEIsQ0FBQztZQUVEMUgsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDOE0sYUFBYSxDQUFDO1lBQ3hDbE8sR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU3TyxnQkFBZ0IsQ0FBQztZQUN4Q1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRELEtBQUssQ0FBQ04sSUFBSSxDQUFDO1lBQ2xEekssR0FBRyxDQUFDeU8sT0FBTyxDQUFDYSxTQUFTLEVBQUU1TyxjQUFjLENBQUM7WUFDdENWLEdBQUcsQ0FBQytNLElBQUksQ0FDTixFQUFFLEdBQUcvTSxHQUFHLENBQUN1UCxZQUFZLENBQUMzUCxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLENBQUNOLElBQUksQ0FBQyxFQUM1Q3RKLGFBQWEsRUFDYm1ELFlBQVksQ0FBQ3lJLElBQ2YsQ0FBQztZQUNENUwsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhLEdBQUcvSixZQUFZLENBQUM2RCxNQUFNO1VBQ2hFOztVQUVBO1VBQ0FuSSxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRVAsZ0JBQWdCLENBQUM7VUFFL0MsSUFDRWIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDc0UsU0FBUyxLQUNuQjdMLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3NFLFNBQVMsQ0FBQ25CLElBQUksSUFDeEIxSyxLQUFLLENBQUN1SCxJQUFJLENBQUNzRSxTQUFTLENBQUNsQixJQUFJLElBQ3pCM0ssS0FBSyxDQUFDdUgsSUFBSSxDQUFDc0UsU0FBUyxDQUFDakIsSUFBSSxDQUFDLEVBQzVCO1lBQ0FySixhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7WUFDckNwTyxHQUFHLENBQUMwTyxXQUFXLENBQUM5TyxLQUFLLENBQUN1SCxJQUFJLENBQUNzRSxTQUFTLENBQUNmLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQ3BEM0ssR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsRUFDYnZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQ2dELGVBQWUsRUFDMUJ4SixXQUNGLENBQUM7WUFDRFgsR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLEVBQUUsRUFBRWdCLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3VFLFVBQVUsRUFBRS9LLFdBQVcsQ0FBQztZQUMxRVEsYUFBYSxJQUFJQyxTQUFTLENBQUNnTixVQUFVO1lBRXJDcE8sR0FBRyxDQUFDcVAsSUFBSSxDQUFDbFAsUUFBUSxHQUFHLENBQUMsRUFBRWdCLGFBQWEsRUFBRWhCLFFBQVEsR0FBRyxFQUFFLEVBQUVnQixhQUFhLENBQUM7WUFDbkVBLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVTtZQUVyQ3BPLEdBQUcsQ0FBQytNLElBQUksQ0FDTjVNLFFBQVEsR0FBRyxFQUFFLEVBQ2JnQixhQUFhLEVBQ2J2QixLQUFLLENBQUN1SCxJQUFJLENBQUNzRSxTQUFTLENBQUNuQixJQUFJLEVBQ3pCM0osV0FDRixDQUFDO1lBQ0RYLEdBQUcsQ0FBQytNLElBQUksQ0FDTjVNLFFBQVEsR0FBRyxFQUFFLEVBQ2JnQixhQUFhLEVBQ2J2QixLQUFLLENBQUN1SCxJQUFJLENBQUNzRSxTQUFTLENBQUNqQixJQUFJLEdBQUcsSUFBSSxHQUFHNUssS0FBSyxDQUFDdUgsSUFBSSxDQUFDc0UsU0FBUyxDQUFDbEIsSUFBSSxFQUM1RDVKLFdBQ0YsQ0FBQztVQUNIO1VBRUEsSUFBSWYsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDSyxxQkFBcUIsRUFBRTtZQUMxQztZQUNBLElBQUlqSyxhQUFhLEdBQUdqQixVQUFVLElBQUlpQixhQUFhLEdBQUcsRUFBRSxHQUFHakIsVUFBVSxFQUFFO2NBQ2pFRixHQUFHLENBQUM4USxPQUFPLENBQUMsQ0FBQztjQUNiM1AsYUFBYSxHQUFHRixzQkFBc0I7WUFDeEM7O1lBRUE7WUFDTXVELFFBQVEsR0FBRyxFQUFFO1lBQ2JDLFNBQVMsR0FBRyxFQUFFO1lBQ2RDLElBQUksR0FBR3pFLFNBQVMsR0FBR3VFLFFBQVEsR0FBRyxFQUFFO1lBQ2hDRyxJQUFJLEdBQUd4RCxhQUFhLEdBQUcsQ0FBQyxFQUU5QjtZQUNBbkIsR0FBRyxDQUFDOFAsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCOVAsR0FBRyxDQUFDcVIsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQy9CclIsR0FBRyxDQUFDc1EsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUNyQnRRLEdBQUcsQ0FBQzJQLElBQUksQ0FBQ2pMLElBQUksRUFBRUMsSUFBSSxFQUFFSCxRQUFRLEVBQUVDLFNBQVMsRUFBRSxJQUFJLENBQUM7O1lBRS9DO1lBQ0F6RSxHQUFHLENBQUMyTyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIzTyxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRU4sY0FBYyxDQUFDO1lBQzdDVixHQUFHLENBQUMrTSxJQUFJLENBQUMsNkJBQTZCLEVBQUVySSxJQUFJLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNEM0UsR0FBRyxDQUFDcVAsSUFBSSxDQUFDM0ssSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFHLEdBQUcsRUFBRUQsSUFBSSxHQUFHRixRQUFRLEdBQUcsQ0FBQyxFQUFFRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQy9EM0UsR0FBRyxDQUFDME8sV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUNuQjFPLEdBQUcsQ0FBQytNLElBQUksTUFBQW9FLE1BQUEsQ0FDRHZSLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRELEtBQUssQ0FBQ1AsSUFBSSxTQUFBMkcsTUFBQSxDQUFNdlIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDUyxRQUFRLE9BQUEyRixNQUFBLENBQUl2UixLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLENBQUNRLGVBQWUsR0FDN0Y3RyxJQUFJLEdBQUcsQ0FBQyxFQUNSQyxJQUFJLEdBQUcsRUFDVCxDQUFDOztZQUVEO1lBQ0EzRSxHQUFHLENBQUNzUixTQUFTLENBQUM7Y0FDWkMsTUFBTSxFQUFFNU0sSUFBSSxHQUFHLEVBQUU7Y0FDakJ5RCxNQUFNLEVBQUU7Z0JBQUVFLElBQUksRUFBRTVELElBQUk7Z0JBQUU4TSxLQUFLLEVBQUU7Y0FBRSxDQUFDO2NBQ2hDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBQU4sTUFBQSxDQUFZdlIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDUSxlQUFlLEVBQUcsQ0FBQztjQUMxRG1HLElBQUksR0FDRixDQUFDLFVBQVUsRUFBRTlSLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRELEtBQUssQ0FBQ0csWUFBWSxDQUFDLEVBQUFpRyxNQUFBLEtBQUFRLG1CQUFBLGFBR3ZDLENBQUFwTixrQkFBQSxHQUFBM0UsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxjQUFBeEcsa0JBQUEsZUFBaEJBLGtCQUFBLENBQWtCNEcsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFdkwsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUVyRyxDQUFDLFdBQVcsRUFBRXZMLEtBQUssQ0FBQ3VILElBQUksQ0FBQzRELEtBQUssQ0FBQ08sa0JBQWtCLENBQUMsRUFDbEQsQ0FDRTtnQkFDRXNHLE9BQU8sV0FBQVQsTUFBQSxDQUFXdlIsS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEQsS0FBSyxDQUFDUSxlQUFlLENBQUU7Z0JBQ3BEc0csU0FBUyxFQUFFO2NBQ2IsQ0FBQyxFQUNEO2dCQUFFRCxPQUFPLEVBQUVoUyxLQUFLLENBQUN1SCxJQUFJLENBQUM0RCxLQUFLLENBQUNFLFNBQVM7Z0JBQUU0RyxTQUFTLEVBQUU7Y0FBTyxDQUFDLENBQzNELEVBQ0Y7Y0FDREMsS0FBSyxFQUFFLE9BQU87Y0FDZEMsVUFBVSxFQUFFO2dCQUNWQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDMUJDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCQyxTQUFTLEVBQUUsR0FBRztnQkFDZHhILFFBQVEsRUFBRSxDQUFDO2dCQUNYeUgsS0FBSyxFQUFFLE9BQU87Z0JBQ2RDLGFBQWEsRUFBRTtjQUNqQixDQUFDO2NBQ0RDLFVBQVUsRUFBRTtnQkFDVk4sU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzFCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEJFLFNBQVMsRUFBRSxHQUFHO2dCQUNkRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEJ2SCxRQUFRLEVBQUUsQ0FBQztnQkFDWDBILGFBQWEsRUFBRTtjQUNqQixDQUFDO2NBQ0RFLFlBQVksRUFBRTtnQkFDWixDQUFDLEVBQUU7a0JBQUVDLFNBQVMsRUFBRSxFQUFFO2tCQUFFQyxNQUFNLEVBQUUsT0FBTztrQkFBRUMsTUFBTSxFQUFFO2dCQUFNLENBQUM7Z0JBQ3BELENBQUMsRUFBRTtrQkFBRUYsU0FBUyxFQUFFLEVBQUU7a0JBQUVDLE1BQU0sRUFBRSxNQUFNO2tCQUFFQyxNQUFNLEVBQUU7Z0JBQU07Y0FDcEQsQ0FBQztjQUNEQyxTQUFTLEVBQUU7Z0JBQ1QsQ0FBQyxFQUFFO2tCQUFFZCxTQUFTLEVBQUU7Z0JBQU87Y0FDekI7WUFDRixDQUFDLENBQUM7WUFDRjFRLGFBQWEsSUFBSXNELFNBQVMsR0FBRyxFQUFFO1VBQ2pDO1VBRUF6RSxHQUFHLENBQUMyTyxZQUFZLENBQUN0TyxVQUFVLENBQUM7VUFDNUJjLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYSxHQUFHLENBQUM7VUFDNUM7VUFDQXJPLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzZNLGFBQWEsQ0FBQzs7VUFFeEM7VUFDQSxJQUFJck8sS0FBSyxDQUFDdUgsSUFBSSxDQUFDMkMsV0FBVyxFQUFFO1lBQzFCOUosR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDOE0sYUFBYSxDQUFDO1lBQ3hDL00sYUFBYSxJQUFJQyxTQUFTLENBQUNnTixVQUFVO1lBQ3JDcE8sR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVOLGNBQWMsQ0FBQztZQUM3Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRSxjQUFjLENBQUM7WUFDM0NBLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUV4Q3JPLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFUCxnQkFBZ0IsQ0FBQztZQUMvQ1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzJDLFdBQVcsQ0FBQztZQUNuRDNJLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVTtVQUN2QztVQUVNeEosT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztZQUFBLElBQUFnTyxZQUFBO1lBQ3BCNVMsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDNk0sYUFBYSxHQUFHLENBQUMsQ0FBQztZQUM1Q2pPLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3RPLFVBQVUsQ0FBQztZQUU1QixJQUFJLEVBQUF1UyxZQUFBLEdBQUFoVCxLQUFLLENBQUN1SCxJQUFJLGNBQUF5TCxZQUFBLHVCQUFWQSxZQUFBLENBQVkxSSxJQUFJLENBQUNuWCxNQUFNLElBQUcsQ0FBQyxFQUFFO2NBQUEsSUFBQThmLGFBQUEsRUFBQUMsa0JBQUE7Y0FDL0IzUixhQUFhLElBQUksQ0FBQztjQUNsQixDQUFBMFIsYUFBQSxHQUFBalQsS0FBSyxDQUFDdUgsSUFBSSxjQUFBMEwsYUFBQSx3QkFBQUMsa0JBQUEsR0FBVkQsYUFBQSxDQUFZM0ksSUFBSSxjQUFBNEksa0JBQUEsdUJBQWhCQSxrQkFBQSxDQUFrQjdmLE9BQU8sQ0FBQyxVQUFDOGYsRUFBRSxFQUFFOUMsS0FBSyxFQUFLO2dCQUN2QyxJQUFNL0YsSUFBSSxHQUFHcksscUJBQXFCLENBQUNrVCxFQUFFLEVBQUU5UyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN0RCxJQUFJa0IsYUFBYSxHQUFHK0ksSUFBSSxDQUFDL0IsTUFBTSxHQUFHakksVUFBVSxFQUFFO2tCQUM1Q0YsR0FBRyxDQUFDOFEsT0FBTyxDQUFDLENBQUM7a0JBQ2IzUCxhQUFhLEdBQUdGLHNCQUFzQjtnQkFDeEM7Z0JBRUEsSUFBSWdQLEtBQUssS0FBSyxDQUFDLEVBQUU7a0JBQ2ZqUSxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRU4sY0FBYyxDQUFDO2tCQUM3Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzBDLFNBQVMsQ0FBQztrQkFDakQ3SixHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRVAsZ0JBQWdCLENBQUM7a0JBQy9DVSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7Z0JBQzFDO2dCQUNBck8sR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRStJLElBQUksQ0FBQzZDLElBQUksQ0FBQztnQkFDdEM1TCxhQUFhLElBQUkrSSxJQUFJLENBQUMvQixNQUFNLEdBQUcsQ0FBQztjQUNsQyxDQUFDLENBQUM7WUFDSjtVQUNGLENBQUM7VUFFRCxJQUFJLEVBQUE1SSxhQUFBLEdBQUFLLEtBQUssQ0FBQ3VILElBQUksY0FBQTVILGFBQUEsd0JBQUFDLGtCQUFBLEdBQVZELGFBQUEsQ0FBWTJLLElBQUksY0FBQTFLLGtCQUFBLHVCQUFoQkEsa0JBQUEsQ0FBa0J6TSxNQUFNLElBQUcsQ0FBQyxFQUFFNlIsT0FBTyxDQUFDLENBQUM7O1VBRTNDO1VBQ0EsSUFBSWhGLEtBQUssQ0FBQ3VILElBQUksQ0FBQ2lELElBQUksRUFBRTtZQUNuQmpKLGFBQWEsSUFBSUMsU0FBUyxDQUFDNk0sYUFBYTtZQUNsQ3BKLFFBQVEsR0FBR2hGLHFCQUFxQixDQUNwQ0QsS0FBSyxDQUFDdUgsSUFBSSxDQUFDaUQsSUFBSSxFQUNmbkssU0FBUyxHQUFHbUIsU0FBUyxDQUFDc0csY0FDeEIsQ0FBQztZQUVELElBQUl2RyxhQUFhLEdBQUcwRCxRQUFRLENBQUNzRCxNQUFNLEdBQUdqSSxVQUFVLEVBQUU7Y0FDaERGLEdBQUcsQ0FBQzhRLE9BQU8sQ0FBQyxDQUFDO2NBQ2IzUCxhQUFhLEdBQUdGLHNCQUFzQjtZQUN4QztZQUNBakIsR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVOLGNBQWMsQ0FBQztZQUM3Q1YsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDNk0sYUFBYSxDQUFDO1lBQ3hDak8sR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRSxNQUFNLENBQUM7WUFDbkNBLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVTtZQUVyQ3BPLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFUCxnQkFBZ0IsQ0FBQztZQUMvQ1QsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDOE0sYUFBYSxDQUFDO1lBQ3hDbE8sR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRTBELFFBQVEsQ0FBQ2tJLElBQUksQ0FBQztZQUMxQzVMLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVSxHQUFHdkosUUFBUSxDQUFDc0QsTUFBTTtVQUN6RDs7VUFFQTtVQUNBLElBQUl2SSxLQUFLLENBQUN1SCxJQUFJLENBQUM0QyxZQUFZLENBQUNoWCxNQUFNLEVBQUU7WUFDbENvTyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7O1lBRXJDOztZQUVBeE8sS0FBSyxDQUFDdUgsSUFBSSxDQUFDNEMsWUFBWSxDQUFDOVcsT0FBTyxDQUFDLFVBQUMwZCxJQUFJLEVBQUVWLEtBQUssRUFBSztjQUMvQztjQUNBLElBQUErQyxxQkFBQSxHQUF5Qm5ULHFCQUFxQixDQUM1QzhRLElBQUksRUFDSjFRLFNBQVMsR0FBR21CLFNBQVMsQ0FBQ3NHLGNBQ3hCLENBQUM7Z0JBSE9xRixJQUFJLEdBQUFpRyxxQkFBQSxDQUFKakcsSUFBSTtnQkFBRTVFLE1BQU0sR0FBQTZLLHFCQUFBLENBQU43SyxNQUFNOztjQUtwQjtjQUNBLElBQUloSCxhQUFhLEdBQUdnSCxNQUFNLEdBQUdqSSxVQUFVLEVBQUU7Z0JBQ3ZDRixHQUFHLENBQUM4USxPQUFPLENBQUMsQ0FBQztnQkFDYjNQLGFBQWEsR0FBR0MsU0FBUyxDQUFDc0csY0FBYyxDQUFDLENBQUM7Y0FDNUM7Y0FFQSxJQUFJdUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZmpRLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzZNLGFBQWEsQ0FBQztnQkFDeENqTyxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRU4sY0FBYyxDQUFDO2dCQUM3Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUNOM0wsU0FBUyxDQUFDOE0sYUFBYSxFQUN2Qi9NLGFBQWEsRUFDYix3QkFDRixDQUFDO2dCQUNEO2dCQUNBQSxhQUFhLElBQUksQ0FBQyxHQUFHQyxTQUFTLENBQUNpTixhQUFhO2dCQUM1Q3JPLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsQ0FBQztnQkFDeENsTyxHQUFHLENBQUN5TyxPQUFPLENBQUN6TixnQkFBZ0IsRUFBRVAsZ0JBQWdCLENBQUM7Y0FDakQ7O2NBRUE7Y0FDQVQsR0FBRyxDQUFDK00sSUFBSSxDQUFDM0wsU0FBUyxDQUFDOE0sYUFBYSxFQUFFL00sYUFBYSxFQUFFNEwsSUFBSSxDQUFDO2NBQ3RENUwsYUFBYSxJQUFJZ0gsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDOztZQUVGO1lBQ0FoSCxhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7VUFDdkM7O1VBRUE7VUFDQSxJQUFJeE8sS0FBSyxDQUFDdUgsSUFBSSxDQUFDNkMsWUFBWSxFQUFFO1lBQzNCaEssR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDOE0sYUFBYSxDQUFDO1lBQ3hDL00sYUFBYSxJQUFJQyxTQUFTLENBQUNnTixVQUFVO1lBQ3JDcE8sR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVOLGNBQWMsQ0FBQztZQUM3Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRSxlQUFlLENBQUM7WUFDNUNBLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUV4Q3JPLEdBQUcsQ0FBQ3lPLE9BQU8sQ0FBQ3pOLGdCQUFnQixFQUFFUCxnQkFBZ0IsQ0FBQztZQUMvQ1QsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VILElBQUksQ0FBQzZDLFlBQVksQ0FBQztZQUNwRDdJLGFBQWEsSUFBSUMsU0FBUyxDQUFDZ04sVUFBVTtVQUN2Qzs7VUFFQTtVQUNBLElBQUl4TyxLQUFLLENBQUN1SCxJQUFJLENBQUM4QyxRQUFRLEVBQUU7WUFDdkI5SSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2dOLFVBQVU7WUFDL0J0SixlQUFlLG9CQUFBcU0sTUFBQSxDQUFvQnZSLEtBQUssQ0FBQzJJLFFBQVEsQ0FBQ0MsSUFBSSxtQkFBQTJJLE1BQUEsQ0FBZ0J2UixLQUFLLENBQUN1SCxJQUFJLENBQUM4QyxRQUFRLENBQUNnSixJQUFJLHdCQUFBOUIsTUFBQSxDQUFxQnZSLEtBQUssQ0FBQ3VILElBQUksQ0FBQzhDLFFBQVEsQ0FBQ2lKLE9BQU87WUFDOUluTyxjQUFjLEdBQUdsRixxQkFBcUIsQ0FDMUNpRixlQUFlLEVBQ2Y3RSxTQUFTLEdBQUcsRUFDZCxDQUFDO1lBRUQsSUFBSWtCLGFBQWEsR0FBRzRELGNBQWMsQ0FBQ29ELE1BQU0sR0FBR2pJLFVBQVUsRUFBRTtjQUN0REYsR0FBRyxDQUFDOFEsT0FBTyxDQUFDLENBQUM7Y0FDYjNQLGFBQWEsR0FBR0MsU0FBUyxDQUFDc0csY0FBYztZQUMxQztZQUNBMUgsR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVOLGNBQWMsQ0FBQztZQUM3Q1YsR0FBRyxDQUFDK00sSUFBSSxDQUFDLEVBQUUsRUFBRTVMLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztZQUM5Q0EsYUFBYSxJQUFJQyxTQUFTLENBQUNpTixhQUFhO1lBRXhDck8sR0FBRyxDQUFDeU8sT0FBTyxDQUFDek4sZ0JBQWdCLEVBQUVQLGdCQUFnQixDQUFDO1lBQy9DVCxHQUFHLENBQUMwTyxXQUFXLENBQUN0TixTQUFTLENBQUM4TSxhQUFhLENBQUM7WUFDeENsTyxHQUFHLENBQUMrTSxJQUFJLENBQUMsRUFBRSxFQUFFNUwsYUFBYSxFQUFFNEQsY0FBYyxDQUFDZ0ksSUFBSSxDQUFDO1lBQ2hENUwsYUFBYSxJQUFJQyxTQUFTLENBQUNnTixVQUFVLEdBQUdySixjQUFjLENBQUNvRCxNQUFNO1VBQy9EO1VBSUEsSUFBSXZJLEtBQUssYUFBTEEsS0FBSyxlQUFMQSxLQUFLLENBQUVtSSxXQUFXLEVBQUU7WUFDdEI7WUFDQTVHLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUN4QyxJQUNFbE4sYUFBYSxHQUFHRCxVQUFVLEdBQUdoQixVQUFVLElBQ3RDaUIsYUFBYSxHQUFHakIsVUFBVSxHQUFHZSxzQkFBc0IsSUFDbERqQixHQUFHLENBQUMwTixnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxFQUM3QjtjQUNBMU4sR0FBRyxDQUFDOFEsT0FBTyxDQUFDLENBQUM7Y0FDYjNQLGFBQWEsR0FBR0Ysc0JBQXNCO1lBQ3hDO1lBQ0ErRCxtQkFBbUIsR0FBR2hGLEdBQUcsQ0FBQzhOLFFBQVEsQ0FBQ0osZ0JBQWdCLENBQUMsQ0FBQztZQUNyRHpJLG1CQUFtQixHQUFHOUQsYUFBYTtZQUNuQ0EsYUFBYSxJQUFJRCxVQUFVO1lBQzNCQyxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7VUFDMUM7O1VBRUE7VUFDQSxLQUFBNU8sYUFBQSxHQUFJRyxLQUFLLENBQUN1SCxJQUFJLGNBQUExSCxhQUFBLGdCQUFBQyxtQkFBQSxHQUFWRCxhQUFBLENBQVkrTSxLQUFLLGNBQUE5TSxtQkFBQSxnQkFBQUMscUJBQUEsR0FBakJELG1CQUFBLENBQW1CbU4sU0FBUyxjQUFBbE4scUJBQUEsZUFBNUJBLHFCQUFBLENBQThCdUksR0FBRyxFQUFFO1lBQ3JDLElBQ0UvRyxhQUFhLElBQ1YsRUFBQStELGFBQUEsR0FBQXRGLEtBQUssQ0FBQ3VILElBQUksY0FBQWpDLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWXNILEtBQUssY0FBQXJILG1CQUFBLHdCQUFBQyxxQkFBQSxHQUFqQkQsbUJBQUEsQ0FBbUIwSCxTQUFTLGNBQUF6SCxxQkFBQSx1QkFBNUJBLHFCQUFBLENBQThCK0MsTUFBTSxLQUFJL0csU0FBUyxDQUFDc0csY0FBYyxDQUFDLEdBQ2xFeEgsVUFBVSxJQUNYaUIsYUFBYSxHQUFHakIsVUFBVSxHQUFHZSxzQkFBc0IsSUFDbERqQixHQUFHLENBQUMwTixnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxFQUM3QjtjQUNBMU4sR0FBRyxDQUFDOFEsT0FBTyxDQUFDLENBQUM7Y0FDYjNQLGFBQWEsR0FBR0Ysc0JBQXNCO1lBQ3hDO1lBQ0FFLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUN4Q3JPLEdBQUcsQ0FBQzRPLFFBQVEsRUFBQXZKLGFBQUEsR0FDVnpGLEtBQUssQ0FBQ3VILElBQUksY0FBQTlCLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWW1ILEtBQUssY0FBQWxILG1CQUFBLHdCQUFBQyxxQkFBQSxHQUFqQkQsbUJBQUEsQ0FBbUJ1SCxTQUFTLGNBQUF0SCxxQkFBQSx1QkFBNUJBLHFCQUFBLENBQThCMkMsR0FBRyxFQUNqQ25ILGtCQUFrQixFQUNsQlosUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsR0FBQXFFLGFBQUEsR0FDYjVGLEtBQUssQ0FBQ3VILElBQUksY0FBQTNCLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWWdILEtBQUssY0FBQS9HLG1CQUFBLHdCQUFBQyxxQkFBQSxHQUFqQkQsbUJBQUEsQ0FBbUJvSCxTQUFTLGNBQUFuSCxxQkFBQSx1QkFBNUJBLHFCQUFBLENBQThCOEIsS0FBSyxHQUFBN0IsYUFBQSxHQUNuQy9GLEtBQUssQ0FBQ3VILElBQUksY0FBQXhCLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWTZHLEtBQUssY0FBQTVHLG1CQUFBLHdCQUFBQyxxQkFBQSxHQUFqQkQsbUJBQUEsQ0FBbUJpSCxTQUFTLGNBQUFoSCxxQkFBQSx1QkFBNUJBLHFCQUFBLENBQThCc0MsTUFDaEMsQ0FBQztZQUNEaEgsYUFBYSxJQUFJQyxTQUFTLENBQUNzRyxjQUFjO1lBRXpDMUgsR0FBRyxDQUFDME8sV0FBVyxDQUFDdE4sU0FBUyxDQUFDNk0sYUFBYSxHQUFHLENBQUMsQ0FBQztZQUM1Q2pPLEdBQUcsQ0FBQzJPLFlBQVksQ0FBQ3RPLFVBQVUsQ0FBQztZQUU1QixLQUFBeUYsYUFBQSxHQUFJbEcsS0FBSyxDQUFDdUgsSUFBSSxjQUFBckIsYUFBQSxnQkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZMEcsS0FBSyxjQUFBekcsbUJBQUEsZUFBakJBLG1CQUFBLENBQW1CNEcsVUFBVSxFQUFFO2NBQ2pDeEwsYUFBYSxJQUFJQyxTQUFTLENBQUNnTixVQUFVO2NBQ3JDcE8sR0FBRyxDQUFDK00sSUFBSSxDQUNONU0sUUFBUSxHQUFHLEVBQUUsRUFDYmdCLGFBQWEsS0FBQWdRLE1BQUEsRUFBQTdLLGFBQUEsR0FDVjFHLEtBQUssQ0FBQ3VILElBQUksY0FBQWIsYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZa0csS0FBSyxjQUFBakcsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQm9HLFVBQVUsUUFDaENoTSxXQUNGLENBQUM7WUFDSDtZQUVBUSxhQUFhLElBQUlDLFNBQVMsQ0FBQ2lOLGFBQWE7WUFDeENyTyxHQUFHLENBQUMrTSxJQUFJLENBQ041TSxRQUFRLEdBQUcsRUFBRSxFQUNiZ0IsYUFBYSxLQUFBZ1EsTUFBQSxFQUFBbkwsYUFBQSxHQUNWcEcsS0FBSyxDQUFDdUgsSUFBSSxjQUFBbkIsYUFBQSx3QkFBQUMsbUJBQUEsR0FBVkQsYUFBQSxDQUFZd0csS0FBSyxjQUFBdkcsbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQjJHLFlBQVksT0FBQXVFLE1BQUEsRUFBQWpMLGFBQUEsR0FBSXRHLEtBQUssQ0FBQ3VILElBQUksY0FBQWpCLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWXNHLEtBQUssY0FBQXJHLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUJzRyxZQUFZLFFBQ3JFOUwsV0FDRixDQUFDO1lBRURRLGFBQWEsSUFBSUMsU0FBUyxDQUFDaU4sYUFBYTtZQUN4Q3JPLEdBQUcsQ0FBQytNLElBQUksQ0FDTjVNLFFBQVEsR0FBRyxFQUFFLEVBQ2JnQixhQUFhLFFBQUFnUSxNQUFBLEVBQUEvSyxhQUFBLEdBQ1B4RyxLQUFLLENBQUN1SCxJQUFJLGNBQUFmLGFBQUEsd0JBQUFDLG1CQUFBLEdBQVZELGFBQUEsQ0FBWW9HLEtBQUssY0FBQW5HLG1CQUFBLHVCQUFqQkEsbUJBQUEsQ0FBbUJxRyxVQUFVLFFBQ25DL0wsV0FDRixDQUFDO1VBQ0g7VUFFTTZGLFFBQVEsR0FBR3hHLEdBQUcsQ0FBQzBOLGdCQUFnQixDQUFDLENBQUMsRUFFdkM7VUFDQTtVQUNBLEtBQVM3YSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUkyVCxRQUFRLEVBQUUzVCxDQUFDLEVBQUUsRUFBRTtZQUNsQ21OLEdBQUcsQ0FBQzBPLFdBQVcsQ0FBQ3ROLFNBQVMsQ0FBQzhNLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDNUNsTyxHQUFHLENBQUMyTyxZQUFZLENBQUNwTyxTQUFTLENBQUM7WUFDM0IsSUFBSVgsS0FBSyxDQUFDb04sVUFBVSxFQUFFO2NBQ3BCaE4sR0FBRyxDQUFDK00sSUFBSSxDQUFDNU0sUUFBUSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFHLEVBQUUsRUFBRVIsS0FBSyxDQUFDa04sTUFBTSxDQUFDQyxJQUFJLEVBQUVsTSxZQUFZLENBQUM7WUFDekU7WUFDQWIsR0FBRyxDQUFDbVQsT0FBTyxDQUFDdGdCLENBQUMsQ0FBQztZQUNkbU4sR0FBRyxDQUFDK00sSUFBSSxDQUNObk4sS0FBSyxDQUFDcU4sU0FBUyxHQUFHLEdBQUcsR0FBR3BhLENBQUMsR0FBRyxLQUFLLEdBQUcyVCxRQUFRLEVBQzVDckcsUUFBUSxHQUFHaUIsU0FBUyxDQUFDc0csY0FBYyxFQUNuQzFILEdBQUcsQ0FBQzhOLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDNUYsTUFBTSxHQUFHLENBQ2pDLENBQUM7VUFDSDtVQUVJMUIsU0FBUyxHQUFHO1lBQ2QyTSxXQUFXLEVBQUVwVCxHQUFHLENBQUMwTixnQkFBZ0IsQ0FBQztVQUNwQyxDQUFDO1VBRUQsSUFBSTlOLEtBQUssQ0FBQ2dJLG9CQUFvQixFQUFFO1lBQzlCbkIsU0FBUyxHQUFBOVQsYUFBQSxDQUFBQSxhQUFBLEtBQ0o4VCxTQUFTO2NBQ1o0TSxjQUFjLEVBQUVyVDtZQUFHLEVBQ3BCO1VBQ0g7VUFFQSxJQUFJSixLQUFLLENBQUMrSCxVQUFVLEtBQUtwVSxVQUFVLENBQUNDLElBQUksRUFBRXdNLEdBQUcsQ0FBQ3NULElBQUksQ0FBQzFULEtBQUssQ0FBQ2lJLFFBQVEsQ0FBQyxDQUFDLEtBQzlELElBQUlqSSxLQUFLLENBQUMrSCxVQUFVLEtBQUtwVSxVQUFVLENBQUNLLElBQUksRUFBRTtZQUN2QzhTLFVBQVUsR0FBRzFHLEdBQUcsQ0FBQ3VULE1BQU0sQ0FBQ2hnQixVQUFVLENBQUNLLElBQUksQ0FBQztZQUM5QzZTLFNBQVMsR0FBQTlULGFBQUEsQ0FBQUEsYUFBQSxLQUNKOFQsU0FBUztjQUNaK00sSUFBSSxFQUFFOU07WUFBVSxFQUNqQjtVQUNILENBQUMsTUFBTSxJQUFJOUcsS0FBSyxDQUFDK0gsVUFBVSxLQUFLcFUsVUFBVSxDQUFDRSxhQUFhLEVBQUU7WUFDeERnVCxTQUFTLEdBQUE5VCxhQUFBLENBQUFBLGFBQUEsS0FDSjhULFNBQVM7Y0FDWmdOLGFBQWEsRUFBRXpULEdBQUcsQ0FBQ3VULE1BQU0sQ0FBQ2hnQixVQUFVLENBQUNFLGFBQWEsRUFBRTtnQkFDbERpZ0IsUUFBUSxFQUFFOVQsS0FBSyxDQUFDaUk7Y0FDbEIsQ0FBQztZQUFDLEVBQ0g7VUFDSCxDQUFDLE1BQU0sSUFBSWpJLEtBQUssQ0FBQytILFVBQVUsS0FBS3BVLFVBQVUsQ0FBQ00sV0FBVyxFQUFFO1lBQ3RENFMsU0FBUyxHQUFBOVQsYUFBQSxDQUFBQSxhQUFBLEtBQ0o4VCxTQUFTO2NBQ1prTixXQUFXLEVBQUUzVCxHQUFHLENBQUN1VCxNQUFNLENBQUNoZ0IsVUFBVSxDQUFDTSxXQUFXO1lBQUMsRUFDaEQ7VUFDSCxDQUFDLE1BQ0NtTSxHQUFHLENBQUN1VCxNQUFNLENBQUMzVCxLQUFLLENBQUMrSCxVQUFVLEVBQUU7WUFDM0IrTCxRQUFRLEVBQUU5VCxLQUFLLENBQUNpSTtVQUNsQixDQUFDLENBQUM7VUFFSnBCLFNBQVMsQ0FBQ21OLE1BQU0sR0FBRztZQUNqQjVQLHlCQUF5QixFQUF6QkEseUJBQXlCO1lBQ3pCQyxzQkFBc0IsRUFBdEJBO1VBQ0YsQ0FBQztVQUVELElBQUlyRSxLQUFLLENBQUNtSSxXQUFXLEVBQUU7WUFDckJ0QixTQUFTLENBQUNvTixXQUFXLEdBQUc7Y0FDdEI3TyxtQkFBbUIsRUFBbkJBLG1CQUFtQjtjQUNuQkMsbUJBQW1CLEVBQW5CQTtZQUNGLENBQUM7VUFDSDtVQUFDLE9BQUE0QixRQUFBLENBQUFpTixNQUFBLFdBRU1yTixTQUFTO1FBQUE7UUFBQTtVQUFBLE9BQUFJLFFBQUEsQ0FBQWtOLElBQUE7TUFBQTtJQUFBLEdBQUExZixPQUFBO0VBQUEsQ0FDakI7RUFBQSxPQUFBSixxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxJQUFBa2hCLFFBQUEsR0FFY2pnQixvQkFBb0I7QUFBQUQsT0FBQSxjQUFBa2dCLFFBQUEiLCJpZ25vcmVMaXN0IjpbXX0=