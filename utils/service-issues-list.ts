export interface Issue {
  name: string;
  subIssues: string[];
}

export const issueTypes: string[] = [
  "General Maintenance",
  "Structural Issues",
  "Safety Concerns",
  "External Areas",
  "Interior Concerns",
  "Utility Problems",
  "Miscellaneous",
  "Emergency Situations",
];

export const subIssueTypes: Record<string, string[]> = {
  "General Maintenance": [
    "Leaking faucet",
    "Broken light fixture",
    "Clogged drain",
    "Malfunctioning door lock",
  ],
  "Structural Issues": [
    "Cracked foundation",
    "Leaning walls",
    "Roof damage",
    "Sagging floors",
  ],
  "Safety Concerns": [
    "Exposed wiring",
    "Slippery floors",
    "Broken handrails",
    "Faulty smoke detectors",
  ],
  "External Areas": [
    "Damaged fences",
    "Potholes in parking lot",
    "Graffiti on walls",
    "Overgrown vegetation",
  ],
  "Interior Concerns": [
    "Peeling paint",
    "Water stains on ceiling",
    "Mold growth",
    "Faulty HVAC system",
  ],
  "Utility Problems": [
    "Power outage",
    "Water leak",
    "Gas leak",
    "Internet connectivity issues",
  ],
  Miscellaneous: [
    "Noise complaints",
    "Trash accumulation",
    "Pest infestation",
    "Parking violations",
  ],
  "Emergency Situations": ["Fire", "Flood", "Gas leak", "Medical emergency"],
};
