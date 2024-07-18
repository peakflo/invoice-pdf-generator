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
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, additionalInfoSize, staticVAContent, paymentDetails, addDesc, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, numPages, i, returnObj, blobOutput;
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
                width: (_param$data$headerWid = param.data.headerWidth) !== null && _param$data$headerWid !== void 0 && _param$data$headerWid[i] ? (pageWidth - 20) * param.data.headerWidth[i] : tdWidth
              });
              leftShift = leftShift + ((_param$data$headerWid2 = param.data.headerWidth) !== null && _param$data$headerWid2 !== void 0 && _param$data$headerWid2[i] ? (pageWidth - 20) * param.data.headerWidth[i] : tdWidth);
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
          DEFAULT_CURRENT_HEIGHT = 10; //starting at 15mm
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
          doc.text(docWidth - 10, currentHeight, param.business.name, ALIGN_RIGHT);
          doc.setFontSize(pdfConfig.fieldTextSize);

          // company logo
          if (param.logo.src) {
            doc.addImage(param.logo.src, IMAGE_CONTENT_TYPE, 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
          }

          // tenant tax number
          if (param.business.taxNumber) {
            currentHeight += pdfConfig.subLineHeight + 2;
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.setTextColor(colorBlue);
            doc.text(docWidth - 10, currentHeight, param.business.taxNumber, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
          }
          doc.setTextColor(colorBlack);
          // IRP QR code
          // If QR code is availble, align issuer address to left. Else keep in right.
          IRPQrCode = (_param$data = param.data) === null || _param$data === void 0 ? void 0 : (_param$data$indiaIRP = _param$data.indiaIRP) === null || _param$data$indiaIRP === void 0 ? void 0 : _param$data$indiaIRP.qrCode;
          if (!IRPQrCode) {
            _context.next = 59;
            break;
          }
          _context.next = 44;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 44:
          if (param !== null && param !== void 0 && (_param$business = param.business) !== null && _param$business !== void 0 && _param$business.address) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(10, currentHeight, ISSUER_ADDRESS_LABEL);
          }
          currentHeight += pdfConfig.subLineHeight;
          doc.setFontSize(pdfConfig.fieldTextSize - 2);
          addressLine1 = splitTextAndGetHeight(param.business.address, docWidth * 4 / 10);
          doc.text(10, currentHeight, param.business.address);
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
          _context.next = 72;
          break;
        case 59:
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
        case 72:
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
          tdWidth = (pageWidth - 20) / param.data.header.length;
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
                  currentHeight = 20;
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
            totalInWords = splitTextAndGetHeight(param.data.total.col5, pageWidth - 20);
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

          // Additional Information - custom fields
          if (param.data.customFields.length) {
            currentHeight += pdfConfig.lineHeight;
            // Additional information section will take the following space
            /**
             * 1. Label - Additional Information =>  1 Line
             * 2. Each custom field => height calculated from splitTextAndGetHeight
             */
            additionalInfoSize = pdfConfig.lineHeight;
            param.data.customFields.map(function (item) {
              var _splitTextAndGetHeigh = splitTextAndGetHeight(item, pageWidth - 20),
                height = _splitTextAndGetHeigh.height;
              additionalInfoSize += height;
            });
            if (currentHeight + additionalInfoSize > pageHeight) {
              doc.addPage();
              currentHeight = 20;
            }
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Additional Information");
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            currentHeight += pdfConfig.subLineHeight;
            param.data.customFields.map(function (item) {
              var _splitTextAndGetHeigh2 = splitTextAndGetHeight(item, pageWidth - 20),
                text = _splitTextAndGetHeigh2.text,
                height = _splitTextAndGetHeigh2.height;
              doc.text(10, currentHeight, text);
              currentHeight += height;
            });
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
              currentHeight = 20;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Payment details");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(10, currentHeight, paymentDetails.text);
            currentHeight += pdfConfig.lineHeight + paymentDetails.height;
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
          if (param !== null && param !== void 0 && param.isPdfForDsc) {
            // PDF is for Digital Signature
            currentHeight += pdfConfig.subLineHeight;
            if (currentHeight + 20 > pageHeight || currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = DEFAULT_CURRENT_HEIGHT;
            }
            signaturePageNumber = doc.internal.getNumberOfPages();
            signatureLineHeight = currentHeight;
            currentHeight += 20;
            currentHeight += pdfConfig.subLineHeight;
          }

          // E signature
          if ((_param$data12 = param.data) !== null && _param$data12 !== void 0 && (_param$data12$eSign = _param$data12.eSign) !== null && _param$data12$eSign !== void 0 && (_param$data12$eSign$s = _param$data12$eSign.signature) !== null && _param$data12$eSign$s !== void 0 && _param$data12$eSign$s.src) {
            if (currentHeight + (((_param$data13 = param.data) === null || _param$data13 === void 0 ? void 0 : (_param$data13$eSign = _param$data13.eSign) === null || _param$data13$eSign === void 0 ? void 0 : (_param$data13$eSign$s = _param$data13$eSign.signature) === null || _param$data13$eSign$s === void 0 ? void 0 : _param$data13$eSign$s.height) || 20) > pageHeight || currentHeight > pageHeight - DEFAULT_CURRENT_HEIGHT && doc.getNumberOfPages() > 1) {
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

          // Note
          if (param.data.note) {
            currentHeight += pdfConfig.labelTextSize;
            noteData = splitTextAndGetHeight(param.data.note, pageWidth - 20);
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
          numPages = doc.getNumberOfPages(); // Add Page Number at bottom
          // Iterates through each page and adds the page number at bottom
          for (i = 1; i <= numPages; i++) {
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            doc.setTextColor(colorGray);
            if (param.pageEnable) {
              doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
            }
            doc.setPage(i);
            doc.text(param.pageLabel + " " + i + " / " + numPages, docWidth - 20, doc.internal.pageSize.height - 6);
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
        case 150:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImlzQnJlYWtQYWdlIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsIkRFRkFVTFRfQ1VSUkVOVF9IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiYWRkaXRpb25hbEluZm9TaXplIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJhZGREZXNjIiwic2lnbmF0dXJlUGFnZU51bWJlciIsInNpZ25hdHVyZUxpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YTEzIiwiX3BhcmFtJGRhdGExMyRlU2lnbiIsIl9wYXJhbSRkYXRhMTMkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTQiLCJfcGFyYW0kZGF0YTE0JGVTaWduIiwiX3BhcmFtJGRhdGExNCRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNSIsIl9wYXJhbSRkYXRhMTUkZVNpZ24iLCJfcGFyYW0kZGF0YTE1JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE2IiwiX3BhcmFtJGRhdGExNiRlU2lnbiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTciLCJfcGFyYW0kZGF0YTE3JGVTaWduIiwiX3BhcmFtJGRhdGExOSIsIl9wYXJhbSRkYXRhMTkkZVNpZ24iLCJfcGFyYW0kZGF0YTIwIiwiX3BhcmFtJGRhdGEyMCRlU2lnbiIsIl9wYXJhbSRkYXRhMjEiLCJfcGFyYW0kZGF0YTIxJGVTaWduIiwiX3BhcmFtJGRhdGExOCIsIl9wYXJhbSRkYXRhMTgkZVNpZ24iLCJub3RlRGF0YSIsIm51bVBhZ2VzIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJpc1BkZkZvckRzYyIsInBkZlN1YlRpdGxlIiwibG9nbyIsInNyYyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJidXNpbmVzcyIsIm5hbWUiLCJhZGRyZXNzIiwiZW1haWxfMSIsImNvdW50cnkiLCJ0YXhOdW1iZXIiLCJjb250YWN0Iiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImlzRnhDb252ZXJzaW9uVmlzaWJsZSIsInRvdGFsVGF4QW1vdW50IiwidG90YWxUYXhBbW91bnRDb252IiwiZGVmYXVsdEN1cnJlbmN5IiwiY29udlJhdGUiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwicXJDb2RlIiwiaXJuIiwiZ3N0UmVnVHlwZSIsImhzbk51bSIsImdzdFN0YXRlV2l0aENvZGUiLCJsYWJlbDEiLCJsYWJlbDIiLCJsYWJlbDMiLCJsYWJlbDQiLCJsYWJlbDUiLCJsYWJlbDYiLCJhY2tEYXRlIiwiYWNrTnVtYmVyIiwiZVNpZ24iLCJhcHByb3Zlck5hbWUiLCJhcHByb3ZlZEF0IiwiYXV0aG9yaXplciIsImFwcHJvdmVyVGV4dCIsInNpZ25hdHVyZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic2l6ZSIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJtYXhUZXh0SGVpZ2h0SGVhZGVyIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJyb3d0ZXh0IiwiTWF0aCIsIm1heCIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiYWRkUGFnZSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwidG9Mb2NhbGVTdHJpbmciLCJ0YXgiLCJjb25jYXQiLCJhbW91bnQiLCJzZXRGaWxsQ29sb3IiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJtYXAiLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2giLCJfc3BsaXRUZXh0QW5kR2V0SGVpZ2gyIiwiYmFuayIsImFjY291bnQiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJzZXRQYWdlIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJlc3RhbXAiLCJkaWdpdGFsU2lnbiIsImFicnVwdCIsInN0b3AiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGVcIjtcbmltcG9ydCB7IGdldEN1c3RvbUZvbnQgfSBmcm9tIFwiLi9mb250XCI7XG5pbXBvcnQganNQREZSZnFUZW1wbGF0ZSBmcm9tIFwiLi9SRlFcIjtcbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGLCBqc1BERlJmcVRlbXBsYXRlIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgaXNQZGZGb3JEc2M/OiBib29sZWFuLFxuICogIHBkZlRpdGxlPzogc3RyaW5nLFxuICogIHBkZlN1YlRpdGxlPzogc3RyaW5nLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBpc1BkZkZvckRzYzogcHJvcHMuaXNQZGZGb3JEc2MgfHwgZmFsc2UsXG4gICAgcGRmU3ViVGl0bGU6IHByb3BzLnBkZlN1YlRpdGxlIHx8IFwiXCIsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVUb3RhbDogcHJvcHMuZGF0YT8ucm93MT8uaGlkZVRvdGFsIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzM6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mz8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mz8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgc3ViVG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8uc3ViVG90YWxDb252IHx8IFwiXCIsIC8vIHN1YiB0b3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogcHJvcHMuZGF0YT8udG90YWw/LmlzRnhDb252ZXJzaW9uVmlzaWJsZSxcbiAgICAgICAgdG90YWxUYXhBbW91bnQ6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudCB8fCBcIlwiLFxuICAgICAgICB0b3RhbFRheEFtb3VudENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbFRheEFtb3VudENvbnYgfHwgXCJcIixcbiAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBwcm9wcy5kYXRhPy50b3RhbD8uZGVmYXVsdEN1cnJlbmN5IHx8IFwiXCIsIC8vIGRlZmF1bHQgY3VycmVuY3ksXG4gICAgICAgIGNvbnZSYXRlOiBwcm9wcy5kYXRhPy50b3RhbD8uY29udlJhdGUgfHwgXCJcIiwgLy8gY29udmVyc2lvbiByYXRlXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhbW91bnREdWU6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlZGl0Tm90ZTogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZSB8fCBcIlwiLFxuICAgICAgLi4uKHByb3BzLmRhdGE/LmluZGlhSVJQICYmIHtcbiAgICAgICAgaW5kaWFJUlA6IHtcbiAgICAgICAgICBxckNvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAucXJDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgaXJuOiBwcm9wcy5kYXRhLmluZGlhSVJQLmlybiB8fCBcIlwiLFxuICAgICAgICAgIGdzdFJlZ1R5cGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0UmVnVHlwZSB8fCBcIlwiLFxuICAgICAgICAgIGhzbk51bTogcHJvcHMuZGF0YS5pbmRpYUlSUC5oc25OdW0gfHwgXCJcIixcbiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDE6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwxIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMiB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMzogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDMgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDQ6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw0IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw1OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDYgfHwgXCJcIixcbiAgICAgICAgICBhY2tEYXRlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja0RhdGUgPz8gbnVsbCxcbiAgICAgICAgICBhY2tOdW1iZXI6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrTnVtYmVyID8/IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGVTaWduOiB7XG4gICAgICAgIGFwcHJvdmVyTmFtZTogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZSB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlZEF0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdCB8fCBcIlwiLFxuICAgICAgICBhdXRob3JpemVyOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXV0aG9yaXplciB8fCBcIlwiLFxuICAgICAgICBhcHByb3ZlclRleHQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHQgfHwgXCJcIixcbiAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgc3JjOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMgfHwgXCJcIixcbiAgICAgICAgICB3aWR0aDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGggfHwgNTUsXG4gICAgICAgICAgaGVpZ2h0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjAsXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8udG9wIHx8IFwiXCIsXG4gICAgICAgICAgICBsZWZ0OiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LmxlZnQgfHwgXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgcGFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIHBhZ2UgaGVpZ2h0LlxuICAvLyBpZiB0cnVlLCB0aGVuIHdlIGJyZWFrIHRoZSBjaGFuZ2UuXG4gIC8vIENoZWNraW5nIHdpdGggREVGQVVMVF9DVVJSRU5UX0hFSUdIVCBiZWNhdXNlIG9mIGN1cnJlbnQgcGFnZSBuZWVkcyB0byBoYXZlIHNvbWUgc3BhY2luZyBhdCB0aGUgYm90dG9tLlxuICBjb25zdCBpc0JyZWFrUGFnZSA9IChoZWlnaHQsIHBhZ2VIZWlnaHQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgY29uc3QgREVGQVVMVF9DVVJSRU5UX0hFSUdIVCA9IDEwO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gIH1cblxuICBpZiAocGFyYW0ucGRmU3ViVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDU7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZTdWJUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICB9XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICAvLyBjb21wYW55IGxvZ29cbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICAvLyB0ZW5hbnQgdGF4IG51bWJlclxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUxLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMS5oZWlnaHQgKyAxO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMi50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTIuaGVpZ2h0ICsgMTtcbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMy50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGFkZHJlc3NMaW5lMy5oZWlnaHQgKyAxO1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBsZXQgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGNvbnN0IGN1c3RvbWVyTmFtZSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3QubmFtZSxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBjdXN0b21lck5hbWUudGV4dCk7XG4gICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID0gY3VzdG9tZXJOYW1lLmhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDUpO1xuICBsZXQgbGFiZWxIZWlnaHQgPSAwO1xuICBpZiAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkge1xuICAgIGNvbnN0IGxhYmVsID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgKHBhZ2VXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGxhYmVsLnRleHQsIEFMSUdOX1JJR0hUKTtcbiAgICBsYWJlbEhlaWdodCA9IGxhYmVsLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKSB7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgY3VzdG9tZXJOYW1lSGVpZ2h0ID4gbGFiZWxIZWlnaHQgPyBjdXN0b21lck5hbWVIZWlnaHQgOiBsYWJlbEhlaWdodDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgY29uc3QgcGRmVGl0bGUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhPy5wZGZUaXRsZSxcbiAgICAgIChwYWdlV2lkdGggKiAzKSAvIDRcbiAgICApO1xuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBkZlRpdGxlLnRleHQsIEFMSUdOX0xFRlQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmVGl0bGUuaGVpZ2h0IC0gNDtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID0gKHBhZ2VXaWR0aCAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBsZXQgbWF4VGV4dEhlaWdodEhlYWRlciA9IDA7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgY29uc3Qgcm93dGV4dCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcm93LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9uc1tpbmRleF0ud2lkdGggLSAzXG4gICAgICApO1xuICAgICAgbWF4VGV4dEhlaWdodEhlYWRlciA9IE1hdGgubWF4KG1heFRleHRIZWlnaHRIZWFkZXIsIHJvd3RleHQuaGVpZ2h0KTtcbiAgICAgIGRvYy50ZXh0KHJvd3RleHQudGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4VGV4dEhlaWdodEhlYWRlciArIDE7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7XG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNCk7XG4gICAgfSk7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKGlzQnJlYWtQYWdlKGN1cnJlbnRIZWlnaHQsIHBhZ2VIZWlnaHQpKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHBhZ2UgbnVtYmVyIHRoZSBhYm92ZSBsaW5lIGlzIG9uXG4gIGNvbnN0IHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICBjb25zdCBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgaWYgKCFwYXJhbS5kYXRhLnJvdzEuaGlkZVRvdGFsKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gcGFnZVdpZHRoIC0gYm94V2lkdGggLSAxMDtcbiAgICBjb25zdCBib3hZID0gY3VycmVudEhlaWdodCArIDU7XG5cbiAgICAvLyBEcmF3IHRoZSBib3hcbiAgICBkb2Muc2V0RHJhd0NvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjIpO1xuICAgIGRvYy5yZWN0KGJveFgsIGJveFksIGJveFdpZHRoLCBib3hIZWlnaHQsIFwiRkRcIik7XG5cbiAgICAvLyBBZGQgdGV4dCB0byB0aGUgYm94XG4gICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXCJGb3IgR1NUIHJlcG9ydGluZyBwdXJwb3NlczpcIiwgYm94WCArIDUsIGJveFkgKyA1KTtcbiAgICBkb2MubGluZShib3hYICsgNSwgYm94WSArIDcuNSwgYm94WCArIGJveFdpZHRoIC0gNSwgYm94WSArIDcuNSk7XG4gICAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGAxICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfSA9ICR7cGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZX0gJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgYm94WCArIDUsXG4gICAgICBib3hZICsgMTNcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSB0YWJsZVxuICAgIGRvYy5hdXRvVGFibGUoe1xuICAgICAgc3RhcnRZOiBib3hZICsgMTgsXG4gICAgICBtYXJnaW46IHsgbGVmdDogYm94WCwgcmlnaHQ6IDAgfSxcbiAgICAgIGhlYWQ6IFtbXCJcIiwgYEFtb3VudCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWBdXSxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAgW1wiU3VidG90YWxcIiwgcGFyYW0uZGF0YS50b3RhbC5zdWJUb3RhbENvbnZdLFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYm94SGVpZ2h0ICsgMzA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIC8vIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gc2VjdGlvbiB3aWxsIHRha2UgdGhlIGZvbGxvd2luZyBzcGFjZVxuICAgIC8qKlxuICAgICAqIDEuIExhYmVsIC0gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiA9PiAgMSBMaW5lXG4gICAgICogMi4gRWFjaCBjdXN0b20gZmllbGQgPT4gaGVpZ2h0IGNhbGN1bGF0ZWQgZnJvbSBzcGxpdFRleHRBbmRHZXRIZWlnaHRcbiAgICAgKi9cbiAgICBsZXQgYWRkaXRpb25hbEluZm9TaXplID0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoaXRlbSwgcGFnZVdpZHRoIC0gMjApO1xuICAgICAgYWRkaXRpb25hbEluZm9TaXplICs9IGhlaWdodDtcbiAgICB9KTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgYWRkaXRpb25hbEluZm9TaXplID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGV4dCwgaGVpZ2h0IH0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoaXRlbSwgcGFnZVdpZHRoIC0gMjApO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHRleHQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBoZWlnaHQ7XG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgbGV0IHNpZ25hdHVyZVBhZ2VOdW1iZXI7XG4gIGxldCBzaWduYXR1cmVMaW5lSGVpZ2h0O1xuICBpZiAocGFyYW0/LmlzUGRmRm9yRHNjKSB7XG4gICAgLy8gUERGIGlzIGZvciBEaWdpdGFsIFNpZ25hdHVyZVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIDIwID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgc2lnbmF0dXJlUGFnZU51bWJlciA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gICAgc2lnbmF0dXJlTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSAyMDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IG51bVBhZ2VzID0gZG9jLmdldE51bWJlck9mUGFnZXMoKTtcblxuICAvLyBBZGQgUGFnZSBOdW1iZXIgYXQgYm90dG9tXG4gIC8vIEl0ZXJhdGVzIHRocm91Z2ggZWFjaCBwYWdlIGFuZCBhZGRzIHRoZSBwYWdlIG51bWJlciBhdCBib3R0b21cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtUGFnZXM7IGkrKykge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgfVxuICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIG51bVBhZ2VzLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxXQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxZQUFBLEVBQUFDLFdBQUEsRUFBQUMsS0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFFBQUEsRUFBQUMsWUFBQSxFQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUFtbkI5QkMsb0JBQW9CLEVBQUFDLHFCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxhQUFBLEVBQUFDLHlCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGVBQUEsRUFBQUMsT0FBQSxFQUFBQyxjQUFBLEVBQUFDLElBQUEsRUFBQUMsWUFBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUEsRUFBQUMsSUFBQSxFQUFBQyxJQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGVBQUEsRUFBQUMsY0FBQSxFQUFBQyxPQUFBLEVBQUFDLG1CQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFFBQUEsRUFBQUMsUUFBQSxF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QUM5RCxJQUFJL0gsS0FBSyxDQUFDNkgsVUFBVSxLQUFLOVQsVUFBVSxDQUFDSyxJQUFJLEVBQUU7WUFDdkN5UyxVQUFVLEdBQUd6RyxHQUFHLENBQUNvVCxNQUFNLENBQUN6ZixVQUFVLENBQUNLLElBQUksQ0FBQztZQUM5Q3dTLFNBQVMsR0FBQXpULGFBQUEsQ0FBQUEsYUFBQSxLQUNKeVQsU0FBUztjQUNaNk0sSUFBSSxFQUFFNU07WUFBVSxFQUNqQjtVQUNILENBQUMsTUFBTSxJQUFJN0csS0FBSyxDQUFDNkgsVUFBVSxLQUFLOVQsVUFBVSxDQUFDRSxhQUFhLEVBQUU7WUFDeEQyUyxTQUFTLEdBQUF6VCxhQUFBLENBQUFBLGFBQUEsS0FDSnlULFNBQVM7Y0FDWjhNLGFBQWEsRUFBRXRULEdBQUcsQ0FBQ29ULE1BQU0sQ0FBQ3pmLFVBQVUsQ0FBQ0UsYUFBYSxFQUFFO2dCQUNsRDBmLFFBQVEsRUFBRTNULEtBQUssQ0FBQytIO2NBQ2xCLENBQUM7WUFBQyxFQUNIO1VBQ0gsQ0FBQyxNQUFNLElBQUkvSCxLQUFLLENBQUM2SCxVQUFVLEtBQUs5VCxVQUFVLENBQUNNLFdBQVcsRUFBRTtZQUN0RHVTLFNBQVMsR0FBQXpULGFBQUEsQ0FBQUEsYUFBQSxLQUNKeVQsU0FBUztjQUNaZ04sV0FBVyxFQUFFeFQsR0FBRyxDQUFDb1QsTUFBTSxDQUFDemYsVUFBVSxDQUFDTSxXQUFXO1lBQUMsRUFDaEQ7VUFDSCxDQUFDLE1BQ0MrTCxHQUFHLENBQUNvVCxNQUFNLENBQUN4VCxLQUFLLENBQUM2SCxVQUFVLEVBQUU7WUFDM0I4TCxRQUFRLEVBQUUzVCxLQUFLLENBQUMrSDtVQUNsQixDQUFDLENBQUM7VUFFSm5CLFNBQVMsQ0FBQ2lOLE1BQU0sR0FBRztZQUNqQjFQLHlCQUF5QixFQUF6QkEseUJBQXlCO1lBQ3pCQyxzQkFBc0IsRUFBdEJBO1VBQ0YsQ0FBQztVQUVELElBQUlwRSxLQUFLLENBQUNpSSxXQUFXLEVBQUU7WUFDckJyQixTQUFTLENBQUNrTixXQUFXLEdBQUc7Y0FDdEI1TyxtQkFBbUIsRUFBbkJBLG1CQUFtQjtjQUNuQkMsbUJBQW1CLEVBQW5CQTtZQUNGLENBQUM7VUFDSDtVQUFDLE9BQUE2QixRQUFBLENBQUErTSxNQUFBLFdBRU1uTixTQUFTO1FBQUE7UUFBQTtVQUFBLE9BQUFJLFFBQUEsQ0FBQWdOLElBQUE7TUFBQTtJQUFBLEdBQUFuZixPQUFBO0VBQUEsQ0FDakI7RUFBQSxPQUFBSixxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxJQUFBMmdCLFFBQUEsR0FFYzFmLG9CQUFvQjtBQUFBRCxPQUFBLGNBQUEyZixRQUFBIiwiaWdub3JlTGlzdCI6W119