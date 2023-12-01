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
 *           }
 *       },
 *       row2?: {
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$total, _props$data36, _props$data36$total, _props$data37, _props$data37$total, _props$data38, _props$data38$total, _props$data39, _props$data39$total, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$row, _props$data47$row$sty, _props$data48, _props$data48$amountD, _props$data49, _props$data49$amountD, _props$data50, _props$data50$amountD, _props$data51, _props$data51$amountD, _props$data51$amountD2, _props$data52, _props$data53, _props$data$indiaIRP$, _props$data$indiaIRP$2, _props$data54, _props$data54$eSign, _props$data55, _props$data55$eSign, _props$data56, _props$data56$eSign, _props$data57, _props$data57$eSign, _props$data58, _props$data58$eSign, _props$data58$eSign$s, _props$data59, _props$data59$eSign, _props$data59$eSign$s, _props$data60, _props$data60$eSign, _props$data60$eSign$s, _props$data61, _props$data61$eSign, _props$data61$eSign$s, _props$data61$eSign$s2, _props$data62, _props$data62$eSign, _props$data62$eSign$s, _props$data62$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, finalRowCount, pageNumberForInvoiceTotal, invoiceTotalLineHeight, _param$data$row, taxData, finalRowHeight, diff, totalInWords, boxWidth, boxHeight, boxX, boxY, i, staticVAContent, paymentDetails, addDesc, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, returnObj, blobOutput;
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
                }
              },
              row2: {
                col1: ((_props$data31 = props.data) === null || _props$data31 === void 0 ? void 0 : (_props$data31$row = _props$data31.row2) === null || _props$data31$row === void 0 ? void 0 : _props$data31$row.col1) || "",
                col2: ((_props$data32 = props.data) === null || _props$data32 === void 0 ? void 0 : (_props$data32$row = _props$data32.row2) === null || _props$data32$row === void 0 ? void 0 : _props$data32$row.col2) || "",
                col3: ((_props$data33 = props.data) === null || _props$data33 === void 0 ? void 0 : (_props$data33$row = _props$data33.row2) === null || _props$data33$row === void 0 ? void 0 : _props$data33$row.col3) || "",
                style: {
                  fontSize: ((_props$data34 = props.data) === null || _props$data34 === void 0 ? void 0 : (_props$data34$row = _props$data34.row2) === null || _props$data34$row === void 0 ? void 0 : (_props$data34$row$sty = _props$data34$row.style) === null || _props$data34$row$sty === void 0 ? void 0 : _props$data34$row$sty.fontSize) || 12
                }
              },
              total: {
                col1: ((_props$data35 = props.data) === null || _props$data35 === void 0 ? void 0 : (_props$data35$total = _props$data35.total) === null || _props$data35$total === void 0 ? void 0 : _props$data35$total.col1) || "",
                // Total label
                col2: ((_props$data36 = props.data) === null || _props$data36 === void 0 ? void 0 : (_props$data36$total = _props$data36.total) === null || _props$data36$total === void 0 ? void 0 : _props$data36$total.col2) || "",
                // Total amount
                col3: ((_props$data37 = props.data) === null || _props$data37 === void 0 ? void 0 : (_props$data37$total = _props$data37.total) === null || _props$data37$total === void 0 ? void 0 : _props$data37$total.col3) || "",
                // Invoice currency
                col4: ((_props$data38 = props.data) === null || _props$data38 === void 0 ? void 0 : (_props$data38$total = _props$data38.total) === null || _props$data38$total === void 0 ? void 0 : _props$data38$total.col4) || "",
                // Total amount in words label
                col5: ((_props$data39 = props.data) === null || _props$data39 === void 0 ? void 0 : (_props$data39$total = _props$data39.total) === null || _props$data39$total === void 0 ? void 0 : _props$data39$total.col5) || "",
                // Total amount in words
                totalConv: ((_props$data40 = props.data) === null || _props$data40 === void 0 ? void 0 : (_props$data40$total = _props$data40.total) === null || _props$data40$total === void 0 ? void 0 : _props$data40$total.totalConv) || "",
                // Total converted amount
                subTotalConv: ((_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$total = _props$data41.total) === null || _props$data41$total === void 0 ? void 0 : _props$data41$total.subTotalConv) || "",
                // sub total converted amount
                isFxConversionVisible: (_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$total = _props$data42.total) === null || _props$data42$total === void 0 ? void 0 : _props$data42$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$total = _props$data46.total) === null || _props$data46$total === void 0 ? void 0 : _props$data46$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$row = _props$data47.row2) === null || _props$data47$row === void 0 ? void 0 : (_props$data47$row$sty = _props$data47$row.style) === null || _props$data47$row$sty === void 0 ? void 0 : _props$data47$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$amountD = _props$data48.amountDue) === null || _props$data48$amountD === void 0 ? void 0 : _props$data48$amountD.col1) || "",
                col2: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$amountD = _props$data49.amountDue) === null || _props$data49$amountD === void 0 ? void 0 : _props$data49$amountD.col2) || "",
                col3: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$amountD = _props$data50.amountDue) === null || _props$data50$amountD === void 0 ? void 0 : _props$data50$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : (_props$data51$amountD = _props$data51.amountDue) === null || _props$data51$amountD === void 0 ? void 0 : (_props$data51$amountD2 = _props$data51$amountD.style) === null || _props$data51$amountD2 === void 0 ? void 0 : _props$data51$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : _props$data52.creditNote) || ""
            }, ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : _props$data53.indiaIRP) && {
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
                approverName: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$eSign = _props$data54.eSign) === null || _props$data54$eSign === void 0 ? void 0 : _props$data54$eSign.approverName) || "",
                approvedAt: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$eSign = _props$data55.eSign) === null || _props$data55$eSign === void 0 ? void 0 : _props$data55$eSign.approvedAt) || "",
                authorizer: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$eSign = _props$data56.eSign) === null || _props$data56$eSign === void 0 ? void 0 : _props$data56$eSign.authorizer) || "",
                approverText: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : (_props$data57$eSign = _props$data57.eSign) === null || _props$data57$eSign === void 0 ? void 0 : _props$data57$eSign.approverText) || "",
                signature: {
                  src: ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : (_props$data58$eSign = _props$data58.eSign) === null || _props$data58$eSign === void 0 ? void 0 : (_props$data58$eSign$s = _props$data58$eSign.signature) === null || _props$data58$eSign$s === void 0 ? void 0 : _props$data58$eSign$s.src) || "",
                  width: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$eSign = _props$data59.eSign) === null || _props$data59$eSign === void 0 ? void 0 : (_props$data59$eSign$s = _props$data59$eSign.signature) === null || _props$data59$eSign$s === void 0 ? void 0 : _props$data59$eSign$s.width) || 55,
                  height: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : (_props$data60$eSign = _props$data60.eSign) === null || _props$data60$eSign === void 0 ? void 0 : (_props$data60$eSign$s = _props$data60$eSign.signature) === null || _props$data60$eSign$s === void 0 ? void 0 : _props$data60$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : (_props$data61$eSign = _props$data61.eSign) === null || _props$data61$eSign === void 0 ? void 0 : (_props$data61$eSign$s = _props$data61$eSign.signature) === null || _props$data61$eSign$s === void 0 ? void 0 : (_props$data61$eSign$s2 = _props$data61$eSign$s.margin) === null || _props$data61$eSign$s2 === void 0 ? void 0 : _props$data61$eSign$s2.top) || "",
                    left: ((_props$data62 = props.data) === null || _props$data62 === void 0 ? void 0 : (_props$data62$eSign = _props$data62.eSign) === null || _props$data62$eSign === void 0 ? void 0 : (_props$data62$eSign$s = _props$data62$eSign.signature) === null || _props$data62$eSign$s === void 0 ? void 0 : (_props$data62$eSign$s2 = _props$data62$eSign$s.margin) === null || _props$data62$eSign$s2 === void 0 ? void 0 : _props$data62$eSign$s2.left) || ""
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
            currentHeight += pdfConfig.lineHeight;
            doc.setFontSize(param.data.row1.style.fontSize);
            doc.text(docWidth - 50, currentHeight, param.data.row1.col1, ALIGN_RIGHT);
            doc.text(docWidth - 10, currentHeight, param.data.row1.col3 + "  " + param.data.row1.col2, ALIGN_RIGHT);
            finalRowCount += 1;

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
        case 138:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzQkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHRvdGFsIiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkdG90YWwiLCJfcHJvcHMkZGF0YTM3IiwiX3Byb3BzJGRhdGEzNyR0b3RhbCIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHRvdGFsIiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkdG90YWwiLCJfcHJvcHMkZGF0YTQwIiwiX3Byb3BzJGRhdGE0MCR0b3RhbCIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHRvdGFsIiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHJvdyIsIl9wcm9wcyRkYXRhNDckcm93JHN0eSIsIl9wcm9wcyRkYXRhNDgiLCJfcHJvcHMkZGF0YTQ4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTEiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1MiIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkZVNpZ24iLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRlU2lnbiIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGVTaWduIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckZVNpZ24iLCJfcHJvcHMkZGF0YTU4IiwiX3Byb3BzJGRhdGE1OCRlU2lnbiIsIl9wcm9wcyRkYXRhNTgkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNTkiLCJfcHJvcHMkZGF0YTU5JGVTaWduIiwiX3Byb3BzJGRhdGE1OSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkZVNpZ24iLCJfcHJvcHMkZGF0YTYwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiIsIl9wcm9wcyRkYXRhNjEkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjEkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTYyIiwiX3Byb3BzJGRhdGE2MiRlU2lnbiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjIkZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJjb2w1IiwidG90YWxDb252Iiwic3ViVG90YWxDb252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImxhYmVsNSIsImxhYmVsNiIsImFja0RhdGUiLCJhY2tOdW1iZXIiLCJlU2lnbiIsImFwcHJvdmVyTmFtZSIsImFwcHJvdmVkQXQiLCJhdXRob3JpemVyIiwiYXBwcm92ZXJUZXh0Iiwic2lnbmF0dXJlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzaXplIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIlFSQ29kZSIsInRvRGF0YVVSTCIsInRoZW4iLCJpbWFnZWJhc2U2NCIsInFyQmFzZTY0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGluZSIsImFkZHJlc3NMaW5lMSIsInVuZGVmaW5lZCIsImdldFRleHRXaWR0aCIsInRkV2lkdGhEaW1lbnNpb25zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTIiLCJyZWN0IiwiX3RkV2lkdGhEaW1lbnNpb25zJGkzIiwiX3RkV2lkdGhEaW1lbnNpb25zJGk0Iiwic2V0RHJhd0NvbG9yIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluNCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwidG9Mb2NhbGVTdHJpbmciLCJ0YXgiLCJjb25jYXQiLCJhbW91bnQiLCJzZXRGaWxsQ29sb3IiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJzZXRQYWdlIiwibWFwIiwiYmFuayIsImFjY291bnQiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImFicnVwdCIsInN0b3AiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGVcIjtcbmltcG9ydCB7IGdldEN1c3RvbUZvbnQgfSBmcm9tIFwiLi9mb250XCI7XG5pbXBvcnQganNQREZSZnFUZW1wbGF0ZSBmcm9tIFwiLi9SRlFcIjtcbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGLCBqc1BERlJmcVRlbXBsYXRlIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgY3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjPzogc3RyaW5nW10sXG4gKiAgICAgICBjcmVkaXROb3RlTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBub3RlPzogc3RyaW5nLFxuICogICAgICAgcmVxdWVzdGVkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBjdXN0b21GaWVsZHM/OiBzdHJpbmdbXSxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICBpbmRpYUlSUD86IHtcbiAqICAgICAgICAgIHFyQ29kZTogc3RyaW5nLFxuICogICAgICAgICAgaXJuOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDQ6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFJlZ1R5cGU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMTogc3RyaW5nLFxuICogICAgICAgICAgaHNuTnVtOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDM6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHN0cmluZ1xuICogICAgICAgICAgbGFiZWwyOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNjogc3RyaW5nLFxuICogICAgICAgICAgYWNrRGF0ZTogc3RyaW5nLFxuICogICAgICAgICAgYWNrTnVtYmVyOiBzdHJpbmcsXG4gKiAgICAgIH0sXG4gKiAgICAgIGVTaWduPzoge1xuICogICAgICAgICAgYXBwcm92ZXJOYW1lPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZWRBdD86IHN0cmluZyxcbiAqICAgICAgICAgIGF1dGhvcml6ZXI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlclRleHQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBzaWduYXR1cmU/OiB7XG4gKiAgICAgICAgICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICAgICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICAgICAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgICAgICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgIH0sXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBhbnksXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRheE51bWJlcjogcHJvcHMuY29udGFjdD8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIGhlYWRlcldpZHRoOiBwcm9wcy5kYXRhPy5oZWFkZXJXaWR0aCB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgQUxJR05fUklHSFQpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubmFtZSk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhPy5wZGZUaXRsZSwgQUxJR05fTEVGVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgYCR7dGF4Lm5hbWV9OmAsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgdGF4LmFtb3VudCxcbiAgICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gdGF4RGF0YS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIC8vZW5kIHJvdzFcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIpO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBwYXJhbS5kYXRhLmN1c3RvbUZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaXRlbSk7XG4gICAgfSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIGF1dGhvcmlzZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBdXRob3Jpc2VkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBzdGF0aWMgVkEgcGF5bWVudCBkZXRhaWxzXG4gIGlmIChwYXJhbS5kYXRhLnN0YXRpY1ZBKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBjb25zdCBzdGF0aWNWQUNvbnRlbnQgPSBgQWNjb3VudCBOYW1lOiAke3BhcmFtLmJ1c2luZXNzLm5hbWV9XFxuQmFuayBOYW1lOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYmFua31cXG5BY2NvdW50IE51bWJlcjogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmFjY291bnR9YDtcbiAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHN0YXRpY1ZBQ29udGVudCxcbiAgICAgIHBhZ2VXaWR0aCAtIDQwXG4gICAgKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlBheW1lbnQgZGV0YWlsc1wiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGF5bWVudERldGFpbHMudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIEUgc2lnbmF0dXJlXG4gIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMpIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ICsgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCkgPlxuICAgICAgICBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjLFxuICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgZG9jV2lkdGggLSA2NSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuaGVhZGVyVGV4dFNpemU7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hdXRob3JpemVyfSxgLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0fSAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWV9LGAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBgb24gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZWRBdH0uYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybk9iai5lc3RhbXAgPSB7XG4gICAgcGFnZU51bWJlckZvckludm9pY2VUb3RhbCxcbiAgICBpbnZvaWNlVG90YWxMaW5lSGVpZ2h0LFxuICB9O1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUgsT0FBQTtBQUFxQyxTQUFBTSxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFBRyxNQUFBLENBQUFDLHFCQUFBLFFBQUFDLE9BQUEsR0FBQUYsTUFBQSxDQUFBQyxxQkFBQSxDQUFBSixNQUFBLEdBQUFDLGNBQUEsS0FBQUksT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBSixNQUFBLENBQUFLLHdCQUFBLENBQUFSLE1BQUEsRUFBQU8sR0FBQSxFQUFBRSxVQUFBLE9BQUFQLElBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULElBQUEsRUFBQUcsT0FBQSxZQUFBSCxJQUFBO0FBQUEsU0FBQVUsY0FBQUMsTUFBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFGLENBQUEsVUFBQUcsTUFBQSxXQUFBRixTQUFBLENBQUFELENBQUEsSUFBQUMsU0FBQSxDQUFBRCxDQUFBLFFBQUFBLENBQUEsT0FBQWYsT0FBQSxDQUFBSSxNQUFBLENBQUFjLE1BQUEsT0FBQUMsT0FBQSxXQUFBQyxHQUFBLFFBQUFDLGdCQUFBLGFBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRixNQUFBLENBQUFFLEdBQUEsU0FBQWhCLE1BQUEsQ0FBQWtCLHlCQUFBLEdBQUFsQixNQUFBLENBQUFtQixnQkFBQSxDQUFBVCxNQUFBLEVBQUFWLE1BQUEsQ0FBQWtCLHlCQUFBLENBQUFKLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBaEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBVixNQUFBLEVBQUFNLEdBQUEsRUFBQWhCLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVMsTUFBQSxFQUFBRSxHQUFBLGlCQUFBTixNQUFBO0FBQ3JDLElBQU1XLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7QUFBQ0MsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6SUEsU0EwSWVRLG9CQUFvQkEsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLHFCQUFBLENBQUF2QixLQUFBLE9BQUFJLFNBQUE7QUFBQTtBQUFBLFNBQUFtQixzQkFBQTtFQUFBQSxxQkFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQW5DLFNBQUFDLFFBQW9DQyxLQUFLO0lBQUEsSUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsV0FBQSxFQUFBQyxvQkFBQSxFQUFBQyxjQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsaUJBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBO0lBQUEsSUFBQUMs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