// data-table-types.ts
export interface dataTableTypes {
  id: number;
  fullname: string;
  role: "admin" | "dealer" | "customer";
  username: string;
  status: "active" | "inactive";
}
