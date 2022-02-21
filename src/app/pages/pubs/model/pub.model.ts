export interface PubModel {
  id: number;
  name: string;
  address: string;
  startTime: string;
  endTime: string;
}

export interface ApiModel {
  recordsFiltered: number,
  data: Array<PubModel>
}
