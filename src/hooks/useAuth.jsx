import React, { use } from "react";
import { AuthContexts } from "../contexts/AuthContexts/AuthContexts";

const useAuth = () => {
  const authInfo = use(AuthContexts);
  return authInfo;
};

export default useAuth;

// ekhon amake ar sob jaygay authContexts k import korte hbe na jekhane jekhane amar info dorkar ami useAuth k import korlei sob peye jabo,, customs hooks er ei ekta subhida.....