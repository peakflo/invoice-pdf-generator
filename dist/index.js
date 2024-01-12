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
 *  pdfTitle?: string,
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
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, i, additionalInfoSize, staticVAContent, paymentDetails, addDesc, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, returnObj, blobOutput;
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
          CUSTOM_FONT_NAME = "customFont"; //starting at 15mm
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
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
          }
          doc.setFontSize(pdfConfig.headerTextSize);
          doc.setTextColor(colorBlack);
          doc.text(docWidth - 10, currentHeight, param.business.name, ALIGN_RIGHT);
          doc.setFontSize(pdfConfig.fieldTextSize);
          if (param.logo.src) {
            doc.addImage(param.logo.src, IMAGE_CONTENT_TYPE, 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
          }
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
            _context.next = 54;
            break;
          }
          _context.next = 41;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 41:
          if (param !== null && param !== void 0 && (_param$business = param.business) !== null && _param$business !== void 0 && _param$business.address) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(10, currentHeight, ISSUER_ADDRESS_LABEL);
          }
          currentHeight += pdfConfig.subLineHeight;
          doc.setFontSize(pdfConfig.fieldTextSize - 2);
          doc.text(10, currentHeight, param.business.address);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(10, currentHeight, param.business.addressLine2);
          currentHeight += pdfConfig.subLineHeight;
          if (param.business.addressLine3) {
            doc.text(10, currentHeight, param.business.addressLine3);
            currentHeight += pdfConfig.subLineHeight;
          }
          doc.text(10, currentHeight, param.business.country);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(10, currentHeight, param.business.email_1);
          _context.next = 65;
          break;
        case 54:
          if (param !== null && param !== void 0 && (_param$business2 = param.business) !== null && _param$business2 !== void 0 && _param$business2.address) {
            currentHeight += pdfConfig.lineHeight;
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.text(docWidth - 10, currentHeight, ISSUER_ADDRESS_LABEL, ALIGN_RIGHT);
          }
          doc.setFontSize(pdfConfig.fieldTextSize - 2);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(docWidth - 10, currentHeight, param.business.address, ALIGN_RIGHT);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(docWidth - 10, currentHeight, param.business.addressLine2, ALIGN_RIGHT);
          currentHeight += pdfConfig.subLineHeight;
          if (param.business.addressLine3) {
            doc.text(docWidth - 10, currentHeight, param.business.addressLine3, ALIGN_RIGHT);
            currentHeight += pdfConfig.subLineHeight;
          }
          doc.text(docWidth - 10, currentHeight, param.business.country, ALIGN_RIGHT);
          currentHeight += pdfConfig.subLineHeight;
          doc.text(docWidth - 10, currentHeight, param.business.email_1, ALIGN_RIGHT);
        case 65:
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
          if (param.contact.name) {
            doc.text(10, currentHeight, param.contact.name);
          }
          doc.setTextColor(colorBlack);
          doc.setTextColor(lightGray);
          doc.setFontSize(pdfConfig.headerTextSize - 5);
          if (param.data.label && param.data.num) {
            doc.text(docWidth - 10, currentHeight, param.data.label + param.data.num, ALIGN_RIGHT);
          }
          if (param.contact.name || param.data.label && param.data.num) currentHeight += pdfConfig.subLineHeight + 2;
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
            doc.text(10, currentHeight, (_param$data8 = param.data) === null || _param$data8 === void 0 ? void 0 : _param$data8.pdfTitle, ALIGN_LEFT);
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
            currentHeight += pdfConfig.subLineHeight + 10;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setTextColor(colorBlack);
            doc.setFontSize(pdfConfig.fieldTextSize);
            //border color
            doc.setDrawColor(colorGray);
            currentHeight += 2;
            var tdWidthDimensions = getTdWidthDimensions();
            param.data.header.forEach(function (row, index) {
              var _tdWidthDimensions$in;
              doc.text(row, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in = tdWidthDimensions[index]) === null || _tdWidthDimensions$in === void 0 ? void 0 : _tdWidthDimensions$in.shift, currentHeight);
            });
            currentHeight += pdfConfig.subLineHeight - 1;
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
            row.forEach(function (rr, index) {
              var _tdWidthDimensions$in3, _tdWidthDimensions$in4;
              var item = splitTextAndGetHeight(rr.toString(), (tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in3 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in3 === void 0 ? void 0 : _tdWidthDimensions$in3.width) - 1); //minus 1, to fix the padding issue between borders

              doc.text(item.text, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in4 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in4 === void 0 ? void 0 : _tdWidthDimensions$in4.shift, currentHeight + 4);
            });

            //pre-increase currentHeight to check the height based on next row
            if (index + 1 < tableBodyLength) currentHeight += maxHeight;
            if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
              if (index + 1 < tableBodyLength) addTableHeader();
            }

            //reset the height that was increased to check the next row
            if (index + 1 < tableBodyLength && currentHeight > 30)
              // check if new page
              currentHeight -= maxHeight;
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
            if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
            }
          }
          currentHeight += pdfConfig.lineHeight;
          if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
            doc.addPage();
            currentHeight = 10;
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
                if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
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
              currentHeight = 10;
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
             * 2. Each custom field => 1 Line
             */
            additionalInfoSize = param.data.customFields.length * pdfConfig.subLineHeight + pdfConfig.lineHeight;
            if (currentHeight + additionalInfoSize > pageHeight) {
              doc.addPage();
              currentHeight = 20;
            }
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Additional Information");
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            param.data.customFields.map(function (item) {
              currentHeight += pdfConfig.subLineHeight;
              doc.text(10, currentHeight, item);
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
                  currentHeight = 10;
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

          // E signature
          if ((_param$data12 = param.data) !== null && _param$data12 !== void 0 && (_param$data12$eSign = _param$data12.eSign) !== null && _param$data12$eSign !== void 0 && (_param$data12$eSign$s = _param$data12$eSign.signature) !== null && _param$data12$eSign$s !== void 0 && _param$data12$eSign$s.src) {
            if (currentHeight + (((_param$data13 = param.data) === null || _param$data13 === void 0 ? void 0 : (_param$data13$eSign = _param$data13.eSign) === null || _param$data13$eSign === void 0 ? void 0 : (_param$data13$eSign$s = _param$data13$eSign.signature) === null || _param$data13$eSign$s === void 0 ? void 0 : _param$data13$eSign$s.height) || 20) > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
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
              currentHeight = 10;
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
            doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
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
          return _context.abrupt("return", returnObj);
        case 139:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHJvdyIsIl9wcm9wcyRkYXRhMzUkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzYiLCJfcHJvcHMkZGF0YTM2JHJvdyIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHJvdyIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHJvdyIsIl9wcm9wcyRkYXRhMzkiLCJfcHJvcHMkZGF0YTM5JHJvdyIsIl9wcm9wcyRkYXRhMzkkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckdG90YWwiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCR0b3RhbCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JHRvdGFsIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkdG90YWwiLCJfcHJvcHMkZGF0YTUxIiwiX3Byb3BzJGRhdGE1MSR0b3RhbCIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUyJHJvdyIsIl9wcm9wcyRkYXRhNTIkcm93JHN0eSIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YTUzJGFtb3VudEQiLCJfcHJvcHMkZGF0YTU0IiwiX3Byb3BzJGRhdGE1NCRhbW91bnREIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQiLCJfcHJvcHMkZGF0YTU2JGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTgiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1OSIsIl9wcm9wcyRkYXRhNTkkZVNpZ24iLCJfcHJvcHMkZGF0YTYwIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYzIiwiX3Byb3BzJGRhdGE2MyRlU2lnbiIsIl9wcm9wcyRkYXRhNjMkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjQiLCJfcHJvcHMkZGF0YTY0JGVTaWduIiwiX3Byb3BzJGRhdGE2NCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2NSIsIl9wcm9wcyRkYXRhNjUkZVNpZ24iLCJfcHJvcHMkZGF0YTY1JGVTaWduJHMiLCJfcHJvcHMkZGF0YTY2IiwiX3Byb3BzJGRhdGE2NiRlU2lnbiIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjYkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTY3IiwiX3Byb3BzJGRhdGE2NyRlU2lnbiIsIl9wcm9wcyRkYXRhNjckZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjckZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImFkZGl0aW9uYWxJbmZvU2l6ZSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJoaWRlVG90YWwiLCJyb3cyIiwicm93MyIsInRvdGFsIiwiY29sNSIsInRvdGFsQ29udiIsInN1YlRvdGFsQ29udiIsImlzRnhDb252ZXJzaW9uVmlzaWJsZSIsInRvdGFsVGF4QW1vdW50IiwidG90YWxUYXhBbW91bnRDb252IiwiZGVmYXVsdEN1cnJlbmN5IiwiY29udlJhdGUiLCJhbW91bnREdWUiLCJjcmVkaXROb3RlIiwicXJDb2RlIiwiaXJuIiwiZ3N0UmVnVHlwZSIsImhzbk51bSIsImdzdFN0YXRlV2l0aENvZGUiLCJsYWJlbDEiLCJsYWJlbDIiLCJsYWJlbDMiLCJsYWJlbDQiLCJsYWJlbDUiLCJsYWJlbDYiLCJhY2tEYXRlIiwiYWNrTnVtYmVyIiwiZVNpZ24iLCJhcHByb3Zlck5hbWUiLCJhcHByb3ZlZEF0IiwiYXV0aG9yaXplciIsImFwcHJvdmVyVGV4dCIsInNpZ25hdHVyZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic2l6ZSIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwianNQREYiLCJnZXRQYWdlV2lkdGgiLCJnZXRQYWdlSGVpZ2h0IiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImhlYWRlclRleHRTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJhZGRyZXNzTGluZTEiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsInJvdyIsImluZGV4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluIiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInRvTG9jYWxlU3RyaW5nIiwidGF4IiwiY29uY2F0IiwiYW1vdW50Iiwic2V0RmlsbENvbG9yIiwiYXV0b1RhYmxlIiwic3RhcnRZIiwicmlnaHQiLCJoZWFkIiwiYm9keSIsImNvbnRlbnQiLCJmb250U3R5bGUiLCJ0aGVtZSIsImhlYWRTdHlsZXMiLCJmaWxsQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJhbGlnbiIsIm1pbkNlbGxIZWlnaHQiLCJib2R5U3R5bGVzIiwiY29sdW1uU3R5bGVzIiwiY2VsbFdpZHRoIiwiaGFsaWduIiwidmFsaWduIiwicm93U3R5bGVzIiwic2V0UGFnZSIsIm1hcCIsImJhbmsiLCJhY2NvdW50IiwiX3BhcmFtJGRhdGE5IiwiX3BhcmFtJGRhdGExMCIsIl9wYXJhbSRkYXRhMTAkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJlc3RhbXAiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuaW1wb3J0IGpzUERGUmZxVGVtcGxhdGUgZnJvbSBcIi4vUkZRXCI7XG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiwganNQREZSZnFUZW1wbGF0ZSB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIHBkZlRpdGxlPzogc3RyaW5nLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw1OiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDY6IHN0cmluZyxcbiAqICAgICAgICAgIGFja0RhdGU6IHN0cmluZyxcbiAqICAgICAgICAgIGFja051bWJlcjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgaGlkZVRvdGFsPzogYm9vbGVhblxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzM/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRheE51bWJlcjogcHJvcHMuY29udGFjdD8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIGhlYWRlcldpZHRoOiBwcm9wcy5kYXRhPy5oZWFkZXJXaWR0aCB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVRvdGFsOiBwcm9wcy5kYXRhPy5yb3cxPy5oaWRlVG90YWwgfHwgZmFsc2UsXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mzoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3czPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzM/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mz8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3czPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDU6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw1IHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw2OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNiB8fCBcIlwiLFxuICAgICAgICAgIGFja0RhdGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuYWNrRGF0ZSA/PyBudWxsLFxuICAgICAgICAgIGFja051bWJlcjogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tOdW1iZXIgPz8gbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuXG4gIC8vQWRkaW5nIFBERiB0aXRsZVxuICBpZiAocGFyYW0ucGRmVGl0bGUpIHtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgY3VycmVudEhlaWdodCAtPSA3O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5wZGZUaXRsZSwgQUxJR05fQ0VOVEVSKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICB9XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSk7XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLm5hbWUsIEFMSUdOX1JJR0hUKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vIElSUCBRUiBjb2RlXG4gIC8vIElmIFFSIGNvZGUgaXMgYXZhaWxibGUsIGFsaWduIGlzc3VlciBhZGRyZXNzIHRvIGxlZnQuIEVsc2Uga2VlcCBpbiByaWdodC5cbiAgY29uc3QgSVJQUXJDb2RlID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA/LnFyQ29kZTtcbiAgaWYgKElSUFFyQ29kZSkge1xuICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSVJQUXJDb2RlKVxuICAgICAgLnRoZW4oKGltYWdlYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQmFzZTY0ID0gaW1hZ2ViYXNlNjQ7XG5cbiAgICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICAgIHFyQmFzZTY0LFxuICAgICAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzBcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgSVNTVUVSX0FERFJFU1NfTEFCRUwpO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LCBBTElHTl9SSUdIVCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsIEFMSUdOX1JJR0hUKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL2xpbmUgYnJlYWtlciBhZnRlciBsb2dvICYgYnVzaW5lc3MgaW5mb1xuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICAvL0NvbnRhY3QgcGFydFxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA3KTtcbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0Lm5hbWUpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNSk7XG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsICYmIHBhcmFtLmRhdGEubnVtKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEubGFiZWwgKyBwYXJhbS5kYXRhLm51bSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Lm5hbWUgfHwgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pKVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzTGFiZWwgPSBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5sYWJlbDtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzTGFiZWwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGlmIChwYXJhbS5kYXRhPy5uZXRUZXJtIHx8IHBhcmFtLmRhdGE/Lm5ldFRlcm1MYWJlbCkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gNzAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmRhdGEuZGF0ZTFMYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA0MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5uZXRUZXJtTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMkxhYmVsLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUxIHx8XG4gICAgcGFyYW0uZGF0YS5kYXRlMlxuICApIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3MsXG4gICAgICBwYWdlV2lkdGggLyAyXG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDcwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLm5ldFRlcm0sIEFMSUdOX1JJR0hUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA0MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kYXRlMSwgQUxJR05fUklHSFQpO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPVxuICAgICAgYmlsbGluZ0FkZHJlc3MuaGVpZ2h0ID4gc2hpcHBpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzLmhlaWdodFxuICAgICAgICA6IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUxIHx8IHBhcmFtLmRhdGEuZGF0ZTIpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgIHBhZ2VXaWR0aCAvIDMgLSAyNVxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChcbiAgICBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkgfHxcbiAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICkge1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LmJpbGxpbmdBZGRyZXNzLmNvdW50cnkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFnZVdpZHRoIC8gMyxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5jb250YWN0LnNoaXBwaW5nQWRkcmVzcy5jb3VudHJ5XG4gICAgKTtcbiAgfSBlbHNlIGN1cnJlbnRIZWlnaHQgLT0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIC8vZW5kIGNvbnRhY3QgcGFydFxuXG4gIGlmIChwYXJhbS5jb250YWN0Py50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5jb250YWN0LnRheE51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbmRpYUlSUCA9IHBhcmFtLmRhdGE/LmluZGlhSVJQO1xuICBpZiAoaW5kaWFJUlApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDIgKiBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChpbmRpYUlSUC5nc3RSZWdUeXBlKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwxKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuZ3N0UmVnVHlwZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwyKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDIpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaHNuTnVtKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsMyk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWwzKSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaHNuTnVtXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuaXJuKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNCk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw0KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuaXJuXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5hY2tEYXRlICYmIGluZGlhSVJQLmFja051bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDUpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNSksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja0RhdGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDYpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsNiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmFja051bWJlclxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YT8ucGRmVGl0bGUsIEFMSUdOX0xFRlQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBkb2MudGV4dChyb3csIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICBkb2MuYWRkUGFnZSgpO1xuICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgfVxuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgcGFnZSBudW1iZXIgdGhlIGFib3ZlIGxpbmUgaXMgb25cbiAgY29uc3QgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCA9IGRvYy5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XG4gIGNvbnN0IGludm9pY2VUb3RhbExpbmVIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBpZiAoIXBhcmFtLmRhdGEucm93MS5oaWRlVG90YWwpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSAxO1xuICAgIH1cblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgICAgICkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3czICYmXG4gICAgKHBhcmFtLmRhdGEucm93My5jb2wxIHx8IHBhcmFtLmRhdGEucm93My5jb2wyIHx8IHBhcmFtLmRhdGEucm93My5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93My5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93My5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3czLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIDIwXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gcGFnZVdpZHRoIC0gYm94V2lkdGggLSAxMDtcbiAgICBjb25zdCBib3hZID0gY3VycmVudEhlaWdodCArIDU7XG5cbiAgICAvLyBEcmF3IHRoZSBib3hcbiAgICBkb2Muc2V0RHJhd0NvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjIpO1xuICAgIGRvYy5yZWN0KGJveFgsIGJveFksIGJveFdpZHRoLCBib3hIZWlnaHQsIFwiRkRcIik7XG5cbiAgICAvLyBBZGQgdGV4dCB0byB0aGUgYm94XG4gICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXCJGb3IgR1NUIHJlcG9ydGluZyBwdXJwb3NlczpcIiwgYm94WCArIDUsIGJveFkgKyA1KTtcbiAgICBkb2MubGluZShib3hYICsgNSwgYm94WSArIDcuNSwgYm94WCArIGJveFdpZHRoIC0gNSwgYm94WSArIDcuNSk7XG4gICAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGAxICR7cGFyYW0uZGF0YS50b3RhbC5jb2wzfSA9ICR7cGFyYW0uZGF0YS50b3RhbC5jb252UmF0ZX0gJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgYm94WCArIDUsXG4gICAgICBib3hZICsgMTNcbiAgICApO1xuXG4gICAgLy8gQWRkIHRoZSB0YWJsZVxuICAgIGRvYy5hdXRvVGFibGUoe1xuICAgICAgc3RhcnRZOiBib3hZICsgMTgsXG4gICAgICBtYXJnaW46IHsgbGVmdDogYm94WCwgcmlnaHQ6IDAgfSxcbiAgICAgIGhlYWQ6IFtbXCJcIiwgYEFtb3VudCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWBdXSxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAgW1wiU3VidG90YWxcIiwgcGFyYW0uZGF0YS50b3RhbC5zdWJUb3RhbENvbnZdLFxuICAgICAgICBbXCJUb3RhbCBUYXhcIiwgcGFyYW0uZGF0YS50b3RhbC50b3RhbFRheEFtb3VudENvbnZdLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogYFRvdGFsICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNvbnRlbnQ6IHBhcmFtLmRhdGEudG90YWwudG90YWxDb252LCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgdGhlbWU6IFwicGxhaW5cIixcbiAgICAgIGhlYWRTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGJvZHlTdHlsZXM6IHtcbiAgICAgICAgZmlsbENvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHRleHRDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICBtaW5DZWxsSGVpZ2h0OiA1LFxuICAgICAgfSxcbiAgICAgIGNvbHVtblN0eWxlczoge1xuICAgICAgICAwOiB7IGNlbGxXaWR0aDogNDAsIGhhbGlnbjogXCJyaWdodFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgICAgMTogeyBjZWxsV2lkdGg6IDU1LCBoYWxpZ246IFwibGVmdFwiLCB2YWxpZ246IFwidG9wXCIgfSxcbiAgICAgIH0sXG4gICAgICByb3dTdHlsZXM6IHtcbiAgICAgICAgMTogeyBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gYm94SGVpZ2h0ICsgMzA7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gLSBjdXN0b20gZmllbGRzXG4gIGlmIChwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIC8vIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gc2VjdGlvbiB3aWxsIHRha2UgdGhlIGZvbGxvd2luZyBzcGFjZVxuICAgIC8qKlxuICAgICAqIDEuIExhYmVsIC0gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiA9PiAgMSBMaW5lXG4gICAgICogMi4gRWFjaCBjdXN0b20gZmllbGQgPT4gMSBMaW5lXG4gICAgICovXG4gICAgY29uc3QgYWRkaXRpb25hbEluZm9TaXplID1cbiAgICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICtcbiAgICAgIHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgYWRkaXRpb25hbEluZm9TaXplID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGl0ZW0pO1xuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjApID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxJQUFBLEdBQUFGLHNCQUFBLENBQUFILE9BQUE7QUFBcUMsU0FBQU0sUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUNyQyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDO0FBQUNDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEpBLFNBbUplUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFBLEVBQUFDLGNBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxrQkFBQSxF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