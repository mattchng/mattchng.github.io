import React from "react";
import Navbar from "@/components/Navbar";

const categories = [
  {
    label: "sports",
    items: ["golf", "skiing", "badminton", "tennis", "volleyball", "cycling", "swimming", "table tennis"],
  },
  {
    label: "films",
    items: ["interstellar", "dune", "black panther", "your name", "oppenheimer", "everything everywhere all at once"],
  },
  {
    label: "nyc food",
    items: ["editing in progress"],
  },
  {
    label: "board/card games",
    items: ["catan", "ticket to ride", "coup", "scout", "startups", "chess"],
  },
  /*{
    label: "books",
    items: ["I am not jessica chen", "crying in H-mart", "item 3"],
  },
  {
    label: "music",
    items: ["All In - Marino", "Best Of Me - BTS", "Everything Goes On - Porter Robinson", "Piano Concerto No. 2 - Rachmaninoff"],
  },
  */
  {
    label: "other hobbies",
    items: ["music", "photography", "digital design", "traveling", "cooking", "learning languages (currently korean)"],
  },
];

export default function InterestsPage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 pb-16 fade-in">
          <p className="interests-intro">My interests and hobbies</p>
          <div className="interests-grid">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p className="interests-label">{cat.label}</p>
                <ul className="space-y-2 mt-2">
                  {cat.items.map((item) => (
                    <li key={item} className="interests-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
