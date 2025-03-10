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
          if (param.data.dppNilaiLainLabel && param.data.dppNilaiLain) {
            doc.text(docWidth - 50, currentHeight += pdfConfig.lineHeight, param.data.dppNilaiLainLabel, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight += pdfConfig.lineHeight, param.data.currency + "  " + param.data.dppNilaiLain.toLocaleString(), ALIGN_RIGHT);
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
              body: [["Subtotal", param.data.total.subTotalConv],
              // Only include Dpp Nilai Lain if the value exists, with adjusted spacing
              ["Dpp Nilai Lain", param.data.total.dppNilaiLainConv], ["Total Tax", param.data.total.totalTaxAmountConv], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMiRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkcm93IiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkcm93IiwiX3Byb3BzJGRhdGEzNyIsIl9wcm9wcyRkYXRhMzckcm93IiwiX3Byb3BzJGRhdGEzNyRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkcm93IiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkcm93IiwiX3Byb3BzJGRhdGE0MCIsIl9wcm9wcyRkYXRhNDAkcm93IiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkcm93IiwiX3Byb3BzJGRhdGE0MSRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHRvdGFsIiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDgkdG90YWwiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSR0b3RhbCIsIl9wcm9wcyRkYXRhNTAiLCJfcHJvcHMkZGF0YTUwJHRvdGFsIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTEkdG90YWwiLCJfcHJvcHMkZGF0YTUyIiwiX3Byb3BzJGRhdGE1MiR0b3RhbCIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJHRvdGFsIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkdG90YWwiLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRyb3ciLCJfcHJvcHMkZGF0YTU1JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRhbW91bnREIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1OSRhbW91bnREMiIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MyIsIl9wcm9wcyRkYXRhNjMkZVNpZ24iLCJfcHJvcHMkZGF0YTY0IiwiX3Byb3BzJGRhdGE2NCRlU2lnbiIsIl9wcm9wcyRkYXRhNjUiLCJfcHJvcHMkZGF0YTY1JGVTaWduIiwiX3Byb3BzJGRhdGE2NiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24iLCJfcHJvcHMkZGF0YTY2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjgiLCJfcHJvcHMkZGF0YTY4JGVTaWduIiwiX3Byb3BzJGRhdGE2OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OSIsIl9wcm9wcyRkYXRhNjkkZVNpZ24iLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE3MCIsIl9wcm9wcyRkYXRhNzAkZVNpZ24iLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJpc0JyZWFrUGFnZSIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJERUZBVUxUX0NVUlJFTlRfSEVJR0hUIiwiRFNDX0hFSUdIVCIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX2FkZHJlc3NMaW5lIiwiX2FkZHJlc3NMaW5lMiIsIl9hZGRyZXNzTGluZTMiLCJjdXN0b21lck5hbWVIZWlnaHQiLCJjdXN0b21lck5hbWUiLCJsYWJlbEhlaWdodCIsImxhYmVsIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInBkZlRpdGxlIiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiZmluYWxSb3dDb3VudCIsInBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwiLCJpbnZvaWNlVG90YWxMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJjb250ZW50IiwiZm9udFN0eWxlIiwidGhlbWUiLCJoZWFkU3R5bGVzIiwiZmlsbENvbG9yIiwidGV4dENvbG9yIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiYWxpZ24iLCJtaW5DZWxsSGVpZ2h0IiwiYm9keVN0eWxlcyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50Iiwic2V0UGFnZSIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW5MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRwcE5pbGFpTGFpbj86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW5MYWJlbDogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbjogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVUb3RhbDogcHJvcHMuZGF0YT8ucm93MT8uaGlkZVRvdGFsIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzM6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mz8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mz8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGRwcE5pbGFpTGFpbkNvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5kcHBOaWxhaUxhaW5Db252IHx8IFwiXCIsXG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw1OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDYgfHwgXCJcIixcbiAgICAgICAgICBhY2tEYXRlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja0RhdGUgPz8gbnVsbCxcbiAgICAgICAgICBhY2tOdW1iZXI6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrTnVtYmVyID8/IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgaGVpZ2h0LlxuICAvLyBpZiB0cnVlLCB0aGVuIHdlIGJyZWFrIHRoZSBjaGFuZ2UuXG4gIC8vIENoZWNraW5nIHdpdGggREVGQVVMVF9DVVJSRU5UX0hFSUdIVCBiZWNhdXNlIG9mIGN1cnJlbnQgcGFnZSBuZWVkcyB0byBoYXZlIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tLlxuICBjb25zdCBpc0JyZWFrUGFnZSA9IChoZWlnaHQsIHBhZ2VIZWlnaHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuICBjb25zdCBEU0NfSEVJR0hUID0gMzA7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgfVxuXG4gIGlmIChwYXJhbS5wZGZTdWJUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlN1YlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoXG4gICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICBjdXJyZW50SGVpZ2h0LFxuICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgQUxJR05fUklHSFRcbiAgKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIHBkZkNvbmZpZy5maWVsZFRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUxLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMy50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBsZXQgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gY3VzdG9tZXJOYW1lLmhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBsZXQgbGFiZWxIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGNvbnN0IGxhYmVsID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgKHBhZ2VXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGxhYmVsLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBsYWJlbEhlaWdodCA9IGxhYmVsLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKSB7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID4gbGFiZWxIZWlnaHQgPyBjdXN0b21lck5hbWVIZWlnaHQgOiBsYWJlbEhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgY29uc3QgcGRmVGl0bGUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhPy5wZGZUaXRsZSxcbiAgICAgIChwYWdlV2lkdGggKiAzKSAvIDRcbiAgICApO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBkZlRpdGxlLnRleHQsIEFMSUdOX0xFRlQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmVGl0bGUuaGVpZ2h0IC0gNDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID1cbiAgICAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGxldCBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gMDtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBjb25zdCByb3d0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zW2luZGV4XS53aWR0aCAtIDNcbiAgICAgICk7XG4gICAgICBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gTWF0aC5tYXgobWF4VGV4dEhlaWdodEhlYWRlciwgcm93dGV4dC5oZWlnaHQpO1xuICAgICAgZG9jLnRleHQocm93dGV4dC50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhUZXh0SGVpZ2h0SGVhZGVyICsgMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTtcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbkxhYmVsICYmIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSBwYWdlV2lkdGggLSBib3hXaWR0aCAtIDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgNTtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAgIFxuICAgICAgICAvLyBPbmx5IGluY2x1ZGUgRHBwIE5pbGFpIExhaW4gaWYgdGhlIHZhbHVlIGV4aXN0cywgd2l0aCBhZGp1c3RlZCBzcGFjaW5nXG4gICAgICAgIFtcIkRwcCBOaWxhaSBMYWluXCIsIHBhcmFtLmRhdGEudG90YWwuZHBwTmlsYWlMYWluQ29udl0sXG4gICAgICAgIFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYm94SGVpZ2h0ICsgMzA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubm90ZSxcbiAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgLy8gV3JpdGUgdGhlIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiIGxhYmVsXG5cbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRleHQgaGVpZ2h0XG4gICAgICBjb25zdCB7IHRleHQsIGhlaWdodCB9ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBpdGVtLFxuICAgICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICAgICk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGFkZGluZyB0aGlzIGl0ZW0gd2lsbCBleGNlZWQgdGhlIHBhZ2UgaGVpZ2h0XG4gICAgICBpZiAoY3VycmVudEhlaWdodCArIGhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTsgLy8gUmVzZXQgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIlxuICAgICAgICApO1xuICAgICAgICAvLyBJbmNyZW1lbnQgaGVpZ2h0IGZvciB0aGUgbmV4dCBsaW5lXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSB0ZXh0XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgdGV4dCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGhlaWdodDsgLy8gSW5jcmVtZW50IHRoZSBjdXJyZW50IGhlaWdodFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIHNwYWNpbmcgYWZ0ZXIgdGhlIHNlY3Rpb25cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkF1dGhvcmlzZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gO1xuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgc3RhdGljVkFDb250ZW50LFxuICAgICAgcGFnZVdpZHRoIC0gNDBcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGxldCBzaWduYXR1cmVQYWdlTnVtYmVyO1xuICBsZXQgc2lnbmF0dXJlTGluZUhlaWdodDtcbiAgaWYgKHBhcmFtPy5pc1BkZkZvckRzYykge1xuICAgIC8vIFBERiBpcyBmb3IgRGlnaXRhbCBTaWduYXR1cmVcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyBEU0NfSEVJR0hUID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgc2lnbmF0dXJlUGFnZU51bWJlciA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gICAgc2lnbmF0dXJlTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBEU0NfSEVJR0hUO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArXG4gICAgICAgIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG51bVBhZ2VzID0gZG9jLmdldE51bWJlck9mUGFnZXMoKTtcblxuICAvLyBBZGQgUGFnZSBOdW1iZXIgYXQgYm90dG9tXG4gIC8vIEl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwYWdlIGFuZCBhZGRzIHRoZSBwYWdlIG51bWJlciBhdCBib3R0b21cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtUGFnZXM7IGkrKykge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgfVxuICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIG51bVBhZ2VzLFxuICAgICAgZG9jV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuT2JqLmVzdGFtcCA9IHtcbiAgICBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsLFxuICAgIGludm9pY2VUb3RhbExpbmVIZWlnaHQsXG4gIH07XG5cbiAgaWYgKHBhcmFtLmlzUGRmRm9yRHNjKSB7XG4gICAgcmV0dXJuT2JqLmRpZ2l0YWxTaWduID0ge1xuICAgICAgc2lnbmF0dXJlUGFnZU51bWJlcixcbiAgICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUgsT0FBQTtBQUFxQyxTQUFBTSxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFBRyxNQUFBLENBQUFDLHFCQUFBLFFBQUFDLE9BQUEsR0FBQUYsTUFBQSxDQUFBQyxxQkFBQSxDQUFBSixNQUFBLEdBQUFDLGNBQUEsS0FBQUksT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBSixNQUFBLENBQUFLLHdCQUFBLENBQUFSLE1BQUEsRUFBQU8sR0FBQSxFQUFBRSxVQUFBLE9BQUFQLElBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULElBQUEsRUFBQUcsT0FBQSxZQUFBSCxJQUFBO0FBQUEsU0FBQVUsY0FBQUMsTUFBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFGLENBQUEsVUFBQUcsTUFBQSxXQUFBRixTQUFBLENBQUFELENBQUEsSUFBQUMsU0FBQSxDQUFBRCxDQUFBLFFBQUFBLENBQUEsT0FBQWYsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsT0FBQUMsT0FBQSxXQUFBQyxHQUFBLFFBQUFDLGdCQUFBLGFBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRixNQUFBLENBQUFFLEdBQUEsU0FBQWhCLE1BQUEsQ0FBQWtCLHlCQUFBLEdBQUFsQixNQUFBLENBQUFtQixnQkFBQSxDQUFBVCxNQUFBLEVBQUFWLE1BQUEsQ0FBQWtCLHlCQUFBLENBQUFKLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBaEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixNQUFBLEVBQUFNLEdBQUEsRUFBQWhCLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVMsTUFBQSxFQUFBRSxHQUFBLGlCQUFBTixNQUFBO0FBQ3JDLElBQU1XLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7QUFBQ0MsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRKQSxTQXVKZVEsb0JBQW9CQSxDQUFBQyxFQUFBO0VBQUEsT0FBQUMscUJBQUEsQ0FBQXZCLEtBQUEsT0FBQUksU0FBQTtBQUFBO0FBQUEsU0FBQW1CLHNCQUFBO0VBQUFBLHFCQUFBLE9BQUFDLGtCQUFBLDJCQUFBQyxZQUFBLFlBQUFDLElBQUEsQ0FBbkMsU0FBQUMsUUFBb0NDLEtBQUs7SUFBQSxJQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEs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LEdBQUd6RyxHQUFHLENBQUNxVCxNQUFNLENBQUM5ZixVQUFVLENBQUNLLElBQUksQ0FBQztZQUM5QzRTLFNBQVMsR0FBQTdULGFBQUEsQ0FBQUEsYUFBQSxLQUNKNlQsU0FBUztjQUNaOE0sSUFBSSxFQUFFN007WUFBVSxFQUNqQjtVQUNILENBQUMsTUFBTSxJQUFJN0csS0FBSyxDQUFDOEgsVUFBVSxLQUFLblUsVUFBVSxDQUFDRSxhQUFhLEVBQUU7WUFDeEQrUyxTQUFTLEdBQUE3VCxhQUFBLENBQUFBLGFBQUEsS0FDSjZULFNBQVM7Y0FDWitNLGFBQWEsRUFBRXZULEdBQUcsQ0FBQ3FULE1BQU0sQ0FBQzlmLFVBQVUsQ0FBQ0UsYUFBYSxFQUFFO2dCQUNsRCtmLFFBQVEsRUFBRTVULEtBQUssQ0FBQ2dJO2NBQ2xCLENBQUM7WUFBQyxFQUNIO1VBQ0gsQ0FBQyxNQUFNLElBQUloSSxLQUFLLENBQUM4SCxVQUFVLEtBQUtuVSxVQUFVLENBQUNNLFdBQVcsRUFBRTtZQUN0RDJTLFNBQVMsR0FBQTdULGFBQUEsQ0FBQUEsYUFBQSxLQUNKNlQsU0FBUztjQUNaaU4sV0FBVyxFQUFFelQsR0FBRyxDQUFDcVQsTUFBTSxDQUFDOWYsVUFBVSxDQUFDTSxXQUFXO1lBQUMsRUFDaEQ7VUFDSCxDQUFDLE1BQ0NtTSxHQUFHLENBQUNxVCxNQUFNLENBQUN6VCxLQUFLLENBQUM4SCxVQUFVLEVBQUU7WUFDM0I4TCxRQUFRLEVBQUU1VCxLQUFLLENBQUNnSTtVQUNsQixDQUFDLENBQUM7VUFFSnBCLFNBQVMsQ0FBQ2tOLE1BQU0sR0FBRztZQUNqQjFQLHlCQUF5QixFQUF6QkEseUJBQXlCO1lBQ3pCQyxzQkFBc0IsRUFBdEJBO1VBQ0YsQ0FBQztVQUVELElBQUlyRSxLQUFLLENBQUNrSSxXQUFXLEVBQUU7WUFDckJ0QixTQUFTLENBQUNtTixXQUFXLEdBQUc7Y0FDdEI1TyxtQkFBbUIsRUFBbkJBLG1CQUFtQjtjQUNuQkMsbUJBQW1CLEVBQW5CQTtZQUNGLENBQUM7VUFDSDtVQUFDLE9BQUE0QixRQUFBLENBQUFnTixNQUFBLFdBRU1wTixTQUFTO1FBQUE7UUFBQTtVQUFBLE9BQUFJLFFBQUEsQ0FBQWlOLElBQUE7TUFBQTtJQUFBLEdBQUF4ZixPQUFBO0VBQUEsQ0FDakI7RUFBQSxPQUFBSixxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxJQUFBZ2hCLFFBQUEsR0FFYy9mLG9CQUFvQjtBQUFBRCxPQUFBLGNBQUFnZ0IsUUFBQSIsImlnbm9yZUxpc3QiOltdfQ==