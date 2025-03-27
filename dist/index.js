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

          // requested by and created by (side by side)
          if (param.data.requestedBy || param.data.createdBy) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;

            // If both fields exist, place them side by side
            if (param.data.requestedBy && param.data.createdBy) {
              // Requested By (left side)
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.text(10, currentHeight, "Request By");

              // Created By (right side - positioned at middle of page)
              doc.text(docWidth / 2, currentHeight, "Created By");
              currentHeight += pdfConfig.subLineHeight;

              // Values for both fields
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, param.data.requestedBy);
              doc.text(docWidth / 3, currentHeight, param.data.createdBy);
              currentHeight += pdfConfig.lineHeight;
            } else {
              // If only one field exists, display it normally
              if (param.data.requestedBy) {
                doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
                doc.text(10, currentHeight, "Request By");
                currentHeight += pdfConfig.subLineHeight;
                doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
                doc.text(10, currentHeight, param.data.requestedBy);
              } else if (param.data.createdBy) {
                doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
                doc.text(10, currentHeight, "Created By");
                currentHeight += pdfConfig.subLineHeight;
                doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
                doc.text(10, currentHeight, param.data.createdBy);
              }
              currentHeight += pdfConfig.lineHeight;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzMkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzgkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHJvdyIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHJvdyIsIl9wcm9wcyRkYXRhNDIiLCJfcHJvcHMkZGF0YTQyJHJvdyIsIl9wcm9wcyRkYXRhNDIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHRvdGFsIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkdG90YWwiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCR0b3RhbCIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JHRvdGFsIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkcm93IiwiX3Byb3BzJGRhdGE1NiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJCIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJDIiLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjciLCJfcHJvcHMkZGF0YTY3JGVTaWduIiwiX3Byb3BzJGRhdGE2NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OCIsIl9wcm9wcyRkYXRhNjgkZVNpZ24iLCJfcHJvcHMkZGF0YTY4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5IiwiX3Byb3BzJGRhdGE2OSRlU2lnbiIsIl9wcm9wcyRkYXRhNjkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNzAiLCJfcHJvcHMkZGF0YTcwJGVTaWduIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNzEiLCJfcHJvcHMkZGF0YTcxJGVTaWduIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiaXNCcmVha1BhZ2UiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiREVGQVVMVF9DVVJSRU5UX0hFSUdIVCIsIkRTQ19IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiYWRkRGVzYyIsIm5vdGVEYXRhIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJzaWduYXR1cmVQYWdlTnVtYmVyIiwic2lnbmF0dXJlTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm51bVBhZ2VzIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsImhlYWRlclRleHRTaXplIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImlzUGRmRm9yRHNjIiwicGRmU3ViVGl0bGUiLCJsb2dvIiwic3JjIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJ1c2luZXNzIiwibmFtZSIsImFkZHJlc3MiLCJlbWFpbF8xIiwiY291bnRyeSIsInRheE51bWJlciIsImNvbnRhY3QiLCJzdWJUb3RhbExhYmVsIiwiZHBwTmlsYWlMYWluTGFiZWwiLCJkcHBOaWxhaUxhaW4iLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJzdWJUb3RhbCIsImN1cnJlbmN5IiwiZGVzY0xhYmVsIiwicmVxdWVzdGVkQnkiLCJjcmVhdGVkQnkiLCJjdXN0b21GaWVsZHMiLCJhdXRob3Jpc2VkQnkiLCJzdGF0aWNWQSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicm93MSIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJzdHlsZSIsImZvbnRTaXplIiwiaGlkZVRvdGFsIiwicm93MiIsInJvdzMiLCJ0b3RhbCIsImNvbDUiLCJ0b3RhbENvbnYiLCJzdWJUb3RhbENvbnYiLCJkcHBOaWxhaUxhaW5Db252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImxhYmVsNSIsImxhYmVsNiIsImFja0RhdGUiLCJhY2tOdW1iZXIiLCJlU2lnbiIsImFwcHJvdmVyTmFtZSIsImFwcHJvdmVkQXQiLCJhdXRob3JpemVyIiwiYXBwcm92ZXJUZXh0Iiwic2lnbmF0dXJlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzaXplIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJnZXROdW1iZXJPZlBhZ2VzIiwianNQREYiLCJnZXRQYWdlV2lkdGgiLCJnZXRQYWdlSGVpZ2h0IiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJtYXhUZXh0SGVpZ2h0SGVhZGVyIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJyb3d0ZXh0IiwiTWF0aCIsIm1heCIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiYWRkUGFnZSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwidG9Mb2NhbGVTdHJpbmciLCJ0YXgiLCJjb25jYXQiLCJhbW91bnQiLCJzZXRGaWxsQ29sb3IiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2giLCJiYW5rIiwiYWNjb3VudCIsInNldFBhZ2UiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImRpZ2l0YWxTaWduIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBpc1BkZkZvckRzYz86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgcGRmU3ViVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgZHBwTmlsYWlMYWluTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW4/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGNyZWF0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw2OiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tEYXRlOiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tOdW1iZXI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIGhpZGVUb3RhbD86IGJvb2xlYW5cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3czPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgcGRmVGl0bGU6IHByb3BzLnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgaXNQZGZGb3JEc2M6IHByb3BzLmlzUGRmRm9yRHNjIHx8IGZhbHNlLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZHBwTmlsYWlMYWluTGFiZWw6IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbkxhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW46IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbiB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGNyZWF0ZWRCeTogcHJvcHMuZGF0YT8uY3JlYXRlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgZHBwTmlsYWlMYWluQ29udjogcHJvcHMuZGF0YT8udG90YWw/LmRwcE5pbGFpTGFpbkNvbnYgfHwgXCJcIixcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBoZWlnaHQuXG4gIC8vIGlmIHRydWUsIHRoZW4gd2UgYnJlYWsgdGhlIGNoYW5nZS5cbiAgLy8gQ2hlY2tpbmcgd2l0aCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUIGJlY2F1c2Ugb2YgY3VycmVudCBwYWdlIG5lZWRzIHRvIGhhdmUgc29tZSBzcGFjaW5nIGF0IHRoZSBib3R0b20uXG4gIGNvbnN0IGlzQnJlYWtQYWdlID0gKGhlaWdodCwgcGFnZUhlaWdodCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBoZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoaGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICBjb25zdCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUID0gMTA7XG4gIGNvbnN0IERTQ19IRUlHSFQgPSAzMDtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICB9XG5cbiAgaWYgKHBhcmFtLnBkZlN1YlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCAtPSA1O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmU3ViVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChcbiAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgcGFyYW0uYnVzaW5lc3MubmFtZSxcbiAgICBBTElHTl9SSUdIVFxuICApO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIC8vIGNvbXBhbnkgbG9nb1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIC8vIHRlbmFudCB0YXggbnVtYmVyXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTEudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUzLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGxldCBjdXN0b21lck5hbWVIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgY29uc3QgY3VzdG9tZXJOYW1lID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdC5uYW1lLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGN1c3RvbWVyTmFtZS50ZXh0KTtcbiAgICBjdXN0b21lck5hbWVIZWlnaHQgPSBjdXN0b21lck5hbWUuaGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGxldCBsYWJlbEhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgY29uc3QgbGFiZWwgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICAocGFnZVdpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgbGFiZWwudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGxhYmVsSGVpZ2h0ID0gbGFiZWwuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBjdXN0b21lck5hbWVIZWlnaHQgPiBsYWJlbEhlaWdodCA/IGN1c3RvbWVyTmFtZUhlaWdodCA6IGxhYmVsSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBjb25zdCBwZGZUaXRsZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGE/LnBkZlRpdGxlLFxuICAgICAgKHBhZ2VXaWR0aCAqIDMpIC8gNFxuICAgICk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGRmVGl0bGUudGV4dCwgQUxJR05fTEVGVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZUaXRsZS5oZWlnaHQgLSA0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPVxuICAgIChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgbGV0IG1heFRleHRIZWlnaHRIZWFkZXIgPSAwO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHJvd3RleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnNbaW5kZXhdLndpZHRoIC0gM1xuICAgICAgKTtcbiAgICAgIG1heFRleHRIZWlnaHRIZWFkZXIgPSBNYXRoLm1heChtYXhUZXh0SGVpZ2h0SGVhZGVyLCByb3d0ZXh0LmhlaWdodCk7XG4gICAgICBkb2MudGV4dChyb3d0ZXh0LnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heFRleHRIZWlnaHRIZWFkZXIgKyAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgICB9XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApO1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwgJiYgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSBwYWdlV2lkdGggLSBib3hXaWR0aCAtIDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgNTtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAgIFxuICAgICAgICBbXCJEcHAgTmlsYWkgTGFpblwiLCBwYXJhbS5kYXRhLnRvdGFsLmRwcE5pbGFpTGFpbkNvbnZdLFxuICAgICAgICBcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvLyByZXF1ZXN0ZWQgYnkgYW5kIGNyZWF0ZWQgYnkgKHNpZGUgYnkgc2lkZSlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkgfHwgcGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgXG4gICAgLy8gSWYgYm90aCBmaWVsZHMgZXhpc3QsIHBsYWNlIHRoZW0gc2lkZSBieSBzaWRlXG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkgJiYgcGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICAgIC8vIFJlcXVlc3RlZCBCeSAobGVmdCBzaWRlKVxuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdCBCeVwiKTtcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlZCBCeSAocmlnaHQgc2lkZSAtIHBvc2l0aW9uZWQgYXQgbWlkZGxlIG9mIHBhZ2UpXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIFwiQ3JlYXRlZCBCeVwiKTtcbiAgICAgIFxuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIFxuICAgICAgLy8gVmFsdWVzIGZvciBib3RoIGZpZWxkc1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlYXRlZEJ5KTtcbiAgICAgIFxuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgb25seSBvbmUgZmllbGQgZXhpc3RzLCBkaXNwbGF5IGl0IG5vcm1hbGx5XG4gICAgICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3QgQnlcIik7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbS5kYXRhLmNyZWF0ZWRCeSkge1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkNyZWF0ZWQgQnlcIik7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlYXRlZEJ5KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5ub3RlLFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBXcml0ZSB0aGUgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIgbGFiZWxcblxuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGV4dCBoZWlnaHRcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICAgKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYWRkaW5nIHRoaXMgaXRlbSB3aWxsIGV4Y2VlZCB0aGUgcGFnZSBoZWlnaHRcbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplOyAvLyBSZXNldCB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICk7XG4gICAgICAgIC8vIEluY3JlbWVudCBoZWlnaHQgZm9yIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIHRleHRcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0OyAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgaGVpZ2h0XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3BhY2luZyBhZnRlciB0aGUgc2VjdGlvblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHNpZ25hdHVyZVBhZ2VOdW1iZXI7XG4gIGxldCBzaWduYXR1cmVMaW5lSGVpZ2h0O1xuICBpZiAocGFyYW0/LmlzUGRmRm9yRHNjKSB7XG4gICAgLy8gUERGIGlzIGZvciBEaWdpdGFsIFNpZ25hdHVyZVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIERTQ19IRUlHSFQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBzaWduYXR1cmVQYWdlTnVtYmVyID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgICBzaWduYXR1cmVMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IERTQ19IRUlHSFQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICtcbiAgICAgICAgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbnVtUGFnZXMgPSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuXG4gIC8vIEFkZCBQYWdlIE51bWJlciBhdCBib3R0b21cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHBhZ2UgYW5kIGFkZHMgdGhlIHBhZ2UgbnVtYmVyIGF0IGJvdHRvbVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1QYWdlczsgaSsrKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICB9XG4gICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgbnVtUGFnZXMsXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhw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QUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFB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