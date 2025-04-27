export interface IServiceRecord {
  serviceId?: string;
  bikeId: string;
  serviceDate: Date;
  completionDate?: Date;
  status: "pending" | "in_progress" | "done";
  description: string;
}

export interface IUpdateServiceRecord {
  serviceId: string;
  completionDate?: Date;
}
