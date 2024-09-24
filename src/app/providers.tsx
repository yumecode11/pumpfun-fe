import ThemeProvider from "@/contexts/ThemeProvider";
import type { FC, ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      themes={["dark"]}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
