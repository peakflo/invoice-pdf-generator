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
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, DSC_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, bodyRows, columnWidth, requestedByText, createdByText, addDesc, noteData, staticVAContent, paymentDetails, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, numPages, i, returnObj, blobOutput;
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
            bodyRows = [["Subtotal", param.data.total.subTotalConv]].concat((0, _toConsumableArray2["default"])(param.data.total.dppNilaiLainConv !== '' && param.data.total.dppNilaiLainConv !== undefined && param.data.total.dppNilaiLainConv !== null ? [["Dpp Nilai Lain", param.data.total.dppNilaiLainConv]] : []), [["Total Tax", param.data.total.totalTaxAmountConv], [{
              content: "Total ".concat(param.data.total.defaultCurrency),
              fontStyle: "bold"
            }, {
              content: param.data.total.totalConv,
              fontStyle: "bold"
            }]]);
            doc.autoTable({
              startY: boxY + 18,
              margin: {
                left: boxX,
                right: 0
              },
              head: [["", "Amount ".concat(param.data.total.defaultCurrency)]],
              body: bodyRows,
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
              customerNameHeight += requestedByText.height;
            }
            if (param.data.createdBy) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              createdByText = splitTextAndGetHeight(param.data.createdBy, columnWidth - 5);
              doc.text(10 + columnWidth * 1, currentHeight, createdByText.text);
              customerNameHeight += createdByText.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzMkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzgkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHJvdyIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHJvdyIsIl9wcm9wcyRkYXRhNDIiLCJfcHJvcHMkZGF0YTQyJHJvdyIsIl9wcm9wcyRkYXRhNDIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHRvdGFsIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkdG90YWwiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCR0b3RhbCIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JHRvdGFsIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkcm93IiwiX3Byb3BzJGRhdGE1NiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJCIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJDIiLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjciLCJfcHJvcHMkZGF0YTY3JGVTaWduIiwiX3Byb3BzJGRhdGE2NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OCIsIl9wcm9wcyRkYXRhNjgkZVNpZ24iLCJfcHJvcHMkZGF0YTY4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5IiwiX3Byb3BzJGRhdGE2OSRlU2lnbiIsIl9wcm9wcyRkYXRhNjkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNzAiLCJfcHJvcHMkZGF0YTcwJGVTaWduIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNzEiLCJfcHJvcHMkZGF0YTcxJGVTaWduIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiaXNCcmVha1BhZ2UiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiREVGQVVMVF9DVVJSRU5UX0hFSUdIVCIsIkRTQ19IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiYm9keVJvd3MiLCJjb2x1bW5XaWR0aCIsInJlcXVlc3RlZEJ5VGV4dCIsImNyZWF0ZWRCeVRleHQiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImNyZWF0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJjb250ZW50IiwiZm9udFN0eWxlIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2giLCJiYW5rIiwiYWNjb3VudCIsInNldFBhZ2UiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImRpZ2l0YWxTaWduIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBpc1BkZkZvckRzYz86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgcGRmU3ViVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgZHBwTmlsYWlMYWluTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW4/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGNyZWF0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw2OiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tEYXRlOiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tOdW1iZXI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIGhpZGVUb3RhbD86IGJvb2xlYW5cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3czPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgcGRmVGl0bGU6IHByb3BzLnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgaXNQZGZGb3JEc2M6IHByb3BzLmlzUGRmRm9yRHNjIHx8IGZhbHNlLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZHBwTmlsYWlMYWluTGFiZWw6IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbkxhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW46IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbiB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGNyZWF0ZWRCeTogcHJvcHMuZGF0YT8uY3JlYXRlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgZHBwTmlsYWlMYWluQ29udjogcHJvcHMuZGF0YT8udG90YWw/LmRwcE5pbGFpTGFpbkNvbnYgfHwgXCJcIixcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBoZWlnaHQuXG4gIC8vIGlmIHRydWUsIHRoZW4gd2UgYnJlYWsgdGhlIGNoYW5nZS5cbiAgLy8gQ2hlY2tpbmcgd2l0aCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUIGJlY2F1c2Ugb2YgY3VycmVudCBwYWdlIG5lZWRzIHRvIGhhdmUgc29tZSBzcGFjaW5nIGF0IHRoZSBib3R0b20uXG4gIGNvbnN0IGlzQnJlYWtQYWdlID0gKGhlaWdodCwgcGFnZUhlaWdodCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBoZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoaGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICBjb25zdCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUID0gMTA7XG4gIGNvbnN0IERTQ19IRUlHSFQgPSAzMDtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICB9XG5cbiAgaWYgKHBhcmFtLnBkZlN1YlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCAtPSA1O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmU3ViVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChcbiAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgcGFyYW0uYnVzaW5lc3MubmFtZSxcbiAgICBBTElHTl9SSUdIVFxuICApO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIC8vIGNvbXBhbnkgbG9nb1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIC8vIHRlbmFudCB0YXggbnVtYmVyXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTEudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUzLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGxldCBjdXN0b21lck5hbWVIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgY29uc3QgY3VzdG9tZXJOYW1lID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdC5uYW1lLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGN1c3RvbWVyTmFtZS50ZXh0KTtcbiAgICBjdXN0b21lck5hbWVIZWlnaHQgPSBjdXN0b21lck5hbWUuaGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGxldCBsYWJlbEhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgY29uc3QgbGFiZWwgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICAocGFnZVdpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgbGFiZWwudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGxhYmVsSGVpZ2h0ID0gbGFiZWwuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBjdXN0b21lck5hbWVIZWlnaHQgPiBsYWJlbEhlaWdodCA/IGN1c3RvbWVyTmFtZUhlaWdodCA6IGxhYmVsSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBjb25zdCBwZGZUaXRsZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGE/LnBkZlRpdGxlLFxuICAgICAgKHBhZ2VXaWR0aCAqIDMpIC8gNFxuICAgICk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGRmVGl0bGUudGV4dCwgQUxJR05fTEVGVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZUaXRsZS5oZWlnaHQgLSA0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPVxuICAgIChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgbGV0IG1heFRleHRIZWlnaHRIZWFkZXIgPSAwO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHJvd3RleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnNbaW5kZXhdLndpZHRoIC0gM1xuICAgICAgKTtcbiAgICAgIG1heFRleHRIZWlnaHRIZWFkZXIgPSBNYXRoLm1heChtYXhUZXh0SGVpZ2h0SGVhZGVyLCByb3d0ZXh0LmhlaWdodCk7XG4gICAgICBkb2MudGV4dChyb3d0ZXh0LnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heFRleHRIZWlnaHRIZWFkZXIgKyAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgICB9XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApO1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwgJiYgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSBwYWdlV2lkdGggLSBib3hXaWR0aCAtIDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgNTtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgY29uc3QgYm9keVJvd3MgPSBbXG4gICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAuLi4ocGFyYW0uZGF0YS50b3RhbC5kcHBOaWxhaUxhaW5Db252ICE9PSAnJyAmJiBwYXJhbS5kYXRhLnRvdGFsLmRwcE5pbGFpTGFpbkNvbnYgIT09IHVuZGVmaW5lZCAmJiBwYXJhbS5kYXRhLnRvdGFsLmRwcE5pbGFpTGFpbkNvbnYgIT09IG51bGxcbiAgICAgICAgPyBbW1wiRHBwIE5pbGFpIExhaW5cIiwgcGFyYW0uZGF0YS50b3RhbC5kcHBOaWxhaUxhaW5Db252XV1cbiAgICAgICAgOiBbXSksXG4gICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICBdLFxuICAgIF07XG5cbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBib2R5Um93cyxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgLy8gcmVxdWVzdGVkIGJ5IGFuZCBjcmVhdGVkIGJ5IFxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSB8fCBwYXJhbS5kYXRhLmNyZWF0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBcbiAgICBjb25zdCBjb2x1bW5XaWR0aCA9IChkb2NXaWR0aCAtIDIwKSAvIDQ7XG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtLmRhdGEuY3JlYXRlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dCgxMCArIGNvbHVtbldpZHRoICogMSwgY3VycmVudEhlaWdodCwgXCJDcmVhdGVkIEJ5XCIpO1xuICAgIH1cbiAgICBcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIFxuICAgIC8vIEhhbmRsZSBsb25nIG5hbWVzIHdpdGggdGV4dCB3cmFwcGluZ1xuICAgIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGNvbnN0IHJlcXVlc3RlZEJ5VGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5LCBjb2x1bW5XaWR0aCAtIDUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHJlcXVlc3RlZEJ5VGV4dC50ZXh0KTtcbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCArPSByZXF1ZXN0ZWRCeVRleHQuaGVpZ2h0O1xuICAgIH1cbiAgICBcbiAgICBpZiAocGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgY29uc3QgY3JlYXRlZEJ5VGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLmNyZWF0ZWRCeSwgY29sdW1uV2lkdGggLSA1KTtcbiAgICAgIGRvYy50ZXh0KDEwICsgY29sdW1uV2lkdGggKiAxLCBjdXJyZW50SGVpZ2h0LCBjcmVhdGVkQnlUZXh0LnRleHQpO1xuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ICs9IGNyZWF0ZWRCeVRleHQuaGVpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAvLyBBZGp1c3QgY3VycmVudCBoZWlnaHQgYmFzZWQgb24gdGhlIHRhbGxlciBvZiB0aGUgdHdvIHRleHQgYmxvY2tzXG4gICAgY3VycmVudEhlaWdodCArPSBNYXRoLm1heChjdXN0b21lck5hbWVIZWlnaHQsIDApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLm5vdGUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIC8vIFdyaXRlIHRoZSBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIiBsYWJlbFxuXG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0ZXh0IGhlaWdodFxuICAgICAgY29uc3QgeyB0ZXh0LCBoZWlnaHQgfSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgaXRlbSxcbiAgICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgICApO1xuXG4gICAgICAvLyBDaGVjayBpZiBhZGRpbmcgdGhpcyBpdGVtIHdpbGwgZXhjZWVkIHRoZSBwYWdlIGhlaWdodFxuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBoZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7IC8vIFJlc2V0IHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSW5jcmVtZW50IGhlaWdodCBmb3IgdGhlIG5leHQgbGluZVxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgdGV4dFxuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHRleHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBoZWlnaHQ7IC8vIEluY3JlbWVudCB0aGUgY3VycmVudCBoZWlnaHRcbiAgICB9KTtcblxuICAgIC8vIEFkZCBzcGFjaW5nIGFmdGVyIHRoZSBzZWN0aW9uXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBsZXQgc2lnbmF0dXJlUGFnZU51bWJlcjtcbiAgbGV0IHNpZ25hdHVyZUxpbmVIZWlnaHQ7XG4gIGlmIChwYXJhbT8uaXNQZGZGb3JEc2MpIHtcbiAgICAvLyBQREYgaXMgZm9yIERpZ2l0YWwgU2lnbmF0dXJlXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgRFNDX0hFSUdIVCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gRFNDX0hFSUdIVDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgK1xuICAgICAgICAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBjb25zdCBudW1QYWdlcyA9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7XG5cbiAgLy8gQWRkIFBhZ2UgTnVtYmVyIGF0IGJvdHRvbVxuICAvLyBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcGFnZSBhbmQgYWRkcyB0aGUgcGFnZSBudW1iZXIgYXQgYm90dG9tXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVBhZ2VzOyBpKyspIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIH1cbiAgICBkb2Muc2V0UGFnZShpKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBudW1QYWdlcyxcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybk9iai5lc3RhbXAgPSB7XG4gICAgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCxcbiAgICBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0LFxuICB9O1xuXG4gIGlmIChwYXJhbS5pc1BkZkZvckRzYykge1xuICAgIHJldHVybk9iai5kaWdpdGFsU2lnbiA9IHtcbiAgICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIsXG4gICAgICBzaWduYXR1cmVMaW5lSGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VU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QSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFB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