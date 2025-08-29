export const createComponent = async (data: { name: string; kind: string; purpose: string }) => {
  const response = await fetch("http://127.0.0.1:8000/api/components", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
