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
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, DSC_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, columnWidth, requestedByText, createdByText, addDesc, noteData, staticVAContent, paymentDetails, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, numPages, i, returnObj, blobOutput;
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

            // Handle long names with text wrapping
            if (param.data.requestedBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              requestedByText = splitTextAndGetHeight(param.data.requestedBy, columnWidth - 5);
              doc.text(10, currentHeight, requestedByText.text);
              customerNameHeight = requestedByText.height;
            } else {
              customerNameHeight = 0;
            }
            if (param.data.createdBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              createdByText = splitTextAndGetHeight(param.data.createdBy, columnWidth - 5);
              doc.text(10 + columnWidth * 1, currentHeight, createdByText.text);
              customerNameHeight += createdByText.height;
            } else {
              customerNameHeight = 0;
            }

            // Adjust current height based on the taller of the two text blocks
            currentHeight += Math.max(customerNameHeight, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzMkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzgkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHJvdyIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHJvdyIsIl9wcm9wcyRkYXRhNDIiLCJfcHJvcHMkZGF0YTQyJHJvdyIsIl9wcm9wcyRkYXRhNDIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHRvdGFsIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkdG90YWwiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCR0b3RhbCIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JHRvdGFsIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkcm93IiwiX3Byb3BzJGRhdGE1NiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJCIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJDIiLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjciLCJfcHJvcHMkZGF0YTY3JGVTaWduIiwiX3Byb3BzJGRhdGE2NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OCIsIl9wcm9wcyRkYXRhNjgkZVNpZ24iLCJfcHJvcHMkZGF0YTY4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5IiwiX3Byb3BzJGRhdGE2OSRlU2lnbiIsIl9wcm9wcyRkYXRhNjkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNzAiLCJfcHJvcHMkZGF0YTcwJGVTaWduIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNzEiLCJfcHJvcHMkZGF0YTcxJGVTaWduIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiaXNCcmVha1BhZ2UiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiREVGQVVMVF9DVVJSRU5UX0hFSUdIVCIsIkRTQ19IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiY29sdW1uV2lkdGgiLCJyZXF1ZXN0ZWRCeVRleHQiLCJjcmVhdGVkQnlUZXh0IiwiYWRkRGVzYyIsIm5vdGVEYXRhIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJzaWduYXR1cmVQYWdlTnVtYmVyIiwic2lnbmF0dXJlTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm51bVBhZ2VzIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsImhlYWRlclRleHRTaXplIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImlzUGRmRm9yRHNjIiwicGRmU3ViVGl0bGUiLCJsb2dvIiwic3JjIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJ1c2luZXNzIiwibmFtZSIsImFkZHJlc3MiLCJlbWFpbF8xIiwiY291bnRyeSIsInRheE51bWJlciIsImNvbnRhY3QiLCJzdWJUb3RhbExhYmVsIiwiZHBwTmlsYWlMYWluTGFiZWwiLCJkcHBOaWxhaUxhaW4iLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJzdWJUb3RhbCIsImN1cnJlbmN5IiwiZGVzY0xhYmVsIiwicmVxdWVzdGVkQnkiLCJjcmVhdGVkQnkiLCJjdXN0b21GaWVsZHMiLCJhdXRob3Jpc2VkQnkiLCJzdGF0aWNWQSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicm93MSIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJzdHlsZSIsImZvbnRTaXplIiwiaGlkZVRvdGFsIiwicm93MiIsInJvdzMiLCJ0b3RhbCIsImNvbDUiLCJ0b3RhbENvbnYiLCJzdWJUb3RhbENvbnYiLCJkcHBOaWxhaUxhaW5Db252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImxhYmVsNSIsImxhYmVsNiIsImFja0RhdGUiLCJhY2tOdW1iZXIiLCJlU2lnbiIsImFwcHJvdmVyTmFtZSIsImFwcHJvdmVkQXQiLCJhdXRob3JpemVyIiwiYXBwcm92ZXJUZXh0Iiwic2lnbmF0dXJlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzaXplIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJnZXROdW1iZXJPZlBhZ2VzIiwianNQREYiLCJnZXRQYWdlV2lkdGgiLCJnZXRQYWdlSGVpZ2h0IiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJtYXhUZXh0SGVpZ2h0SGVhZGVyIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJyb3d0ZXh0IiwiTWF0aCIsIm1heCIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiYWRkUGFnZSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwidG9Mb2NhbGVTdHJpbmciLCJ0YXgiLCJjb25jYXQiLCJhbW91bnQiLCJzZXRGaWxsQ29sb3IiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2giLCJiYW5rIiwiYWNjb3VudCIsInNldFBhZ2UiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImRpZ2l0YWxTaWduIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBpc1BkZkZvckRzYz86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgcGRmU3ViVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgZHBwTmlsYWlMYWluTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW4/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGNyZWF0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw2OiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tEYXRlOiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tOdW1iZXI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIGhpZGVUb3RhbD86IGJvb2xlYW5cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3czPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgcGRmVGl0bGU6IHByb3BzLnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgaXNQZGZGb3JEc2M6IHByb3BzLmlzUGRmRm9yRHNjIHx8IGZhbHNlLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZHBwTmlsYWlMYWluTGFiZWw6IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbkxhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW46IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbiB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGNyZWF0ZWRCeTogcHJvcHMuZGF0YT8uY3JlYXRlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgZHBwTmlsYWlMYWluQ29udjogcHJvcHMuZGF0YT8udG90YWw/LmRwcE5pbGFpTGFpbkNvbnYgfHwgXCJcIixcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBoZWlnaHQuXG4gIC8vIGlmIHRydWUsIHRoZW4gd2UgYnJlYWsgdGhlIGNoYW5nZS5cbiAgLy8gQ2hlY2tpbmcgd2l0aCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUIGJlY2F1c2Ugb2YgY3VycmVudCBwYWdlIG5lZWRzIHRvIGhhdmUgc29tZSBzcGFjaW5nIGF0IHRoZSBib3R0b20uXG4gIGNvbnN0IGlzQnJlYWtQYWdlID0gKGhlaWdodCwgcGFnZUhlaWdodCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBoZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoaGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICBjb25zdCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUID0gMTA7XG4gIGNvbnN0IERTQ19IRUlHSFQgPSAzMDtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICB9XG5cbiAgaWYgKHBhcmFtLnBkZlN1YlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCAtPSA1O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmU3ViVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChcbiAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgcGFyYW0uYnVzaW5lc3MubmFtZSxcbiAgICBBTElHTl9SSUdIVFxuICApO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIC8vIGNvbXBhbnkgbG9nb1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIC8vIHRlbmFudCB0YXggbnVtYmVyXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTEudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUzLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGxldCBjdXN0b21lck5hbWVIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgY29uc3QgY3VzdG9tZXJOYW1lID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdC5uYW1lLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGN1c3RvbWVyTmFtZS50ZXh0KTtcbiAgICBjdXN0b21lck5hbWVIZWlnaHQgPSBjdXN0b21lck5hbWUuaGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGxldCBsYWJlbEhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgY29uc3QgbGFiZWwgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICAocGFnZVdpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgbGFiZWwudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGxhYmVsSGVpZ2h0ID0gbGFiZWwuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBjdXN0b21lck5hbWVIZWlnaHQgPiBsYWJlbEhlaWdodCA/IGN1c3RvbWVyTmFtZUhlaWdodCA6IGxhYmVsSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBjb25zdCBwZGZUaXRsZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGE/LnBkZlRpdGxlLFxuICAgICAgKHBhZ2VXaWR0aCAqIDMpIC8gNFxuICAgICk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGRmVGl0bGUudGV4dCwgQUxJR05fTEVGVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZUaXRsZS5oZWlnaHQgLSA0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPVxuICAgIChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgbGV0IG1heFRleHRIZWlnaHRIZWFkZXIgPSAwO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHJvd3RleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnNbaW5kZXhdLndpZHRoIC0gM1xuICAgICAgKTtcbiAgICAgIG1heFRleHRIZWlnaHRIZWFkZXIgPSBNYXRoLm1heChtYXhUZXh0SGVpZ2h0SGVhZGVyLCByb3d0ZXh0LmhlaWdodCk7XG4gICAgICBkb2MudGV4dChyb3d0ZXh0LnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heFRleHRIZWlnaHRIZWFkZXIgKyAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgICB9XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApO1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwgJiYgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSBwYWdlV2lkdGggLSBib3hXaWR0aCAtIDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgNTtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAgIFxuICAgICAgICBbXCJEcHAgTmlsYWkgTGFpblwiLCBwYXJhbS5kYXRhLnRvdGFsLmRwcE5pbGFpTGFpbkNvbnZdLFxuICAgICAgICBcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgLy8gcmVxdWVzdGVkIGJ5IGFuZCBjcmVhdGVkIGJ5IFxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSB8fCBwYXJhbS5kYXRhLmNyZWF0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBcbiAgICBjb25zdCBjb2x1bW5XaWR0aCA9IChkb2NXaWR0aCAtIDIwKSAvIDQ7XG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtLmRhdGEuY3JlYXRlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dCgxMCArIGNvbHVtbldpZHRoICogMSwgY3VycmVudEhlaWdodCwgXCJDcmVhdGVkIEJ5XCIpO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIFxuICAgIC8vIEhhbmRsZSBsb25nIG5hbWVzIHdpdGggdGV4dCB3cmFwcGluZ1xuICAgIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGNvbnN0IHJlcXVlc3RlZEJ5VGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5LCBjb2x1bW5XaWR0aCAtIDUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHJlcXVlc3RlZEJ5VGV4dC50ZXh0KTtcbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IHJlcXVlc3RlZEJ5VGV4dC5oZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IDA7XG4gICAgfVxuICAgIFxuICAgIGlmIChwYXJhbS5kYXRhLmNyZWF0ZWRCeSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBjb25zdCBjcmVhdGVkQnlUZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEuY3JlYXRlZEJ5LCBjb2x1bW5XaWR0aCAtIDUpO1xuICAgICAgZG9jLnRleHQoMTAgKyBjb2x1bW5XaWR0aCAqIDEsIGN1cnJlbnRIZWlnaHQsIGNyZWF0ZWRCeVRleHQudGV4dCk7XG4gICAgICBjdXN0b21lck5hbWVIZWlnaHQgKz0gY3JlYXRlZEJ5VGV4dC5oZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IDA7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkanVzdCBjdXJyZW50IGhlaWdodCBiYXNlZCBvbiB0aGUgdGFsbGVyIG9mIHRoZSB0d28gdGV4dCBibG9ja3NcbiAgICBjdXJyZW50SGVpZ2h0ICs9IE1hdGgubWF4KGN1c3RvbWVyTmFtZUhlaWdodCwgMCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubm90ZSxcbiAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgLy8gV3JpdGUgdGhlIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiIGxhYmVsXG5cbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRleHQgaGVpZ2h0XG4gICAgICBjb25zdCB7IHRleHQsIGhlaWdodCB9ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBpdGVtLFxuICAgICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICAgICk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGFkZGluZyB0aGlzIGl0ZW0gd2lsbCBleGNlZWQgdGhlIHBhZ2UgaGVpZ2h0XG4gICAgICBpZiAoY3VycmVudEhlaWdodCArIGhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTsgLy8gUmVzZXQgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIlxuICAgICAgICApO1xuICAgICAgICAvLyBJbmNyZW1lbnQgaGVpZ2h0IGZvciB0aGUgbmV4dCBsaW5lXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSB0ZXh0XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgdGV4dCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGhlaWdodDsgLy8gSW5jcmVtZW50IHRoZSBjdXJyZW50IGhlaWdodFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIHNwYWNpbmcgYWZ0ZXIgdGhlIHNlY3Rpb25cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkF1dGhvcmlzZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gO1xuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgc3RhdGljVkFDb250ZW50LFxuICAgICAgcGFnZVdpZHRoIC0gNDBcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGxldCBzaWduYXR1cmVQYWdlTnVtYmVyO1xuICBsZXQgc2lnbmF0dXJlTGluZUhlaWdodDtcbiAgaWYgKHBhcmFtPy5pc1BkZkZvckRzYykge1xuICAgIC8vIFBERiBpcyBmb3IgRGlnaXRhbCBTaWduYXR1cmVcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyBEU0NfSEVJR0hUID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgc2lnbmF0dXJlUGFnZU51bWJlciA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gICAgc2lnbmF0dXJlTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBEU0NfSEVJR0hUO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArXG4gICAgICAgIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG51bVBhZ2VzID0gZG9jLmdldE51bWJlck9mUGFnZXMoKTtcblxuICAvLyBBZGQgUGFnZSBOdW1iZXIgYXQgYm90dG9tXG4gIC8vIEl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwYWdlIGFuZCBhZGRzIHRoZSBwYWdlIG51bWJlciBhdCBib3R0b21cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtUGFnZXM7IGkrKykge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgfVxuICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIG51bVBhZ2VzLFxuICAgICAgZG9jV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuT2JqLmVzdGFtcCA9IHtcbiAgICBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsLFxuICAgIGludm9pY2VUb3RhbExpbmVIZWlnaHQsXG4gIH07XG5cbiAgaWYgKHBhcmFtLmlzUGRmRm9yRHNjKSB7XG4gICAgcmV0dXJuT2JqLmRpZ2l0YWxTaWduID0ge1xuICAgICAgc2lnbmF0dXJlUGFnZU51bWJlcixcbiAgICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFF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YUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxXQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsc0JBQUEsRUFBQUMsVUFBQSxFQUFBQyxhQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGtCQUFBLEVBQUFDLFlBQUEsRUFBQUMsV0FBQSxFQUFBQyxLQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsb0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsaUJBQUEsRUFBQUMsUUFBQSxFQUFBQyxZQUFBLEVBQUFDLFFBQUEsRUFBQUMsT0FBQSxFQThuQjlCQyxvQkFBb0IsRUFBQUMscUJBQUEsRUFBQUMsbUJBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGFBQUEsRUFBQUMseUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxPQUFBLEVBQUFDLGNBQUEsRUFBQUMsSUFBQSxFQUFBQyxZQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxJQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBQyxlQUFBLEVBQUFDLGFBQUEsRUFBQUMsT0FBQSxFQUFBQyxRQUFBLEVBQUFDLGVBQUEsRUFBQUMsY0FBQSxFQUFBQyxtQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFB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