import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  tarefas = [
    {id: 1, texto: 'Aprender Angular', concluida: true},
    {id: 2, texto: 'Criar primeiro projeto', concluida:false}
  ];

  novaTarefaTexto = '';

  adicionarTarefa() {
    if (this.novaTarefaTexto.trim()) {
      const novaTarefa = {
        id: Date.now(),
        texto: this.novaTarefaTexto,
        concluida: false
      };
      this.tarefas.push(novaTarefa);
      this.novaTarefaTexto = '';
    }
  }


  removerTarefa(tarefaId: number) {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== tarefaId);
  }

  alternarStatus(tarefaId: number) {
    this.tarefas = this.tarefas.map(tarefa => tarefa.id === tarefaId ? { ...tarefa, concluida: !tarefa.concluida } : tarefa);
  }
}