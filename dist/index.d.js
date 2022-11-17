"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutputType = void 0;
Object.defineProperty(exports, "jsPDF", {
  enumerable: true,
  get: function get() {
    return _jspdf.jsPDF;
  }
});

var _jspdf = require("jspdf");

var OutputType;
exports.OutputType = OutputType;

(function (_OutputType) {
  var Save;
  var DataUriString;
  var DataUri;
  var DataUrlNewWindow;
  var Blob;
  var ArrayBuffer;
})(OutputType || (exports.OutputType = OutputType = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5kLnRzIl0sIm5hbWVzIjpbIlNhdmUiLCJEYXRhVXJpU3RyaW5nIiwiRGF0YVVyaSIsIkRhdGFVcmxOZXdXaW5kb3ciLCJCbG9iIiwiQXJyYXlCdWZmZXIiLCJPdXRwdXRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVBJLE1BQU1BLElBQU47QUFDQSxNQUFNQyxhQUFOO0FBQ0EsTUFBTUMsT0FBTjtBQUNBLE1BQU1DLGdCQUFOO0FBQ0EsTUFBTUMsSUFBTjtBQUNBLE1BQU1DLFdBQU47R0FOYUMsVSwwQkFBQUEsVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGpzUERGSW52b2ljZVRlbXBsYXRlO1xuZXhwb3J0IG5hbWVzcGFjZSBPdXRwdXRUeXBlIHtcbiAgICBjb25zdCBTYXZlOiBzdHJpbmc7XG4gICAgY29uc3QgRGF0YVVyaVN0cmluZzogc3RyaW5nO1xuICAgIGNvbnN0IERhdGFVcmk6IHN0cmluZztcbiAgICBjb25zdCBEYXRhVXJsTmV3V2luZG93OiBzdHJpbmc7XG4gICAgY29uc3QgQmxvYjogc3RyaW5nO1xuICAgIGNvbnN0IEFycmF5QnVmZmVyOiBzdHJpbmc7XG59XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuLyoqXG4gKlxuICogQHBhcmFtIHtcbiAqICBvdXRwdXRUeXBlOiBPdXRwdXRUeXBlIHwgc3RyaW5nLFxuICogIHJldHVybkpzUERGRG9jT2JqZWN0PzogYm9vbGVhbixcbiAqICBmaWxlTmFtZTogc3RyaW5nLFxuICogIG9yaWVudGF0aW9uTGFuZHNjYXBlPzogYm9vbGVhbixcbiAqICBsb2dvPzoge1xuICogICAgICBzcmM/OiBzdHJpbmcsXG4gKiAgICAgIHdpZHRoPzogbnVtYmVyLFxuICogICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gKiAgICAgIG1hcmdpbj86IHtcbiAqICAgICAgICB0b3A/OiBudW1iZXIsXG4gKiAgICAgICAgbGVmdD86IG51bWJlclxuICogICAgICB9XG4gKiAgIH0sXG4gKiAgIGJ1c2luZXNzPzoge1xuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBlbWFpbF8xPzogc3RyaW5nLFxuICogICAgICAgY291bnRyeT86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgY29udGFjdD86IHtcbiAqICAgICAgIGxhYmVsPzogc3RyaW5nLFxuICogICAgICAgbmFtZT86IHN0cmluZyxcbiAqICAgICAgIGFkZHJlc3M/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTI/OiBzdHJpbmcsXG4gKiAgICAgICBhZGRyZXNzTGluZTM/OiBzdHJpbmcsXG4gKiAgICAgICBjb3VudHJ5Pzogc3RyaW5nLFxuICogICB9LFxuICogICBkYXRhPzoge1xuICogICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBudW0/OiBudW1iZXIsXG4gKiAgICAgICBkYXRlMUxhYmVsPzogc3RyaW5nXG4gKiAgICAgICBkYXRlMT86IHN0cmluZyxcbiAqICAgICAgIGRhdGUyTGFiZWw/OiBzdHJpbmdcbiAqICAgICAgIGRhdGUyPzogc3RyaW5nLFxuICogICAgICAgaGVhZGVyQm9yZGVyPzogYm9vbGVhbixcbiAqICAgICAgIHRhYmxlQm9keUJvcmRlcj86IGJvb2xlYW4sXG4gKiAgICAgICBoZWFkZXI/OiBzdHJpbmdbXSxcbiAqICAgICAgIHRhYmxlPzogYW55LFxuICogICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZyxcbiAqICAgICAgIHN1YlRvdGFsPzogc3RyaW5nLFxuICogICAgICAgY3VycmVuY3k/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBkZXNjPzogc3RyaW5nW10sXG4gKiAgICAgICBjcmVkaXROb3RlTGFiZWw/OiBzdHJpbmcsXG4gKiAgICAgICBub3RlPzogc3RyaW5nLFxuICogICAgICAgcm93MT86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgcm93Mj86IHtcbiAqICAgICAgICAgICBjb2wxPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDI/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgY29sMz86IHN0cmluZyxcbiAqICAgICAgICAgICBzdHlsZT86IHtcbiAqICAgICAgICAgICAgICAgZm9udFNpemU/OiBudW1iZXJcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAgdG90YWw/OiB7XG4gKiAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAqICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICogICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gKiAgICAgICAgICAgc3R5bGU/OiB7XG4gKiAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gKiAgICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgZm9vdGVyPzoge1xuICogICAgICAgdGV4dD86IHN0cmluZyxcbiAqICAgfSxcbiAqICAgcGFnZUVuYWJsZT86IGJvb2xlYW4sXG4gKiAgIHBhZ2VMYWJlbD86IHN0cmluZywgfSB9IHByb3BzXG4gKi9cbmRlY2xhcmUgZnVuY3Rpb24ganNQREZJbnZvaWNlVGVtcGxhdGUocHJvcHM6IHtcbiAgICBvdXRwdXRUeXBlOiB7XG4gICAgICAgIFNhdmU6IHN0cmluZztcbiAgICAgICAgRGF0YVVyaVN0cmluZzogc3RyaW5nO1xuICAgICAgICBEYXRhVXJpOiBzdHJpbmc7XG4gICAgICAgIERhdGFVcmxOZXdXaW5kb3c6IHN0cmluZztcbiAgICAgICAgQmxvYjogc3RyaW5nO1xuICAgICAgICBBcnJheUJ1ZmZlcjogc3RyaW5nO1xuICAgIH0gfCBzdHJpbmc7XG4gICAgcmV0dXJuSnNQREZEb2NPYmplY3Q/OiBib29sZWFuO1xuICAgIGZpbGVOYW1lOiBzdHJpbmc7XG4gICAgb3JpZW50YXRpb25MYW5kc2NhcGU/OiBib29sZWFuO1xuICAgIGxvZ28/OiB7XG4gICAgICAgIHNyYz86IHN0cmluZztcbiAgICAgICAgd2lkdGg/OiBudW1iZXI7XG4gICAgICAgIGhlaWdodD86IG51bWJlcjtcbiAgICAgICAgbWFyZ2luPzoge1xuICAgICAgICAgICAgdG9wPzogbnVtYmVyO1xuICAgICAgICAgICAgbGVmdD86IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGJ1c2luZXNzPzoge1xuICAgICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgICBhZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICBwaG9uZT86IHN0cmluZztcbiAgICAgICAgZW1haWw/OiBzdHJpbmc7XG4gICAgICAgIGVtYWlsXzE/OiBzdHJpbmc7XG4gICAgICAgIHdlYnNpdGU/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBjb250YWN0Pzoge1xuICAgICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZztcbiAgICAgICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgICAgIGVtYWlsPzogc3RyaW5nO1xuICAgICAgICBvdGhlckluZm8/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBkYXRhPzoge1xuICAgICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgICAgc3ViVG90YWxMYWJlbD86IHN0cmluZztcbiAgICAgICAgc3ViVG90YWw/OiBzdHJpbmc7XG4gICAgICAgIG51bT86IG51bWJlciB8IHN0cmluZztcbiAgICAgICAgZGF0ZTE/OiBzdHJpbmc7XG4gICAgICAgIGRhdGUxTGFiZWw/OiBzdHJpbmc7XG4gICAgICAgIGRhdGUyPzogc3RyaW5nO1xuICAgICAgICBkYXRlMkxhYmVsPzogc3RyaW5nO1xuICAgICAgICBoZWFkZXJCb3JkZXI/OiBib29sZWFuO1xuICAgICAgICB0YWJsZUJvZHlCb3JkZXI/OiBib29sZWFuO1xuICAgICAgICBoZWFkZXI/OiBzdHJpbmdbXTtcbiAgICAgICAgdGFibGU/OiBhbnk7XG4gICAgICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xuICAgICAgICBkZXNjTGFiZWw/OiBzdHJpbmc7XG4gICAgICAgIGRlc2M/OiBzdHJpbmdbXTtcbiAgICAgICAgbm90ZT86IHN0cmluZztcbiAgICAgICAgcm93MT86IHtcbiAgICAgICAgICAgIGNvbDE/OiBzdHJpbmc7XG4gICAgICAgICAgICBjb2wyPzogc3RyaW5nO1xuICAgICAgICAgICAgY29sMz86IHN0cmluZztcbiAgICAgICAgICAgIHN0eWxlPzoge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcm93Mj86IHtcbiAgICAgICAgICAgIGNvbDE/OiBzdHJpbmc7XG4gICAgICAgICAgICBjb2wyPzogc3RyaW5nO1xuICAgICAgICAgICAgY29sMz86IHN0cmluZztcbiAgICAgICAgICAgIHN0eWxlPzoge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdG90YWw/OiB7XG4gICAgICAgICAgICAgICAgY29sMT86IHN0cmluZyxcbiAgICAgICAgICAgICAgICBjb2wyPzogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGNvbDM/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgc3R5bGU/OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICB9O1xuICAgIGZvb3Rlcj86IHtcbiAgICAgICAgdGV4dD86IHN0cmluZztcbiAgICB9O1xuICAgIHBhZ2VFbmFibGU/OiBib29sZWFuO1xuICAgIHBhZ2VMYWJlbD86IHN0cmluZztcbn0pOiB7XG4gICAgcGFnZXNOdW1iZXI6IG51bWJlcjtcbiAgICBqc1BERkRvY09iamVjdD86IGpzUERGO1xuICAgIGJsb2I/OiBCbG9iO1xuICAgIGRhdGFVcmlTdHJpbmc/OiBzdHJpbmc7XG4gICAgYXJyYXlCdWZmZXI/OiBBcnJheUJ1ZmZlcjtcbn07XG5leHBvcnQgeyBqc1BERiB9O1xuIl19