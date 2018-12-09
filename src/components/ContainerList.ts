import ContainerItem from './ContainerItem';
import Container from '@/interfaces/Container';

export function listContainers(): Container[] {

    return [
        new ContainerItem('Stubby', 330),
        new ContainerItem('Bottle', 500),
        new ContainerItem('Pint', 586),
        new ContainerItem('Keg', 50000),
    ];
}
