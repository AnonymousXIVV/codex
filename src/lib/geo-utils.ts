// Geo & Country Flag utilities for Codex Dynamics CRM
// Replaces 2-letter or 3-letter abbreviations with flags and full country names

export interface GeoLocationDetails {
  country: string;
  countryCode: string;
  flag: string;
  city: string;
  region: string;
  postalCode: string;
  street: string;
}

const COUNTRY_MAP: Record<
  string,
  { name: string; flag: string; city: string; region: string; postalCode: string; street: string }
> = {
  US: {
    name: "United States",
    flag: "🇺🇸",
    city: "San Francisco",
    region: "California",
    postalCode: "94105",
    street: "101 Market St, Financial District",
  },
  USA: {
    name: "United States",
    flag: "🇺🇸",
    city: "New York",
    region: "New York",
    postalCode: "10001",
    street: "350 5th Ave, Manhattan",
  },
  GB: {
    name: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    region: "Greater London",
    postalCode: "EC2A 4NE",
    street: "25 Old Street, Silicon Roundabout",
  },
  UK: {
    name: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    region: "Greater London",
    postalCode: "W1D 3QU",
    street: "14 Soho Square, Westminster",
  },
  UA: {
    name: "Ukraine",
    flag: "🇺🇦",
    city: "Kyiv",
    region: "Kyiv City",
    postalCode: "01001",
    street: "14 Khreshchatyk St, Pechersk",
  },
  DE: {
    name: "Germany",
    flag: "🇩🇪",
    city: "Berlin",
    region: "Berlin",
    postalCode: "10115",
    street: "Friedrichstraße 43, Mitte",
  },
  CA: {
    name: "Canada",
    flag: "🇨🇦",
    city: "Toronto",
    region: "Ontario",
    postalCode: "M5V 2T6",
    street: "200 Bay St, Financial Core",
  },
  AE: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai",
    region: "Dubai Emirate",
    postalCode: "00000",
    street: "Sheikh Zayed Rd, DIFC Gate Tower 4",
  },
  FR: {
    name: "France",
    flag: "🇫🇷",
    city: "Paris",
    region: "Île-de-France",
    postalCode: "75008",
    street: "28 Avenue des Champs-Élysées",
  },
  AU: {
    name: "Australia",
    flag: "🇦🇺",
    city: "Sydney",
    region: "New South Wales",
    postalCode: "2000",
    street: "100 George St, The Rocks",
  },
  NL: {
    name: "Netherlands",
    flag: "🇳🇱",
    city: "Amsterdam",
    region: "North Holland",
    postalCode: "1012 JS",
    street: "Keizersgracht 421",
  },
  JP: {
    name: "Japan",
    flag: "🇯🇵",
    city: "Tokyo",
    region: "Tokyo Prefecture",
    postalCode: "150-0002",
    street: "1-1 Shibuya, Shibuya-ku",
  },
  SG: {
    name: "Singapore",
    flag: "🇸🇬",
    city: "Singapore",
    region: "Central Region",
    postalCode: "018981",
    street: "10 Collyer Quay, Ocean Financial Centre",
  },
  CH: {
    name: "Switzerland",
    flag: "🇨🇭",
    city: "Zurich",
    region: "Canton of Zurich",
    postalCode: "8001",
    street: "Bahnhofstrasse 45",
  },
  PL: {
    name: "Poland",
    flag: "🇵🇱",
    city: "Warsaw",
    region: "Masovian",
    postalCode: "00-024",
    street: "Nowy Świat 22",
  },
  ES: {
    name: "Spain",
    flag: "🇪🇸",
    city: "Madrid",
    region: "Community of Madrid",
    postalCode: "28013",
    street: "Gran Vía 32",
  },
  IT: {
    name: "Italy",
    flag: "🇮🇹",
    city: "Milan",
    region: "Lombardy",
    postalCode: "20121",
    street: "Via Montenapoleone 8",
  },
  SE: {
    name: "Sweden",
    flag: "🇸🇪",
    city: "Stockholm",
    region: "Stockholm County",
    postalCode: "111 52",
    street: "Kungsgatan 18",
  },
  IN: {
    name: "India",
    flag: "🇮🇳",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560001",
    street: "MG Road, Indiranagar",
  },
  BR: {
    name: "Brazil",
    flag: "🇧🇷",
    city: "São Paulo",
    region: "São Paulo",
    postalCode: "01310-100",
    street: "Avenida Paulista 1000",
  },
};

export function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🌐";
  const upper = code.toUpperCase();
  const first = 127397 + upper.charCodeAt(0);
  const second = 127397 + upper.charCodeAt(1);
  return String.fromCodePoint(first, second);
}

export function resolveGeoLocation(
  countryInput?: string,
  existingFlag?: string,
  existingCity?: string,
  existingPostal?: string,
  existingStreet?: string
): GeoLocationDetails {
  const raw = (countryInput || "").trim();
  const rawUpper = raw.toUpperCase();

  // If 2-letter or 3-letter abbreviation is passed
  if (COUNTRY_MAP[rawUpper]) {
    const matched = COUNTRY_MAP[rawUpper];
    return {
      country: matched.name,
      countryCode: rawUpper.slice(0, 2),
      flag: matched.flag || countryCodeToFlag(rawUpper.slice(0, 2)),
      city: existingCity || matched.city,
      region: matched.region,
      postalCode: existingPostal || matched.postalCode,
      street: existingStreet || matched.street,
    };
  }

  // Look for match by full country name
  for (const [code, info] of Object.entries(COUNTRY_MAP)) {
    if (info.name.toLowerCase() === raw.toLowerCase()) {
      return {
        country: info.name,
        countryCode: code,
        flag: existingFlag && existingFlag !== "🌐" ? existingFlag : info.flag,
        city: existingCity || info.city,
        region: info.region,
        postalCode: existingPostal || info.postalCode,
        street: existingStreet || info.street,
      };
    }
  }

  // Common country name fallbacks if not directly in map
  if (raw.toLowerCase().includes("united states") || raw.toLowerCase().includes("america")) {
    return {
      country: "United States",
      countryCode: "US",
      flag: "🇺🇸",
      city: existingCity || "San Francisco",
      region: "California",
      postalCode: existingPostal || "94105",
      street: existingStreet || "101 Market St, Financial District",
    };
  }
  if (raw.toLowerCase().includes("united kingdom") || raw.toLowerCase().includes("britain") || raw.toLowerCase().includes("england")) {
    return {
      country: "United Kingdom",
      countryCode: "GB",
      flag: "🇬🇧",
      city: existingCity || "London",
      region: "Greater London",
      postalCode: existingPostal || "EC2A 4NE",
      street: existingStreet || "25 Old Street, Silicon Roundabout",
    };
  }
  if (raw.toLowerCase().includes("ukraine")) {
    return {
      country: "Ukraine",
      countryCode: "UA",
      flag: "🇺🇦",
      city: existingCity || "Kyiv",
      region: "Kyiv City",
      postalCode: existingPostal || "01001",
      street: existingStreet || "14 Khreshchatyk St, Pechersk",
    };
  }
  if (raw.toLowerCase().includes("germany") || raw.toLowerCase().includes("deutschland")) {
    return {
      country: "Germany",
      countryCode: "DE",
      flag: "🇩🇪",
      city: existingCity || "Berlin",
      region: "Berlin",
      postalCode: existingPostal || "10115",
      street: existingStreet || "Friedrichstraße 43, Mitte",
    };
  }
  if (raw.toLowerCase().includes("canada")) {
    return {
      country: "Canada",
      countryCode: "CA",
      flag: "🇨🇦",
      city: existingCity || "Toronto",
      region: "Ontario",
      postalCode: existingPostal || "M5V 2T6",
      street: existingStreet || "200 Bay St, Financial Core",
    };
  }
  if (raw.toLowerCase().includes("emirates") || raw.toLowerCase().includes("dubai")) {
    return {
      country: "United Arab Emirates",
      countryCode: "AE",
      flag: "🇦🇪",
      city: existingCity || "Dubai",
      region: "Dubai Emirate",
      postalCode: existingPostal || "00000",
      street: existingStreet || "Sheikh Zayed Rd, DIFC Gate Tower 4",
    };
  }

  // Fallback for general location
  const code = raw.length === 2 ? raw.toUpperCase() : "US";
  const flag = existingFlag && existingFlag !== "🌐" ? existingFlag : countryCodeToFlag(code);
  return {
    country: raw || "United States",
    countryCode: code,
    flag: flag || "🇺🇸",
    city: existingCity || "San Francisco",
    region: "California",
    postalCode: existingPostal || "94105",
    street: existingStreet || "101 Market St, Financial District",
  };
}
