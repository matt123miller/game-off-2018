import Container from '@/interfaces/Container';

export default class ContainerItem implements Container {
  public name: string;
  public size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public toString(): string {
    return `Name: ${this.name},
    Size: ${this.size}ml`;
  }
}
