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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data35, _props$data35$row, _props$data35$row$sty, _props$data36, _props$data36$row, _props$data37, _props$data37$row, _props$data38, _props$data38$row, _props$data39, _props$data39$row, _props$data39$row$sty, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$total, _props$data48, _props$data48$total, _props$data49, _props$data49$total, _props$data50, _props$data50$total, _props$data51, _props$data51$total, _props$data52, _props$data52$row, _props$data52$row$sty, _props$data53, _props$data53$amountD, _props$data54, _props$data54$amountD, _props$data55, _props$data55$amountD, _props$data56, _props$data56$amountD, _props$data56$amountD2, _props$data57, _props$data58, _props$data$indiaIRP$, _props$data$indiaIRP$2, _props$data59, _props$data59$eSign, _props$data60, _props$data60$eSign, _props$data61, _props$data61$eSign, _props$data62, _props$data62$eSign, _props$data63, _props$data63$eSign, _props$data63$eSign$s, _props$data64, _props$data64$eSign, _props$data64$eSign$s, _props$data65, _props$data65$eSign, _props$data65$eSign$s, _props$data66, _props$data66$eSign, _props$data66$eSign$s, _props$data66$eSign$s2, _props$data67, _props$data67$eSign, _props$data67$eSign$s, _props$data67$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
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
              date1Label: ((_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.date1Label) || "",
              num: ((_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.num) || "",
              date2Label: ((_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.date2Label) || "",
              netTermLabel: ((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.netTermLabel) || "",
              date1: ((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.date1) || "",
              date2: ((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.date2) || "",
              netTerm: ((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.netTerm) || "",
              headerBorder: ((_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.headerBorder) || false,
              tableBodyBorder: ((_props$data11 = props.data) === null || _props$data11 === void 0 ? void 0 : _props$data11.tableBodyBorder) || false,
              header: ((_props$data12 = props.data) === null || _props$data12 === void 0 ? void 0 : _props$data12.header) || [],
              headerWidth: ((_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.headerWidth) || [],
              table: ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.table) || [],
              subTotal: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.subTotal) || "",
              currency: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.currency) || "",
              descLabel: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.descLabel) || "",
              requestedBy: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.requestedBy) || "",
              customFields: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.customFields) || [],
              authorisedBy: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.authorisedBy) || "",
              staticVA: (_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.staticVA,
              desc: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.desc) || "",
              creditNoteLabel: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : _props$data23.creditNoteLabel) || "",
              note: ((_props$data24 = props.data) === null || _props$data24 === void 0 ? void 0 : _props$data24.note) || "",
              pdfTitle: ((_props$data25 = props.data) === null || _props$data25 === void 0 ? void 0 : _props$data25.pdfTitle) || "",
              row1: {
                col1: ((_props$data26 = props.data) === null || _props$data26 === void 0 ? void 0 : (_props$data26$row = _props$data26.row1) === null || _props$data26$row === void 0 ? void 0 : _props$data26$row.col1) || "",
                col2: ((_props$data27 = props.data) === null || _props$data27 === void 0 ? void 0 : (_props$data27$row = _props$data27.row1) === null || _props$data27$row === void 0 ? void 0 : _props$data27$row.col2) || "",
                col3: ((_props$data28 = props.data) === null || _props$data28 === void 0 ? void 0 : (_props$data28$row = _props$data28.row1) === null || _props$data28$row === void 0 ? void 0 : _props$data28$row.col3) || "",
                col4: ((_props$data29 = props.data) === null || _props$data29 === void 0 ? void 0 : (_props$data29$row = _props$data29.row1) === null || _props$data29$row === void 0 ? void 0 : _props$data29$row.col4) || [],
                style: {
                  fontSize: ((_props$data30 = props.data) === null || _props$data30 === void 0 ? void 0 : (_props$data30$row = _props$data30.row1) === null || _props$data30$row === void 0 ? void 0 : (_props$data30$row$sty = _props$data30$row.style) === null || _props$data30$row$sty === void 0 ? void 0 : _props$data30$row$sty.fontSize) || 12
                },
                hideTotal: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row1) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.hideTotal) || false
              },
              row2: {
                col1: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row2) === null || _props$data32$row === void 0 ? void 0 : _props$data32$row.col1) || "",
                col2: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row2) === null || _props$data33$row === void 0 ? void 0 : _props$data33$row.col2) || "",
                col3: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row2) === null || _props$data34$row === void 0 ? void 0 : _props$data34$row.col3) || "",
                style: {
                  fontSize: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$row = _props$data35.row2) === null || _props$data35$row === void 0 ? void 0 : (_props$data35$row$sty = _props$data35$row.style) === null || _props$data35$row$sty === void 0 ? void 0 : _props$data35$row$sty.fontSize) || 12
                }
              },
              row3: {
                col1: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$row = _props$data36.row3) === null || _props$data36$row === void 0 ? void 0 : _props$data36$row.col1) || "",
                col2: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$row = _props$data37.row3) === null || _props$data37$row === void 0 ? void 0 : _props$data37$row.col2) || "",
                col3: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$row = _props$data38.row3) === null || _props$data38$row === void 0 ? void 0 : _props$data38$row.col3) || "",
                style: {
                  fontSize: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$row = _props$data39.row3) === null || _props$data39$row === void 0 ? void 0 : (_props$data39$row$sty = _props$data39$row.style) === null || _props$data39$row$sty === void 0 ? void 0 : _props$data39$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$total = _props$data40.total) === null || _props$data40$total === void 0 ? void 0 : _props$data40$total.col1) || "",
                // Total label
                col2: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$total = _props$data41.total) === null || _props$data41$total === void 0 ? void 0 : _props$data41$total.col2) || "",
                // Total amount
                col3: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$total = _props$data42.total) === null || _props$data42$total === void 0 ? void 0 : _props$data42$total.col3) || "",
                // Invoice currency
                col4: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.totalConv) || "",
                // Total converted amount
                subTotalConv: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$total = _props$data46.total) === null || _props$data46$total === void 0 ? void 0 : _props$data46$total.subTotalConv) || "",
                // sub total converted amount
                isFxConversionVisible: (_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$total = _props$data47.total) === null || _props$data47$total === void 0 ? void 0 : _props$data47$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$total = _props$data48.total) === null || _props$data48$total === void 0 ? void 0 : _props$data48$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$total = _props$data49.total) === null || _props$data49$total === void 0 ? void 0 : _props$data49$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$total = _props$data50.total) === null || _props$data50$total === void 0 ? void 0 : _props$data50$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$total = _props$data51.total) === null || _props$data51$total === void 0 ? void 0 : _props$data51$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : (_props$data52$row = _props$data52.row2) === null || _props$data52$row === void 0 ? void 0 : (_props$data52$row$sty = _props$data52$row.style) === null || _props$data52$row$sty === void 0 ? void 0 : _props$data52$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : (_props$data53$amountD = _props$data53.amountDue) === null || _props$data53$amountD === void 0 ? void 0 : _props$data53$amountD.col1) || "",
                col2: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$amountD = _props$data54.amountDue) === null || _props$data54$amountD === void 0 ? void 0 : _props$data54$amountD.col2) || "",
                col3: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$amountD = _props$data55.amountDue) === null || _props$data55$amountD === void 0 ? void 0 : _props$data55$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$amountD = _props$data56.amountDue) === null || _props$data56$amountD === void 0 ? void 0 : (_props$data56$amountD2 = _props$data56$amountD.style) === null || _props$data56$amountD2 === void 0 ? void 0 : _props$data56$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : _props$data57.creditNote) || ""
            }, ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : _props$data58.indiaIRP) && {
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
                approverName: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$eSign = _props$data59.eSign) === null || _props$data59$eSign === void 0 ? void 0 : _props$data59$eSign.approverName) || "",
                approvedAt: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : (_props$data60$eSign = _props$data60.eSign) === null || _props$data60$eSign === void 0 ? void 0 : _props$data60$eSign.approvedAt) || "",
                authorizer: ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : (_props$data61$eSign = _props$data61.eSign) === null || _props$data61$eSign === void 0 ? void 0 : _props$data61$eSign.authorizer) || "",
                approverText: ((_props$data62 = props.data) === null || _props$data62 === void 0 ? void 0 : (_props$data62$eSign = _props$data62.eSign) === null || _props$data62$eSign === void 0 ? void 0 : _props$data62$eSign.approverText) || "",
                signature: {
                  src: ((_props$data63 = props.data) === null || _props$data63 === void 0 ? void 0 : (_props$data63$eSign = _props$data63.eSign) === null || _props$data63$eSign === void 0 ? void 0 : (_props$data63$eSign$s = _props$data63$eSign.signature) === null || _props$data63$eSign$s === void 0 ? void 0 : _props$data63$eSign$s.src) || "",
                  width: ((_props$data64 = props.data) === null || _props$data64 === void 0 ? void 0 : (_props$data64$eSign = _props$data64.eSign) === null || _props$data64$eSign === void 0 ? void 0 : (_props$data64$eSign$s = _props$data64$eSign.signature) === null || _props$data64$eSign$s === void 0 ? void 0 : _props$data64$eSign$s.width) || 55,
                  height: ((_props$data65 = props.data) === null || _props$data65 === void 0 ? void 0 : (_props$data65$eSign = _props$data65.eSign) === null || _props$data65$eSign === void 0 ? void 0 : (_props$data65$eSign$s = _props$data65$eSign.signature) === null || _props$data65$eSign$s === void 0 ? void 0 : _props$data65$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data66 = props.data) === null || _props$data66 === void 0 ? void 0 : (_props$data66$eSign = _props$data66.eSign) === null || _props$data66$eSign === void 0 ? void 0 : (_props$data66$eSign$s = _props$data66$eSign.signature) === null || _props$data66$eSign$s === void 0 ? void 0 : (_props$data66$eSign$s2 = _props$data66$eSign$s.margin) === null || _props$data66$eSign$s2 === void 0 ? void 0 : _props$data66$eSign$s2.top) || "",
                    left: ((_props$data67 = props.data) === null || _props$data67 === void 0 ? void 0 : (_props$data67$eSign = _props$data67.eSign) === null || _props$data67$eSign === void 0 ? void 0 : (_props$data67$eSign$s = _props$data67$eSign.signature) === null || _props$data67$eSign$s === void 0 ? void 0 : (_props$data67$eSign$s2 = _props$data67$eSign$s.margin) === null || _props$data67$eSign$s2 === void 0 ? void 0 : _props$data67$eSign$s2.left) || ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImlzQnJlYWtQYWdlIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsIkRFRkFVTFRfQ1VSUkVOVF9IRUlHSFQiLCJEU0NfSEVJR0hUIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsIklSUFFyQ29kZSIsIl9wYXJhbSRidXNpbmVzcyIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsIl9wYXJhbSRidXNpbmVzczIiLCJfYWRkcmVzc0xpbmUiLCJfYWRkcmVzc0xpbmUyIiwiX2FkZHJlc3NMaW5lMyIsImN1c3RvbWVyTmFtZUhlaWdodCIsImN1c3RvbWVyTmFtZSIsImxhYmVsSGVpZ2h0IiwibGFiZWwiLCJfcGFyYW0kY29udGFjdDIiLCJfcGFyYW0kY29udGFjdDMiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTMiLCJiaWxsaW5nQWRkcmVzc0xhYmVsIiwic2hpcHBpbmdBZGRyZXNzTGFiZWwiLCJfcGFyYW0kY29udGFjdDUiLCJfcGFyYW0kY29udGFjdDYiLCJfcGFyYW0kZGF0YTQiLCJfcGFyYW0kZGF0YTUiLCJiaWxsaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0OCIsIl9wYXJhbSRjb250YWN0OSIsIl9iaWxsaW5nQWRkcmVzcyIsIl9zaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDExIiwiX3BhcmFtJGNvbnRhY3QxMiIsIl9iaWxsaW5nQWRkcmVzczIiLCJfc2hpcHBpbmdBZGRyZXNzMiIsImluZGlhSVJQIiwiX3BhcmFtJGRhdGE4IiwicGRmVGl0bGUiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImFkZERlc2MiLCJub3RlRGF0YSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwic2lnbmF0dXJlUGFnZU51bWJlciIsInNpZ25hdHVyZUxpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YTEzIiwiX3BhcmFtJGRhdGExMyRlU2lnbiIsIl9wYXJhbSRkYXRhMTMkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTQiLCJfcGFyYW0kZGF0YTE0JGVTaWduIiwiX3BhcmFtJGRhdGExNCRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNSIsIl9wYXJhbSRkYXRhMTUkZVNpZ24iLCJfcGFyYW0kZGF0YTE1JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE2IiwiX3BhcmFtJGRhdGExNiRlU2lnbiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTciLCJfcGFyYW0kZGF0YTE3JGVTaWduIiwiX3BhcmFtJGRhdGExOSIsIl9wYXJhbSRkYXRhMTkkZVNpZ24iLCJfcGFyYW0kZGF0YTIwIiwiX3BhcmFtJGRhdGEyMCRlU2lnbiIsIl9wYXJhbSRkYXRhMjEiLCJfcGFyYW0kZGF0YTIxJGVTaWduIiwiX3BhcmFtJGRhdGExOCIsIl9wYXJhbSRkYXRhMTgkZVNpZ24iLCJudW1QYWdlcyIsInJldHVybk9iaiIsImJsb2JPdXRwdXQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiX2dldFRkV2lkdGhEaW1lbnNpb25zIiwibGVmdFNoaWZ0IiwicmVzdWx0IiwiZGF0YSIsImhlYWRlciIsIl9wYXJhbSRkYXRhJGhlYWRlcldpZCIsIl9wYXJhbSRkYXRhJGhlYWRlcldpZDIiLCJzaGlmdCIsIndpZHRoIiwiaGVhZGVyV2lkdGgiLCJoZWFkZXJUZXh0U2l6ZSIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJpc1BkZkZvckRzYyIsInBkZlN1YlRpdGxlIiwibG9nbyIsInNyYyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJidXNpbmVzcyIsIm5hbWUiLCJhZGRyZXNzIiwiZW1haWxfMSIsImNvdW50cnkiLCJ0YXhOdW1iZXIiLCJjb250YWN0Iiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImlzRnhDb252ZXJzaW9uVmlzaWJsZSIsInRvdGFsVGF4QW1vdW50IiwidG90YWxUYXhBbW91bnRDb252IiwiZGVmYXVsdEN1cnJlbmN5IiwiY29udlJhdGUiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwicXJDb2RlIiwiaXJuIiwiZ3N0UmVnVHlwZSIsImhzbk51bSIsImdzdFN0YXRlV2l0aENvZGUiLCJsYWJlbDEiLCJsYWJlbDIiLCJsYWJlbDMiLCJsYWJlbDQiLCJsYWJlbDUiLCJsYWJlbDYiLCJhY2tEYXRlIiwiYWNrTnVtYmVyIiwiZVNpZ24iLCJhcHByb3Zlck5hbWUiLCJhcHByb3ZlZEF0IiwiYXV0aG9yaXplciIsImFwcHJvdmVyVGV4dCIsInNpZ25hdHVyZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic2l6ZSIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIlFSQ29kZSIsInRvRGF0YVVSTCIsInRoZW4iLCJpbWFnZWJhc2U2NCIsInFyQmFzZTY0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGluZSIsInVuZGVmaW5lZCIsImdldFRleHRXaWR0aCIsInRkV2lkdGhEaW1lbnNpb25zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTIiLCJyZWN0IiwiX3RkV2lkdGhEaW1lbnNpb25zJGkzIiwiX3RkV2lkdGhEaW1lbnNpb25zJGk0Iiwic2V0RHJhd0NvbG9yIiwibWF4VGV4dEhlaWdodEhlYWRlciIsInJvdyIsImluZGV4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluIiwicm93dGV4dCIsIk1hdGgiLCJtYXgiLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsImFkZFBhZ2UiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluNCIsInRvTG9jYWxlU3RyaW5nIiwidGF4IiwiY29uY2F0IiwiYW1vdW50Iiwic2V0RmlsbENvbG9yIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsImNvbnRlbnQiLCJmb250U3R5bGUiLCJ0aGVtZSIsImhlYWRTdHlsZXMiLCJmaWxsQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJhbGlnbiIsIm1pbkNlbGxIZWlnaHQiLCJib2R5U3R5bGVzIiwiY29sdW1uU3R5bGVzIiwiY2VsbFdpZHRoIiwiaGFsaWduIiwidmFsaWduIiwicm93U3R5bGVzIiwiX3BhcmFtJGRhdGE5IiwiX3BhcmFtJGRhdGExMCIsIl9wYXJhbSRkYXRhMTAkZGVzYyIsImVsIiwiX3NwbGl0VGV4dEFuZEdldEhlaWdoIiwiYmFuayIsImFjY291bnQiLCJzZXRQYWdlIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJlc3RhbXAiLCJkaWdpdGFsU2lnbiIsImFicnVwdCIsInN0b3AiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGVcIjtcbmltcG9ydCB7IGdldEN1c3RvbUZvbnQgfSBmcm9tIFwiLi9mb250XCI7XG5pbXBvcnQganNQREZSZnFUZW1wbGF0ZSBmcm9tIFwiLi9SRlFcIjtcbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGLCBqc1BERlJmcVRlbXBsYXRlIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgaXNQZGZGb3JEc2M/OiBib29sZWFuLFxuICogIHBkZlRpdGxlPzogc3RyaW5nLFxuICogIHBkZlN1YlRpdGxlPzogc3RyaW5nLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVUb3RhbDogcHJvcHMuZGF0YT8ucm93MT8uaGlkZVRvdGFsIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzM6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mz8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mz8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw1OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDYgfHwgXCJcIixcbiAgICAgICAgICBhY2tEYXRlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja0RhdGUgPz8gbnVsbCxcbiAgICAgICAgICBhY2tOdW1iZXI6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrTnVtYmVyID8/IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgaGVpZ2h0LlxuICAvLyBpZiB0cnVlLCB0aGVuIHdlIGJyZWFrIHRoZSBjaGFuZ2UuXG4gIC8vIENoZWNraW5nIHdpdGggREVGQVVMVF9DVVJSRU5UX0hFSUdIVCBiZWNhdXNlIG9mIGN1cnJlbnQgcGFnZSBuZWVkcyB0byBoYXZlIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tLlxuICBjb25zdCBpc0JyZWFrUGFnZSA9IChoZWlnaHQsIHBhZ2VIZWlnaHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuICBjb25zdCBEU0NfSEVJR0hUID0gMzA7XG5cbiAgLy9zdGFydGluZyBhdCAxNW1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMTU7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyMCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTIsXG4gICAgZmllbGRUZXh0U2l6ZTogMTAsXG4gICAgdGV4dFNpemVTbWFsbDogOCxcbiAgICBsaW5lSGVpZ2h0OiA2LFxuICAgIHN1YkxpbmVIZWlnaHQ6IDQsXG4gIH07XG4gIGRvYy5hZGRGaWxlVG9WRlMoXCJjdXN0b21Gb250LnR0ZlwiLCBnZXRDdXN0b21Gb250KCkpO1xuICBkb2MuYWRkRm9udChcImN1c3RvbUZvbnQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FKTtcblxuICAvL0FkZGluZyBQREYgdGl0bGVcbiAgaWYgKHBhcmFtLnBkZlRpdGxlKSB7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNztcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgfVxuXG4gIGlmIChwYXJhbS5wZGZTdWJUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgLT0gNTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlN1YlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoXG4gICAgZG9jV2lkdGggLSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSxcbiAgICBjdXJyZW50SGVpZ2h0LFxuICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgQUxJR05fUklHSFRcbiAgKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChwZGZDb25maWcuZmllbGRUZXh0U2l6ZSwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIHBkZkNvbmZpZy5maWVsZFRleHRTaXplXG4gICAgKTtcblxuICAgIGRvYy50ZXh0KHBkZkNvbmZpZy5maWVsZFRleHRTaXplLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUxLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMy50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBsZXQgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gY3VzdG9tZXJOYW1lLmhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBsZXQgbGFiZWxIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGNvbnN0IGxhYmVsID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgKHBhZ2VXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGxhYmVsLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBsYWJlbEhlaWdodCA9IGxhYmVsLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKSB7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID4gbGFiZWxIZWlnaHQgPyBjdXN0b21lck5hbWVIZWlnaHQgOiBsYWJlbEhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgY29uc3QgcGRmVGl0bGUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhPy5wZGZUaXRsZSxcbiAgICAgIChwYWdlV2lkdGggKiAzKSAvIDRcbiAgICApO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBkZlRpdGxlLnRleHQsIEFMSUdOX0xFRlQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmVGl0bGUuaGVpZ2h0IC0gNDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID1cbiAgICAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGxldCBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gMDtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBjb25zdCByb3d0ZXh0ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByb3csXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zW2luZGV4XS53aWR0aCAtIDNcbiAgICAgICk7XG4gICAgICBtYXhUZXh0SGVpZ2h0SGVhZGVyID0gTWF0aC5tYXgobWF4VGV4dEhlaWdodEhlYWRlciwgcm93dGV4dC5oZWlnaHQpO1xuICAgICAgZG9jLnRleHQocm93dGV4dC50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhUZXh0SGVpZ2h0SGVhZGVyICsgMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTtcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgZG9jLmFkZFBhZ2UoKTtcbiAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLm5vdGUsXG4gICAgICBwYWdlV2lkdGggLSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemVcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIC8vIFdyaXRlIHRoZSBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIiBsYWJlbFxuXG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0ZXh0IGhlaWdodFxuICAgICAgY29uc3QgeyB0ZXh0LCBoZWlnaHQgfSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgaXRlbSxcbiAgICAgICAgcGFnZVdpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplXG4gICAgICApO1xuXG4gICAgICAvLyBDaGVjayBpZiBhZGRpbmcgdGhpcyBpdGVtIHdpbGwgZXhjZWVkIHRoZSBwYWdlIGhlaWdodFxuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBoZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7IC8vIFJlc2V0IHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBkZkNvbmZpZy5maWVsZFRleHRTaXplLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSW5jcmVtZW50IGhlaWdodCBmb3IgdGhlIG5leHQgbGluZVxuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgdGV4dFxuICAgICAgZG9jLnRleHQocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUsIGN1cnJlbnRIZWlnaHQsIHRleHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBoZWlnaHQ7IC8vIEluY3JlbWVudCB0aGUgY3VycmVudCBoZWlnaHRcbiAgICB9KTtcblxuICAgIC8vIEFkZCBzcGFjaW5nIGFmdGVyIHRoZSBzZWN0aW9uXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBsZXQgc2lnbmF0dXJlUGFnZU51bWJlcjtcbiAgbGV0IHNpZ25hdHVyZUxpbmVIZWlnaHQ7XG4gIGlmIChwYXJhbT8uaXNQZGZGb3JEc2MpIHtcbiAgICAvLyBQREYgaXMgZm9yIERpZ2l0YWwgU2lnbmF0dXJlXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgRFNDX0hFSUdIVCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gRFNDX0hFSUdIVDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgK1xuICAgICAgICAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBjb25zdCBudW1QYWdlcyA9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7XG5cbiAgLy8gQWRkIFBhZ2UgTnVtYmVyIGF0IGJvdHRvbVxuICAvLyBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggcGFnZSBhbmQgYWRkcyB0aGUgcGFnZSBudW1iZXIgYXQgYm90dG9tXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVBhZ2VzOyBpKyspIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIH1cbiAgICBkb2Muc2V0UGFnZShpKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBudW1QYWdlcyxcbiAgICAgIGRvY1dpZHRoIC0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybk9iai5lc3RhbXAgPSB7XG4gICAgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCxcbiAgICBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0LFxuICB9O1xuXG4gIGlmIChwYXJhbS5pc1BkZkZvckRzYykge1xuICAgIHJldHVybk9iai5kaWdpdGFsU2lnbiA9IHtcbiAgICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIsXG4gICAgICBzaWduYXR1cmVMaW5lSGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxJQUFBLEdBQUFGLHNCQUFBLENBQUFILE9BQUE7QUFBcUMsU0FBQU0sUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUNyQyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDO0FBQUNDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBKQSxTQXFKZVEsb0JBQW9CQSxDQUFBQyxFQUFBO0VBQUEsT0FBQUMscUJBQUEsQ0FBQXZCLEtBQUEsT0FBQUksU0FBQTtBQUFBO0FBQUEsU0FBQW1CLHNCQUFBO0VBQUFBLHFCQUFBLE9BQUFDLGtCQUFBLDJCQUFBQyxZQUFBLFlBQUFDLElBQUEsQ0FBbkMsU0FBQUMsUUFBb0NDLEtBQUs7SUFBQSxJQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxXQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsV0FBQSxFQUFBQyxvQkFBQSxFQUFBQyxj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