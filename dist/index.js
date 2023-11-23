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
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.text(10, currentHeight, "Additional Information");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIl9SRlEiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwiZXhwb3J0cyIsImpzUERGSW52b2ljZVRlbXBsYXRlIiwiX3giLCJfanNQREZJbnZvaWNlVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRjb250YWN0IiwiX3Byb3BzJGNvbnRhY3QyIiwiX3Byb3BzJGNvbnRhY3QzIiwiX3Byb3BzJGNvbnRhY3QzJGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q0IiwiX3Byb3BzJGNvbnRhY3Q0JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q1IiwiX3Byb3BzJGNvbnRhY3Q1JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q2IiwiX3Byb3BzJGNvbnRhY3Q2JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q3IiwiX3Byb3BzJGNvbnRhY3Q3JGJpbGxpIiwiX3Byb3BzJGNvbnRhY3Q4IiwiX3Byb3BzJGNvbnRhY3Q4JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3Q5IiwiX3Byb3BzJGNvbnRhY3Q5JHNoaXBwIiwiX3Byb3BzJGNvbnRhY3QxMCIsIl9wcm9wcyRjb250YWN0MTAkc2hpcCIsIl9wcm9wcyRjb250YWN0MTEiLCJfcHJvcHMkY29udGFjdDExJHNoaXAiLCJfcHJvcHMkY29udGFjdDEyIiwiX3Byb3BzJGNvbnRhY3QxMiRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMyIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZGF0YTI0IiwiX3Byb3BzJGRhdGEyNSIsIl9wcm9wcyRkYXRhMjYiLCJfcHJvcHMkZGF0YTI2JHJvdyIsIl9wcm9wcyRkYXRhMjciLCJfcHJvcHMkZGF0YTI3JHJvdyIsIl9wcm9wcyRkYXRhMjgiLCJfcHJvcHMkZGF0YTI4JHJvdyIsIl9wcm9wcyRkYXRhMjkiLCJfcHJvcHMkZGF0YTI5JHJvdyIsIl9wcm9wcyRkYXRhMzAiLCJfcHJvcHMkZGF0YTMwJHJvdyIsIl9wcm9wcyRkYXRhMzAkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzEiLCJfcHJvcHMkZGF0YTMxJHJvdyIsIl9wcm9wcyRkYXRhMzIiLCJfcHJvcHMkZGF0YTMyJHJvdyIsIl9wcm9wcyRkYXRhMzMiLCJfcHJvcHMkZGF0YTMzJHJvdyIsIl9wcm9wcyRkYXRhMzQiLCJfcHJvcHMkZGF0YTM0JHJvdyIsIl9wcm9wcyRkYXRhMzQkcm93JHN0eSIsIl9wcm9wcyRkYXRhMzUiLCJfcHJvcHMkZGF0YTM1JHRvdGFsIiwiX3Byb3BzJGRhdGEzNiIsIl9wcm9wcyRkYXRhMzYkdG90YWwiLCJfcHJvcHMkZGF0YTM3IiwiX3Byb3BzJGRhdGEzNyR0b3RhbCIsIl9wcm9wcyRkYXRhMzgiLCJfcHJvcHMkZGF0YTM4JHRvdGFsIiwiX3Byb3BzJGRhdGEzOSIsIl9wcm9wcyRkYXRhMzkkdG90YWwiLCJfcHJvcHMkZGF0YTQwIiwiX3Byb3BzJGRhdGE0MCR0b3RhbCIsIl9wcm9wcyRkYXRhNDEiLCJfcHJvcHMkZGF0YTQxJHRvdGFsIiwiX3Byb3BzJGRhdGE0MiIsIl9wcm9wcyRkYXRhNDIkdG90YWwiLCJfcHJvcHMkZGF0YTQzIiwiX3Byb3BzJGRhdGE0MyR0b3RhbCIsIl9wcm9wcyRkYXRhNDQiLCJfcHJvcHMkZGF0YTQ0JHRvdGFsIiwiX3Byb3BzJGRhdGE0NSIsIl9wcm9wcyRkYXRhNDUkdG90YWwiLCJfcHJvcHMkZGF0YTQ2IiwiX3Byb3BzJGRhdGE0NiR0b3RhbCIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JHJvdyIsIl9wcm9wcyRkYXRhNDckcm93JHN0eSIsIl9wcm9wcyRkYXRhNDgiLCJfcHJvcHMkZGF0YTQ4JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ5IiwiX3Byb3BzJGRhdGE0OSRhbW91bnREIiwiX3Byb3BzJGRhdGE1MCIsIl9wcm9wcyRkYXRhNTAkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTEiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQiLCJfcHJvcHMkZGF0YTUxJGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1MiIsIl9wcm9wcyRkYXRhNTMiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQiLCJfcHJvcHMkZGF0YSRpbmRpYUlSUCQyIiwiX3Byb3BzJGRhdGE1NCIsIl9wcm9wcyRkYXRhNTQkZVNpZ24iLCJfcHJvcHMkZGF0YTU1IiwiX3Byb3BzJGRhdGE1NSRlU2lnbiIsIl9wcm9wcyRkYXRhNTYiLCJfcHJvcHMkZGF0YTU2JGVTaWduIiwiX3Byb3BzJGRhdGE1NyIsIl9wcm9wcyRkYXRhNTckZVNpZ24iLCJfcHJvcHMkZGF0YTU4IiwiX3Byb3BzJGRhdGE1OCRlU2lnbiIsIl9wcm9wcyRkYXRhNTgkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNTkiLCJfcHJvcHMkZGF0YTU5JGVTaWduIiwiX3Byb3BzJGRhdGE1OSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MCIsIl9wcm9wcyRkYXRhNjAkZVNpZ24iLCJfcHJvcHMkZGF0YTYwJGVTaWduJHMiLCJfcHJvcHMkZGF0YTYxIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiIsIl9wcm9wcyRkYXRhNjEkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjEkZVNpZ24kczIiLCJfcHJvcHMkZGF0YTYyIiwiX3Byb3BzJGRhdGE2MiRlU2lnbiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjIkZVNpZ24kczIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YSRpbmRpYUlSUCIsIl9wYXJhbSRjb250YWN0IiwiX3BhcmFtJGNvbnRhY3QkYmlsbGluIiwiX3BhcmFtJGNvbnRhY3Q0IiwiX3BhcmFtJGNvbnRhY3Q0JGJpbGxpIiwiX3BhcmFtJGNvbnRhY3Q3IiwiX3BhcmFtJGNvbnRhY3QxMCIsIl9wYXJhbSRjb250YWN0MTMiLCJfcGFyYW0kZGF0YTYiLCJfcGFyYW0kZGF0YTciLCJfcGFyYW0kZGF0YSR0b3RhbCIsIl9wYXJhbSRkYXRhJHRvdGFsMiIsIl9wYXJhbSRkYXRhMTEiLCJfcGFyYW0kZGF0YTExJGRlc2MiLCJfcGFyYW0kZGF0YTEyIiwiX3BhcmFtJGRhdGExMiRlU2lnbiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24kcyIsInBhcmFtIiwic3BsaXRUZXh0QW5kR2V0SGVpZ2h0Iiwib3B0aW9ucyIsImRvYyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJkb2NXaWR0aCIsImRvY0hlaWdodCIsImNvbG9yQmxhY2siLCJjb2xvckJsdWUiLCJjb2xvckdyYXkiLCJsaWdodEdyYXkiLCJGT05UX1RZUEVfTk9STUFMIiwiRk9OVF9UWVBFX0JPTEQiLCJBTElHTl9SSUdIVCIsIkFMSUdOX0xFRlQiLCJBTElHTl9DRU5URVIiLCJJU1NVRVJfQUREUkVTU19MQUJFTCIsIklNQUdFX0NPTlRFTlRfVFlQRSIsIkNVU1RPTV9GT05UX05BTUUiLCJjdXJyZW50SGVpZ2h0IiwicGRmQ29uZmlnIiwiSVJQUXJDb2RlIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGJ1c2luZXNzMiIsIl9wYXJhbSRjb250YWN0MiIsIl9wYXJhbSRjb250YWN0MyIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMyIsImJpbGxpbmdBZGRyZXNzTGFiZWwiLCJzaGlwcGluZ0FkZHJlc3NMYWJlbCIsIl9wYXJhbSRjb250YWN0NSIsIl9wYXJhbSRjb250YWN0NiIsIl9wYXJhbSRkYXRhNCIsIl9wYXJhbSRkYXRhNSIsImJpbGxpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3Q4IiwiX3BhcmFtJGNvbnRhY3Q5IiwiX2JpbGxpbmdBZGRyZXNzIiwiX3NoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0MTEiLCJfcGFyYW0kY29udGFjdDEyIiwiX2JpbGxpbmdBZGRyZXNzMiIsIl9zaGlwcGluZ0FkZHJlc3MyIiwiaW5kaWFJUlAiLCJfcGFyYW0kZGF0YTgiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJmaW5hbFJvd0NvdW50IiwicGFnZU51bWJlckZvckludm9pY2VUb3RhbCIsImludm9pY2VUb3RhbExpbmVIZWlnaHQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJwZGZUaXRsZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJjb2w1IiwidG90YWxDb252Iiwic3ViVG90YWxDb252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImxhYmVsNSIsImxhYmVsNiIsImFja0RhdGUiLCJhY2tOdW1iZXIiLCJlU2lnbiIsImFwcHJvdmVyTmFtZSIsImFwcHJvdmVkQXQiLCJhdXRob3JpemVyIiwiYXBwcm92ZXJUZXh0Iiwic2lnbmF0dXJlIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJzaXplIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIlFSQ29kZSIsInRvRGF0YVVSTCIsInRoZW4iLCJpbWFnZWJhc2U2NCIsInFyQmFzZTY0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGluZSIsImFkZHJlc3NMaW5lMSIsInVuZGVmaW5lZCIsImdldFRleHRXaWR0aCIsInRkV2lkdGhEaW1lbnNpb25zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTIiLCJyZWN0IiwiX3RkV2lkdGhEaW1lbnNpb25zJGkzIiwiX3RkV2lkdGhEaW1lbnNpb25zJGk0Iiwic2V0RHJhd0NvbG9yIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsIk1hdGgiLCJtYXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluNCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwidG9Mb2NhbGVTdHJpbmciLCJ0YXgiLCJjb25jYXQiLCJhbW91bnQiLCJzZXRGaWxsQ29sb3IiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJzZXRQYWdlIiwibWFwIiwiYmFuayIsImFjY291bnQiLCJfcGFyYW0kZGF0YTkiLCJfcGFyYW0kZGF0YTEwIiwiX3BhcmFtJGRhdGExMCRkZXNjIiwiZWwiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImVzdGFtcCIsImFicnVwdCIsInN0b3AiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGVcIjtcbmltcG9ydCB7IGdldEN1c3RvbUZvbnQgfSBmcm9tIFwiLi9mb250XCI7XG5pbXBvcnQganNQREZSZnFUZW1wbGF0ZSBmcm9tIFwiLi9SRlFcIjtcbmNvbnN0IE91dHB1dFR5cGUgPSB7XG4gIFNhdmU6IFwic2F2ZVwiLCAvL3NhdmUgcGRmIGFzIGEgZmlsZVxuICBEYXRhVXJpU3RyaW5nOiBcImRhdGF1cmlzdHJpbmdcIiwgLy9yZXR1cm5zIHRoZSBkYXRhIHVyaSBzdHJpbmdcbiAgRGF0YVVyaTogXCJkYXRhdXJpXCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIGN1cnJlbnQgd2luZG93XG4gIERhdGFVcmxOZXdXaW5kb3c6IFwiZGF0YXVybG5ld3dpbmRvd1wiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBuZXcgd2luZG93XG4gIEJsb2I6IFwiYmxvYlwiLCAvL3JldHVybiBibG9iIGZvcm1hdCBvZiB0aGUgZG9jLFxuICBBcnJheUJ1ZmZlcjogXCJhcnJheWJ1ZmZlclwiLCAvL3JldHVybiBBcnJheUJ1ZmZlciBmb3JtYXRcbn07XG5cbmV4cG9ydCB7IE91dHB1dFR5cGUsIGpzUERGLCBqc1BERlJmcVRlbXBsYXRlIH07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7XG4gKiAgb3V0cHV0VHlwZTogT3V0cHV0VHlwZSB8IHN0cmluZyxcbiAqICByZXR1cm5Kc1BERkRvY09iamVjdD86IGJvb2xlYW4sXG4gKiAgZmlsZU5hbWU6IHN0cmluZyxcbiAqICBvcmllbnRhdGlvbkxhbmRzY2FwZT86IGJvb2xlYW4sXG4gKiAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgbG9nbz86IHtcbiAqICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgfVxuICogICB9LFxuICogICBidXNpbmVzcz86IHtcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgZW1haWxfMT86IHN0cmluZyxcbiAqICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB0YXhOdW1iZXI/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBzaGlwcGluZ0FkZHJlc3M/OiB7XG4gKiAgICAgICAgICBhZGRyZXNzPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUyPzogc3RyaW5nLFxuICogICAgICAgICAgYWRkcmVzc0xpbmUzPzogc3RyaW5nLFxuICogICAgICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIH1cbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgY3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjPzogc3RyaW5nW10sXG4gKiAgICAgICBjcmVkaXROb3RlTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBub3RlPzogc3RyaW5nLFxuICogICAgICAgcmVxdWVzdGVkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBjdXN0b21GaWVsZHM/OiBzdHJpbmdbXSxcbiAqICAgICAgIGF1dGhvcmlzZWRCeT86IHN0cmluZyxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICBpbmRpYUlSUD86IHtcbiAqICAgICAgICAgIHFyQ29kZTogc3RyaW5nLFxuICogICAgICAgICAgaXJuOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDQ6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFJlZ1R5cGU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMTogc3RyaW5nLFxuICogICAgICAgICAgaHNuTnVtOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDM6IHN0cmluZyxcbiAqICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHN0cmluZ1xuICogICAgICAgICAgbGFiZWwyOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDU6IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNjogc3RyaW5nLFxuICogICAgICAgICAgYWNrRGF0ZTogc3RyaW5nLFxuICogICAgICAgICAgYWNrTnVtYmVyOiBzdHJpbmcsXG4gKiAgICAgIH0sXG4gKiAgICAgIGVTaWduPzoge1xuICogICAgICAgICAgYXBwcm92ZXJOYW1lPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZWRBdD86IHN0cmluZyxcbiAqICAgICAgICAgIGF1dGhvcml6ZXI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlclRleHQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBzaWduYXR1cmU/OiB7XG4gKiAgICAgICAgICAgICAgc3JjPzogc3RyaW5nLFxuICogICAgICAgICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICAgICAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBtYXJnaW4/OiB7XG4gKiAgICAgICAgICAgICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgIH0sXG4gKiAgICAgICByb3cxPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBhbnksXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHJvdzI/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIHRvdGFsPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sNT86IHN0cmluZyxcbiAqICAgICAgICAgICB0b3RhbENvbnY/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBib29sZWFuLFxuICogICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb252UmF0ZT86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBwZGZUaXRsZTogcHJvcHMucGRmVGl0bGUgfHwgXCJcIixcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8ubGFiZWwgfHwgXCJcIixcbiAgICAgIG5hbWU6IHByb3BzLmNvbnRhY3Q/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRheE51bWJlcjogcHJvcHMuY29udGFjdD8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIGhlYWRlcldpZHRoOiBwcm9wcy5kYXRhPy5oZWFkZXJXaWR0aCB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIHN1YlRvdGFsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbCB8fCBcIlwiLFxuICAgICAgY3VycmVuY3k6IHByb3BzLmRhdGE/LmN1cnJlbmN5IHx8IFwiXCIsXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBjdXN0b21GaWVsZHM6IHByb3BzLmRhdGE/LmN1c3RvbUZpZWxkcyB8fCBbXSxcbiAgICAgIGF1dGhvcmlzZWRCeTogcHJvcHMuZGF0YT8uYXV0aG9yaXNlZEJ5IHx8IFwiXCIsXG4gICAgICBzdGF0aWNWQTogcHJvcHMuZGF0YT8uc3RhdGljVkEsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgcGRmVGl0bGU6IHByb3BzLmRhdGE/LnBkZlRpdGxlIHx8IFwiXCIsXG4gICAgICByb3cxOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93MT8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDQgfHwgW10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzE/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByb3cyOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8ucm93Mj8uY29sMiB8fCBcIlwiLFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LnJvdzI/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b3RhbDoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMSB8fCBcIlwiLCAvLyBUb3RhbCBsYWJlbFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMiB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnRcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8udG90YWw/LmNvbDMgfHwgXCJcIiwgLy8gSW52b2ljZSBjdXJyZW5jeVxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNCB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHMgbGFiZWxcbiAgICAgICAgY29sNTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDUgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzXG4gICAgICAgIHRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsQ29udiB8fCBcIlwiLCAvLyBUb3RhbCBjb252ZXJ0ZWQgYW1vdW50XG4gICAgICAgIHN1YlRvdGFsQ29udjogcHJvcHMuZGF0YT8udG90YWw/LnN1YlRvdGFsQ29udiB8fCBcIlwiLCAvLyBzdWIgdG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IHByb3BzLmRhdGE/LnRvdGFsPy5pc0Z4Q29udmVyc2lvblZpc2libGUsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnQgfHwgXCJcIixcbiAgICAgICAgdG90YWxUYXhBbW91bnRDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxUYXhBbW91bnRDb252IHx8IFwiXCIsXG4gICAgICAgIGRlZmF1bHRDdXJyZW5jeTogcHJvcHMuZGF0YT8udG90YWw/LmRlZmF1bHRDdXJyZW5jeSB8fCBcIlwiLCAvLyBkZWZhdWx0IGN1cnJlbmN5LFxuICAgICAgICBjb252UmF0ZTogcHJvcHMuZGF0YT8udG90YWw/LmNvbnZSYXRlIHx8IFwiXCIsIC8vIGNvbnZlcnNpb24gcmF0ZVxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW1vdW50RHVlOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wzIHx8IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZm9udFNpemU6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWRpdE5vdGU6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGUgfHwgXCJcIixcbiAgICAgIC4uLihwcm9wcy5kYXRhPy5pbmRpYUlSUCAmJiB7XG4gICAgICAgIGluZGlhSVJQOiB7XG4gICAgICAgICAgcXJDb2RlOiBwcm9wcy5kYXRhLmluZGlhSVJQLnFyQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGlybjogcHJvcHMuZGF0YS5pbmRpYUlSUC5pcm4gfHwgXCJcIixcbiAgICAgICAgICBnc3RSZWdUeXBlOiBwcm9wcy5kYXRhLmluZGlhSVJQLmdzdFJlZ1R5cGUgfHwgXCJcIixcbiAgICAgICAgICBoc25OdW06IHByb3BzLmRhdGEuaW5kaWFJUlAuaHNuTnVtIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RTdGF0ZVdpdGhDb2RlIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwxOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMjogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDIgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDM6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwzIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWw0OiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsNCB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDUgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDY6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWw2IHx8IFwiXCIsXG4gICAgICAgICAgYWNrRGF0ZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5hY2tEYXRlID8/IG51bGwsXG4gICAgICAgICAgYWNrTnVtYmVyOiBwcm9wcy5kYXRhLmluZGlhSVJQLmFja051bWJlciA/PyBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlU2lnbjoge1xuICAgICAgICBhcHByb3Zlck5hbWU6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3Zlck5hbWUgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZWRBdDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXQgfHwgXCJcIixcbiAgICAgICAgYXV0aG9yaXplcjogcHJvcHMuZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIgfHwgXCJcIixcbiAgICAgICAgYXBwcm92ZXJUZXh0OiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJUZXh0IHx8IFwiXCIsXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIHNyYzogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjIHx8IFwiXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoIHx8IDU1LFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwLFxuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5tYXJnaW4/LnRvcCB8fCBcIlwiLFxuICAgICAgICAgICAgbGVmdDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy5sZWZ0IHx8IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG5cbiAgLy9BZGRpbmcgUERGIHRpdGxlXG4gIGlmIChwYXJhbS5wZGZUaXRsZSkge1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0IC09IDc7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLnBkZlRpdGxlLCBBTElHTl9DRU5URVIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIH1cblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgQUxJR05fUklHSFQpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubmFtZSk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGlhSVJQLmFja0RhdGUgJiYgaW5kaWFJUlAuYWNrTnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNSk7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw1KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrRGF0ZVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGluZGlhSVJQLmxhYmVsNik7XG4gICAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgoaW5kaWFJUlAubGFiZWw2KSxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgaW5kaWFJUlAuYWNrTnVtYmVyXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBJTlZPSUNFIFRJVExFIC0gSU5NT0JJIGNoYW5nZVxuICBpZiAocGFyYW0uZGF0YT8ucGRmVGl0bGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICAvLyBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmx1ZSk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhPy5wZGZUaXRsZSwgQUxJR05fTEVGVCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDEwO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuXG4gICAgICBkb2MudGV4dChpdGVtLnRleHQsIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCArIDQpO1xuICAgIH0pO1xuXG4gICAgLy9wcmUtaW5jcmVhc2UgY3VycmVudEhlaWdodCB0byBjaGVjayB0aGUgaGVpZ2h0IGJhc2VkIG9uIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQ7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICAvL3Jlc2V0IHRoZSBoZWlnaHQgdGhhdCB3YXMgaW5jcmVhc2VkIHRvIGNoZWNrIHRoZSBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGggJiYgY3VycmVudEhlaWdodCA+IDMwKVxuICAgICAgLy8gY2hlY2sgaWYgbmV3IHBhZ2VcbiAgICAgIGN1cnJlbnRIZWlnaHQgLT0gbWF4SGVpZ2h0O1xuXG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjEpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDI7XG5cbiAgICAvL3RkIGJvcmRlciBoZWlnaHRcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDQ7XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgY3VycmVudEhlaWdodCA9IDEwO1xuICB9XG5cbiAgLy8gTm8uIG9mIHJvd3Mgb2Ygc3ViIHRvdGFsLCB0YXhlcywgZGlzY291bnRzIC4uIHVudGlsIFRvdGFsIChOT1QgVEFCTEUgUk9XUykuXG4gIGxldCBmaW5hbFJvd0NvdW50ID0gMDtcblxuICAvL2xpbmUgYnJlYWtlciBiZWZvcmUgaW52b2NlIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGggJiZcbiAgICAocGFyYW0uZGF0YS5zdWJUb3RhbCB8fCBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgfHwgcGFyYW0uZGF0YS5jdXJyZW5jeSlcbiAgKSB7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiArIDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRoZSBwYWdlIG51bWJlciB0aGUgYWJvdmUgbGluZSBpcyBvblxuICBjb25zdCBwYWdlTnVtYmVyRm9ySW52b2ljZVRvdGFsID0gZG9jLmludGVybmFsLmdldE51bWJlck9mUGFnZXMoKTtcbiAgY29uc3QgaW52b2ljZVRvdGFsTGluZUhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG5cbiAgLy8gU3VidG90YWwgbGluZVxuICBpZiAocGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsICYmIHBhcmFtLmRhdGEuc3ViVG90YWwpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmN1cnJlbmN5ICsgXCIgIFwiICsgcGFyYW0uZGF0YS5zdWJUb3RhbC50b0xvY2FsZVN0cmluZygpLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy9yb3cxIC0gdGF4XG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzEgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cxLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cxLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93MS5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzEuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEucm93MS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuXG4gICAgLy8gU2hvdyBhbGwgdGhlIHRheGVzIGFwcGxpZWRcbiAgICBjb25zdCB0YXhEYXRhID0gcGFyYW0uZGF0YS5yb3cxPy5jb2w0O1xuICAgIGlmICh0YXhEYXRhKSB7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gICAgICB0YXhEYXRhLmZvckVhY2goKHRheCkgPT4ge1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgYCR7dGF4Lm5hbWV9OmAsIEFMSUdOX1JJR0hUKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgdGF4LmFtb3VudCxcbiAgICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbmFsUm93Q291bnQgKz0gdGF4RGF0YS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIC8vZW5kIHJvdzFcblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAvL3JvdzIgLSBkaXNjb3VudHNcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MiAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzIuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzIuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cyLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDIsIEFMSUdOX1JJR0hUKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cbiAgLy9lbmQgcm93MlxuXG4gIC8vIE1haW4gdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEudG90YWwgJiZcbiAgICAocGFyYW0uZGF0YS50b3RhbC5jb2wxIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMiB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKDEyKTtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEudG90YWwuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvLyAtMSA9IGJlY2F1c2UgdGhlIGZ4IHJhdGUgYm94IGlzIG9uZSByb3cgbG93ZXJcbiAgLy8gNSA9IGVhY2ggcm93IGhlaWdodFxuICBjb25zdCBmaW5hbFJvd0hlaWdodCA9IChmaW5hbFJvd0NvdW50IC0gMSkgKiA1O1xuXG4gIC8vIEFkZCBhIGxpbmUgaGVpZ2h0IGFmdGVyIGNvbnZlcnRpb24gcmF0ZSB0YWJsZSBhbmQgdG90YWxzXG4gIC8vIDM1ID0gaGVpZ2h0IG9mIGZ4IHJhdGUgYm94XG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiAmJiBmaW5hbFJvd0hlaWdodCA8IDM1KSB7XG4gICAgY29uc3QgZGlmZiA9IDM1IC0gZmluYWxSb3dIZWlnaHQ7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZSArIGRpZmY7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuZmllbGRUZXh0U2l6ZTtcbiAgfVxuXG4gIC8vIFRvdGFsIGluIHdvcmRzXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsPy5jb2w0ICYmIHBhcmFtLmRhdGEudG90YWw/LmNvbDUpIHtcbiAgICBjb25zdCB0b3RhbEluV29yZHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDUsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sNCk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIGRvYy5nZXRUZXh0V2lkdGgocGFyYW0uZGF0YS50b3RhbC5jb2w0KSxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICB0b3RhbEluV29yZHMudGV4dFxuICAgICk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIHRvdGFsSW5Xb3Jkcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBBbW91bnQgRHVlXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLmFtb3VudER1ZSAmJlxuICAgIChwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyIHx8XG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLmFtb3VudER1ZS5zdHlsZS5mb250U2l6ZSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZUxhYmVsLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuY3JlZGl0Tm90ZSwgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMyArIFwiICBcIiArIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICBpZiAocGFyYW0uZGF0YS50b3RhbC5pc0Z4Q29udmVyc2lvblZpc2libGUpIHtcbiAgICAvLyAoMTUgPSBDb252IHRhYmxlIGhlaWdodCkgKyAoMTAgPSBib3ggaGVpZ2h0KSA9IDI1XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8IGN1cnJlbnRIZWlnaHQgKyAyNSA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSBib3ggcGFyYW1ldGVyc1xuICAgIGNvbnN0IGJveFdpZHRoID0gOTU7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gMzA7XG4gICAgY29uc3QgYm94WCA9IHBhZ2VXaWR0aCAtIGJveFdpZHRoIC0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyA1O1xuXG4gICAgLy8gRHJhdyB0aGUgYm94XG4gICAgZG9jLnNldERyYXdDb2xvcigwLCAwLCAwKTtcbiAgICBkb2Muc2V0RmlsbENvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4yKTtcbiAgICBkb2MucmVjdChib3hYLCBib3hZLCBib3hXaWR0aCwgYm94SGVpZ2h0LCBcIkZEXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgdG8gdGhlIGJveFxuICAgIGRvYy5zZXRUZXh0Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFwiRm9yIEdTVCByZXBvcnRpbmcgcHVycG9zZXM6XCIsIGJveFggKyA1LCBib3hZICsgNSk7XG4gICAgZG9jLmxpbmUoYm94WCArIDUsIGJveFkgKyA3LjUsIGJveFggKyBib3hXaWR0aCAtIDUsIGJveFkgKyA3LjUpO1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBgMSAke3BhcmFtLmRhdGEudG90YWwuY29sM30gPSAke3BhcmFtLmRhdGEudG90YWwuY29udlJhdGV9ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YCxcbiAgICAgIGJveFggKyA1LFxuICAgICAgYm94WSArIDEzXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgdGFibGVcbiAgICBkb2MuYXV0b1RhYmxlKHtcbiAgICAgIHN0YXJ0WTogYm94WSArIDE4LFxuICAgICAgbWFyZ2luOiB7IGxlZnQ6IGJveFgsIHJpZ2h0OiAwIH0sXG4gICAgICBoZWFkOiBbW1wiXCIsIGBBbW91bnQgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gXV0sXG4gICAgICBib2R5OiBbXG4gICAgICAgIFtcIlN1YnRvdGFsXCIsIHBhcmFtLmRhdGEudG90YWwuc3ViVG90YWxDb252XSxcbiAgICAgICAgW1wiVG90YWwgVGF4XCIsIHBhcmFtLmRhdGEudG90YWwudG90YWxUYXhBbW91bnRDb252XSxcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBUb3RhbCAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjb250ZW50OiBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHRoZW1lOiBcInBsYWluXCIsXG4gICAgICBoZWFkU3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZUNvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBib2R5U3R5bGVzOiB7XG4gICAgICAgIGZpbGxDb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICB0ZXh0Q29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgbGluZVdpZHRoOiAwLjIsXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgbWluQ2VsbEhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5TdHlsZXM6IHtcbiAgICAgICAgMDogeyBjZWxsV2lkdGg6IDQwLCBoYWxpZ246IFwicmlnaHRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICAgIDE6IHsgY2VsbFdpZHRoOiA1NSwgaGFsaWduOiBcImxlZnRcIiwgdmFsaWduOiBcInRvcFwiIH0sXG4gICAgICB9LFxuICAgICAgcm93U3R5bGVzOiB7XG4gICAgICAgIDE6IHsgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJveEhlaWdodCArIDMwO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIpO1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGl0ZW0pO1xuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjApID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm5PYmouZXN0YW1wID0ge1xuICAgIHBhZ2VOdW1iZXJGb3JJbnZvaWNlVG90YWwsXG4gICAgaW52b2ljZVRvdGFsTGluZUhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFDQSxJQUFBSyxJQUFBLEdBQUFGLHNCQUFBLENBQUFILE9BQUE7QUFBcUMsU0FBQU0sUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUNyQyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDO0FBQUNDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeklBLFNBMEllUSxvQkFBb0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxxQkFBQSxDQUFBdkIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBbUIsc0JBQUE7RUFBQUEscUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFuQyxTQUFBQyxRQUFvQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMscUJBQUEsRUFBQUMsZUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLFdBQUEsRUFBQUMsb0JBQUEsRUFBQUMsY0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUEsRUFBQUMsa0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQTtJQUFBLElBQUFDLEtBQUEsRUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxHQUFBLEVBQUFDLFNB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