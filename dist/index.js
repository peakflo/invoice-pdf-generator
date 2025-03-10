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
                minCellHeight: 6,
                cellPadding: 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMiRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkcm93IiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkcm93IiwiX3Byb3BzJGRhdGEzNyIsIl9wcm9wcyRkYXRhMzckcm93IiwiX3Byb3BzJGRhdGEzNyRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkcm93IiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkcm93IiwiX3Byb3BzJGRhdGE0MCIsIl9wcm9wcyRkYXRhNDAkcm93IiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkcm93IiwiX3Byb3BzJGRhdGE0MSRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHRvdGFsIiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDgkdG90YWwiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSR0b3RhbCIsIl9wcm9wcyRkYXRhNTAiLCJfcHJvcHMkZGF0YTUwJHRvdGFsIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTEkdG90YWwiLCJfcHJvcHMkZGF0YTUyIiwiX3Byb3BzJGRhdGE1MiR0b3RhbCIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJHRvdGFsIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkdG90YWwiLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRyb3ciLCJfcHJvcHMkZGF0YTU1JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRhbW91bnREIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1OSRhbW91bnREMiIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MyIsIl9wcm9wcyRkYXRhNjMkZVNpZ24iLCJfcHJvcHMkZGF0YTY0IiwiX3Byb3BzJGRhdGE2NCRlU2lnbiIsIl9wcm9wcyRkYXRhNjUiLCJfcHJvcHMkZGF0YTY1JGVTaWduIiwiX3Byb3BzJGRhdGE2NiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24iLCJfcHJvcHMkZGF0YTY2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjgiLCJfcHJvcHMkZGF0YTY4JGVTaWduIiwiX3Byb3BzJGRhdGE2OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OSIsIl9wcm9wcyRkYXRhNjkkZVNpZ24iLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE3MCIsIl9wcm9wcyRkYXRhNzAkZVNpZ24iLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJpc0JyZWFrUGFnZSIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJERUZBVUxUX0NVUlJFTlRfSEVJR0hUIiwiRFNDX0hFSUdIVCIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX2FkZHJlc3NMaW5lIiwiX2FkZHJlc3NMaW5lMiIsIl9hZGRyZXNzTGluZTMiLCJjdXN0b21lck5hbWVIZWlnaHQiLCJjdXN0b21lck5hbWUiLCJsYWJlbEhlaWdodCIsImxhYmVsIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInBkZlRpdGxlIiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiZmluYWxSb3dDb3VudCIsInBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwiLCJpbnZvaWNlVG90YWxMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsIl9wYXJhbSRkYXRhJHRvdGFsMyIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJfdG9Db25zdW1hYmxlQXJyYXkyIiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjZWxsUGFkZGluZyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50Iiwic2V0UGFnZSIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW5MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRwcE5pbGFpTGFpbj86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW5MYWJlbDogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbjogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVUb3RhbDogcHJvcHMuZGF0YT8ucm93MT8uaGlkZVRvdGFsIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzM6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mz8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mz8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGRwcE5pbGFpTGFpbkNvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5kcHBOaWxhaUxhaW5Db252IHx8IFwiXCIsXG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw1OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDYgfHwgXCJcIixcbiAgICAgICAgICBhY2tEYXRlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja0RhdGUgPz8gbnVsbCxcbiAgICAgICAgICBhY2tOdW1iZXI6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrTnVtYmVyID8/IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgaGVpZ2h0LlxuICAvLyBpZiB0cnVlLCB0aGVuIHdlIGJyZWFrIHRoZSBjaGFuZ2UuXG4gIC8vIENoZWNraW5nIHdpdGggREVGQVVMVF9DVVJSRU5UX0hFSUdIVCBiZWNhdXNlIG9mIGN1cnJlbnQgcGFnZSBuZWVkcyB0byBoYXZlIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tLlxuICBjb25zdCBpc0JyZWFrUGFnZSA9IChoZWlnaHQsIHBhZ2VIZWlnaHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuICBjb25zdCBEU0NfSEVJR0hUID0gMzA7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgfVxuXG4gIGlmIChwYXJhbS5wZGZTdWJUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlN1YlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoXG4gICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICBjdXJyZW50SGVpZ2h0LFxuICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgQUxJR05fUklHSFRcbiAgKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIHBkZkNvbmZpZy5maWVsZFRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUxLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMy50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBsZXQgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gY3VzdG9tZXJOYW1lLmhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBsZXQgbGFiZWxIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGNvbnN0IGxhYmVsID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgKHBhZ2VXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGxhYmVsLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBsYWJlbEhlaWdodCA9IGxhYmVsLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKSB7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID4gbGFiZWxIZWlnaHQgPyBjdXN0b21lck5hbWVIZWlnaHQgOiBsYWJlbEhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgY29uc3QgcGRmVGl0bGUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhPy5wZGZUaXRsZSxcbiAgICAgIChwYWdlV2lkdGggKiAzKSAvIDRcbiAgICApO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBkZlRpdGxlLnRleHQsIEFMSUdOX0xFRlQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmVGl0bGUuaGVpZ2h0IC0gNDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID1cbiAgICAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGxldCBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gMDtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBjb25zdCByb3d0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zW2luZGV4XS53aWR0aCAtIDNcbiAgICAgICk7XG4gICAgICBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gTWF0aC5tYXgobWF4VGV4dEhlaWdodEhlYWRlciwgcm93dGV4dC5oZWlnaHQpO1xuICAgICAgZG9jLnRleHQocm93dGV4dC50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhUZXh0SGVpZ2h0SGVhZGVyICsgMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTtcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbkxhYmVsICYmIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbi50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGlmICghcGFyYW0uZGF0YS5yb3cxLmhpZGVUb3RhbCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgYCR7dGF4Lm5hbWV9OmAsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgdGF4LmFtb3VudCxcbiAgICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gdGF4RGF0YS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIC8vZW5kIHJvdzFcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzMgJiZcbiAgICAocGFyYW0uZGF0YS5yb3czLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3czLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3czLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3czLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5yb3czLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzMuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gLTEgPSBiZWNhdXNlIHRoZSBmeCByYXRlIGJveCBpcyBvbmUgcm93IGxvd2VyXG4gIC8vIDUgPSBlYWNoIHJvdyBoZWlnaHRcbiAgY29uc3QgZmluYWxSb3dIZWlnaHQgPSAoZmluYWxSb3dDb3VudCAtIDEpICogNTtcblxuICAvLyBBZGQgYSBsaW5lIGhlaWdodCBhZnRlciBjb252ZXJ0aW9uIHJhdGUgdGFibGUgYW5kIHRvdGFsc1xuICAvLyAzNSA9IGhlaWdodCBvZiBmeCByYXRlIGJveFxuICBpZiAocGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYgJiYgZmluYWxSb3dIZWlnaHQgPCAzNSkge1xuICAgIGNvbnN0IGRpZmYgPSAzNSAtIGZpbmFsUm93SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBkaWZmO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gIH1cblxuICAvLyBUb3RhbCBpbiB3b3Jkc1xuICBpZiAocGFyYW0uZGF0YS50b3RhbD8uY29sNCAmJiBwYXJhbS5kYXRhLnRvdGFsPy5jb2w1KSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gcGFnZVdpZHRoIC0gYm94V2lkdGggLSAxMDtcbiAgICBjb25zdCBib3hZID0gY3VycmVudEhlaWdodCArIDU7XG5cbiAgICAvLyBEcmF3IHRoZSBib3hcbiAgICBkb2Muc2V0RHJhd0NvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjIpO1xuICAgIGRvYy5yZWN0KGJveFgsIGJveFksIGJveFdpZHRoLCBib3hIZWlnaHQsIFwiRkRcIik7XG5cbiAgICAvLyBBZGQgdGV4dCB0byB0aGUgYm94XG4gICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXCJGb3IgR1NUIHJlcG9ydGluZyBwdXJwb3NlczpcIiwgYm94WCArIDUsIGJveFkgKyA1KTtcbiAgICBkb2MubGluZShib3hYICsgNSwgYm94WSArIDcuNSwgYm94WCArIGJveFdpZHRoIC0gNSwgYm94WSArIDcuNSk7XG4gICAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGAxICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfSA9ICR7cGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZX0gJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgYm94WCArIDUsXG4gICAgICBib3hZICsgMTNcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSB0YWJsZVxuICAgIGRvYy5hdXRvVGFibGUoe1xuICAgICAgc3RhcnRZOiBib3hZICsgMTgsXG4gICAgICBtYXJnaW46IHsgbGVmdDogYm94WCwgcmlnaHQ6IDAgfSxcbiAgICAgIGhlYWQ6IFtbXCJcIiwgYEFtb3VudCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWBdXSxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAgW1wiU3VidG90YWxcIiwgcGFyYW0uZGF0YS50b3RhbC5zdWJUb3RhbENvbnZdLFxuICAgICAgICBcbiAgICAgICAgLy8gT25seSBpbmNsdWRlIERwcCBOaWxhaSBMYWluIGlmIHRoZSB2YWx1ZSBleGlzdHMsIHdpdGggYWRqdXN0ZWQgc3BhY2luZ1xuICAgICAgICAuLi4ocGFyYW0uZGF0YS50b3RhbD8uZHBwTmlsYWlMYWluQ29udiA/IFtbXCJEcHAgTmlsYWkgTGFpblwiLCBwYXJhbS5kYXRhLnRvdGFsLmRwcE5pbGFpTGFpbkNvbnZdXSA6IFtdKSxcbiAgICAgICAgXG4gICAgICAgIFtcIlRvdGFsIFRheFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsVGF4QW1vdW50Q29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDYsXG4gICAgICAgIGNlbGxQYWRkaW5nOiAyXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBib3hIZWlnaHQgKyAzMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5ub3RlLFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBXcml0ZSB0aGUgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIgbGFiZWxcblxuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGV4dCBoZWlnaHRcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICAgKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYWRkaW5nIHRoaXMgaXRlbSB3aWxsIGV4Y2VlZCB0aGUgcGFnZSBoZWlnaHRcbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplOyAvLyBSZXNldCB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICk7XG4gICAgICAgIC8vIEluY3JlbWVudCBoZWlnaHQgZm9yIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIHRleHRcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0OyAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgaGVpZ2h0XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3BhY2luZyBhZnRlciB0aGUgc2VjdGlvblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHNpZ25hdHVyZVBhZ2VOdW1iZXI7XG4gIGxldCBzaWduYXR1cmVMaW5lSGVpZ2h0O1xuICBpZiAocGFyYW0/LmlzUGRmRm9yRHNjKSB7XG4gICAgLy8gUERGIGlzIGZvciBEaWdpdGFsIFNpZ25hdHVyZVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIERTQ19IRUlHSFQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBzaWduYXR1cmVQYWdlTnVtYmVyID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgICBzaWduYXR1cmVMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IERTQ19IRUlHSFQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICtcbiAgICAgICAgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbnVtUGFnZXMgPSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuXG4gIC8vIEFkZCBQYWdlIE51bWJlciBhdCBib3R0b21cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHBhZ2UgYW5kIGFkZHMgdGhlIHBhZ2UgbnVtYmVyIGF0IGJvdHRvbVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1QYWdlczsgaSsrKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICB9XG4gICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgbnVtUGFnZXMsXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUgsT0FBQTtBQUFxQyxTQUFBTSxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFBRyxNQUFBLENBQUFDLHFCQUFBLFFBQUFDLE9BQUEsR0FBQUYsTUFBQSxDQUFBQyxxQkFBQSxDQUFBSixNQUFBLEdBQUFDLGNBQUEsS0FBQUksT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBSixNQUFBLENBQUFLLHdCQUFBLENBQUFSLE1BQUEsRUFBQU8sR0FBQSxFQUFBRSxVQUFBLE9BQUFQLElBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULElBQUEsRUFBQUcsT0FBQSxZQUFBSCxJQUFBO0FBQUEsU0FBQVUsY0FBQUMsTUFBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFGLENBQUEsVUFBQUcsTUFBQSxXQUFBRixTQUFBLENBQUFELENBQUEsSUFBQUMsU0FBQSxDQUFBRCxDQUFBLFFBQUFBLENBQUEsT0FBQWYsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsT0FBQUMsT0FBQSxXQUFBQyxHQUFBLFFBQUFDLGdCQUFBLGFBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRixNQUFBLENBQUFFLEdBQUEsU0FBQWhCLE1BQUEsQ0FBQWtCLHlCQUFBLEdBQUFsQixNQUFBLENBQUFtQixnQkFBQSxDQUFBVCxNQUFBLEVBQUFWLE1BQUEsQ0FBQWtCLHlCQUFBLENBQUFKLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBaEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixNQUFBLEVBQUFNLEdBQUEsRUFBQWhCLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVMsTUFBQSxFQUFBRSxHQUFBLGlCQUFBTixNQUFBO0FBQ3JDLElBQU1XLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7QUFBQ0MsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRKQSxTQXVKZVEsb0JBQW9CQSxDQUFBQyxFQUFBO0VBQUEsT0FBQUMscUJBQUEsQ0FBQXZCLEtBQUEsT0FBQUksU0FBQTtBQUFBO0FBQUEsU0FBQW1CLHNCQUFBO0VBQUFBLHFCQUFBLE9BQUFDLGtCQUFBLDJCQUFBQyxZQUFBLFlBQUFDLElBQUEsQ0FBbkMsU0FBQUMsUUFBb0NDLEtBQUs7SUFBQSxJQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFB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