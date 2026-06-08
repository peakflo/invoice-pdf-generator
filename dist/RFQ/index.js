"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("regenerator-runtime");
var _jspdf = require("jspdf");
require("jspdf-autotable");
var _font = require("../font");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var containsChinese = function containsChinese(obj) {
  var str = JSON.stringify(obj);
  return /[\u4E00-\u9FFF]/.test(str);
};
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
 *       taxNumber?: string,
 *       phone?: string
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
 *       descLabel?: string,
 *       desc?: string[],
 *       note?: string,
 *       requestedBy?: {
 *          name: string,
 *          phone?: string
 *        },
 *       pdfTitle?: string,
 *       staticVA?: {
 *          account: string,
 *          bank: string,
 *       },
 *       deliveryInstructions: string,
 *       col1: string[],
 *       col2: string[]
 *   footer?: {
 *       text?: string,
 *   },
 *   pageEnable?: boolean,
 *   pageLabel?: string, } } props
 */
function jsPDFRfqTemplate(_x) {
  return _jsPDFRfqTemplate.apply(this, arguments);
}
function _jsPDFRfqTemplate() {
  _jsPDFRfqTemplate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(props) {
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$business8, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$data23, _props$footer, _param$business, _param$data3, _param$data3$desc;
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, heightBelowLogo, currentHeight, pdfConfig, isChinese, businessName, wrappedName, businessAddress, businessAddress2, businessAddress3, headers, values, size, heightHeaders, i, _headers$i, detailsText, _detailsText, _param$data$label, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, _i4, addDesc, diData, noteData, returnObj, blobOutput;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getTdWidthDimensions = function _getTdWidthDimensions() {
            var leftShift = 10;
            var result = [];
            for (var _i = 0; _i < param.data.header.length; _i++) {
              var _param$data$headerWid, _param$data$headerWid2;
              result.push({
                shift: leftShift,
                width: (_param$data$headerWid = param.data.headerWidth) !== null && _param$data$headerWid !== void 0 && _param$data$headerWid[_i] ? (pageWidth - 20) * param.data.headerWidth[_i] : tdWidth
              });
              leftShift = leftShift + ((_param$data$headerWid2 = param.data.headerWidth) !== null && _param$data$headerWid2 !== void 0 && _param$data$headerWid2[_i] ? (pageWidth - 20) * param.data.headerWidth[_i] : tdWidth);
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
              taxNumber: ((_props$business7 = props.business) === null || _props$business7 === void 0 ? void 0 : _props$business7.taxNumber) || "",
              phone: ((_props$business8 = props.business) === null || _props$business8 === void 0 ? void 0 : _props$business8.phone) || ""
            },
            data: {
              label: ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.label) || "",
              subTotalLabel: ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.subTotalLabel) || "",
              dppNilaiLainLabel: ((_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.dppNilaiLainLabel) || "",
              date1Label: ((_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.date1Label) || "",
              num: ((_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.num) || "",
              date2Label: ((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.date2Label) || "",
              netTermLabel: ((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.netTermLabel) || "",
              date1: ((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.date1) || "",
              date2: ((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.date2) || "",
              netTerm: ((_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.netTerm) || "",
              headerBorder: ((_props$data11 = props.data) === null || _props$data11 === void 0 ? void 0 : _props$data11.headerBorder) || false,
              tableBodyBorder: ((_props$data12 = props.data) === null || _props$data12 === void 0 ? void 0 : _props$data12.tableBodyBorder) || false,
              header: ((_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.header) || [],
              headerWidth: ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.headerWidth) || [],
              table: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.table) || [],
              descLabel: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.descLabel) || "",
              requestedBy: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.requestedBy) || "",
              desc: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.desc) || "",
              creditNoteLabel: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.creditNoteLabel) || "",
              note: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.note) || "",
              col1: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.col1) || [],
              col2: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.col2) || [],
              deliveryInstructions: ((_props$data23 = props.data) === null || _props$data23 === void 0 ? void 0 : _props$data23.deliveryInstructions) || ""
            },
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
          ISSUER_ADDRESS_LABEL = "COMPANY ADDRESS";
          IMAGE_CONTENT_TYPE = "PNG";
          CUSTOM_FONT_NAME = "Roboto";
          //starting at 20mm
          currentHeight = 20;
          pdfConfig = {
            headerTextSize: 24,
            labelTitleSize: 16,
            labelTextSize: 10,
            fieldTextSize: 9,
            textSizeSmall: 8,
            lineHeight: 7,
            subLineHeight: 5
          };
          isChinese = containsChinese(props);
          if (isChinese) {
            doc.addFileToVFS("NotoSC.ttf", (0, _font.getNotoSC)());
            doc.addFont("NotoSC.ttf", CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.addFont("NotoSC.ttf", CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
          } else {
            doc.addFileToVFS("Vazir.ttf", (0, _font.getVazir)());
            doc.addFont("Vazir.ttf", CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.addFileToVFS("VazirBold.ttf", (0, _font.getVazirBold)());
            doc.addFont("VazirBold.ttf", CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
          }
          doc.setFont(CUSTOM_FONT_NAME);
          doc.setFontSize(pdfConfig.headerTextSize);
          doc.setTextColor(colorBlack);
          doc.setFontSize(pdfConfig.fieldTextSize);
          if (param.logo.src) {
            doc.addImage(param.logo.src, IMAGE_CONTENT_TYPE, 10 + param.logo.margin.left, currentHeight - 5 + param.logo.margin.top, param.logo.width, param.logo.height);
            currentHeight += param.logo.height + param.logo.margin.top;
          }
          if (param.business.name) {
            businessName = param.business.name;
            wrappedName = doc.splitTextToSize(businessName, docWidth - 20 - param.logo.margin.left);
            doc.text(10 + param.logo.margin.left, currentHeight, wrappedName, ALIGN_LEFT);
            currentHeight += wrappedName.length * (pdfConfig.headerTextSize * 0.35);
            heightBelowLogo = currentHeight;
          }
          if (param !== null && param !== void 0 && (_param$business = param.business) !== null && _param$business !== void 0 && _param$business.address) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.setTextColor(colorGray);
            doc.text(10 + param.logo.margin.left, currentHeight, ISSUER_ADDRESS_LABEL, ALIGN_LEFT);
            doc.setTextColor(colorBlack);
            currentHeight += pdfConfig.subLineHeight;
            doc.setFontSize(pdfConfig.fieldTextSize - 2);
            businessAddress = splitTextAndGetHeight(param.business.address, docWidth * 0.4);
            doc.text(10 + param.logo.margin.left, currentHeight, businessAddress.text, ALIGN_LEFT);
            currentHeight += businessAddress.height;
            businessAddress2 = splitTextAndGetHeight(param.business.addressLine2, docWidth * 0.4);
            doc.text(10 + param.logo.margin.left, currentHeight, businessAddress2.text, ALIGN_LEFT);
            currentHeight += businessAddress2.height;
            if (param.business.addressLine3) {
              businessAddress3 = splitTextAndGetHeight(param.business.addressLine3, docWidth * 0.4);
              doc.text(10 + param.logo.margin.left, currentHeight, businessAddress3.text, ALIGN_LEFT);
              currentHeight += businessAddress3.height;
            }
            if (param.business.country) {
              doc.text(10 + param.logo.margin.left, currentHeight, param.business.country, ALIGN_LEFT);
              currentHeight += pdfConfig.subLineHeight;
            }
            if (param.business.email_1) {
              doc.text(10 + param.logo.margin.left, currentHeight, param.business.email_1, ALIGN_LEFT);
            }
            currentHeight += pdfConfig.subLineHeight;
            if (param.business.phone) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.setTextColor(colorGray);
              doc.text(10 + param.logo.margin.left, currentHeight, "TEL NUMBER: ", ALIGN_LEFT);
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.setTextColor(colorBlack);
              doc.text(27 + param.logo.margin.left, currentHeight, param.business.phone);
            }
            currentHeight += pdfConfig.subLineHeight;
            if (param.business.taxNumber) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.setTextColor(colorGray);
              doc.text(10 + param.logo.margin.left, currentHeight, "TAX NUMBER: ", ALIGN_LEFT);
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.setTextColor(colorBlack);
              doc.text(27 + param.logo.margin.left, currentHeight, param.business.taxNumber);
            }
          }
          if (param.data.col1 && param.data.col2) {
            // PO Number and other details on the right side
            headers = param.data.col1;
            values = param.data.col2;
            size = headers.length;
            heightHeaders = heightBelowLogo;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setTextColor(colorGray);
            for (i = 0; i < size; i++) {
              detailsText = ((_headers$i = headers[i]) === null || _headers$i === void 0 ? void 0 : _headers$i.toUpperCase()) + ": ";
              doc.text(docWidth - 30, heightHeaders, detailsText, ALIGN_RIGHT);
              heightHeaders += pdfConfig.subLineHeight;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setTextColor(colorBlack);
            for (i = 0; i < size; i++) {
              _detailsText = values[i];
              doc.text(docWidth - 10, heightBelowLogo, _detailsText, ALIGN_RIGHT);
              heightBelowLogo += pdfConfig.subLineHeight;
            }
          }
          currentHeight = Math.max(currentHeight, heightBelowLogo);
          doc.setFontSize(pdfConfig.fieldTextSize);
          currentHeight += pdfConfig.lineHeight + 2;
          doc.setFontSize(pdfConfig.headerTextSize - 6);
          if (param.data.label) {
            doc.text(docWidth / 2, currentHeight, (_param$data$label = param.data.label) === null || _param$data$label === void 0 ? void 0 : _param$data$label.toUpperCase(), ALIGN_CENTER);
          }
          doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
          currentHeight += pdfConfig.subLineHeight;

          //line breaker Doc text
          if (param.data.header.length) {
            currentHeight += pdfConfig.subLineHeight;
            doc.line(10, currentHeight, docWidth - 10, currentHeight);
          }
          doc.setTextColor(colorGray);

          //TABLE PART
          tdWidth = (pageWidth - 20) / param.data.header.length;
          addTableHeaderBoarder = function addTableHeaderBoarder() {
            var tdWidthDimensions = getTdWidthDimensions();
            currentHeight += 2;
            for (var _i2 = 0; _i2 < param.data.header.length; _i2++) {
              var _tdWidthDimensions$_i, _tdWidthDimensions$_i2;
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.rect(tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$_i = tdWidthDimensions[_i2]) === null || _tdWidthDimensions$_i === void 0 ? void 0 : _tdWidthDimensions$_i.shift, currentHeight, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$_i2 = tdWidthDimensions[_i2]) === null || _tdWidthDimensions$_i2 === void 0 ? void 0 : _tdWidthDimensions$_i2.width, 7);
            }
            currentHeight -= 2;
          };
          addTableBodyBoarder = function addTableBodyBoarder(lineHeight) {
            var tdWidthDimensions = getTdWidthDimensions();
            for (var _i3 = 0; _i3 < param.data.header.length; _i3++) {
              var _tdWidthDimensions$_i3, _tdWidthDimensions$_i4;
              doc.rect(tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$_i3 = tdWidthDimensions[_i3]) === null || _tdWidthDimensions$_i3 === void 0 ? void 0 : _tdWidthDimensions$_i3.shift, currentHeight, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$_i4 = tdWidthDimensions[_i3]) === null || _tdWidthDimensions$_i4 === void 0 ? void 0 : _tdWidthDimensions$_i4.width, lineHeight);
            }
          };
          addTableHeader = function addTableHeader() {
            if (param.data.headerBorder) addTableHeaderBoarder();
            currentHeight += pdfConfig.subLineHeight + 2;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setTextColor(colorBlack);
            doc.setFontSize(pdfConfig.fieldTextSize);
            //border color
            doc.setDrawColor(colorGray);
            // currentHeight += 2;

            var tdWidthDimensions = getTdWidthDimensions();
            param.data.header.forEach(function (row, index) {
              var _tdWidthDimensions$in;
              doc.text(row === null || row === void 0 ? void 0 : row.toUpperCase(), tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in = tdWidthDimensions[index]) === null || _tdWidthDimensions$in === void 0 ? void 0 : _tdWidthDimensions$in.shift, currentHeight);
            });
            currentHeight += pdfConfig.subLineHeight;
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
            // Zebra striping
            if (index % 2 === 1) {
              doc.setFillColor(245, 245, 245);
              doc.rect(10, currentHeight, docWidth - 20, maxHeight + 6, "F");
            }
            doc.setFontSize(pdfConfig.textSizeSmall);
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setTextColor(colorBlack);
            row.forEach(function (rr, index) {
              var _tdWidthDimensions$in3, _tdWidthDimensions$in4;
              var item = splitTextAndGetHeight(rr.toString(), (tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in3 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in3 === void 0 ? void 0 : _tdWidthDimensions$in3.width) - 1);
              doc.text(item.text, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in4 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in4 === void 0 ? void 0 : _tdWidthDimensions$in4.shift, currentHeight + 5);
            });
            currentHeight += maxHeight + 6;
            if (currentHeight > pageHeight || currentHeight > pageHeight - 10 && doc.getNumberOfPages() > 1) {
              doc.addPage();
              currentHeight = 10;
              if (index + 1 < tableBodyLength) addTableHeader();
            }
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
          doc.setTextColor(colorBlack);
          currentHeight += pdfConfig.subLineHeight - 1;
          //   currentHeight += pdfConfig.subLineHeight;
          doc.setFontSize(pdfConfig.labelTextSize);

          //add num of pages at the bottom
          if (doc.getNumberOfPages() > 1) {
            for (_i4 = 1; _i4 <= doc.getNumberOfPages(); _i4++) {
              doc.setFontSize(pdfConfig.fieldTextSize - 2);
              doc.setTextColor(colorGray);
              if (param.pageEnable) {
                doc.text(docWidth / 2, docHeight - 10, param.footer.text, ALIGN_CENTER);
                doc.setPage(_i4);
                doc.text(param.pageLabel + " " + _i4 + " / " + doc.getNumberOfPages(), docWidth - 20, doc.internal.pageSize.height - 6);
              }
            }
          }

          // requested by
          if (param.data.requestedBy) {
            doc.setFontSize(pdfConfig.fieldTextSize);
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setTextColor(colorGray);
            doc.text(10, currentHeight, "REQUESTED BY");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setTextColor(colorBlack);
            doc.text(10, currentHeight, param.data.requestedBy.name);
            currentHeight += pdfConfig.subLineHeight;
            if (param.data.requestedBy.phone) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(10, currentHeight, param.data.requestedBy.phone);
              currentHeight += pdfConfig.lineHeight;
            }
          }
          addDesc = function addDesc() {
            var _param$data;
            doc.setFontSize(pdfConfig.labelTextSize - 2);
            doc.setTextColor(colorBlack);
            if (((_param$data = param.data) === null || _param$data === void 0 ? void 0 : _param$data.desc.length) > 0) {
              var _param$data2, _param$data2$desc;
              currentHeight += 1;
              (_param$data2 = param.data) === null || _param$data2 === void 0 ? void 0 : (_param$data2$desc = _param$data2.desc) === null || _param$data2$desc === void 0 ? void 0 : _param$data2$desc.forEach(function (el, index) {
                var desc = splitTextAndGetHeight(el, pageWidth - 40);
                if (currentHeight + desc.height > pageHeight) {
                  doc.addPage();
                  currentHeight = 10;
                }
                if (index === 0) {
                  var _param$data$descLabel;
                  doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
                  doc.setTextColor(colorGray);
                  doc.text(10, currentHeight, (_param$data$descLabel = param.data.descLabel) === null || _param$data$descLabel === void 0 ? void 0 : _param$data$descLabel.toUpperCase());
                  doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
                  doc.setTextColor(colorBlack);
                  currentHeight += pdfConfig.subLineHeight;
                }
                doc.text(10, currentHeight, desc.text);
                currentHeight += desc.height + 1;
              });
            }
          };
          if (((_param$data3 = param.data) === null || _param$data3 === void 0 ? void 0 : (_param$data3$desc = _param$data3.desc) === null || _param$data3$desc === void 0 ? void 0 : _param$data3$desc.length) > 0) addDesc();

          // Delivery Instructions
          if (param.data.deliveryInstructions) {
            currentHeight += pdfConfig.labelTextSize;
            diData = splitTextAndGetHeight(param.data.deliveryInstructions, pageWidth - 20);
            if (currentHeight + diData.height > pageHeight) {
              doc.addPage();
              currentHeight = 10;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
            doc.setFontSize(pdfConfig.labelTextSize);
            doc.setTextColor(colorGray);
            doc.text(10, currentHeight, "DELIVERY INSTRUCTIONS:");
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.setTextColor(colorBlack);
            doc.text(10, currentHeight, diData.text);
            currentHeight += pdfConfig.lineHeight + diData.height;
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
            doc.setTextColor(colorGray);
            doc.text(10, currentHeight, "NOTE");
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
            doc.setTextColor(colorBlack);
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
        case 72:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _jsPDFRfqTemplate.apply(this, arguments);
}
var _default = jsPDFRfqTemplate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX2ZvbnQiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbnRhaW5zQ2hpbmVzZSIsIm9iaiIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0IiwiT3V0cHV0VHlwZSIsIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJqc1BERlJmcVRlbXBsYXRlIiwiX3giLCJfanNQREZSZnFUZW1wbGF0ZSIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicHJvcHMiLCJfcHJvcHMkbG9nbyIsIl9wcm9wcyRsb2dvMiIsIl9wcm9wcyRsb2dvMyIsIl9wcm9wcyRsb2dvNCIsIl9wcm9wcyRsb2dvNCRtYXJnaW4iLCJfcHJvcHMkbG9nbzUiLCJfcHJvcHMkbG9nbzUkbWFyZ2luIiwiX3Byb3BzJGJ1c2luZXNzIiwiX3Byb3BzJGJ1c2luZXNzMiIsIl9wcm9wcyRidXNpbmVzczMiLCJfcHJvcHMkYnVzaW5lc3M0IiwiX3Byb3BzJGJ1c2luZXNzNSIsIl9wcm9wcyRidXNpbmVzczYiLCJfcHJvcHMkYnVzaW5lc3M3IiwiX3Byb3BzJGJ1c2luZXNzOCIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGRhdGEzIiwiX3BhcmFtJGRhdGEzJGRlc2MiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiaGVpZ2h0QmVsb3dMb2dvIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImlzQ2hpbmVzZSIsImJ1c2luZXNzTmFtZSIsIndyYXBwZWROYW1lIiwiYnVzaW5lc3NBZGRyZXNzIiwiYnVzaW5lc3NBZGRyZXNzMiIsImJ1c2luZXNzQWRkcmVzczMiLCJoZWFkZXJzIiwidmFsdWVzIiwic2l6ZSIsImhlaWdodEhlYWRlcnMiLCJfaGVhZGVycyRpIiwiZGV0YWlsc1RleHQiLCJfZGV0YWlsc1RleHQiLCJfcGFyYW0kZGF0YSRsYWJlbCIsInRkV2lkdGgiLCJnZXRUZFdpZHRoRGltZW5zaW9ucyIsImFkZFRhYmxlSGVhZGVyQm9hcmRlciIsImFkZFRhYmxlQm9keUJvYXJkZXIiLCJhZGRUYWJsZUhlYWRlciIsInRhYmxlQm9keUxlbmd0aCIsIl9pNCIsImFkZERlc2MiLCJkaURhdGEiLCJub3RlRGF0YSIsInJldHVybk9iaiIsImJsb2JPdXRwdXQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiX2dldFRkV2lkdGhEaW1lbnNpb25zIiwibGVmdFNoaWZ0IiwicmVzdWx0IiwiZGF0YSIsImhlYWRlciIsIl9wYXJhbSRkYXRhJGhlYWRlcldpZCIsIl9wYXJhbSRkYXRhJGhlYWRlcldpZDIiLCJzaGlmdCIsIndpZHRoIiwiaGVhZGVyV2lkdGgiLCJvdXRwdXRUeXBlIiwicmV0dXJuSnNQREZEb2NPYmplY3QiLCJmaWxlTmFtZSIsIm9yaWVudGF0aW9uTGFuZHNjYXBlIiwibG9nbyIsInNyYyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJidXNpbmVzcyIsIm5hbWUiLCJhZGRyZXNzIiwiYWRkcmVzc0xpbmUyIiwiYWRkcmVzc0xpbmUzIiwiZW1haWxfMSIsImNvdW50cnkiLCJ0YXhOdW1iZXIiLCJwaG9uZSIsImxhYmVsIiwic3ViVG90YWxMYWJlbCIsImRwcE5pbGFpTGFpbkxhYmVsIiwiZGF0ZTFMYWJlbCIsIm51bSIsImRhdGUyTGFiZWwiLCJuZXRUZXJtTGFiZWwiLCJkYXRlMSIsImRhdGUyIiwibmV0VGVybSIsImhlYWRlckJvcmRlciIsInRhYmxlQm9keUJvcmRlciIsInRhYmxlIiwiZGVzY0xhYmVsIiwicmVxdWVzdGVkQnkiLCJkZXNjIiwiY3JlZGl0Tm90ZUxhYmVsIiwibm90ZSIsImNvbDEiLCJjb2wyIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJmb290ZXIiLCJ0ZXh0IiwicGFnZUVuYWJsZSIsInBhZ2VMYWJlbCIsImxpbmVzIiwic3BsaXRUZXh0VG9TaXplIiwiZ2V0VGV4dERpbWVuc2lvbnMiLCJoIiwiRXJyb3IiLCJvcmllbnRhdGlvbiIsImNvbXByZXNzUGRmIiwianNQREYiLCJnZXRQYWdlV2lkdGgiLCJnZXRQYWdlSGVpZ2h0IiwiaW50ZXJuYWwiLCJwYWdlU2l6ZSIsImhlYWRlclRleHRTaXplIiwibGFiZWxUaXRsZVNpemUiLCJsYWJlbFRleHRTaXplIiwiZmllbGRUZXh0U2l6ZSIsInRleHRTaXplU21hbGwiLCJsaW5lSGVpZ2h0Iiwic3ViTGluZUhlaWdodCIsImFkZEZpbGVUb1ZGUyIsImdldE5vdG9TQyIsImFkZEZvbnQiLCJnZXRWYXppciIsImdldFZhemlyQm9sZCIsInNldEZvbnQiLCJzZXRGb250U2l6ZSIsInNldFRleHRDb2xvciIsImFkZEltYWdlIiwidG9VcHBlckNhc2UiLCJNYXRoIiwibWF4IiwibGluZSIsInRkV2lkdGhEaW1lbnNpb25zIiwiX3RkV2lkdGhEaW1lbnNpb25zJF9pIiwiX3RkV2lkdGhEaW1lbnNpb25zJF9pMiIsInJlY3QiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kzIiwiX3RkV2lkdGhEaW1lbnNpb25zJF9pNCIsInNldERyYXdDb2xvciIsInJvdyIsImluZGV4IiwiX3RkV2lkdGhEaW1lbnNpb25zJGluIiwic2V0TGluZVdpZHRoIiwicm93c0hlaWdodCIsImdldFJvd3NIZWlnaHQiLCJyciIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjIiLCJpdGVtIiwidG9TdHJpbmciLCJtYXhIZWlnaHQiLCJzZXRGaWxsQ29sb3IiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4zIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluNCIsImdldE51bWJlck9mUGFnZXMiLCJhZGRQYWdlIiwic3ViVG90YWwiLCJyb3cxIiwicm93MiIsInRvdGFsIiwic2V0UGFnZSIsIl9wYXJhbSRkYXRhIiwiX3BhcmFtJGRhdGEyIiwiX3BhcmFtJGRhdGEyJGRlc2MiLCJlbCIsIl9wYXJhbSRkYXRhJGRlc2NMYWJlbCIsInBhZ2VzTnVtYmVyIiwianNQREZEb2NPYmplY3QiLCJzYXZlIiwib3V0cHV0IiwiYmxvYiIsImRhdGFVcmlTdHJpbmciLCJmaWxlbmFtZSIsImFycmF5QnVmZmVyIiwiYWJydXB0Iiwic3RvcCIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SRlEvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCBcImpzcGRmLWF1dG90YWJsZVwiO1xuaW1wb3J0IHsgZ2V0VmF6aXIsIGdldFZhemlyQm9sZCwgZ2V0Tm90b1NDIH0gZnJvbSBcIi4uL2ZvbnRcIjtcblxuY29uc3QgY29udGFpbnNDaGluZXNlID0gKG9iaikgPT4ge1xuICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICByZXR1cm4gL1tcXHU0RTAwLVxcdTlGRkZdLy50ZXN0KHN0cik7XG59O1xuXG5jb25zdCBPdXRwdXRUeXBlID0ge1xuICBTYXZlOiBcInNhdmVcIiwgLy9zYXZlIHBkZiBhcyBhIGZpbGVcbiAgRGF0YVVyaVN0cmluZzogXCJkYXRhdXJpc3RyaW5nXCIsIC8vcmV0dXJucyB0aGUgZGF0YSB1cmkgc3RyaW5nXG4gIERhdGFVcmk6IFwiZGF0YXVyaVwiLCAvL29wZW5zIHRoZSBkYXRhIHVyaSBpbiBjdXJyZW50IHdpbmRvd1xuICBEYXRhVXJsTmV3V2luZG93OiBcImRhdGF1cmxuZXd3aW5kb3dcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gbmV3IHdpbmRvd1xuICBCbG9iOiBcImJsb2JcIiwgLy9yZXR1cm4gYmxvYiBmb3JtYXQgb2YgdGhlIGRvYyxcbiAgQXJyYXlCdWZmZXI6IFwiYXJyYXlidWZmZXJcIiwgLy9yZXR1cm4gQXJyYXlCdWZmZXIgZm9ybWF0XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1xuICogIG91dHB1dFR5cGU6IE91dHB1dFR5cGUgfCBzdHJpbmcsXG4gKiAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuLFxuICogIGZpbGVOYW1lOiBzdHJpbmcsXG4gKiAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuLFxuICogIGxvZ28/OiB7XG4gKiAgICAgIHNyYz86IHN0cmluZyxcbiAqICAgICAgd2lkdGg/OiBudW1iZXIsXG4gKiAgICAgIGhlaWdodD86IG51bWJlcixcbiAqICAgICAgbWFyZ2luPzoge1xuICogICAgICAgIHRvcD86IG51bWJlcixcbiAqICAgICAgICBsZWZ0PzogbnVtYmVyXG4gKiAgICAgIH1cbiAqICAgfSxcbiAqICAgYnVzaW5lc3M/OiB7XG4gKiAgICAgICBuYW1lPzogc3RyaW5nLFxuICogICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMj86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3NMaW5lMz86IHN0cmluZyxcbiAqICAgICAgIGVtYWlsXzE/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICAgICAgdGF4TnVtYmVyPzogc3RyaW5nLFxuICogICAgICAgcGhvbmU/OiBzdHJpbmdcbiAqICAgfSxcbiAqICAgZGF0YT86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbnVtPzogbnVtYmVyIHwgc3RyaW5nLFxuICogICAgICAgZGF0ZTFMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTE/OiBzdHJpbmcsXG4gKiAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMj86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm1MYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG5ldFRlcm0/OiBzdHJpbmcsXG4gKiAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuLFxuICogICAgICAgdGFibGVCb2R5Qm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIGhlYWRlcj86IHN0cmluZ1tdLFxuICogICAgICAgaGVhZGVyV2lkdGg/OiBudW1iZXJbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgZGVzY0xhYmVsPzogc3RyaW5nLFxuICogICAgICAgZGVzYz86IHN0cmluZ1tdLFxuICogICAgICAgbm90ZT86IHN0cmluZyxcbiAqICAgICAgIHJlcXVlc3RlZEJ5Pzoge1xuICogICAgICAgICAgbmFtZTogc3RyaW5nLFxuICogICAgICAgICAgcGhvbmU/OiBzdHJpbmdcbiAqICAgICAgICB9LFxuICogICAgICAgcGRmVGl0bGU/OiBzdHJpbmcsXG4gKiAgICAgICBzdGF0aWNWQT86IHtcbiAqICAgICAgICAgIGFjY291bnQ6IHN0cmluZyxcbiAqICAgICAgICAgIGJhbms6IHN0cmluZyxcbiAqICAgICAgIH0sXG4gKiAgICAgICBkZWxpdmVyeUluc3RydWN0aW9uczogc3RyaW5nLFxuICogICAgICAgY29sMTogc3RyaW5nW10sXG4gKiAgICAgICBjb2wyOiBzdHJpbmdbXVxuICogICBmb290ZXI/OiB7XG4gKiAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICogICB9LFxuICogICBwYWdlRW5hYmxlPzogYm9vbGVhbixcbiAqICAgcGFnZUxhYmVsPzogc3RyaW5nLCB9IH0gcHJvcHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24ganNQREZSZnFUZW1wbGF0ZShwcm9wcykge1xuICBjb25zdCBwYXJhbSA9IHtcbiAgICBvdXRwdXRUeXBlOiBwcm9wcy5vdXRwdXRUeXBlIHx8IE91dHB1dFR5cGUuU2F2ZSxcbiAgICByZXR1cm5Kc1BERkRvY09iamVjdDogcHJvcHMucmV0dXJuSnNQREZEb2NPYmplY3QgfHwgZmFsc2UsXG4gICAgZmlsZU5hbWU6IHByb3BzLmZpbGVOYW1lIHx8IFwiXCIsXG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU6IHByb3BzLm9yaWVudGF0aW9uTGFuZHNjYXBlIHx8IGZhbHNlLFxuICAgIGxvZ286IHtcbiAgICAgIHNyYzogcHJvcHMubG9nbz8uc3JjIHx8IFwiXCIsXG4gICAgICB3aWR0aDogcHJvcHMubG9nbz8ud2lkdGggfHwgXCJcIixcbiAgICAgIGhlaWdodDogcHJvcHMubG9nbz8uaGVpZ2h0IHx8IFwiXCIsXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwcm9wcy5sb2dvPy5tYXJnaW4/LnRvcCB8fCAwLFxuICAgICAgICBsZWZ0OiBwcm9wcy5sb2dvPy5tYXJnaW4/LmxlZnQgfHwgMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXNpbmVzczoge1xuICAgICAgbmFtZTogcHJvcHMuYnVzaW5lc3M/Lm5hbWUgfHwgXCJcIixcbiAgICAgIGFkZHJlc3M6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTI6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTIgfHwgXCJcIixcbiAgICAgIGFkZHJlc3NMaW5lMzogcHJvcHMuYnVzaW5lc3M/LmFkZHJlc3NMaW5lMyB8fCBcIlwiLFxuICAgICAgZW1haWxfMTogcHJvcHMuYnVzaW5lc3M/LmVtYWlsXzEgfHwgXCJcIixcbiAgICAgIGNvdW50cnk6IHByb3BzLmJ1c2luZXNzPy5jb3VudHJ5IHx8IFwiXCIsXG4gICAgICB0YXhOdW1iZXI6IHByb3BzLmJ1c2luZXNzPy50YXhOdW1iZXIgfHwgXCJcIixcbiAgICAgIHBob25lOiBwcm9wcy5idXNpbmVzcz8ucGhvbmUgfHwgXCJcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBwcm9wcy5kYXRhPy5sYWJlbCB8fCBcIlwiLFxuICAgICAgc3ViVG90YWxMYWJlbDogcHJvcHMuZGF0YT8uc3ViVG90YWxMYWJlbCB8fCBcIlwiLFxuICAgICAgZHBwTmlsYWlMYWluTGFiZWw6IHByb3BzLmRhdGE/LmRwcE5pbGFpTGFpbkxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMUxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMUxhYmVsIHx8IFwiXCIsXG4gICAgICBudW06IHByb3BzLmRhdGE/Lm51bSB8fCBcIlwiLFxuICAgICAgZGF0ZTJMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTJMYWJlbCB8fCBcIlwiLFxuICAgICAgbmV0VGVybUxhYmVsOiBwcm9wcy5kYXRhPy5uZXRUZXJtTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxOiBwcm9wcy5kYXRhPy5kYXRlMSB8fCBcIlwiLFxuICAgICAgZGF0ZTI6IHByb3BzLmRhdGE/LmRhdGUyIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtOiBwcm9wcy5kYXRhPy5uZXRUZXJtIHx8IFwiXCIsXG4gICAgICBoZWFkZXJCb3JkZXI6IHByb3BzLmRhdGE/LmhlYWRlckJvcmRlciB8fCBmYWxzZSxcbiAgICAgIHRhYmxlQm9keUJvcmRlcjogcHJvcHMuZGF0YT8udGFibGVCb2R5Qm9yZGVyIHx8IGZhbHNlLFxuICAgICAgaGVhZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXIgfHwgW10sXG4gICAgICBoZWFkZXJXaWR0aDogcHJvcHMuZGF0YT8uaGVhZGVyV2lkdGggfHwgW10sXG4gICAgICB0YWJsZTogcHJvcHMuZGF0YT8udGFibGUgfHwgW10sXG4gICAgICBkZXNjTGFiZWw6IHByb3BzLmRhdGE/LmRlc2NMYWJlbCB8fCBcIlwiLFxuICAgICAgcmVxdWVzdGVkQnk6IHByb3BzLmRhdGE/LnJlcXVlc3RlZEJ5IHx8IFwiXCIsXG4gICAgICBkZXNjOiBwcm9wcy5kYXRhPy5kZXNjIHx8IFwiXCIsXG4gICAgICBjcmVkaXROb3RlTGFiZWw6IHByb3BzLmRhdGE/LmNyZWRpdE5vdGVMYWJlbCB8fCBcIlwiLFxuICAgICAgbm90ZTogcHJvcHMuZGF0YT8ubm90ZSB8fCBcIlwiLFxuICAgICAgY29sMTogcHJvcHMuZGF0YT8uY29sMSB8fCBbXSxcbiAgICAgIGNvbDI6IHByb3BzLmRhdGE/LmNvbDIgfHwgW10sXG4gICAgICBkZWxpdmVyeUluc3RydWN0aW9uczogcHJvcHMuZGF0YT8uZGVsaXZlcnlJbnN0cnVjdGlvbnMgfHwgXCJcIixcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdGV4dDogcHJvcHMuZm9vdGVyPy50ZXh0IHx8IFwiXCIsXG4gICAgfSxcbiAgICBwYWdlRW5hYmxlOiBwcm9wcy5wYWdlRW5hYmxlIHx8IHRydWUsXG4gICAgcGFnZUxhYmVsOiBwcm9wcy5wYWdlTGFiZWwgfHwgXCJQYWdlXCIsXG4gIH07XG5cbiAgY29uc3Qgc3BsaXRUZXh0QW5kR2V0SGVpZ2h0ID0gKHRleHQsIHNpemUpID0+IHtcbiAgICBjb25zdCBsaW5lcyA9IGRvYy5zcGxpdFRleHRUb1NpemUodGV4dCwgc2l6ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGxpbmVzLFxuICAgICAgaGVpZ2h0OiBkb2MuZ2V0VGV4dERpbWVuc2lvbnMobGluZXMpLmgsXG4gICAgfTtcbiAgfTtcbiAgaWYgKHBhcmFtLmRhdGEudGFibGUgJiYgcGFyYW0uZGF0YS50YWJsZS5sZW5ndGgpIHtcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZVswXS5sZW5ndGggIT0gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKVxuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgaGVhZGVyIGFuZCB0YWJsZSBjb2x1bW4gbXVzdCBiZSBlcXVhbC5cIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG9yaWVudGF0aW9uOiBwYXJhbS5vcmllbnRhdGlvbkxhbmRzY2FwZSA/IFwibGFuZHNjYXBlXCIgOiBcIlwiLFxuICAgIGNvbXByZXNzUGRmOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IGRvYyA9IG5ldyBqc1BERihvcHRpb25zKTtcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmdldFBhZ2VXaWR0aCgpO1xuICBjb25zdCBwYWdlSGVpZ2h0ID0gZG9jLmdldFBhZ2VIZWlnaHQoKSAtIDI1OyAvLzI1IGlzIGJvdHRvbSBtYXJnaW5cbiAgY29uc3QgZG9jV2lkdGggPSBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGg7XG4gIGNvbnN0IGRvY0hlaWdodCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQ7XG5cbiAgY29uc3QgY29sb3JCbGFjayA9IFwiIzAwMDAwMFwiO1xuICBjb25zdCBjb2xvckJsdWUgPSBcIiMzMzY3ZDZcIjtcbiAgY29uc3QgY29sb3JHcmF5ID0gXCIjNGQ0ZTUzXCI7XG4gIGNvbnN0IGxpZ2h0R3JheSA9IFwiIzg4ODg4OFwiO1xuICBjb25zdCBGT05UX1RZUEVfTk9STUFMID0gXCJub3JtYWxcIjtcbiAgY29uc3QgRk9OVF9UWVBFX0JPTEQgPSBcImJvbGRcIjtcbiAgY29uc3QgQUxJR05fUklHSFQgPSBcInJpZ2h0XCI7XG4gIGNvbnN0IEFMSUdOX0xFRlQgPSBcImxlZnRcIjtcbiAgY29uc3QgQUxJR05fQ0VOVEVSID0gXCJjZW50ZXJcIjtcbiAgY29uc3QgSVNTVUVSX0FERFJFU1NfTEFCRUwgPSBcIkNPTVBBTlkgQUREUkVTU1wiO1xuICBjb25zdCBJTUFHRV9DT05URU5UX1RZUEUgPSBcIlBOR1wiO1xuICBjb25zdCBDVVNUT01fRk9OVF9OQU1FID0gXCJSb2JvdG9cIjtcbiAgdmFyIGhlaWdodEJlbG93TG9nbztcblxuICAvL3N0YXJ0aW5nIGF0IDIwbW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAyMDtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDI0LFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMCxcbiAgICBmaWVsZFRleHRTaXplOiA5LFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNyxcbiAgICBzdWJMaW5lSGVpZ2h0OiA1LFxuICB9O1xuXG4gIGNvbnN0IGlzQ2hpbmVzZSA9IGNvbnRhaW5zQ2hpbmVzZShwcm9wcyk7XG5cbiAgaWYgKGlzQ2hpbmVzZSkge1xuICAgIGRvYy5hZGRGaWxlVG9WRlMoXCJOb3RvU0MudHRmXCIsIGdldE5vdG9TQygpKTtcbiAgICBkb2MuYWRkRm9udChcIk5vdG9TQy50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLmFkZEZvbnQoXCJOb3RvU0MudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgfSBlbHNlIHtcbiAgICBkb2MuYWRkRmlsZVRvVkZTKFwiVmF6aXIudHRmXCIsIGdldFZhemlyKCkpO1xuICAgIGRvYy5hZGRGb250KFwiVmF6aXIudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5hZGRGaWxlVG9WRlMoXCJWYXppckJvbGQudHRmXCIsIGdldFZhemlyQm9sZCgpKTtcbiAgICBkb2MuYWRkRm9udChcIlZhemlyQm9sZC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICB9XG5cbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGFyYW0ubG9nby5oZWlnaHQgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3A7XG4gIH1cblxuICBpZiAocGFyYW0uYnVzaW5lc3MubmFtZSkge1xuICAgIGNvbnN0IGJ1c2luZXNzTmFtZSA9IHBhcmFtLmJ1c2luZXNzLm5hbWU7XG4gICAgY29uc3Qgd3JhcHBlZE5hbWUgPSBkb2Muc3BsaXRUZXh0VG9TaXplKGJ1c2luZXNzTmFtZSwgZG9jV2lkdGggLSAyMCAtIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQpO1xuICAgIFxuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHdyYXBwZWROYW1lLFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHdyYXBwZWROYW1lLmxlbmd0aCAqIChwZGZDb25maWcuaGVhZGVyVGV4dFNpemUgKiAwLjM1KTtcbiAgICBoZWlnaHRCZWxvd0xvZ28gPSBjdXJyZW50SGVpZ2h0O1xuICB9XG5cbiAgaWYgKHBhcmFtPy5idXNpbmVzcz8uYWRkcmVzcykge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIElTU1VFUl9BRERSRVNTX0xBQkVMLFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgY29uc3QgYnVzaW5lc3NBZGRyZXNzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzcyxcbiAgICAgIGRvY1dpZHRoICogMC40XG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBidXNpbmVzc0FkZHJlc3MudGV4dCxcbiAgICAgIEFMSUdOX0xFRlRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBidXNpbmVzc0FkZHJlc3MuaGVpZ2h0O1xuICAgIGNvbnN0IGJ1c2luZXNzQWRkcmVzczIgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTIsXG4gICAgICBkb2NXaWR0aCAqIDAuNFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYnVzaW5lc3NBZGRyZXNzMi50ZXh0LFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJ1c2luZXNzQWRkcmVzczIuaGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMykge1xuICAgICAgY29uc3QgYnVzaW5lc3NBZGRyZXNzMyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzLFxuICAgICAgICBkb2NXaWR0aCAqIDAuNFxuICAgICAgKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIGJ1c2luZXNzQWRkcmVzczMudGV4dCxcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gYnVzaW5lc3NBZGRyZXNzMy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmNvdW50cnkpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmNvdW50cnksXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5lbWFpbF8xKSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5lbWFpbF8xLFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLnBob25lKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBcIlRFTCBOVU1CRVI6IFwiLFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDI3ICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MucGhvbmVcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBcIlRBWCBOVU1CRVI6IFwiLFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDI3ICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLmNvbDEgJiYgcGFyYW0uZGF0YS5jb2wyKSB7XG4gICAgLy8gUE8gTnVtYmVyIGFuZCBvdGhlciBkZXRhaWxzIG9uIHRoZSByaWdodCBzaWRlXG4gICAgY29uc3QgaGVhZGVycyA9IHBhcmFtLmRhdGEuY29sMTtcbiAgICBjb25zdCB2YWx1ZXMgPSBwYXJhbS5kYXRhLmNvbDI7XG4gICAgY29uc3Qgc2l6ZSA9IGhlYWRlcnMubGVuZ3RoO1xuICAgIHZhciBoZWlnaHRIZWFkZXJzID0gaGVpZ2h0QmVsb3dMb2dvO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgY29uc3QgZGV0YWlsc1RleHQgPSBoZWFkZXJzW2ldPy50b1VwcGVyQ2FzZSgpICsgXCI6IFwiO1xuICAgICAgZG9jLnRleHQoZG9jV2lkdGggLSAzMCwgaGVpZ2h0SGVhZGVycywgZGV0YWlsc1RleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGhlaWdodEhlYWRlcnMgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgY29uc3QgZGV0YWlsc1RleHQgPSB2YWx1ZXNbaV07XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBoZWlnaHRCZWxvd0xvZ28sIGRldGFpbHNUZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBoZWlnaHRCZWxvd0xvZ28gKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCA9IE1hdGgubWF4KGN1cnJlbnRIZWlnaHQsIGhlaWdodEJlbG93TG9nbyk7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDYpO1xuXG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsKSB7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmxhYmVsPy50b1VwcGVyQ2FzZSgpLCBBTElHTl9DRU5URVIpO1xuICB9XG5cbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gIC8vbGluZSBicmVha2VyIERvYyB0ZXh0XG4gIGlmIChwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAvL1RBQkxFIFBBUlRcblxuICBjb25zdCB0ZFdpZHRoID0gKHBhZ2VXaWR0aCAtIDIwKSAvIHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBnZXRUZFdpZHRoRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdFNoaWZ0ID0gMTA7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBzaGlmdDogbGVmdFNoaWZ0LFxuICAgICAgICB3aWR0aDogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgbGVmdFNoaWZ0ID1cbiAgICAgICAgbGVmdFNoaWZ0ICtcbiAgICAgICAgKHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkVGFibGVIZWFkZXJCb2FyZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgN1xuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCAtPSAyO1xuICB9O1xuICBjb25zdCBhZGRUYWJsZUJvZHlCb2FyZGVyID0gKGxpbmVIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jLnJlY3QoXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LnNoaWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy53aWR0aCxcbiAgICAgICAgbGluZUhlaWdodFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbS5kYXRhLmhlYWRlckJvcmRlcikgYWRkVGFibGVIZWFkZXJCb2FyZGVyKCk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0ICsgMjtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgZG9jLnNldERyYXdDb2xvcihjb2xvckdyYXkpO1xuICAgIC8vIGN1cnJlbnRIZWlnaHQgKz0gMjtcblxuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBwYXJhbS5kYXRhLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgICBkb2MudGV4dChyb3c/LnRvVXBwZXJDYXNlKCksIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy5zaGlmdCwgY3VycmVudEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuNSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9O1xuICBhZGRUYWJsZUhlYWRlcigpO1xuXG4gIC8vdGFibGUgYm9keVxuICBjb25zdCB0YWJsZUJvZHlMZW5ndGggPSBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aDtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgcGFyYW0uZGF0YS50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XG4gICAgLy9nZXQgbmF4IGhlaWdodCBmb3IgdGhlIGN1cnJlbnQgcm93XG4gICAgbGV0IHJvd3NIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBnZXRSb3dzSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy50ZXh0U2l6ZVNtYWxsKTtcbiAgICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgICAgLy9zaXplIHNob3VsZCBiZSB0aGUgc2FtZSB1c2VkIGluIG90aGVyIHRkXG4gICAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcbiAgICAgICAgcm93c0hlaWdodC5wdXNoKGl0ZW0uaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZ2V0Um93c0hlaWdodCgpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KC4uLnJvd3NIZWlnaHQpO1xuXG4gICAgLy9ib2R5IGJvcmRlcnNcbiAgICBpZiAocGFyYW0uZGF0YS50YWJsZUJvZHlCb3JkZXIpIGFkZFRhYmxlQm9keUJvYXJkZXIobWF4SGVpZ2h0ICsgMSk7XG5cbiAgICAvL2Rpc3BsYXkgdGV4dCBpbnRvIHJvdyBjZWxsc1xuICAgIC8vT2JqZWN0LmVudHJpZXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbCwgaW5kZXgpIHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgLy8gWmVicmEgc3RyaXBpbmdcbiAgICBpZiAoaW5kZXggJSAyID09PSAxKSB7XG4gICAgICBkb2Muc2V0RmlsbENvbG9yKDI0NSwgMjQ1LCAyNDUpO1xuICAgICAgZG9jLnJlY3QoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMjAsIG1heEhlaWdodCArIDYsIFwiRlwiKTtcbiAgICB9XG5cbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHJyLnRvU3RyaW5nKCksXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICk7XG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNSk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodCArIDY7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCkgYWRkVGFibGVIZWFkZXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIG5vIHRhYmxlIGRhdGFcbiAgaWYgKHRhYmxlQm9keUxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gNjtcbiAgICBkb2MudGV4dChcIk5vIERhdGFcIiwgZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGRvYy5zZXRGb250U2l6ZSgxMCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKFxuICAgIHBhcmFtLmRhdGEuc3ViVG90YWwgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzEgfHxcbiAgICBwYXJhbS5kYXRhLnJvdzIgfHxcbiAgICBwYXJhbS5kYXRhLnRvdGFsXG4gICkge1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCAtIDE7XG4gIC8vICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcblxuICAvL2FkZCBudW0gb2YgcGFnZXMgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gICAgICBpZiAocGFyYW0ucGFnZUVuYWJsZSkge1xuICAgICAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICAgICAgZG9jLnNldFBhZ2UoaSk7XG4gICAgICAgIGRvYy50ZXh0KFxuICAgICAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiIFwiICsgaSArIFwiIC8gXCIgKyBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICAgICAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0ZWQgYnlcbiAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSRVFVRVNURUQgQllcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkubmFtZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5LnBob25lKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5LnBob25lKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsPy50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRGVsaXZlcnkgSW5zdHJ1Y3Rpb25zXG4gIGlmIChwYXJhbS5kYXRhLmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBkaURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zLFxuICAgICAgcGFnZVdpZHRoIC0gMjBcbiAgICApO1xuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGlEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJERUxJVkVSWSBJTlNUUlVDVElPTlM6XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRpRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgZGlEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOT1RFXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGUmZxVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO0FBQTRELFNBQUFHLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFHLE1BQUEsQ0FBQUMscUJBQUEsUUFBQUMsT0FBQSxHQUFBRixNQUFBLENBQUFDLHFCQUFBLENBQUFKLE1BQUEsR0FBQUMsY0FBQSxLQUFBSSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFKLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsTUFBQSxFQUFBTyxHQUFBLEVBQUFFLFVBQUEsT0FBQVAsSUFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsSUFBQSxFQUFBRyxPQUFBLFlBQUFILElBQUE7QUFBQSxTQUFBVSxjQUFBQyxNQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUYsQ0FBQSxVQUFBRyxNQUFBLFdBQUFGLFNBQUEsQ0FBQUQsQ0FBQSxJQUFBQyxTQUFBLENBQUFELENBQUEsUUFBQUEsQ0FBQSxPQUFBZixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsUUFBQUMsZ0JBQUEsYUFBQVAsTUFBQSxFQUFBTSxHQUFBLEVB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