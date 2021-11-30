import axios from "axios";

export const getLinkFieldData = async (field) => {
  try {
    const response = await axios.get(`/api/link-field-data?fieldName=${field}`);
    return [response.data.data, null];
  } catch (error) {
    return [null, error];
  }
};
