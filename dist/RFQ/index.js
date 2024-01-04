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
    var _props$logo, _props$logo2, _props$logo3, _props$logo4, _props$logo4$margin, _props$logo5, _props$logo5$margin, _props$business, _props$business2, _props$business3, _props$business4, _props$business5, _props$business6, _props$business7, _props$business8, _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data7, _props$data8, _props$data9, _props$data10, _props$data11, _props$data12, _props$data13, _props$data14, _props$data15, _props$data16, _props$data17, _props$data18, _props$data19, _props$data20, _props$data21, _props$data22, _props$footer, _param$business, _param$data3, _param$data3$desc;
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
              descLabel: ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.descLabel) || "",
              requestedBy: ((_props$data16 = props.data) === null || _props$data16 === void 0 ? void 0 : _props$data16.requestedBy) || "",
              desc: ((_props$data17 = props.data) === null || _props$data17 === void 0 ? void 0 : _props$data17.desc) || "",
              creditNoteLabel: ((_props$data18 = props.data) === null || _props$data18 === void 0 ? void 0 : _props$data18.creditNoteLabel) || "",
              note: ((_props$data19 = props.data) === null || _props$data19 === void 0 ? void 0 : _props$data19.note) || "",
              col1: ((_props$data20 = props.data) === null || _props$data20 === void 0 ? void 0 : _props$data20.col1) || [],
              col2: ((_props$data21 = props.data) === null || _props$data21 === void 0 ? void 0 : _props$data21.col2) || [],
              deliveryInstructions: ((_props$data22 = props.data) === null || _props$data22 === void 0 ? void 0 : _props$data22.deliveryInstructions) || ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX2pzcGRmIiwiX2ZvbnQiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIk91dHB1dFR5cGUiLCJTYXZlIiwiRGF0YVVyaVN0cmluZyIsIkRhdGFVcmkiLCJEYXRhVXJsTmV3V2luZG93IiwiQmxvYiIsIkFycmF5QnVmZmVyIiwianNQREZSZnFUZW1wbGF0ZSIsIl94IiwiX2pzUERGUmZxVGVtcGxhdGUiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInByb3BzIiwiX3Byb3BzJGxvZ28iLCJfcHJvcHMkbG9nbzIiLCJfcHJvcHMkbG9nbzMiLCJfcHJvcHMkbG9nbzQiLCJfcHJvcHMkbG9nbzQkbWFyZ2luIiwiX3Byb3BzJGxvZ281IiwiX3Byb3BzJGxvZ281JG1hcmdpbiIsIl9wcm9wcyRidXNpbmVzcyIsIl9wcm9wcyRidXNpbmVzczIiLCJfcHJvcHMkYnVzaW5lc3MzIiwiX3Byb3BzJGJ1c2luZXNzNCIsIl9wcm9wcyRidXNpbmVzczUiLCJfcHJvcHMkYnVzaW5lc3M2IiwiX3Byb3BzJGJ1c2luZXNzNyIsIl9wcm9wcyRidXNpbmVzczgiLCJfcHJvcHMkZGF0YSIsIl9wcm9wcyRkYXRhMiIsIl9wcm9wcyRkYXRhMyIsIl9wcm9wcyRkYXRhNCIsIl9wcm9wcyRkYXRhNSIsIl9wcm9wcyRkYXRhNiIsIl9wcm9wcyRkYXRhNyIsIl9wcm9wcyRkYXRhOCIsIl9wcm9wcyRkYXRhOSIsIl9wcm9wcyRkYXRhMTAiLCJfcHJvcHMkZGF0YTExIiwiX3Byb3BzJGRhdGExMiIsIl9wcm9wcyRkYXRhMTMiLCJfcHJvcHMkZGF0YTE0IiwiX3Byb3BzJGRhdGExNSIsIl9wcm9wcyRkYXRhMTYiLCJfcHJvcHMkZGF0YTE3IiwiX3Byb3BzJGRhdGExOCIsIl9wcm9wcyRkYXRhMTkiLCJfcHJvcHMkZGF0YTIwIiwiX3Byb3BzJGRhdGEyMSIsIl9wcm9wcyRkYXRhMjIiLCJfcHJvcHMkZm9vdGVyIiwiX3BhcmFtJGJ1c2luZXNzIiwiX3BhcmFtJGRhdGEzIiwiX3BhcmFtJGRhdGEzJGRlc2MiLCJwYXJhbSIsInNwbGl0VGV4dEFuZEdldEhlaWdodCIsIm9wdGlvbnMiLCJkb2MiLCJwYWdlV2lkdGgiLCJwYWdlSGVpZ2h0IiwiZG9jV2lkdGgiLCJkb2NIZWlnaHQiLCJjb2xvckJsYWNrIiwiY29sb3JCbHVlIiwiY29sb3JHcmF5IiwibGlnaHRHcmF5IiwiRk9OVF9UWVBFX05PUk1BTCIsIkZPTlRfVFlQRV9CT0xEIiwiQUxJR05fUklHSFQiLCJBTElHTl9MRUZUIiwiQUxJR05fQ0VOVEVSIiwiSVNTVUVSX0FERFJFU1NfTEFCRUwiLCJJTUFHRV9DT05URU5UX1RZUEUiLCJDVVNUT01fRk9OVF9OQU1FIiwiaGVpZ2h0QmVsb3dMb2dvIiwiY3VycmVudEhlaWdodCIsInBkZkNvbmZpZyIsImJ1c2luZXNzQWRkcmVzcyIsImJ1c2luZXNzQWRkcmVzczIiLCJidXNpbmVzc0FkZHJlc3MzIiwiaGVhZGVycyIsInZhbHVlcyIsInNpemUiLCJoZWlnaHRIZWFkZXJzIiwiZGV0YWlsc1RleHQiLCJfZGV0YWlsc1RleHQiLCJ0ZFdpZHRoIiwiZ2V0VGRXaWR0aERpbWVuc2lvbnMiLCJhZGRUYWJsZUhlYWRlckJvYXJkZXIiLCJhZGRUYWJsZUJvZHlCb2FyZGVyIiwiYWRkVGFibGVIZWFkZXIiLCJ0YWJsZUJvZHlMZW5ndGgiLCJfaTQiLCJhZGREZXNjIiwiZGlEYXRhIiwibm90ZURhdGEiLCJyZXR1cm5PYmoiLCJibG9iT3V0cHV0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIl9nZXRUZFdpZHRoRGltZW5zaW9ucyIsImxlZnRTaGlmdCIsInJlc3VsdCIsImRhdGEiLCJoZWFkZXIiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQiLCJfcGFyYW0kZGF0YSRoZWFkZXJXaWQyIiwic2hpZnQiLCJ3aWR0aCIsImhlYWRlcldpZHRoIiwib3V0cHV0VHlwZSIsInJldHVybkpzUERGRG9jT2JqZWN0IiwiZmlsZU5hbWUiLCJvcmllbnRhdGlvbkxhbmRzY2FwZSIsImxvZ28iLCJzcmMiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwiYnVzaW5lc3MiLCJuYW1lIiwiYWRkcmVzcyIsImFkZHJlc3NMaW5lMiIsImFkZHJlc3NMaW5lMyIsImVtYWlsXzEiLCJjb3VudHJ5IiwidGF4TnVtYmVyIiwicGhvbmUiLCJsYWJlbCIsInN1YlRvdGFsTGFiZWwiLCJkYXRlMUxhYmVsIiwibnVtIiwiZGF0ZTJMYWJlbCIsIm5ldFRlcm1MYWJlbCIsImRhdGUxIiwiZGF0ZTIiLCJuZXRUZXJtIiwiaGVhZGVyQm9yZGVyIiwidGFibGVCb2R5Qm9yZGVyIiwidGFibGUiLCJkZXNjTGFiZWwiLCJyZXF1ZXN0ZWRCeSIsImRlc2MiLCJjcmVkaXROb3RlTGFiZWwiLCJub3RlIiwiY29sMSIsImNvbDIiLCJkZWxpdmVyeUluc3RydWN0aW9ucyIsImZvb3RlciIsInRleHQiLCJwYWdlRW5hYmxlIiwicGFnZUxhYmVsIiwibGluZXMiLCJzcGxpdFRleHRUb1NpemUiLCJnZXRUZXh0RGltZW5zaW9ucyIsImgiLCJFcnJvciIsIm9yaWVudGF0aW9uIiwiY29tcHJlc3NQZGYiLCJqc1BERiIsImdldFBhZ2VXaWR0aCIsImdldFBhZ2VIZWlnaHQiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiaGVhZGVyVGV4dFNpemUiLCJsYWJlbFRpdGxlU2l6ZSIsImxhYmVsVGV4dFNpemUiLCJmaWVsZFRleHRTaXplIiwidGV4dFNpemVTbWFsbCIsImxpbmVIZWlnaHQiLCJzdWJMaW5lSGVpZ2h0IiwiYWRkRmlsZVRvVkZTIiwiZ2V0Q3VzdG9tRm9udCIsImFkZEZvbnQiLCJzZXRGb250Iiwic2V0Rm9udFNpemUiLCJzZXRUZXh0Q29sb3IiLCJhZGRJbWFnZSIsIk1hdGgiLCJtYXgiLCJ1bmRlZmluZWQiLCJsaW5lIiwidGRXaWR0aERpbWVuc2lvbnMiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2kyIiwicmVjdCIsIl90ZFdpZHRoRGltZW5zaW9ucyRfaTMiLCJfdGRXaWR0aERpbWVuc2lvbnMkX2k0Iiwic2V0RHJhd0NvbG9yIiwicm93IiwiaW5kZXgiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW4iLCJzZXRMaW5lV2lkdGgiLCJyb3dzSGVpZ2h0IiwiZ2V0Um93c0hlaWdodCIsInJyIiwiX3RkV2lkdGhEaW1lbnNpb25zJGluMiIsIml0ZW0iLCJ0b1N0cmluZyIsIm1heEhlaWdodCIsIl90ZFdpZHRoRGltZW5zaW9ucyRpbjMiLCJfdGRXaWR0aERpbWVuc2lvbnMkaW40IiwiZ2V0TnVtYmVyT2ZQYWdlcyIsImFkZFBhZ2UiLCJzdWJUb3RhbCIsInJvdzEiLCJyb3cyIiwidG90YWwiLCJzZXRQYWdlIiwiX3BhcmFtJGRhdGEiLCJfcGFyYW0kZGF0YTIiLCJfcGFyYW0kZGF0YTIkZGVzYyIsImVsIiwicGFnZXNOdW1iZXIiLCJqc1BERkRvY09iamVjdCIsInNhdmUiLCJvdXRwdXQiLCJibG9iIiwiZGF0YVVyaVN0cmluZyIsImZpbGVuYW1lIiwiYXJyYXlCdWZmZXIiLCJhYnJ1cHQiLCJzdG9wIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL1JGUS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IFwianNwZGYtYXV0b3RhYmxlXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21Gb250IH0gZnJvbSBcIi4uL2ZvbnRcIjtcblxuY29uc3QgT3V0cHV0VHlwZSA9IHtcbiAgU2F2ZTogXCJzYXZlXCIsIC8vc2F2ZSBwZGYgYXMgYSBmaWxlXG4gIERhdGFVcmlTdHJpbmc6IFwiZGF0YXVyaXN0cmluZ1wiLCAvL3JldHVybnMgdGhlIGRhdGEgdXJpIHN0cmluZ1xuICBEYXRhVXJpOiBcImRhdGF1cmlcIiwgLy9vcGVucyB0aGUgZGF0YSB1cmkgaW4gY3VycmVudCB3aW5kb3dcbiAgRGF0YVVybE5ld1dpbmRvdzogXCJkYXRhdXJsbmV3d2luZG93XCIsIC8vb3BlbnMgdGhlIGRhdGEgdXJpIGluIG5ldyB3aW5kb3dcbiAgQmxvYjogXCJibG9iXCIsIC8vcmV0dXJuIGJsb2IgZm9ybWF0IG9mIHRoZSBkb2MsXG4gIEFycmF5QnVmZmVyOiBcImFycmF5YnVmZmVyXCIsIC8vcmV0dXJuIEFycmF5QnVmZmVyIGZvcm1hdFxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgICAgIHRheE51bWJlcj86IHN0cmluZyxcbiAqICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgIH0sXG4gKiAgIGRhdGE/OiB7XG4gKiAgICAgICBsYWJlbD86IHN0cmluZyxcbiAqICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZyxcbiAqICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUxPzogc3RyaW5nLFxuICogICAgICAgZGF0ZTJMYWJlbD86IHN0cmluZ1xuICogICAgICAgZGF0ZTI/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBuZXRUZXJtPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIGhlYWRlcldpZHRoPzogbnVtYmVyW10sXG4gKiAgICAgICB0YWJsZT86IGFueSxcbiAqICAgICAgIGRlc2NMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIGRlc2M/OiBzdHJpbmdbXSxcbiAqICAgICAgIG5vdGU/OiBzdHJpbmcsXG4gKiAgICAgICByZXF1ZXN0ZWRCeT86IHtcbiAqICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAqICAgICAgICAgIHBob25lPzogc3RyaW5nXG4gKiAgICAgICAgfSxcbiAqICAgICAgIHBkZlRpdGxlPzogc3RyaW5nLFxuICogICAgICAgc3RhdGljVkE/OiB7XG4gKiAgICAgICAgICBhY2NvdW50OiBzdHJpbmcsXG4gKiAgICAgICAgICBiYW5rOiBzdHJpbmcsXG4gKiAgICAgICB9LFxuICogICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0cmluZyxcbiAqICAgICAgIGNvbDE6IHN0cmluZ1tdLFxuICogICAgICAgY29sMjogc3RyaW5nW11cbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGpzUERGUmZxVGVtcGxhdGUocHJvcHMpIHtcbiAgY29uc3QgcGFyYW0gPSB7XG4gICAgb3V0cHV0VHlwZTogcHJvcHMub3V0cHV0VHlwZSB8fCBPdXRwdXRUeXBlLlNhdmUsXG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q6IHByb3BzLnJldHVybkpzUERGRG9jT2JqZWN0IHx8IGZhbHNlLFxuICAgIGZpbGVOYW1lOiBwcm9wcy5maWxlTmFtZSB8fCBcIlwiLFxuICAgIG9yaWVudGF0aW9uTGFuZHNjYXBlOiBwcm9wcy5vcmllbnRhdGlvbkxhbmRzY2FwZSB8fCBmYWxzZSxcbiAgICBsb2dvOiB7XG4gICAgICBzcmM6IHByb3BzLmxvZ28/LnNyYyB8fCBcIlwiLFxuICAgICAgd2lkdGg6IHByb3BzLmxvZ28/LndpZHRoIHx8IFwiXCIsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxvZ28/LmhlaWdodCB8fCBcIlwiLFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogcHJvcHMubG9nbz8ubWFyZ2luPy50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogcHJvcHMubG9nbz8ubWFyZ2luPy5sZWZ0IHx8IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVzaW5lc3M6IHtcbiAgICAgIG5hbWU6IHByb3BzLmJ1c2luZXNzPy5uYW1lIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzcyB8fCBcIlwiLFxuICAgICAgYWRkcmVzc0xpbmUyOiBwcm9wcy5idXNpbmVzcz8uYWRkcmVzc0xpbmUyIHx8IFwiXCIsXG4gICAgICBhZGRyZXNzTGluZTM6IHByb3BzLmJ1c2luZXNzPy5hZGRyZXNzTGluZTMgfHwgXCJcIixcbiAgICAgIGVtYWlsXzE6IHByb3BzLmJ1c2luZXNzPy5lbWFpbF8xIHx8IFwiXCIsXG4gICAgICBjb3VudHJ5OiBwcm9wcy5idXNpbmVzcz8uY291bnRyeSB8fCBcIlwiLFxuICAgICAgdGF4TnVtYmVyOiBwcm9wcy5idXNpbmVzcz8udGF4TnVtYmVyIHx8IFwiXCIsXG4gICAgICBwaG9uZTogcHJvcHMuYnVzaW5lc3M/LnBob25lIHx8IFwiXCIsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogcHJvcHMuZGF0YT8ubGFiZWwgfHwgXCJcIixcbiAgICAgIHN1YlRvdGFsTGFiZWw6IHByb3BzLmRhdGE/LnN1YlRvdGFsTGFiZWwgfHwgXCJcIixcbiAgICAgIGRhdGUxTGFiZWw6IHByb3BzLmRhdGE/LmRhdGUxTGFiZWwgfHwgXCJcIixcbiAgICAgIG51bTogcHJvcHMuZGF0YT8ubnVtIHx8IFwiXCIsXG4gICAgICBkYXRlMkxhYmVsOiBwcm9wcy5kYXRhPy5kYXRlMkxhYmVsIHx8IFwiXCIsXG4gICAgICBuZXRUZXJtTGFiZWw6IHByb3BzLmRhdGE/Lm5ldFRlcm1MYWJlbCB8fCBcIlwiLFxuICAgICAgZGF0ZTE6IHByb3BzLmRhdGE/LmRhdGUxIHx8IFwiXCIsXG4gICAgICBkYXRlMjogcHJvcHMuZGF0YT8uZGF0ZTIgfHwgXCJcIixcbiAgICAgIG5ldFRlcm06IHByb3BzLmRhdGE/Lm5ldFRlcm0gfHwgXCJcIixcbiAgICAgIGhlYWRlckJvcmRlcjogcHJvcHMuZGF0YT8uaGVhZGVyQm9yZGVyIHx8IGZhbHNlLFxuICAgICAgdGFibGVCb2R5Qm9yZGVyOiBwcm9wcy5kYXRhPy50YWJsZUJvZHlCb3JkZXIgfHwgZmFsc2UsXG4gICAgICBoZWFkZXI6IHByb3BzLmRhdGE/LmhlYWRlciB8fCBbXSxcbiAgICAgIGhlYWRlcldpZHRoOiBwcm9wcy5kYXRhPy5oZWFkZXJXaWR0aCB8fCBbXSxcbiAgICAgIHRhYmxlOiBwcm9wcy5kYXRhPy50YWJsZSB8fCBbXSxcbiAgICAgIGRlc2NMYWJlbDogcHJvcHMuZGF0YT8uZGVzY0xhYmVsIHx8IFwiXCIsXG4gICAgICByZXF1ZXN0ZWRCeTogcHJvcHMuZGF0YT8ucmVxdWVzdGVkQnkgfHwgXCJcIixcbiAgICAgIGRlc2M6IHByb3BzLmRhdGE/LmRlc2MgfHwgXCJcIixcbiAgICAgIGNyZWRpdE5vdGVMYWJlbDogcHJvcHMuZGF0YT8uY3JlZGl0Tm90ZUxhYmVsIHx8IFwiXCIsXG4gICAgICBub3RlOiBwcm9wcy5kYXRhPy5ub3RlIHx8IFwiXCIsXG4gICAgICBjb2wxOiBwcm9wcy5kYXRhPy5jb2wxIHx8IFtdLFxuICAgICAgY29sMjogcHJvcHMuZGF0YT8uY29sMiB8fCBbXSxcbiAgICAgIGRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zOiBwcm9wcy5kYXRhPy5kZWxpdmVyeUluc3RydWN0aW9ucyB8fCBcIlwiLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICB0ZXh0OiBwcm9wcy5mb290ZXI/LnRleHQgfHwgXCJcIixcbiAgICB9LFxuICAgIHBhZ2VFbmFibGU6IHByb3BzLnBhZ2VFbmFibGUgfHwgdHJ1ZSxcbiAgICBwYWdlTGFiZWw6IHByb3BzLnBhZ2VMYWJlbCB8fCBcIlBhZ2VcIixcbiAgfTtcblxuICBjb25zdCBzcGxpdFRleHRBbmRHZXRIZWlnaHQgPSAodGV4dCwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0LCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogbGluZXMsXG4gICAgICBoZWlnaHQ6IGRvYy5nZXRUZXh0RGltZW5zaW9ucyhsaW5lcykuaCxcbiAgICB9O1xuICB9O1xuICBpZiAocGFyYW0uZGF0YS50YWJsZSAmJiBwYXJhbS5kYXRhLnRhYmxlLmxlbmd0aCkge1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlWzBdLmxlbmd0aCAhPSBwYXJhbS5kYXRhLmhlYWRlci5sZW5ndGgpXG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBoZWFkZXIgYW5kIHRhYmxlIGNvbHVtbiBtdXN0IGJlIGVxdWFsLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgb3JpZW50YXRpb246IHBhcmFtLm9yaWVudGF0aW9uTGFuZHNjYXBlID8gXCJsYW5kc2NhcGVcIiA6IFwiXCIsXG4gICAgY29tcHJlc3NQZGY6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgZG9jID0gbmV3IGpzUERGKG9wdGlvbnMpO1xuICBjb25zdCBwYWdlV2lkdGggPSBkb2MuZ2V0UGFnZVdpZHRoKCk7XG4gIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuZ2V0UGFnZUhlaWdodCgpIC0gMjU7IC8vMjUgaXMgYm90dG9tIG1hcmdpblxuICBjb25zdCBkb2NXaWR0aCA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aDtcbiAgY29uc3QgZG9jSGVpZ2h0ID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodDtcblxuICBjb25zdCBjb2xvckJsYWNrID0gXCIjMDAwMDAwXCI7XG4gIGNvbnN0IGNvbG9yQmx1ZSA9IFwiIzMzNjdkNlwiO1xuICBjb25zdCBjb2xvckdyYXkgPSBcIiM0ZDRlNTNcIjtcbiAgY29uc3QgbGlnaHRHcmF5ID0gXCIjODg4ODg4XCI7XG4gIGNvbnN0IEZPTlRfVFlQRV9OT1JNQUwgPSBcIm5vcm1hbFwiO1xuICBjb25zdCBGT05UX1RZUEVfQk9MRCA9IFwiYm9sZFwiO1xuICBjb25zdCBBTElHTl9SSUdIVCA9IFwicmlnaHRcIjtcbiAgY29uc3QgQUxJR05fTEVGVCA9IFwibGVmdFwiO1xuICBjb25zdCBBTElHTl9DRU5URVIgPSBcImNlbnRlclwiO1xuICBjb25zdCBJU1NVRVJfQUREUkVTU19MQUJFTCA9IFwiQ29tcGFueSBBZGRyZXNzXCI7XG4gIGNvbnN0IElNQUdFX0NPTlRFTlRfVFlQRSA9IFwiUE5HXCI7XG4gIGNvbnN0IENVU1RPTV9GT05UX05BTUUgPSBcImN1c3RvbUZvbnRcIjtcbiAgdmFyIGhlaWdodEJlbG93TG9nbztcblxuICAvL3N0YXJ0aW5nIGF0IDE1bW1cbiAgbGV0IGN1cnJlbnRIZWlnaHQgPSAxNTtcblxuICBjb25zdCBwZGZDb25maWcgPSB7XG4gICAgaGVhZGVyVGV4dFNpemU6IDIwLFxuICAgIGxhYmVsVGl0bGVTaXplOiAxNixcbiAgICBsYWJlbFRleHRTaXplOiAxMixcbiAgICBmaWVsZFRleHRTaXplOiAxMCxcbiAgICB0ZXh0U2l6ZVNtYWxsOiA4LFxuICAgIGxpbmVIZWlnaHQ6IDYsXG4gICAgc3ViTGluZUhlaWdodDogNCxcbiAgfTtcbiAgZG9jLmFkZEZpbGVUb1ZGUyhcImN1c3RvbUZvbnQudHRmXCIsIGdldEN1c3RvbUZvbnQoKSk7XG4gIGRvYy5hZGRGb250KFwiY3VzdG9tRm9udC50dGZcIiwgQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUpO1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmhlYWRlclRleHRTaXplKTtcbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgaWYgKHBhcmFtLmxvZ28uc3JjKSB7XG4gICAgZG9jLmFkZEltYWdlKFxuICAgICAgcGFyYW0ubG9nby5zcmMsXG4gICAgICBJTUFHRV9DT05URU5UX1RZUEUsXG4gICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICBjdXJyZW50SGVpZ2h0IC0gNSArIHBhcmFtLmxvZ28ubWFyZ2luLnRvcCxcbiAgICAgIHBhcmFtLmxvZ28ud2lkdGgsXG4gICAgICBwYXJhbS5sb2dvLmhlaWdodFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBhcmFtLmxvZ28uaGVpZ2h0ICsgcGFyYW0ubG9nby5tYXJnaW4udG9wO1xuICB9XG5cbiAgaWYgKHBhcmFtLmJ1c2luZXNzLm5hbWUpIHtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBwYXJhbS5idXNpbmVzcy5uYW1lLFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIGhlaWdodEJlbG93TG9nbyA9IGN1cnJlbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAocGFyYW0/LmJ1c2luZXNzPy5hZGRyZXNzKSB7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBJU1NVRVJfQUREUkVTU19MQUJFTCxcbiAgICAgIEFMSUdOX0xFRlRcbiAgICApO1xuXG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmZpZWxkVGV4dFNpemUgLSAyKTtcbiAgICBjb25zdCBidXNpbmVzc0FkZHJlc3MgPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzLFxuICAgICAgZG9jV2lkdGggKiAwLjRcbiAgICApO1xuICAgIGRvYy50ZXh0KFxuICAgICAgMTAgKyBwYXJhbS5sb2dvLm1hcmdpbi5sZWZ0LFxuICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgIGJ1c2luZXNzQWRkcmVzcy50ZXh0LFxuICAgICAgQUxJR05fTEVGVFxuICAgICk7XG5cbiAgICBjdXJyZW50SGVpZ2h0ICs9IGJ1c2luZXNzQWRkcmVzcy5oZWlnaHQ7XG4gICAgY29uc3QgYnVzaW5lc3NBZGRyZXNzMiA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmJ1c2luZXNzLmFkZHJlc3NMaW5lMixcbiAgICAgIGRvY1dpZHRoICogMC40XG4gICAgKTtcbiAgICBkb2MudGV4dChcbiAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICBidXNpbmVzc0FkZHJlc3MyLnRleHQsXG4gICAgICBBTElHTl9MRUZUXG4gICAgKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gYnVzaW5lc3NBZGRyZXNzMi5oZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuYWRkcmVzc0xpbmUzKSB7XG4gICAgICBjb25zdCBidXNpbmVzc0FkZHJlc3MzID0gc3BsaXRUZXh0QW5kR2V0SGVpZ2h0KFxuICAgICAgICBwYXJhbS5idXNpbmVzcy5hZGRyZXNzTGluZTMsXG4gICAgICAgIGRvY1dpZHRoICogMC40XG4gICAgICApO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgYnVzaW5lc3NBZGRyZXNzMy50ZXh0LFxuICAgICAgICBBTElHTl9MRUZUXG4gICAgICApO1xuICAgICAgY3VycmVudEhlaWdodCArPSBidXNpbmVzc0FkZHJlc3MzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MuY291bnRyeSkge1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MuY291bnRyeSxcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEpIHtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLmVtYWlsXzEsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgfVxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBpZiAocGFyYW0uYnVzaW5lc3MucGhvbmUpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAxMCArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIFwiVGVsIE51bWJlcjogXCIsXG4gICAgICAgIEFMSUdOX0xFRlRcbiAgICAgICk7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICAgIGRvYy50ZXh0KFxuICAgICAgICAyNyArIHBhcmFtLmxvZ28ubWFyZ2luLmxlZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHBhcmFtLmJ1c2luZXNzLnBob25lXG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmJ1c2luZXNzLnRheE51bWJlcikge1xuICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDEwICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgXCJUYXggTnVtYmVyOiBcIixcbiAgICAgICAgQUxJR05fTEVGVFxuICAgICAgKTtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoXG4gICAgICAgIDI3ICsgcGFyYW0ubG9nby5tYXJnaW4ubGVmdCxcbiAgICAgICAgY3VycmVudEhlaWdodCxcbiAgICAgICAgcGFyYW0uYnVzaW5lc3MudGF4TnVtYmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbS5kYXRhLmNvbDEgJiYgcGFyYW0uZGF0YS5jb2wyKSB7XG4gICAgLy8gUE8gTnVtYmVyIGFuZCBvdGhlciBkZXRhaWxzIG9uIHRoZSByaWdodCBzaWRlXG4gICAgY29uc3QgaGVhZGVycyA9IHBhcmFtLmRhdGEuY29sMTtcbiAgICBjb25zdCB2YWx1ZXMgPSBwYXJhbS5kYXRhLmNvbDI7XG4gICAgY29uc3Qgc2l6ZSA9IGhlYWRlcnMubGVuZ3RoO1xuICAgIHZhciBoZWlnaHRIZWFkZXJzID0gaGVpZ2h0QmVsb3dMb2dvO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBkZXRhaWxzVGV4dCA9IGhlYWRlcnNbaV0gKyBcIjogXCI7XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDMwLCBoZWlnaHRIZWFkZXJzLCBkZXRhaWxzVGV4dCwgQUxJR05fUklHSFQpO1xuICAgICAgaGVpZ2h0SGVhZGVycyArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgY29uc3QgZGV0YWlsc1RleHQgPSB2YWx1ZXNbaV07XG4gICAgICBkb2MudGV4dChkb2NXaWR0aCAtIDEwLCBoZWlnaHRCZWxvd0xvZ28sIGRldGFpbHNUZXh0LCBBTElHTl9SSUdIVCk7XG4gICAgICBoZWlnaHRCZWxvd0xvZ28gKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudEhlaWdodCA9IE1hdGgubWF4KGN1cnJlbnRIZWlnaHQsIGhlaWdodEJlbG93TG9nbyk7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIDI7XG5cbiAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5oZWFkZXJUZXh0U2l6ZSAtIDYpO1xuXG4gIGlmIChwYXJhbS5kYXRhLmxhYmVsKSB7XG4gICAgZG9jLnRleHQoZG9jV2lkdGggLyAyLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmxhYmVsLCBBTElHTl9DRU5URVIpO1xuICB9XG5cbiAgZG9jLnNldEZvbnQodW5kZWZpbmVkLCBGT05UX1RZUEVfQk9MRCk7XG4gIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgLy9saW5lIGJyZWFrZXIgRG9jIHRleHRcbiAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aCkge1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuXG4gIC8vVEFCTEUgUEFSVFxuXG4gIGNvbnN0IHRkV2lkdGggPSAocGFnZVdpZHRoIC0gMjApIC8gcGFyYW0uZGF0YS5oZWFkZXIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGdldFRkV2lkdGhEaW1lbnNpb25zKCkge1xuICAgIGxldCBsZWZ0U2hpZnQgPSAxMDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHNoaWZ0OiBsZWZ0U2hpZnQsXG4gICAgICAgIHdpZHRoOiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoPy5baV1cbiAgICAgICAgICA/IChwYWdlV2lkdGggLSAyMCkgKiBwYXJhbS5kYXRhLmhlYWRlcldpZHRoW2ldXG4gICAgICAgICAgOiB0ZFdpZHRoLFxuICAgICAgfSk7XG4gICAgICBsZWZ0U2hpZnQgPVxuICAgICAgICBsZWZ0U2hpZnQgK1xuICAgICAgICAocGFyYW0uZGF0YS5oZWFkZXJXaWR0aD8uW2ldXG4gICAgICAgICAgPyAocGFnZVdpZHRoIC0gMjApICogcGFyYW0uZGF0YS5oZWFkZXJXaWR0aFtpXVxuICAgICAgICAgIDogdGRXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBhZGRUYWJsZUhlYWRlckJvYXJkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICA3XG4gICAgICApO1xuICAgIH1cbiAgICBjdXJyZW50SGVpZ2h0IC09IDI7XG4gIH07XG4gIGNvbnN0IGFkZFRhYmxlQm9keUJvYXJkZXIgPSAobGluZUhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtLmRhdGEuaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2MucmVjdChcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpXT8uc2hpZnQsXG4gICAgICAgIGN1cnJlbnRIZWlnaHQsXG4gICAgICAgIHRkV2lkdGhEaW1lbnNpb25zPy5baV0/LndpZHRoLFxuICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtLmRhdGEuaGVhZGVyQm9yZGVyKSBhZGRUYWJsZUhlYWRlckJvYXJkZXIoKTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQgKyAyO1xuICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9CT0xEKTtcbiAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgLy9ib3JkZXIgY29sb3JcbiAgICBkb2Muc2V0RHJhd0NvbG9yKGNvbG9yR3JheSk7XG4gICAgLy8gY3VycmVudEhlaWdodCArPSAyO1xuXG4gICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgIHBhcmFtLmRhdGEuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIGRvYy50ZXh0KHJvdywgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG4gICAgZG9jLnNldFRleHRDb2xvcihjb2xvckdyYXkpO1xuICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcbiAgICBkb2MubGluZSgxMCwgY3VycmVudEhlaWdodCwgZG9jV2lkdGggLSAxMCwgY3VycmVudEhlaWdodCk7XG4gIH07XG4gIGFkZFRhYmxlSGVhZGVyKCk7XG5cbiAgLy90YWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keUxlbmd0aCA9IHBhcmFtLmRhdGEudGFibGUubGVuZ3RoO1xuICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcblxuICBwYXJhbS5kYXRhLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAvL2dldCBuYXggaGVpZ2h0IGZvciB0aGUgY3VycmVudCByb3dcbiAgICBsZXQgcm93c0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGdldFJvd3NIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLnRleHRTaXplU21hbGwpO1xuICAgICAgY29uc3QgdGRXaWR0aERpbWVuc2lvbnMgPSBnZXRUZFdpZHRoRGltZW5zaW9ucygpO1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKHJyLCBpbmRleCkge1xuICAgICAgICAvL3NpemUgc2hvdWxkIGJlIHRoZSBzYW1lIHVzZWQgaW4gb3RoZXIgdGRcbiAgICAgICAgbGV0IGl0ZW0gPSBzcGxpdFRleHRBbmRHZXRIZWlnaHQoXG4gICAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZFdpZHRoRGltZW5zaW9ucz8uW2luZGV4XT8ud2lkdGggLSAxXG4gICAgICAgICk7IC8vbWludXMgMSwgdG8gZml4IHRoZSBwYWRkaW5nIGlzc3VlIGJldHdlZW4gYm9yZGVyc1xuICAgICAgICByb3dzSGVpZ2h0LnB1c2goaXRlbS5oZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBnZXRSb3dzSGVpZ2h0KCk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5tYXgoLi4ucm93c0hlaWdodCk7XG5cbiAgICAvL2JvZHkgYm9yZGVyc1xuICAgIGlmIChwYXJhbS5kYXRhLnRhYmxlQm9keUJvcmRlcikgYWRkVGFibGVCb2R5Qm9hcmRlcihtYXhIZWlnaHQgKyAxKTtcblxuICAgIC8vZGlzcGxheSB0ZXh0IGludG8gcm93IGNlbGxzXG4gICAgLy9PYmplY3QuZW50cmllcyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sLCBpbmRleCkge1xuICAgIGNvbnN0IHRkV2lkdGhEaW1lbnNpb25zID0gZ2V0VGRXaWR0aERpbWVuc2lvbnMoKTtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAocnIsIGluZGV4KSB7XG4gICAgICBsZXQgaXRlbSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgICAgcnIudG9TdHJpbmcoKSxcbiAgICAgICAgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LndpZHRoIC0gMVxuICAgICAgKTsgLy9taW51cyAxLCB0byBmaXggdGhlIHBhZGRpbmcgaXNzdWUgYmV0d2VlbiBib3JkZXJzXG5cbiAgICAgIGRvYy50ZXh0KGl0ZW0udGV4dCwgdGRXaWR0aERpbWVuc2lvbnM/LltpbmRleF0/LnNoaWZ0LCBjdXJyZW50SGVpZ2h0ICsgNSk7XG4gICAgfSk7XG5cbiAgICAvL3ByZS1pbmNyZWFzZSBjdXJyZW50SGVpZ2h0IHRvIGNoZWNrIHRoZSBoZWlnaHQgYmFzZWQgb24gbmV4dCByb3dcbiAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBjdXJyZW50SGVpZ2h0ICs9IG1heEhlaWdodDtcblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRIZWlnaHQgPiBwYWdlSGVpZ2h0IHx8XG4gICAgICAoY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgLSAxMCAmJiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSlcbiAgICApIHtcbiAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICBjdXJyZW50SGVpZ2h0ID0gMTA7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGFibGVCb2R5TGVuZ3RoKSBhZGRUYWJsZUhlYWRlcigpO1xuICAgIH1cblxuICAgIC8vcmVzZXQgdGhlIGhlaWdodCB0aGF0IHdhcyBpbmNyZWFzZWQgdG8gY2hlY2sgdGhlIG5leHQgcm93XG4gICAgaWYgKGluZGV4ICsgMSA8IHRhYmxlQm9keUxlbmd0aCAmJiBjdXJyZW50SGVpZ2h0ID4gMzApXG4gICAgICAvLyBjaGVjayBpZiBuZXcgcGFnZVxuICAgICAgY3VycmVudEhlaWdodCAtPSBtYXhIZWlnaHQ7XG5cbiAgICBkb2Muc2V0TGluZVdpZHRoKDAuMSk7XG4gICAgZG9jLmxpbmUoMTAsIGN1cnJlbnRIZWlnaHQsIGRvY1dpZHRoIC0gMTAsIGN1cnJlbnRIZWlnaHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gbWF4SGVpZ2h0ICsgMjtcblxuICAgIC8vdGQgYm9yZGVyIGhlaWdodFxuICAgIGN1cnJlbnRIZWlnaHQgKz0gNDtcbiAgfSk7XG5cbiAgLy8gbm8gdGFibGUgZGF0YVxuICBpZiAodGFibGVCb2R5TGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEhlaWdodCArPSA2O1xuICAgIGRvYy50ZXh0KFwiTm8gRGF0YVwiLCBkb2NXaWR0aCAvIDIsIGN1cnJlbnRIZWlnaHQpO1xuICB9XG5cbiAgZG9jLnNldFRleHRDb2xvcihjb2xvckJsYWNrKTtcbiAgZG9jLnNldEZvbnRTaXplKDEwKTtcbiAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcblxuICBpZiAoXG4gICAgcGFyYW0uZGF0YS5zdWJUb3RhbCB8fFxuICAgIHBhcmFtLmRhdGEucm93MSB8fFxuICAgIHBhcmFtLmRhdGEucm93MiB8fFxuICAgIHBhcmFtLmRhdGEudG90YWxcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY3VycmVudEhlaWdodCA+IHBhZ2VIZWlnaHQgfHxcbiAgICAgIChjdXJyZW50SGVpZ2h0ID4gcGFnZUhlaWdodCAtIDEwICYmIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPiAxKVxuICAgICkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gIH1cblxuICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yQmxhY2spO1xuICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0IC0gMTtcbiAgLy8gICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuICBkb2Muc2V0Rm9udFNpemUocGRmQ29uZmlnLmxhYmVsVGV4dFNpemUpO1xuXG4gIC8vYWRkIG51bSBvZiBwYWdlcyBhdCB0aGUgYm90dG9tXG4gIGlmIChkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRvYy5nZXROdW1iZXJPZlBhZ2VzKCk7IGkrKykge1xuICAgICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplIC0gMik7XG4gICAgICBkb2Muc2V0VGV4dENvbG9yKGNvbG9yR3JheSk7XG5cbiAgICAgIGlmIChwYXJhbS5wYWdlRW5hYmxlKSB7XG4gICAgICAgIGRvYy50ZXh0KGRvY1dpZHRoIC8gMiwgZG9jSGVpZ2h0IC0gMTAsIHBhcmFtLmZvb3Rlci50ZXh0LCBBTElHTl9DRU5URVIpO1xuICAgICAgICBkb2Muc2V0UGFnZShpKTtcbiAgICAgICAgZG9jLnRleHQoXG4gICAgICAgICAgcGFyYW0ucGFnZUxhYmVsICsgXCIgXCIgKyBpICsgXCIgLyBcIiArIGRvYy5nZXROdW1iZXJPZlBhZ2VzKCksXG4gICAgICAgICAgZG9jV2lkdGggLSAyMCxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHJlcXVlc3RlZCBieVxuICBpZiAocGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfQk9MRCk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiUmVxdWVzdGVkIEJ5XCIpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLnN1YkxpbmVIZWlnaHQ7XG5cbiAgICBkb2Muc2V0Rm9udChDVVNUT01fRk9OVF9OQU1FLCBGT05UX1RZUEVfTk9STUFMKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgcGFyYW0uZGF0YS5yZXF1ZXN0ZWRCeS5uYW1lKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5zdWJMaW5lSGVpZ2h0O1xuXG4gICAgaWYgKHBhcmFtLmRhdGEucmVxdWVzdGVkQnkucGhvbmUpIHtcbiAgICAgIGRvYy5zZXRGb250KENVU1RPTV9GT05UX05BTUUsIEZPTlRfVFlQRV9OT1JNQUwpO1xuICAgICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIHBhcmFtLmRhdGEucmVxdWVzdGVkQnkucGhvbmUpO1xuICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGREZXNjID0gKCkgPT4ge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JCbGFjayk7XG5cbiAgICBpZiAocGFyYW0uZGF0YT8uZGVzYy5sZW5ndGggPiAwKSB7XG4gICAgICBjdXJyZW50SGVpZ2h0ICs9IDE7XG4gICAgICBwYXJhbS5kYXRhPy5kZXNjPy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChlbCwgcGFnZVdpZHRoIC0gNDApO1xuICAgICAgICBpZiAoY3VycmVudEhlaWdodCArIGRlc2MuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgICAgIGRvYy5hZGRQYWdlKCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgICAgICAgIGRvYy50ZXh0KDEwLCBjdXJyZW50SGVpZ2h0LCBwYXJhbS5kYXRhLmRlc2NMYWJlbCk7XG4gICAgICAgICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgICAgICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcuc3ViTGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGVzYy50ZXh0KTtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSBkZXNjLmhlaWdodCArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtLmRhdGE/LmRlc2M/Lmxlbmd0aCA+IDApIGFkZERlc2MoKTtcblxuICAvLyBEZWxpdmVyeSBJbnN0cnVjdGlvbnNcbiAgaWYgKHBhcmFtLmRhdGEuZGVsaXZlcnlJbnN0cnVjdGlvbnMpIHtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5sYWJlbFRleHRTaXplO1xuICAgIGNvbnN0IGRpRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChcbiAgICAgIHBhcmFtLmRhdGEuZGVsaXZlcnlJbnN0cnVjdGlvbnMsXG4gICAgICBwYWdlV2lkdGggLSAyMFxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRIZWlnaHQgKyBkaURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiRGVsaXZlcnkgSW5zdHJ1Y3Rpb25zOlwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgZGlEYXRhLnRleHQpO1xuICAgIGN1cnJlbnRIZWlnaHQgKz0gcGRmQ29uZmlnLmxpbmVIZWlnaHQgKyBkaURhdGEuaGVpZ2h0O1xuICB9XG5cbiAgLy8gTm90ZVxuICBpZiAocGFyYW0uZGF0YS5ub3RlKSB7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGFiZWxUZXh0U2l6ZTtcbiAgICBjb25zdCBub3RlRGF0YSA9IHNwbGl0VGV4dEFuZEdldEhlaWdodChwYXJhbS5kYXRhLm5vdGUsIHBhZ2VXaWR0aCAtIDIwKTtcblxuICAgIGlmIChjdXJyZW50SGVpZ2h0ICsgbm90ZURhdGEuaGVpZ2h0ID4gcGFnZUhlaWdodCkge1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGN1cnJlbnRIZWlnaHQgPSAxMDtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX0JPTEQpO1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcubGFiZWxUZXh0U2l6ZSk7XG4gICAgZG9jLnRleHQoMTAsIGN1cnJlbnRIZWlnaHQsIFwiTm90ZVwiKTtcbiAgICBjdXJyZW50SGVpZ2h0ICs9IHBkZkNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gICAgZG9jLnNldEZvbnQoQ1VTVE9NX0ZPTlRfTkFNRSwgRk9OVF9UWVBFX05PUk1BTCk7XG4gICAgZG9jLnNldEZvbnRTaXplKHBkZkNvbmZpZy5maWVsZFRleHRTaXplKTtcbiAgICBkb2MudGV4dCgxMCwgY3VycmVudEhlaWdodCwgbm90ZURhdGEudGV4dCk7XG4gICAgY3VycmVudEhlaWdodCArPSBwZGZDb25maWcubGluZUhlaWdodCArIG5vdGVEYXRhLmhlaWdodDtcbiAgfVxuXG4gIC8vYWRkIG51bSBvZiBwYWdlIGF0IHRoZSBib3R0b21cbiAgaWYgKGRvYy5nZXROdW1iZXJPZlBhZ2VzKCkgPT09IDEgJiYgcGFyYW0ucGFnZUVuYWJsZSkge1xuICAgIGRvYy5zZXRGb250U2l6ZShwZGZDb25maWcuZmllbGRUZXh0U2l6ZSAtIDIpO1xuICAgIGRvYy5zZXRUZXh0Q29sb3IoY29sb3JHcmF5KTtcbiAgICBkb2MudGV4dChkb2NXaWR0aCAvIDIsIGRvY0hlaWdodCAtIDEwLCBwYXJhbS5mb290ZXIudGV4dCwgQUxJR05fQ0VOVEVSKTtcbiAgICBkb2MudGV4dChcbiAgICAgIHBhcmFtLnBhZ2VMYWJlbCArIFwiMSAvIDFcIixcbiAgICAgIGRvY1dpZHRoIC0gMjAsXG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gNlxuICAgICk7XG4gIH1cblxuICBsZXQgcmV0dXJuT2JqID0ge1xuICAgIHBhZ2VzTnVtYmVyOiBkb2MuZ2V0TnVtYmVyT2ZQYWdlcygpLFxuICB9O1xuXG4gIGlmIChwYXJhbS5yZXR1cm5Kc1BERkRvY09iamVjdCkge1xuICAgIHJldHVybk9iaiA9IHtcbiAgICAgIC4uLnJldHVybk9iaixcbiAgICAgIGpzUERGRG9jT2JqZWN0OiBkb2MsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLlNhdmUpIGRvYy5zYXZlKHBhcmFtLmZpbGVOYW1lKTtcbiAgZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5CbG9iKSB7XG4gICAgY29uc3QgYmxvYk91dHB1dCA9IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5CbG9iKTtcbiAgICByZXR1cm5PYmogPSB7XG4gICAgICAuLi5yZXR1cm5PYmosXG4gICAgICBibG9iOiBibG9iT3V0cHV0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyYW0ub3V0cHV0VHlwZSA9PT0gT3V0cHV0VHlwZS5EYXRhVXJpU3RyaW5nKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgZGF0YVVyaVN0cmluZzogZG9jLm91dHB1dChPdXRwdXRUeXBlLkRhdGFVcmlTdHJpbmcsIHtcbiAgICAgICAgZmlsZW5hbWU6IHBhcmFtLmZpbGVOYW1lLFxuICAgICAgfSksXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwYXJhbS5vdXRwdXRUeXBlID09PSBPdXRwdXRUeXBlLkFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuT2JqID0ge1xuICAgICAgLi4ucmV0dXJuT2JqLFxuICAgICAgYXJyYXlCdWZmZXI6IGRvYy5vdXRwdXQoT3V0cHV0VHlwZS5BcnJheUJ1ZmZlciksXG4gICAgfTtcbiAgfSBlbHNlXG4gICAgZG9jLm91dHB1dChwYXJhbS5vdXRwdXRUeXBlLCB7XG4gICAgICBmaWxlbmFtZTogcGFyYW0uZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNQREZSZnFUZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO0FBQ0FBLE9BQUE7QUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7QUFBd0MsU0FBQUcsUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQUMsTUFBQSxDQUFBRCxJQUFBLENBQUFGLE1BQUEsT0FBQUcsTUFBQSxDQUFBQyxxQkFBQSxRQUFBQyxPQUFBLEdBQUFGLE1BQUEsQ0FBQUMscUJBQUEsQ0FBQUosTUFBQSxHQUFBQyxjQUFBLEtBQUFJLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQUosTUFBQSxDQUFBSyx3QkFBQSxDQUFBUixNQUFBLEVBQUFPLEdBQUEsRUFBQUUsVUFBQSxPQUFBUCxJQUFBLENBQUFRLElBQUEsQ0FBQUMsS0FBQSxDQUFBVCxJQUFBLEVBQUFHLE9BQUEsWUFBQUgsSUFBQTtBQUFBLFNBQUFVLGNBQUFDLE1BQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBRixDQUFBLFVBQUFHLE1BQUEsV0FBQUYsU0FBQSxDQUFBRCxDQUFBLElBQUFDLFNBQUEsQ0FBQUQsQ0FBQSxRQUFBQSxDQUFBLE9BQUFmLE9BQUEsQ0FBQUksTUFBQSxDQUFBYyxNQUFBLE9BQUFDLE9BQUEsV0FBQUMsR0FBQSxRQUFBQyxnQkFBQSxhQUFBUCxNQUFBLEVBQUFNLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFoQixNQUFBLENBQUFrQix5QkFBQSxHQUFBbEIsTUFBQSxDQUFBbUIsZ0JBQUEsQ0FBQVQsTUFBQSxFQUFBVixNQUFBLENBQUFrQix5QkFBQSxDQUFBSixNQUFBLEtBQUFsQixPQUFBLENBQUFJLE1BQUEsQ0FBQWMsTUFBQSxHQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQWhCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsTUFBQSxFQUFBTSxHQUFBLEVBQUFoQixNQUFBLENBQUFLLHdCQUFBLENBQUFTLE1BQUEsRUFBQUUsR0FBQSxpQkFBQU4sTUFBQTtBQUV4QyxJQUFNVyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsYUFBYSxFQUFFLGVBQWU7RUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFNBQVM7RUFBRTtFQUNwQkMsZ0JBQWdCLEVBQUUsa0JBQWtCO0VBQUU7RUFDdENDLElBQUksRUFBRSxNQUFNO0VBQUU7RUFDZEMsV0FBVyxFQUFFLGFBQWEsQ0FBRTtBQUM5QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNURBLFNBNkRlQyxnQkFBZ0JBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxpQkFBQSxDQUFBdEIsS0FBQSxPQUFBSSxTQUFBO0FBQUE7QUFBQSxTQUFBa0Isa0JBQUE7RUFBQUEsaUJBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUEvQixTQUFBQyxRQUFnQ0MsS0FBSztJQUFBLElBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsbUJBQUEsRUFBQUMsWUFBQSxFQUFBQyxtQkFBQSxFQUFBQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLFlBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGFBQUEsRUFBQUMsYUFBQSxFQUFBQyxlQUFBLEVBQUFDLFlBQUEsRUFBQUMsaUJBQUE7SUFBQSxJQUFBQyxLQUFB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