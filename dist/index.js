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
          // requested by and created by 
          if (param.data.requestedBy || param.data.createdBy) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;
            columnWidth = (docWidth - 20) / 4;
            if (param.data.requestedBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.text(10, currentHeight, "Requested By");
            }
            if (param.data.createdBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.text(10 + columnWidth * 1, currentHeight, "Created By");
            }
            currentHeight += pdfConfig.subLineHeight;
            if (param.data.requestedBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, splitTextAndGetHeight(param.data.requestedBy));
            }
            if (param.data.createdBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(10 + columnWidth * 1, currentHeight, splitTextAndGetHeight(param.data.createdBy));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzMkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzgkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHJvdyIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHJvdyIsIl9wcm9wcyRkYXRhNDIiLCJfcHJvcHMkZGF0YTQyJHJvdyIsIl9wcm9wcyRkYXRhNDIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHRvdGFsIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkdG90YWwiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCR0b3RhbCIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JHRvdGFsIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkcm93IiwiX3Byb3BzJGRhdGE1NiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJCIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJDIiLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjciLCJfcHJvcHMkZGF0YTY3JGVTaWduIiwiX3Byb3BzJGRhdGE2NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OCIsIl9wcm9wcyRkYXRhNjgkZVNpZ24iLCJfcHJvcHMkZGF0YTY4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5IiwiX3Byb3BzJGRhdGE2OSRlU2lnbiIsIl9wcm9wcyRkYXRhNjkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNzAiLCJfcHJvcHMkZGF0YTcwJGVTaWduIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNzEiLCJfcHJvcHMkZGF0YTcxJGVTaWduIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiaXNCcmVha1BhZ2UiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiREVGQVVMVF9DVVJSRU5UX0hFSUdIVCIsIkRTQ19IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiY29sdW1uV2lkdGgiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImNyZWF0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJjb250ZW50IiwiZm9udFN0eWxlIiwidGhlbWUiLCJoZWFkU3R5bGVzIiwiZmlsbENvbG9yIiwidGV4dENvbG9yIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiYWxpZ24iLCJtaW5DZWxsSGVpZ2h0IiwiYm9keVN0eWxlcyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsImJhbmsiLCJhY2NvdW50Iiwic2V0UGFnZSIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW5MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRwcE5pbGFpTGFpbj86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3JlYXRlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW5MYWJlbDogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbjogcHJvcHMuZGF0YT8uZHBwTmlsYWlMYWluIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEJ5OiBwcm9wcy5kYXRhPy5jcmVhdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgICBoaWRlVG90YWw6IHByb3BzLmRhdGE/LnJvdzE/LmhpZGVUb3RhbCB8fCBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3czOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mz8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzM/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBkcHBOaWxhaUxhaW5Db252OiBwcm9wcy5kYXRhPy50b3RhbD8uZHBwTmlsYWlMYWluQ29udiB8fCBcIlwiLFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICAvLyB3ZSBjaGVjayBpZiB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIHBhZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBwYWdlIGhlaWdodC5cbiAgLy8gaWYgdHJ1ZSwgdGhlbiB3ZSBicmVhayB0aGUgY2hhbmdlLlxuICAvLyBDaGVja2luZyB3aXRoIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgYmVjYXVzZSBvZiBjdXJyZW50IHBhZ2UgbmVlZHMgdG8gaGF2ZSBzb21lIHNwYWNpbmcgYXQgdGhlIGJvdHRvbS5cbiAgY29uc3QgaXNCcmVha1BhZ2UgPSAoaGVpZ2h0LCBwYWdlSGVpZ2h0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChoZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG4gIGNvbnN0IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgPSAxMDtcbiAgY29uc3QgRFNDX0hFSUdIVCA9IDMwO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gIH1cblxuICBpZiAocGFyYW0ucGRmU3ViVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDU7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZTdWJUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICB9XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KFxuICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgY3VycmVudEhlaWdodCxcbiAgICBwYXJhbS5idXNpbmVzcy5uYW1lLFxuICAgIEFMSUdOX1JJR0hUXG4gICk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgLy8gY29tcGFueSBsb2dvXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgLy8gdGVuYW50IHRheCBudW1iZXJcbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyBwZGZDb25maWcuZmllbGRUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMS50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTMudGV4dCwgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgbGV0IGN1c3RvbWVyTmFtZUhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBjb25zdCBjdXN0b21lck5hbWUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Lm5hbWUsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgY3VzdG9tZXJOYW1lLnRleHQpO1xuICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IGN1c3RvbWVyTmFtZS5oZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgbGV0IGxhYmVsSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBjb25zdCBsYWJlbCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIChwYWdlV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBsYWJlbC50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgbGFiZWxIZWlnaHQgPSBsYWJlbC5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA+IGxhYmVsSGVpZ2h0ID8gY3VzdG9tZXJOYW1lSGVpZ2h0IDogbGFiZWxIZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuYWNrRGF0ZSAmJiBpbmRpYUlSUC5hY2tOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw1KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDUpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tEYXRlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw2KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDYpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tOdW1iZXJcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIElOVk9JQ0UgVElUTEUgLSBJTk1PQkkgY2hhbmdlXG4gIGlmIChwYXJhbS5kYXRhPy5wZGZUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGNvbnN0IHBkZlRpdGxlID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YT8ucGRmVGl0bGUsXG4gICAgICAocGFnZVdpZHRoICogMykgLyA0XG4gICAgKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwZGZUaXRsZS50ZXh0LCBBTElHTl9MRUZUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZlRpdGxlLmhlaWdodCAtIDQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9XG4gICAgKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBsZXQgbWF4VGV4dEhlaWdodEhlYWRlciA9IDA7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgY29uc3Qgcm93dGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9uc1tpbmRleF0ud2lkdGggLSAzXG4gICAgICApO1xuICAgICAgbWF4VGV4dEhlaWdodEhlYWRlciA9IE1hdGgubWF4KG1heFRleHRIZWlnaHRIZWFkZXIsIHJvd3RleHQuaGVpZ2h0KTtcbiAgICAgIGRvYy50ZXh0KHJvd3RleHQudGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4VGV4dEhlaWdodEhlYWRlciArIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7XG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHBhZ2UgbnVtYmVyIHRoZSBhYm92ZSBsaW5lIGlzIG9uXG4gIGNvbnN0IHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICBjb25zdCBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCAmJiBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbikge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmRwcE5pbGFpTGFpbkxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4udG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgXG4gICAgICAgIFtcIkRwcCBOaWxhaSBMYWluXCIsIHBhcmFtLmRhdGEudG90YWwuZHBwTmlsYWlMYWluQ29udl0sXG4gICAgICAgIFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYm94SGVpZ2h0ICsgMzA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAvLyByZXF1ZXN0ZWQgYnkgYW5kIGNyZWF0ZWQgYnkgXG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5IHx8IHBhcmFtLmRhdGEuY3JlYXRlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIFxuICAgIGNvbnN0IGNvbHVtbldpZHRoID0gKGRvY1dpZHRoIC0gMjApIC8gNDtcbiAgICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIH1cbiAgICBpZiAocGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KDEwICsgY29sdW1uV2lkdGggKiAxLCBjdXJyZW50SGVpZ2h0LCBcIkNyZWF0ZWQgQnlcIik7XG4gICAgfVxuICAgIFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSk7XG4gIH1cbiAgICBpZiAocGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAgKyBjb2x1bW5XaWR0aCAqIDEsIGN1cnJlbnRIZWlnaHQsIHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLmNyZWF0ZWRCeSkpO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5ub3RlLFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBXcml0ZSB0aGUgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIgbGFiZWxcblxuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGV4dCBoZWlnaHRcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICAgKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYWRkaW5nIHRoaXMgaXRlbSB3aWxsIGV4Y2VlZCB0aGUgcGFnZSBoZWlnaHRcbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplOyAvLyBSZXNldCB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICk7XG4gICAgICAgIC8vIEluY3JlbWVudCBoZWlnaHQgZm9yIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIHRleHRcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0OyAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgaGVpZ2h0XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3BhY2luZyBhZnRlciB0aGUgc2VjdGlvblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHNpZ25hdHVyZVBhZ2VOdW1iZXI7XG4gIGxldCBzaWduYXR1cmVMaW5lSGVpZ2h0O1xuICBpZiAocGFyYW0/LmlzUGRmRm9yRHNjKSB7XG4gICAgLy8gUERGIGlzIGZvciBEaWdpdGFsIFNpZ25hdHVyZVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIERTQ19IRUlHSFQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBzaWduYXR1cmVQYWdlTnVtYmVyID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgICBzaWduYXR1cmVMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IERTQ19IRUlHSFQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICtcbiAgICAgICAgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbnVtUGFnZXMgPSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuXG4gIC8vIEFkZCBQYWdlIE51bWJlciBhdCBib3R0b21cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHBhZ2UgYW5kIGFkZHMgdGhlIHBhZ2UgbnVtYmVyIGF0IGJvdHRvbVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1QYWdlczsgaSsrKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICB9XG4gICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgbnVtUGFnZXMsXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBRixzQkFBQSxDQUFBSCxPQUFBO0FBQXFDLFNBQUFNLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVBQUFGLE1BQUEsQ0FBQUUsR0FBQSxTQUFBaEIsTUFBQSxDQUFBa0IseUJBQUEsR0FBQWxCLE1BQUEsQ0FBQW1CLGdCQUFBLENBQUFULE1BQUEsRUFBQVYsTUFBQSxDQUFBa0IseUJBQUEsQ0FBQUosTUFBQSxLQUFBbEIsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsR0FBQUMsT0FBQSxXQUFBQyxHQUFBLElBQUFoQixNQUFBLENBQUFvQixjQUFBLENBQUFWLE1BQUEsRUFBQU0sR0FBQSxFQUFBaEIsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUyxNQUFBLEVBQUFFLEdBQUEsaUJBQUFOLE1BQUE7QUFDckMsSUFBTVcsVUFBVSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLGFBQWEsRUFBRSxlQUFlO0VBQUU7RUFDaENDLE9BQU8sRUFBRSxTQUFTO0VBQUU7RUFDcEJDLGdCQUFnQixFQUFFLGtCQUFrQjtFQUFFO0VBQ3RDQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLFdBQVcsRUFBRSxhQUFhLENBQUU7QUFDOUIsQ0FBQztBQUFDQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2SkEsU0F3SmVRLG9CQUFvQkEsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLHFCQUFBLENBQUF2QixLQUFBLE9BQUFJLFNBQUE7QUFBQTtBQUFBLFNBQUFtQixzQkFBQTtFQUFBQSxxQkFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQW5DLFNBQUFDLFFBQW9DQyxLQUFLO0lBQUEsSUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsV0FBQSxFQUFBQyxvQkFBQSxFQUFBQyxjQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsaUJBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBLEVB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