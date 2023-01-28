export const priceFormatter = (data: any) => {
  if (data) {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(data);
  }
  return ""
};
