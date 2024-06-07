/**
 * Programming With JavaScript - QAP2
 *
 *      Name: <Stephen Crocker>
 *      Date: <Jun 7, 2024>
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 ******************************************************************************/

function snake(value) {
  snake_value = value
    .trim()
    .replace(/[\s.]+/g, "_")
    .toLowerCase();
  return snake_value;
}

// Test cases
console.log(snake("abc")); // Expected output: 'abc'
console.log(snake(" ABC ")); // Expected output: 'abc'
console.log(snake("ABC")); // Expected output: 'abc'
console.log(snake("A BC")); // Expected output: 'a_bc'
console.log(snake(" A bC  ")); // Expected output: 'a_bc'
console.log(snake("A   BC")); // Expected output: 'a_bc'
console.log(snake("A.BC")); // Expected output: 'a_bc'
console.log(snake(" A..  B   C ")); // Expected output: 'a_b_c'
console.log(snake(" A..  B   C    D   EF.G ")); // Expected output: 'a_b_c_d_ef_g'

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 * ******************************************************************************/

function createVideo(src, width, controls) {
  videoSrc = src.trim();
  let videoUrl = `<video src="${videoSrc}"`;
  videoUrl += ` width="${width}"`;

  if (controls) {
    videoUrl += " controls";
  }

  videoUrl += "></video>";

  return videoUrl;
}

// Test cases
console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    500
  )
);
console.log(
  createVideo(
    " http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4 ",
    "500",
    true
  )
);

/*******************************************************************************
 * Problem 3: extract Date from date string
 ******************************************************************************/

function parseDateString(dateString) {
  // Error throw #1: Invalid string input
  if (typeof dateString !== "string") {
    throw new Error("Invalid input. Input a valid date string.");
  }

  const regex = /^(\d{4})-(\d{2})-(\d{2})$/; // RegEX template for holding formatted dateString
  const match = dateString.match(regex); // Check for if input dateString is same format as regex template

  // Error throw #2: Invalid format input
  if (!match) {
    throw new Error("Invalid date format. Input in format: YYYY-MM-DD");
  }

  // Parse regex for year month and day as base 10 integers
  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);

  // Build date
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1); // (JS using zero-based indexing for months. Compensate by subtracting 1)
  date.setDate(day);

  // Error throw #3: Invalid date input
  if (
    date.getFullYear() !== year ||
    date.getMonth() + 1 !== month ||
    date.getDate() !== day
  ) {
    throw new Error("Invalid date values. Date must be valid calander date");
  }

  return date;
}

// Test Cases:
// Succeeding
try {
  console.log(parseDateString("2021-01-01")); // Expected to succeed
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("2021-09-29")); // Expected to succeed
} catch (e) {
  console.error(e.message);
}

// Failing
try {
  console.log(parseDateString("01-01-01")); // Expected to fail
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("2021-1-01")); // Expected to fail
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("2021-01-1")); // Expected to fail
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString(null)); // Expected to fail
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("this is totally wrong")); // Expected to fail
} catch (e) {
  console.error(e.message);
}

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 ******************************************************************************/

function toDateString(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid Date object");
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Pad month and day with leading zeros if necessary
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${formattedMonth}-${formattedDay}`;
}

// Test Cases:
try {
  const date = new Date(2021, 0, 29);
  console.log(toDateString(date));
} catch (error) {
  console.error(error.message);
}
try {
  const date = new Date(2021, 0, 29);
  console.log(toDateString(parseDateString("2021-01-29")));
} catch (error) {
  console.error(error.message);
}

/*******************************************************************************
 * Problem 5: parse a geographic coord
 ******************************************************************************/
function normalizeCoord(coord) {
  // Clean up the coordinate input by removing brackets and trimming spaces
  const parts = coord
    .replace(/[\[\]]/g, "")
    .trim()
    .split(/\s*,\s*/);

  let lat, lng;
  // Throw error if not exactly 2 parts in coordinate
  if (parts.length !== 2) {
    throw new Error("Invalid coordinate format");
  }

  const first = parseFloat(parts[0]);
  const second = parseFloat(parts[1]);

  // If coordinate starts with brackets then coordinate is in reverse format
  const isReversed = coord.trim().startsWith("[");

  if (isReversed) {
    lat = second;
    lng = first;
  } else {
    lat = first;
    lng = second;
  }

  // Additional check for valid lat/lng values, but not neccesary for normalizeCoord() as isReversed will handle.
  // Useful for future error checks - used in problem 6
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error(
      "Latitude must be between -90 and 90, and Longitude must be between -180 and 180"
    );
  }

  return `(${lat}, ${lng})`;
}

// Test cases:
try {
  console.log(normalizeCoord("42.9755,-77.4369")); // Expected: "(42.9755, -77.4369)"
  console.log(normalizeCoord("[-77.4369, 42.9755]")); // Expected: "(42.9755, -77.4369)"
} catch (error) {
  console.error(error.message);
}

/*******************************************************************************
 * Problem 6: format any number of coords as a list in a string
 ******************************************************************************/
function formatCoords(...coords) {
  const formattedCoords = [];

  coords.forEach((coord) => {
    try {
      formattedCoords.push(normalizeCoord(coord));
    } catch (error) {
      console.error(
        `Invalid coordinate :'${coord}', skipping. ${error.message}`
      );
    }
  });

  return `(${formattedCoords.join(", ")})`;
}

// Test cases:
try {
  const result = formatCoords(
    "42.9755,-77.4369",
    "[-62.1234, 42.9755]",
    "300,-9000"
  );
  console.log(result); // Expected: "((42.9755, -77.4369), (42.9755, -62.1234))"
} catch (error) {
  console.error(error.message);
}

/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 ******************************************************************************/

function mimeFromFilename(filename) {
  // Extract file extension from file
  const extension = filename.slice(filename.lastIndexOf(".")).toLowerCase();

  switch (extension) {
    case ".html":
    case ".htm":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".bmp":
      return "image/bmp";
    case ".ico":
    case ".cur":
      return "image/x-icon";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
    case ".webp":
      return "image/webp";
    case ".mp3":
      return "audio/mp3";
    case ".wav":
      return "audio/wav";
    case ".mp4":
      return "video/mp4";
    case ".webm":
      return "video/webm";
    case ".json":
      return "application/json";
    case ".mpeg":
      return "video/mpeg";
    case ".csv":
      return "text/csv";
    case ".ttf":
      return "font/ttf";
    case ".woff":
      return "font/woff";
    case ".zip":
      return "application/zip";
    case ".avi":
      return "video/x-msvideo";
    default:
      return "application/octet-stream";
  }
}

// Test Cases:
console.log(mimeFromFilename("index.html")); // Expected: 'text/html'
console.log(mimeFromFilename("style.css")); // Expected: 'text/css'
console.log(mimeFromFilename("qap2.js")); // Expected: 'text/javascript'
console.log(mimeFromFilename("photo.png")); // Expected: 'image/png'
console.log(mimeFromFilename("audio.mp3")); // Expected: 'audio/mp3'
console.log(mimeFromFilename("video.mp4")); // Expected: 'video/mp4'
console.log(mimeFromFilename("test_csv.csv")); // Expected: 'text/csv'
console.log(mimeFromFilename("test_app.json")); // Expected: 'application/json'
console.log(mimeFromFilename("test_text.ttf")); // Expected: 'font/ttf'
console.log(mimeFromFilename("test_folder.zip")); // Expected: 'application/zip'
console.log(mimeFromFilename("UnknownFile.abc")); // Expected: 'application/octet-stream'

/*******************************************************************************
 * Problem 8 Generate license text and link from license code.
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank = false) {
  // Map license abbreviations codes to their corresponding names
  const licenses = {
    "CC-BY": "Creative Commons Attribution License",
    "CC-BY-NC": "Creative Commons Attribution-NonCommercial License",
    "CC-BY-SA": "Creative Commons Attribution-ShareAlike License",
    "CC-BY-ND": "Creative Commons Attribution-NoDerivs License",
    "CC-BY-NC-SA":
      "Creative Commons Attribution-NonCommercial-ShareAlike License",
    "CC-BY-NC-ND":
      "Creative Commons Attribution-NonCommercial-NoDerivs License",
  };

  // Set creative and non creative lisnence links
  let url, text;
  if (licenses[licenseCode]) {
    const code = licenseCode.replace("CC-", "").toLowerCase();
    url = `https://creativecommons.org/licenses/${code}/4.0/`;
    text = licenses[licenseCode];
  } else {
    url = "https://choosealicense.com/no-permission/";
    text = "All Rights Reserved";
  }

  const targetAttr = targetBlank ? ' target="_blank"' : "";

  return `<a href="${url}"${targetAttr}>${text}</a>`;
}

// Test Cases:
console.log(generateLicenseLink("CC-BY-NC"));
console.log(generateLicenseLink("CC-BY-ND", true));
console.log(generateLicenseLink("Unknown", true));

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 ******************************************************************************/

function pureBool(value) {
  const trueValues = ["yes", "y", "oui", "o", "t", "true", "vrai", "v"];
  const falseValues = ["no", "n", "non", "f", "false", "faux"];

  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  if (trueValues.includes(value)) {
    return true;
  }
  if (falseValues.includes(value)) {
    return false;
  }

  if (typeof value === "number") {
    return value > 0 ? true : false;
  }

  throw new Error("Invalid value");
}

// Test Cases:
try {
  console.log(pureBool(true)); // true
  console.log(pureBool("Yes")); // true
  console.log(pureBool("faux")); // false
  console.log(pureBool(1)); // true
  console.log(pureBool(0)); // false
  console.log(pureBool("invalid")); // Error: Invalid value
} catch (error) {
  console.error(error.message);
}

/***********************************************************************************
 * Problem 9 Part 2: Checking for all True or all False values in a normalized list
 ***********************************************************************************/

function every(...args) {
  try {
    return args.every((arg) => pureBool(arg));
  } catch (error) {
    return false;
  }
}

function any(...args) {
  try {
    return args.some((arg) => pureBool(arg));
  } catch (error) {
    return false;
  }
}

function none(...args) {
  try {
    return args.every((arg) => !pureBool(arg));
  } catch (error) {
    return false;
  }
}

// Test Cases:
try {
  console.log(every("Y", "yes", 1)); // Expected: true
  console.log(any("Y", "no", 1)); // Expected: true
  console.log(none("n", "no", "false")); // Expected: true
  console.log(none("Y", "invalid", 1)); // Expected: false (invalid should throw error)
} catch (error) {
  console.error(error.message);
}

/*******************************************************************************
 * Problem 10 - build a URL
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  // Validate query
  if (typeof query !== "string" || query.trim() === "") {
    throw new Error("Invalid query. Query must be a non-empty string.");
  }
  const encodedQuery = encodeURIComponent(query);

  // Validate order
  if (order !== "ascending" && order !== "descending") {
    throw new Error(
      "Invalid order. Order must be 'ascending' or 'descending'."
    );
  }

  // Validate count
  if (typeof count !== "number" || count < 1 || count > 50) {
    throw new Error("Invalid count. Must be a value between 1 and 50.");
  }

  // Validate license
  const validLicenses = [
    "none",
    "any",
    "cc-by",
    "cc-by-nc",
    "cc-by-sa",
    "cc-by-nd",
    "cc-by-nc-sa",
    "cc-by-nc-nd",
  ];
  if (!validLicenses.includes(license)) {
    throw new Error(
      "Invalid license. License must be one of " +
        validLicenses.join(", ") +
        "."
    );
  }

  // Build URL
  const baseUrl = "https://api.inaturalist.org/v2/observations";
  const params = `query=${encodedQuery}&order=${order}&count=${count}&license=${license}`;
  return `${baseUrl}?${params}`;
}

// Example usage:
try {
  const url = buildUrl("Monarch Butterfly", "ascending", 25, "cc-by"); // Expected: https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
  console.log(url);
} catch (error) {
  console.error(error.message);
}
