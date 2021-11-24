import { Component } from '@angular/core';

import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  id: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Consideraciones generales',
    id: 'start'
  },
  {
    name: 'Laboratorio de datos',
    id: 'lab',
    children: [
      { name: 'Estadísticas iniciales', id: 'lab-statistics' },
      { name: 'Filtros', id: 'lab-filters' },
      { name: 'Descarga', id: 'lab-downloads' },
      { name: 'Gráficas', id: 'lab-graphics' },
      { name: 'Mapa', id: 'lab-map' },
    ]
  },
  {
    name: 'Comparativa estatal',
    id: 'com',
    children: [
      { name: 'Filtros', id: 'com-filters' },
      { name: 'Gráficas', id: 'com-graphics' },
      { name: 'Datos', id: 'com-data' },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: string;
}

@Component({
  selector: 'app-methodolgical',
  templateUrl: './methodological.component.html',
  styleUrls: ['./methodological.component.css']
})
export class MethodologicalComponent {

  divActive = 'start';
  divActiveChild = '';
  divStart = 'start';

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
      id: node.id
    };
  }

  // tslint:disable-next-line:member-ordering
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  // tslint:disable-next-line:member-ordering
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  // tslint:disable-next-line:member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  response(data: ExampleFlatNode): void {

    // console.log(data);

    if (data.id === 'start') {
      this.divStart = data.id;
      // console.log(this.divStart);

    }
    else if (data.id.slice(3, 4) === '-' ) {
      this.divStart = 'lab';
      this.divActive = data.id.slice(0, 4);
    }
    // else {
    // if (data.id.slice(3, 4) === '-') {


    // }
    this.divActiveChild = data.id;

    // console.log(this.divActive);
    // console.log(this.divActiveChild);
    // console.log(data.id.slice(3, 4));

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
