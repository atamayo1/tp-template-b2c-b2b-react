import { msalConfigB2C } from "./authConfig.b2c";
import { msalConfigB2B } from "./authConfig.b2b";

const useB2C = import.meta.env.VITE_AUTH_MODE === "b2c";

export const msalConfig = useB2C ? msalConfigB2C : msalConfigB2B;
