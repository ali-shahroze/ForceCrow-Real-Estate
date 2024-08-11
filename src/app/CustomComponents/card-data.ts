// card-data.ts

export class CardData {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
  
    constructor(
      imageSrc: string,
      altText: string,
      title: string,
      description: string
    ) {
      this.imageSrc = imageSrc;
      this.altText = altText;
      this.title = title;
      this.description = description;
    }
  }