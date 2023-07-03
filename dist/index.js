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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$contact, _props$contact2, _props$contact3, _props$contact3$billi, _props$contact4, _props$contact4$billi, _props$contact5, _props$contact5$billi, _props$contact6, _props$contact6$billi, _props$contact7, _props$contact7$billi, _props$contact8, _props$contact8$shipp, _props$contact9, _props$contact9$shipp, _props$contact10, _props$contact10$ship, _props$contact11, _props$contact11$ship, _props$contact12, _props$contact12$ship, _props$contact13, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$data24, _props$data25, _props$data26, _props$data26$row, _props$data27, _props$data27$row, _props$data28, _props$data28$row, _props$data29, _props$data29$row, _props$data30, _props$data30$row, _props$data30$row$sty, _props$data31, _props$data31$row, _props$data32, _props$data32$row, _props$data33, _props$data33$row, _props$data34, _props$data34$row, _props$data34$row$sty, _props$data35, _props$data35$total, _props$data36, _props$data36$total, _props$data37, _props$data37$total, _props$data38, _props$data38$total, _props$data39, _props$data39$total, _props$data40, _props$data40$total, _props$data41, _props$data41$total, _props$data42, _props$data42$total, _props$data43, _props$data43$total, _props$data44, _props$data44$total, _props$data45, _props$data45$total, _props$data46, _props$data46$row, _props$data46$row$sty, _props$data47, _props$data47$amountD, _props$data48, _props$data48$amountD, _props$data49, _props$data49$amountD, _props$data50, _props$data50$amountD, _props$data50$amountD2, _props$data51, _props$data52, _props$data53, _props$data53$eSign, _props$data54, _props$data54$eSign, _props$data55, _props$data55$eSign, _props$data56, _props$data56$eSign, _props$data57, _props$data57$eSign, _props$data57$eSign$s, _props$data58, _props$data58$eSign, _props$data58$eSign$s, _props$data59, _props$data59$eSign, _props$data59$eSign$s, _props$data60, _props$data60$eSign, _props$data60$eSign$s, _props$data60$eSign$s2, _props$data61, _props$data61$eSign, _props$data61$eSign$s, _props$data61$eSign$s2, _props$footer, _param$data, _param$data$indiaIRP, _param$contact, _param$contact$billin, _param$contact4, _param$contact4$billi, _param$contact7, _param$contact10, _param$contact13, _param$data6, _param$data7, _param$data$total, _param$data$total2, _param$data11, _param$data11$desc, _param$data12, _param$data12$eSign, _param$data12$eSign$s;
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
                isFxConversionVisible: (_props$data41 = props.data) === null || _props$data41 === void 0 ? void 0 : (_props$data41$total = _props$data41.total) === null || _props$data41$total === void 0 ? void 0 : _props$data41$total.isFxConversionVisible,
                totalTaxAmount: ((_props$data42 = props.data) === null || _props$data42 === void 0 ? void 0 : (_props$data42$total = _props$data42.total) === null || _props$data42$total === void 0 ? void 0 : _props$data42$total.totalTaxAmount) || "",
                totalTaxAmountConv: ((_props$data43 = props.data) === null || _props$data43 === void 0 ? void 0 : (_props$data43$total = _props$data43.total) === null || _props$data43$total === void 0 ? void 0 : _props$data43$total.totalTaxAmountConv) || "",
                defaultCurrency: ((_props$data44 = props.data) === null || _props$data44 === void 0 ? void 0 : (_props$data44$total = _props$data44.total) === null || _props$data44$total === void 0 ? void 0 : _props$data44$total.defaultCurrency) || "",
                // default currency,
                convRate: ((_props$data45 = props.data) === null || _props$data45 === void 0 ? void 0 : (_props$data45$total = _props$data45.total) === null || _props$data45$total === void 0 ? void 0 : _props$data45$total.convRate) || "",
                // conversion rate
                style: {
                  fontSize: ((_props$data46 = props.data) === null || _props$data46 === void 0 ? void 0 : (_props$data46$row = _props$data46.row2) === null || _props$data46$row === void 0 ? void 0 : (_props$data46$row$sty = _props$data46$row.style) === null || _props$data46$row$sty === void 0 ? void 0 : _props$data46$row$sty.fontSize) || 12
                }
              },
              amountDue: {
                col1: ((_props$data47 = props.data) === null || _props$data47 === void 0 ? void 0 : (_props$data47$amountD = _props$data47.amountDue) === null || _props$data47$amountD === void 0 ? void 0 : _props$data47$amountD.col1) || "",
                col2: ((_props$data48 = props.data) === null || _props$data48 === void 0 ? void 0 : (_props$data48$amountD = _props$data48.amountDue) === null || _props$data48$amountD === void 0 ? void 0 : _props$data48$amountD.col2) || "",
                col3: ((_props$data49 = props.data) === null || _props$data49 === void 0 ? void 0 : (_props$data49$amountD = _props$data49.amountDue) === null || _props$data49$amountD === void 0 ? void 0 : _props$data49$amountD.col3) || "",
                style: {
                  fontSize: ((_props$data50 = props.data) === null || _props$data50 === void 0 ? void 0 : (_props$data50$amountD = _props$data50.amountDue) === null || _props$data50$amountD === void 0 ? void 0 : (_props$data50$amountD2 = _props$data50$amountD.style) === null || _props$data50$amountD2 === void 0 ? void 0 : _props$data50$amountD2.fontSize) || 12
                }
              },
              creditNote: ((_props$data51 = props.data) === null || _props$data51 === void 0 ? void 0 : _props$data51.creditNote) || ""
            }, ((_props$data52 = props.data) === null || _props$data52 === void 0 ? void 0 : _props$data52.indiaIRP) && {
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
                approverName: ((_props$data53 = props.data) === null || _props$data53 === void 0 ? void 0 : (_props$data53$eSign = _props$data53.eSign) === null || _props$data53$eSign === void 0 ? void 0 : _props$data53$eSign.approverName) || "",
                approvedAt: ((_props$data54 = props.data) === null || _props$data54 === void 0 ? void 0 : (_props$data54$eSign = _props$data54.eSign) === null || _props$data54$eSign === void 0 ? void 0 : _props$data54$eSign.approvedAt) || "",
                authorizer: ((_props$data55 = props.data) === null || _props$data55 === void 0 ? void 0 : (_props$data55$eSign = _props$data55.eSign) === null || _props$data55$eSign === void 0 ? void 0 : _props$data55$eSign.authorizer) || "",
                approverText: ((_props$data56 = props.data) === null || _props$data56 === void 0 ? void 0 : (_props$data56$eSign = _props$data56.eSign) === null || _props$data56$eSign === void 0 ? void 0 : _props$data56$eSign.approverText) || "",
                signature: {
                  src: ((_props$data57 = props.data) === null || _props$data57 === void 0 ? void 0 : (_props$data57$eSign = _props$data57.eSign) === null || _props$data57$eSign === void 0 ? void 0 : (_props$data57$eSign$s = _props$data57$eSign.signature) === null || _props$data57$eSign$s === void 0 ? void 0 : _props$data57$eSign$s.src) || "",
                  width: ((_props$data58 = props.data) === null || _props$data58 === void 0 ? void 0 : (_props$data58$eSign = _props$data58.eSign) === null || _props$data58$eSign === void 0 ? void 0 : (_props$data58$eSign$s = _props$data58$eSign.signature) === null || _props$data58$eSign$s === void 0 ? void 0 : _props$data58$eSign$s.width) || 55,
                  height: ((_props$data59 = props.data) === null || _props$data59 === void 0 ? void 0 : (_props$data59$eSign = _props$data59.eSign) === null || _props$data59$eSign === void 0 ? void 0 : (_props$data59$eSign$s = _props$data59$eSign.signature) === null || _props$data59$eSign$s === void 0 ? void 0 : _props$data59$eSign$s.height) || 20,
                  margin: {
                    top: ((_props$data60 = props.data) === null || _props$data60 === void 0 ? void 0 : (_props$data60$eSign = _props$data60.eSign) === null || _props$data60$eSign === void 0 ? void 0 : (_props$data60$eSign$s = _props$data60$eSign.signature) === null || _props$data60$eSign$s === void 0 ? void 0 : (_props$data60$eSign$s2 = _props$data60$eSign$s.margin) === null || _props$data60$eSign$s2 === void 0 ? void 0 : _props$data60$eSign$s2.top) || "",
                    left: ((_props$data61 = props.data) === null || _props$data61 === void 0 ? void 0 : (_props$data61$eSign = _props$data61.eSign) === null || _props$data61$eSign === void 0 ? void 0 : (_props$data61$eSign$s = _props$data61$eSign.signature) === null || _props$data61$eSign$s === void 0 ? void 0 : (_props$data61$eSign$s2 = _props$data61$eSign$s.margin) === null || _props$data61$eSign$s2 === void 0 ? void 0 : _props$data61$eSign$s2.left) || ""
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
              body: [["Subtotal", param.data.total.totalConv], ["Total Tax", param.data.total.totalTaxAmountConv], [{
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
        case 132:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFInvoiceTemplate.apply(this, arguments);
}
var _default = jsPDFInvoiceTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX3FyY29kZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZm9udCIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiT3V0cHV0VHlwZSIsIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJleHBvcnRzIiwianNQREZJbnZvaWNlVGVtcGxhdGUiLCJfeCIsIl9qc1BERkludm9pY2VUZW1wbGF0ZSIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicHJvcHMiLCJfcHJvcHMkbG9nbyIsIl9wcm9wcyRsb2dvMiIsIl9wcm9wcyRsb2dvMyIsIl9wcm9wcyRsb2dvNCIsIl9wcm9wcyRsb2dvNCRtYXJnaW4iLCJfcHJvcHMkbG9nbzUiLCJfcHJvcHMkbG9nbzUkbWFyZ2luIiwiX3Byb3BzJGJ1c2luZXNzIiwiX3Byb3BzJGJ1c2luZXNzMiIsIl9wcm9wcyRidXNpbmVzczMiLCJfcHJvcHMkYnVzaW5lc3M0IiwiX3Byb3BzJGJ1c2luZXNzNSIsIl9wcm9wcyRidXNpbmVzczYiLCJfcHJvcHMkYnVzaW5lc3M3IiwiX3Byb3BzJGNvbnRhY3QiLCJfcHJvcHMkY29udGFjdDIiLCJfcHJvcHMkY29udGFjdDMiLCJfcHJvcHMkY29udGFjdDMkYmlsbGkiLCJfcHJvcHMkY29udGFjdDQiLCJfcHJvcHMkY29udGFjdDQkYmlsbGkiLCJfcHJvcHMkY29udGFjdDUiLCJfcHJvcHMkY29udGFjdDUkYmlsbGkiLCJfcHJvcHMkY29udGFjdDYiLCJfcHJvcHMkY29udGFjdDYkYmlsbGkiLCJfcHJvcHMkY29udGFjdDciLCJfcHJvcHMkY29udGFjdDckYmlsbGkiLCJfcHJvcHMkY29udGFjdDgiLCJfcHJvcHMkY29udGFjdDgkc2hpcHAiLCJfcHJvcHMkY29udGFjdDkiLCJfcHJvcHMkY29udGFjdDkkc2hpcHAiLCJfcHJvcHMkY29udGFjdDEwIiwiX3Byb3BzJGNvbnRhY3QxMCRzaGlwIiwiX3Byb3BzJGNvbnRhY3QxMSIsIl9wcm9wcyRjb250YWN0MTEkc2hpcCIsIl9wcm9wcyRjb250YWN0MTIiLCJfcHJvcHMkY29udGFjdDEyJHNoaXAiLCJfcHJvcHMkY29udGFjdDEzIiwiX3Byb3BzJGRhdGEiLCJfcHJvcHMkZGF0YTIiLCJfcHJvcHMkZGF0YTMiLCJfcHJvcHMkZGF0YTQiLCJfcHJvcHMkZGF0YTUiLCJfcHJvcHMkZGF0YTYiLCJfcHJvcHMkZGF0YTciLCJfcHJvcHMkZGF0YTgiLCJfcHJvcHMkZGF0YTkiLCJfcHJvcHMkZGF0YTEwIiwiX3Byb3BzJGRhdGExMSIsIl9wcm9wcyRkYXRhMTIiLCJfcHJvcHMkZGF0YTEzIiwiX3Byb3BzJGRhdGExNCIsIl9wcm9wcyRkYXRhMTUiLCJfcHJvcHMkZGF0YTE2IiwiX3Byb3BzJGRhdGExNyIsIl9wcm9wcyRkYXRhMTgiLCJfcHJvcHMkZGF0YTE5IiwiX3Byb3BzJGRhdGEyMCIsIl9wcm9wcyRkYXRhMjEiLCJfcHJvcHMkZGF0YTIyIiwiX3Byb3BzJGRhdGEyMyIsIl9wcm9wcyRkYXRhMjQiLCJfcHJvcHMkZGF0YTI1IiwiX3Byb3BzJGRhdGEyNiIsIl9wcm9wcyRkYXRhMjYkcm93IiwiX3Byb3BzJGRhdGEyNyIsIl9wcm9wcyRkYXRhMjckcm93IiwiX3Byb3BzJGRhdGEyOCIsIl9wcm9wcyRkYXRhMjgkcm93IiwiX3Byb3BzJGRhdGEyOSIsIl9wcm9wcyRkYXRhMjkkcm93IiwiX3Byb3BzJGRhdGEzMCIsIl9wcm9wcyRkYXRhMzAkcm93IiwiX3Byb3BzJGRhdGEzMCRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzMSIsIl9wcm9wcyRkYXRhMzEkcm93IiwiX3Byb3BzJGRhdGEzMiIsIl9wcm9wcyRkYXRhMzIkcm93IiwiX3Byb3BzJGRhdGEzMyIsIl9wcm9wcyRkYXRhMzMkcm93IiwiX3Byb3BzJGRhdGEzNCIsIl9wcm9wcyRkYXRhMzQkcm93IiwiX3Byb3BzJGRhdGEzNCRyb3ckc3R5IiwiX3Byb3BzJGRhdGEzNSIsIl9wcm9wcyRkYXRhMzUkdG90YWwiLCJfcHJvcHMkZGF0YTM2IiwiX3Byb3BzJGRhdGEzNiR0b3RhbCIsIl9wcm9wcyRkYXRhMzciLCJfcHJvcHMkZGF0YTM3JHRvdGFsIiwiX3Byb3BzJGRhdGEzOCIsIl9wcm9wcyRkYXRhMzgkdG90YWwiLCJfcHJvcHMkZGF0YTM5IiwiX3Byb3BzJGRhdGEzOSR0b3RhbCIsIl9wcm9wcyRkYXRhNDAiLCJfcHJvcHMkZGF0YTQwJHRvdGFsIiwiX3Byb3BzJGRhdGE0MSIsIl9wcm9wcyRkYXRhNDEkdG90YWwiLCJfcHJvcHMkZGF0YTQyIiwiX3Byb3BzJGRhdGE0MiR0b3RhbCIsIl9wcm9wcyRkYXRhNDMiLCJfcHJvcHMkZGF0YTQzJHRvdGFsIiwiX3Byb3BzJGRhdGE0NCIsIl9wcm9wcyRkYXRhNDQkdG90YWwiLCJfcHJvcHMkZGF0YTQ1IiwiX3Byb3BzJGRhdGE0NSR0b3RhbCIsIl9wcm9wcyRkYXRhNDYiLCJfcHJvcHMkZGF0YTQ2JHJvdyIsIl9wcm9wcyRkYXRhNDYkcm93JHN0eSIsIl9wcm9wcyRkYXRhNDciLCJfcHJvcHMkZGF0YTQ3JGFtb3VudEQiLCJfcHJvcHMkZGF0YTQ4IiwiX3Byb3BzJGRhdGE0OCRhbW91bnREIiwiX3Byb3BzJGRhdGE0OSIsIl9wcm9wcyRkYXRhNDkkYW1vdW50RCIsIl9wcm9wcyRkYXRhNTAiLCJfcHJvcHMkZGF0YTUwJGFtb3VudEQiLCJfcHJvcHMkZGF0YTUwJGFtb3VudEQyIiwiX3Byb3BzJGRhdGE1MSIsIl9wcm9wcyRkYXRhNTIiLCJfcHJvcHMkZGF0YTUzIiwiX3Byb3BzJGRhdGE1MyRlU2lnbiIsIl9wcm9wcyRkYXRhNTQiLCJfcHJvcHMkZGF0YTU0JGVTaWduIiwiX3Byb3BzJGRhdGE1NSIsIl9wcm9wcyRkYXRhNTUkZVNpZ24iLCJfcHJvcHMkZGF0YTU2IiwiX3Byb3BzJGRhdGE1NiRlU2lnbiIsIl9wcm9wcyRkYXRhNTciLCJfcHJvcHMkZGF0YTU3JGVTaWduIiwiX3Byb3BzJGRhdGE1NyRlU2lnbiRzIiwiX3Byb3BzJGRhdGE1OCIsIl9wcm9wcyRkYXRhNTgkZVNpZ24iLCJfcHJvcHMkZGF0YTU4JGVTaWduJHMiLCJfcHJvcHMkZGF0YTU5IiwiX3Byb3BzJGRhdGE1OSRlU2lnbiIsIl9wcm9wcyRkYXRhNTkkZVNpZ24kcyIsIl9wcm9wcyRkYXRhNjAiLCJfcHJvcHMkZGF0YTYwJGVTaWduIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MCRlU2lnbiRzMiIsIl9wcm9wcyRkYXRhNjEiLCJfcHJvcHMkZGF0YTYxJGVTaWduIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiRzIiwiX3Byb3BzJGRhdGE2MSRlU2lnbiRzMiIsIl9wcm9wcyRmb290ZXIiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhJGluZGlhSVJQIiwiX3BhcmFtJGNvbnRhY3QiLCJfcGFyYW0kY29udGFjdCRiaWxsaW4iLCJfcGFyYW0kY29udGFjdDQiLCJfcGFyYW0kY29udGFjdDQkYmlsbGkiLCJfcGFyYW0kY29udGFjdDciLCJfcGFyYW0kY29udGFjdDEwIiwiX3BhcmFtJGNvbnRhY3QxMyIsIl9wYXJhbSRkYXRhNiIsIl9wYXJhbSRkYXRhNyIsIl9wYXJhbSRkYXRhJHRvdGFsIiwiX3BhcmFtJGRhdGEkdG90YWwyIiwiX3BhcmFtJGRhdGExMSIsIl9wYXJhbSRkYXRhMTEkZGVzYyIsIl9wYXJhbSRkYXRhMTIiLCJfcGFyYW0kZGF0YTEyJGVTaWduIiwiX3BhcmFtJGRhdGExMiRlU2lnbiRzIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJJUlBRckNvZGUiLCJfcGFyYW0kYnVzaW5lc3MiLCJfcGFyYW0kYnVzaW5lc3MyIiwiX3BhcmFtJGNvbnRhY3QyIiwiX3BhcmFtJGNvbnRhY3QzIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEzIiwiYmlsbGluZ0FkZHJlc3NMYWJlbCIsInNoaXBwaW5nQWRkcmVzc0xhYmVsIiwiX3BhcmFtJGNvbnRhY3Q1IiwiX3BhcmFtJGNvbnRhY3Q2IiwiX3BhcmFtJGRhdGE0IiwiX3BhcmFtJGRhdGE1IiwiYmlsbGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3MiLCJfcGFyYW0kY29udGFjdDgiLCJfcGFyYW0kY29udGFjdDkiLCJfYmlsbGluZ0FkZHJlc3MiLCJfc2hpcHBpbmdBZGRyZXNzIiwiX3BhcmFtJGNvbnRhY3QxMSIsIl9wYXJhbSRjb250YWN0MTIiLCJfYmlsbGluZ0FkZHJlc3MyIiwiX3NoaXBwaW5nQWRkcmVzczIiLCJpbmRpYUlSUCIsIl9wYXJhbSRkYXRhOCIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94WCIsImJveFkiLCJmaW5hbFJvd0NvdW50IiwiX3BhcmFtJGRhdGEkcm93IiwidGF4RGF0YSIsImZpbmFsUm93SGVpZ2h0IiwiZGlmZiIsInRvdGFsSW5Xb3JkcyIsInN0YXRpY1ZBQ29udGVudCIsInBheW1lbnREZXRhaWxzIiwiYWRkRGVzYyIsIl9wYXJhbSRkYXRhMTMiLCJfcGFyYW0kZGF0YTEzJGVTaWduIiwiX3BhcmFtJGRhdGExMyRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNCIsIl9wYXJhbSRkYXRhMTQkZVNpZ24iLCJfcGFyYW0kZGF0YTE0JGVTaWduJHMiLCJfcGFyYW0kZGF0YTE1IiwiX3BhcmFtJGRhdGExNSRlU2lnbiIsIl9wYXJhbSRkYXRhMTUkZVNpZ24kcyIsIl9wYXJhbSRkYXRhMTYiLCJfcGFyYW0kZGF0YTE2JGVTaWduIiwiX3BhcmFtJGRhdGExNiRlU2lnbiRzIiwiX3BhcmFtJGRhdGExNyIsIl9wYXJhbSRkYXRhMTckZVNpZ24iLCJfcGFyYW0kZGF0YTE5IiwiX3BhcmFtJGRhdGExOSRlU2lnbiIsIl9wYXJhbSRkYXRhMjAiLCJfcGFyYW0kZGF0YTIwJGVTaWduIiwiX3BhcmFtJGRhdGEyMSIsIl9wYXJhbSRkYXRhMjEkZVNpZ24iLCJfcGFyYW0kZGF0YTE4IiwiX3BhcmFtJGRhdGExOCRlU2lnbiIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJ1c2luZXNzIiwibmFtZSIsImFkZHJlc3MiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJlbWFpbF8xIiwiY291bnRyeSIsInRheE51bWJlciIsImNvbnRhY3QiLCJsYWJlbCIsInN1YlRvdGFsTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJzdWJUb3RhbCIsImN1cnJlbmN5IiwiZGVzY0xhYmVsIiwicmVxdWVzdGVkQnkiLCJjdXN0b21GaWVsZHMiLCJhdXRob3Jpc2VkQnkiLCJzdGF0aWNWQSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwicGRmVGl0bGUiLCJyb3cxIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiY29sNCIsInN0eWxlIiwiZm9udFNpemUiLCJyb3cyIiwidG90YWwiLCJjb2w1IiwidG90YWxDb252IiwiaXNGeENvbnZlcnNpb25WaXNpYmxlIiwidG90YWxUYXhBbW91bnQiLCJ0b3RhbFRheEFtb3VudENvbnYiLCJkZWZhdWx0Q3VycmVuY3kiLCJjb252UmF0ZSIsImFtb3VudER1ZSIsImNyZWRpdE5vdGUiLCJxckNvZGUiLCJpcm4iLCJnc3RSZWdUeXBlIiwiaHNuTnVtIiwiZ3N0U3RhdGVXaXRoQ29kZSIsImxhYmVsMSIsImxhYmVsMiIsImxhYmVsMyIsImxhYmVsNCIsImVTaWduIiwiYXBwcm92ZXJOYW1lIiwiYXBwcm92ZWRBdCIsImF1dGhvcml6ZXIiLCJhcHByb3ZlclRleHQiLCJzaWduYXR1cmUiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsInNpemUiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXRDdXN0b21Gb250IiwiYWRkRm9udCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwiUVJDb2RlIiwidG9EYXRhVVJMIiwidGhlbiIsImltYWdlYmFzZTY0IiwicXJCYXNlNjQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5lIiwiYWRkcmVzc0xpbmUxIiwidW5kZWZpbmVkIiwiZ2V0VGV4dFdpZHRoIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRpMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzZXRGaWxsQ29sb3IiLCJjb25jYXQiLCJhdXRvVGFibGUiLCJzdGFydFkiLCJyaWdodCIsImhlYWQiLCJib2R5IiwiY29udGVudCIsImZvbnRTdHlsZSIsInRoZW1lIiwiaGVhZFN0eWxlcyIsImZpbGxDb2xvciIsInRleHRDb2xvciIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsImFsaWduIiwibWluQ2VsbEhlaWdodCIsImJvZHlTdHlsZXMiLCJjb2x1bW5TdHlsZXMiLCJjZWxsV2lkdGgiLCJoYWxpZ24iLCJ2YWxpZ24iLCJyb3dTdHlsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRheCIsImFtb3VudCIsInNldFBhZ2UiLCJtYXAiLCJiYW5rIiwiYWNjb3VudCIsIl9wYXJhbSRkYXRhOSIsIl9wYXJhbSRkYXRhMTAiLCJfcGFyYW0kZGF0YTEwJGRlc2MiLCJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZVwiO1xuaW1wb3J0IHsgZ2V0Q3VzdG9tRm9udCB9IGZyb20gXCIuL2ZvbnRcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuZXhwb3J0IHsgT3V0cHV0VHlwZSwganNQREYgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZ1xuICogICB9LFxuICogICBjb250YWN0Pzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfSxcbiAqICAgICAgIHNoaXBwaW5nQWRkcmVzcz86IHtcbiAqICAgICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgfVxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIgfCBzdHJpbmcsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybUxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmV0VGVybT86IHN0cmluZyxcbiAqICAgICAgIGhlYWRlckJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgaGVhZGVyPzogc3RyaW5nW10sXG4gKiAgICAgICBoZWFkZXJXaWR0aD86IG51bWJlcltdLFxuICogICAgICAgdGFibGU/OiBhbnksXG4gKiAgICAgICBzdWJUb3RhbExhYmVsPzogc3RyaW5nLFxuICogICAgICAgc3ViVG90YWw/OiBzdHJpbmcsXG4gKiAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIGNyZWRpdE5vdGVMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHN0cmluZyxcbiAqICAgICAgIGN1c3RvbUZpZWxkcz86IHN0cmluZ1tdLFxuICogICAgICAgYXV0aG9yaXNlZEJ5Pzogc3RyaW5nLFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgIGluZGlhSVJQPzoge1xuICogICAgICAgICAgcXJDb2RlOiBzdHJpbmcsXG4gKiAgICAgICAgICBpcm46IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsNDogc3RyaW5nLFxuICogICAgICAgICAgZ3N0UmVnVHlwZTogc3RyaW5nLFxuICogICAgICAgICAgbGFiZWwxOiBzdHJpbmcsXG4gKiAgICAgICAgICBoc25OdW06IHN0cmluZyxcbiAqICAgICAgICAgIGxhYmVsMzogc3RyaW5nLFxuICogICAgICAgICAgZ3N0U3RhdGVXaXRoQ29kZTogc3RyaW5nXG4gKiAgICAgICAgICBsYWJlbDI6IHN0cmluZyxcbiAqICAgICAgfSxcbiAqICAgICAgZVNpZ24/OiB7XG4gKiAgICAgICAgICBhcHByb3Zlck5hbWU/OiBzdHJpbmcsXG4gKiAgICAgICAgICBhcHByb3ZlZEF0Pzogc3RyaW5nLFxuICogICAgICAgICAgYXV0aG9yaXplcj86IHN0cmluZyxcbiAqICAgICAgICAgIGFwcHJvdmVyVGV4dD86IHN0cmluZyxcbiAqICAgICAgICAgIHNpZ25hdHVyZT86IHtcbiAqICAgICAgICAgICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgICAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICogICAgICAgICAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICAgICAgICAgICAgdG9wPzogbnVtYmVyLFxuICogICAgICAgICAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgICAgICAgICAgfVxuICogICAgICAgICAgfSxcbiAqICAgICAgfSxcbiAqICAgICAgIHJvdzE/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IGFueSxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sND86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2w1Pzogc3RyaW5nLFxuICogICAgICAgICAgIHRvdGFsQ29udj86IHN0cmluZyxcbiAqICAgICAgICAgICBpc0Z4Q29udmVyc2lvblZpc2libGU6IGJvb2xlYW4sXG4gKiAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Pzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbnZSYXRlPzogc3RyaW5nLFxuICogICAgICAgICAgIHN0eWxlPzoge1xuICogICAgICAgICAgICAgICBmb250U2l6ZT86IG51bWJlclxuICogICAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgIGZvb3Rlcj86IHtcbiAqICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIHBhZ2VFbmFibGU/OiBib29sZWFuLFxuICogICBwYWdlTGFiZWw/OiBzdHJpbmcsIH0gfSBwcm9wc1xuICovXG5hc3luYyBmdW5jdGlvbiBqc1BERkludm9pY2VUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5sYWJlbCB8fCBcIlwiLFxuICAgICAgbmFtZTogcHJvcHMuY29udGFjdD8ubmFtZSB8fCBcIlwiLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgbGFiZWw6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUzOiBwcm9wcy5jb250YWN0Py5iaWxsaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUzIHx8IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IHByb3BzLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgIGxhYmVsOiBwcm9wcy5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3M/LmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgICAgY291bnRyeTogcHJvcHMuY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB9LFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5jb250YWN0Py50YXhOdW1iZXIgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgc3ViVG90YWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsIHx8IFwiXCIsXG4gICAgICBjdXJyZW5jeTogcHJvcHMuZGF0YT8uY3VycmVuY3kgfHwgXCJcIixcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGN1c3RvbUZpZWxkczogcHJvcHMuZGF0YT8uY3VzdG9tRmllbGRzIHx8IFtdLFxuICAgICAgYXV0aG9yaXNlZEJ5OiBwcm9wcy5kYXRhPy5hdXRob3Jpc2VkQnkgfHwgXCJcIixcbiAgICAgIHN0YXRpY1ZBOiBwcm9wcy5kYXRhPy5zdGF0aWNWQSxcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBwZGZUaXRsZTogcHJvcHMuZGF0YT8ucGRmVGl0bGUgfHwgXCJcIixcbiAgICAgIHJvdzE6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93MT8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cxPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzE/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgY29sNDogcHJvcHMuZGF0YT8ucm93MT8uY29sNCB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93MT8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdzI6IHtcbiAgICAgICAgY29sMTogcHJvcHMuZGF0YT8ucm93Mj8uY29sMSB8fCBcIlwiLFxuICAgICAgICBjb2wyOiBwcm9wcy5kYXRhPy5yb3cyPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LnJvdzI/LmNvbDMgfHwgXCJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIGNvbDE6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wxIHx8IFwiXCIsIC8vIFRvdGFsIGxhYmVsXG4gICAgICAgIGNvbDI6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2wyIHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudFxuICAgICAgICBjb2wzOiBwcm9wcy5kYXRhPy50b3RhbD8uY29sMyB8fCBcIlwiLCAvLyBJbnZvaWNlIGN1cnJlbmN5XG4gICAgICAgIGNvbDQ6IHByb3BzLmRhdGE/LnRvdGFsPy5jb2w0IHx8IFwiXCIsIC8vIFRvdGFsIGFtb3VudCBpbiB3b3JkcyBsYWJlbFxuICAgICAgICBjb2w1OiBwcm9wcy5kYXRhPy50b3RhbD8uY29sNSB8fCBcIlwiLCAvLyBUb3RhbCBhbW91bnQgaW4gd29yZHNcbiAgICAgICAgdG90YWxDb252OiBwcm9wcy5kYXRhPy50b3RhbD8udG90YWxDb252IHx8IFwiXCIsIC8vIFRvdGFsIGNvbnZlcnRlZCBhbW91bnRcbiAgICAgICAgaXNGeENvbnZlcnNpb25WaXNpYmxlOiBwcm9wcy5kYXRhPy50b3RhbD8uaXNGeENvbnZlcnNpb25WaXNpYmxlLFxuICAgICAgICB0b3RhbFRheEFtb3VudDogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50IHx8IFwiXCIsXG4gICAgICAgIHRvdGFsVGF4QW1vdW50Q29udjogcHJvcHMuZGF0YT8udG90YWw/LnRvdGFsVGF4QW1vdW50Q29udiB8fCBcIlwiLFxuICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IHByb3BzLmRhdGE/LnRvdGFsPy5kZWZhdWx0Q3VycmVuY3kgfHwgXCJcIiwgLy8gZGVmYXVsdCBjdXJyZW5jeSxcbiAgICAgICAgY29udlJhdGU6IHByb3BzLmRhdGE/LnRvdGFsPy5jb252UmF0ZSB8fCBcIlwiLCAvLyBjb252ZXJzaW9uIHJhdGVcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGF0YT8ucm93Mj8uc3R5bGU/LmZvbnRTaXplIHx8IDEyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFtb3VudER1ZToge1xuICAgICAgICBjb2wxOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LmNvbDEgfHwgXCJcIixcbiAgICAgICAgY29sMjogcHJvcHMuZGF0YT8uYW1vdW50RHVlPy5jb2wyIHx8IFwiXCIsXG4gICAgICAgIGNvbDM6IHByb3BzLmRhdGE/LmFtb3VudER1ZT8uY29sMyB8fCBcIlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiBwcm9wcy5kYXRhPy5hbW91bnREdWU/LnN0eWxlPy5mb250U2l6ZSB8fCAxMixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjcmVkaXROb3RlOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlIHx8IFwiXCIsXG4gICAgICAuLi4ocHJvcHMuZGF0YT8uaW5kaWFJUlAgJiYge1xuICAgICAgICBpbmRpYUlSUDoge1xuICAgICAgICAgIHFyQ29kZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5xckNvZGUgfHwgXCJcIixcbiAgICAgICAgICBpcm46IHByb3BzLmRhdGEuaW5kaWFJUlAuaXJuIHx8IFwiXCIsXG4gICAgICAgICAgZ3N0UmVnVHlwZTogcHJvcHMuZGF0YS5pbmRpYUlSUC5nc3RSZWdUeXBlIHx8IFwiXCIsXG4gICAgICAgICAgaHNuTnVtOiBwcm9wcy5kYXRhLmluZGlhSVJQLmhzbk51bSB8fCBcIlwiLFxuICAgICAgICAgIGdzdFN0YXRlV2l0aENvZGU6IHByb3BzLmRhdGEuaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsMTogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDEgfHwgXCJcIixcbiAgICAgICAgICBsYWJlbDI6IHByb3BzLmRhdGEuaW5kaWFJUlAubGFiZWwyIHx8IFwiXCIsXG4gICAgICAgICAgbGFiZWwzOiBwcm9wcy5kYXRhLmluZGlhSVJQLmxhYmVsMyB8fCBcIlwiLFxuICAgICAgICAgIGxhYmVsNDogcHJvcHMuZGF0YS5pbmRpYUlSUC5sYWJlbDQgfHwgXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZVNpZ246IHtcbiAgICAgICAgYXBwcm92ZXJOYW1lOiBwcm9wcy5kYXRhPy5lU2lnbj8uYXBwcm92ZXJOYW1lIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVkQXQ6IHByb3BzLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0IHx8IFwiXCIsXG4gICAgICAgIGF1dGhvcml6ZXI6IHByb3BzLmRhdGE/LmVTaWduPy5hdXRob3JpemVyIHx8IFwiXCIsXG4gICAgICAgIGFwcHJvdmVyVGV4dDogcHJvcHMuZGF0YT8uZVNpZ24/LmFwcHJvdmVyVGV4dCB8fCBcIlwiLFxuICAgICAgICBzaWduYXR1cmU6IHtcbiAgICAgICAgICBzcmM6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYyB8fCBcIlwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy53aWR0aCB8fCA1NSxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LmhlaWdodCB8fCAyMCxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogcHJvcHMuZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8ubWFyZ2luPy50b3AgfHwgXCJcIixcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/Lm1hcmdpbj8ubGVmdCB8fCBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MubmFtZSwgQUxJR05fUklHSFQpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbHVlKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIH1cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgLy8gSVJQIFFSIGNvZGVcbiAgLy8gSWYgUVIgY29kZSBpcyBhdmFpbGJsZSwgYWxpZ24gaXNzdWVyIGFkZHJlc3MgdG8gbGVmdC4gRWxzZSBrZWVwIGluIHJpZ2h0LlxuICBjb25zdCBJUlBRckNvZGUgPSBwYXJhbS5kYXRhPy5pbmRpYUlSUD8ucXJDb2RlO1xuICBpZiAoSVJQUXJDb2RlKSB7XG4gICAgYXdhaXQgUVJDb2RlLnRvRGF0YVVSTChJUlBRckNvZGUpXG4gICAgICAudGhlbigoaW1hZ2ViYXNlNjQpID0+IHtcbiAgICAgICAgY29uc3QgcXJCYXNlNjQgPSBpbWFnZWJhc2U2NDtcblxuICAgICAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICAgICAgcXJCYXNlNjQsXG4gICAgICAgICAgSU1BR0VfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIGRvY1dpZHRoIC0gNDAsXG4gICAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBJU1NVRVJfQUREUkVTU19MQUJFTCk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuY291bnRyeSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5idXNpbmVzcy5lbWFpbF8xKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIElTU1VFUl9BRERSRVNTX0xBQkVMLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcywgQUxJR05fUklHSFQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksIEFMSUdOX1JJR0hUKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSwgQUxJR05fUklHSFQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vbGluZSBicmVha2VyIGFmdGVyIGxvZ28gJiBidXNpbmVzcyBpbmZvXG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vQ29udGFjdCBwYXJ0XG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDcpO1xuICBpZiAocGFyYW0uY29udGFjdC5uYW1lKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QubmFtZSk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0VGV4dENvbG9yKGxpZ2h0R3JheSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgLSA1KTtcbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwgJiYgcGFyYW0uZGF0YS5udW0pIHtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5sYWJlbCArIHBhcmFtLmRhdGEubnVtLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3QubmFtZSB8fCAocGFyYW0uZGF0YS5sYWJlbCAmJiBwYXJhbS5kYXRhLm51bSkpXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuXG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgY29uc3QgYmlsbGluZ0FkZHJlc3NMYWJlbCA9IHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0xhYmVsID0gcGFyYW0uY29udGFjdD8uc2hpcHBpbmdBZGRyZXNzLmxhYmVsO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBiaWxsaW5nQWRkcmVzc0xhYmVsKTtcbiAgICBkb2MudGV4dChwYWdlV2lkdGggLyAzLCBjdXJyZW50SGVpZ2h0LCBzaGlwcGluZ0FkZHJlc3NMYWJlbCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgaWYgKHBhcmFtLmRhdGE/Lm5ldFRlcm0gfHwgcGFyYW0uZGF0YT8ubmV0VGVybUxhYmVsKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSA3MCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uZGF0YS5kYXRlMUxhYmVsLFxuICAgICAgICBBTElHTl9SSUdIVFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDQwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLm5ldFRlcm1MYWJlbCxcbiAgICAgICAgQUxJR05fUklHSFRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5kYXRhLmRhdGUxTGFiZWwsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUyTGFiZWwsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzPy5sYWJlbCB8fFxuICAgIHBhcmFtLmRhdGEuZGF0ZTEgfHxcbiAgICBwYXJhbS5kYXRhLmRhdGUyXG4gICkge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzcyxcbiAgICAgIHBhZ2VXaWR0aCAvIDJcbiAgICApO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmNvbnRhY3Q/LnNoaXBwaW5nQWRkcmVzcy5hZGRyZXNzLFxuICAgICAgcGFnZVdpZHRoIC8gMlxuICAgICk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGJpbGxpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy50ZXh0KHBhZ2VXaWR0aCAvIDMsIGN1cnJlbnRIZWlnaHQsIHNoaXBwaW5nQWRkcmVzcy50ZXh0KTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBpZiAocGFyYW0uZGF0YT8ubmV0VGVybSB8fCBwYXJhbS5kYXRhPy5uZXRUZXJtTGFiZWwpIHtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNzAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTEsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNDAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubmV0VGVybSwgQUxJR05fUklHSFQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDQwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRhdGUxLCBBTElHTl9SSUdIVCk7XG4gICAgfVxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGF0ZTIsIEFMSUdOX1JJR0hUKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9XG4gICAgICBiaWxsaW5nQWRkcmVzcy5oZWlnaHQgPiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgID8gYmlsbGluZ0FkZHJlc3MuaGVpZ2h0XG4gICAgICAgIDogc2hpcHBpbmdBZGRyZXNzLmhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbS5jb250YWN0Py5iaWxsaW5nQWRkcmVzcy5hZGRyZXNzTGluZTEgfHwgcGFyYW0uZGF0YS5kYXRlMikge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LmJpbGxpbmdBZGRyZXNzLmFkZHJlc3NMaW5lMykge1xuICAgIGNvbnN0IGJpbGxpbmdBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uY29udGFjdD8uYmlsbGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBjb25zdCBzaGlwcGluZ0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5jb250YWN0Py5zaGlwcGluZ0FkZHJlc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgcGFnZVdpZHRoIC8gMyAtIDI1XG4gICAgKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgYmlsbGluZ0FkZHJlc3MudGV4dCk7XG4gICAgZG9jLnRleHQocGFnZVdpZHRoIC8gMywgY3VycmVudEhlaWdodCwgc2hpcHBpbmdBZGRyZXNzLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz1cbiAgICAgIGJpbGxpbmdBZGRyZXNzLmhlaWdodCA+IHNoaXBwaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgPyBiaWxsaW5nQWRkcmVzcy5oZWlnaHRcbiAgICAgICAgOiBzaGlwcGluZ0FkZHJlc3MuaGVpZ2h0O1xuICB9XG5cbiAgaWYgKFxuICAgIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSB8fFxuICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgKSB7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QuYmlsbGluZ0FkZHJlc3MuY291bnRyeSk7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYWdlV2lkdGggLyAzLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmNvbnRhY3Quc2hpcHBpbmdBZGRyZXNzLmNvdW50cnlcbiAgICApO1xuICB9IGVsc2UgY3VycmVudEhlaWdodCAtPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgLy9lbmQgY29udGFjdCBwYXJ0XG5cbiAgaWYgKHBhcmFtLmNvbnRhY3Q/LnRheE51bWJlcikge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmNvbnRhY3QudGF4TnVtYmVyKTtcbiAgfVxuXG4gIGNvbnN0IGluZGlhSVJQID0gcGFyYW0uZGF0YT8uaW5kaWFJUlA7XG4gIGlmIChpbmRpYUlSUCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMiAqIHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKGluZGlhSVJQLmdzdFJlZ1R5cGUpIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwxKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDEpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5nc3RSZWdUeXBlXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWFJUlAuZ3N0U3RhdGVXaXRoQ29kZSkge1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpbmRpYUlSUC5sYWJlbDIpO1xuICAgICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBkb2MuZ2V0VGV4dFdpZHRoKGluZGlhSVJQLmxhYmVsMiksXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGluZGlhSVJQLmdzdFN0YXRlV2l0aENvZGVcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5oc25OdW0pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWwzKTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDMpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5oc25OdW1cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChpbmRpYUlSUC5pcm4pIHtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgaW5kaWFJUlAubGFiZWw0KTtcbiAgICAgIGRvYy5zZXRGb250KHVuZGVmaW5lZCwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChpbmRpYUlSUC5sYWJlbDQpLFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBpbmRpYUlSUC5pcm5cbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gSU5WT0lDRSBUSVRMRSAtIElOTU9CSSBjaGFuZ2VcbiAgaWYgKHBhcmFtLmRhdGE/LnBkZlRpdGxlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgLy8gZG9jLnNldFRleHRDb2xvcihjb2xvckJsdWUpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YT8ucGRmVGl0bGUsIEFMSUdOX0xFRlQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAxMDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBkb2MudGV4dChyb3csIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA0KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLnRvdGFsLmlzRnhDb252ZXJzaW9uVmlzaWJsZSkge1xuICAgIC8vICgxNSA9IENvbnYgdGFibGUgaGVpZ2h0KSArICgxMCA9IGJveCBoZWlnaHQpID0gMjVcbiAgICBpZiAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHwgY3VycmVudEhlaWdodCArIDI1ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIGJveCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYm94V2lkdGggPSA5NTtcbiAgICBjb25zdCBib3hIZWlnaHQgPSAzMDtcbiAgICBjb25zdCBib3hYID0gMTA7XG4gICAgY29uc3QgYm94WSA9IGN1cnJlbnRIZWlnaHQgKyAxMDtcblxuICAgIC8vIERyYXcgdGhlIGJveFxuICAgIGRvYy5zZXREcmF3Q29sb3IoMCwgMCwgMCk7XG4gICAgZG9jLnNldEZpbGxDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMik7XG4gICAgZG9jLnJlY3QoYm94WCwgYm94WSwgYm94V2lkdGgsIGJveEhlaWdodCwgXCJGRFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IHRvIHRoZSBib3hcbiAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcIkZvciBHU1QgcmVwb3J0aW5nIHB1cnBvc2VzOlwiLCBib3hYICsgNSwgYm94WSArIDUpO1xuICAgIGRvYy5saW5lKGJveFggKyA1LCBib3hZICsgNy41LCBib3hYICsgYm94V2lkdGggLSA1LCBib3hZICsgNy41KTtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgYDEgJHtwYXJhbS5kYXRhLnRvdGFsLmNvbDN9ID0gJHtwYXJhbS5kYXRhLnRvdGFsLmNvbnZSYXRlfSAke3BhcmFtLmRhdGEudG90YWwuZGVmYXVsdEN1cnJlbmN5fWAsXG4gICAgICBib3hYICsgNSxcbiAgICAgIGJveFkgKyAxM1xuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIHRhYmxlXG4gICAgZG9jLmF1dG9UYWJsZSh7XG4gICAgICBzdGFydFk6IGJveFkgKyAxOCxcbiAgICAgIG1hcmdpbjogeyBsZWZ0OiBib3hYLCByaWdodDogMCB9LFxuICAgICAgaGVhZDogW1tcIlwiLCBgQW1vdW50ICR7cGFyYW0uZGF0YS50b3RhbC5kZWZhdWx0Q3VycmVuY3l9YF1dLFxuICAgICAgYm9keTogW1xuICAgICAgICBbXCJTdWJ0b3RhbFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsQ29udl0sXG4gICAgICAgIFtcIlRvdGFsIFRheFwiLCBwYXJhbS5kYXRhLnRvdGFsLnRvdGFsVGF4QW1vdW50Q29udl0sXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBgVG90YWwgJHtwYXJhbS5kYXRhLnRvdGFsLmRlZmF1bHRDdXJyZW5jeX1gLFxuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY29udGVudDogcGFyYW0uZGF0YS50b3RhbC50b3RhbENvbnYsIGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogXCJwbGFpblwiLFxuICAgICAgaGVhZFN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVDb2xvcjogWzAsIDAsIDBdLFxuICAgICAgICBsaW5lV2lkdGg6IDAuMixcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgYm9keVN0eWxlczoge1xuICAgICAgICBmaWxsQ29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgdGV4dENvbG9yOiBbMCwgMCwgMF0sXG4gICAgICAgIGxpbmVXaWR0aDogMC4yLFxuICAgICAgICBsaW5lQ29sb3I6IFswLCAwLCAwXSxcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDUsXG4gICAgICB9LFxuICAgICAgY29sdW1uU3R5bGVzOiB7XG4gICAgICAgIDA6IHsgY2VsbFdpZHRoOiA0MCwgaGFsaWduOiBcInJpZ2h0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgICAxOiB7IGNlbGxXaWR0aDogNTUsIGhhbGlnbjogXCJsZWZ0XCIsIHZhbGlnbjogXCJ0b3BcIiB9LFxuICAgICAgfSxcbiAgICAgIHJvd1N0eWxlczoge1xuICAgICAgICAxOiB7IGZvbnRTdHlsZTogXCJib2xkXCIgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBOby4gb2Ygcm93cyBvZiBzdWIgdG90YWwsIHRheGVzLCBkaXNjb3VudHMgLi4gdW50aWwgVG90YWwgKE5PVCBUQUJMRSBST1dTKS5cbiAgbGV0IGZpbmFsUm93Q291bnQgPSAwO1xuXG4gIC8vbGluZSBicmVha2VyIGJlZm9yZSBpbnZvY2UgdG90YWxcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCAmJlxuICAgIChwYXJhbS5kYXRhLnN1YlRvdGFsIHx8IHBhcmFtLmRhdGEuc3ViVG90YWxMYWJlbCB8fCBwYXJhbS5kYXRhLmN1cnJlbmN5KVxuICApIHtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoZG9jV2lkdGggLyAyICsgMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gIH1cblxuICAvLyBTdWJ0b3RhbCBsaW5lXG4gIGlmIChwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwgJiYgcGFyYW0uZGF0YS5zdWJUb3RhbCkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLnN1YlRvdGFsTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEuY3VycmVuY3kgKyBcIiAgXCIgKyBwYXJhbS5kYXRhLnN1YlRvdGFsLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG4gIH1cblxuICAvL3JvdzEgLSB0YXhcbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEucm93MSAmJlxuICAgIChwYXJhbS5kYXRhLnJvdzEuY29sMSB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMiB8fCBwYXJhbS5kYXRhLnJvdzEuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGFyYW0uZGF0YS5yb3cxLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gNTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucm93MS5jb2wxLCBBTElHTl9SSUdIVCk7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGEucm93MS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5yb3cxLmNvbDIsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG5cbiAgICBmaW5hbFJvd0NvdW50ICs9IDE7XG5cbiAgICAvLyBTaG93IGFsbCB0aGUgdGF4ZXMgYXBwbGllZFxuICAgIGNvbnN0IHRheERhdGEgPSBwYXJhbS5kYXRhLnJvdzE/LmNvbDQ7XG4gICAgaWYgKHRheERhdGEpIHtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IobGlnaHRHcmF5KTtcbiAgICAgIHRheERhdGEuZm9yRWFjaCgodGF4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICAgICApIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBgJHt0YXgubmFtZX06YCwgQUxJR05fUklHSFQpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgICAgcGFyYW0uZGF0YS5yb3cxLmNvbDMgKyBcIiAgXCIgKyB0YXguYW1vdW50LFxuICAgICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgZmluYWxSb3dDb3VudCArPSB0YXhEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgLy9lbmQgcm93MVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIC8vcm93MiAtIGRpc2NvdW50c1xuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5yb3cyICYmXG4gICAgKHBhcmFtLmRhdGEucm93Mi5jb2wxIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wyIHx8IHBhcmFtLmRhdGEucm93Mi5jb2wzKVxuICApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwYXJhbS5kYXRhLnJvdzIuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSA1MCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yb3cyLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJvdzIuY29sMiwgQUxJR05fUklHSFQpO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuICAvL2VuZCByb3cyXG5cbiAgLy8gTWFpbiB0b3RhbFxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS50b3RhbCAmJlxuICAgIChwYXJhbS5kYXRhLnRvdGFsLmNvbDEgfHwgcGFyYW0uZGF0YS50b3RhbC5jb2wyIHx8IHBhcmFtLmRhdGEudG90YWwuY29sMylcbiAgKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAtIDUwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnRvdGFsLmNvbDEsIEFMSUdOX1JJR0hUKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gMTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS50b3RhbC5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS50b3RhbC5jb2wyLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGZpbmFsUm93Q291bnQgKz0gMTtcbiAgfVxuXG4gIC8vIC0xID0gYmVjYXVzZSB0aGUgZnggcmF0ZSBib3ggaXMgb25lIHJvdyBsb3dlclxuICAvLyA1ID0gZWFjaCByb3cgaGVpZ2h0XG4gIGNvbnN0IGZpbmFsUm93SGVpZ2h0ID0gKGZpbmFsUm93Q291bnQgLSAxKSAqIDU7XG5cbiAgLy8gQWRkIGEgbGluZSBoZWlnaHQgYWZ0ZXIgY29udmVydGlvbiByYXRlIHRhYmxlIGFuZCB0b3RhbHNcbiAgLy8gMzUgPSBoZWlnaHQgb2YgZnggcmF0ZSBib3hcbiAgaWYgKHBhcmFtLmRhdGEudG90YWwudG90YWxDb252ICYmIGZpbmFsUm93SGVpZ2h0IDwgMzUpIHtcbiAgICBjb25zdCBkaWZmID0gMzUgLSBmaW5hbFJvd0hlaWdodDtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplICsgZGlmZjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5maWVsZFRleHRTaXplO1xuICB9XG5cbiAgLy8gVG90YWwgaW4gd29yZHNcbiAgaWYgKHBhcmFtLmRhdGEudG90YWw/LmNvbDQgJiYgcGFyYW0uZGF0YS50b3RhbD8uY29sNSkge1xuICAgIGNvbnN0IHRvdGFsSW5Xb3JkcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEudG90YWwuY29sNSxcbiAgICAgIHBhZ2VXaWR0aCAtIDIwXG4gICAgKTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS50b3RhbC5jb2w0KTtcbiAgICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgZG9jLmdldFRleHRXaWR0aChwYXJhbS5kYXRhLnRvdGFsLmNvbDQpLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHRvdGFsSW5Xb3Jkcy50ZXh0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgdG90YWxJbldvcmRzLmhlaWdodDtcbiAgfVxuXG4gIC8vIEFtb3VudCBEdWVcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlICYmXG4gICAgKHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDEgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDIgfHxcbiAgICAgIHBhcmFtLmRhdGEuYW1vdW50RHVlLmNvbDMpXG4gICkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBhcmFtLmRhdGEuYW1vdW50RHVlLnN0eWxlLmZvbnRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIGRvY1dpZHRoIC0gNTAsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgcGFyYW0uZGF0YS5jcmVkaXROb3RlTGFiZWwsXG4gICAgICBBTElHTl9SSUdIVFxuICAgICk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5jcmVkaXROb3RlLCBBTElHTl9SSUdIVCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5saW5lKGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSA1MCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wxLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5kYXRhLmFtb3VudER1ZS5jb2wzICsgXCIgIFwiICsgcGFyYW0uZGF0YS5hbW91bnREdWUuY29sMixcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gQWRkaXRpb25hbCBJbmZvcm1hdGlvbiAtIGN1c3RvbSBmaWVsZHNcbiAgaWYgKHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiQWRkaXRpb25hbCBJbmZvcm1hdGlvblwiKTtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIHBhcmFtLmRhdGEuY3VzdG9tRmllbGRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBpdGVtKTtcbiAgICB9KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXNlZCBieVxuICBpZiAocGFyYW0uZGF0YS5hdXRob3Jpc2VkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkF1dGhvcmlzZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmF1dGhvcmlzZWRCeSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgfVxuXG4gIC8vIHN0YXRpYyBWQSBwYXltZW50IGRldGFpbHNcbiAgaWYgKHBhcmFtLmRhdGEuc3RhdGljVkEpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGNvbnN0IHN0YXRpY1ZBQ29udGVudCA9IGBBY2NvdW50IE5hbWU6ICR7cGFyYW0uYnVzaW5lc3MubmFtZX1cXG5CYW5rIE5hbWU6ICR7cGFyYW0uZGF0YS5zdGF0aWNWQS5iYW5rfVxcbkFjY291bnQgTnVtYmVyOiAke3BhcmFtLmRhdGEuc3RhdGljVkEuYWNjb3VudH1gO1xuICAgIGNvbnN0IHBheW1lbnREZXRhaWxzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgc3RhdGljVkFDb250ZW50LFxuICAgICAgcGFnZVdpZHRoIC0gNDBcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBwYXltZW50RGV0YWlscy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDIwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUGF5bWVudCBkZXRhaWxzXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXltZW50RGV0YWlscy50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgcGF5bWVudERldGFpbHMuaGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRSBzaWduYXR1cmVcbiAgaWYgKHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LnNyYykge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgKyAocGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0IHx8IDIwKSA+XG4gICAgICAgIHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5kYXRhPy5lU2lnbj8uc2lnbmF0dXJlPy5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICBkb2NXaWR0aCAtIDY1LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmRhdGE/LmVTaWduPy5zaWduYXR1cmU/LndpZHRoLFxuICAgICAgcGFyYW0uZGF0YT8uZVNpZ24/LnNpZ25hdHVyZT8uaGVpZ2h0XG4gICAgKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZTtcblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXIpIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgZG9jV2lkdGggLSAxMCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYCR7cGFyYW0uZGF0YT8uZVNpZ24/LmF1dGhvcml6ZXJ9LGAsXG4gICAgICAgIEFMSUdOX1JJR0hUXG4gICAgICApO1xuICAgIH1cblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlclRleHR9ICR7cGFyYW0uZGF0YT8uZVNpZ24/LmFwcHJvdmVyTmFtZX0sYCxcbiAgICAgIEFMSUdOX1JJR0hUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnRleHQoXG4gICAgICBkb2NXaWR0aCAtIDEwLFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGBvbiAke3BhcmFtLmRhdGE/LmVTaWduPy5hcHByb3ZlZEF0fS5gLFxuICAgICAgQUxJR05fUklHSFRcbiAgICApO1xuICB9XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIHBhZ2VXaWR0aCAtIDIwKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZJbnZvaWNlVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFB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RUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsaUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLGFBQUEsRUFBQUMsbUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxXQUFBLEVBQUFDLG9CQUFB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