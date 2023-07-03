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
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("regenerator-runtime");
var _jspdf = require("jspdf");
require("jspdf-autotable");
var _qrcode = _interopRequireDefault(require("qrcode"));
var _font = require("./font");
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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$total, _props$data36, _props$data36$total, _props$data37, _props$data37$total, _props$data38, _props$data38$total, _props$data39, _props$data39$total, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$total, _props$data47, _props$data47$row, _props$data47$row$sty, _props$data48, _props$data48$amountD, _props$data49, _props$data49$amountD, _props$data50, _props$data50$amountD, _props$data51, _props$data51$amountD, _props$data51$amountD2, _props$data52, _props$data53, _props$data54, _props$data54$eSign, _props$data55, _props$data55$eSign, _props$data56, _props$data56$eSign, _props$data57, _props$data57$eSign, _props$data58, _props$data58$eSign, _props$data58$eSign$s, _props$data59, _props$data59$eSign, _props$data59$eSign$s, _props$data60, _props$data60$eSign, _props$data60$eSign$s, _props$data61, _props$data61$eSign, _props$data61$eSign$s, _props$data61$eSign$s2, _props$data62, _props$data62$eSign, _props$data62$eSign$s, _props$data62$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, currentHeight, pdfConfig, IRPQrCode, _param$business, _param$business2, _param$contact2, _param$contact3, _param$data2, _param$data3, billingAddressLabel, shippingAddressLabel, _param$contact5, _param$contact6, _param$data4, _param$data5, billingAddress, shippingAddress, _param$contact8, _param$contact9, _billingAddress, _shippingAddress, _param$contact11, _param$contact12, _billingAddress2, _shippingAddress2, indiaIRP, _param$data8, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, boxWidth, boxHeight, boxX, boxY, finalRowCount, _param$data$row, taxData, finalRowHeight, diff, totalInWords, i, staticVAContent, paymentDetails, addDesc, _param$data13, _param$data13$eSign, _param$data13$eSign$s, _param$data14, _param$data14$eSign, _param$data14$eSign$s, _param$data15, _param$data15$eSign, _param$data15$eSign$s, _param$data16, _param$data16$eSign, _param$data16$eSign$s, _param$data17, _param$data17$eSign, _param$data19, _param$data19$eSign, _param$data20, _param$data20$eSign, _param$data21, _param$data21$eSign, _param$data18, _param$data18$eSign, noteData, returnObj, blobOutput;
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
                label4: props.data.indiaIRP.label4 || ""
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
            _context.next = 53;
            break;
          }
          _context.next = 40;
          return _qrcode["default"].toDataURL(IRPQrCode).then(function (imagebase64) {
            var qrBase64 = imagebase64;
            doc.addImage(qrBase64, IMAGE_CONTENT_TYPE, docWidth - 40, currentHeight, 30, 30);
            currentHeight += pdfConfig.fieldTextSize;
          })["catch"](function (err) {
            console.error(err);
          });
        case 40:
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
          _context.next = 64;
          break;
        case 53:
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
        case 64:
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
            }
          } else {
            doc.setFont(undefined, FONT_TYPE_BOLD);
            currentHeight += pdfConfig.subLineHeight;
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
          if (param.data.total.isFxConversionVisible) {
            // (15 = Conv table height) + (10 = box height) = 25
            if (currentHeight > pageHeight || currentHeight + 25 > pageHeight) {
              doc.addPage();
              currentHeight = 10;
            }

            // Define the box parameters
            boxWidth = 95;
            boxHeight = 30;
            boxX = 10;
            boxY = currentHeight + 10; // Draw the box
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
          }
          currentHeight += pdfConfig.lineHeight;

          // No. of rows of sub total, taxes, discounts .. until Total (NOT TABLE ROWS).
          finalRowCount = 0; //line breaker before invoce total
          if (param.data.header.length && (param.data.subTotal || param.data.subTotalLabel || param.data.currency)) {
            doc.setLineWidth(0.5);
            doc.line(docWidth / 2 + 10, currentHeight, docWidth - 10, currentHeight);
            currentHeight += pdfConfig.lineHeight;
          }

          // Subtotal line
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
          return _context.abrupt("return", returnObj);
        case 133:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiT3V0cHV0VHlwZSIsIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJleHBvcnRzIiwianNQREZJbnZvaWNlVGVtcGxhdGUiLCJfeCIsIl9qc1BERkludm9pY2VUZW1wbGF0ZSIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicHJvcHMiLCJfcHJvcHMkbG9nbyIsIl9wcm9wcyRsb2dvMiIsIl9wcm9wcyRsb2dvMyIsIl9wcm9wcyRsb2dvNCIsIl9wcm9wcyRsb2dvNCRtYXJnaW4iLCJfcHJvcHMkbG9nbzUiLCJfcHJvcHMkbG9nbzUkbWFyZ2luIiwiX3Byb3BzJGJ1c2luZXNzIiwiX3Byb3BzJGJ1c2luZXNzMiIsIl9wcm9wcyRidXNpbmVzczMiLCJfcHJvcHMkYnVzaW5lc3M0IiwiX3Byb3BzJGJ1c2luZXNzNSIsIl9wcm9wcyRidXNpbmVzczYiLCJfcHJvcHMkYnVzaW5lc3M3IiwiX3Byb3BzJGNvbnRhY3QiLCJfcHJvcHMkY29udGFjdDIiLCJfcHJvcHMkY29udGFjdDMiLCJfcHJvcHMkY29udGFjdDMkYmlsbGkiLCJfcHJvcHMkY29udGFjdDQiLCJfcHJvcHMkY29udGFjdDQkYmlsbGkiLCJfcHJvcHMkY29udGFjdDUiLCJfcHJvcHMkY29udGFjdDUkYmlsbGkiLCJfcHJvcHMkY29udGFjdDYiLCJfcHJvcHMkY29udGFjdDYkYmlsbGkiLCJfcHJvcHMkY29udGFjdDciLCJfcHJvcHMkY29udGFjdDckYmlsbGkiLCJfcHJvcHMkY29udGFjdDgiLCJfcHJvcHMkY29udGFjdDgkc2hpcHAiLCJfcHJvcHMkY29udGFjdDkiLCJfcHJvcHMkY29udGFjdDkkc2hpcHAiLCJfcHJvcHMkY29udGFjdDEwIiwiX3Byb3BzJGNvbnRhY3QxMCRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMSIsIl9wcm9wcyRjb250YWN0MTEkc2hpcCIsIl9wcm9wcyRjb250YWN0MTIiLCJfcHJvcHMkY29udGFjdDEyJHNoaXAiLCJfcHJvcHMkY29udGFjdDEzIiwiX3Byb3BzJGRhdGEiLCJfcHJvcHMkZGF0YTIiLCJfcHJvcHMkZGF0YTMiLCJfcHJvcHMkZGF0YTQiLCJfcHJvcHMkZGF0YTUiLCJfcHJvcHMkZGF0YTYiLCJfcHJvcHMkZGF0YTciLCJfcHJvcHMkZGF0YTgiLCJfcHJvcHMkZGF0YTkiLCJfcHJvcHMkZGF0YTEwIiwiX3Byb3BzJGRhdGExMSIsIl9wcm9wcyRkYXRhMTIiLCJfcHJvcHMkZGF0YTEzIiwiX3Byb3BzJGRhdGExNCIsIl9wcm9wcyRkYXRhMTUiLCJfcHJvcHMkZGF0YTE2IiwiX3Byb3BzJGRhdGExNyIsIl9wcm9wcyRkYXRhMTgiLCJfcHJvcHMkZGF0YTE5IiwiX3Byb3BzJGRhdGEyMCIsIl9wcm9wcyRkYXRhMjEiLCJfcHJvcHMkZGF0YTIyIiwiX3Byb3BzJGRhdGEyMyIsIl9wcm9wcyRkYXRhMjQiLCJfcHJvcHMkZGF0YTI1IiwiX3Byb3BzJGRhdGEyNiIsIl9wcm9wcyRkYXRhMjYkcm93IiwiX3Byb3BzJGRhdGEyNyIsIl9wcm9wcyRkYXRhMjckcm93IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMCRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNCRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkdG90YWwiLCJfcHJvcHMkZGF0YTM2IiwiX3Byb3BzJGRhdGEzNiR0b3RhbCIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHRvdGFsIiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkdG90YWwiLCJfcHJvcHMkZGF0YTM5IiwiX3Byb3BzJGRhdGEzOSR0b3RhbCIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHRvdGFsIiwiX3Byb3BzJGRhdGE0NyIsIl9wcm9wcyRkYXRhNDckcm93IiwiX3Byb3BzJGRhdGE0NyRyb3ckc3R5IiwiX3Byb3BzJGRhdGE0OCIsIl9wcm9wcyRkYXRhNDgkYW1vdW50RCIsIl9wcm9wcyRkYXRhNDkiLCJfcHJvcHMkZGF0YTQ5JGFtb3VudEQiLCJfcHJvcHMkZGF0YTUwIiwiX3Byb3BzJGRhdGE1MCRhbW91bnREIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTEkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTEkYW1vdW50RDIiLCJfcHJvcHMkZGF0YTUyIiwiX3Byb3BzJGRhdGE1MyIsIl9wcm9wcyRkYXRhNTQiLCJfcHJvcHMkZGF0YTU0JGVTaWduIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkZVNpZ24iLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRlU2lnbiIsIl9wcm9wcyRkYXRhNTciLCJfcHJvcHMkZGF0YTU3JGVTaWduIiwiX3Byb3BzJGRhdGE1OCIsIl9wcm9wcyRkYXRhNTgkZVNpZ24iLCJfcHJvcHMkZGF0YTU4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRlU2lnbiIsIl9wcm9wcyRkYXRhNTkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYwJGVTaWduIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MSIsIl9wcm9wcyRkYXRhNjEkZVNpZ24iLCJfcHJvcHMkZGF0YTYxJGVTaWduJHMiLCJfcHJvcHMkZGF0YTYxJGVTaWduJHMyIiwiX3Byb3BzJGRhdGE2MiIsIl9wcm9wcyRkYXRhNjIkZVNpZ24iLCJfcHJvcHMkZGF0YTYyJGVTaWduJHMiLCJfcHJvcHMkZGF0YTYyJGVTaWduJHMyIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEkaW5kaWFJUlAiLCJfcGFyYW0kY29udGFjdCIsIl9wYXJhbSRjb250YWN0JGJpbGxpbiIsIl9wYXJhbSRjb250YWN0NCIsIl9wYXJhbSRjb250YWN0NCRiaWxsaSIsIl9wYXJhbSRjb250YWN0NyIsIl9wYXJhbSRjb250YWN0MTAiLCJfcGFyYW0kY29udGFjdDEzIiwiX3BhcmFtJGRhdGE2IiwiX3BhcmFtJGRhdGE3IiwiX3BhcmFtJGRhdGEkdG90YWwiLCJfcGFyYW0kZGF0YSR0b3RhbDIiLCJfcGFyYW0kZGF0YTExIiwiX3BhcmFtJGRhdGExMSRkZXNjIiwiX3BhcmFtJGRhdGExMiIsIl9wYXJhbSRkYXRhMTIkZVNpZ24iLCJfcGFyYW0kZGF0YTEyJGVTaWduJHMiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsIklSUFFyQ29kZSIsIl9wYXJhbSRidXNpbmVzcyIsIl9wYXJhbSRidXNpbmVzczIiLCJfcGFyYW0kY29udGFjdDIiLCJfcGFyYW0kY29udGFjdDMiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTMiLCJiaWxsaW5nQWRkcmVzc0xhYmVsIiwic2hpcHBpbmdBZGRyZXNzTGFiZWwiLCJfcGFyYW0kY29udGFjdDUiLCJfcGFyYW0kY29udGFjdDYiLCJfcGFyYW0kZGF0YTQiLCJfcGFyYW0kZGF0YTUiLCJiaWxsaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzcyIsIl9wYXJhbSRjb250YWN0OCIsIl9wYXJhbSRjb250YWN0OSIsIl9iaWxsaW5nQWRkcmVzcyIsIl9zaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDExIiwiX3BhcmFtJGNvbnRhY3QxMiIsIl9iaWxsaW5nQWRkcmVzczIiLCJfc2hpcHBpbmdBZGRyZXNzMiIsImluZGlhSVJQIiwiX3BhcmFtJGRhdGE4IiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJib3hYIiwiYm94WSIsImZpbmFsUm93Q291bnQiLCJfcGFyYW0kZGF0YSRyb3ciLCJ0YXhEYXRhIiwiZmluYWxSb3dIZWlnaHQiLCJkaWZmIiwidG90YWxJbldvcmRzIiwic3RhdGljVkFDb250ZW50IiwicGF5bWVudERldGFpbHMiLCJhZGREZXNjIiwiX3BhcmFtJGRhdGExMyIsIl9wYXJhbSRkYXRhMTMkZVNpZ24iLCJfcGFyYW0kZGF0YTEzJGVTaWduJHMiLCJfcGFyYW0kZGF0YTE0IiwiX3BhcmFtJGRhdGExNCRlU2lnbiIsIl9wYXJhbSRkYXRhMTQkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTUiLCJfcGFyYW0kZGF0YTE1JGVTaWduIiwiX3BhcmFtJGRhdGExNSRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNiIsIl9wYXJhbSRkYXRhMTYkZVNpZ24iLCJfcGFyYW0kZGF0YTE2JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE3IiwiX3BhcmFtJGRhdGExNyRlU2lnbiIsIl9wYXJhbSRkYXRhMTkiLCJfcGFyYW0kZGF0YTE5JGVTaWduIiwiX3BhcmFtJGRhdGEyMCIsIl9wYXJhbSRkYXRhMjAkZVNpZ24iLCJfcGFyYW0kZGF0YTIxIiwiX3BhcmFtJGRhdGEyMSRlU2lnbiIsIl9wYXJhbSRkYXRhMTgiLCJfcGFyYW0kZGF0YTE4JGVTaWduIiwibm90ZURhdGEiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwiY29udGFjdCIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsInN1YlRvdGFsIiwiY3VycmVuY3kiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImN1c3RvbUZpZWxkcyIsImF1dGhvcmlzZWRCeSIsInN0YXRpY1ZBIiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJwZGZUaXRsZSIsInJvdzEiLCJjb2wxIiwiY29sMiIsImNvbDMiLCJjb2w0Iiwic3R5bGUiLCJmb250U2l6ZSIsInJvdzIiLCJ0b3RhbCIsImNvbDUiLCJ0b3RhbENvbnYiLCJzdWJUb3RhbENvbnYiLCJpc0Z4Q29udmVyc2lvblZpc2libGUiLCJ0b3RhbFRheEFtb3VudCIsInRvdGFsVGF4QW1vdW50Q29udiIsImRlZmF1bHRDdXJyZW5jeSIsImNvbnZSYXRlIiwiYW1vdW50RHVlIiwiY3JlZGl0Tm90ZSIsInFyQ29kZSIsImlybiIsImdzdFJlZ1R5cGUiLCJoc25OdW0iLCJnc3RTdGF0ZVdpdGhDb2RlIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwiZVNpZ24iLCJhcHByb3Zlck5hbWUiLCJhcHByb3ZlZEF0IiwiYXV0aG9yaXplciIsImFwcHJvdmVyVGV4dCIsInNpZ25hdHVyZSIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwic2l6ZSIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwianNQREYiLCJnZXRQYWdlV2lkdGgiLCJnZXRQYWdlSGVpZ2h0IiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImhlYWRlclRleHRTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldEN1c3RvbUZvbnQiLCJhZGRGb250Iiwic2V0Rm9udCIsInNldEZvbnRTaXplIiwic2V0VGV4dENvbG9yIiwiYWRkSW1hZ2UiLCJRUkNvZGUiLCJ0b0RhdGFVUkwiLCJ0aGVuIiwiaW1hZ2ViYXNlNjQiLCJxckJhc2U2NCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpbmUiLCJhZGRyZXNzTGluZTEiLCJ1bmRlZmluZWQiLCJnZXRUZXh0V2lkdGgiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpIiwiX3RkV2lkdGhEaW1lbnNpb25zJGkyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpNCIsInNldERyYXdDb2xvciIsInJvdyIsImluZGV4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluIiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJNYXRoIiwibWF4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInNldEZpbGxDb2xvciIsImNvbmNhdCIsImF1dG9UYWJsZSIsInN0YXJ0WSIsInJpZ2h0IiwiaGVhZCIsImJvZHkiLCJjb250ZW50IiwiZm9udFN0eWxlIiwidGhlbWUiLCJoZWFkU3R5bGVzIiwiZmlsbENvbG9yIiwidGV4dENvbG9yIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiYWxpZ24iLCJtaW5DZWxsSGVpZ2h0IiwiYm9keVN0eWxlcyIsImNvbHVtblN0eWxlcyIsImNlbGxXaWR0aCIsImhhbGlnbiIsInZhbGlnbiIsInJvd1N0eWxlcyIsInRvTG9jYWxlU3RyaW5nIiwidGF4IiwiYW1vdW50Iiwic2V0UGFnZSIsIm1hcCIsImJhbmsiLCJhY2NvdW50IiwiX3BhcmFtJGRhdGE5IiwiX3BhcmFtJGRhdGExMCIsIl9wYXJhbSRkYXRhMTAkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4vZm9udFwiO1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG5leHBvcnQgeyBPdXRwdXRUeXBlLCBqc1BERiB9O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGNvbnRhY3Q/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICBiaWxsaW5nQWRkcmVzczoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgc2hpcHBpbmdBZGRyZXNzPzoge1xuICogICAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgICAgIGNvdW50cnk/OiBzdHJpbmcsXG4gKiAgICAgICB9XG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIHN1YlRvdGFsTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBzdWJUb3RhbD86IHN0cmluZyxcbiAqICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgY3JlZGl0Tm90ZUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgY3VzdG9tRmllbGRzPzogc3RyaW5nW10sXG4gKiAgICAgICBhdXRob3Jpc2VkQnk/OiBzdHJpbmcsXG4gKiAgICAgICBwZGZUaXRsZT86IHN0cmluZyxcbiAqICAgICAgIHN0YXRpY1ZBPzoge1xuICogICAgICAgICAgYWNjb3VudDogc3RyaW5nLFxuICogICAgICAgICAgYmFuazogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgaW5kaWFJUlA/OiB7XG4gKiAgICAgICAgICBxckNvZGU6IHN0cmluZyxcbiAqICAgICAgICAgIGlybjogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWw0OiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RSZWdUeXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDE6IHN0cmluZyxcbiAqICAgICAgICAgIGhzbk51bTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwzOiBzdHJpbmcsXG4gKiAgICAgICAgICBnc3RTdGF0ZVdpdGhDb2RlOiBzdHJpbmdcbiAqICAgICAgICAgIGxhYmVsMjogc3RyaW5nLFxuICogICAgICB9LFxuICogICAgICBlU2lnbj86IHtcbiAqICAgICAgICAgIGFwcHJvdmVyTmFtZT86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVkQXQ/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhdXRob3JpemVyPzogc3RyaW5nLFxuICogICAgICAgICAgYXBwcm92ZXJUZXh0Pzogc3RyaW5nLFxuICogICAgICAgICAgc2lnbmF0dXJlPzoge1xuICogICAgICAgICAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgICAgICAgICB3aWR0aD86IG51bWJlcixcbiAqICAgICAgICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgbWFyZ2luPzoge1xuICogICAgICAgICAgICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICB9LFxuICogICAgICB9LFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0PzogYW55LFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICByb3cyPzoge1xuICogICAgICAgICAgIGNvbDE/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMj86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wzPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICB0b3RhbD86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w0Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgdG90YWxDb252Pzogc3RyaW5nLFxuICogICAgICAgICAgIGlzRnhDb252ZXJzaW9uVmlzaWJsZTogYm9vbGVhbixcbiAqICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29udlJhdGU/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGSW52b2ljZVRlbXBsYXRlKHByb3BzKSB7XG4gIGNvbnN0IHBhcmFtID0ge1xuICAgIG91dHB1dFR5cGU6IHByb3BzLm91dHB1dFR5cGUgfHwgT3V0cHV0VHlwZS5TYXZlLFxuICAgIHJldHVybkpzUERGRG9jT2JqZWN0OiBwcm9wcy5yZXR1cm5Kc1BERkRvY09iamVjdCB8fCBmYWxzZSxcbiAgICBmaWxlTmFtZTogcHJvcHMuZmlsZU5hbWUgfHwgXCJcIixcbiAgICBvcmllbnRhdGlvbkxhbmRzY2FwZTogcHJvcHMub3JpZW50YXRpb25MYW5kc2NhcGUgfHwgZmFsc2UsXG4gICAgbG9nbzoge1xuICAgICAgc3JjOiBwcm9wcy5sb2dvPy5zcmMgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBwcm9wcy5sb2dvPy53aWR0aCB8fCBcIlwiLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5sb2dvPy5oZWlnaHQgfHwgXCJcIixcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHByb3BzLmxvZ28/Lm1hcmdpbj8udG9wIHx8IDAsXG4gICAgICAgIGxlZnQ6IHByb3BzLmxvZ28/Lm1hcmdpbj8ubGVmdCB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1c2luZXNzOiB7XG4gICAgICBuYW1lOiBwcm9wcy5idXNpbmVzcz8ubmFtZSB8fCBcIlwiLFxuICAgICAgYWRkcmVzczogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3MgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICBlbWFpbF8xOiBwcm9wcy5idXNpbmVzcz8uZW1haWxfMSB8fCBcIlwiLFxuICAgICAgY291bnRyeTogcHJvcHMuYnVzaW5lc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIHRheE51bWJlcjogcHJvcHMuYnVzaW5lc3M/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgY29udGFjdDoge1xuICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBuYW1lOiBwcm9wcy5jb250YWN0Py5uYW1lIHx8IFwiXCIsXG4gICAgICBiaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBsYWJlbDogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMiB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uYmlsbGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmNvdW50cnkgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmNvbnRhY3Q/LnRheE51bWJlciB8fCBcIlwiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IHByb3BzLmRhdGE/LmxhYmVsIHx8IFwiXCIsXG4gICAgICBzdWJUb3RhbExhYmVsOiBwcm9wcy5kYXRhPy5zdWJUb3RhbExhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBzdWJUb3RhbDogcHJvcHMuZGF0YT8uc3ViVG90YWwgfHwgXCJcIixcbiAgICAgIGN1cnJlbmN5OiBwcm9wcy5kYXRhPy5jdXJyZW5jeSB8fCBcIlwiLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgY3VzdG9tRmllbGRzOiBwcm9wcy5kYXRhPy5jdXN0b21GaWVsZHMgfHwgW10sXG4gICAgICBhdXRob3Jpc2VkQnk6IHByb3BzLmRhdGE/LmF1dGhvcmlzZWRCeSB8fCBcIlwiLFxuICAgICAgc3RhdGljVkE6IHByb3BzLmRhdGE/LnN0YXRpY1ZBLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIHBkZlRpdGxlOiBwcm9wcy5kYXRhPy5wZGZUaXRsZSB8fCBcIlwiLFxuICAgICAgcm93MToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93MT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBjb2w0OiBwcm9wcy5kYXRhPy5yb3cxPy5jb2w0IHx8IFtdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cxPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm93Mjoge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wxIHx8IFwiXCIsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDIgfHwgXCJcIixcbiAgICAgICAgY29sMzogcHJvcHMuZGF0YT8ucm93Mj8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5yb3cyPy5zdHlsZT8uZm9udFNpemUgfHwgMTIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG90YWw6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8udG90YWw/LmNvbDEgfHwgXCJcIiwgLy8gVG90YWwgbGFiZWxcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8udG90YWw/LmNvbDIgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50XG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wzIHx8IFwiXCIsIC8vIEludm9pY2UgY3VycmVuY3lcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8udG90YWw/LmNvbDQgfHwgXCJcIiwgLy8gVG90YWwgYW1vdW50IGluIHdvcmRzIGxhYmVsXG4gICAgICAgIGNvbDU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w1IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3Jkc1xuICAgICAgICB0b3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy50b3RhbENvbnYgfHwgXCJcIiwgLy8gVG90YWwgY29udmVydGVkIGFtb3VudFxuICAgICAgICBzdWJUb3RhbENvbnY6IHByb3BzLmRhdGE/LnRvdGFsPy5zdWJUb3RhbENvbnYgfHwgXCJcIiwgLy8gc3ViIHRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgQUxJR05fUklHSFQpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubmFtZSk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YT8ucGRmVGl0bGUsIEFMSUdOX0xFRlQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBkb2MudGV4dChyb3csIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyAxMDtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnN1YlRvdGFsQ29udl0sXG4gICAgICAgIFtcIlRvdGFsIFRheFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsVGF4QW1vdW50Q29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIC8vIE5vLiBvZiByb3dzIG9mIHN1YiB0b3RhbCwgdGF4ZXMsIGRpc2NvdW50cyAuLiB1bnRpbCBUb3RhbCAoTk9UIFRBQkxFIFJPV1MpLlxuICBsZXQgZmluYWxSb3dDb3VudCA9IDA7XG5cbiAgLy9saW5lIGJyZWFrZXIgYmVmb3JlIGludm9jZSB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoICYmXG4gICAgKHBhcmFtLmRhdGEuc3ViVG90YWwgfHwgcGFyYW0uZGF0YS5zdWJUb3RhbExhYmVsIHx8IHBhcmFtLmRhdGEuY3VycmVuY3kpXG4gICkge1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZShkb2NXaWR0aCAvIDIgKyAxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIFN1YnRvdGFsIGxpbmVcbiAgaWYgKHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCAmJiBwYXJhbS5kYXRhLnN1YlRvdGFsKSB7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jdXJyZW5jeSArIFwiICBcIiArIHBhcmFtLmRhdGEuc3ViVG90YWwudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vcm93MSAtIHRheFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cxICYmXG4gICAgKHBhcmFtLmRhdGEucm93MS5jb2wxIHx8IHBhcmFtLmRhdGEucm93MS5jb2wyIHx8IHBhcmFtLmRhdGEucm93MS5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzEuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cxLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnJvdzEuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcblxuICAgIC8vIFNob3cgYWxsIHRoZSB0YXhlcyBhcHBsaWVkXG4gICAgY29uc3QgdGF4RGF0YSA9IHBhcmFtLmRhdGEucm93MT8uY29sNDtcbiAgICBpZiAodGF4RGF0YSkge1xuICAgICAgZG9jLnNldFRleHRDb2xvcihsaWdodEdyYXkpO1xuICAgICAgdGF4RGF0YS5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgICAgICkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIGAke3RheC5uYW1lfTpgLCBBTElHTl9SSUdIVCk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICBwYXJhbS5kYXRhLnJvdzEuY29sMyArIFwiICBcIiArIHRheC5hbW91bnQsXG4gICAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaW5hbFJvd0NvdW50ICs9IHRheERhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuICAvL2VuZCByb3cxXG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy9yb3cyIC0gZGlzY291bnRzXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnJvdzIgJiZcbiAgICAocGFyYW0uZGF0YS5yb3cyLmNvbDEgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDIgfHwgcGFyYW0uZGF0YS5yb3cyLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEucm93Mi5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93Mi5jb2wyLCBBTElHTl9SSUdIVCk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG4gIC8vZW5kIHJvdzJcblxuICAvLyBNYWluIHRvdGFsXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnRvdGFsICYmXG4gICAgKHBhcmFtLmRhdGEudG90YWwuY29sMSB8fCBwYXJhbS5kYXRhLnRvdGFsLmNvbDIgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEudG90YWwuY29sMSwgQUxJR05fUklHSFQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnRvdGFsLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnRvdGFsLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZmluYWxSb3dDb3VudCArPSAxO1xuICB9XG5cbiAgLy8gLTEgPSBiZWNhdXNlIHRoZSBmeCByYXRlIGJveCBpcyBvbmUgcm93IGxvd2VyXG4gIC8vIDUgPSBlYWNoIHJvdyBoZWlnaHRcbiAgY29uc3QgZmluYWxSb3dIZWlnaHQgPSAoZmluYWxSb3dDb3VudCAtIDEpICogNTtcblxuICAvLyBBZGQgYSBsaW5lIGhlaWdodCBhZnRlciBjb252ZXJ0aW9uIHJhdGUgdGFibGUgYW5kIHRvdGFsc1xuICAvLyAzNSA9IGhlaWdodCBvZiBmeCByYXRlIGJveFxuICBpZiAocGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYgJiYgZmluYWxSb3dIZWlnaHQgPCAzNSkge1xuICAgIGNvbnN0IGRpZmYgPSAzNSAtIGZpbmFsUm93SGVpZ2h0O1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgKyBkaWZmO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmZpZWxkVGV4dFNpemU7XG4gIH1cblxuICAvLyBUb3RhbCBpbiB3b3Jkc1xuICBpZiAocGFyYW0uZGF0YS50b3RhbD8uY29sNCAmJiBwYXJhbS5kYXRhLnRvdGFsPy5jb2w1KSB7XG4gICAgY29uc3QgdG90YWxJbldvcmRzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2w1LFxuICAgICAgcGFnZVdpZHRoIC0gMjBcbiAgICApO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDQpO1xuICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKHBhcmFtLmRhdGEudG90YWwuY29sNCksXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgdG90YWxJbldvcmRzLnRleHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyB0b3RhbEluV29yZHMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gQW1vdW50IER1ZVxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5hbW91bnREdWUgJiZcbiAgICAocGFyYW0uZGF0YS5hbW91bnREdWUuY29sMSB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMiB8fFxuICAgICAgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5hbW91bnREdWUuc3R5bGUuZm9udFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmNyZWRpdE5vdGVMYWJlbCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmNyZWRpdE5vdGUsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDUwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJlcXVlc3RlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIC0gY3VzdG9tIGZpZWxkc1xuICBpZiAocGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJBZGRpdGlvbmFsIEluZm9ybWF0aW9uXCIpO1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgcGFyYW0uZGF0YS5jdXN0b21GaWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGl0ZW0pO1xuICAgIH0pO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBhdXRob3Jpc2VkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQXV0aG9yaXNlZCBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuYXV0aG9yaXNlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gc3RhdGljIFZBIHBheW1lbnQgZGV0YWlsc1xuICBpZiAocGFyYW0uZGF0YS5zdGF0aWNWQSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc3RhdGljVkFDb250ZW50ID0gYEFjY291bnQgTmFtZTogJHtwYXJhbS5idXNpbmVzcy5uYW1lfVxcbkJhbmsgTmFtZTogJHtwYXJhbS5kYXRhLnN0YXRpY1ZBLmJhbmt9XFxuQWNjb3VudCBOdW1iZXI6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5hY2NvdW50fWA7XG4gICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBzdGF0aWNWQUNvbnRlbnQsXG4gICAgICBwYWdlV2lkdGggLSA0MFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIHBheW1lbnREZXRhaWxzLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMjA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJQYXltZW50IGRldGFpbHNcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBheW1lbnREZXRhaWxzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQ7XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBFIHNpZ25hdHVyZVxuICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uc3JjKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCArIChwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHQgfHwgMjApID5cbiAgICAgICAgcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5hZGRJbWFnZShcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIGRvY1dpZHRoIC0gNjUsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ud2lkdGgsXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5oZWlnaHRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmhlYWRlclRleHRTaXplO1xuXG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcikge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBgJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXV0aG9yaXplcn0sYCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dH0gJHtwYXJhbS5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lfSxgLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYG9uICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVkQXR9LmAsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERkludm9pY2VUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFDLHNCQUFBLENBQUFILE9BQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7QUFBdUMsU0FBQUssUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFs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QUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFB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S0FBSSxFQUFFO2NBQzlCQyxRQUFRLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXBELEtBQUssQ0FBQ3dRLElBQUksY0FBQXBOLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLFFBQVEsS0FBSSxFQUFFO2NBQ3BDQyxRQUFRLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXJELEtBQUssQ0FBQ3dRLElBQUksY0FBQW5OLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLFFBQVEsS0FBSSxFQUFFO2NBQ3BDQyxTQUFTLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXRELEtBQUssQ0FBQ3dRLElBQUksY0FBQWxOLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLFNBQVMsS0FBSSxFQUFFO2NBQ3RDQyxXQUFXLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXZELEtBQUssQ0FBQ3dRLElBQUksY0FBQWpOLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLFdBQVcsS0FBSSxFQUFFO2NBQzFDQyxZQUFZLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXhELEtBQUssQ0FBQ3dRLElBQUksY0FBQWhOLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLFlBQVksS0FBSSxFQUFFO2NBQzVDQyxZQUFZLEVBQUUsRUFBQTFQLGFBQUEsR0FBQXpELEtBQUssQ0FBQ3dRLElBQUksY0FBQS9NLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLFlBQVksS0FBSSxFQUFFO2NBQzVDQyxRQUFRLEdBQUExUCxhQUFBLEdBQUUxRCxLQUFLLENBQUN3USxJQUFJLGNBQUE5TSxhQUFBLHVCQUFWQSxhQUFBLENBQVkwUCxRQUFRO2NBQzlCQyxJQUFJLEVBQUUsRUFBQTFQLGFBQUEsR0FBQTNELEtBQUssQ0FBQ3dRLElBQUksY0FBQTdNLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLElBQUksS0FBSSxFQUFFO2NBQzVCQyxlQUFlLEVBQUUsRUFBQTFQLGFBQUEsR0FBQTVELEtBQUssQ0FBQ3dRLElBQUksY0FBQTVNLGFBQUEsdUJBQVZBLGFBQUEsQ0FBWTBQLGVBQWUsS0FBSSxFQUFFO2NBQ2xEQyxJQUFJLEVB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