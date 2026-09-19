/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { DEFAULT_SITE_CONFIG, type SiteConfig, type SocialContact, type AddressItem } from "@/types/site-editor";

interface SiteConfigContextType {
  config: SiteConfig;
  isLoading: boolean;
  refetch: () => Promise<void>;
  updateLocalConfig: (updated: SiteConfig) => void;
  primaryPhone?: SocialContact;
  primaryWhatsApp?: SocialContact;
  primaryTelegram?: SocialContact;
  primaryViber?: SocialContact;
  primaryEmail?: SocialContact;
  primaryAddress?: AddressItem;
  socialsGrouped: {
    whatsapp: SocialContact[];
    telegram: SocialContact[];
    viber: SocialContact[];
    phone: SocialContact[];
    email: SocialContact[];
    instagram: SocialContact[];
    facebook: SocialContact[];
    custom: SocialContact[];
  };
  addresses: AddressItem[];
}

const SiteConfigContext = createContext<SiteConfigContextType | null>(null);

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [isLoading, setIsLoading] = useState(false);

  const fetchConfig = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/public/site-config");
      if (res.ok) {
        const data = await res.json();
        if (data.ok && data.config) {
          setConfig(data.config);
        }
      }
    } catch {
      // Keep DEFAULT_SITE_CONFIG as fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const updateLocalConfig = useCallback((updated: SiteConfig) => {
    setConfig(updated);
  }, []);

  const primaryPhone = useMemo(() => {
    return (
      config.socialContacts.find((c) => c.type === "phone" && c.isPrimary) ||
      config.socialContacts.find((c) => c.type === "phone")
    );
  }, [config.socialContacts]);

  const primaryWhatsApp = useMemo(() => {
    return (
      config.socialContacts.find((c) => c.type === "whatsapp" && c.isPrimary) ||
      config.socialContacts.find((c) => c.type === "whatsapp")
    );
  }, [config.socialContacts]);

  const primaryTelegram = useMemo(() => {
    return (
      config.socialContacts.find((c) => c.type === "telegram" && c.isPrimary) ||
      config.socialContacts.find((c) => c.type === "telegram")
    );
  }, [config.socialContacts]);

  const primaryViber = useMemo(() => {
    return (
      config.socialContacts.find((c) => c.type === "viber" && c.isPrimary) ||
      config.socialContacts.find((c) => c.type === "viber")
    );
  }, [config.socialContacts]);

  const primaryEmail = useMemo(() => {
    return (
      config.socialContacts.find((c) => c.type === "email" && c.isPrimary) ||
      config.socialContacts.find((c) => c.type === "email")
    );
  }, [config.socialContacts]);

  const primaryAddress = useMemo(() => {
    return (
      config.addresses.find((a) => a.isPrimary) ||
      config.addresses[0]
    );
  }, [config.addresses]);

  const socialsGrouped = useMemo(() => {
    const grouped = {
      whatsapp: [] as SocialContact[],
      telegram: [] as SocialContact[],
      viber: [] as SocialContact[],
      phone: [] as SocialContact[],
      email: [] as SocialContact[],
      instagram: [] as SocialContact[],
      facebook: [] as SocialContact[],
      custom: [] as SocialContact[],
    };

    for (const item of config.socialContacts) {
      if (item.type in grouped) {
        grouped[item.type as keyof typeof grouped].push(item);
      } else {
        grouped.custom.push(item);
      }
    }

    return grouped;
  }, [config.socialContacts]);

  const value = useMemo<SiteConfigContextType>(
    () => ({
      config,
      isLoading,
      refetch: fetchConfig,
      updateLocalConfig,
      primaryPhone,
      primaryWhatsApp,
      primaryTelegram,
      primaryViber,
      primaryEmail,
      primaryAddress,
      socialsGrouped,
      addresses: config.addresses,
    }),
    [
      config,
      isLoading,
      fetchConfig,
      updateLocalConfig,
      primaryPhone,
      primaryWhatsApp,
      primaryTelegram,
      primaryViber,
      primaryEmail,
      primaryAddress,
      socialsGrouped,
    ]
  );

  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

function deriveFromConfig(config: SiteConfig) {
  const pick = (type: SocialContact["type"]) =>
    config.socialContacts.find((c) => c.type === type && c.isPrimary) ||
    config.socialContacts.find((c) => c.type === type);

  const grouped = {
    whatsapp: [] as SocialContact[],
    telegram: [] as SocialContact[],
    viber: [] as SocialContact[],
    phone: [] as SocialContact[],
    email: [] as SocialContact[],
    instagram: [] as SocialContact[],
    facebook: [] as SocialContact[],
    custom: [] as SocialContact[],
  };
  for (const item of config.socialContacts) {
    if (item.type in grouped) grouped[item.type as keyof typeof grouped].push(item);
    else grouped.custom.push(item);
  }

  return {
    primaryPhone: pick("phone"),
    primaryWhatsApp: pick("whatsapp"),
    primaryTelegram: pick("telegram"),
    primaryViber: pick("viber"),
    primaryEmail: pick("email"),
    primaryAddress: config.addresses.find((a) => a.isPrimary) || config.addresses[0],
    socialsGrouped: grouped,
    addresses: config.addresses,
  };
}

export function SiteConfigOverrideProvider({
  config,
  children,
}: {
  config: SiteConfig;
  children: React.ReactNode;
}) {
  const derived = useMemo(() => deriveFromConfig(config), [config]);
  const value = useMemo<SiteConfigContextType>(
    () => ({
      config,
      isLoading: false,
      refetch: async () => {},
      updateLocalConfig: () => {},
      ...derived,
    }),
    [config, derived],
  );
  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) {
    return {
      config: DEFAULT_SITE_CONFIG,
      isLoading: false,
      refetch: async () => {},
      updateLocalConfig: () => {},
      primaryPhone: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "phone"),
      primaryWhatsApp: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "whatsapp"),
      primaryTelegram: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "telegram"),
      primaryViber: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "viber"),
      primaryEmail: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "email"),
      primaryAddress: DEFAULT_SITE_CONFIG.addresses[0],
      socialsGrouped: {
        whatsapp: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "whatsapp"),
        telegram: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "telegram"),
        viber: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "viber"),
        phone: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "phone"),
        email: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "email"),
        instagram: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "instagram"),
        facebook: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "facebook"),
        custom: [],
      },
      addresses: DEFAULT_SITE_CONFIG.addresses,
    };
  }
  return ctx;
}
