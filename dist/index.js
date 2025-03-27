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
 *       createdBy?: string,
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data27, _props$data28, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data33$row$sty, _props$data34, _props$data34$row, _props$data35, _props$data35$row, _props$data36, _props$data36$row, _props$data37, _props$data37$row, _props$data38, _props$data38$row, _props$data38$row$sty, _props$data39, _props$data39$row, _props$data40, _props$data40$row, _props$data41, _props$data41$row, _props$data42, _props$data42$row, _props$data42$row$sty, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$total, _props$data48, _props$data48$total, _props$data49, _props$data49$total, _props$data50, _props$data50$total, _props$data51, _props$data51$total, _props$data52, _props$data52$total, _props$data53, _props$data53$total, _props$data54, _props$data54$total, _props$data55, _props$data55$total, _props$data56, _props$data56$row, _props$data56$row$sty, _props$data57, _props$data57$amountD, _props$data58, _props$data58$amountD, _props$data59, _props$data59$amountD, _props$data60, _props$data60$amountD, _props$data60$amountD2, _props$data61, _props$data62, _props$data$indiaIRP$, _props$data$indiaIRP$2, _props$data63, _props$data63$eSign, _props$data64, _props$data64$eSign, _props$data65, _props$data65$eSign, _props$data66, _props$data66$eSign, _props$data67, _props$data67$eSign, _props$data67$eSign$s, _props$data68, _props$data68$eSign, _props$data68$eSign$s, _props$data69, _props$data69$eSign, _props$data69$eSign$s, _props$data70, _props$data70$eSign, _props$data70$eSign$s, _props$data70$eSign$s2, _props$data71, _props$data71$eSign, _props$data71$eSign$s, _props$data71$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, DSC_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, columnWidth, addDesc, noteData, staticVAContent, paymentDetails, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, numPages, i, returnObj, blobOutput;
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
              createdBy: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.createdBy) || "",
              customFields: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.customFields) || [],
              authorisedBy: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : _props$data23.authorisedBy) || "",
              staticVA: (_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : _props$data24.staticVA,
              desc: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : _props$data25.desc) || "",
              creditNoteLabel: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : _props$data26.creditNoteLabel) || "",
              note: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : _props$data27.note) || "",
              pdfTitle: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : _props$data28.pdfTitle) || "",
              row1: {
                col1: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row1) === null || _props$data29$row === void 0 ? void 0 : _props$data29$row.col1) || "",
                col2: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$row = _props$data30.row1) === null || _props$data30$row === void 0 ? void 0 : _props$data30$row.col2) || "",
                col3: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row1) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.col3) || "",
                col4: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row1) === null || _props$data32$row === void 0 ? void 0 : _props$data32$row.col4) || [],
                style: {
                  fontSize: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row1) === null || _props$data33$row === void 0 ? void 0 : (_props$data33$row$sty = _props$data33$row.style) === null || _props$data33$row$sty === void 0 ? void 0 : _props$data33$row$sty.fontSize) || 12
                },
                hideTotal: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row1) === null || _props$data34$row === void 0 ? void 0 : _props$data34$row.hideTotal) || false
              },
              row2: {
                col1: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$row = _props$data35.row2) === null || _props$data35$row === void 0 ? void 0 : _props$data35$row.col1) || "",
                col2: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$row = _props$data36.row2) === null || _props$data36$row === void 0 ? void 0 : _props$data36$row.col2) || "",
                col3: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$row = _props$data37.row2) === null || _props$data37$row === void 0 ? void 0 : _props$data37$row.col3) || "",
                style: {
                  fontSize: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$row = _props$data38.row2) === null || _props$data38$row === void 0 ? void 0 : (_props$data38$row$sty = _props$data38$row.style) === null || _props$data38$row$sty === void 0 ? void 0 : _props$data38$row$sty.fontSize) || 12
                }
              },
              row3: {
                col1: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$row = _props$data39.row3) === null || _props$data39$row === void 0 ? void 0 : _props$data39$row.col1) || "",
                col2: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$row = _props$data40.row3) === null || _props$data40$row === void 0 ? void 0 : _props$data40$row.col2) || "",
                col3: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$row = _props$data41.row3) === null || _props$data41$row === void 0 ? void 0 : _props$data41$row.col3) || "",
                style: {
                  fontSize: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$row = _props$data42.row3) === null || _props$data42$row === void 0 ? void 0 : (_props$data42$row$sty = _props$data42$row.style) === null || _props$data42$row$sty === void 0 ? void 0 : _props$data42$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.col1) || "",
                // Total label
                col2: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.col2) || "",
                // Total amount
                col3: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.col3) || "",
                // Invoice currency
                col4: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$total = _props$data46.total) === null || _props$data46$total === void 0 ? void 0 : _props$data46$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$total = _props$data47.total) === null || _props$data47$total === void 0 ? void 0 : _props$data47$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$total = _props$data48.total) === null || _props$data48$total === void 0 ? void 0 : _props$data48$total.totalConv) || "",
                // Total converted amount
                subTotalConv: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$total = _props$data49.total) === null || _props$data49$total === void 0 ? void 0 : _props$data49$total.subTotalConv) || "",
                // sub total converted amount
                dppNilaiLainConv: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$total = _props$data50.total) === null || _props$data50$total === void 0 ? void 0 : _props$data50$total.dppNilaiLainConv) || "",
                isFxConversionVisible: (_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$total = _props$data51.total) === null || _props$data51$total === void 0 ? void 0 : _props$data51$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : (_props$data52$total = _props$data52.total) === null || _props$data52$total === void 0 ? void 0 : _props$data52$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : (_props$data53$total = _props$data53.total) === null || _props$data53$total === void 0 ? void 0 : _props$data53$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$total = _props$data54.total) === null || _props$data54$total === void 0 ? void 0 : _props$data54$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$total = _props$data55.total) === null || _props$data55$total === void 0 ? void 0 : _props$data55$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$row = _props$data56.row2) === null || _props$data56$row === void 0 ? void 0 : (_props$data56$row$sty = _props$data56$row.style) === null || _props$data56$row$sty === void 0 ? void 0 : _props$data56$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : (_props$data57$amountD = _props$data57.amountDue) === null || _props$data57$amountD === void 0 ? void 0 : _props$data57$amountD.col1) || "",
                col2: ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : (_props$data58$amountD = _props$data58.amountDue) === null || _props$data58$amountD === void 0 ? void 0 : _props$data58$amountD.col2) || "",
                col3: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$amountD = _props$data59.amountDue) === null || _props$data59$amountD === void 0 ? void 0 : _props$data59$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : (_props$data60$amountD = _props$data60.amountDue) === null || _props$data60$amountD === void 0 ? void 0 : (_props$data60$amountD2 = _props$data60$amountD.style) === null || _props$data60$amountD2 === void 0 ? void 0 : _props$data60$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : _props$data61.creditNote) || ""
            }, ((_props$data62 = props.data) === null || _props$data62 === void 0 ? void 0 : _props$data62.indiaIRP) && {
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
                approverName: ((_props$data63 = props.data) === null || _props$data63 === void 0 ? void 0 : (_props$data63$eSign = _props$data63.eSign) === null || _props$data63$eSign === void 0 ? void 0 : _props$data63$eSign.approverName) || "",
                approvedAt: ((_props$data64 = props.data) === null || _props$data64 === void 0 ? void 0 : (_props$data64$eSign = _props$data64.eSign) === null || _props$data64$eSign === void 0 ? void 0 : _props$data64$eSign.approvedAt) || "",
                authorizer: ((_props$data65 = props.data) === null || _props$data65 === void 0 ? void 0 : (_props$data65$eSign = _props$data65.eSign) === null || _props$data65$eSign === void 0 ? void 0 : _props$data65$eSign.authorizer) || "",
                approverText: ((_props$data66 = props.data) === null || _props$data66 === void 0 ? void 0 : (_props$data66$eSign = _props$data66.eSign) === null || _props$data66$eSign === void 0 ? void 0 : _props$data66$eSign.approverText) || "",
                signature: {
                  src: ((_props$data67 = props.data) === null || _props$data67 === void 0 ? void 0 : (_props$data67$eSign = _props$data67.eSign) === null || _props$data67$eSign === void 0 ? void 0 : (_props$data67$eSign$s = _props$data67$eSign.signature) === null || _props$data67$eSign$s === void 0 ? void 0 : _props$data67$eSign$s.src) || "",
                  width: ((_props$data68 = props.data) === null || _props$data68 === void 0 ? void 0 : (_props$data68$eSign = _props$data68.eSign) === null || _props$data68$eSign === void 0 ? void 0 : (_props$data68$eSign$s = _props$data68$eSign.signature) === null || _props$data68$eSign$s === void 0 ? void 0 : _props$data68$eSign$s.width) || 55,
                  height: ((_props$data69 = props.data) === null || _props$data69 === void 0 ? void 0 : (_props$data69$eSign = _props$data69.eSign) === null || _props$data69$eSign === void 0 ? void 0 : (_props$data69$eSign$s = _props$data69$eSign.signature) === null || _props$data69$eSign$s === void 0 ? void 0 : _props$data69$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data70 = props.data) === null || _props$data70 === void 0 ? void 0 : (_props$data70$eSign = _props$data70.eSign) === null || _props$data70$eSign === void 0 ? void 0 : (_props$data70$eSign$s = _props$data70$eSign.signature) === null || _props$data70$eSign$s === void 0 ? void 0 : (_props$data70$eSign$s2 = _props$data70$eSign$s.margin) === null || _props$data70$eSign$s2 === void 0 ? void 0 : _props$data70$eSign$s2.top) || "",
                    left: ((_props$data71 = props.data) === null || _props$data71 === void 0 ? void 0 : (_props$data71$eSign = _props$data71.eSign) === null || _props$data71$eSign === void 0 ? void 0 : (_props$data71$eSign$s = _props$data71$eSign.signature) === null || _props$data71$eSign$s === void 0 ? void 0 : (_props$data71$eSign$s2 = _props$data71$eSign$s.margin) === null || _props$data71$eSign$s2 === void 0 ? void 0 : _props$data71$eSign$s2.left) || ""
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
          // requested by and created by - side by side in a 4-column grid
          if (param.data.requestedBy || param.data.createdBy) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;

            // Create a 4-column grid layout
            columnWidth = (docWidth - 20) / 4; // First column: Requested By label
            if (param.data.requestedBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.text(10, currentHeight, "Requested By");
            }

            // Third column: Created By label
            if (param.data.createdBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.text(10 + columnWidth * 2, currentHeight, "Created By");
            }
            currentHeight += pdfConfig.subLineHeight;

            // First column: Requested By value
            if (param.data.requestedBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, param.data.requestedBy);
            }

            // Third column: Created By value
            if (param.data.createdBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(10 + columnWidth * 2, currentHeight, param.data.createdBy);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzMkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzgkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHJvdyIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHJvdyIsIl9wcm9wcyRkYXRhNDIiLCJfcHJvcHMkZGF0YTQyJHJvdyIsIl9wcm9wcyRkYXRhNDIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHRvdGFsIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkdG90YWwiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCR0b3RhbCIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JHRvdGFsIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkcm93IiwiX3Byb3BzJGRhdGE1NiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJCIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJDIiLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjciLCJfcHJvcHMkZGF0YTY3JGVTaWduIiwiX3Byb3BzJGRhdGE2NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OCIsIl9wcm9wcyRkYXRhNjgkZVNpZ24iLCJfcHJvcHMkZGF0YTY4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5IiwiX3Byb3BzJGRhdGE2OSRlU2lnbiIsIl9wcm9wcyRkYXRhNjkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNzAiLCJfcHJvcHMkZGF0YTcwJGVTaWduIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNzEiLCJfcHJvcHMkZGF0YTcxJGVTaWduIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiaXNCcmVha1BhZ2UiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiREVGQVVMVF9DVVJSRU5UX0hFSUdIVCIsIkRTQ19IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiY29sdW1uV2lkdGgiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImNyZWF0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJjb250ZW50IiwiZm9udFN0eWxlIiwidGhlbWUiLCJoZWFkU3R5bGVzIiwiZmlsbENvbG9yIiwidGV4dENvbG9yIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiYWxpZ24iLCJtaW5DZWxsSGVpZ2h0IiwiYm9keVN0eWxlcyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50Iiwic2V0UGFnZSIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW5MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRwcE5pbGFpTGFpbj86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3JlYXRlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW5MYWJlbDogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbjogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEJ5OiBwcm9wcy5kYXRhPy5jcmVhdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgICBoaWRlVG90YWw6IHByb3BzLmRhdGE/LnJvdzE/LmhpZGVUb3RhbCB8fCBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3czOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mz8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzM/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBkcHBOaWxhaUxhaW5Db252OiBwcm9wcy5kYXRhPy50b3RhbD8uZHBwTmlsYWlMYWluQ29udiB8fCBcIlwiLFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICAvLyB3ZSBjaGVjayBpZiB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIHBhZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBwYWdlIGhlaWdodC5cbiAgLy8gaWYgdHJ1ZSwgdGhlbiB3ZSBicmVhayB0aGUgY2hhbmdlLlxuICAvLyBDaGVja2luZyB3aXRoIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgYmVjYXVzZSBvZiBjdXJyZW50IHBhZ2UgbmVlZHMgdG8gaGF2ZSBzb21lIHNwYWNpbmcgYXQgdGhlIGJvdHRvbS5cbiAgY29uc3QgaXNCcmVha1BhZ2UgPSAoaGVpZ2h0LCBwYWdlSGVpZ2h0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChoZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG4gIGNvbnN0IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgPSAxMDtcbiAgY29uc3QgRFNDX0hFSUdIVCA9IDMwO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gIH1cblxuICBpZiAocGFyYW0ucGRmU3ViVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDU7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZTdWJUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICB9XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KFxuICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgY3VycmVudEhlaWdodCxcbiAgICBwYXJhbS5idXNpbmVzcy5uYW1lLFxuICAgIEFMSUdOX1JJR0hUXG4gICk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgLy8gY29tcGFueSBsb2dvXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgLy8gdGVuYW50IHRheCBudW1iZXJcbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyBwZGZDb25maWcuZmllbGRUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMS50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTMudGV4dCwgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgbGV0IGN1c3RvbWVyTmFtZUhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBjb25zdCBjdXN0b21lck5hbWUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Lm5hbWUsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgY3VzdG9tZXJOYW1lLnRleHQpO1xuICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IGN1c3RvbWVyTmFtZS5oZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgbGV0IGxhYmVsSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBjb25zdCBsYWJlbCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIChwYWdlV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBsYWJlbC50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgbGFiZWxIZWlnaHQgPSBsYWJlbC5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA+IGxhYmVsSGVpZ2h0ID8gY3VzdG9tZXJOYW1lSGVpZ2h0IDogbGFiZWxIZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuYWNrRGF0ZSAmJiBpbmRpYUlSUC5hY2tOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw1KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDUpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tEYXRlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw2KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDYpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tOdW1iZXJcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIElOVk9JQ0UgVElUTEUgLSBJTk1PQkkgY2hhbmdlXG4gIGlmIChwYXJhbS5kYXRhPy5wZGZUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGNvbnN0IHBkZlRpdGxlID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YT8ucGRmVGl0bGUsXG4gICAgICAocGFnZVdpZHRoICogMykgLyA0XG4gICAgKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwZGZUaXRsZS50ZXh0LCBBTElHTl9MRUZUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZlRpdGxlLmhlaWdodCAtIDQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9XG4gICAgKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBsZXQgbWF4VGV4dEhlaWdodEhlYWRlciA9IDA7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgY29uc3Qgcm93dGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9uc1tpbmRleF0ud2lkdGggLSAzXG4gICAgICApO1xuICAgICAgbWF4VGV4dEhlaWdodEhlYWRlciA9IE1hdGgubWF4KG1heFRleHRIZWlnaHRIZWFkZXIsIHJvd3RleHQuaGVpZ2h0KTtcbiAgICAgIGRvYy50ZXh0KHJvd3RleHQudGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4VGV4dEhlaWdodEhlYWRlciArIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7XG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHBhZ2UgbnVtYmVyIHRoZSBhYm92ZSBsaW5lIGlzIG9uXG4gIGNvbnN0IHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICBjb25zdCBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCAmJiBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbikge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbkxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4udG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgXG4gICAgICAgIFtcIkRwcCBOaWxhaSBMYWluXCIsIHBhcmFtLmRhdGEudG90YWwuZHBwTmlsYWlMYWluQ29udl0sXG4gICAgICAgIFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYm94SGVpZ2h0ICsgMzA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAvLyByZXF1ZXN0ZWQgYnkgYW5kIGNyZWF0ZWQgYnkgLSBzaWRlIGJ5IHNpZGUgaW4gYSA0LWNvbHVtbiBncmlkXG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5IHx8IHBhcmFtLmRhdGEuY3JlYXRlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIFxuICAgIC8vIENyZWF0ZSBhIDQtY29sdW1uIGdyaWQgbGF5b3V0XG4gICAgY29uc3QgY29sdW1uV2lkdGggPSAoZG9jV2lkdGggLSAyMCkgLyA0O1xuICAgIFxuICAgIC8vIEZpcnN0IGNvbHVtbjogUmVxdWVzdGVkIEJ5IGxhYmVsXG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICB9XG4gICAgXG4gICAgLy8gVGhpcmQgY29sdW1uOiBDcmVhdGVkIEJ5IGxhYmVsXG4gICAgaWYgKHBhcmFtLmRhdGEuY3JlYXRlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dCgxMCArIGNvbHVtbldpZHRoICogMiwgY3VycmVudEhlaWdodCwgXCJDcmVhdGVkIEJ5XCIpO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIFxuICAgIC8vIEZpcnN0IGNvbHVtbjogUmVxdWVzdGVkIEJ5IHZhbHVlXG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGlyZCBjb2x1bW46IENyZWF0ZWQgQnkgdmFsdWVcbiAgICBpZiAocGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAgKyBjb2x1bW5XaWR0aCAqIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlYXRlZEJ5KTtcbiAgICB9XG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubm90ZSxcbiAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgLy8gV3JpdGUgdGhlIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiIGxhYmVsXG5cbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRleHQgaGVpZ2h0XG4gICAgICBjb25zdCB7IHRleHQsIGhlaWdodCB9ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBpdGVtLFxuICAgICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICAgICk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGFkZGluZyB0aGlzIGl0ZW0gd2lsbCBleGNlZWQgdGhlIHBhZ2UgaGVpZ2h0XG4gICAgICBpZiAoY3VycmVudEhlaWdodCArIGhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTsgLy8gUmVzZXQgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIlxuICAgICAgICApO1xuICAgICAgICAvLyBJbmNyZW1lbnQgaGVpZ2h0IGZvciB0aGUgbmV4dCBsaW5lXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSB0ZXh0XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgdGV4dCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGhlaWdodDsgLy8gSW5jcmVtZW50IHRoZSBjdXJyZW50IGhlaWdodFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIHNwYWNpbmcgYWZ0ZXIgdGhlIHNlY3Rpb25cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkF1dGhvcmlzZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gO1xuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgc3RhdGljVkFDb250ZW50LFxuICAgICAgcGFnZVdpZHRoIC0gNDBcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGxldCBzaWduYXR1cmVQYWdlTnVtYmVyO1xuICBsZXQgc2lnbmF0dXJlTGluZUhlaWdodDtcbiAgaWYgKHBhcmFtPy5pc1BkZkZvckRzYykge1xuICAgIC8vIFBERiBpcyBmb3IgRGlnaXRhbCBTaWduYXR1cmVcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyBEU0NfSEVJR0hUID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgc2lnbmF0dXJlUGFnZU51bWJlciA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gICAgc2lnbmF0dXJlTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBEU0NfSEVJR0hUO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArXG4gICAgICAgIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG51bVBhZ2VzID0gZG9jLmdldE51bWJlck9mUGFnZXMoKTtcblxuICAvLyBBZGQgUGFnZSBOdW1iZXIgYXQgYm90dG9tXG4gIC8vIEl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwYWdlIGFuZCBhZGRzIHRoZSBwYWdlIG51bWJlciBhdCBib3R0b21cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtUGFnZXM7IGkrKykge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgfVxuICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIG51bVBhZ2VzLFxuICAgICAgZG9jV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuT2JqLmVzdGFtcCA9IHtcbiAgICBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsLFxuICAgIGludm9pY2VUb3RhbExpbmVIZWlnaHQsXG4gIH07XG5cbiAgaWYgKHBhcmFtLmlzUGRmRm9yRHNjKSB7XG4gICAgcmV0dXJuT2JqLmRpZ2l0YWxTaWduID0ge1xuICAgICAgc2lnbmF0dXJlUGFnZU51bWJlcixcbiAgICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUgsT0FBQTtBQUFxQyxTQUFBTSxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFBRyxNQUFBLENBQUFDLHFCQUFBLFFBQUFDLE9BQUEsR0FBQUYsTUFBQSxDQUFBQyxxQkFBQSxDQUFBSixNQUFBLEdBQUFDLGNBQUEsS0FBQUksT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBSixNQUFBLENBQUFLLHdCQUFBLENBQUFSLE1BQUEsRUFBQU8sR0FBQSxFQUFBRSxVQUFBLE9BQUFQLElBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULElBQUEsRUFBQUcsT0FBQSxZQUFBSCxJQUFBO0FBQUEsU0FBQVUsY0FBQUMsTUFBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFGLENBQUEsVUFBQUcsTUFBQSxXQUFBRixTQUFBLENBQUFELENBQUEsSUFBQUMsU0FBQSxDQUFBRCxDQUFBLFFBQUFBLENBQUEsT0FBQWYsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsT0FBQUMsT0FBQSxXQUFBQyxHQUFBLFFBQUFDLGdCQUFBLGFBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRixNQUFBLENBQUFFLEdBQUEsU0FBQWhCLE1BQUEsQ0FBQWtCLHlCQUFBLEdBQUFsQixNQUFBLENBQUFtQixnQkFBQSxDQUFBVCxNQUFBLEVBQUFWLE1BQUEsQ0FBQWtCLHlCQUFBLENBQUFKLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBaEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixNQUFBLEVBQUFNLEdBQUEsRUFBQWhCLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVMsTUFBQSxFQUFBRSxHQUFBLGlCQUFBTixNQUFBO0FBQ3JDLElBQU1XLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7QUFBQ0MsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkpBLFNBd0plUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxXQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsc0JBQUEsRUFBQUMsVUFBQSxFQUFBQyxhQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLFlBQUEsRUFBQUMsV0FBQSxFQUFBQyxLQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsb0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsaUJBQUEsRUFB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