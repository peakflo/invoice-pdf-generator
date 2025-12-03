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
            bodyRows = [["Subtotal", param.data.total.subTotalConv]].concat((0, _toConsumableArray2["default"])(param.data.total.dppNilaiLainConv !== undefined && param.data.total.dppNilaiLainConv !== null ? [["Dpp Nilai Lain", param.data.total.dppNilaiLainConv]] : []), [["Total Tax", param.data.total.totalTaxAmountConv], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI3IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzMkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzgkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHJvdyIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHJvdyIsIl9wcm9wcyRkYXRhNDIiLCJfcHJvcHMkZGF0YTQyJHJvdyIsIl9wcm9wcyRkYXRhNDIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHRvdGFsIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTMkdG90YWwiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCR0b3RhbCIsIl9wcm9wcyRkYXRhNTUiLCJfcHJvcHMkZGF0YTU1JHRvdGFsIiwiX3Byb3BzJGRhdGE1NiIsIl9wcm9wcyRkYXRhNTYkcm93IiwiX3Byb3BzJGRhdGE1NiRyb3ckc3R5IiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckYW1vdW50RCIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YTU4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRhbW91bnREIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNjAkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJCIsIl9wcm9wcyRkYXRhJGluZGlhSVJQJDIiLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjciLCJfcHJvcHMkZGF0YTY3JGVTaWduIiwiX3Byb3BzJGRhdGE2NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2OCIsIl9wcm9wcyRkYXRhNjgkZVNpZ24iLCJfcHJvcHMkZGF0YTY4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY5IiwiX3Byb3BzJGRhdGE2OSRlU2lnbiIsIl9wcm9wcyRkYXRhNjkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNzAiLCJfcHJvcHMkZGF0YTcwJGVTaWduIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNzEiLCJfcHJvcHMkZGF0YTcxJGVTaWduIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE3MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiaXNCcmVha1BhZ2UiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiREVGQVVMVF9DVVJSRU5UX0hFSUdIVCIsIkRTQ19IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiYm9keVJvd3MiLCJjb2x1bW5XaWR0aCIsInJlcXVlc3RlZEJ5VGV4dCIsImNyZWF0ZWRCeVRleHQiLCJhZGREZXNjIiwibm90ZURhdGEiLCJzdGF0aWNWQUNvbnRlbnQiLCJwYXltZW50RGV0YWlscyIsInNpZ25hdHVyZVBhZ2VOdW1iZXIiLCJzaWduYXR1cmVMaW5lSGVpZ2h0IiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibnVtUGFnZXMiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwiaGVhZGVyVGV4dFNpemUiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRwcE5pbGFpTGFpbiIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImNyZWF0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImRwcE5pbGFpTGFpbkNvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsIm1heFRleHRIZWlnaHRIZWFkZXIiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInJvd3RleHQiLCJNYXRoIiwibWF4Iiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJhZGRQYWdlIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImNvbmNhdCIsImFtb3VudCIsInNldEZpbGxDb2xvciIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJjb250ZW50IiwiZm9udFN0eWxlIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2giLCJiYW5rIiwiYWNjb3VudCIsInNldFBhZ2UiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImRpZ2l0YWxTaWduIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcbmltcG9ydCBqc1BERlJmcVRlbXBsYXRlIGZyb20gXCIuL1JGUVwiO1xuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYsIGpzUERGUmZxVGVtcGxhdGUgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBpc1BkZkZvckRzYz86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgcGRmU3ViVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgZHBwTmlsYWlMYWluTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkcHBOaWxhaUxhaW4/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGNyZWF0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw2OiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tEYXRlOiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tOdW1iZXI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIGhpZGVUb3RhbD86IGJvb2xlYW5cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3czPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgcGRmVGl0bGU6IHByb3BzLnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgaXNQZGZGb3JEc2M6IHByb3BzLmlzUGRmRm9yRHNjIHx8IGZhbHNlLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZHBwTmlsYWlMYWluTGFiZWw6IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbkxhYmVsIHx8IFwiXCIsXG4gICAgICBkcHBOaWxhaUxhaW46IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbiB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGNyZWF0ZWRCeTogcHJvcHMuZGF0YT8uY3JlYXRlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgZHBwTmlsYWlMYWluQ29udjogcHJvcHMuZGF0YT8udG90YWw/LmRwcE5pbGFpTGFpbkNvbnYgfHwgXCJcIixcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBwYWdlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGFnZSBoZWlnaHQuXG4gIC8vIGlmIHRydWUsIHRoZW4gd2UgYnJlYWsgdGhlIGNoYW5nZS5cbiAgLy8gQ2hlY2tpbmcgd2l0aCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUIGJlY2F1c2Ugb2YgY3VycmVudCBwYWdlIG5lZWRzIHRvIGhhdmUgc29tZSBzcGFjaW5nIGF0IHRoZSBib3R0b20uXG4gIGNvbnN0IGlzQnJlYWtQYWdlID0gKGhlaWdodCwgcGFnZUhlaWdodCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBoZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoaGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICBjb25zdCBERUZBVUxUX0NVUlJFTlRfSEVJR0hUID0gMTA7XG4gIGNvbnN0IERTQ19IRUlHSFQgPSAzMDtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICB9XG5cbiAgaWYgKHBhcmFtLnBkZlN1YlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCAtPSA1O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmU3ViVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChcbiAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgcGFyYW0uYnVzaW5lc3MubmFtZSxcbiAgICBBTElHTl9SSUdIVFxuICApO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIC8vIGNvbXBhbnkgbG9nb1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIC8vIHRlbmFudCB0YXggbnVtYmVyXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTEudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUxLmhlaWdodCArIDE7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMi5oZWlnaHQgKyAxO1xuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUzLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUzLmhlaWdodCArIDE7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSwgQUxJR05fUklHSFQpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLCBBTElHTl9SSUdIVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9saW5lIGJyZWFrZXIgYWZ0ZXIgbG9nbyAmIGJ1c2luZXNzIGluZm9cbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgLy9Db250YWN0IHBhcnRcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNyk7XG4gIGxldCBjdXN0b21lck5hbWVIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgY29uc3QgY3VzdG9tZXJOYW1lID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdC5uYW1lLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGN1c3RvbWVyTmFtZS50ZXh0KTtcbiAgICBjdXN0b21lck5hbWVIZWlnaHQgPSBjdXN0b21lck5hbWUuaGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGxldCBsYWJlbEhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgY29uc3QgbGFiZWwgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLmxhYmVsICsgcGFyYW0uZGF0YS5udW0sXG4gICAgICAocGFnZVdpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgbGFiZWwudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGxhYmVsSGVpZ2h0ID0gbGFiZWwuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBjdXN0b21lck5hbWVIZWlnaHQgPiBsYWJlbEhlaWdodCA/IGN1c3RvbWVyTmFtZUhlaWdodCA6IGxhYmVsSGVpZ2h0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBjb25zdCBwZGZUaXRsZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGE/LnBkZlRpdGxlLFxuICAgICAgKHBhZ2VXaWR0aCAqIDMpIC8gNFxuICAgICk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGRmVGl0bGUudGV4dCwgQUxJR05fTEVGVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZUaXRsZS5oZWlnaHQgLSA0O1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPVxuICAgIChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgbGV0IG1heFRleHRIZWlnaHRIZWFkZXIgPSAwO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHJvd3RleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnNbaW5kZXhdLndpZHRoIC0gM1xuICAgICAgKTtcbiAgICAgIG1heFRleHRIZWlnaHRIZWFkZXIgPSBNYXRoLm1heChtYXhUZXh0SGVpZ2h0SGVhZGVyLCByb3d0ZXh0LmhlaWdodCk7XG4gICAgICBkb2MudGV4dChyb3d0ZXh0LnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heFRleHRIZWlnaHRIZWFkZXIgKyAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgICB9XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApO1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluTGFiZWwgJiYgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW4pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5kcHBOaWxhaUxhaW5MYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuZHBwTmlsYWlMYWluLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgYm94IHBhcmFtZXRlcnNcbiAgICBjb25zdCBib3hXaWR0aCA9IDk1O1xuICAgIGNvbnN0IGJveEhlaWdodCA9IDMwO1xuICAgIGNvbnN0IGJveFggPSBwYWdlV2lkdGggLSBib3hXaWR0aCAtIDEwO1xuICAgIGNvbnN0IGJveFkgPSBjdXJyZW50SGVpZ2h0ICsgNTtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgY29uc3QgYm9keVJvd3MgPSBbXG4gICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAuLi4ocGFyYW0uZGF0YS50b3RhbC5kcHBOaWxhaUxhaW5Db252ICE9PSB1bmRlZmluZWQgJiYgcGFyYW0uZGF0YS50b3RhbC5kcHBOaWxhaUxhaW5Db252ICE9PSBudWxsXG4gICAgICAgID8gW1tcIkRwcCBOaWxhaSBMYWluXCIsIHBhcmFtLmRhdGEudG90YWwuZHBwTmlsYWlMYWluQ29udl1dXG4gICAgICAgIDogW10pLFxuICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgfSxcbiAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgXSxcbiAgICBdO1xuXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogYm9keVJvd3MsXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBib3hIZWlnaHQgKyAzMDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gIC8vIHJlcXVlc3RlZCBieSBhbmQgY3JlYXRlZCBieSBcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkgfHwgcGFyYW0uZGF0YS5jcmVhdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgXG4gICAgY29uc3QgY29sdW1uV2lkdGggPSAoZG9jV2lkdGggLSAyMCkgLyA0O1xuICAgIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgfVxuICAgIGlmIChwYXJhbS5kYXRhLmNyZWF0ZWRCeSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoMTAgKyBjb2x1bW5XaWR0aCAqIDEsIGN1cnJlbnRIZWlnaHQsIFwiQ3JlYXRlZCBCeVwiKTtcbiAgICB9XG4gICAgXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBcbiAgICAvLyBIYW5kbGUgbG9uZyBuYW1lcyB3aXRoIHRleHQgd3JhcHBpbmdcbiAgICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBjb25zdCByZXF1ZXN0ZWRCeVRleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSwgY29sdW1uV2lkdGggLSA1KTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCByZXF1ZXN0ZWRCeVRleHQudGV4dCk7XG4gICAgICBjdXN0b21lck5hbWVIZWlnaHQgKz0gcmVxdWVzdGVkQnlUZXh0LmhlaWdodDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHBhcmFtLmRhdGEuY3JlYXRlZEJ5KSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGNvbnN0IGNyZWF0ZWRCeVRleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5jcmVhdGVkQnksIGNvbHVtbldpZHRoIC0gNSk7XG4gICAgICBkb2MudGV4dCgxMCArIGNvbHVtbldpZHRoICogMSwgY3VycmVudEhlaWdodCwgY3JlYXRlZEJ5VGV4dC50ZXh0KTtcbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCArPSBjcmVhdGVkQnlUZXh0LmhlaWdodDtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRqdXN0IGN1cnJlbnQgaGVpZ2h0IGJhc2VkIG9uIHRoZSB0YWxsZXIgb2YgdGhlIHR3byB0ZXh0IGJsb2Nrc1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gTWF0aC5tYXgoY3VzdG9tZXJOYW1lSGVpZ2h0LCAwKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5ub3RlLFxuICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBXcml0ZSB0aGUgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIgbGFiZWxcblxuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGV4dCBoZWlnaHRcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhZ2VXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZVxuICAgICAgKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYWRkaW5nIHRoaXMgaXRlbSB3aWxsIGV4Y2VlZCB0aGUgcGFnZSBoZWlnaHRcbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplOyAvLyBSZXNldCB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICk7XG4gICAgICAgIC8vIEluY3JlbWVudCBoZWlnaHQgZm9yIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIHRleHRcbiAgICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0OyAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgaGVpZ2h0XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3BhY2luZyBhZnRlciB0aGUgc2VjdGlvblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHNpZ25hdHVyZVBhZ2VOdW1iZXI7XG4gIGxldCBzaWduYXR1cmVMaW5lSGVpZ2h0O1xuICBpZiAocGFyYW0/LmlzUGRmRm9yRHNjKSB7XG4gICAgLy8gUERGIGlzIGZvciBEaWdpdGFsIFNpZ25hdHVyZVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIERTQ19IRUlHSFQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBzaWduYXR1cmVQYWdlTnVtYmVyID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgICBzaWduYXR1cmVMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IERTQ19IRUlHSFQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICtcbiAgICAgICAgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbnVtUGFnZXMgPSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuXG4gIC8vIEFkZCBQYWdlIE51bWJlciBhdCBib3R0b21cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHBhZ2UgYW5kIGFkZHMgdGhlIHBhZ2UgbnVtYmVyIGF0IGJvdHRvbVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1QYWdlczsgaSsrKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICB9XG4gICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgbnVtUGFnZXMsXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkpBLFNBd0plUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxXQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsc0JBQUEsRUFBQUMs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RUFBRSxFQUFBblMsYUFBQSxHQUFBdEQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBM1AsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsUUFBUSxLQUFJLEVBQUU7Y0FDcENDLFFBQVEsRUFBRSxFQUFBblMsYUFBQSxHQUFBdkQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBMVAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsUUFBUSxLQUFJLEVBQUU7Y0FDcENDLFNBQVMsRUFBRSxFQUFBblMsYUFBQSxHQUFBeEQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBelAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsU0FBUyxLQUFJLEVBQUU7Y0FDdENDLFdBQVcsRUFBRSxFQUFBblMsYUFBQSxHQUFBekQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBeFAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsV0FBVyxLQUFJLEVBQUU7Y0FDMUNDLFNBQVMsRUFBRSxFQUFBblMsYUFBQSxHQUFBMUQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBdlAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsU0FBUyxLQUFJLEVBQUU7Y0FDdENDLFlBQVksRUFBRSxFQUFBblMsYUFBQSxHQUFBM0QsS0FBSyxDQUFDaVQsSUFBSSxjQUFBdFAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsWUFBWSxLQUFJLEVBQUU7Y0FDNUNDLFlBQVksRUFBRSxFQUFBblMsYUFBQSxHQUFBNUQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBclAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsWUFBWSxLQUFJLEVBQUU7Y0FDNUNDLFFBQVEsR0FBQW5TLGFBQUEsR0FBRTdELEtBQUssQ0FBQ2lULElBQUksY0FBQXBQLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWW1TLFFBQVE7Y0FDOUJDLElBQUksRUFBRSxFQUFBblMsYUFBQSxHQUFBOUQsS0FBSyxDQUFDaVQsSUFBSSxjQUFBblAsYUFBQSx1QkFBVkEsYUFBQSxDQUFZbVMsSUFBSSxLQUFJLEVBQUU7Y0FDNUJDLGVBQWUsRUFBRSxFQUFBblMsYUFBQSxHQUFBL0Qs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