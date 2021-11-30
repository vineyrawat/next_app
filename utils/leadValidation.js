export const validateData = (data) => {
  if (data.lead_name === undefined || data.lead_name === "") {
    return {
      isValid: false,
      error: "Person name is required",
    };
  }
  if (data.phone === undefined || data.phone === "") {
    return {
      isValid: false,
      error: "Phone is required",
    };
  }
  if (data.sub_status === undefined || data.sub_status === "") {
    return {
      isValid: false,
      error: "Sub type is required",
    };
  }
  return {
    isValid: true,
    error: "",
  };
};
