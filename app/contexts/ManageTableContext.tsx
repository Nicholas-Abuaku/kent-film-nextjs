import { createContext, useState } from "react";

interface ManageTableContextProps {
  tableUpdate: boolean;
  setTableUpdate: (newState: boolean) => void;
}

export const ManageTableContext = createContext<ManageTableContextProps>({
  tableUpdate: false,
  setTableUpdate: () => {}, // Placeholder for actual implementation
});
