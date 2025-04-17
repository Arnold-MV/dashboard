export function formatPrice(amount: number) {
  // return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(amount);
}
