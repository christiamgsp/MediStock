import { Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root',
})
export class Stock {
  listaMedicamentos: Medicamento[] = [
    { id: 1, nombre: 'Paracetamol', precio: 5, stock: 20 },
    { id: 2, nombre: 'Ibuprofeno', precio: 8, stock: 15 },
    { id: 3, nombre: 'Amoxicilina', precio: 12, stock: 10 },
  ];

  constructor() {}

  buscarPorId = (idBuscado: number | string) =>
    this.listaMedicamentos.find((m) => m.id === idBuscado);

  obtenerTotalProductos = () => this.listaMedicamentos.length;

  realizarVenta = (id: number | string) => {
    const med = this.buscarPorId(id);
    if (med && med.stock > 0) {
      med.stock--;
    } else {
      alert('¡No hay existencias para vender!');
    }
  };
  eliminarMedicamento = (idParaBorrar: number | string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este medicamento?')) {
      this.listaMedicamentos = this.listaMedicamentos.filter((m) => m.id !== idParaBorrar);
    }
  };

  private guardarEnLocal() {
    localStorage.setItem('mis_medicamentos', JSON.stringify(this.listaMedicamentos));
  }

  constructor() {
    const datosGuardados = localStorage.getItem('mis_medicamentos');
    if (datosGuardados) {
      this.listaMedicamentos = JSON.parse(datosGuardados);
    }
  }
}
