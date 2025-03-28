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
    var param, splitTextAndGetHeight, options, doc, pageWidth, pageHeight, docWidth, docHeight, colorBlack, colorBlue, colorGray, lightGray, FONT_TYPE_NORMAL, FONT_TYPE_BOLD, ALIGN_RIGHT, ALIGN_LEFT, ALIGN_CENTER, ISSUER_ADDRESS_LABEL, IMAGE_CONTENT_TYPE, CUSTOM_FONT_NAME, heightBelowLogo, currentHeight, pdfConfig, businessAddress, businessAddress2, businessAddress3, headers, values, size, heightHeaders, i, detailsText, _detailsText, tdWidth, getTdWidthDimensions, addTableHeaderBoarder, addTableBodyBoarder, addTableHeader, tableBodyLength, _i4, addDesc, diData, noteData, returnObj, blobOutput;
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
          ISSUER_ADDRESS_LABEL = "Company Address";
          IMAGE_CONTENT_TYPE = "PNG";
          CUSTOM_FONT_NAME = "customFont";
          //starting at 15mm
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
            doc.text(10 + param.logo.margin.left, currentHeight, ISSUER_ADDRESS_LABEL, ALIGN_LEFT);
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
              doc.text(10 + param.logo.margin.left, currentHeight, "Tel Number: ", ALIGN_LEFT);
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
              doc.text(27 + param.logo.margin.left, currentHeight, param.business.phone);
            }
            currentHeight += pdfConfig.subLineHeight;
            if (param.business.taxNumber) {
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_BOLD);
              doc.text(10 + param.logo.margin.left, currentHeight, "Tax Number: ", ALIGN_LEFT);
              doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
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
            for (i = 0; i < size; i++) {
              detailsText = headers[i] + ": ";
              doc.text(docWidth - 30, heightHeaders, detailsText, ALIGN_RIGHT);
              heightHeaders += pdfConfig.subLineHeight;
            }
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
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
            doc.text(docWidth / 2, currentHeight, param.data.label, ALIGN_CENTER);
          }
          doc.setFont(undefined, FONT_TYPE_BOLD);
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
              doc.text(row, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in = tdWidthDimensions[index]) === null || _tdWidthDimensions$in === void 0 ? void 0 : _tdWidthDimensions$in.shift, currentHeight);
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
            row.forEach(function (rr, index) {
              var _tdWidthDimensions$in3, _tdWidthDimensions$in4;
              var item = splitTextAndGetHeight(rr.toString(), (tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in3 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in3 === void 0 ? void 0 : _tdWidthDimensions$in3.width) - 1); //minus 1, to fix the padding issue between borders

              doc.text(item.text, tdWidthDimensions === null || tdWidthDimensions === void 0 ? void 0 : (_tdWidthDimensions$in4 = tdWidthDimensions[index]) === null || _tdWidthDimensions$in4 === void 0 ? void 0 : _tdWidthDimensions$in4.shift, currentHeight + 5);
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
            doc.text(10, currentHeight, "Requested By");
            currentHeight += pdfConfig.subLineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
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
            doc.text(10, currentHeight, "Delivery Instructions:");
            currentHeight += pdfConfig.lineHeight;
            doc.setFont(CUSTOM_FONT_NAME, FONT_TYPE_NORMAL);
            doc.setFontSize(pdfConfig.fieldTextSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX2ZvbnQiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwianNQREZSZnFUZW1wbGF0ZSIsIl94IiwiX2pzUERGUmZxVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRidXNpbmVzczgiLCJfcHJvcHMkZGF0YSIsIl9wcm9wcyRkYXRhMiIsIl9wcm9wcyRkYXRhMyIsIl9wcm9wcyRkYXRhNCIsIl9wcm9wcyRkYXRhNSIsIl9wcm9wcyRkYXRhNiIsIl9wcm9wcyRkYXRhNyIsIl9wcm9wcyRkYXRhOCIsIl9wcm9wcyRkYXRhOSIsIl9wcm9wcyRkYXRhMTAiLCJfcHJvcHMkZGF0YTExIiwiX3Byb3BzJGRhdGExMiIsIl9wcm9wcyRkYXRhMTMiLCJfcHJvcHMkZGF0YTE0IiwiX3Byb3BzJGRhdGExNSIsIl9wcm9wcyRkYXRhMTYiLCJfcHJvcHMkZGF0YTE3IiwiX3Byb3BzJGRhdGExOCIsIl9wcm9wcyRkYXRhMTkiLCJfcHJvcHMkZGF0YTIwIiwiX3Byb3BzJGRhdGEyMSIsIl9wcm9wcyRkYXRhMjIiLCJfcHJvcHMkZGF0YTIzIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRidXNpbmVzcyIsIl9wYXJhbSRkYXRhMyIsIl9wYXJhbSRkYXRhMyRkZXNjIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsImhlaWdodEJlbG93TG9nbyIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJidXNpbmVzc0FkZHJlc3MiLCJidXNpbmVzc0FkZHJlc3MyIiwiYnVzaW5lc3NBZGRyZXNzMyIsImhlYWRlcnMiLCJ2YWx1ZXMiLCJzaXplIiwiaGVpZ2h0SGVhZGVycyIsImRldGFpbHNUZXh0IiwiX2RldGFpbHNUZXh0IiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiX2k0IiwiYWRkRGVzYyIsImRpRGF0YSIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJ1c2luZXNzIiwibmFtZSIsImFkZHJlc3MiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJlbWFpbF8xIiwiY291bnRyeSIsInRheE51bWJlciIsInBob25lIiwibGFiZWwiLCJzdWJUb3RhbExhYmVsIiwiZHBwTmlsYWlMYWluTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwiY29sMSIsImNvbDIiLCJkZWxpdmVyeUluc3RydWN0aW9ucyIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIk1hdGgiLCJtYXgiLCJ1bmRlZmluZWQiLCJsaW5lIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRfaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2k0Iiwic2V0RHJhd0NvbG9yIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzdWJUb3RhbCIsInJvdzEiLCJyb3cyIiwidG90YWwiLCJzZXRQYWdlIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTIkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL1JGUS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4uL2ZvbnRcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZyxcbiAqICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHtcbiAqICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAqICAgICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgICAgICAgfSxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0cmluZyxcbiAqICAgICAgIGNvbDE6IHN0cmluZ1tdLFxuICogICAgICAgY29sMjogc3RyaW5nW11cbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGUmZxVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgICBwaG9uZTogcHJvcHMuYnVzaW5lc3M/LnBob25lIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbkxhYmVsOiBwcm9wcy5kYXRhPy5kcHBOaWxhaUxhaW5MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmNvbDEgfHwgW10sXG4gICAgICBjb2wyOiBwcm9wcy5kYXRhPy5jb2wyIHx8IFtdLFxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHByb3BzLmRhdGE/LmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zIHx8IFwiXCIsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICB2YXIgaGVpZ2h0QmVsb3dMb2dvO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGFyYW0ubG9nby5oZWlnaHQgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3A7XG4gIH1cblxuICBpZiAocGFyYW0uYnVzaW5lc3MubmFtZSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgaGVpZ2h0QmVsb3dMb2dvID0gY3VycmVudEhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIElTU1VFUl9BRERSRVNTX0xBQkVMLFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGJ1c2luZXNzQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICBkb2NXaWR0aCAqIDAuNFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYnVzaW5lc3NBZGRyZXNzLnRleHQsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gYnVzaW5lc3NBZGRyZXNzLmhlaWdodDtcbiAgICBjb25zdCBidXNpbmVzc0FkZHJlc3MyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgZG9jV2lkdGggKiAwLjRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGJ1c2luZXNzQWRkcmVzczIudGV4dCxcbiAgICAgIEFMSUdOX0xFRlRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBidXNpbmVzc0FkZHJlc3MyLmhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGJ1c2luZXNzQWRkcmVzczMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgZG9jV2lkdGggKiAwLjRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBidXNpbmVzc0FkZHJlc3MzLnRleHQsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGJ1c2luZXNzQWRkcmVzczMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5jb3VudHJ5KSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuZW1haWxfMSkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSxcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5waG9uZSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgXCJUZWwgTnVtYmVyOiBcIixcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDI3ICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MucGhvbmVcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBcIlRheCBOdW1iZXI6IFwiLFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMjcgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuY29sMSAmJiBwYXJhbS5kYXRhLmNvbDIpIHtcbiAgICAvLyBQTyBOdW1iZXIgYW5kIG90aGVyIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICBjb25zdCBoZWFkZXJzID0gcGFyYW0uZGF0YS5jb2wxO1xuICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtLmRhdGEuY29sMjtcbiAgICBjb25zdCBzaXplID0gaGVhZGVycy5sZW5ndGg7XG4gICAgdmFyIGhlaWdodEhlYWRlcnMgPSBoZWlnaHRCZWxvd0xvZ287XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IGRldGFpbHNUZXh0ID0gaGVhZGVyc1tpXSArIFwiOiBcIjtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMzAsIGhlaWdodEhlYWRlcnMsIGRldGFpbHNUZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBoZWlnaHRIZWFkZXJzICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBkZXRhaWxzVGV4dCA9IHZhbHVlc1tpXTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGhlaWdodEJlbG93TG9nbywgZGV0YWlsc1RleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGhlaWdodEJlbG93TG9nbyArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ID0gTWF0aC5tYXgoY3VycmVudEhlaWdodCwgaGVpZ2h0QmVsb3dMb2dvKTtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNik7XG5cbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubGFiZWwsIEFMSUdOX0NFTlRFUik7XG4gIH1cblxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAvL2xpbmUgYnJlYWtlciBEb2MgdGV4dFxuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICAvLyBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgZG9jLnRleHQocm93LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA1KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0ZWQgQnlcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5Lm5hbWUpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeS5waG9uZSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeS5waG9uZSk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZERlc2MgPSAoKSA9PiB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcblxuICAgIGlmIChwYXJhbS5kYXRhPy5kZXNjLmxlbmd0aCA+IDApIHtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMTtcbiAgICAgIHBhcmFtLmRhdGE/LmRlc2M/LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KGVsLCBwYWdlV2lkdGggLSA0MCk7XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGVzYy5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEuZGVzY0xhYmVsKTtcbiAgICAgICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkZXNjLnRleHQpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0ICs9IGRlc2MuaGVpZ2h0ICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAocGFyYW0uZGF0YT8uZGVzYz8ubGVuZ3RoID4gMCkgYWRkRGVzYygpO1xuXG4gIC8vIERlbGl2ZXJ5IEluc3RydWN0aW9uc1xuICBpZiAocGFyYW0uZGF0YS5kZWxpdmVyeUluc3RydWN0aW9ucykge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3QgZGlEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uZGF0YS5kZWxpdmVyeUluc3RydWN0aW9ucyxcbiAgICAgIHBhZ2VXaWR0aCAtIDIwXG4gICAgKTtcbiAgICBpZiAoY3VycmVudEhlaWdodCArIGRpRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJEZWxpdmVyeSBJbnN0cnVjdGlvbnM6XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBkaURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIGRpRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvLyBOb3RlXG4gIGlmIChwYXJhbS5kYXRhLm5vdGUpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IG5vdGVEYXRhID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KHBhcmFtLmRhdGEubm90ZSwgcGFnZVdpZHRoIC0gMjApO1xuXG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQgPiBwYWdlSGVpZ2h0KSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5sYWJlbFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJOb3RlXCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBub3RlRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2UgYXQgdGhlIGJvdHRvbVxuICBpZiAoZG9jLmdldE51bWJlck9mUGFnZXMoKSA9PT0gMSAmJiBwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIxIC8gMVwiLFxuICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgKTtcbiAgfVxuXG4gIGxldCByZXR1cm5PYmogPSB7XG4gICAgcGFnZXNOdW1iZXI6IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gIH07XG5cbiAgaWYgKHBhcmFtLnJldHVybkpzUERGRG9jT2JqZWN0KSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAganNQREZEb2NPYmplY3Q6IGRvYyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuU2F2ZSkgZG9jLnNhdmUocGFyYW0uZmlsZU5hbWUpO1xuICBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkJsb2IpIHtcbiAgICBjb25zdCBibG9iT3V0cHV0ID0gZG9jLm91dHB1dChPdXRwdXRUeXBlLkJsb2IpO1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGJsb2I6IGJsb2JPdXRwdXQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBkYXRhVXJpU3RyaW5nOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZywge1xuICAgICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBhcnJheUJ1ZmZlcjogZG9jLm91dHB1dChPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSxcbiAgICB9O1xuICB9IGVsc2VcbiAgICBkb2Mub3V0cHV0KHBhcmFtLm91dHB1dFR5cGUsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICB9KTtcblxuICByZXR1cm4gcmV0dXJuT2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc1BERlJmcVRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUFBLE9BQUE7QUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtBQUF3QyxTQUFBRyxRQUFBQyxNQUFBLEVBQUFDLGNBQUEsUUFBQUMsSUFBQSxHQUFBQyxNQUFBLENBQUFELElBQUEsQ0FBQUYsTUFBQSxPQUFB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