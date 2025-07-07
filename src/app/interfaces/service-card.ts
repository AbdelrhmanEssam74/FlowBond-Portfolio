export interface ServiceCard {
  id: string;
  index: number;
  class: string; // The full class string like "services-item _01"
  image: string;
  title: string;
  paragraph: string;
  listItems: string[]; // An array of strings for the list items
}
