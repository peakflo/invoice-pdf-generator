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
              body: [["Subtotal", param.data.total.subTotalConv], ["Dpp Nilai Lain", param.data.total.dppNilaiLainConv], ["Total Tax", param.data.total.totalTaxAmountConv], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMiRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkcm93IiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkcm93IiwiX3Byb3BzJGRhdGEzNyIsIl9wcm9wcyRkYXRhMzckcm93IiwiX3Byb3BzJGRhdGEzNyRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkcm93IiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkcm93IiwiX3Byb3BzJGRhdGE0MCIsIl9wcm9wcyRkYXRhNDAkcm93IiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkcm93IiwiX3Byb3BzJGRhdGE0MSRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHRvdGFsIiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDgkdG90YWwiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSR0b3RhbCIsIl9wcm9wcyRkYXRhNTAiLCJfcHJvcHMkZGF0YTUwJHRvdGFsIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTEkdG90YWwiLCJfcHJvcHMkZGF0YTUyIiwiX3Byb3BzJGRhdGE1MiR0b3RhbCIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJHRvdGFsIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkdG90YWwiLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRyb3ciLCJfcHJvcHMkZGF0YTU1JHJvdyRzdHkiLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRhbW91bnREIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1OSRhbW91bnREMiIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkIiwiX3Byb3BzJGRhdGEkaW5kaWFJUlAkMiIsIl9wcm9wcyRkYXRhNjIiLCJfcHJvcHMkZGF0YTYyJGVTaWduIiwiX3Byb3BzJGRhdGE2MyIsIl9wcm9wcyRkYXRhNjMkZVNpZ24iLCJfcHJvcHMkZGF0YTY0IiwiX3Byb3BzJGRhdGE2NCRlU2lnbiIsIl9wcm9wcyRkYXRhNjUiLCJfcHJvcHMkZGF0YTY1JGVTaWduIiwiX3Byb3BzJGRhdGE2NiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24iLCJfcHJvcHMkZGF0YTY2JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjgiLCJfcHJvcHMkZGF0YTY4JGVTaWduIiwiX3Byb3BzJGRhdGE2OCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OSIsIl9wcm9wcyRkYXRhNjkkZVNpZ24iLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5JGVTaWduJHMyIiwiX3Byb3BzJGRhdGE3MCIsIl9wcm9wcyRkYXRhNzAkZVNpZ24iLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTcwJGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJpc0JyZWFrUGFnZSIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJERUZBVUxUX0NVUlJFTlRfSEVJR0hUIiwiRFNDX0hFSUdIVCIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX2FkZHJlc3NMaW5lIiwiX2FkZHJlc3NMaW5lMiIsIl9hZGRyZXNzTGluZTMiLCJjdXN0b21lck5hbWVIZWlnaHQiLCJjdXN0b21lck5hbWUiLCJsYWJlbEhlaWdodCIsImxhYmVsIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInBkZlRpdGxlIiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiZmluYWxSb3dDb3VudCIsInBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwiLCJpbnZvaWNlVG90YWxMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJjb250ZW50IiwiZm9udFN0eWxlIiwidGhlbWUiLCJoZWFkU3R5bGVzIiwiZmlsbENvbG9yIiwidGV4dENvbG9yIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiYWxpZ24iLCJtaW5DZWxsSGVpZ2h0IiwiYm9keVN0eWxlcyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50Iiwic2V0UGFnZSIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW5MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRwcE5pbGFpTGFpbj86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW5MYWJlbDogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbjogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVUb3RhbDogcHJvcHMuZGF0YT8ucm93MT8uaGlkZVRvdGFsIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzM6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mz8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mz8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGRwcE5pbGFpTGFpbkNvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5kcHBOaWxhaUxhaW5Db252IHx8IFwiXCIsXG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw1OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDYgfHwgXCJcIixcbiAgICAgICAgICBhY2tEYXRlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja0RhdGUgPz8gbnVsbCxcbiAgICAgICAgICBhY2tOdW1iZXI6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrTnVtYmVyID8/IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgaGVpZ2h0LlxuICAvLyBpZiB0cnVlLCB0aGVuIHdlIGJyZWFrIHRoZSBjaGFuZ2UuXG4gIC8vIENoZWNraW5nIHdpdGggREVGQVVMVF9DVVJSRU5UX0hFSUdIVCBiZWNhdXNlIG9mIGN1cnJlbnQgcGFnZSBuZWVkcyB0byBoYXZlIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tLlxuICBjb25zdCBpc0JyZWFrUGFnZSA9IChoZWlnaHQsIHBhZ2VIZWlnaHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuICBjb25zdCBEU0NfSEVJR0hUID0gMzA7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgfVxuXG4gIGlmIChwYXJhbS5wZGZTdWJUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlN1YlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoXG4gICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICBjdXJyZW50SGVpZ2h0LFxuICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgQUxJR05fUklHSFRcbiAgKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIHBkZkNvbmZpZy5maWVsZFRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUxLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMy50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBsZXQgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gY3VzdG9tZXJOYW1lLmhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBsZXQgbGFiZWxIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGNvbnN0IGxhYmVsID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgKHBhZ2VXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGxhYmVsLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBsYWJlbEhlaWdodCA9IGxhYmVsLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKSB7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID4gbGFiZWxIZWlnaHQgPyBjdXN0b21lck5hbWVIZWlnaHQgOiBsYWJlbEhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgY29uc3QgcGRmVGl0bGUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhPy5wZGZUaXRsZSxcbiAgICAgIChwYWdlV2lkdGggKiAzKSAvIDRcbiAgICApO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBkZlRpdGxlLnRleHQsIEFMSUdOX0xFRlQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmVGl0bGUuaGVpZ2h0IC0gNDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID1cbiAgICAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGxldCBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gMDtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBjb25zdCByb3d0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zW2luZGV4XS53aWR0aCAtIDNcbiAgICAgICk7XG4gICAgICBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gTWF0aC5tYXgobWF4VGV4dEhlaWdodEhlYWRlciwgcm93dGV4dC5oZWlnaHQpO1xuICAgICAgZG9jLnRleHQocm93dGV4dC50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhUZXh0SGVpZ2h0SGVhZGVyICsgMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTtcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbkxhYmVsICYmIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbi50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGlmICghcGFyYW0uZGF0YS5yb3cxLmhpZGVUb3RhbCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgYCR7dGF4Lm5hbWV9OmAsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgdGF4LmFtb3VudCxcbiAgICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gdGF4RGF0YS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIC8vZW5kIHJvdzFcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzMgJiZcbiAgICAocGFyYW0uZGF0YS5yb3czLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3czLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3czLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3czLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5yb3czLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzMuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gLTEgPSBiZWNhdXNlIHRoZSBmeCByYXRlIGJveCBpcyBvbmUgcm93IGxvd2VyXG4gIC8vIDUgPSBlYWNoIHJvdyBoZWlnaHRcbiAgY29uc3QgZmluYWxSb3dIZWlnaHQgPSAoZmluYWxSb3dDb3VudCAtIDEpICogNTtcblxuICAvLyBBZGQgYSBsaW5lIGhlaWdodCBhZnRlciBjb252ZXJ0aW9uIHJhdGUgdGFibGUgYW5kIHRvdGFsc1xuICAvLyAzNSA9IGhlaWdodCBvZiBmeCByYXRlIGJveFxuICBpZiAocGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYgJiYgZmluYWxSb3dIZWlnaHQgPCAzNSkge1xuICAgIGNvbnN0IGRpZmYgPSAzNSAtIGZpbmFsUm93SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBkaWZmO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gIH1cblxuICAvLyBUb3RhbCBpbiB3b3Jkc1xuICBpZiAocGFyYW0uZGF0YS50b3RhbD8uY29sNCAmJiBwYXJhbS5kYXRhLnRvdGFsPy5jb2w1KSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gcGFnZVdpZHRoIC0gYm94V2lkdGggLSAxMDtcbiAgICBjb25zdCBib3hZID0gY3VycmVudEhlaWdodCArIDU7XG5cbiAgICAvLyBEcmF3IHRoZSBib3hcbiAgICBkb2Muc2V0RHJhd0NvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjIpO1xuICAgIGRvYy5yZWN0KGJveFgsIGJveFksIGJveFdpZHRoLCBib3hIZWlnaHQsIFwiRkRcIik7XG5cbiAgICAvLyBBZGQgdGV4dCB0byB0aGUgYm94XG4gICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXCJGb3IgR1NUIHJlcG9ydGluZyBwdXJwb3NlczpcIiwgYm94WCArIDUsIGJveFkgKyA1KTtcbiAgICBkb2MubGluZShib3hYICsgNSwgYm94WSArIDcuNSwgYm94WCArIGJveFdpZHRoIC0gNSwgYm94WSArIDcuNSk7XG4gICAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGAxICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfSA9ICR7cGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZX0gJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgYm94WCArIDUsXG4gICAgICBib3hZICsgMTNcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSB0YWJsZVxuICAgIGRvYy5hdXRvVGFibGUoe1xuICAgICAgc3RhcnRZOiBib3hZICsgMTgsXG4gICAgICBtYXJnaW46IHsgbGVmdDogYm94WCwgcmlnaHQ6IDAgfSxcbiAgICAgIGhlYWQ6IFtbXCJcIiwgYEFtb3VudCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWBdXSxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAgW1wiU3VidG90YWxcIiwgcGFyYW0uZGF0YS50b3RhbC5zdWJUb3RhbENvbnZdLFxuICAgICAgICBcbiAgICAgICAgW1wiRHBwIE5pbGFpIExhaW5cIiwgcGFyYW0uZGF0YS50b3RhbC5kcHBOaWxhaUxhaW5Db252XSxcbiAgICAgICAgXG4gICAgICAgIFtcIlRvdGFsIFRheFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsVGF4QW1vdW50Q29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBib3hIZWlnaHQgKyAzMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5ub3RlLFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBXcml0ZSB0aGUgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIgbGFiZWxcblxuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGV4dCBoZWlnaHRcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICAgKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYWRkaW5nIHRoaXMgaXRlbSB3aWxsIGV4Y2VlZCB0aGUgcGFnZSBoZWlnaHRcbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplOyAvLyBSZXNldCB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICk7XG4gICAgICAgIC8vIEluY3JlbWVudCBoZWlnaHQgZm9yIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIHRleHRcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0OyAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgaGVpZ2h0XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3BhY2luZyBhZnRlciB0aGUgc2VjdGlvblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHNpZ25hdHVyZVBhZ2VOdW1iZXI7XG4gIGxldCBzaWduYXR1cmVMaW5lSGVpZ2h0O1xuICBpZiAocGFyYW0/LmlzUGRmRm9yRHNjKSB7XG4gICAgLy8gUERGIGlzIGZvciBEaWdpdGFsIFNpZ25hdHVyZVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIERTQ19IRUlHSFQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBzaWduYXR1cmVQYWdlTnVtYmVyID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgICBzaWduYXR1cmVMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IERTQ19IRUlHSFQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICtcbiAgICAgICAgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbnVtUGFnZXMgPSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuXG4gIC8vIEFkZCBQYWdlIE51bWJlciBhdCBib3R0b21cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHBhZ2UgYW5kIGFkZHMgdGhlIHBhZ2UgbnVtYmVyIGF0IGJvdHRvbVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1QYWdlczsgaSsrKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICB9XG4gICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgbnVtUGFnZXMsXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBRixzQkFBQSxDQUFBSCxPQUFBO0FBQXFDLFNBQUFNLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVBQUFGLE1BQUEsQ0FBQUUsR0FBQSxTQUFBaEIsTUFBQSxDQUFBa0IseUJBQUEsR0FBQWxCLE1BQUEsQ0FBQW1CLGdCQUFBLENBQUFULE1BQUEsRUFBQVYsTUFBQSxDQUFBa0IseUJBQUEsQ0FBQUosTUFBQSxLQUFBbEIsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsR0FBQUMsT0FBQSxXQUFBQyxHQUFBLElBQUFoQixNQUFBLENBQUFvQixjQUFBLENBQUFWLE1BQUEsRUFBQU0sR0FBQSxFQUFBaEIsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUyxNQUFBLEVBQUFFLEdBQUEsaUJBQUFOLE1BQUE7QUFDckMsSUFBTVcsVUFBVSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLGFBQWEsRUFBRSxlQUFlO0VBQUU7RUFDaENDLE9BQU8sRUFBRSxTQUFTO0VBQUU7RUFDcEJDLGdCQUFnQixFQUFFLGtCQUFrQjtFQUFFO0VBQ3RDQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLFdBQVcsRUFBRSxhQUFhLENBQUU7QUFDOUIsQ0FBQztBQUFDQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEpBLFNBdUplUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGNBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUE7SUFBQSxJQUFBQyxLQUFBLEVBQUFDLHFCQUFBLEVBQUFDLE9BQUEsRUFBQUMsV0FBQSxFQUFBQyxHQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxZQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLFVBQUEsRUFBQUMsYUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxZQUFBLEVBQUFDLFdBQUEsRUFBQUMsS0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFFBQUEsRUFBQUMsWUFBQSxF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