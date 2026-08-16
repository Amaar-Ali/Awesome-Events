import heroVenue from "@/assets/hero-venue.jpg";
import heroMain from "@/assets/hero-main.jpg";
import setup from "@/assets/setup.jpg";
import guests from "@/assets/guests.jpg";
import production from "@/assets/production.jpg";
import corporate from "@/assets/corporate.jpg";
import empty from "@/assets/empty.jpg";
import destination from "@/assets/destination.jpg";

export type MediaItem = {
  id: string;
  src: string;
  w: number;
  h: number;
  alt: string;
  category: "venue" | "wedding" | "setup" | "celebration" | "production" | "corporate" | "destination";
  usedIn: string;
};

/**
 * Media registry — every image is used exactly once across the site.
 * Replace `src` values with real Awesome Event photography when available.
 */
export const media = {
  heroVenue: {
    id: "AE-01",
    src: heroVenue,
    w: 1600,
    h: 1008,
    alt: "Event hall under construction with stage truss and blue wash lighting",
    category: "venue",
    usedIn: "hero-background",
  },
  heroMain: {
    id: "AE-02",
    src: heroMain,
    w: 912,
    h: 1312,
    alt: "Wedding reception stage with a large floral installation at night",
    category: "wedding",
    usedIn: "hero-foreground",
  },
  setup: {
    id: "AE-03",
    src: setup,
    w: 800,
    h: 1000,
    alt: "Crew member assembling a floral arch in a dark venue during setup",
    category: "setup",
    usedIn: "hero-left / transformation",
  },
  guests: {
    id: "AE-04",
    src: guests,
    w: 800,
    h: 900,
    alt: "Guests dancing under beams of blue light with confetti in the air",
    category: "celebration",
    usedIn: "hero-right / celebrations",
  },
  production: {
    id: "AE-05",
    src: production,
    w: 900,
    h: 700,
    alt: "Lighting control desk in front of an LED wall and overhead truss",
    category: "production",
    usedIn: "capabilities",
  },
  corporate: {
    id: "AE-06",
    src: corporate,
    w: 1600,
    h: 912,
    alt: "Corporate product launch stage with a large LED backdrop and seated audience",
    category: "corporate",
    usedIn: "corporate",
  },
  empty: {
    id: "AE-07",
    src: empty,
    w: 1200,
    h: 800,
    alt: "Empty banquet hall before setup with bare floor and a shaft of daylight",
    category: "venue",
    usedIn: "transformation-before",
  },
  destination: {
    id: "AE-08",
    src: destination,
    w: 1600,
    h: 912,
    alt: "Outdoor destination dinner in a lit palace courtyard at dusk",
    category: "destination",
    usedIn: "destination",
  },
} satisfies Record<string, MediaItem>;

export const CONTACT = {
  phoneDisplay: "+91 84477 16668",
  tel: "tel:+918447716668",
  address:
    "House No. 121B, Street No. 12, near Radha Kishan Mandir, Sangam Vihar, Delhi 110080",
  maps:
    "https://www.google.com/maps/search/?api=1&query=House+No.+121B%2C+Street+No.+12%2C+near+Radha+Kishan+Mandir%2C+Sangam+Vihar%2C+Delhi+110080",
};
