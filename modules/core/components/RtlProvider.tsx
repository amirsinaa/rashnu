import { CacheProvider } from "@emotion/react";
import createCache, { Options } from "@emotion/cache";
import React from "react";
import { useRouter } from "next/router";
import stylisPluginRtl from "stylis-plugin-rtl";

export type LangDirection = "rtl" | "ltr";

type CreateCacheOptions = {
  [KEY in LangDirection]: Options;
}

const options: CreateCacheOptions = {
  ltr: { key: "css-en" },
  rtl: { key: "css-fa", stylisPlugins: [stylisPluginRtl as any] },
};


type RtlProviderProps = {
  children: React.ReactNode;
};

export function RtlProvider(props: RtlProviderProps) {
  const { locale } = useRouter();

  const { children } = props;
  const direction = locale == "en" ? "ltr" : "rtl";

  return (
    <CacheProvider value={createCache(options[direction])}>
      {children}
    </CacheProvider>
  );
}
