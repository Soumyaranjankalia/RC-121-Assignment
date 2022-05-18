import React, { useState } from "react";
import ContactCard from "./ContactCard";

const intiState = [
  {
    id: 1,
    first_name: "Annette",
    last_name: "Murphy",
    email: "sara.cruz@example.com",
    phone: "+91-9337755215",
    image:
      "https://i.pinimg.com/736x/82/09/e5/8209e55e7515b1dea0132b59ddeafe1a.jpg",
  },
  {
    id: 2,
    first_name: "Theresa",
    last_name: "Watson",
    email: "michael.mitchell@example.com",
    phone: "+91-9123456545",
    image:
      "https://static.independent.co.uk/s3fs-public/indy100/ZyDYM6kpRe/1524-d1wie0.jpg",
  },
  {
    id: 3,
    first_name: "Cody",
    last_name: "Howard",
    email: "glen.lane@example.com",
    phone: "+91-9123456545",
    image: "https://cdn.acidcow.com/pics/20141023/some_memories_17.jpg",
  },
  {
    id: 4,
    first_name: "Max",
    last_name: "Lane",
    email: "dwight.fleming@example.com",
    phone: "+91-9123456545",
    image:
      "https://www.thephoblographer.com/wp-content/uploads/2017/03/e0e9ec46704143.58607bfd06519.jpg",
  },
  {
    id: 5,
    first_name: "Marvin",
    last_name: "Fisher",
    email: "kelly.howard@example.com",
    phone: "+91-9123456545",
    image:
      "https://michaelpaullane.com/wp-content/uploads/2020/09/SC-Vazquez-5-of-21_EDITED-768x512.jpg",
  },
  {
    id: 6,
    first_name: "Brooklyn",
    last_name: "Mccoy",
    email: "chad.stephens@example.com",
    phone: "+91-9123456545",
    image: "https://live.staticflickr.com/1902/44145247555_77412e7193_b.jpg",
  },
];

export default function ContactList() {
  const [contactList, setContactList] = useState(intiState);

  return (
    <div>
      {contactList.map((e) => {
        return (
          <ContactCard
            first_name={e.first_name}
            last_name={e.last_name}
            email={e.email}
            image={e.image}
            phone={e.phone}
          />
        );
      })}
    </div>
  );
}
