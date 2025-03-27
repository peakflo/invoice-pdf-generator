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
            doc.text(10, currentHeight, "Requests By");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX2ZvbnQiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwianNQREZSZnFUZW1wbGF0ZSIsIl94IiwiX2pzUERGUmZxVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRidXNpbmVzczgiLCJfcHJvcHMkZGF0YSIsIl9wcm9wcyRkYXRhMiIsIl9wcm9wcyRkYXRhMyIsIl9wcm9wcyRkYXRhNCIsIl9wcm9wcyRkYXRhNSIsIl9wcm9wcyRkYXRhNiIsIl9wcm9wcyRkYXRhNyIsIl9wcm9wcyRkYXRhOCIsIl9wcm9wcyRkYXRhOSIsIl9wcm9wcyRkYXRhMTAiLCJfcHJvcHMkZGF0YTExIiwiX3Byb3BzJGRhdGExMiIsIl9wcm9wcyRkYXRhMTMiLCJfcHJvcHMkZGF0YTE0IiwiX3Byb3BzJGRhdGExNSIsIl9wcm9wcyRkYXRhMTYiLCJfcHJvcHMkZGF0YTE3IiwiX3Byb3BzJGRhdGExOCIsIl9wcm9wcyRkYXRhMTkiLCJfcHJvcHMkZGF0YTIwIiwiX3Byb3BzJGRhdGEyMSIsIl9wcm9wcyRkYXRhMjIiLCJfcHJvcHMkZGF0YTIzIiwiX3Byb3BzJGZvb3RlciIsIl9wYXJhbSRidXNpbmVzcyIsIl9wYXJhbSRkYXRhMyIsIl9wYXJhbSRkYXRhMyRkZXNjIiwicGFyYW0iLCJzcGxpdFRleHRBbmRHZXRIZWlnaHQiLCJvcHRpb25zIiwiZG9jIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsImRvY1dpZHRoIiwiZG9jSGVpZ2h0IiwiY29sb3JCbGFjayIsImNvbG9yQmx1ZSIsImNvbG9yR3JheSIsImxpZ2h0R3JheSIsIkZPTlRfVFlQRV9OT1JNQUwiLCJGT05UX1RZUEVfQk9MRCIsIkFMSUdOX1JJR0hUIiwiQUxJR05fTEVGVCIsIkFMSUdOX0NFTlRFUiIsIklTU1VFUl9BRERSRVNTX0xBQkVMIiwiSU1BR0VfQ09OVEVOVF9UWVBFIiwiQ1VTVE9NX0ZPTlRfTkFNRSIsImhlaWdodEJlbG93TG9nbyIsImN1cnJlbnRIZWlnaHQiLCJwZGZDb25maWciLCJidXNpbmVzc0FkZHJlc3MiLCJidXNpbmVzc0FkZHJlc3MyIiwiYnVzaW5lc3NBZGRyZXNzMyIsImhlYWRlcnMiLCJ2YWx1ZXMiLCJzaXplIiwiaGVpZ2h0SGVhZGVycyIsImRldGFpbHNUZXh0IiwiX2RldGFpbHNUZXh0IiwidGRXaWR0aCIsImdldFRkV2lkdGhEaW1lbnNpb25zIiwiYWRkVGFibGVIZWFkZXJCb2FyZGVyIiwiYWRkVGFibGVCb2R5Qm9hcmRlciIsImFkZFRhYmxlSGVhZGVyIiwidGFibGVCb2R5TGVuZ3RoIiwiX2k0IiwiYWRkRGVzYyIsImRpRGF0YSIsIm5vdGVEYXRhIiwicmV0dXJuT2JqIiwiYmxvYk91dHB1dCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJfZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJsZWZ0U2hpZnQiLCJyZXN1bHQiLCJkYXRhIiwiaGVhZGVyIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkIiwiX3BhcmFtJGRhdGEkaGVhZGVyV2lkMiIsInNoaWZ0Iiwid2lkdGgiLCJoZWFkZXJXaWR0aCIsIm91dHB1dFR5cGUiLCJyZXR1cm5Kc1BERkRvY09iamVjdCIsImZpbGVOYW1lIiwib3JpZW50YXRpb25MYW5kc2NhcGUiLCJsb2dvIiwic3JjIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJ1c2luZXNzIiwibmFtZSIsImFkZHJlc3MiLCJhZGRyZXNzTGluZTIiLCJhZGRyZXNzTGluZTMiLCJlbWFpbF8xIiwiY291bnRyeSIsInRheE51bWJlciIsInBob25lIiwibGFiZWwiLCJzdWJUb3RhbExhYmVsIiwiZHBwTmlsYWlMYWluTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwiY29sMSIsImNvbDIiLCJkZWxpdmVyeUluc3RydWN0aW9ucyIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIk1hdGgiLCJtYXgiLCJ1bmRlZmluZWQiLCJsaW5lIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRfaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2k0Iiwic2V0RHJhd0NvbG9yIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzdWJUb3RhbCIsInJvdzEiLCJyb3cyIiwidG90YWwiLCJzZXRQYWdlIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTIkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL1JGUS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4uL2ZvbnRcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZyxcbiAqICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHtcbiAqICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAqICAgICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgICAgICAgfSxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0cmluZyxcbiAqICAgICAgIGNvbDE6IHN0cmluZ1tdLFxuICogICAgICAgY29sMjogc3RyaW5nW11cbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGUmZxVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgICBwaG9uZTogcHJvcHMuYnVzaW5lc3M/LnBob25lIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRwcE5pbGFpTGFpbkxhYmVsOiBwcm9wcy5kYXRhPy5kcHBOaWxhaUxhaW5MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTFMYWJlbDogcHJvcHMuZGF0YT8uZGF0ZTFMYWJlbCB8fCBcIlwiLFxuICAgICAgbnVtOiBwcm9wcy5kYXRhPy5udW0gfHwgXCJcIixcbiAgICAgIGRhdGUyTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUyTGFiZWwgfHwgXCJcIixcbiAgICAgIG5ldFRlcm1MYWJlbDogcHJvcHMuZGF0YT8ubmV0VGVybUxhYmVsIHx8IFwiXCIsXG4gICAgICBkYXRlMTogcHJvcHMuZGF0YT8uZGF0ZTEgfHwgXCJcIixcbiAgICAgIGRhdGUyOiBwcm9wcy5kYXRhPy5kYXRlMiB8fCBcIlwiLFxuICAgICAgbmV0VGVybTogcHJvcHMuZGF0YT8ubmV0VGVybSB8fCBcIlwiLFxuICAgICAgaGVhZGVyQm9yZGVyOiBwcm9wcy5kYXRhPy5oZWFkZXJCb3JkZXIgfHwgZmFsc2UsXG4gICAgICB0YWJsZUJvZHlCb3JkZXI6IHByb3BzLmRhdGE/LnRhYmxlQm9keUJvcmRlciB8fCBmYWxzZSxcbiAgICAgIGhlYWRlcjogcHJvcHMuZGF0YT8uaGVhZGVyIHx8IFtdLFxuICAgICAgaGVhZGVyV2lkdGg6IHByb3BzLmRhdGE/LmhlYWRlcldpZHRoIHx8IFtdLFxuICAgICAgdGFibGU6IHByb3BzLmRhdGE/LnRhYmxlIHx8IFtdLFxuICAgICAgZGVzY0xhYmVsOiBwcm9wcy5kYXRhPy5kZXNjTGFiZWwgfHwgXCJcIixcbiAgICAgIHJlcXVlc3RlZEJ5OiBwcm9wcy5kYXRhPy5yZXF1ZXN0ZWRCeSB8fCBcIlwiLFxuICAgICAgZGVzYzogcHJvcHMuZGF0YT8uZGVzYyB8fCBcIlwiLFxuICAgICAgY3JlZGl0Tm90ZUxhYmVsOiBwcm9wcy5kYXRhPy5jcmVkaXROb3RlTGFiZWwgfHwgXCJcIixcbiAgICAgIG5vdGU6IHByb3BzLmRhdGE/Lm5vdGUgfHwgXCJcIixcbiAgICAgIGNvbDE6IHByb3BzLmRhdGE/LmNvbDEgfHwgW10sXG4gICAgICBjb2wyOiBwcm9wcy5kYXRhPy5jb2wyIHx8IFtdLFxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHByb3BzLmRhdGE/LmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zIHx8IFwiXCIsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHRleHQ6IHByb3BzLmZvb3Rlcj8udGV4dCB8fCBcIlwiLFxuICAgIH0sXG4gICAgcGFnZUVuYWJsZTogcHJvcHMucGFnZUVuYWJsZSB8fCB0cnVlLFxuICAgIHBhZ2VMYWJlbDogcHJvcHMucGFnZUxhYmVsIHx8IFwiUGFnZVwiLFxuICB9O1xuXG4gIGNvbnN0IHNwbGl0VGV4dEFuZEdldEhlaWdodCA9ICh0ZXh0LCBzaXplKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBkb2Muc3BsaXRUZXh0VG9TaXplKHRleHQsIHNpemUpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBsaW5lcyxcbiAgICAgIGhlaWdodDogZG9jLmdldFRleHREaW1lbnNpb25zKGxpbmVzKS5oLFxuICAgIH07XG4gIH07XG4gIGlmIChwYXJhbS5kYXRhLnRhYmxlICYmIHBhcmFtLmRhdGEudGFibGUubGVuZ3RoKSB7XG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVbMF0ubGVuZ3RoICE9IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aClcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGhlYWRlciBhbmQgdGFibGUgY29sdW1uIG11c3QgYmUgZXF1YWwuXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBvcmllbnRhdGlvbjogcGFyYW0ub3JpZW50YXRpb25MYW5kc2NhcGUgPyBcImxhbmRzY2FwZVwiIDogXCJcIixcbiAgICBjb21wcmVzc1BkZjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBkb2MgPSBuZXcganNQREYob3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2VXaWR0aCA9IGRvYy5nZXRQYWdlV2lkdGgoKTtcbiAgY29uc3QgcGFnZUhlaWdodCA9IGRvYy5nZXRQYWdlSGVpZ2h0KCkgLSAyNTsgLy8yNSBpcyBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRvY1dpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICBjb25zdCBkb2NIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbG9yQmxhY2sgPSBcIiMwMDAwMDBcIjtcbiAgY29uc3QgY29sb3JCbHVlID0gXCIjMzM2N2Q2XCI7XG4gIGNvbnN0IGNvbG9yR3JheSA9IFwiIzRkNGU1M1wiO1xuICBjb25zdCBsaWdodEdyYXkgPSBcIiM4ODg4ODhcIjtcbiAgY29uc3QgRk9OVF9UWVBFX05PUk1BTCA9IFwibm9ybWFsXCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9CT0xEID0gXCJib2xkXCI7XG4gIGNvbnN0IEFMSUdOX1JJR0hUID0gXCJyaWdodFwiO1xuICBjb25zdCBBTElHTl9MRUZUID0gXCJsZWZ0XCI7XG4gIGNvbnN0IEFMSUdOX0NFTlRFUiA9IFwiY2VudGVyXCI7XG4gIGNvbnN0IElTU1VFUl9BRERSRVNTX0xBQkVMID0gXCJDb21wYW55IEFkZHJlc3NcIjtcbiAgY29uc3QgSU1BR0VfQ09OVEVOVF9UWVBFID0gXCJQTkdcIjtcbiAgY29uc3QgQ1VTVE9NX0ZPTlRfTkFNRSA9IFwiY3VzdG9tRm9udFwiO1xuICB2YXIgaGVpZ2h0QmVsb3dMb2dvO1xuXG4gIC8vc3RhcnRpbmcgYXQgMTVtbVxuICBsZXQgY3VycmVudEhlaWdodCA9IDE1O1xuXG4gIGNvbnN0IHBkZkNvbmZpZyA9IHtcbiAgICBoZWFkZXJUZXh0U2l6ZTogMjAsXG4gICAgbGFiZWxUaXRsZVNpemU6IDE2LFxuICAgIGxhYmVsVGV4dFNpemU6IDEyLFxuICAgIGZpZWxkVGV4dFNpemU6IDEwLFxuICAgIHRleHRTaXplU21hbGw6IDgsXG4gICAgbGluZUhlaWdodDogNixcbiAgICBzdWJMaW5lSGVpZ2h0OiA0LFxuICB9O1xuICBkb2MuYWRkRmlsZVRvVkZTKFwiY3VzdG9tRm9udC50dGZcIiwgZ2V0Q3VzdG9tRm9udCgpKTtcbiAgZG9jLmFkZEZvbnQoXCJjdXN0b21Gb250LnR0ZlwiLCBDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSk7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuaGVhZGVyVGV4dFNpemUpO1xuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBpZiAocGFyYW0ubG9nby5zcmMpIHtcbiAgICBkb2MuYWRkSW1hZ2UoXG4gICAgICBwYXJhbS5sb2dvLnNyYyxcbiAgICAgIElNQUdFX0NPTlRFTlRfVFlQRSxcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQgLSA1ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wLFxuICAgICAgcGFyYW0ubG9nby53aWR0aCxcbiAgICAgIHBhcmFtLmxvZ28uaGVpZ2h0XG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGFyYW0ubG9nby5oZWlnaHQgKyBwYXJhbS5sb2dvLm1hcmdpbi50b3A7XG4gIH1cblxuICBpZiAocGFyYW0uYnVzaW5lc3MubmFtZSkge1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIHBhcmFtLmJ1c2luZXNzLm5hbWUsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgaGVpZ2h0QmVsb3dMb2dvID0gY3VycmVudEhlaWdodDtcbiAgfVxuXG4gIGlmIChwYXJhbT8uYnVzaW5lc3M/LmFkZHJlc3MpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIElTU1VFUl9BRERSRVNTX0xBQkVMLFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGNvbnN0IGJ1c2luZXNzQWRkcmVzcyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3MsXG4gICAgICBkb2NXaWR0aCAqIDAuNFxuICAgICk7XG4gICAgZG9jLnRleHQoXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgYnVzaW5lc3NBZGRyZXNzLnRleHQsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gYnVzaW5lc3NBZGRyZXNzLmhlaWdodDtcbiAgICBjb25zdCBidXNpbmVzc0FkZHJlc3MyID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgcGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUyLFxuICAgICAgZG9jV2lkdGggKiAwLjRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGJ1c2luZXNzQWRkcmVzczIudGV4dCxcbiAgICAgIEFMSUdOX0xFRlRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBidXNpbmVzc0FkZHJlc3MyLmhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMpIHtcbiAgICAgIGNvbnN0IGJ1c2luZXNzQWRkcmVzczMgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMyxcbiAgICAgICAgZG9jV2lkdGggKiAwLjRcbiAgICAgICk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBidXNpbmVzc0FkZHJlc3MzLnRleHQsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IGJ1c2luZXNzQWRkcmVzczMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5jb3VudHJ5KSB7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5jb3VudHJ5LFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuZW1haWxfMSkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuZW1haWxfMSxcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICB9XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5idXNpbmVzcy5waG9uZSkge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgXCJUZWwgTnVtYmVyOiBcIixcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDI3ICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MucGhvbmVcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBcIlRheCBOdW1iZXI6IFwiLFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICBkb2MudGV4dChcbiAgICAgICAgMjcgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgICBjdXJyZW50SGVpZ2h0LFxuICAgICAgICBwYXJhbS5idXNpbmVzcy50YXhOdW1iZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtLmRhdGEuY29sMSAmJiBwYXJhbS5kYXRhLmNvbDIpIHtcbiAgICAvLyBQTyBOdW1iZXIgYW5kIG90aGVyIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICBjb25zdCBoZWFkZXJzID0gcGFyYW0uZGF0YS5jb2wxO1xuICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtLmRhdGEuY29sMjtcbiAgICBjb25zdCBzaXplID0gaGVhZGVycy5sZW5ndGg7XG4gICAgdmFyIGhlaWdodEhlYWRlcnMgPSBoZWlnaHRCZWxvd0xvZ287XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IGRldGFpbHNUZXh0ID0gaGVhZGVyc1tpXSArIFwiOiBcIjtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMzAsIGhlaWdodEhlYWRlcnMsIGRldGFpbHNUZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBoZWlnaHRIZWFkZXJzICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICAgIH1cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBkZXRhaWxzVGV4dCA9IHZhbHVlc1tpXTtcbiAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC0gMTAsIGhlaWdodEJlbG93TG9nbywgZGV0YWlsc1RleHQsIEFMSUdOX1JJR0hUKTtcbiAgICAgIGhlaWdodEJlbG93TG9nbyArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50SGVpZ2h0ID0gTWF0aC5tYXgoY3VycmVudEhlaWdodCwgaGVpZ2h0QmVsb3dMb2dvKTtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUpO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgMjtcblxuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplIC0gNik7XG5cbiAgaWYgKHBhcmFtLmRhdGEubGFiZWwpIHtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEubGFiZWwsIEFMSUdOX0NFTlRFUik7XG4gIH1cblxuICBkb2Muc2V0Rm9udCh1bmRlZmluZWQsIEZPTlRfVFlQRV9CT0xEKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAvL2xpbmUgYnJlYWtlciBEb2MgdGV4dFxuICBpZiAocGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgLy9UQUJMRSBQQVJUXG5cbiAgY29uc3QgdGRXaWR0aCA9IChwYWdlV2lkdGggLSAyMCkgLyBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKSB7XG4gICAgbGV0IGxlZnRTaGlmdCA9IDEwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgc2hpZnQ6IGxlZnRTaGlmdCxcbiAgICAgICAgd2lkdGg6IHBhcmFtLmRhdGEuaGVhZGVyV2lkdGg/LltpXVxuICAgICAgICAgID8gKHBhZ2VXaWR0aCAtIDIwKSAqIHBhcmFtLmRhdGEuaGVhZGVyV2lkdGhbaV1cbiAgICAgICAgICA6IHRkV2lkdGgsXG4gICAgICB9KTtcbiAgICAgIGxlZnRTaGlmdCA9XG4gICAgICAgIGxlZnRTaGlmdCArXG4gICAgICAgIChwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhYmxlSGVhZGVyQm9hcmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgY3VycmVudEhlaWdodCArPSAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIDdcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgLT0gMjtcbiAgfTtcbiAgY29uc3QgYWRkVGFibGVCb2R5Qm9hcmRlciA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvYy5yZWN0KFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2ldPy5zaGlmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8ud2lkdGgsXG4gICAgICAgIGxpbmVIZWlnaHRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRUYWJsZUhlYWRlciA9ICgpID0+IHtcbiAgICBpZiAocGFyYW0uZGF0YS5oZWFkZXJCb3JkZXIpIGFkZFRhYmxlSGVhZGVyQm9hcmRlcigpO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodCArIDI7XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICAvL2JvcmRlciBjb2xvclxuICAgIGRvYy5zZXREcmF3Q29sb3IoY29sb3JHcmF5KTtcbiAgICAvLyBjdXJyZW50SGVpZ2h0ICs9IDI7XG5cbiAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgcGFyYW0uZGF0YS5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgZG9jLnRleHQocm93LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQpO1xuICAgIH0pO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnNldExpbmVXaWR0aCgwLjUpO1xuICAgIGRvYy5saW5lKDEwLCBjdXJyZW50SGVpZ2h0LCBkb2NXaWR0aCAtIDEwLCBjdXJyZW50SGVpZ2h0KTtcbiAgfTtcbiAgYWRkVGFibGVIZWFkZXIoKTtcblxuICAvL3RhYmxlIGJvZHlcbiAgY29uc3QgdGFibGVCb2R5TGVuZ3RoID0gcGFyYW0uZGF0YS50YWJsZS5sZW5ndGg7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuXG4gIHBhcmFtLmRhdGEudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgIC8vZ2V0IG5heCBoZWlnaHQgZm9yIHRoZSBjdXJyZW50IHJvd1xuICAgIGxldCByb3dzSGVpZ2h0ID0gW107XG4gICAgY29uc3QgZ2V0Um93c0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcudGV4dFNpemVTbWFsbCk7XG4gICAgICBjb25zdCB0ZFdpZHRoRGltZW5zaW9ucyA9IGdldFRkV2lkdGhEaW1lbnNpb25zKCk7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICAgIC8vc2l6ZSBzaG91bGQgYmUgdGhlIHNhbWUgdXNlZCBpbiBvdGhlciB0ZFxuICAgICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baW5kZXhdPy53aWR0aCAtIDFcbiAgICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG4gICAgICAgIHJvd3NIZWlnaHQucHVzaChpdGVtLmhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGdldFJvd3NIZWlnaHQoKTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLm1heCguLi5yb3dzSGVpZ2h0KTtcblxuICAgIC8vYm9keSBib3JkZXJzXG4gICAgaWYgKHBhcmFtLmRhdGEudGFibGVCb2R5Qm9yZGVyKSBhZGRUYWJsZUJvZHlCb2FyZGVyKG1heEhlaWdodCArIDEpO1xuXG4gICAgLy9kaXNwbGF5IHRleHQgaW50byByb3cgY2VsbHNcbiAgICAvL09iamVjdC5lbnRyaWVzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2wsIGluZGV4KSB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyciwgaW5kZXgpIHtcbiAgICAgIGxldCBpdGVtID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICByci50b1N0cmluZygpLFxuICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICApOyAvL21pbnVzIDEsIHRvIGZpeCB0aGUgcGFkZGluZyBpc3N1ZSBiZXR3ZWVuIGJvcmRlcnNcblxuICAgICAgZG9jLnRleHQoaXRlbS50ZXh0LCB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8uc2hpZnQsIGN1cnJlbnRIZWlnaHQgKyA1KTtcbiAgICB9KTtcblxuICAgIC8vcHJlLWluY3JlYXNlIGN1cnJlbnRIZWlnaHQgdG8gY2hlY2sgdGhlIGhlaWdodCBiYXNlZCBvbiBuZXh0IHJvd1xuICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgIGlmIChpbmRleCArIDEgPCB0YWJsZUJvZHlMZW5ndGgpIGFkZFRhYmxlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgLy9yZXNldCB0aGUgaGVpZ2h0IHRoYXQgd2FzIGluY3JlYXNlZCB0byBjaGVjayB0aGUgbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoICYmIGN1cnJlbnRIZWlnaHQgPiAzMClcbiAgICAgIC8vIGNoZWNrIGlmIG5ldyBwYWdlXG4gICAgICBjdXJyZW50SGVpZ2h0IC09IG1heEhlaWdodDtcblxuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC4xKTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gICAgY3VycmVudEhlaWdodCArPSBtYXhIZWlnaHQgKyAyO1xuXG4gICAgLy90ZCBib3JkZXIgaGVpZ2h0XG4gICAgY3VycmVudEhlaWdodCArPSA0O1xuICB9KTtcblxuICAvLyBubyB0YWJsZSBkYXRhXG4gIGlmICh0YWJsZUJvZHlMZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IDY7XG4gICAgZG9jLnRleHQoXCJObyBEYXRhXCIsIGRvY1dpZHRoIC8gMiwgY3VycmVudEhlaWdodCk7XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBkb2Muc2V0Rm9udFNpemUoMTApO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChcbiAgICBwYXJhbS5kYXRhLnN1YlRvdGFsIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cxIHx8XG4gICAgcGFyYW0uZGF0YS5yb3cyIHx8XG4gICAgcGFyYW0uZGF0YS50b3RhbFxuICApIHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCB8fFxuICAgICAgKGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IC0gMTAgJiYgZG9jLmdldE51bWJlck9mUGFnZXMoKSA+IDEpXG4gICAgKSB7XG4gICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgLSAxO1xuICAvLyAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG5cbiAgLy9hZGQgbnVtIG9mIHBhZ2VzIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZG9jLmdldE51bWJlck9mUGFnZXMoKTsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcblxuICAgICAgaWYgKHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICAgICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgICAgIGRvYy5zZXRQYWdlKGkpO1xuICAgICAgICBkb2MudGV4dChcbiAgICAgICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIiBcIiArIGkgKyBcIiAvIFwiICsgZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgICAgICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSA2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVxdWVzdGVkIGJ5XG4gIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5KSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgXCJSZXF1ZXN0cyBCeVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkubmFtZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcblxuICAgIGlmIChwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5LnBob25lKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLnJlcXVlc3RlZEJ5LnBob25lKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkRGVzYyA9ICgpID0+IHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuXG4gICAgaWYgKHBhcmFtLmRhdGE/LmRlc2MubGVuZ3RoID4gMCkge1xuICAgICAgY3VycmVudEhlaWdodCArPSAxO1xuICAgICAgcGFyYW0uZGF0YT8uZGVzYz8uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoZWwsIHBhZ2VXaWR0aCAtIDQwKTtcbiAgICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkZXNjLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5kZXNjTGFiZWwpO1xuICAgICAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRlc2MudGV4dCk7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gZGVzYy5oZWlnaHQgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwYXJhbS5kYXRhPy5kZXNjPy5sZW5ndGggPiAwKSBhZGREZXNjKCk7XG5cbiAgLy8gRGVsaXZlcnkgSW5zdHJ1Y3Rpb25zXG4gIGlmIChwYXJhbS5kYXRhLmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBkaURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5kYXRhLmRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zLFxuICAgICAgcGFnZVdpZHRoIC0gMjBcbiAgICApO1xuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgZGlEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIkRlbGl2ZXJ5IEluc3RydWN0aW9uczpcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIGRpRGF0YS50ZXh0KTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0ICsgZGlEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vIE5vdGVcbiAgaWYgKHBhcmFtLmRhdGEubm90ZSkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxhYmVsVGV4dFNpemU7XG4gICAgY29uc3Qgbm90ZURhdGEgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQocGFyYW0uZGF0YS5ub3RlLCBwYWdlV2lkdGggLSAyMCk7XG5cbiAgICBpZiAoY3VycmVudEhlaWdodCArIG5vdGVEYXRhLmhlaWdodCA+IHBhZ2VIZWlnaHQpIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgfVxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBcIk5vdGVcIik7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIG5vdGVEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBub3RlRGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvL2FkZCBudW0gb2YgcGFnZSBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID09PSAxICYmIHBhcmFtLnBhZ2VFbmFibGUpIHtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBkb2NIZWlnaHQgLSAxMCwgcGFyYW0uZm9vdGVyLnRleHQsIEFMSUdOX0NFTlRFUik7XG4gICAgZG9jLnRleHQoXG4gICAgICBwYXJhbS5wYWdlTGFiZWwgKyBcIjEgLyAxXCIsXG4gICAgICBkb2NXaWR0aCAtIDIwLFxuICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIDZcbiAgICApO1xuICB9XG5cbiAgbGV0IHJldHVybk9iaiA9IHtcbiAgICBwYWdlc051bWJlcjogZG9jLmdldE51bWJlck9mUGFnZXMoKSxcbiAgfTtcblxuICBpZiAocGFyYW0ucmV0dXJuSnNQREZEb2NPYmplY3QpIHtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBqc1BERkRvY09iamVjdDogZG9jLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5TYXZlKSBkb2Muc2F2ZShwYXJhbS5maWxlTmFtZSk7XG4gIGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuQmxvYikge1xuICAgIGNvbnN0IGJsb2JPdXRwdXQgPSBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQmxvYik7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYmxvYjogYmxvYk91dHB1dCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmFtLm91dHB1dFR5cGUgPT09IE91dHB1dFR5cGUuRGF0YVVyaVN0cmluZykge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGRhdGFVcmlTdHJpbmc6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nLCB7XG4gICAgICAgIGZpbGVuYW1lOiBwYXJhbS5maWxlTmFtZSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5BcnJheUJ1ZmZlcikge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGFycmF5QnVmZmVyOiBkb2Mub3V0cHV0KE91dHB1dFR5cGUuQXJyYXlCdWZmZXIpLFxuICAgIH07XG4gIH0gZWxzZVxuICAgIGRvYy5vdXRwdXQocGFyYW0ub3V0cHV0VHlwZSwge1xuICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzUERGUmZxVGVtcGxhdGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUEsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNBQSxPQUFBO0FBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO0FBQXdDLFNBQUFHLFFBQUFDLE1BQUEsRUFBQUMsY0FBQSxRQUFBQyxJQUFBLEdBQUFDLE1BQUEsQ0FBQUQsSUFBQSxDQUFBRixNQUFBLE9BQUFH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