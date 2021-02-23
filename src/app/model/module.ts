export class Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  orderButton: string;

  constructor(id: number, title: string, subtitle: string, icon: string, orderButton: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.orderButton = orderButton;
  }
}
