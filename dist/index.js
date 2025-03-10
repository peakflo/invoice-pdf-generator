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
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, DSC_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, addDesc, noteData, staticVAContent, paymentDetails, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, numPages, i, returnObj, blobOutput;
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
        case 151:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMiRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkcm93IiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkcm93IiwiX3Byb3BzJGRhdGEzNyIsIl9wcm9wcyRkYXRhMzckcm93IiwiX3Byb3BzJGRhdGEzNyRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkcm93IiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkcm93IiwiX3Byb3BzJGRhdGE0MCIsIl9wcm9wcyRkYXRhNDAkcm93IiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkcm93IiwiX3Byb3BzJGRhdGE0MSRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHRvdGFsIiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDgkdG90YWwiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSR0b3RhbCIsIl9wcm9wcyRkYXRhNTAiLCJfcHJvcHMkZGF0YTUwJHRvdGFsIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTEkdG90YWwiLCJfcHJvcHMkZGF0YTUyIiwiX3Byb3BzJGRhdGE1MiR0b3RhbCIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJHRvdGFsIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkdG90YWwiLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRyb3ciLCJfcHJvcHMkZGF0YTU1JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRhbW91bnREIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1OSRhbW91bnREMiIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MyIsIl9wcm9wcyRkYXRhNjMkZVNpZ24iLCJfcHJvcHMkZGF0YTY0IiwiX3Byb3BzJGRhdGE2NCRlU2lnbiIsIl9wcm9wcyRkYXRhNjUiLCJfcHJvcHMkZGF0YTY1JGVTaWduIiwiX3Byb3BzJGRhdGE2NiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24iLCJfcHJvcHMkZGF0YTY2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjgiLCJfcHJvcHMkZGF0YTY4JGVTaWduIiwiX3Byb3BzJGRhdGE2OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OSIsIl9wcm9wcyRkYXRhNjkkZVNpZ24iLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE3MCIsIl9wcm9wcyRkYXRhNzAkZVNpZ24iLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJpc0JyZWFrUGFnZSIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJERUZBVUxUX0NVUlJFTlRfSEVJR0hUIiwiRFNDX0hFSUdIVCIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX2FkZHJlc3NMaW5lIiwiX2FkZHJlc3NMaW5lMiIsIl9hZGRyZXNzTGluZTMiLCJjdXN0b21lck5hbWVIZWlnaHQiLCJjdXN0b21lck5hbWUiLCJsYWJlbEhlaWdodCIsImxhYmVsIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInBkZlRpdGxlIiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiZmluYWxSb3dDb3VudCIsInBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwiLCJpbnZvaWNlVG90YWxMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJjb250ZW50IiwiZm9udFN0eWxlIiwidGhlbWUiLCJoZWFkU3R5bGVzIiwiZmlsbENvbG9yIiwidGV4dENvbG9yIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiYWxpZ24iLCJtaW5DZWxsSGVpZ2h0IiwiYm9keVN0eWxlcyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50Iiwic2V0UGFnZSIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW5MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRwcE5pbGFpTGFpbj86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW5MYWJlbDogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbjogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVUb3RhbDogcHJvcHMuZGF0YT8ucm93MT8uaGlkZVRvdGFsIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzM6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mz8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mz8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGRwcE5pbGFpTGFpbkNvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5kcHBOaWxhaUxhaW5Db252IHx8IFwiXCIsXG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw1OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDYgfHwgXCJcIixcbiAgICAgICAgICBhY2tEYXRlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja0RhdGUgPz8gbnVsbCxcbiAgICAgICAgICBhY2tOdW1iZXI6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrTnVtYmVyID8/IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgaGVpZ2h0LlxuICAvLyBpZiB0cnVlLCB0aGVuIHdlIGJyZWFrIHRoZSBjaGFuZ2UuXG4gIC8vIENoZWNraW5nIHdpdGggREVGQVVMVF9DVVJSRU5UX0hFSUdIVCBiZWNhdXNlIG9mIGN1cnJlbnQgcGFnZSBuZWVkcyB0byBoYXZlIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tLlxuICBjb25zdCBpc0JyZWFrUGFnZSA9IChoZWlnaHQsIHBhZ2VIZWlnaHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuICBjb25zdCBEU0NfSEVJR0hUID0gMzA7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgfVxuXG4gIGlmIChwYXJhbS5wZGZTdWJUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlN1YlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoXG4gICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICBjdXJyZW50SGVpZ2h0LFxuICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgQUxJR05fUklHSFRcbiAgKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIHBkZkNvbmZpZy5maWVsZFRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUxLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMy50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBsZXQgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gY3VzdG9tZXJOYW1lLmhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBsZXQgbGFiZWxIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGNvbnN0IGxhYmVsID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgKHBhZ2VXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGxhYmVsLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBsYWJlbEhlaWdodCA9IGxhYmVsLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKSB7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID4gbGFiZWxIZWlnaHQgPyBjdXN0b21lck5hbWVIZWlnaHQgOiBsYWJlbEhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgY29uc3QgcGRmVGl0bGUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhPy5wZGZUaXRsZSxcbiAgICAgIChwYWdlV2lkdGggKiAzKSAvIDRcbiAgICApO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBkZlRpdGxlLnRleHQsIEFMSUdOX0xFRlQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmVGl0bGUuaGVpZ2h0IC0gNDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID1cbiAgICAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGxldCBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gMDtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBjb25zdCByb3d0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zW2luZGV4XS53aWR0aCAtIDNcbiAgICAgICk7XG4gICAgICBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gTWF0aC5tYXgobWF4VGV4dEhlaWdodEhlYWRlciwgcm93dGV4dC5oZWlnaHQpO1xuICAgICAgZG9jLnRleHQocm93dGV4dC50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhUZXh0SGVpZ2h0SGVhZGVyICsgMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTtcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLm5vdGUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIC8vIFdyaXRlIHRoZSBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIiBsYWJlbFxuXG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0ZXh0IGhlaWdodFxuICAgICAgY29uc3QgeyB0ZXh0LCBoZWlnaHQgfSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgaXRlbSxcbiAgICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgICApO1xuXG4gICAgICAvLyBDaGVjayBpZiBhZGRpbmcgdGhpcyBpdGVtIHdpbGwgZXhjZWVkIHRoZSBwYWdlIGhlaWdodFxuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBoZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7IC8vIFJlc2V0IHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSW5jcmVtZW50IGhlaWdodCBmb3IgdGhlIG5leHQgbGluZVxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgdGV4dFxuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHRleHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBoZWlnaHQ7IC8vIEluY3JlbWVudCB0aGUgY3VycmVudCBoZWlnaHRcbiAgICB9KTtcblxuICAgIC8vIEFkZCBzcGFjaW5nIGFmdGVyIHRoZSBzZWN0aW9uXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBsZXQgc2lnbmF0dXJlUGFnZU51bWJlcjtcbiAgbGV0IHNpZ25hdHVyZUxpbmVIZWlnaHQ7XG4gIGlmIChwYXJhbT8uaXNQZGZGb3JEc2MpIHtcbiAgICAvLyBQREYgaXMgZm9yIERpZ2l0YWwgU2lnbmF0dXJlXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgRFNDX0hFSUdIVCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gRFNDX0hFSUdIVDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgK1xuICAgICAgICAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBjb25zdCBudW1QYWdlcyA9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7XG5cbiAgLy8gQWRkIFBhZ2UgTnVtYmVyIGF0IGJvdHRvbVxuICAvLyBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcGFnZSBhbmQgYWRkcyB0aGUgcGFnZSBudW1iZXIgYXQgYm90dG9tXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVBhZ2VzOyBpKyspIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIH1cbiAgICBkb2Muc2V0UGFnZShpKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBudW1QYWdlcyxcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybk9iai5lc3RhbXAgPSB7XG4gICAgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCxcbiAgICBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0LFxuICB9O1xuXG4gIGlmIChwYXJhbS5pc1BkZkZvckRzYykge1xuICAgIHJldHVybk9iai5kaWdpdGFsU2lnbiA9IHtcbiAgICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIsXG4gICAgICBzaWduYXR1cmVMaW5lSGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxXQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsc0JBQUEsRUFBQUMsVUFBQSxFQUFBQyxhQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLFlBQUEsRUFBQUMsV0FBQSxFQUFBQyxLQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsb0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsaUJBQUEsRUFBQUMsUUFBQSxFQUFBQyxZQUFBLEVBQUFDLFFBQUEsRUFBQUMsT0FBQSxFQTZuQjlCQyxvQkFBb0IsRUFBQUMscUJBQUEsRUFBQUMsbUJBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGFBQUEsRUFBQUMseUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxPQUFBLEVBQUFDLGNBQUEsRUFBQUMsSUFBQSxFQUFBQyxZQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxJQUFBLEVBQUFDLElBQUEsRUFBQUMsT0FBQSxFQUFBQyxRQUFBLEVBQUFDLGVBQUEsRUFBQUMsY0FBQSxFQUFBQyxtQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFD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