export function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/\s/g, '-')
    .replace(/ *\([^)]*\) */g, '')
    .replace(/\*/g, '')
    .replace(/^-/g, '')
    .toLowerCase()
    .replace(/-$/g, '');
}
export const formatMoney = (value) => {
  if (!value) return null;
  const regex = /[0-9]/g;
  const stringMoney = value.match(regex).join(',').replaceAll(',', '');
  return Number(stringMoney);
};

export const formatMoneyPoint = (value) => {
  if (!value) return null;

  return value.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$&,');
};

export const orderId = () => {
  var hexCode = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    hexCode() +
    hexCode() +
    '-' +
    hexCode() +
    '-' +
    hexCode() +
    '-' +
    hexCode() +
    '-' +
    hexCode() +
    hexCode() +
    hexCode()
  );
};
