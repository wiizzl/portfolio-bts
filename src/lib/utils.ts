const formatDate = (value: string | Date) => {
  const date = typeof value === "string" ? new Date(value) : value;

  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  }).format(date);
};

export { formatDate };
