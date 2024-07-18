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
    var param, splitTextAndGetHeight, options, isBreakPage, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, DEFAULT_CURRENT_HEIGHT, currentHeight, pdfConfig, IRPQrCode, _param$business, addressLine1, addressLine2, addressLine3, _param$business2, _addressLine, _addressLine2, _addressLine3, customerNameHeight, customerName, labelHeight, label, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, pdfTitle, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, i, additionalInfoSize, staticVAContent, paymentDetails, addDesc, signaturePageNumber, signatureLineHeight, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, returnObj, blobOutput;
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

          //add num of pages at the bottom
          if (doc.getNumberOfPages() > 1) {
            for (i = 1; i <= doc.getNumberOfPages(); i++) {
              doc.setFontSize(pdfConfig.fieldTextSize - 2);
              doc.setTextColor(colorGray);
              if (param.pageEnable) {
                doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
                doc.setPage(i);
                doc.text(param.pageLabel + " " + i + " / " + doc.getNumberOfPages(), docWidth - 20, doc.internal.pageSize.height - 6);
              }
            }
          }

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

          //add num of page at the bottom
          if (doc.getNumberOfPages() === 1 && param.pageEnable) {
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            doc.setTextColor(colorGray);
            doc.text(docWidth / 2, docHeight - DEFAULT_CURRENT_HEIGHT, param.footer.text, ALIGN_CENTER);
            doc.text(param.pageLabel + "1 / 1", docWidth - 20, doc.internal.pageSize.height - 6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImlzQnJlYWtQYWdlIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsIkRFRkFVTFRfQ1VSUkVOVF9IRUlHSFQiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9hZGRyZXNzTGluZSIsIl9hZGRyZXNzTGluZTIiLCJfYWRkcmVzc0xpbmUzIiwiY3VzdG9tZXJOYW1lSGVpZ2h0IiwiY3VzdG9tZXJOYW1lIiwibGFiZWxIZWlnaHQiLCJsYWJlbCIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJwZGZUaXRsZSIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImZpbmFsUm93Q291bnQiLCJwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsIiwiaW52b2ljZVRvdGFsTGluZUhlaWdodCIsIl9wYXJhbSRkYXRhJHJvdyIsInRheERhdGEiLCJmaW5hbFJvd0hlaWdodCIsImRpZmYiLCJ0b3RhbEluV29yZHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsImJveFgiLCJib3hZIiwiYWRkaXRpb25hbEluZm9TaXplIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJhZGREZXNjIiwic2lnbmF0dXJlUGFnZU51bWJlciIsInNpZ25hdHVyZUxpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YTEzIiwiX3BhcmFtJGRhdGExMyRlU2lnbiIsIl9wYXJhbSRkYXRhMTMkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTQiLCJfcGFyYW0kZGF0YTE0JGVTaWduIiwiX3BhcmFtJGRhdGExNCRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNSIsIl9wYXJhbSRkYXRhMTUkZVNpZ24iLCJfcGFyYW0kZGF0YTE1JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE2IiwiX3BhcmFtJGRhdGExNiRlU2lnbiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTciLCJfcGFyYW0kZGF0YTE3JGVTaWduIiwiX3BhcmFtJGRhdGExOSIsIl9wYXJhbSRkYXRhMTkkZVNpZ24iLCJfcGFyYW0kZGF0YTIwIiwiX3BhcmFtJGRhdGEyMCRlU2lnbiIsIl9wYXJhbSRkYXRhMjEiLCJfcGFyYW0kZGF0YTIxJGVTaWduIiwiX3BhcmFtJGRhdGExOCIsIl9wYXJhbSRkYXRhMTgkZVNpZ24iLCJub3RlRGF0YSIsInJldHVybk9iaiIsImJsb2JPdXRwdXQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiX2dldFRkV2lkdGhEaW1lbnNpb25zIiwibGVmdFNoaWZ0IiwicmVzdWx0IiwiZGF0YSIsImhlYWRlciIsIl9wYXJhbSRkYXRhJGhlYWRlcldpZCIsIl9wYXJhbSRkYXRhJGhlYWRlcldpZDIiLCJzaGlmdCIsIndpZHRoIiwiaGVhZGVyV2lkdGgiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwiaXNQZGZGb3JEc2MiLCJwZGZTdWJUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsInN1YlRvdGFsTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJzdWJUb3RhbCIsImN1cnJlbmN5IiwiZGVzY0xhYmVsIiwicmVxdWVzdGVkQnkiLCJjdXN0b21GaWVsZHMiLCJhdXRob3Jpc2VkQnkiLCJzdGF0aWNWQSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicm93MSIsImNvbDEiLCJjb2wyIiwiY29sMyIsImNvbDQiLCJzdHlsZSIsImZvbnRTaXplIiwiaGlkZVRvdGFsIiwicm93MiIsInJvdzMiLCJ0b3RhbCIsImNvbDUiLCJ0b3RhbENvbnYiLCJzdWJUb3RhbENvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwiYWNrRGF0ZSIsImFja051bWJlciIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImdldE51bWJlck9mUGFnZXMiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIlFSQ29kZSIsInRvRGF0YVVSTCIsInRoZW4iLCJpbWFnZWJhc2U2NCIsInFyQmFzZTY0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGluZSIsInVuZGVmaW5lZCIsImdldFRleHRXaWR0aCIsInRkV2lkdGhEaW1lbnNpb25zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTIiLCJyZWN0IiwiX3RkV2lkdGhEaW1lbnNpb25zJGkzIiwiX3RkV2lkdGhEaW1lbnNpb25zJGk0Iiwic2V0RHJhd0NvbG9yIiwibWF4VGV4dEhlaWdodEhlYWRlciIsInJvdyIsImluZGV4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluIiwicm93dGV4dCIsIk1hdGgiLCJtYXgiLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsImFkZFBhZ2UiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluNCIsInRvTG9jYWxlU3RyaW5nIiwidGF4IiwiY29uY2F0IiwiYW1vdW50Iiwic2V0RmlsbENvbG9yIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsImNvbnRlbnQiLCJmb250U3R5bGUiLCJ0aGVtZSIsImhlYWRTdHlsZXMiLCJmaWxsQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJhbGlnbiIsIm1pbkNlbGxIZWlnaHQiLCJib2R5U3R5bGVzIiwiY29sdW1uU3R5bGVzIiwiY2VsbFdpZHRoIiwiaGFsaWduIiwidmFsaWduIiwicm93U3R5bGVzIiwic2V0UGFnZSIsIm1hcCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaCIsIl9zcGxpdFRleHRBbmRHZXRIZWlnaDIiLCJiYW5rIiwiYWNjb3VudCIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiZXN0YW1wIiwiZGlnaXRhbFNpZ24iLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGlzUGRmRm9yRHNjPzogYm9vbGVhbixcbiAqICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICBwZGZTdWJUaXRsZT86IHN0cmluZyxcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw2OiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tEYXRlOiBzdHJpbmcsXG4gKiAgICAgICAgICBhY2tOdW1iZXI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIGhpZGVUb3RhbD86IGJvb2xlYW5cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3czPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgcGRmVGl0bGU6IHByb3BzLnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgaXNQZGZGb3JEc2M6IHByb3BzLmlzUGRmRm9yRHNjIHx8IGZhbHNlLFxuICAgIHBkZlN1YlRpdGxlOiBwcm9wcy5wZGZTdWJUaXRsZSB8fCBcIlwiLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgICBoaWRlVG90YWw6IHByb3BzLmRhdGE/LnJvdzE/LmhpZGVUb3RhbCB8fCBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3czOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mz8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzM/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICAvLyB3ZSBjaGVjayBpZiB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIHBhZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBwYWdlIGhlaWdodC5cbiAgLy8gaWYgdHJ1ZSwgdGhlbiB3ZSBicmVhayB0aGUgY2hhbmdlLlxuICAvLyBDaGVja2luZyB3aXRoIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgYmVjYXVzZSBvZiBjdXJyZW50IHBhZ2UgbmVlZHMgdG8gaGF2ZSBzb21lIHNwYWNpbmcgYXQgdGhlIGJvdHRvbS5cbiAgY29uc3QgaXNCcmVha1BhZ2UgPSAoaGVpZ2h0LCBwYWdlSGVpZ2h0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChoZWlnaHQgPiBwYWdlSGVpZ2h0IC0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVCAmJlxuICAgICAgICBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNvbXBhbnkgQWRkcmVzc1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJjdXN0b21Gb250XCI7XG4gIGNvbnN0IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgPSAxMDtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICB9XG5cbiAgaWYgKHBhcmFtLnBkZlN1YlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCAtPSA1O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgcGFyYW0ucGRmU3ViVGl0bGUsIEFMSUdOX0NFTlRFUik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5uYW1lLCBBTElHTl9SSUdIVCk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgLy8gY29tcGFueSBsb2dvXG4gIGlmIChwYXJhbS5sb2dvLnNyYykge1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmxvZ28uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCAtIDUgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3AsXG4gICAgICBwYXJhbS5sb2dvLndpZHRoLFxuICAgICAgcGFyYW0ubG9nby5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgLy8gdGVuYW50IHRheCBudW1iZXJcbiAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvLyBJUlAgUVIgY29kZVxuICAvLyBJZiBRUiBjb2RlIGlzIGF2YWlsYmxlLCBhbGlnbiBpc3N1ZXIgYWRkcmVzcyB0byBsZWZ0LiBFbHNlIGtlZXAgaW4gcmlnaHQuXG4gIGNvbnN0IElSUFFyQ29kZSA9IHBhcmFtLmRhdGE/LmluZGlhSVJQPy5xckNvZGU7XG4gIGlmIChJUlBRckNvZGUpIHtcbiAgICBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKElSUFFyQ29kZSlcbiAgICAgIC50aGVuKChpbWFnZWJhc2U2NCkgPT4ge1xuICAgICAgICBjb25zdCBxckJhc2U2NCA9IGltYWdlYmFzZTY0O1xuXG4gICAgICAgIGRvYy5hZGRJbWFnZShcbiAgICAgICAgICBxckJhc2U2NCxcbiAgICAgICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYWRkcmVzc0xpbmUyLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzTGluZTMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgKGRvY1dpZHRoICogNCkgLyAxMFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgY29uc3QgYWRkcmVzc0xpbmUxID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIGFkZHJlc3NMaW5lMS50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTEuaGVpZ2h0ICsgMTtcbiAgICBjb25zdCBhZGRyZXNzTGluZTIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICAoZG9jV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTIudGV4dCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYWRkcmVzc0xpbmUyLmhlaWdodCArIDE7XG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYWRkcmVzc0xpbmUzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIChkb2NXaWR0aCAqIDQpIC8gMTBcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBhZGRyZXNzTGluZTMudGV4dCwgQUxJR05fUklHSFQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBhZGRyZXNzTGluZTMuaGVpZ2h0ICsgMTtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgbGV0IGN1c3RvbWVyTmFtZUhlaWdodCA9IDA7XG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUpIHtcbiAgICBjb25zdCBjdXN0b21lck5hbWUgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Lm5hbWUsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgY3VzdG9tZXJOYW1lLnRleHQpO1xuICAgIGN1c3RvbWVyTmFtZUhlaWdodCA9IGN1c3RvbWVyTmFtZS5oZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgbGV0IGxhYmVsSGVpZ2h0ID0gMDtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBjb25zdCBsYWJlbCA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIChwYWdlV2lkdGggKiA0KSAvIDEwXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBsYWJlbC50ZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgbGFiZWxIZWlnaHQgPSBsYWJlbC5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdC5uYW1lIHx8IChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGN1c3RvbWVyTmFtZUhlaWdodCA+IGxhYmVsSGVpZ2h0ID8gY3VzdG9tZXJOYW1lSGVpZ2h0IDogbGFiZWxIZWlnaHQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MubGFiZWw7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MubGFiZWw7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDcwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEubmV0VGVybUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTJMYWJlbCwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMSB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTJcbiAgKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA3MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5uZXRUZXJtLCBBTElHTl9SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMiwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMSB8fCBwYXJhbS5kYXRhLmRhdGUyKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICBwYWdlV2lkdGggLyAzIC0gMjVcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAoXG4gICAgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5IHx8XG4gICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICApIHtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC5iaWxsaW5nQWRkcmVzcy5jb3VudHJ5KTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhZ2VXaWR0aCAvIDMsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uY29udGFjdC5zaGlwcGluZ0FkZHJlc3MuY291bnRyeVxuICAgICk7XG4gIH0gZWxzZSBjdXJyZW50SGVpZ2h0IC09IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAvL2VuZCBjb250YWN0IHBhcnRcblxuICBpZiAocGFyYW0uY29udGFjdD8udGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uY29udGFjdC50YXhOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW5kaWFJUlAgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUDtcbiAgaWYgKGluZGlhSVJQKSB7XG4gICAgY3VycmVudEhlaWdodCArPSAyICogcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0UmVnVHlwZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDEpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFJlZ1R5cGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwyKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmhzbk51bSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDMpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMyksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmhzbk51bVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmlybikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDQpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNCksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmlyblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuYWNrRGF0ZSAmJiBpbmRpYUlSUC5hY2tOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw1KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDUpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tEYXRlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw2KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDYpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5hY2tOdW1iZXJcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIElOVk9JQ0UgVElUTEUgLSBJTk1PQkkgY2hhbmdlXG4gIGlmIChwYXJhbS5kYXRhPy5wZGZUaXRsZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIC8vIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGNvbnN0IHBkZlRpdGxlID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YT8ucGRmVGl0bGUsXG4gICAgICAocGFnZVdpZHRoICogMykgLyA0XG4gICAgKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwZGZUaXRsZS50ZXh0LCBBTElHTl9MRUZUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZlRpdGxlLmhlaWdodCAtIDQ7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgbGV0IG1heFRleHRIZWlnaHRIZWFkZXIgPSAwO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHJvd3RleHQgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJvdyxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnNbaW5kZXhdLndpZHRoIC0gM1xuICAgICAgKTtcbiAgICAgIG1heFRleHRIZWlnaHRIZWFkZXIgPSBNYXRoLm1heChtYXhUZXh0SGVpZ2h0SGVhZGVyLCByb3d0ZXh0LmhlaWdodCk7XG4gICAgICBkb2MudGV4dChyb3d0ZXh0LnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heFRleHRIZWlnaHRIZWFkZXIgKyAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcbiAgICB9XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApO1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChpc0JyZWFrUGFnZShjdXJyZW50SGVpZ2h0LCBwYWdlSGVpZ2h0KSkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGlmICghcGFyYW0uZGF0YS5yb3cxLmhpZGVUb3RhbCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MyAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzMuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzMuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzMuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzMuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93My5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBpZiAoaXNCcmVha1BhZ2UoY3VycmVudEhlaWdodCwgcGFnZUhlaWdodCkpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gREVGQVVMVF9DVVJSRU5UX0hFSUdIVDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gMjBcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEudG90YWwuaXNGeENvbnZlcnNpb25WaXNpYmxlKSB7XG4gICAgLy8gKDE1ID0gQ29udiB0YWJsZSBoZWlnaHQpICsgKDEwID0gYm94IGhlaWdodCkgPSAyNVxuICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fCBjdXJyZW50SGVpZ2h0ICsgMjUgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAvLyBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHNlY3Rpb24gd2lsbCB0YWtlIHRoZSBmb2xsb3dpbmcgc3BhY2VcbiAgICAvKipcbiAgICAgKiAxLiBMYWJlbCAtIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gPT4gIDEgTGluZVxuICAgICAqIDIuIEVhY2ggY3VzdG9tIGZpZWxkID0+IGhlaWdodCBjYWxjdWxhdGVkIGZyb20gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0XG4gICAgICovXG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvU2l6ZSA9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGhlaWdodCB9ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGl0ZW0sIHBhZ2VXaWR0aCAtIDIwKTtcbiAgICAgIGFkZGl0aW9uYWxJbmZvU2l6ZSArPSBoZWlnaHQ7XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIGFkZGl0aW9uYWxJbmZvU2l6ZSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkFkZGl0aW9uYWwgSW5mb3JtYXRpb25cIik7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IHRleHQsIGhlaWdodCB9ID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGl0ZW0sIHBhZ2VXaWR0aCAtIDIwKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCB0ZXh0KTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gaGVpZ2h0O1xuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIGxldCBzaWduYXR1cmVQYWdlTnVtYmVyO1xuICBsZXQgc2lnbmF0dXJlTGluZUhlaWdodDtcbiAgaWYgKHBhcmFtPy5pc1BkZkZvckRzYykge1xuICAgIC8vIFBERiBpcyBmb3IgRGlnaXRhbCBTaWduYXR1cmVcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAyMCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQgJiZcbiAgICAgICAgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIHNpZ25hdHVyZVBhZ2VOdW1iZXIgPSBkb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICAgIHNpZ25hdHVyZUxpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjA7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUICYmXG4gICAgICAgIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSBERUZBVUxUX0NVUlJFTlRfSEVJR0hUO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IERFRkFVTFRfQ1VSUkVOVF9IRUlHSFQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAvIDIsXG4gICAgICBkb2NIZWlnaHQgLSBERUZBVUxUX0NVUlJFTlRfSEVJR0hULFxuICAgICAgcGFyYW0uZm9vdGVyLnRleHQsXG4gICAgICBBTElHTl9DRU5URVJcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICBpZiAocGFyYW0uaXNQZGZGb3JEc2MpIHtcbiAgICByZXR1cm5PYmouZGlnaXRhbFNpZ24gPSB7XG4gICAgICBzaWduYXR1cmVQYWdlTnVtYmVyLFxuICAgICAgc2lnbmF0dXJlTGluZUhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssSUFBQSxHQUFBRixzQkFBQSxDQUFBSCxPQUFBO0FBQXFDLFNBQUFNLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVBQUFGLE1BQUEsQ0FBQUUsR0FBQSxTQUFBaEIsTUFBQSxDQUFBa0IseUJBQUEsR0FBQWxCLE1BQUEsQ0FBQW1CLGdCQUFBLENBQUFULE1BQUEsRUFBQVYsTUFBQSxDQUFBa0IseUJBQUEsQ0FBQUosTUFBQSxLQUFBbEIsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsR0FBQUMsT0FBQSxXQUFBQyxHQUFBLElBQUFoQixNQUFBLENBQUFvQixjQUFBLENBQUFWLE1BQUEsRUFBQU0sR0FBQSxFQUFBaEIsTUFBQSxDQUFBSyx3QkFBQSxDQUFBUyxNQUFBLEVBQUFFLEdBQUEsaUJBQUFOLE1BQUE7QUFDckMsSUFBTVcsVUFBVSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLGFBQWEsRUFBRSxlQUFlO0VBQUU7RUFDaENDLE9BQU8sRUFBRSxTQUFTO0VBQUU7RUFDcEJDLGdCQUFnQixFQUFFLGtCQUFrQjtFQUFFO0VBQ3RDQyxJQUFJLEVBQUUsTUFBTTtFQUFFO0VBQ2RDLFdBQVcsRUFBRSxhQUFhLENBQUU7QUFDOUIsQ0FBQztBQUFDQyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSkEsU0FxSmVRLG9CQUFvQkEsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLHFCQUFBLENBQUF2QixLQUFBLE9BQUFJLFNBQUE7QUFBQTtBQUFBLFNBQUFtQixzQkFBQTtFQUFBQSxxQkFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQW5DLFNBQUFDLFFBQW9DQyxLQUFLO0lBQUEsSUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxXQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxZQUFBLEVBQUFDLFdBQUEsRUFBQUMsS0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFFBQUEsRUFBQUMsWUFBQSxFQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUFtbkI5QkMsb0JBQW9CLEVBQUFDLHFCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxhQUFBLEVBQUFDLHlCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGVBQUEsRUFBQUMs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