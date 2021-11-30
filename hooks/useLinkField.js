import React from "react";
import { getLinkFieldData } from "../services/link_field.service";

export const useLinkField = async (field) => {
  const [linkFieldData, setLinkFieldData] = React.useState(null);
  const [data, error] = await getLinkFieldData(field);
  return {};
};
