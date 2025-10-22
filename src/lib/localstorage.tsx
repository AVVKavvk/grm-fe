import { Button } from "@/components/ui/button";

export const PARTNER_SOURCE = "source";

export const setSource = (source: string) => {
  localStorage.setItem(PARTNER_SOURCE, source);
};

export const getSource = () => {
  return localStorage.getItem(PARTNER_SOURCE);
};

export const removeSource = () => {
  localStorage.removeItem(PARTNER_SOURCE);
};

export const getSourceConfig = (source: string) => {
  switch (source.toLowerCase()) {
    case "zomato":
      return {
        name: "Zomato",
        redirectUrl: "https://www.zomato.com",
      };
    case "swiggy":
      return {
        name: "Swiggy",
        redirectUrl: "https://www.swiggy.com/",
      };
    case "playo":
      return {
        name: "Playo",
        redirectUrl: "https://playo.co/",
      };
    case "burraa":
      return {
        name: "Burraa",
        redirectUrl:
          "https://www.burraa.com/activities/skf-goa-river-marathon-2025",
      };
    case "hudle":
      return {
        name: "Hudle",
        redirectUrl: "https://hudle.in/events/goa-river-marathon/649260",
      };
    case "ifinish":
      return {
        name: "IFinish",
        redirectUrl: "https://www.ifinish.in/running/SKF2025",
      };
    case "district":
      return {
        name: "District",
        redirectUrl: "https://www.district.in/",
      };
    default:
      return {
        name: "Direct",
        redirectUrl: "https://www.ifinish.in/running/SKF2025",
      };
  }
};

export const GetRegisterButton = () => {
  const source = getSource() || "direct";
  const sourceConfig = getSourceConfig(source);

  return (
    <a href={sourceConfig.redirectUrl} target="_blank">
      <Button variant="cta" size="lg">
        Register Now
      </Button>
    </a>
  );
};

export const GetRegisterButtonForCarbLoadingFiesta = () => {
  const source = getSource() || "direct";
  const sourceConfig = getSourceConfig(source);

  return (
    <a href={sourceConfig.redirectUrl} target="_blank">
      <Button variant="cta" size="lg">
        Register for Carb Loading Fiesta
      </Button>
    </a>
  );
};

export const GetRegisterButtonForRecoveryRave = () => {
  const source = getSource() || "direct";
  const sourceConfig = getSourceConfig(source);

  return (
    <a href={sourceConfig.redirectUrl} target="_blank">
      <Button variant="cta" size="lg">
        Register for Recovery Rave
      </Button>
    </a>
  );
};

export const GetRegisterButtonForEvent = (eventName: string) => {
  const source = getSource() || "direct";
  const sourceConfig = getSourceConfig(source);

  return (
    <a href={sourceConfig.redirectUrl} target="_blank">
      <Button variant="cta" size="lg">
        Register for {eventName}
      </Button>
    </a>
  );
};
