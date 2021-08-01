const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export default function convertToDate(dateString: string) {
  let formatted = dayjs(dateString, 'MM/YY');
  return new Date(formatted);
}
