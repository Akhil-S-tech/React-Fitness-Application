export enum SelectedPage {
    Home= "home",
    Benefits = "benafits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  
  }

  export interface BenefitType {
    icon:JSX.Element;
    title:string;
    description:string;
  }