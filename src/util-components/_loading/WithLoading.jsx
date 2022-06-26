import * as React from "react";
import { Spinner } from "../../ui-components";

export const WithLoading = React.memo(({ loading, children }) => {
  if (loading === true) {
    return <Spinner />;
  }
  return <>{children}</>;
});
