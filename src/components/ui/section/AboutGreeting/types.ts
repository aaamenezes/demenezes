interface ProfileImage {
  alt: string;
  responsiveImage: {
    src: string;
  };
  width: number;
  height: number;
}

export interface AboutGreetingProps {
  greetingHeading: string;
  greetingSubheading: string;
  greetingDescription: string;
  profileImage: ProfileImage;
}
