// utils/validateReq.js
const validatePost = (data) => {
  const { coverImg, title, slug  , content,status,} = data;
  const errors = [];

  // check title
  if (!title) errors.push("Title is missing");
  else {
    if (title.length < 4) errors.push("Title too short (min 4 chars)");
    if (title.length > 70) errors.push("Title too long (max 70 chars)");
  }

  // check slug
  if (!slug) errors.push("Slug is missing");

  // check coverImg
  if (!coverImg) errors.push("Cover image is missing");

  if(!content) errors.push("Content is missing ");
  if(!status) errors.push("Status is missing");


  // check all mandatory fields exist
  const mandatoryFields = ["coverImg", "title", "slug","content","status"];
  const missingFields = mandatoryFields.filter((k) => !Object.keys(data).includes(k));
  if (missingFields.length > 0) errors.push(`Missing fields: ${missingFields.join(", ")}`);

  return errors; // return array of errors
};

module.exports = validatePost;
