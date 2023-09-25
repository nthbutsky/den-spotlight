export const contactFormApi = async (payload: HTMLFormElement) => {
  const api = process.env.NEXT_PUBLIC_FORM_API_KEY;
  const url = process.env.NEXT_PUBLIC_FORM_API_URL;

  const formData = new FormData(payload);
  formData.append("access_key", api as string);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch(url as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
  return result;
}