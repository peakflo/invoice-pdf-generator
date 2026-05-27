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
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, heightBelowLogo, currentHeight, pdfConfig, isChinese, businessAddress, businessAddress2, businessAddress3, headers, values, size, heightHeaders, i, _headers$i, detailsText, _detailsText, _param$data$label, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, _i4, addDesc, diData, noteData, returnObj, blobOutput;
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
            doc.text(10 + param.logo.margin.left, currentHeight, param.business.name, ALIGN_LEFT);
            currentHeight += pdfConfig.lineHeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX2ZvbnQiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbnRhaW5zQ2hpbmVzZSIsIm9iaiIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXN0IiwiT3V0cHV0VHlwZSIsIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJqc1BERlJmcVRlbXBsYXRlIiwiX3giLCJfanNQREZSZnFUZW1wbGF0ZSIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicHJvcHMiLCJfcHJvcHMkbG9nbyIsIl9wcm9wcyRsb2dvMiIsIl9wcm9wcyRsb2dvMyIsIl9wcm9wcyRsb2dvNCIsIl9wcm9wcyRsb2dvNCRtYXJnaW4iLCJfcHJvcHMkbG9nbzUiLCJfcHJvcHMkbG9nbzUkbWFyZ2luIiwiX3Byb3BzJGJ1c2luZXNzIiwiX3Byb3BzJGJ1c2luZXNzMiIsIl9wcm9wcyRidXNpbmVzczMiLCJfcHJvcHMkYnVzaW5lc3M0IiwiX3Byb3BzJGJ1c2luZXNzNSIsIl9wcm9wcyRidXNpbmVzczYiLCJfcHJvcHMkYnVzaW5lc3M3IiwiX3Byb3BzJGJ1c2luZXNzOCIsIl9wcm9wcyRkYXRhIiwiX3Byb3BzJGRhdGEyIiwiX3Byb3BzJGRhdGEzIiwiX3Byb3BzJGRhdGE0IiwiX3Byb3BzJGRhdGE1IiwiX3Byb3BzJGRhdGE2IiwiX3Byb3BzJGRhdGE3IiwiX3Byb3BzJGRhdGE4IiwiX3Byb3BzJGRhdGE5IiwiX3Byb3BzJGRhdGExMCIsIl9wcm9wcyRkYXRhMTEiLCJfcHJvcHMkZGF0YTEyIiwiX3Byb3BzJGRhdGExMyIsIl9wcm9wcyRkYXRhMTQiLCJfcHJvcHMkZGF0YTE1IiwiX3Byb3BzJGRhdGExNiIsIl9wcm9wcyRkYXRhMTciLCJfcHJvcHMkZGF0YTE4IiwiX3Byb3BzJGRhdGExOSIsIl9wcm9wcyRkYXRhMjAiLCJfcHJvcHMkZGF0YTIxIiwiX3Byb3BzJGRhdGEyMiIsIl9wcm9wcyRkYXRhMjMiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGRhdGEzIiwiX3BhcmFtJGRhdGEzJGRlc2MiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiaGVpZ2h0QmVsb3dMb2dvIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImlzQ2hpbmVzZSIsImJ1c2luZXNzQWRkcmVzcyIsImJ1c2luZXNzQWRkcmVzczIiLCJidXNpbmVzc0FkZHJlc3MzIiwiaGVhZGVycyIsInZhbHVlcyIsInNpemUiLCJoZWlnaHRIZWFkZXJzIiwiX2hlYWRlcnMkaSIsImRldGFpbHNUZXh0IiwiX2RldGFpbHNUZXh0IiwiX3BhcmFtJGRhdGEkbGFiZWwiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJfaTQiLCJhZGREZXNjIiwiZGlEYXRhIiwibm90ZURhdGEiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwicGhvbmUiLCJsYWJlbCIsInN1YlRvdGFsTGFiZWwiLCJkcHBOaWxhaUxhaW5MYWJlbCIsImRhdGUxTGFiZWwiLCJudW0iLCJkYXRlMkxhYmVsIiwibmV0VGVybUxhYmVsIiwiZGF0ZTEiLCJkYXRlMiIsIm5ldFRlcm0iLCJoZWFkZXJCb3JkZXIiLCJ0YWJsZUJvZHlCb3JkZXIiLCJ0YWJsZSIsImRlc2NMYWJlbCIsInJlcXVlc3RlZEJ5IiwiZGVzYyIsImNyZWRpdE5vdGVMYWJlbCIsIm5vdGUiLCJjb2wxIiwiY29sMiIsImRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zIiwiZm9vdGVyIiwidGV4dCIsInBhZ2VFbmFibGUiLCJwYWdlTGFiZWwiLCJsaW5lcyIsInNwbGl0VGV4dFRvU2l6ZSIsImdldFRleHREaW1lbnNpb25zIiwiaCIsIkVycm9yIiwib3JpZW50YXRpb24iLCJjb21wcmVzc1BkZiIsImpzUERGIiwiZ2V0UGFnZVdpZHRoIiwiZ2V0UGFnZUhlaWdodCIsImludGVybmFsIiwicGFnZVNpemUiLCJoZWFkZXJUZXh0U2l6ZSIsImxhYmVsVGl0bGVTaXplIiwibGFiZWxUZXh0U2l6ZSIsImZpZWxkVGV4dFNpemUiLCJ0ZXh0U2l6ZVNtYWxsIiwibGluZUhlaWdodCIsInN1YkxpbmVIZWlnaHQiLCJhZGRGaWxlVG9WRlMiLCJnZXROb3RvU0MiLCJhZGRGb250IiwiZ2V0VmF6aXIiLCJnZXRWYXppckJvbGQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsInRvVXBwZXJDYXNlIiwiTWF0aCIsIm1heCIsImxpbmUiLCJ0ZFdpZHRoRGltZW5zaW9ucyIsIl90ZFdpZHRoRGltZW5zaW9ucyRfaSIsIl90ZFdpZHRoRGltZW5zaW9ucyRfaTIiLCJyZWN0IiwiX3RkV2lkdGhEaW1lbnNpb25zJF9pMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRfaTQiLCJzZXREcmF3Q29sb3IiLCJyb3ciLCJpbmRleCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbiIsInNldExpbmVXaWR0aCIsInJvd3NIZWlnaHQiLCJnZXRSb3dzSGVpZ2h0IiwicnIiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4yIiwiaXRlbSIsInRvU3RyaW5nIiwibWF4SGVpZ2h0Iiwic2V0RmlsbENvbG9yIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMyIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjQiLCJnZXROdW1iZXJPZlBhZ2VzIiwiYWRkUGFnZSIsInN1YlRvdGFsIiwicm93MSIsInJvdzIiLCJ0b3RhbCIsInNldFBhZ2UiLCJfcGFyYW0kZGF0YSIsIl9wYXJhbSRkYXRhMiIsIl9wYXJhbSRkYXRhMiRkZXNjIiwiZWwiLCJfcGFyYW0kZGF0YSRkZXNjTGFiZWwiLCJwYWdlc051bWJlciIsImpzUERGRG9jT2JqZWN0Iiwic2F2ZSIsIm91dHB1dCIsImJsb2IiLCJkYXRhVXJpU3RyaW5nIiwiZmlsZW5hbWUiLCJhcnJheUJ1ZmZlciIsImFicnVwdCIsInN0b3AiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvUkZRL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzUERGIH0gZnJvbSBcImpzcGRmXCI7XG5pbXBvcnQgXCJqc3BkZi1hdXRvdGFibGVcIjtcbmltcG9ydCB7IGdldFZhemlyLCBnZXRWYXppckJvbGQsIGdldE5vdG9TQyB9IGZyb20gXCIuLi9mb250XCI7XG5cbmNvbnN0IGNvbnRhaW5zQ2hpbmVzZSA9IChvYmopID0+IHtcbiAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgcmV0dXJuIC9bXFx1NEUwMC1cXHU5RkZGXS8udGVzdChzdHIpO1xufTtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZyxcbiAqICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHtcbiAqICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAqICAgICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgICAgICAgfSxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0cmluZyxcbiAqICAgICAgIGNvbDE6IHN0cmluZ1tdLFxuICogICAgICAgY29sMjogc3RyaW5nW11cbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGUmZxVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgICBwaG9uZTogcHJvcHMuYnVzaW5lc3M/LnBob25lIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbkxhYmVsOiBwcm9wcy5kYXRhPy5kcHBOaWxhaUxhaW5MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmNvbDEgfHwgW10sXG4gICAgICBjb2wyOiBwcm9wcy5kYXRhPy5jb2wyIHx8IFtdLFxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHByb3BzLmRhdGE/LmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zIHx8IFwiXCIsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDT01QQU5ZIEFERFJFU1NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiUm9ib3RvXCI7XG4gIHZhciBoZWlnaHRCZWxvd0xvZ287XG5cbiAgLy9zdGFydGluZyBhdCAyMG1tXG4gIGxldCBjdXJyZW50SGVpZ2h0ID0gMjA7XG5cbiAgY29uc3QgcGRmQ29uZmlnID0ge1xuICAgIGhlYWRlclRleHRTaXplOiAyNCxcbiAgICBsYWJlbFRpdGxlU2l6ZTogMTYsXG4gICAgbGFiZWxUZXh0U2l6ZTogMTAsXG4gICAgZmllbGRUZXh0U2l6ZTogOSxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDcsXG4gICAgc3ViTGluZUhlaWdodDogNSxcbiAgfTtcblxuICBjb25zdCBpc0NoaW5lc2UgPSBjb250YWluc0NoaW5lc2UocHJvcHMpO1xuXG4gIGlmIChpc0NoaW5lc2UpIHtcbiAgICBkb2MuYWRkRmlsZVRvVkZTKFwiTm90b1NDLnR0ZlwiLCBnZXROb3RvU0MoKSk7XG4gICAgZG9jLmFkZEZvbnQoXCJOb3RvU0MudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5hZGRGb250KFwiTm90b1NDLnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jLmFkZEZpbGVUb1ZGUyhcIlZhemlyLnR0ZlwiLCBnZXRWYXppcigpKTtcbiAgICBkb2MuYWRkRm9udChcIlZhemlyLnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MuYWRkRmlsZVRvVkZTKFwiVmF6aXJCb2xkLnR0ZlwiLCBnZXRWYXppckJvbGQoKSk7XG4gICAgZG9jLmFkZEZvbnQoXCJWYXppckJvbGQudHRmXCIsIENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgfVxuXG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBhcmFtLmxvZ28uaGVpZ2h0ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wO1xuICB9XG5cbiAgaWYgKHBhcmFtLmJ1c2luZXNzLm5hbWUpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy5uYW1lLFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGhlaWdodEJlbG93TG9nbyA9IGN1cnJlbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgSVNTVUVSX0FERFJFU1NfTEFCRUwsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjb25zdCBidXNpbmVzc0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgZG9jV2lkdGggKiAwLjRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGJ1c2luZXNzQWRkcmVzcy50ZXh0LFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJ1c2luZXNzQWRkcmVzcy5oZWlnaHQ7XG4gICAgY29uc3QgYnVzaW5lc3NBZGRyZXNzMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIGRvY1dpZHRoICogMC40XG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBidXNpbmVzc0FkZHJlc3MyLnRleHQsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gYnVzaW5lc3NBZGRyZXNzMi5oZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBidXNpbmVzc0FkZHJlc3MzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIGRvY1dpZHRoICogMC40XG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYnVzaW5lc3NBZGRyZXNzMy50ZXh0LFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBidXNpbmVzc0FkZHJlc3MzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuY291bnRyeSkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuY291bnRyeSxcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MucGhvbmUpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIFwiVEVMIE5VTUJFUjogXCIsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMjcgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5waG9uZVxuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy50YXhOdW1iZXIpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIFwiVEFYIE5VTUJFUjogXCIsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMjcgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuY29sMSAmJiBwYXJhbS5kYXRhLmNvbDIpIHtcbiAgICAvLyBQTyBOdW1iZXIgYW5kIG90aGVyIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICBjb25zdCBoZWFkZXJzID0gcGFyYW0uZGF0YS5jb2wxO1xuICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtLmRhdGEuY29sMjtcbiAgICBjb25zdCBzaXplID0gaGVhZGVycy5sZW5ndGg7XG4gICAgdmFyIGhlaWdodEhlYWRlcnMgPSBoZWlnaHRCZWxvd0xvZ287XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBkZXRhaWxzVGV4dCA9IGhlYWRlcnNbaV0/LnRvVXBwZXJDYXNlKCkgKyBcIjogXCI7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDMwLCBoZWlnaHRIZWFkZXJzLCBkZXRhaWxzVGV4dCwgQUxJR05fUklHSFQpO1xuICAgICAgaGVpZ2h0SGVhZGVycyArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBkZXRhaWxzVGV4dCA9IHZhbHVlc1tpXTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGhlaWdodEJlbG93TG9nbywgZGV0YWlsc1RleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGhlaWdodEJlbG93TG9nbyArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ID0gTWF0aC5tYXgoY3VycmVudEhlaWdodCwgaGVpZ2h0QmVsb3dMb2dvKTtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNik7XG5cbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubGFiZWw/LnRvVXBwZXJDYXNlKCksIEFMSUdOX0NFTlRFUik7XG4gIH1cblxuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgLy9saW5lIGJyZWFrZXIgRG9jIHRleHRcbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgLy8gY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdz8udG9VcHBlckNhc2UoKSwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICAvLyBaZWJyYSBzdHJpcGluZ1xuICAgIGlmIChpbmRleCAlIDIgPT09IDEpIHtcbiAgICAgIGRvYy5zZXRGaWxsQ29sb3IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgICBkb2MucmVjdCgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAyMCwgbWF4SGVpZ2h0ICsgNiwgXCJGXCIpO1xuICAgIH1cblxuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTtcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA1KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgNjtcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIlJFUVVFU1RFRCBCWVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeS5uYW1lKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkucGhvbmUpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkucGhvbmUpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWw/LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBEZWxpdmVyeSBJbnN0cnVjdGlvbnNcbiAgaWYgKHBhcmFtLmRhdGEuZGVsaXZlcnlJbnN0cnVjdGlvbnMpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IGRpRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEuZGVsaXZlcnlJbnN0cnVjdGlvbnMsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkaURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkRFTElWRVJZIElOU1RSVUNUSU9OUzpcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGlEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBkaURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIHBhZ2VXaWR0aCAtIDIwKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5PVEVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZSZnFUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7QUFBNEQsU0FBQUcsUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUU1RCxJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEdBQUcsRUFBSztFQUMvQixJQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxHQUFHLENBQUM7RUFDL0IsT0FBTyxpQkFBaUIsQ0FBQ0ksSUFBSSxDQUFDSCxHQUFHLENBQUM7QUFDcEMsQ0FBQztBQUVELElBQU1JLFVBQVUsR0FBRztFQUNqQkMsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxhQUFhLEVBQUUsZUFBZTtFQUFFO0VBQ2hDQyxPQUFPLEVBQUUsU0FBUztFQUFFO0VBQ3BCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFBRTtFQUN0Q0MsSUFBSSxFQUFFLE1BQU07RUFBRTtFQUNkQyxXQUFXLEVBQUUsYUFBYSxDQUFFO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1REEsU0E2RGVDLGdCQUFnQkEsQ0FBQUMsRUFBQTtFQUFBLE9BQUFDLGlCQUFBLENBQUE1QixLQUFBLE9BQUFJLFNBQUE7QUFBQTtBQUFBLFNBQUF3QixrQkFBQTtFQUFBQSxpQkFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQS9CLFNBQUFDLFFBQWdDQyxLQUFLO0lBQUEsSUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxZQUFBLEVBQUFDLG1CQUFBLEVBQUFDLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsZUFBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBO0lBQUEsSUFBQUMsS0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxPQUFBLEVBQUFDLEdBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxTQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxhQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLE9BQUEsRUFBQUMsTUFBQSxFQUFBQyxJQUFBLEVBQUFDLGFBQUEsRUFBQXZHLENBQUEsRUFBQXdHLFVBQUEsRUFBQUMsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLE9BQUEsRUFx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